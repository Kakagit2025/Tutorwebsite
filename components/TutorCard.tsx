type TutorCardProps = {
  name: string;
  subject: string;
  area: string;
  experience: number;
};

export default function TutorCard({ name, subject, area, experience }: TutorCardProps) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '12px' }}>
      <h3>{name}</h3>
      <p>Subject: {subject}</p>
      <p>Area: {area}</p>
      <p>Experience: {experience} years</p>
    </div>
  );
}
