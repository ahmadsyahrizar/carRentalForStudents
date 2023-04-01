import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"

const apiDetailCar= `https://bootcamp-rent-cars.herokuapp.com/customer/car`

const DetailCar = () => {
    const {carId}  = useParams()
    const [dataDetailCar, setDataDetailCar] = useState({})

    console.log({dataDetailCar})

    useEffect(()=> {   
        fetch(`${apiDetailCar}/${carId}`)  //https://bootcamp-rent-cars.herokuapp.com/customer/car/2410
            .then((res)=> res.json() )
            .then((response)=> {
                setDataDetailCar(response)
            })
    }, [carId])

    return (
        <div>
            <h2>Detail Car </h2>

            <div class="card">
                <img class="card-img-top" src={dataDetailCar.image} alt="" />
                <div class="card-body">
                    <h4 class="card-title">{dataDetailCar.name}</h4>
                    <p class="card-text">{dataDetailCar.category}</p>
                </div>

                <div style={{
                    margin: "1em", 
                    display: "flex",
                    flexDirection: "row", 
                    justifyContent: "space-between", 
                    alignItems: "center"
                }}>
                    <div><b>Total</b></div>
                    <div><b>Rp.{dataDetailCar.price}</b></div>
                </div>
            </div>
        </div>
    )
}

export default DetailCar