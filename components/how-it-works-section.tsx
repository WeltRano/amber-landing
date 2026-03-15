'use client';

import { FadeIn } from './fade-in';

export function HowItWorksSection() {
  const steps = [
    {
      num: '1',
      title: '앱 설치',
      desc: 'App Store에서 AmberRx를 다운로드하세요',
    },
    {
      num: '2',
      title: '초기 평가',
      desc: '현재 식습관과 상태를 간단히 평가합니다',
    },
    {
      num: '3',
      title: '맞춤 프로그램 시작',
      desc: 'CBT 기반 주차별 치료 프로그램을 진행합니다',
    },
    {
      num: '4',
      title: '습관 개선 & 유지',
      desc: '데이터 분석과 함께 건강한 식습관을 만들어갑니다',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-16">
            이렇게 시작하세요
          </h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-2xl font-bold text-white shadow-[0_8px_24px_rgba(245,158,11,0.3)] mx-auto mb-6">
                  {s.num}
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">
                  {s.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
