import "./ModalWithForm.css";

const ModalWithForm = ({
  title,
  onClose,
  name,
  children,
  buttonText = "Add garment",
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal_content">
        <button type="button" onClick={onClose}>
          Close
        </button>
        <h3>{title}</h3>
        <form>{children}</form>
        <button type="submit">{buttonText}</button>
      </div>
    </div>
  );
};

export default ModalWithForm;