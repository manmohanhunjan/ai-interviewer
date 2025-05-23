// TestimonialSection.tsx
export default function TestimonialSection() {
  return (
    <section>
      <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        What Our Users Say
      </h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAiuz966UwbT-EQnMdxcLplYG5ewriwEyVqtFZTv23cKs7YW2BA2IatJ6Ajf9kcr--kL3TJPdWiqOKEnucK9yUR-VGt88PrFiTTLcoCAZyvJ242rZ6kFuO9n5ElEgUNTJ6-FHpKkVtYiIHa3oxNwcpwwy7DEYvIMt68IIPWFB9hZkfMaQSiTpe1MEQtUvsJZskq1tQ2B8UJQDgj9af9sCoQ4rM5KKsGl0U3ECwGDrgYQ3zb-qabDb-SUEUFl3jbk4M3jdkc2KaJfPs")',
              }}></div>
            <div>
              <p className="text-[#101518] text-base font-medium leading-normal">
                "Interview AI helped me identify my weaknesses and improve my
                answers significantly. I felt much more confident during my
                actual interview!"
              </p>
              <p className="text-[#5c748a] text-sm font-normal leading-normal">
                Sarah, Software Engineer
              </p>
            </div>
          </div>
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUBoX-4rfi42buAZbX8qq5Q3YLtr_w4Wn2tUdpcJ9cijk0quQayhOxPSHYjuXV-t6jPpA2-3M7b_R05NauI72nCesukpnZUVKCiz7btwgQUjfBONc44SbOhkcJ4wOX8GcEGooM1Zi5AJ76Q8A159w9zzsXSt8wyeH0EjhjEuFluddA1rwgOWCFzZFRprv3ucnEBnBm9rCyHQeyJP3KSxbT_j_m1780Ke7lHZYcbwYuCUXflJXWNgN2tOG43bK8cc_zKg6CWXR8xEw")',
              }}></div>
            <div>
              <p className="text-[#101518] text-base font-medium leading-normal">
                "The realistic simulations were invaluable. I was able to
                practice different types of questions and adapt my approach
                based on the feedback I received."
              </p>
              <p className="text-[#5c748a] text-sm font-normal leading-normal">
                David, Marketing Specialist
              </p>
            </div>
          </div>
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhuAk0J3mQKtIzT7yG-cyB1ZUoyYrUrs6og2CQ6hF7WHMPJ3G34uWbO-hTMiYkzyVzGQ6oKXVDyqbog84eVG5IOVZmU7EYf_xodptyTHVVrEyrdj8X2C3PvFCdSW8UmdPJsFyXhEq8xK4beOkBamQrZyJWpTSuMEdD25jRpRK7a4nysjls87qMzATx_CJAxaFR-H5MO1ASs62oQ6spGgTmVrZUpuUxDGuLohMQT8SdPJThBrbF6DhpMAfbM7e4RuDagixEzhTAV1Q")',
              }}></div>
            <div>
              <p className="text-[#101518] text-base font-medium leading-normal">
                "Thanks to Interview AI, I was able to articulate my skills and
                experience more effectively. I landed my dream job!"
              </p>
              <p className="text-[#5c748a] text-sm font-normal leading-normal">
                Emily, Project Manager
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
