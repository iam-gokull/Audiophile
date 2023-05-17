import React from 'react'
import { Link } from 'react-router-dom'

const ProfileModal = ({ profileModal, handleProfileModalContentClick, handleLogout}) => {
    return (
        <div>
            {profileModal && (
                <div className={`modal ${profileModal ? 'active' : ''}`}>
                    <div className="modal-content" onClick={handleProfileModalContentClick}>
                        <Link to="/" className="profile-link">
                            Profile settings
                        </Link>
                        <div className="profile-link" onClick={handleLogout}>
                            Logout
                        </div>
                    </div>
                    <div className={`overlay ${profileModal ? 'active' : ''}`}></div>
                </div>
            )}
        </div>
    )
}

export default ProfileModal