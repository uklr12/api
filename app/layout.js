import './globals.css';
import Footer from './components/Footer';

export const metadata = {
  title: 'Free AI Tools',
  description: 'A collection of free AI tools for students and employment',
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
