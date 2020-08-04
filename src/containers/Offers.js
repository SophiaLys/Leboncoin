import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

const Offers = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://leboncoin-api.herokuapp.com/offer/with-count"
    );
    console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      {data.offers.map((offer, index) => {
        // console.log(offer._id);
        return (
          <Link key={offer._id} to={`/offer/${offer._id}`}>
            <div
              className="offers"
              style={{
                border: "1px solid lightgrey",
                height: 150,
                marginLeft: 50,
              }}
            >
              <img src={offer.picture.url} alt="" />
              <div>
                <h3>{offer.title}</h3>
                <p>{offer.price} € </p>
                <p>{offer.created}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Offers;
