// import { useState, useEffect } from "react";
// import axios from "axios";

// const apiURL = "https://pokeapi.co/api/v2/pokemon";
import { useHistory } from "react-router-dom";

const carList = [
  {
    id: 1,
    name: "Innova",
  },
  {
    id: 2,
    name: "Mazda",
  },
  {
    id: 3,
    name: "Chevrolet",
  },
];

const SearchCar = () => {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //         axios(apiURL)
  //             .then((res)=> {
  //                 setData(res.data.results)
  //             } )
  //   }, []);

  //   return (
  //     <div>
  //       <h1>This is Pokemon List</h1>

  //       <div>
  //         {data.map(({ name, url }) => (
  //           <div class="card" style={{ margin: "24px" }}>
  //             <img class="card-img-top" src="holder.js/100x180/" alt="" />
  //             <div class="card-body">
  //               <h4 class="card-title">{name}</h4>
  //               <a href={url} class="card-text">
  //                 click here to go
  //               </a>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
    const {push} = useHistory()

  const handleButton = (param) => {
    push(`/cari-mobil/${param}`)
  }

  return (
    <div>
      <h3>Cari Mobil</h3>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {carList.map(({ id, name }) => {
          return (
            <div key={id} class="card">
              <img class="card-img-top" src="holder.js/100x180/" alt="" />
              <div class="card-body">
                <h4 class="card-title">{name}</h4>
                <button type="button" class="btn btn-primary" onClick={()=> handleButton(name)}>Pilih Mobil</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchCar;

// Fetching data itu masuk ke dalam materi http request network
// GET, => GET DATA FROM SERVER TO FE
// POST, => ngirim data dari FE ke SERVER BE
// PUT,  => kita update data dari FE ke server
// PATCH =>
// DELETE => delete data dari record/data server
