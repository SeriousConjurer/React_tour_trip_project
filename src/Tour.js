import React, { useState } from "react";

const Tour = ({ tour, removeIt }) => {
  const { id, image, info, name, price } = tour;
  const [read, setRead] = useState(false);

  return (
    <>
      <div className="container row mx-auto">
        <div className="card mb-3 col-8 mx-auto p-5 shadow g-3">
          <img src={image} className="card-img-top image-fluid" alt="No" />
          <div className="card-body row my-2">
            <h3 className="card-title text-start col-8 g-2">{name}</h3>
            <h5 className="card-title text-end col-4 g-2">$ {price}</h5>
            <p className="card-text g-2">
              {read ? info : `${info.substring(0, 100)} ... `}
              <span
                className="text-primary p-2 fe-bold"
                onClick={() => setRead(!read)}
              >
                {read ? "Show less" : "Read More"}
              </span>
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
            <button
              className=" btn-outline-danger"
              onClick={() => removeIt(id)}
            >
              {" "}
              Not Interested
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tour;
