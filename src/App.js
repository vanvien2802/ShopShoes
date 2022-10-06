import { Routes, Route, Link } from 'react-router-dom';

import { AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import $ from 'jquery';
import { useEffect, useState } from 'react';

import styles from './App.module.css'

import HomePage from './components/Home'
import Colection from './components/Home/Colection'
import Footer from './components/Home/Footer'
import Shoes from './components/Shoes'
import RacingBoots from './components/RacingBoots'
import Contact from './components/Contact'
import Home from './components/Home'

function App() {
  const [colection, setColection] = useState(0);
  console.log(colection);
  useEffect(() => {
    if (colection == 0) {
      const ev = $('.Colection_titlePage__M24PI');
      ev.hide();
    }
  })
  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <div className={styles.logoHeader}>
          <img src="./img/logo.png"></img>
        </div>
        <div className={styles.navBar}>
          <Link to="/" onClick={() => setColection(0)}>Home</Link>
          <Link to="/Colection" onClick={() => setColection(1)}>Colection</Link>
          <Link to="/Shoes">Shoes</Link>
          <Link to="/RacingBoots">Racing Boots</Link>
          <Link to="/Contact">Contact</Link>
        </div>
        <div className={styles.iconHeader}>
          <AiOutlineSearch color="white" fontSize="30px" />
          <AiOutlineShopping color="white" fontSize="30px" />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Colection" element={<Colection />}></Route>
        <Route path="/Shoes" element={<Shoes />}></Route>
        <Route path="/RacingBoots" element={<RacingBoots />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
