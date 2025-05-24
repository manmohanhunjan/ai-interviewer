import { useState, useRef, useEffect } from 'react'
import { Microphone } from './components/svg/Microphone'

// Define the SpeechRecognition interface
interface SpeechRecognition extends EventTarget {
  continuous: boolean
  interimResults: boolean
  lang: string
  start(): void
  stop(): void
  onresult: (event: SpeechRecognitionEvent) => void
  onerror: (event: SpeechRecognitionErrorEvent) => void
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string
}

interface SpeechRecognitionEvent extends Event {
  resultIndex: number
  results: SpeechRecognitionResultList
}

interface SpeechRecognitionResultList {
  length: number
  item(index: number): SpeechRecognitionResult
  [index: number]: SpeechRecognitionResult
}

interface SpeechRecognitionResult {
  isFinal: boolean
  length: number
  item(index: number): SpeechRecognitionAlternative
  [index: number]: SpeechRecognitionAlternative
}

interface SpeechRecognitionAlternative {
  transcript: string
  confidence: number
}

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognition
    webkitSpeechRecognition: new () => SpeechRecognition
  }
}

export const InterviewScreen = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [interviewerQuestion, setInterviewerQuestion] = useState(
    'What are your strengths?'
  )
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const recognitionRef = useRef<SpeechRecognition | null>(null)
  const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null)

  useEffect(() => {
    // Check if browser supports speech recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition
      recognitionRef.current = new SpeechRecognition()

      if (recognitionRef.current) {
        recognitionRef.current.continuous = true
        recognitionRef.current.interimResults = true
        recognitionRef.current.lang = 'en-IN'

        recognitionRef.current.onresult = (event) => {
          let finalTranscript = ''

          for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript
            }
          }

          if (finalTranscript) {
            setTranscript((prev) => prev + finalTranscript + ' ')
          }
        }

        recognitionRef.current.onerror = (event) => {
          console.error('Speech recognition error:', event.error)
        }
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
    }
  }, [])

  // Text-to-speech for interviewer question
  useEffect(() => {
    // Initialize speech synthesis for the interviewer question
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel()

      // Create a new utterance with the interviewer question
      speechSynthesisRef.current = new SpeechSynthesisUtterance(
        interviewerQuestion
      )

      // Optional: Configure voice properties
      speechSynthesisRef.current.rate = 1.0 // Speed: 0.1 to 10
      speechSynthesisRef.current.pitch = 1.5 // Pitch: 0 to 2
      speechSynthesisRef.current.volume = 1.0 // Volume: 0 to 1

      // Optional: Try to use a female voice (fallback to default if not available)
      const voices = window.speechSynthesis.getVoices()
      const femaleVoice = voices.find(
        (voice) =>
          voice.name.includes('female') ||
          voice.name.includes('Samantha') ||
          voice.name.includes('Google UK English Female')
      )

      if (femaleVoice) {
        speechSynthesisRef.current.voice = femaleVoice
      }

      // Speak the question
      window.speechSynthesis.speak(speechSynthesisRef.current)
    }
  }, [interviewerQuestion])

  // // Function to speak the question on demand
  // const speakQuestion = () => {
  //   if ('speechSynthesis' in window) {
  //     // Cancel any ongoing speech
  //     window.speechSynthesis.cancel()

  //     // Create a new utterance with the interviewer question
  //     const utterance = new SpeechSynthesisUtterance(interviewerQuestion)

  //     // Speak the question
  //     window.speechSynthesis.speak(utterance)
  //   }
  // }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })

      // Start speech recognition
      if (recognitionRef.current) {
        recognitionRef.current.start()
      }

      // Start media recording (optional - for audio file)
      mediaRecorderRef.current = new MediaRecorder(stream)
      mediaRecorderRef.current.start()

      setIsRecording(true)
    } catch (error) {
      console.error('Error starting recording:', error)
    }
  }

  const stopRecording = () => {
    // Stop speech recognition
    if (recognitionRef.current) {
      recognitionRef.current.stop()
    }

    // Stop media recording
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop()
    }

    setIsRecording(false)
  }

  const handleRecordClick = () => {
    if (isRecording) {
      stopRecording()
    } else {
      startRecording()
    }
  }

  const handleSubmit = () => {
    // Stop recording if still active
    if (isRecording) {
      stopRecording()
    }

    // Save transcript somewhere if needed
    console.log('Submitted transcript:', transcript)

    // Clear the transcript
    setTranscript('')
  }

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex p-4 @container">
          <div className="flex w-full flex-col gap-4 items-center">
            <div className="flex gap-4 flex-col items-center">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJO4kRhU0Uv-FqHHdgGk1jOW6dsl8jhVC1Sm1563hAV__SGL4Ccyf0oIABXrRKCVMTYmap7MTaQUFQBQLeI_M1doejLuggH1ZwbAMVuNdEyZm096S553_l7YYmTZWgOKPE1IlN8U2JkcHNcQ5vwjQtXEHu6g_J7QBajIuyMh094eEGovu9vb_dCFIdalq9rLmErRYXyZl5qGl5B-QHgxU61UaxwxKMtBEsSaB-LluvgwquRJ-PauZx-GH4GvHRqKwu0BY9aeGXfec")',
                }}></div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                  Sarah
                </p>
                <p className="text-[#60768a] text-base font-normal leading-normal text-center">
                  AI Interviewer
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-[#111518] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
          {interviewerQuestion}
        </h2>
        <div className="flex px-4 py-3 justify-center">
          <button
            onClick={handleRecordClick}
            className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 gap-2 pl-4 text-sm font-bold leading-normal tracking-[0.015em] ${
              isRecording
                ? 'bg-red-500 text-white animate-pulse'
                : 'bg-[#f0f2f5] text-[#111518]'
            }`}>
            <div
              className={isRecording ? 'text-white' : 'text-[#111518]'}
              data-icon="Microphone"
              data-size="20px"
              data-weight="regular">
              <Microphone />
            </div>
            <span className="truncate">
              {isRecording ? 'Stop Recording' : 'Record'}
            </span>
          </button>
        </div>
        <div className="flex px-4 py-3 justify-center">
          <button
            onClick={handleSubmit}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#0b80ee] text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Submit</span>
          </button>
        </div>
        <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Conversation Transcript
        </h2>
        <p className="text-[#111518] text-base font-normal leading-normal pb-3 pt-1 px-4">
          Interviewer: {interviewerQuestion}
        </p>
        <p className="text-[#111518] text-base font-normal leading-normal pb-3 pt-1 px-4">
          Candidate: {transcript || 'Click record to start speaking...'}
        </p>
      </div>
    </div>
  )
}
