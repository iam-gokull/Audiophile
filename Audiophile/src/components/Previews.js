import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Previews.css'

const Previews = () => {

    const navigate = useNavigate();

    return (
        <div className='previews'>
            <div className='speaker-preview preview'>
                <img className='preview-thumbnail' src='https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/home/desktop/image-speaker-zx9.png' alt='Speaker'></img>
                <div className='preview-content'>
                    <h1 className='product-heading'>ZX9 SPEAKER</h1>
                    <p className='product-description'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <button className='btn secondary-btn' onClick={() => navigate("/speakers/zx9-speaker")}>See product</button>
                </div>
            </div>
            <div className='speaker-2-preview preview'>
                <div className='preview-content'>
                    <h1 className='product-heading'>ZX7 SPEAKER</h1>
                    <button className='btn secondary-btn' onClick={() => navigate("/speakers/zx7-speaker")}>See product</button>
                </div>
            </div>
            <div className='earphone-preview preview'>
                <img className='preview-thumbnail' src='https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/home/desktop/image-earphones-yx1.jpg' alt='Speaker'></img>
                <div className='preview-content'>
                    <h1 className='product-heading'>YX1 EARPHONES</h1>
                    <button className='btn secondary-btn' onClick={() => navigate("/earphones/yx1-earphones")}>See product</button>
                </div>
            </div>
        </div>
    )
}

export default Previews;