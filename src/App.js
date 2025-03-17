import React, { useState } from "react";
import "./App.css";

function App() {
  // State برای ذخیره مقدار ورودی‌ها
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // تابع برای تغییر مقدار ورودی‌ها
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // تابع برای نمایش اطلاعات
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`نام: ${name}\nایمیل: ${email}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>فرم ورود اطلاعات</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">نام:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">ایمیل:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <button type="submit">ارسال</button>
        </form>
      </header>
    </div>
  );
}

export default App;
