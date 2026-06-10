import tutors from '../../data/tutors.json';
import TutorCard from '../../components/TutorCard';

export default function TutorsPage() {
  const approvedTutors = tutors.filter((tutor) => tutor.approved);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Find Tutors</h1>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {approvedTutors.map((tutor) => (
          <TutorCard
            key={tutor.id}
            name={tutor.name}
            subject={tutor.subject}
            area={tutor.area}
            experience={tutor.experience}
          />
        ))}
      </div>
    </main>
  );
}
