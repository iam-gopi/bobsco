import React, { useState } from "react";
import Webcam from "react-webcam";
import { toast } from "react-toastify";
import { verifyUser } from "../../actions/userActions";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};

const UserAuthentication = () => {
  const [picture, setPicture] = useState("");
  const webcamRef = React.useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  });

  const uploadHandler = () => {
    if (picture == "") {
      toast("Capture picture and try again", {
        type: "error",
        position: toast.POSITION.BOTTOM_CENTER,
        // onOpen: () => dispatch(clearUpdateProfile()),
      });
      return;
    }
    const formData = new FormData();
    formData.append("verificationPicture", picture);
    dispatch(verifyUser(formData));
    navigate('/')
    toast("Verification image submitted successfully", {
      type: "success",
      position: toast.POSITION.BOTTOM_CENTER,
      // onOpen: () => dispatch(clearUpdateProfile()),
    });
    setPicture("");
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5 rounded-lg">
        {picture == "" ? (
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            width={400}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            screenshotQuality={0.92}
          />
        ) : (
          <img src={picture} />
        )}
      </div>
      <div className="d-flex justify-content-center mt-5 ">
        {picture != "" ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setPicture("");
            }}
            className="btn btn-danger"
          >
            Retake
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              capture();
            }}
            className="btn btn-primary"
          >
            Capture
          </button>
        )}
        <button className="btn btn-primary mx-3" onClick={uploadHandler}>
          Upload
        </button>
      </div>
    </>
  );
};
export default UserAuthentication;
