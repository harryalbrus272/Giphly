import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
const CreatePost = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const [gifSearch, setGifSearch] = useState("");
  const [result, setResult] = useState([]);
  const [selectedGif, setSelectedGif] = useState("");
  const [error, setError] = useState("");
  let baseurl =
    "https://api.giphy.com/v1/gifs/search?api_key=c8JBlm1edLuhGu0SfBVDdVM0cnTJYHS7&limit=10&q=";
  const customStyles = {
    content: {
      top: "28%",
      left: "46%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      backgroundColor: "rgb(0,0,0,75%)",
    },
  };

  useEffect(() => {
    baseurl = baseurl.concat(gifSearch);
    if (gifSearch !== "")
      try {
        axios.get(baseurl).then((res) => {
          setResult(res.data.data);
        });
      } catch (error) {
        console.log(error);
      }
  }, [gifSearch]);

  const handleGifSearch = (e) => {
    let inputValue = e.target.value;
    setResult([]);
    setGifSearch(inputValue);
  };
  const handleClickOnGif = (e) => {
    console.log(e.target.src);
  };
  console.log({ gifSearch });
  const customStylesDropdown = {
    content: {
      top: "66%",
      left: "30%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      backgroundColor: "none",
    },
  };
  Modal.setAppElement("#root");
  return (
    <div className="create-post-container display-flex">
      <ul className="display-flex horizontal-menu-list">
        <li>
          <button onClick={() => setModalIsOpen((prev) => !prev)}>
            <i className="fas fa-pencil-alt"></i> &nbsp; Create Post
          </button>
          <button>
            <i class="far fa-image"></i> &nbsp; Photo/Video Album
          </button>
          <button>
            <i class="fas fa-video"></i> &nbsp; Live Video
          </button>
        </li>
      </ul>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="upper-button-container display-flex">
          <ul className="display-flex horizontal-menu-list">
            <li>
              <button>
                <i className="fas fa-pencil-alt"></i> &nbsp; Create Post
              </button>
              <button>
                <i class="far fa-image"></i> &nbsp; Photo/Video Album
              </button>
              <button>
                <i class="fas fa-video"></i> &nbsp; Live Video
              </button>
            </li>
          </ul>
          <button
            style={{
              border: "none",
              background: "none",
              float: "right",
              cursor: "pointer",
            }}
            onClick={() => setModalIsOpen(false)}
          >
            X
          </button>
        </div>
        <div className="input-box">
          <input
            type="text"
            name="post"
            id="post"
            placeholder="Create Post ....."
          />
          <div className="post-button">
            <button className="">Create Post!</button>
          </div>
        </div>
        {selectedGif && (
          <div className="gif-input">
            <img src={selectedGif} alt="selectedgif" />
          </div>
        )}
        <div className="add-gif-block">
          <button
            className="block-button"
            onClick={() => setSecondModalOpen(true)}
          >
            Add Gif
          </button>
        </div>
      </Modal>
      <Modal
        isOpen={secondModalOpen}
        onRequestClose={() => setSecondModalOpen(false)}
        style={customStylesDropdown}
        contentLabel="Example Modal"
      >
        <div className="gif-display-container">
          <div className="gif-search">
            <input
              type="text"
              value={gifSearch}
              onChange={(e) => handleGifSearch(e)}
            />
            {error && <package className="error-dailog alert"></package>}
          </div>
          <div className="gif-display">
            <ul>
              {result.length !== 0 &&
                result.map((item, indx) => (
                  <li key={indx} onClick={(e) => setSelectedGif(e.target.src)}>
                    <img
                      height="100"
                      width="100"
                      src={item.images.downsized.url}
                      alt=""
                      onClick={(e) => handleClickOnGif(e)}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreatePost;
