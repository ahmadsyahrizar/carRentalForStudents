import { useState, useEffect } from "react";
import Card from "../../components/Card";
import FormInput from "../../components/FormInput";
// import WhyUs from "../../components/WhyUs";
import Testimonial from "./../../components/Testimonial"
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
  return (
    <div>
      {/* <Card description="Binar Bagus Banget" reviewer="rijarmdh" /> */}
      <FormInput />

        {/* <Testimonial /> */}

    </div>
  );
};
export default Home;