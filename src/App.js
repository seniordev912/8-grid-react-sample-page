import React from 'react';
import './App.css';
import Header from "./components/header";
import Content1 from "./components/content1";
import Content2 from "./components/content2";
import Footer from "./components/footer"


function App() {
  return (
    <div className="App">
      <Header />
      <Content1 />
      <Content2 />
      <Footer />
    </div>
  );
}

export default App;
