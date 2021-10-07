import React from "react";
import mcit from "../2x/mcit@2x.png";
import poweredBy from "../2x/poweredBy@2x.png";
// import creativeHQ from '../2x/CHQ_logo@2x.png';
import creativeHQ from '../2x/cq-logo@2x.png';
import techChampions from '../2x/techChamp@2x.png';

const HeroComponents = () => {
  return (
    <div className="backgroundImage">
    <div className='hero'>
    
    <div className='hero_title-image'>
        <img src ={techChampions}  className='hero_title-image-ls'/>
    </div>

    <div className='hero_title-h'>
        <h1 className="hero_title-h1">Tech Champions</h1>
        <h2 className="hero_title-h2">Accelerator Showcase</h2>
    </div>

    <div className="hero_logos">
    <div className="hero_logos-left">
        <img src={poweredBy}  className='hero_logos-left-poweredby'/>
        <img src={creativeHQ}  className='hero_logos-left-cq'  />
    </div>
    <div className="hero_logos-right">
        <img src={mcit} className='hero_logos-right-img'/>
    </div>

    </div>
    </div>
    </div>
  );
};
export default HeroComponents;
