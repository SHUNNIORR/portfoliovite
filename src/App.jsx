import React, {useState, useEffect} from 'react'
import './App.css';
import Cover from "./components/cover/Cover"
import Navbar from "./components/navbar/Navbar"
import About from "./components/about/About"
import Info from "./components/info/Info"
import Footer from "./components/footer/Footer"
import Skills from './components/skills/Skills';
import RecentWork from './components/recentWork/RecentWork';

function App() {
  const[scrollHeight, setScrollHeight]=useState(0);
  const handleScroll= () =>{
    const  position = window.pageYOffset;
    setScrollHeight(position);
    console.log(scrollHeight);
  }
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
  },[scrollHeight])
  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight}></Navbar>
      <Cover isScrolling={scrollHeight}></Cover>
      <About isScrolling={scrollHeight}></About>
      <Skills></Skills>
      <RecentWork></RecentWork>
      <Info></Info>
      <Footer></Footer>
    </div>
  );
}

export default App;
