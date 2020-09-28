import React from 'react';
import Header from "./components/header";
import Aside from "./components/aside";
import Main from "./components/main";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <Header/>
      <Aside/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
