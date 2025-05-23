export const InterviewScreen = () => {
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
          What are your strengths?
        </h2>
        <div className="flex px-4 py-3 justify-center">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f0f2f5] text-[#111518] gap-2 pl-4 text-sm font-bold leading-normal tracking-[0.015em]">
            <div
              className="text-[#111518]"
              data-icon="Microphone"
              data-size="20px"
              data-weight="regular">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256">
                <path d="M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V232a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z"></path>
              </svg>
            </div>
            <span className="truncate">Record</span>
          </button>
        </div>
        <div className="flex px-4 py-3 justify-center">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#0b80ee] text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Submit</span>
          </button>
        </div>
        <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Conversation Transcript
        </h2>
        <p className="text-[#111518] text-base font-normal leading-normal pb-3 pt-1 px-4">
          Interviewer: What are your strengths?
        </p>
        <p className="text-[#111518] text-base font-normal leading-normal pb-3 pt-1 px-4">
          Candidate: I excel in problem-solving and teamwork.
        </p>
      </div>
    </div>
  )
}
