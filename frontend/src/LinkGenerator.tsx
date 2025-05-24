import { Link } from 'react-router'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'

export const LinkGenerator = () => {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-[512px] py-5 max-w-[960px] flex-1">
        <h2 className="text-[#0d151c] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
          Generate Interview Link
        </h2>
        <p className="text-[#0d151c] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
          Enter the candidate's email address to generate a unique interview
          link.
        </p>
        <div className="flex w-full justify-center flex-wrap gap-4 px-4 py-3">
          <label className="flex flex-row gap-2 items-center min-w-40 w-full max-w-[400px]">
            <Input placeholder="Candidate's Email" />
            <Button variant="secondary">
              <a
                href="https://temp-mail.org/en/10minutemail"
                target="_blank"
                rel="noopener noreferrer">
                Get Temporary Email
              </a>
            </Button>
          </label>
        </div>
        <div className="flex px-4 py-3 justify-center">
          <Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4">
            <Link to="/interview">
              <span className="truncate">Generate Link</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
