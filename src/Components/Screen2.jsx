import React, { useState, useEffect } from "react";
import arrow from "../Assets/arrow.png";
import { useNavigate } from "react-router-dom";
const Screen2 = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  let [count, setCount] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  }, [count]);

  if (count === 0) {
    navigate("/screen3");
  }

  const btnClick = () => {
    let item = document.getElementById("userProfile");
    item.classList.add("animateProfile");
    setCount(20);
    setShow(true);
  };
  console.log(count);

  return (
    <div className="page screen2">
      <p className="userProfile" id="userProfile">
        UserProfile
      </p>
      <h1>Screen2</h1>
      <p className="btnpara">
        <div className="btn" onClick={btnClick}>
          <img src={arrow} alt="" />
        </div>
      </p>
      {show === true && (
        <p>Screen will redirect to Screen 3 in {count} seconds</p>
      )}
    </div>
  );
};

export default Screen2;
