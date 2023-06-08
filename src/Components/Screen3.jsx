import React, { useEffect, useState } from 'react'
import arrow from "../Assets/arrow.png";
import { useNavigate } from 'react-router-dom';

const Screen3 = () => {
    const navigate = useNavigate();
    const [numCount , setNumCount] = useState(15000)

    useEffect(()=>{
        for (let index = 15000; index <= 40000; index++) {
            setTimeout(()=>{
                setNumCount(index)
            },1)
        }
    },[])

  return (
    <div className='page'>
        <h1>Screen3</h1>
        <p className='show'>Number Count is : {numCount}</p>
        <p className="btnpara">
        <div className="btn" onClick={()=>navigate('/')}>
          <img src={arrow} alt="" />
        </div>
        <br />
          <p>Click to jump to Screen1</p>
      </p>
    </div>
  )
}

export default Screen3