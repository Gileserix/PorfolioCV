import React, { useState } from "react";
import IntroScreen from "./pages/introScreen";
import ProfileScreen from "./pages/profileScreen";
import './index.css';

function App() {
  const [showProfileScreen, setShowProfileScreen] = useState(false);

  // Maneja el evento de cambio de pantalla
  const handleEnterPress = () => {
    setShowProfileScreen(true);
  };

  return (
    <div className="container">
      {!showProfileScreen ? (
        <IntroScreen onEnterPress={handleEnterPress} />
      ) : (
        <ProfileScreen />
      )}
    </div>
  );
}

export default App;