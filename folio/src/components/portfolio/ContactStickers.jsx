import { useState } from 'react';
import meOutline from '../../assets/me-outline.png';
import loveYourMother from '../../assets/sticker-love-your-mother.png';
import eyeSticker from '../../assets/sticker-eye.png';
import musicStars from '../../assets/sticker-music-stars.png';
import spiralSticker from '../../assets/sticker-spiral.jpg';
import ufSeal from '../../assets/sticker-uf.png';

const stickers = [
  {
    id: 'portrait',
    src: meOutline,
    alt: '',
    className: 'contact-sticker-portrait',
  },
  {
    id: 'love-your-mother',
    src: loveYourMother,
    alt: 'Love Your Mother sticker',
    className: 'contact-sticker-lym',
  },
  {
    id: 'uf',
    src: ufSeal,
    alt: 'University of Florida seal',
    className: 'contact-sticker-uf',
  },
  {
    id: 'eye',
    src: eyeSticker,
    alt: '',
    className: 'contact-sticker-eye',
  },
  {
    id: 'music-stars',
    src: musicStars,
    alt: '',
    className: 'contact-sticker-music',
  },
  {
    id: 'spiral',
    src: spiralSticker,
    alt: '',
    className: 'contact-sticker-spiral',
  },
];

function ContactStickers() {
  const [bouncing, setBouncing] = useState(null);

  const handleClick = (id) => {
    setBouncing(null);
    requestAnimationFrame(() => setBouncing(id));
  };

  return (
    <div className="contact-stickers" aria-hidden="true">
      {stickers.map((sticker) => (
        <button
          key={sticker.id}
          type="button"
          className={`contact-sticker ${sticker.className}${bouncing === sticker.id ? ' contact-sticker-bounce' : ''}`}
          onClick={() => handleClick(sticker.id)}
          onAnimationEnd={() => setBouncing((cur) => (cur === sticker.id ? null : cur))}
          tabIndex={-1}
        >
          <img src={sticker.src} alt={sticker.alt} />
        </button>
      ))}
    </div>
  );
}

export default ContactStickers;
