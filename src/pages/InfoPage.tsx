import React from "react";
import { useHistory } from "react-router-dom";

const InfoPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Information page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo
        hic, molestiae non consequatur assumenda repellat dolorem praesentium
        similique aut.
      </p>
      <button onClick={() => history.push("/")}>Go back</button>
    </>
  );
};

export default InfoPage;
