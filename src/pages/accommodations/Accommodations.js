import React from 'react';
import { useParams, Navigate } from "react-router-dom";

import DatasAccommodations from '../../datas/datas.json';
import Slideshow from '../../components/slideshow/Slideshow';
import Infos from '../../components/infos/Infos';
import Collapse from '../../components/collapse/Collapse';

import './_accommodations.scss'


function Accommodations() {
    const { id } = useParams();
    const cardAccommodation = DatasAccommodations.find((accommodation) => accommodation.id === id);

    if (!cardAccommodation) {
        return <Navigate to="/error" replace />;
    }
  
    const equipments = cardAccommodation?.equipments.map((equipment, i) => (
        <React.Fragment key={i}>
            <span>{equipment}</span>
            <br />
        </React.Fragment>
    ));
  
    return (
        <div className='accommodations'>
            <main>
                <Slideshow slides={cardAccommodation?.pictures} />
                <Infos id={id} />

                <div className='collapse_accommodation'>
                    <div className='collapse_accommodation_description'>
                        <Collapse title="Description" content={cardAccommodation?.description} />
                    </div>
                    <div className='collapse_accommodation_equipment'>
                        <Collapse title="Équipements" content={equipments} />
                    </div>
                </div>
            </main>
        </div>
    );
};
  
export default Accommodations;