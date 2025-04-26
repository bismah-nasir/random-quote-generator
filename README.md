# ✨ Random Quote Generator

A simple and fun React-based Random Quote Generator that fetches inspiring quotes from APIs. Built using **React** and **Vite**, this app dynamically retrieves random quotes and displays them beautifully.

---

## 🚀 Project Overview

- 🔹 Fetches and displays a new quote each time the app is refreshed or the user requests a new one.
- 🔹 Uses **two different APIs** smartly:
  - **ZenQuotes API** (primary)
  - **FavQs API** (fallback if ZenQuotes API limit is exceeded)
- 🔹 Fully responsive and lightweight design.
- 🔹 Demonstrates the power of handling APIs and fallback mechanisms in React.

---

## 🛠️ Tech Stack  

- ⚛️ React (Functional Components, Hooks) 
- ⚡ Vite (for fast development and build)
- 🌐 Fetch API (to interact with external APIs)
- 🎨 CSS

---

## 📜 How It Works  

- **Primary API**:  
  - Fetches a random quote from **ZenQuotes** using:  
    ```
    zenURL = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/random?" + new Date().getTime());
    ```

- **Fallback API**:  
  - If access to ZenQuotes fails (limit crossed), the app automatically switches to **FavQs**:  
    ```
    favqsURL = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://favqs.com/api/qotd?" + new Date().getTime());
    ```

- **Note**:  
  - **AllOrigins** is used as a proxy to avoid CORS issues.
  - The `new Date().getTime()` ensures fresh API requests by appending a unique timestamp.

---

## 🎯 Features  

- ✔ Fetch and display a new random quote.  
- ✔ Automatically switches to a backup API when needed.  
- ✔ Responsive and mobile-friendly layout.  
- ✔ Error handling for failed API requests.  
- ✔ Clean and simple UI for better user experience.

---

## 📦 How to Run  

This project was created using **Vite**.

### 🔥 Prerequisites  

- Node.js and npm installed on your machine.

---

### 🛠️ Steps to Run  

1. **Clone the Repository**  
   ```
   git clone https://github.com/bismah-nasir/random-quote-generator
   
2. **Navigate to the Project Directory**
   ```
   cd random-quote-generator
   
3. **Install Dependencies**
   ```
   npm install

1. **Clone the Repository**  
   ```
   git clone https://github.com/bismah-nasir/random-quote-generator
   
2. **Navigate to the Project Directory**
   ```
   cd random-quote-generator
   
4. **Start the Development Server**
   ```
   npm run dev

4. **Open your Browser**

   Visit: http://localhost:5173/ (or whatever link Vite shows in the terminal)

---

## 🖼️ Screenshots

![image_alt](https://github.com/bismah-nasir/random-quote-generator/blob/0fe60b5155fa3c30a2c010b9b06790ee0d369bd0/quote-app.PNG)

---
