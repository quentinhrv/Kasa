import React from 'react';

import DatasAccommodations from '../../datas/datas.json';
import FullStar from '../../assets/full-star.png'
import EmptyStar from '../../assets/empty-star.png';
import './_infos.scss';



function Infos({ id }) {
    const accommodation = DatasAccommodations.find((accommodation) => accommodation.id === id);
    const { title, location, tags, host, rating } = accommodation;

    const RatingStars = () => {
        const stars = [];
        const totalStars = 5;

        for (let i = 0; i < totalStars; i++) {
            const starImage = i < rating ? FullStar : EmptyStar;
            stars.push(<img key={i} src={starImage} alt="star" />);
        }

        return stars;
    };

    return (
        <div className='infos'>
            <div className='accommodation'>
                <h1 className='accommodation_title'>{title}</h1>
                <p className='accommodation_location'>{location}</p>
                {tags && (
                    <div className="accommodation_tags">
                        {tags.map((tag, index) => (
                            <span className='tags' key={index}>{tag}</span>
                        ))}
                    </div>
                )}        
            </div>

            <div className='host'>
                <div className='host_infos'>
                    <p className='host_name'>{host.name}</p>
                    <img className='host_picture' alt='Profil' src={host.picture} />
                </div>
                <div className="rating">
                    {RatingStars().map((star, index) => (
                        <span className='star' key={index}>{star}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Infos;