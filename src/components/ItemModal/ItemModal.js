const ItemModal = ({ selectedCard, onClose }) => {
  console.log("item modal");

  return (
    <div className={`modal`}>
      <div className="modal_content">
        <button type="button" onClick={onClose}>
          Close
        </button>
        <img src={selectedCard.link} alt="image unavailable" />
        <div>{selectedCard.name}</div>
        <div>weather type: {selectedCard.weather}</div>
      </div>
    </div>
  );
};

export default ItemModal;
