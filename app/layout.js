import './globals.css';
import Footer from './components/Footer';

export const metadata = {
  title: 'بناء تطبيقات ذكاء اصطناعي باستخدام Next.js',
  description: 'نطور تطبيقات الـ AI بتقنيات Next.js متقدمة وحلول SEO برمجية لرواد الأعمال والمطورين',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
