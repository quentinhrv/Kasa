import React from 'react';
import Banner from '../../components/banner/Banner';
import banner_about from '../../assets/banner_about.png';
import Collapse from "../../components/collapse/Collapse";
import CollapseDatas from "../../datas/collapses.json";
import './_about.scss';

function About() {
  return (
    <div className='about'>
        <main>
          <div className='banner_about'>
            <Banner image={banner_about} titre="" />
          </div>
          
          <div className="collapse">
          <div className="collapse__dropdown">
            {CollapseDatas.map((item) => {
              return (
                <div key={item.id}>
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
          </div>
        </div>
        </main>
    </div>
  );
}

export default About;