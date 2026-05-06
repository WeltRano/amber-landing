'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-2xl bg-white/90 border-b border-gray-200 shadow-sm'
          : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Image
            src="/assets/amberrx-icon.png"
            alt="AmberRx 로고"
            width={40}
            height={40}
            className="rounded-xl"
          />
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            AmberRx
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://dha-metabolic-app-web-dev.weltcorp.com?channel=qr&product=amberrx"
            className="px-6 py-2.5 bg-amber-500 text-white rounded-full font-semibold no-underline transition-all duration-300 text-sm border-2 border-transparent hover:bg-amber-600 hover:scale-105 hover:shadow-[0_8px_24px_rgba(245,158,11,0.4)] focus-visible:outline-3 focus-visible:outline-amber-500 focus-visible:outline-offset-4"
            style={{ touchAction: 'manipulation' }}
          >
            닥터쌤 상담
          </a>
          <a
            href="https://apps.apple.com/us/app/amberrx/id1660221123"
            className="hidden sm:inline-flex px-6 py-2.5 border-2 border-amber-500 text-amber-600 rounded-full font-semibold no-underline transition-all duration-300 text-sm hover:bg-amber-50 hover:scale-105 focus-visible:outline-3 focus-visible:outline-amber-500 focus-visible:outline-offset-4"
            style={{ touchAction: 'manipulation' }}
          >
            앱 다운로드
          </a>
        </div>
      </div>
    </header>
  );
}
