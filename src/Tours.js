import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeIt }) => {
  return (
    <section>
      <h1 className="title"> OUR TOUR TRIP LIST</h1>
      <div className="underline"></div>
      <div>
        {tours.length !== 0 ? (
          tours.map((tour) => {
            return <Tour key={tour.id} tour={tour} removeIt={removeIt} />;
          })
        ) : (
          <h2 className="text-center my-5"> NO TRIP ADDED </h2>
        )}
      </div>
    </section>
  );
};

export default Tours;
