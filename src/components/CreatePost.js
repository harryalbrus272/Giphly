import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { customStyles, customStylesDropdown } from "../styles/modalstyles";
import APIUrls from "../utils/urls";
const CreatePost = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const [gifSearch, setGifSearch] = useState("");
  const [result, setResult] = useState([]);
  const [selectedGif, setSelectedGif] = useState("");
  const [error, setError] = useState("");

  //Cleaning the selectedGif and the result array on closing the modal
  useEffect(() => {
    if (modalIsOpen === false) {
      setSelectedGif("");
      setResult([]);
    }
  }, [modalIsOpen]);

  //Using UseEffect to trigger fetch request on every search hit on git Input
  useEffect(() => {
    let baseurl = APIUrls.gifFetch(gifSearch);
    if (gifSearch !== "")
      try {
        axios.get(baseurl).then((res) => {
          setResult(res.data.data);
        });
      } catch (error) {
        console.log(error);
        setError(error);
      }
  }, [gifSearch]);

  //Handler functions for setting the state values for the component
  const handleGifSearch = (e) => {
    let inputValue = e.target.value;
    setResult([]);
    setGifSearch(inputValue);
  };
  const handleClickOnGif = (e) => {
    setSelectedGif(e.target.src);
    setSecondModalOpen(false);
  };

  //Setting the root as the location of the modals
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
          <div className="gif-selected">
            <img src={selectedGif} alt="selectedgif" height="250" width="300" />
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
          <div className="gif-search display-flex">
            <input
              type="text"
              value={gifSearch}
              onChange={(e) => handleGifSearch(e)}
            />
            {error && <package className="error-dailog alert"></package>}
          </div>
          <div className="gif-display">
            <ul>
              {result.length === 0 && <p>Search the gif</p>}
              {result.length !== 0 &&
                result.map((item, indx) => (
                  <li key={indx} onClick={(e) => handleClickOnGif(e)}>
                    <img
                      height="200"
                      width="200"
                      src={item.images.downsized.url}
                      alt=""
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
