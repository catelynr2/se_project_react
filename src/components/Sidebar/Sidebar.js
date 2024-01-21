import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
// import avatarLogo from "../../images/Avatar.svg";
import "./Sidebar.css";

// function SideBar() {
//   return (
//     <div className="sidebar">
//       <img
//         src={avatarLogo}
//         alt="sidebar__avatar"
//         className="sidebar__avatar-image"
//       />
//       <p className="sidebar__avatar-name">Catelyn Richard</p>
//     </div>
//   );
// }

function SideBar({ onEditProfile, onLogout }) {
  const currentUser = useContext(CurrentUserContext);
  const currentAvatar = currentUser?.avatar !== "" ? true : false;
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        {currentAvatar ? (
          <img
            src={currentUser?.avatar}
            alt={currentUser?.name}
            className="sidebar__avatar-image"
          />
        ) : (
          <p className="sidebar__avatar-name">
            {currentUser?.name[0].toUpperCase()}
          </p>
        )}
        <p className="sidebar__name">{currentUser?.name}</p>
      </div>
      <div className="sidebar__profile-manager">
        <button className="sidebar__edit" type="button" onClick={onEditProfile}>
          Change Profile Data
        </button>
        <button className="sidebar__logout" type="button" onClick={onLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
}
export default SideBar;
