import React from "react";

interface Props {
  name: string;
  date: string;
  stars: number;
  comment: string;
}

function Comment({ name, date, stars, comment }: Props) {
  return (
    <div className="comment">
      <div className="comment-info">
        <span>{name.trim() === "" ? "Anonymous" : name}</span>
        <span>{date}</span>
      </div>
      <div className="comment-content">
        <div className="comment-rating">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className={index < stars ? "star" : "dead-star"}>
              ★
            </span>
          ))}
        </div>
        {comment}
      </div>
    </div>
  );
}

export default Comment;
