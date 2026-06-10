import Link from 'next/link';
import FeaturedTutors from '../components/FeaturedTutors';

export default function Home() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>TutorConnect Dehradun</h1>
      <p>Find trusted tutors near you.</p>
      <Link href="/tutors">Browse Tutors</Link>
      <FeaturedTutors />
    </main>
  );
}
