import "./ModalWithForm.css";

const ModalWithForm = ({
  title,
  onClose,
  name,
  children,
  buttonText = "Add garment",
  secondaryButtonText,
  isOpen,
  onSubmit,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal_content">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        />
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button className="modal__submit-button" type="submit">
            {buttonText}
          </button>
          <button className="modal__submit-button-additional" type="submit">
            {secondaryButtonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
