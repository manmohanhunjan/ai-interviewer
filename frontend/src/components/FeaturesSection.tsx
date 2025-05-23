// FeaturesSection.tsx
export default function FeaturesSection() {
  return (
    <section className="flex flex-col gap-10 px-4 py-10 @container">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#101518] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
          Why Choose Interview AI?
        </h1>
        <p className="text-[#101518] text-base font-normal leading-normal max-w-[720px]">
          Our platform offers a comprehensive approach to interview preparation,
          combining AI-driven insights with realistic practice to boost your
          confidence and performance.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
        <div className="flex flex-1 gap-3 rounded-lg border border-[#d4dce2] bg-gray-50 p-4 flex-col">
          <div className="text-[#101518]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256">
              <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#101518] text-base font-bold leading-tight">
              Personalized Feedback
            </h2>
            <p className="text-[#5c748a] text-sm font-normal leading-normal">
              Receive detailed feedback on your answers, including areas for
              improvement and strengths to leverage.
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#d4dce2] bg-gray-50 p-4 flex-col">
          <div className="text-[#101518]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256">
              <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#101518] text-base font-bold leading-tight">
              Realistic Simulations
            </h2>
            <p className="text-[#5c748a] text-sm font-normal leading-normal">
              Experience interviews that mimic real-world scenarios, helping you
              adapt to different question types and interview styles.
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#d4dce2] bg-gray-50 p-4 flex-col">
          <div className="text-[#101518]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256">
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#101518] text-base font-bold leading-tight">
              Time-Efficient Practice
            </h2>
            <p className="text-[#5c748a] text-sm font-normal leading-normal">
              Practice anytime, anywhere, and optimize your preparation time
              with targeted feedback and efficient simulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
