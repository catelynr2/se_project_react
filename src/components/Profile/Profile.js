import React from "react";
import SideBar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ onSelectCard, handleCreateModal, clothingItems }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        onSelectCard={onSelectCard}
        handleCreateModal={handleCreateModal}
        clothingItems={clothingItems}
      />
    </div>
  );
}
export default Profile;
