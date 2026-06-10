import { notFound } from 'next/navigation';
import tutors from '../../../data/tutors.json';

type TutorProfileProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return tutors.map((tutor) => ({
    id: tutor.id.toString(),
  }));
}

export default async function TutorProfile({ params }: TutorProfileProps) {
  const { id } = await params;
  const tutor = tutors.find((t) => t.id === Number(id));

  if (!tutor) {
    notFound();
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{tutor.name}</h1>
      <p>Subject: {tutor.subject}</p>
      <p>Area: {tutor.area}</p>
      <p>Experience: {tutor.experience} years</p>
    </main>
  );
}
