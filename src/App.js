import React from 'react'
import Screen1 from './Components/Screen1'
import {Routes, Route} from 'react-router-dom'
import Screen2 from './Components/Screen2'
import Screen3 from './Components/Screen3'

const App = () => {
  return (
    <>
    <Routes>
      <Route index element={<Screen1/>}/>
      <Route path='/screen2' element={<Screen2/>}/>
      <Route path='/screen3' element={<Screen3/>}/>
    </Routes>
    </>
  )
}

export default App