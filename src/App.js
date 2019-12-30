import React from 'react';
import './App.css';
import NavCompo from "./components/header/NavCompo";
import FooterComp from './components/footer/FooterComp';
import IntroComp from './components/main/IntroComp';
import Gallery from './components/main/Gallery';
import Employers from './components/main/Employers';
import Routas from './components/main/routers/Routas';

import portifolioLogo from './img/kyakivanfrank handwriting.png';

class App extends React.Component
{

render(){

  return (
    <div className="App">
    <header>
    <div className="container">
    <a href="/"><img id="Logo" src={portifolioLogo} alt="portifolioLogo"/></a>
    <NavCompo/>
    </div>
    </header>
    <body >
    <div className="adjusta"></div>
    <section className="intro"><IntroComp/></section>
    <section className="careerOptions"> <Routas/> </section>
   <section className="gallery"> <Gallery/></section>
    <section className="employers"><Employers/></section>
    </body>
    <footer>
    <FooterComp/>
    </footer>
    </div>
    )
}
}


export default App;
