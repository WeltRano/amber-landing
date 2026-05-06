'use client';

import { useState } from 'react';
import { FadeIn } from './fade-in';

const faqs = [
  {
    q: 'AmberRx는 어떤 앱인가요?',
    a: 'AmberRx는 식약처 허가(제허25-346호)를 받은 인지행동치료(CBT) 기반의 디지털 치료기기입니다. 섭식장애 및 폭식을 유발하는 인지·행동 요소를 개선하여 증상을 치료하는 의료용 소프트웨어입니다.',
  },
  {
    q: '일반 다이어트 앱과 무엇이 다른가요?',
    a: 'AmberRx는 단순한 칼로리 기록이나 식단 관리 앱이 아닙니다. 미국정신과학회가 섭식장애 1차 치료법으로 강력히 권고하는 인지행동치료(CBT)를 앱으로 구현한 의료기기입니다. 식약처 임상자료심사를 통해 안전성과 유효성이 검증되었습니다.',
  },
  {
    q: '닥터쌤은 누구인가요?',
    a: '닥터쌤은 WELT의 AI 건강 상담 전문가입니다. SleepQ의 \'슬립닥터 쌤\'과 함께하는 AI 닥터 시리즈로, 식습관 개선, 감정 관리, 동기 부여 등 섭식 관련 고민에 대해 언제든 상담할 수 있습니다.',
  },
  {
    q: '누구에게 도움이 되나요?',
    a: '폭식, 감정적 식사, 식사 패턴 불규칙, 다이어트 반복으로 인한 섭식 문제를 겪고 계신 분에게 도움이 됩니다. 인지행동치료를 통해 음식과의 건강한 관계를 회복하고, 지속 가능한 식습관을 만들어 갈 수 있습니다.',
  },
  {
    q: '치료 기간은 얼마나 걸리나요?',
    a: '인지행동치료 프로그램은 주차별로 체계적으로 구성되어 있습니다. 개인차가 있으나, 꾸준히 프로그램을 따라가면 점진적으로 식습관과 인지 패턴의 변화를 경험할 수 있습니다.',
  },
  {
    q: '개인정보는 안전한가요?',
    a: '네, AmberRx는 의료기기로서 엄격한 개인정보 보호 기준을 준수합니다. 모든 건강 데이터는 암호화되어 안전하게 관리됩니다.',
  },
];

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-14">
            자주 묻는 질문
          </h2>
        </FadeIn>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                className={`bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                  activeIndex === i
                    ? 'border-amber-400'
                    : 'border-gray-100 hover:border-amber-300'
                }`}
              >
                <button
                  className="w-full px-7 py-5 flex justify-between items-center font-semibold text-base text-gray-900 text-left transition-colors duration-300 hover:bg-gray-50 cursor-pointer"
                  onClick={() =>
                    setActiveIndex(activeIndex === i ? null : i)
                  }
                  aria-expanded={activeIndex === i}
                >
                  <span>{faq.q}</span>
                  <span
                    className={`text-xl text-amber-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      activeIndex === i ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: activeIndex === i ? '500px' : '0',
                    padding:
                      activeIndex === i ? '0 28px 20px' : '0 28px 0',
                  }}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
