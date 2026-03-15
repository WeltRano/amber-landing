import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AmberRx - 섭식장애 디지털 치료기기 | 식약처 허가',
  description:
    '식약처 허가(제허25-346호) 인지행동치료(CBT) 기반 섭식장애 디지털 치료기기. 라이프닥터 쌤 AI 상담으로 건강한 식습관을 만들어 보세요.',
  openGraph: {
    title: 'AmberRx - 섭식장애 디지털 치료기기',
    description:
      '식약처 허가 CBT 기반 섭식장애 치료 | 라이프닥터 쌤 AI 상담',
    images: ['/assets/amber-og.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="bg-white">{children}</body>
    </html>
  );
}
