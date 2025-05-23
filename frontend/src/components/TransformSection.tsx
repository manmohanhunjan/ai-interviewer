// TransformSection.tsx
export default function TransformSection() {
  return (
    <section className="flex flex-col gap-10 px-4 py-10 @container">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#101518] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
          Transform Your Interview Skills
        </h1>
        <p className="text-[#101518] text-base font-normal leading-normal max-w-[720px]">
          Our platform is designed to help you not just prepare, but excel in
          your interviews. With personalized feedback and realistic simulations,
          you'll be ready to impress any interviewer.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3lJ54-e25_1iS0QLS-YHTa8RSQ2HU7jDPfzSNtvReumfhbLGVmyZqfHCQCepF2S4q98ygp62Jzy5Lu4CuoKDl860UNlG1wy2HZFyVI5FVC9YujVkpTpoEHnT4ghqZzP97FnXQBFDu26d6y7z8OoVYRJkUTO-wH1a79kk5PaEsmyHMaQgL0h9dKVAuq7xIWlBhcHC2z-wK_nUJRWVIBOwJM74RERCbqKRzYZ20cTeu7i1mxsYOuK5Cgk_CT4PNLanZIcecgiWvEwY")',
            }}></div>
          <div>
            <p className="text-[#101518] text-base font-medium leading-normal">
              Boost Your Confidence
            </p>
            <p className="text-[#5c748a] text-sm font-normal leading-normal">
              Gain confidence by practicing in a safe environment and receiving
              constructive feedback.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAC31xDQX35i38aTErcaLwxjQ8CO-LcFGiHExyFcJjgvAqmDzQMpYj3IGdnMuYjyr4aU5yDSEwxe6gUbZyzoYvp-JM3micUoqBTexvzqeSOceIQii-BNgYkO6GX-MtcipBSNa12ebBdUfl7jN2gakUgFZlVNYSYO1FLIkrH_pVHn6J7Of2iNiVGI8wbOBuo74rFgIdN6T6Mol7-7Gc70i0STFQTJanrMTp6E2FsIAaoUUa14M3fO0ZsVU06nHqE7bldw7c2ydawZMw")',
            }}></div>
          <div>
            <p className="text-[#101518] text-base font-medium leading-normal">
              Improve Your Communication
            </p>
            <p className="text-[#5c748a] text-sm font-normal leading-normal">
              Refine your communication skills with AI-powered analysis of your
              responses and delivery.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuACFGYQe4RQUhMLRVFSSLE530d9--LLIdTQOMLx8ztPuCHgLMTWgOEn-vH5aQVwD-EMvwobUmxOHElWLTJtoDWzqDQ5VjOUobnvcjR4clXGDeQ40GctS7ykHRRQEdc4HdiTOtAjNRW4_Q_QxnK0OCeYAezq4nmwaWXoWYmnBcVAXnhoAoeRldSFGrMh7V8P6WrGXT4HRlDkvdrWHXcj2nVC5rYMwAdP3r6U72bf5iLqQvGjuED2U5qA3OVrjNHwXaGTncughUeZlVA")',
            }}></div>
          <div>
            <p className="text-[#101518] text-base font-medium leading-normal">
              Land Your Dream Job
            </p>
            <p className="text-[#5c748a] text-sm font-normal leading-normal">
              Increase your chances of success by mastering interview techniques
              and showcasing your abilities effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
