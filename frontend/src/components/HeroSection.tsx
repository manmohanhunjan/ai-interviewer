// HeroSection.tsx
import { Button } from './ui/button'

export default function HeroSection() {
  return (
    <section className="flex flex-row gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row h-100 @[480px]:h-[480px] @[864px]:h-[600px] @[480px]:px-10 @[480px]:py-20 @[864px]:py-24">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC7aWzZoYBPCJR9OytpcFqh7NIPxi3SIZwl416lvTM71WhOi_jtk2W7t7kp-wKSHydwjo09vKnMsXaJZI3buJVBxDMvRgEa33riq8BRcEGhvYTf3Zr8b4muLdRqFc6D3y9xR8umKmZ8xu8sjo6_2mwEAtRTI5-RrFlJmOp2T_WrPD7V8_-qBkrrirzTmu2MoOTslfb2o0phEHr7pYlpZH7KpwEhJObfbYkcfhNfUZA9Dq6e3yphjbtc5zrV0ldG8kvOI5fRIGurHcI")',
        }}></div>
      <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center justify-between">
        <div className="flex flex-col gap-2 text-left">
          <h1 className="text-[#101518] text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
            Ace Your Next Interview with AI-Powered Practice
          </h1>
          <h2 className="text-[#101518] text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
            Prepare for success with our AI-driven interview simulator. Get
            personalized feedback and improve your performance with realistic
            practice scenarios.
          </h2>
        </div>
        <Button className="flex min-w-[84px] max-w-[480px] rounded-full h-10 px-4 ">
          Get Started
        </Button>
      </div>
    </section>
  )
}
