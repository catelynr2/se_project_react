import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React, { useState, useEffect } from "react";

const RegisterModal = ({
  handleCloseModal,
  onSignUp,
  buttonText,
  secondaryButtonText,
  onAltButton,
  isOpen,
}) => {
  const [email, setEmail] = useState("");
  const [formErrors, setFormErrors] = useState({
    email: "Invalid Email",
    password: "Password length needs to be 8 characters",
  });
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const validateEmail = (enteredEmail) => {
      // emailRegex = regular expression
      // const isValid = emailRegex.test(enteredEmail)
      // return isValid
    };
    // if e.target.name = "email" {
    // const emailIsValid = validateEmail(e.target.value)
    // setFormErrors({...formErrors, email: emailIsValid ? "" : "Invalid Email"});
    // }
  };
  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // const validatePassword = (enteredPassword) => {
    // password.length < 8 ? return false : return true;
    // }
    // if e.target.name = "password" {
    // const passwordIsValid = validatePassword(e.target.value)
    // setFormErrors({...formErorrs, password: passwordIsValid ? "" : "Password length needs to be 8 characters"})
    // }
  };
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const [avatar, setAvatar] = useState("");
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setName("");
      setAvatar("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp({ name, avatar, email, password });
  };

  return (
    <ModalWithForm
      title="Sign Up"
      onClose={handleCloseModal}
      isOpen={isOpen}
      buttonText={buttonText}
      secondaryButtonText={secondaryButtonText}
      onAltButton={onAltButton}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        <span>Email*</span>
        <input
          className="modal__input"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>

      <label className="modal__label">
        <span>Password*</span>
        <input
          className="modal__input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </label>

      <label className="modal__label">
        <span>Name</span>
        <input
          className="modal__input"
          type="text"
          name="name"
          minLength="1"
          maxLength="100"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>

      <label className="modal__label">
        <span>Avatar URL</span>
        <input
          className="modal__input"
          type="url"
          name="avatar"
          placeholder="Avatar URL"
          value={avatar}
          onChange={handleAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
