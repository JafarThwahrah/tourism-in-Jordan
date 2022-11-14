import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Tourinfo from "../pages/Tourinfo";

const data = [
  {
    id: "1",
    name: "Petra",
    info: "Carved directly into vibrant red, white, pink, and sandstone cliff faces, the prehistoric Jordanian city of Petra was lost to the Western world for hundreds of years Located amid rugged desert canyons and mountains in what is now the southwestern corner of the Hashemite Kingdom of Jordan, Petra was once a thriving trading center and the capital of the Nabataean empire between 400 B.C. and A.D. 106.      The city sat empty and in near ruin for centuries. Only in the early 1800s did a European traveler disguise himself in Bedouin costume and infiltrate the mysterious locale.      In 1985, the Petra Archaeological Park was declared a UNESCO World Heritage site, and in 2007 it was named one of the new seven wonders of the world.",

    image:
      "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2021/06/petra.jpg",
    price: "20",
  },
  {
    id: "2",
    name: "Jerash",
    info: "Jerash is a fascinating ancient Roman city that is located just 50 km from Amman, Jordan. Jerash is considered the most well preserved Roman ruins outside of Italy. It is also one of the busiest tourist sites in Jordan.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Jerash_01.jpg",
    price: "7",
  },
  {
    id: "3",
    name: "Amrah Palace",
    info: "The small domes and triple arches of Quseir Amra stand out as the sole ornamentation in the stark and rocky desert east of Amman. Though the isolated location appears desolate and severe, Amra is just one of the many desert castles that dot the long caravan route from Damascus, the ancient capital of the Umayyad caliphate, and Mecca, the holy city of Islam.",
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/24/c9/e6.jpg",
    price: "10",
  },
  {
    id: "4",
    name: "Um qais",
    info: "Umm Qais or Qays (Arabic: أم قيس, lit. 'Mother of Qais') is a town in northern Jordan principally known for its proximity to the ruins of the ancient Gadara. It is the largest city in the Bani Kinanah Department and Irbid Governorate in the extreme northwest of the country, near Jordan's borders with Palistine and Syria.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Umm_Qais_00.JPG",
    price: "9",
  },
  {
    id: "5",
    name: "Dead Sea",
    info: "The Dead Sea has long been a popular tourist destination. Jordan, Israel and the West Bank make up the borders of this lake that is fed from the Jordan River and many other smaller tributaries. The proximity to Amman, the capital of Jordan, makes it easy to get to for international visitors as well as locals from the city looking to get away.",

    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Jordan_Dead_sea.jpg",
    price: "12",
  },
];

export const contextData = React.createContext(data);
console.log(contextData);
function Pages() {
  return (
    <div>
      <contextData.Provider value={data}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tourinfo/:id" element={<Tourinfo />} />
        </Routes>
      </contextData.Provider>
    </div>
  );
}

export default Pages;
