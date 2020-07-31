import React, { Fragment } from "react";
import UploadForm from "../upload/UploadForm";
import Title from "../layout/Title";

const Home = () => {
  return (
    <Fragment>
      <Title />
      <UploadForm />
    </Fragment>
  );
};

export default Home;
