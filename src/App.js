import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import CrouselView from './components/Crousel/Crousel';
import DealCardViewPort from './components/DealCardViewPort/DealCardViewPort';
import BrandInFocusViewPort from './components/BrandInFocusViewPort/BrandInFocusViewPort';
import Footer from './components/Footer/Footer'



library.add(fas)





function App () {
    return (
      <div className="App container-fluid">
       <Header/>
       
       <CrouselView/>
        <DealCardViewPort/>

        <h2>BRANDS IN FOCUS</h2>
        <p>Show some brand love</p>
        

       <BrandInFocusViewPort/>
        <Footer  />
    
      </div>
    );
}

export default App;
