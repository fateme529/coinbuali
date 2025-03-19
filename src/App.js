import { useState, useEffect } from "react";
import Loader from "./Loader"; 
import './App.css'; 
import frameImage from './Frame2.png'; 
import frameSigup from './MacBook Air - 2.png'; 




function App() {
  const [isLoading, setIsLoading] = useState(true); 
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(true); 
  const [isContentVisible, setIsContentVisible] = useState(false); 
  const [isRegisterVisible, setIsRegisterVisible] = useState(false); 
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const welcomeTimer = setTimeout(() => {
        setIsWelcomeVisible(false); 
        setIsContentVisible(true); 
      }, 2000);

      return () => clearTimeout(welcomeTimer); 
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loader />; 
  }

  return (
    <div className="App">
      <header className="App-header">
        {isWelcomeVisible && <h1>Welcome to BualiCoin!</h1>} 
        {isContentVisible &&  !isRegisterVisible && (
          <div className="image-container">

            <img src={frameImage}  alt="Your Content" />
            <button className="signup-button"onClick={() => setIsRegisterVisible(true)}>ثبت نام</button>
          </div>
        )}
     
        {isRegisterVisible && (
          <div className="register-container">
            <h2>فرم ثبت نام</h2>
            <form>
              <input type="text" placeholder="نام کاربری" />
              <input type="password" placeholder="رمز عبور" />
              <button type="submit">ثبت نام</button>
            </form>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
