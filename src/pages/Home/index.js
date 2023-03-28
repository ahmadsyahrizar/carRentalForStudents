import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import FormInput from "../../components/FormInput";
import WhyUs from "../../components/WhyUs";
import {
  Button,
  Card as CardBootstrap,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

// tampilkan log effect setelah component berhasil di render

const Home = () => {
  const [cardTitle, setCardTitle] = useState("Card title")
  const [displayWhyUs, setDisplayWhyUs] = useState(true); // => hooks state

 // 1. dijalankan setelah compoennt berhasil dirender pertama kali

 // 2 effect akan dijalankan tergantung kondisi dan keinginan kita, berdasarkan perubahan state

 // 3 effect akan berjalan terus apapun kondisinya + apapun statenya

//4.  real case useEffect dipergunakan untuk fetching data dari Server

  useEffect(()=> {
     console.log("effect run after component render")
  }, [cardTitle]);

  const handleButtonCard = () => {
    setCardTitle(prevState => prevState === "Golden Gate" ? "Card Title" : "Golden Gate")
  }

  const handleButtonOnClick = () => {
    const callbackState = (previousState) => {
      return !previousState;
    };

    setDisplayWhyUs(callbackState);
  };

  return (
    <div>
      <Navbar />
      <Card description="Binar Bagus Banget" reviewer="rijarmdh" />
      <FormInput />

      {/* if display is true, then show why us component */}
      {displayWhyUs && ( // ternary operator
        <WhyUs>
          <Card
            description="Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"
            reviewer="Mobil Lengkap"
          />
        </WhyUs>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: "24px",
        }}
      >
        <Button color="warning" onClick={handleButtonOnClick}>
          Show/Hide Why Us
        </Button>
        {/* <button
          onClick={handleButtonOnClick}
          type="button"
          name=""
          id=""
          class="btn btn-primary btn-lg btn-block"
        >
          Show/Hide Why Us
        </button> */}
      </div>

      <CardBootstrap
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {cardTitle}
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText>
          <Button onClick={handleButtonCard}>Change Title Card</Button>
        </CardBody>
      </CardBootstrap>
    </div>
  );
};
export default Home;