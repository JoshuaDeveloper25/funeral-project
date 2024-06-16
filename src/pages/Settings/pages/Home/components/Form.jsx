import ImagesHandle from "../../../../../components/ImagesHandle";
import { useState } from "react";

const Form = () => {
  const [images, setImages] = useState([]);

  return (
    <div className="App">
      <ImagesHandle images={images} setImages={setImages} />
    </div>
  );
};

export default Form;
