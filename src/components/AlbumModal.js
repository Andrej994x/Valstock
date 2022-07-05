import React, { useState } from "react";
import "./AlbumModal.css";

const AlbumModal = ({ showModal, setShowModal, setshowMessage }) => {
  const [addToExisting, setAddToExisting] = useState(false);

  const confirmAlbum = () => {
    setAddToExisting(!addToExisting);
  };

  const handleSave = () => {
    setshowMessage(true);
    setShowModal(false);
  };
  if (showModal) {
    return (
      <div className="form-add">
        <div className="form-wrapper">
          <div className="btnOpen">
            <h3>Create new album</h3>
            <h3 onClick={confirmAlbum}>Add to existing</h3>
          </div>
          <div className="add-existing">
            {addToExisting && (
              <ul>
                <li>My Album One</li>
                <li>My Album One</li>
                <li>My Album One</li>
                <li>My Album One</li>
              </ul>
            )}
          </div>
          <div className="input-album ">
            <input placeholder="Enter title here"></input>
          </div>
          <div className="btn-btn">
            <div className="btn-cancel">
              <button onClick={() => setShowModal(false)}>CANCEL</button>
            </div>
            <div className="btn-save">
              <button onClick={handleSave}>SAVE</button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return;
  }
};

export default AlbumModal;
