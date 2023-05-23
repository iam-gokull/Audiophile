import React from 'react'
import ProfileForm from '../components/ProfileForm'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ProfilePage = ({cartProduct, isLoggedIn, fullname, handleLogout}) => {
  return (
    <div className="profile-page">
        <Header cartProduct={cartProduct} isLoggedIn={isLoggedIn} fullname={fullname} handleLogout={handleLogout} isProfile={true}/>
        <ProfileForm isLoggedIn={isLoggedIn} fullname={fullname} handleLogout={handleLogout}/>
        <Footer />
    </div>
  )
}

export default ProfilePage