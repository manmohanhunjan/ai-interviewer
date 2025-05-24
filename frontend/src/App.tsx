import { Routes, Route } from 'react-router'
import { InterviewScreen } from './InterviewScreen'
import Landing from './Landing'
import { LinkGenerator } from './LinkGenerator'
import Navbar from './components/ui/navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/link-generator" element={<LinkGenerator />} />
        <Route path="/interview" element={<InterviewScreen />} />
      </Routes>
    </div>
  )
}

export default App
