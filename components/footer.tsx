'use client';

import Image from 'next/image';

export function Footer() {
  return (
    <footer className="py-14 bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/assets/amberrx-icon.png"
                alt="AmberRx 로고"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-lg font-bold text-white tracking-tight">
                AmberRx
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              식약처 허가 디지털 치료기기
              <br />
              CBT 기반 섭식장애 치료 솔루션
            </p>
          </div>

          {/* Company info */}
          <div className="text-sm text-gray-500 leading-relaxed md:text-right">
            <p className="font-medium text-gray-400 mb-1">주식회사 웰트 (WELT Corp.)</p>
            <p>대표: 강성지 | 사업자등록번호: 802-88-00501</p>
            <p>서울특별시 강남구 테헤란로 132 14층 (역삼동)</p>
            <p className="mt-2">
              <a
                href="mailto:info@weltcorp.com"
                className="text-amber-500/80 hover:text-amber-400 transition-colors"
              >
                info@weltcorp.com
              </a>
              {' · '}
              <a
                href="tel:02-527-5573"
                className="text-amber-500/80 hover:text-amber-400 transition-colors"
              >
                02-527-5573
              </a>
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-xs text-gray-600 leading-relaxed mb-6 max-w-4xl">
            AmberRx는 식품의약품안전처 허가(제허25-346호)를 받은 디지털 치료기기입니다.
            본 제품은 인지행동치료(CBT)를 활용하여 섭식장애 및 폭식을 유발하는 인지·행동 요소를
            개선하는 소프트웨어 기반 의료기기입니다. 의료 진단이나 처방을 대체하지 않으며,
            건강에 심각한 문제가 있으시면 반드시 전문의와 상담하시기 바랍니다.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} WELT Corp. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs">
              <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors">
                이용약관
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors">
                개인정보처리방침
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
