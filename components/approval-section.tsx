'use client';

import { FadeIn } from './fade-in';

export function ApprovalSection() {
  const credentials = [
    {
      icon: '🏛️',
      title: '식약처 허가',
      desc: '디지털의료기기 제조허가\n제허25-346호 (2025.05)',
    },
    {
      icon: '🧠',
      title: '인지행동치료(CBT)',
      desc: '미국정신과학회 권고\n섭식장애 1차 치료법',
    },
    {
      icon: '🔬',
      title: '임상자료 심사 통과',
      desc: '식약처 임상자료심사 기반\n안전성·유효성 검증 완료',
    },
    {
      icon: '🏥',
      title: '전문의 개발',
      desc: '정신건강의학과 전문의가\n설계·검수한 치료 프로그램',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              식약처가 인정한 디지털 치료기기
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              AmberRx는 임상자료심사를 통해 식약처 허가를 받은 의료용 소프트웨어입니다.
            </p>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((c, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-[0_16px_32px_rgba(245,158,11,0.1)]">
                <div className="text-5xl mb-5">{c.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">
                  {c.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
