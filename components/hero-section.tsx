'use client';

import Image from 'next/image';
import { FadeIn } from './fade-in';

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white" id="hero">
      {/* Decorative gradient */}
      <div
        className="absolute -top-1/3 -right-[15%] w-[700px] h-[700px] rounded-full animate-[float_20s_ease-in-out_infinite]"
        style={{
          background:
            'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute -bottom-1/4 -left-[10%] w-[500px] h-[500px] rounded-full animate-[float_25s_ease-in-out_infinite_reverse]"
        style={{
          background:
            'radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 min-h-screen flex items-center pt-24 pb-12 lg:pt-0 lg:pb-0">
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center lg:justify-between gap-12 lg:gap-16">
          {/* Text */}
          <FadeIn className="text-gray-900 text-center lg:text-left max-w-2xl">
            {/* Approval badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-sm font-medium text-amber-700 mb-8">
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              식약처 허가 디지털 치료기기 · 제허25-346호
            </div>

            <h1
              className="font-bold leading-tight mb-6"
              style={{
                letterSpacing: '-0.02em',
                fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              }}
            >
              약 없이 식습관을 바로잡는
              <br />
              <span className="text-amber-500">디지털 치료의 시작</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-500 leading-relaxed mb-10">
              인지행동치료(CBT) 기반의 섭식장애 치료 앱.
              <br />
              미국정신과학회 1차 권고 치료법을 앱으로 경험하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://dha-metabolic-app-web-dev.weltcorp.com?channel=qr"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-white rounded-2xl font-semibold no-underline transition-all duration-300 text-base hover:bg-amber-600 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(245,158,11,0.35)] focus-visible:outline-3 focus-visible:outline-amber-500 focus-visible:outline-offset-4"
                style={{ touchAction: 'manipulation' }}
              >
                👩‍⚕️ 라이프닥터 쌤에게 먼저 상담받기
              </a>
              <a
                href="https://apps.apple.com/us/app/amberrx/id1660221123"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-2xl font-semibold no-underline transition-all duration-300 text-base hover:border-amber-300 hover:bg-amber-50 hover:-translate-y-1 focus-visible:outline-3 focus-visible:outline-amber-500 focus-visible:outline-offset-4"
                style={{ touchAction: 'manipulation' }}
              >
                <AppleIcon /> App Store에서 다운로드
              </a>
            </div>
          </FadeIn>

          {/* Phone mockup */}
          <FadeIn delay={0.2} className="flex-shrink-0">
            <div className="w-[240px] h-[490px] lg:w-[280px] lg:h-[570px] border-[10px] lg:border-[12px] border-[#1a1a1f] rounded-[40px] lg:rounded-[48px] bg-gradient-to-b from-amber-50 to-white shadow-[0_40px_80px_rgba(0,0,0,0.2)] relative overflow-hidden transition-transform duration-600 hover:-translate-y-3 hover:scale-[1.02]">
              {/* Notch */}
              <div className="absolute top-3 lg:top-4 left-1/2 -translate-x-1/2 w-[90px] lg:w-[120px] h-5 lg:h-7 bg-[#1a1a1f] rounded-b-[16px] lg:rounded-b-[20px] z-10" />
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 pt-12">
                <Image
                  src="/assets/amberrx-icon.png"
                  alt="AmberRx"
                  width={64}
                  height={64}
                  className="rounded-2xl shadow-lg mb-4"
                />
                <p className="text-sm font-bold text-gray-900 mb-1">AmberRx</p>
                <p className="text-xs text-gray-400 mb-6">식약처 허가 디지털 치료기기</p>
                <div className="w-full space-y-3">
                  <div className="h-8 bg-amber-100 rounded-lg" />
                  <div className="h-8 bg-amber-50 rounded-lg" />
                  <div className="h-8 bg-amber-100 rounded-lg" />
                  <div className="h-20 bg-gradient-to-r from-amber-100 to-amber-50 rounded-xl" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
