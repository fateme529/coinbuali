import React, { useState, useEffect } from "react";
import Loader from "./Loader"; // بارگذاری کامپوننت Loader
import './App.css'; // فایل CSS شما
import frameImage from './Frame2.png'; // وارد کردن تصویر

function App() {
  const [isLoading, setIsLoading] = useState(true); // وضعیت بارگذاری
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false); // وضعیت نمایش پیام خوش آمد گویی

  // تنظیم زمان لودینگ
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // بعد از ۳ ثانیه لودینگ تمام می‌شود
      setIsWelcomeVisible(true); // نمایش پیام خوش آمد گویی بعد از لودینگ
    }, 3000); // ۳ ثانیه

    return () => clearTimeout(timer); // پاک کردن تایمر هنگام تغییر وضعیت
  }, []);

  if (isLoading) {
    return <Loader />; // در حین بارگذاری کامپوننت Loader را نمایش بده
  }

  return (
    <div className="App">
      <header className="App-header">
        {isWelcomeVisible && (
          <>
            <h1>Welcome to BualiCoin!</h1>
            {/* نمایش تصویر بعد از لودینگ */}
            <img
              src={frameImage} // استفاده از تصویر وارد شده
              alt="Coin"
              className="w-32 h-32 animate-pulse"
            />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
