import Link from 'next/link';

type TutorCardProps = {
  id: number;
  name: string;
  subject: string;
  area: string;
  experience: number;
};

export default function TutorCard({ id, name, subject, area, experience }: TutorCardProps) {
  return (
    <Link href={`/tutors/${id}`}>
      <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '12px', cursor: 'pointer' }}>
        <h3>{name}</h3>
        <p>Subject: {subject}</p>
        <p>Area: {area}</p>
        <p>Experience: {experience} years</p>
      </div>
    </Link>
  );
}
