import '../style/MusicGrid.css';

export default function MusicGrid() {
  const notes = Array.from({ length: 300 }); // You can tweak this
  return (
    <div className="music-grid">
      {notes.map((_, i) => (
        <span className="note" key={i}>♫</span>
      ))}
    </div>
  );
}