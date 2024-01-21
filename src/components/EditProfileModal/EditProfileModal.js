import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const EditProfileModal = ({
  handleCloseModal,
  buttonText,
  handleEditProfile,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const handleNameChage = (e) => {
    setName(e.target.value);
  };
  const [avatar, setAvatar] = useState(currentUser.avatar);
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProfile({ name, avatar });
  };

  useEffect(() => {
    setName(currentUser.name);
    setAvatar(currentUser.avatar);
  }, []);

  return (
    <ModalWithForm
      title="Change profile data"
      onClose={handleCloseModal}
      buttonText={buttonText}
      onSubmit={handleSubmit}
    >
      <div className="modal__form-content">
        <label className="modal__label">
          Name*
          <input
            className="modal__input"
            type="text"
            name="name"
            minLength="1"
            maxLength="100"
            placeholder="Name"
            value={name}
            onChange={handleNameChage}
            required
          />
        </label>

        <label className="modal__label">
          Avatar
          <input
            className="modal__input"
            type="url"
            name="avatar"
            placeholder="Avatar URL"
            value={avatar}
            onChange={handleAvatarChange}
          />
        </label>
      </div>
    </ModalWithForm>
  );
};
export default EditProfileModal;
