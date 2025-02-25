import React, { useEffect } from 'react';

function IntroScreen({ onEnterPress }) {
  useEffect(() => {
    // Escuchar la tecla "Enter"
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        onEnterPress();
      }
    };

    // Agregar el evento al cargar el componente
    window.addEventListener('keydown', handleKeyDown);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onEnterPress]);

  return (
    <div className="screen1 pixel-rounded">
      <h1 className="title">Portfolio Fausto Lopez</h1>
      {/* Al hacer clic en el mensaje "Press Enter", también se activa el cambio */}
      <div className="press-enter pixel-rounded" onClick={onEnterPress}>
        Press Enter
      </div>
    </div>
  );
}

export default IntroScreen;
