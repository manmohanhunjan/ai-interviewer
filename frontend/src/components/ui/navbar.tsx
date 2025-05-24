import { Link } from 'react-router'
import { InteractiveHoverButton } from '../magicui/interactive-hover-button'
import { Button } from './button'

const Navbar = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#eaedf1] px-10 py-3">
      <Link to="/" className="flex items-center gap-4">
        <div className="flex items-center gap-4 text-[#101518]">
          <div className="size-4">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em]">
            Interview AI
          </h2>
        </div>
      </Link>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Button variant="ghost">For Job Seekers</Button>
          <Button variant="ghost">For Employers</Button>
        </div>
        <div className="flex gap-2">
          <InteractiveHoverButton>Sign Up</InteractiveHoverButton>
          <InteractiveHoverButton>Log In</InteractiveHoverButton>
        </div>
      </div>
    </header>
  )
}

export default Navbar
