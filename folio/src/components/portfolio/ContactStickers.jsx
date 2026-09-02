import { useState } from 'react';
import meOutline from '../../assets/me-outline.png';
import loveYourMother from '../../assets/love-your-mother.svg';

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
