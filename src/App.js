import { useState, useEffect } from "react";
import Loader from "./Loader"; 
import './App.css'; 
import frameImage from './Frame2.png'; 
import frameSigup from './MacBook Air - 4.png'; 
import frameSabt from './MacBook Air - 7.png'; 




function App() {
  const [isLoading, setIsLoading] = useState(true); 
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(true); 
  const [isContentVisible, setIsContentVisible] = useState(false); 
  const [isRegisterVisible, setIsRegisterVisible] = useState(false); 
  const [isSigupVisible, setIsSigupVisible] = useState(false); 
 
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
        {isContentVisible &&  !isRegisterVisible && !isSigupVisible  && (
          <div className="image-container">

            <img src={frameImage}  alt="Your Content" />
            <button className="register-button"onClick={() => setIsSigupVisible(true)}>ثبت نام</button>
            <button className="signup-button"onClick={() =>setIsRegisterVisible(true) }>ورود</button>
          </div>
        )}
     
        {isRegisterVisible && !isSigupVisible && (
          <div className="register-container">
           <img src={frameSigup}  alt="sigup" />
            
            <form>
          
              <input className="input-username1"placeholder="نام کاربری" />
            
              <input className="input-password_v" placeholder="رمز عبور" />
      
              <button className="submit-button">واردشوید</button>
              <button 
        className="quetion1-button" 
        onClick={() => {setIsSigupVisible(true); setIsRegisterVisible(false);}} > هنوز هیچ اکانتی نداری؟ </button>

              
            </form>
          </div>
        )}
          {isSigupVisible && !isRegisterVisible &&(
          <div className="Sabt-container">
           <img src={frameSabt}  alt="sabt" />
            
            <form>
          
            <input className="input-name"placeholder="               نام " />

            <input className="input-familiname"placeholder="         نام خانوادگی" />
            
            <input className="input-phonenumber"placeholder="        شماره همراه" />

            <input className="input-gmail"placeholder="              ایمیل  " />

            <input className="input-password"placeholder="           رمز عبور   " />

            <input className="input-repetitionpassword"placeholder="       تکرار رمز عبور  " />
            
            <button className="sabt-button">ثبت</button> 
            <button 
            className="quetion2-button" 
            onClick={() => {setIsSigupVisible(false); setIsRegisterVisible(true);}} > اکانتی برای ورود دارید؟ </button>
                    
            </form>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
