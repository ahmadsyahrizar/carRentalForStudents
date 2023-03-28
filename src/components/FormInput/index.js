import { useState } from "react";
import TextField from "../TextField";
import Select from "../Select";
import { catOptions, hargaOptions, statusOptions } from "./../../constants";

const FormInput = () => {
  const [valueCategory, setCategory] = useState("");
  const [valueHarga, setHarga] = useState("");
  const [valueStatus, setStatus] = useState("");
  const [valueNamaMobil, setNamaMobil] = useState("");
  const [displayResult, setDisplayResult] = useState(false);

  console.log({valueNamaMobil})

  const handleOnClick = () => {
    setDisplayResult(true);
  };

  return (
    <div style={{ margin: "32px" }}>
      <TextField
        labelValue={"Nama Mobil"}
        value={valueNamaMobil}
        onChange={setNamaMobil}
      />
      <Select
        labelValue={"Kategori"}
        items={catOptions}
        onChange={setCategory}
        value={valueCategory}
      />
      <Select
        labelValue={"Harga"}
        items={hargaOptions}
        onChange={setHarga}
        value={valueHarga}
      />
      <Select
        labelValue={"Status"}
        items={statusOptions}
        onChange={setStatus}
        value={valueStatus}
      />

      <button
        onClick={handleOnClick}
        type="button"
        name=""
        id=""
        className="btn btn-primary btn-lg btn-block"
      >
        Cari Mobil
      </button>

      <br />
      <hr />

      <div>
        <h3>Result</h3>

        {displayResult && (
          <div>
            <p>Nama Mobil: {valueNamaMobil}</p>
            <p>Kategori Mobil: {valueCategory}</p>
            <p>Harga Mobil: {valueHarga}</p>
            <p>Status Mobil: {valueStatus}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormInput;
