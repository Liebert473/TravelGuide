import React from "react";
import CommentSection from "./CommentSection";

interface Props {
  name: string;
  location: string;
  time: string;
  description: string;
  img: string;
}

function Item({ name, location, time, description, img }: Props) {
  return (
    <>
      <div className="item">
        <div className="item-top">
          <img src={img} alt="" />
          <div className="content">
            <div className="location">
              <i className="bi bi-geo-alt-fill"></i>
              {location}
            </div>
            <h3>{name}</h3>
            <div className="time">{time}</div>
            <p>{description}</p>
          </div>
        </div>
        <CommentSection />
      </div>
    </>
  );
}

export default Item;
