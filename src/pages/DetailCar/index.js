import {useParams} from "react-router-dom"

const DetailCar = () => {
    const {carName}  = useParams()

    return (
        <div>
            <h2>Detail Car </h2>
            <p>Detail mobil pilihanmu adalah mobil: {carName}</p>
        </div>
    )
}

export default DetailCar