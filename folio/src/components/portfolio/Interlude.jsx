import Reveal from './Reveal.jsx';

function Interlude() {
  return (
    <section className="interlude">
      <Reveal as="p" className="interlude-text" once={false} amount={0.6} y={10}>
        <span className="accent">Carpe Diem, indeed.</span>
      </Reveal>
    </section>
  );
}

export default Interlude;
