import React from "react";
import { Link } from "react-router-dom";
import Header from "../Containers/Header";

const UzbekKonsert = () => {
  return (
    <Header>
      <h1>Uzbek Kinolar</h1>
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
    </Header>
  );
};

export default UzbekKonsert;
