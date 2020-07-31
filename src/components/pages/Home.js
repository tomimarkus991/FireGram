import React, { Fragment, useContext } from "react";
import UploadForm from "../upload/UploadForm";
import Title from "../layout/Title";
import ImageGrid from "../layout/ImageGrid";
import Modal from "../layout/Modal";
import FiregramContext from "../../contexts/firegram/firegramContext";

const Home = () => {
  const { selectedImg } = useContext(FiregramContext);
  return (
    <Fragment>
      <Title />
      <UploadForm />
      <ImageGrid />
      {selectedImg && <Modal />}
    </Fragment>
  );
};

export default Home;
