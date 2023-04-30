import React from 'react'
import { Link } from 'react-router-dom'

import './Categories.css'

const Categories = () => {
    return (
        <div className='categories'>
            <div className='category'>
                <img src='https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/shared/desktop/image-category-thumbnail-headphones.png' alt='Headphone'></img>
                <h2>Headphones</h2>
                <Link to="/headphones">shop
                    <img src='https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/shared/desktop/icon-arrow-right.svg' alt='arrow icon'></img>
                </Link>
            </div>
            <div className='category'>
                <img src='https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/shared/desktop/image-category-thumbnail-speakers.png' alt='Speaker'></img>
                <h2>Speakers</h2>
                <Link to="/speakers">shop
                    <img src='https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/shared/desktop/icon-arrow-right.svg' alt='arrow icon'></img>
                </Link>
            </div>
            <div className='category'>
                <img src='https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/shared/desktop/image-category-thumbnail-earphones.png' alt='Earphone'></img>
                <h2>Earphones</h2>
                <Link to="/earphones">shop
                    <img src='https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/shared/desktop/icon-arrow-right.svg' alt='arrow icon'></img>
                </Link>
            </div>
        </div>
    )
}

export default Categories