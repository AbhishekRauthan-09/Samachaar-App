import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Screen1 = () => {
  const navigate = useNavigate();
  let [count, setCount] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    if (count === 0) {
        navigate('/screen2')
    }
  }, [count]);

  return (
    <>
      <div className="page">
        <h1>Screen1</h1>
        <h3>Screen Will redirect in {count} seconds</h3>
      </div>
    </>
  );
};

export default Screen1;
