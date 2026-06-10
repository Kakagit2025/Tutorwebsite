import Navbar from '../components/Navbar';

export const metadata = {
  title: 'TutorConnect Dehradun',
  description: 'Find trusted tutors in Dehradun',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
