import React from "react";

const Card = ({
  title = "Card Title",
  imageUrl = "#",
  cardBody = "Card Body",
  cardBtn = "Click Here",
}) => {
  return (
    <div className="col-4">
      <div className="card" styles="width: 18rem;">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{cardBody}</p>
          <a href="#" className="btn btn-success">
            {cardBtn}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
