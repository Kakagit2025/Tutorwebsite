import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ddd', display: 'flex', gap: '1rem' }}>
      <Link href="/">Home</Link>
      <Link href="/tutors">Tutors</Link>
    </nav>
  );
}
