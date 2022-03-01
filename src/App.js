import { useState } from 'react';
import MainPage from './pages/MainPage';
import useSwitch from './hooks/useSwitch';

function App() {

  const [isDark, switchIsDark] = useSwitch(false);


  return (
    <div className={isDark ? "dark" : "light"}>
      <button onClick={switchIsDark}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;
