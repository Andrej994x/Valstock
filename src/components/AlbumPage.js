import React, { useState } from "react";
import "./AlbumPage.css";
import MsgSuccess from "./MsgSuccess";
import { useAlbum } from "../hooks/useAlbum";
import { useNavigate } from "react-router-dom";

const AlbumPage = () => {
  const albums = useAlbum();
  console.log("albums", albums);

  const [showMessage, setshowMessage] = useState(false);
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="wrapper">
        <div className="album-name">
          <h3>My Album One</h3>
          <h6>Date created: 29th November 2021</h6>
        </div>
        <div className="cols">
          {albums.map((album) => {
            return (
              <div className="container2">
                <img key={album.id} width="100%" src={album.download_url}></img>
                <div className="image-link-2">REMOVE</div>
              </div>
            );
          })}
        </div>
        <div className="album-options">
          <div className="btn-option-back">
            <button onClick={backToHome}>GO BACK</button>
          </div>
          <div className="btn-option-save">
            <button onClick={() => setshowMessage(true)}>SAVE</button>
          </div>
        </div>
      </div>
      <MsgSuccess show={showMessage} setshowMessage={setshowMessage} />
    </>
  );
};

export default AlbumPage;
