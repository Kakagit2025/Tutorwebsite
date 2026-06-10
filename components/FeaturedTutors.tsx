import tutors from '../data/tutors.json';
import TutorCard from './TutorCard';

export default function FeaturedTutors() {
  const featuredTutors = tutors.filter(t => t.featured && t.approved);

  return (
    <section>
      <h2>Featured Tutors</h2>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {featuredTutors.map((tutor) => (
          <TutorCard key={tutor.id} id={tutor.id} name={tutor.name} subject={tutor.subject} area={tutor.area} experience={tutor.experience} />
        ))}
      </div>
    </section>
  );
}
