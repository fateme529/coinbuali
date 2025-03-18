import { useState, useEffect } from "react";
import Loader from "./Loader"; // بارگذاری کامپوننت Loader
import './App.css'; // فایل CSS شما
import frameImage from './Frame2.png'; // وارد کردن تصویر




function App() {
  const [isLoading, setIsLoading] = useState(true); // وضعیت بارگذاری
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(true); // نمایش پیام خوش آمد گویی
  const [isContentVisible, setIsContentVisible] = useState(false); // نمایش محتوای اصلی

  // تنظیم زمان لودینگ
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // بعد از ۳ ثانیه لودینگ تمام می‌شود
    }, 3000);

    return () => clearTimeout(timer); // پاک کردن تایمر هنگام تغییر وضعیت
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const welcomeTimer = setTimeout(() => {
        setIsWelcomeVisible(false); // بعد از ۲ ثانیه پیام خوش آمد گویی مخفی می‌شود
        setIsContentVisible(true); // محتوای اصلی نمایش داده می‌شود
      }, 2000);

      return () => clearTimeout(welcomeTimer); // پاک کردن تایمر پیام خوش آمد گویی
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loader />; // در حین بارگذاری کامپوننت Loader را نمایش بده
  }

  return (
    <div className="App">
      <header className="App-header">
        {isWelcomeVisible && <h1>Welcome to BualiCoin!</h1>} 
        {isContentVisible && (
          <div>
            {}
            
            <img src={frameImage}  alt="Your Content" />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
