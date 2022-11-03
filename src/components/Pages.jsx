import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Tourinfo from '../pages/Tourinfo';


function Pages() {

  const data = [
    {
      id: 1,
      name: "Petra",
      info: "infoooooooooooooooooooooo",
      image: "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2021/06/petra.jpg",
      price: 20,
    },
    {
      id: 2,
      name: "Jerash",
      info: "infoooooooooooooooooooooo",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Jerash_01.jpg",
      price: 7,
    },
    {
      id: 3,
      name: "Amrah Palace",
      info: "infooooooooooooooooo",
      image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/24/c9/e6.jpg",
      price: 10,
    },
    {
      id: 4,
      name: "Um qais",
      info: "infoooooooooooooo",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Umm_Qais_00.JPG",
      price: 9,
    },
    {
      id: 5,
      name: "Dead Sea",
      info: "infooooooooooooooo",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Jordan_Dead_sea.jpg",
      price: 12,
    },
  ];
  return (
    <div>
<Routes>
    <Route path='/' element={<Home data={data} />} />
    <Route path='/Tourinfo/:id' element={<Tourinfo data={data}/>} />
</Routes>
    </div>
  )
}

export default Pages;