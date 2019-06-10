import React from 'react';
//import {lazy,Suspense} from 'react';
import Offre from './Offre.js'
import './offersDisplay.css'

const colors = ["color1","color2","color3","color4","color5"];
const bcolors = ["bcolor1","bcolor2","bcolor3","bcolor4","bcolor5"]
//const Offre = lazy(() => import('./Offre'));

const OffersDisplay = (props) => {
    
    let display=[];
    var randomNumber;
    var offres = props.offresArr;
    for(let i=0; i< offres.length; i++){
        randomNumber = Math.round(Math.random()*4);
         
        display.push(<div className="col-lg-6 col-sm-12 d-flex pb-3 colone" key={"idx"+i}>
            <Offre color={colors[randomNumber]} bcolor={bcolors[randomNumber]} offre={offres[i]}/>
        </div>)
    }
    
        
    
    return <div className="container">
        <div className ="row equal">
            {display}
        </div>
        
    </div>
}

export default OffersDisplay;