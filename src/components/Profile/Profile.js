import React from "react";
import SideBar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({
  onSelectCard,
  handleCreateModal,
  clothingItems,
  onLogout,
  onEditProfile,
  loggedIn,
  onCardLike,
}) {
  return (
    <div className="profile">
      <SideBar onLogout={onLogout} onEditProfile={onEditProfile} />
      <ClothesSection
        onSelectCard={onSelectCard}
        handleCreateModal={handleCreateModal}
        clothingItems={clothingItems}
        loggedIn={loggedIn}
        onCardLike={onCardLike}
      />
    </div>
  );
}
export default Profile;
