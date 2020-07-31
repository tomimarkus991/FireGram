import React, { Fragment } from "react";
import UploadForm from "../upload/UploadForm";
import Title from "../layout/Title";
import ImageGrid from "../layout/ImageGrid";

const Home = () => {
  return (
    <Fragment>
      <Title />
      <UploadForm />
      <ImageGrid />
    </Fragment>
  );
};

export default Home;
