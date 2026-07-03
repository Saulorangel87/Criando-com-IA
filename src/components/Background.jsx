import './Background.css';

/**
 * Background decorativo com gradiente animado e orbs flutuantes.
 * Fica fixo atrás de todo o conteúdo (z-index: 0).
 */
function Background() {
  return (
    <>
      <div className="bg" aria-hidden="true" />
      <div className="orb orb--a" aria-hidden="true" />
      <div className="orb orb--b" aria-hidden="true" />
    </>
  );
}

export default Background;
