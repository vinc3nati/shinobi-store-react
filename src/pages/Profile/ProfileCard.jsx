import React from "react";
import { useAuth } from "../../contexts/auth-context";
import { useDocumentTitle } from "../../hooks/DocumentTitle";
import { convertToProperDate } from "../../utilities/convertToProperDate";
import UserImage from "../../assets/dummy.jpg";

export const ProfileCard = ({ title }) => {
  useDocumentTitle(title);
  const {
    user: { user },
    handleLogOut,
  } = useAuth();
  return (
    <div className="profile-card">
      <div className="user-img-container">
        <img className="img img-round" src={UserImage} alt="user-profile" />
      </div>
      <div className="profile-content">
        <div className="profile-section">
          <span className="profile-title">Name :</span>
          <span className="profile-value">{user.name}</span>
        </div>
        <div className="profile-section">
          <span className="profile-title">Email :</span>
          <span className="profile-value">{user.email}</span>
        </div>
        <div className="profile-section">
          <span className="profile-title">Joined At :</span>
          <span className="profile-value">
            {convertToProperDate(user.createdAt)}
          </span>
        </div>
        <button className="btn outline-primary" onClick={handleLogOut}>
          Logout
        </button>
      </div>
    </div>
  );
};
