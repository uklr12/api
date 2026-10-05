import './globals.css';
import Footer from './components/Footer';

export const metadata = {
  title: 'Free AI Tools',
  description: 'A collection of free AI tools for students and employment',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="vlitXfG8D5yMX-IFKwWP0ClVi5LZ_cvdT_q_XcBiENI" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}