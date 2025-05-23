// ReadySection.tsx
import { Button } from './ui/button'

export default function ReadySection() {
  return (
    <section className="@container">
      <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-[#101518] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
            Ready to Take the Next Step?
          </h1>
          <p className="text-[#101518] text-base font-normal leading-normal max-w-[720px]">
            Sign up today and start practicing for your next interview with our
            AI-powered platform.
          </p>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="flex justify-center">
            <Button className="flex min-w-[84px] max-w-[480px] rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#dce8f3] text-[#101518] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
