import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlbumModal from "./AlbumModal";
import "./Home.css";
import MsgSuccess from "./MsgSuccess";

const Home = () => {
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showMessage, setshowMessage] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=3&limit=12")
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  const goToDetails = (img) => {
    navigate(`/details-page/${img.id}`);
  };

  const addToAlbum = (img) => {
    console.log(img);
    setShowModal(true);
  };

  return (
    <>
      <div id="container" className="cols">
        {images.map((img) => {
          return (
            <div key={img.id} className="image-wrapper">
              <img
                onClick={() => goToDetails(img)}
                width="100%"
                src={img.download_url}
              ></img>

              <div onClick={() => addToAlbum(img)} className="image-link">
                ADD TO ALBUM
              </div>
            </div>
          );
        })}
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

export default Home;
