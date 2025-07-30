import React from 'react';

const ScrollToTop: React.FC = () => {
  return (
    <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      ↑
    </button>
  );
};

export default ScrollToTop;