import tutors from '../../../data/tutors.json';

export default function TutorProfile({ params }: { params: { id: string } }) {
  const tutor = tutors.find((t) => t.id === Number(params.id));

  if (!tutor) {
    return <div>Tutor not found.</div>;
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
