import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

const Offer = () => {
  const params = useParams();
  // console.log(params);

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      `https://leboncoin-api.herokuapp.com/offer/${params.id}`
    );

    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="annonce">
      <div>
        <img src={data.picture.url} alt="" />
        <p>{data.title}</p>
        <p>{data.price} € </p>
        <p>{data.created}</p>
      </div>
      <div>
        <h3>Description</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Offer;
