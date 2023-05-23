import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProfileModal = ({ toggleProfileModal, profileModal, handleProfileModalContentClick, handleLogout, fullname}) => {
    const navigate = useNavigate();

    return (
        <div>
            {profileModal && (
                <div className={`modal ${profileModal ? 'active' : ''}`}>
                    <div className="modal-content" onClick={toggleProfileModal}>
                        <div className="profile-link" onClick={() => {
                            toggleProfileModal();
                            navigate(`/profile/${fullname}`)}}>
                            Profile settings
                        </div>
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