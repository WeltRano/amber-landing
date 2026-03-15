'use client';

import { FadeIn } from './fade-in';

export function ConcernsSection() {
  const concerns = [
    {
      quote: '폭식 후 죄책감에 밤새 잠을 못 이뤄요',
      duration: '2년째',
      emoji: '😔',
    },
    {
      quote: '다이어트를 반복하다 보니 음식이 두려워졌어요',
      duration: '5년째',
      emoji: '😰',
    },
    {
      quote: '먹고 나서 토하는 습관을 혼자서는 끊을 수 없어요',
      duration: '3년째',
      emoji: '😣',
    },
    {
      quote: '감정이 힘들 때마다 음식으로 해결하게 돼요',
      duration: '1년째',
      emoji: '😞',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              혼자 고민하고 계신가요?
            </h2>
            <p className="text-lg text-gray-500">
              많은 분들이 같은 어려움을 겪고 있습니다
            </p>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-5">
          {concerns.map((c, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-7 flex gap-4 items-start transition-all duration-300 hover:bg-amber-50/50 hover:border-amber-200">
                <span className="text-3xl flex-shrink-0 mt-0.5">{c.emoji}</span>
                <div>
                  <p className="text-gray-800 font-medium leading-relaxed mb-2">
                    &ldquo;{c.quote}&rdquo;
                  </p>
                  <span className="text-xs text-gray-400 font-medium">
                    {c.duration}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
