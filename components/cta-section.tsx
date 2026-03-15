'use client';

import { FadeIn } from './fade-in';

export function CtaSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            건강한 식습관,
            <br />
            지금 시작하세요
          </h2>
          <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto">
            혼자 고민하지 마세요. 식약처가 허가한 디지털 치료와
            라이프닥터 쌤이 함께합니다.
          </p>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://dha-metabolic-app-web-dev.weltcorp.com?channel=qr"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-amber-500 text-white rounded-2xl font-semibold text-lg no-underline transition-all duration-300 hover:bg-amber-600 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(245,158,11,0.35)] focus-visible:outline-3 focus-visible:outline-amber-500 focus-visible:outline-offset-4"
              style={{ touchAction: 'manipulation' }}
            >
              👩‍⚕️ 라이프닥터 쌤에게 상담받기
            </a>
            <a
              href="https://apps.apple.com/us/app/amberrx/id1660221123"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-gray-200 text-gray-700 rounded-2xl font-semibold text-lg no-underline transition-all duration-300 hover:border-amber-300 hover:bg-amber-50 hover:-translate-y-1 focus-visible:outline-3 focus-visible:outline-amber-500 focus-visible:outline-offset-4"
              style={{ touchAction: 'manipulation' }}
            >
              App Store에서 다운로드
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
