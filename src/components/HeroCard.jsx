import { useState, useCallback } from 'react';
import './HeroCard.css';

const RESET_DELAY_MS = 2200;

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

/**
 * Card hero da landing page.
 * Exibe título, descrição e botão de CTA com feedback visual ao clicar.
 */
function HeroCard() {
  const [clicked, setClicked] = useState(false);

  const handleClick = useCallback(() => {
    if (clicked) return;
    setClicked(true);
    setTimeout(() => setClicked(false), RESET_DELAY_MS);
  }, [clicked]);

  return (
    <div className="card">
      <h1 className="card__title">
        Suas ideias merecem<br />
        <span className="card__title-highlight">ganhar vida.</span>
      </h1>

      <p className="card__description">
        Com o poder da Inteligência Artificial, crie sites, textos e
        designs profissionais em segundos — sem precisar de nenhum
        conhecimento técnico.
      </p>

      <button
        className="card__btn"
        onClick={handleClick}
        disabled={clicked}
        aria-label={clicked ? 'Redirecionando…' : 'Começar agora'}
        style={clicked ? { background: 'linear-gradient(130deg, #34d399, #3b82f6)' } : undefined}
      >
        {clicked ? '✓ Vamos lá!' : 'Começar agora'}
        {!clicked && <ArrowIcon />}
      </button>
    </div>
  );
}

export default HeroCard;
