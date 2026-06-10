export const metadata = {
  title: 'TutorConnect Dehradun',
  description: 'Find trusted tutors in Dehradun',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
