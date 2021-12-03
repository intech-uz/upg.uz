import React from "react";
import BravoSWrapper from "./BravoSWrapper";
import { Link } from "react-router-dom";

const BravoS = () => {
  return (
    <BravoSWrapper>
      {" "}
      <h1>Bravo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In nemo tempore
        reprehenderit, voluptas excepturi quia expedita tenetur id similique
        minima facere eum a impedit quo numquam provident ad modi doloremque.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet numquam
        quis impedit officia id modi, cum porro sapiente repudiandae iusto sint
        cupiditate dolores consequatur quaerat optio perspiciatis, laborum
        omnis? Labore!
      </p>
      <Link key="/" to="/">
        HOME
      </Link>
    </BravoSWrapper>
  );
};

export default BravoS;
