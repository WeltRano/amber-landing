'use client';

import { FadeIn } from './fade-in';

export function DoctorSamSection() {
  const topics = [
    { icon: '🍽️', label: '식습관 상담' },
    { icon: '💭', label: '감정·스트레스 관리' },
    { icon: '📈', label: '치료 진행 상황' },
    { icon: '🧠', label: '인지 왜곡 교정' },
    { icon: '💪', label: '동기 부여' },
  ];

  return (
    <section className="py-24 bg-amber-50/50" id="doctor-sam">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            라이프닥터 쌤
          </h2>
          <p className="text-lg text-gray-500 mb-4">
            AI 건강 상담 전문가
          </p>
        </FadeIn>

        <FadeIn>
          <div className="w-[160px] h-[160px] rounded-full bg-gradient-to-br from-amber-100 to-amber-50 border-4 border-amber-200/50 flex items-center justify-center text-[80px] mx-auto mb-8 shadow-[0_20px_40px_rgba(245,158,11,0.12)] animate-[bounce_3s_ease-in-out_infinite]">
            👩‍⚕️
          </div>
        </FadeIn>

        <FadeIn>
          <p className="text-xl text-gray-600 leading-relaxed mb-4 max-w-2xl mx-auto">
            식습관이 걱정될 때, 감정 조절이 힘들 때.
            <br />
            언제든 <strong className="text-amber-600">라이프닥터 쌤</strong>에게 이야기하세요.
          </p>
          <p className="text-gray-400 text-sm mb-10">
            SleepQ의 &apos;슬립닥터 쌤&apos;과 함께하는 WELT AI 닥터 시리즈
          </p>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {topics.map((tp) => (
              <div
                key={tp.label}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500/10 border border-amber-300/30 rounded-full text-sm font-medium text-amber-700 transition-all duration-300 hover:bg-amber-500/20 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(245,158,11,0.12)]"
              >
                {tp.icon} {tp.label}
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <a
            href="https://dha-metabolic-app-web-dev.weltcorp.com?channel=qr"
            className="inline-flex items-center gap-2 px-10 py-4 bg-amber-500 text-white rounded-2xl font-semibold text-lg no-underline transition-all duration-300 hover:bg-amber-600 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(245,158,11,0.35)] focus-visible:outline-3 focus-visible:outline-amber-500 focus-visible:outline-offset-4"
            style={{ touchAction: 'manipulation' }}
          >
            👩‍⚕️ 라이프닥터 쌤에게 먼저 상담받기
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
