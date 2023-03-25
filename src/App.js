import { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import FormInput from "./components/FormInput";
import WhyUs from "./components/WhyUs";

//props dan state adalah bagaimana caranya component react kita menghandle data
// erat kaitannya dengan data flow di component react kita

const App = () => {
  const [displayWhyUs, setDisplayWhyUs] = useState(true); // => hooks state

  console.log({ displayWhyUs });

  const handleButtonOnClick = () => {
    const callbackState = previousState => {
      console.log({previousState})
      return !previousState
    }

    setDisplayWhyUs(callbackState);
  };

  return (
    <div>
      <Navbar />
      <Card description="Binar Bagus Banget" reviewer="rijarmdh" />
      <FormInput />

      {/* if display is true, then show why us component */}
      {displayWhyUs && (  // ternary operator
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
        <button
          onClick={handleButtonOnClick}
          type="button"
          name=""
          id=""
          class="btn btn-primary btn-lg btn-block"
        >
          Show/Hide Why Us
        </button>
      </div>
    </div>
  );
};
export default App;
