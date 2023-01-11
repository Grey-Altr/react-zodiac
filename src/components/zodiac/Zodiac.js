import './Zodiac.css';

export default function ZodiacData({ name, dates }) {
  return (
    <div className="zodiac-data">
      <img alt={name} src={`${process.env.PUBLIC_URL}/images/${name}.png`} />
      <span className="name">{name}</span>
      <span>{dates}</span>
    </div>
  );
}
