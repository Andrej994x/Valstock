import React, { useEffect, useState } from "react";
import "./DetailsPage.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import MsgSuccess from "./MsgSuccess";
import AlbumModal from "./AlbumModal";
import { FaPlusCircle } from "react-icons/fa";
const DetailsPage = () => {
  let { id } = useParams();
  const [image, setImage] = useState([]);

  const [showDrop, setShowDrop] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showMessage, setshowMessage] = useState(false);

  const navigate = useNavigate();
  const showFormInput = () => {
    setShowModal(!showModal);
  };

  const showDropList = () => {
    setShowDrop(!showDrop);
  };

  const backToHome = () => {
    navigate("/home");
  };

  useEffect(() => {
    fetch(`https://picsum.photos/id/${id}/info`)
      .then((response) => response.json())
      .then((imgData) => setImage(imgData));
  }, [id]);

  const successMsg = () => {
    setshowMessage(true);

    setShowDrop(!showDrop);
  };

  return (
    <>
      <div className="container">
        <div className="btns">
          <div className="add-button" value="add" onClick={showFormInput}>
            <button>
              ADD TO ALBUM
              <div className="icon-plus">
                <FaPlusCircle />
              </div>
            </button>
          </div>

          <div className="download-button">
            <div className="drop-menu-download">
              <div className="dd-list">
                <div className="btn-dropDown">
                  <button onClick={showDropList}>Download</button>
                </div>
                {showDrop && (
                  <ul onClick={successMsg}>
                    <li>Original</li>
                    <li>Large</li>
                    <li>Medium</li>
                    <li>Small</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
        <img src={image.download_url}></img>
        <h3 style={{ fontSize: "small" }}>Uploaded by</h3>
        <h2>{image.author}</h2>
        <div className="button-back">
          <button onClick={backToHome}>GO BACK</button>
        </div>
      </div>
      <AlbumModal
        showModal={showModal}
        setShowModal={setShowModal}
        setshowMessage={setshowMessage}
      />
      <MsgSuccess show={showMessage} setshowMessage={setshowMessage} />
    </>
  );
};

export default DetailsPage;
