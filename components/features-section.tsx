'use client';

import { FadeIn } from './fade-in';

export function FeaturesSection() {
  const features = [
    {
      icon: '📝',
      title: '식사 기록 & 자기 모니터링',
      desc: '매일의 식사 시간, 상황, 감정을 기록하며 비기능적인 인지·행동 패턴을 스스로 인식합니다. 규칙적인 식사 습관의 토대를 만들어 갑니다.',
    },
    {
      icon: '📊',
      title: '감정 리포트 & 이상행동 분석',
      desc: '식사 기록 분석을 통해 만족도 통계와 이상행동 트리거를 예측합니다. 데이터 기반으로 자신의 패턴을 객관적으로 이해할 수 있습니다.',
    },
    {
      icon: '📚',
      title: '주차별 인지행동치료 프로그램',
      desc: '섭식문제의 인지 왜곡을 치료하기 위한 체계적인 프로그램을 주차별로 제공합니다. 올바른 식습관을 직접 학습하고 실천합니다.',
    },
  ];

  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              어떻게 치료하나요?
            </h2>
            <p className="text-lg text-gray-500">
              인지행동치료(CBT)의 핵심 치료 기전을 앱으로 구현했습니다
            </p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white border-2 border-gray-100 rounded-3xl p-10 transition-all duration-400 group hover:-translate-y-2 hover:border-amber-300 hover:shadow-[0_24px_48px_rgba(245,158,11,0.12)]">
                <div className="text-5xl mb-6">{f.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {f.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
