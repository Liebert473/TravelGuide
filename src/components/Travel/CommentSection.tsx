import React from "react";
import Comment from "./Comment";
import { useState } from "react";

function CommentSection() {
  const [commentactive, setCommentActive] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [stars, setStars] = useState(0);
  const [comments, setComments] = useState<
    { name: string; text: string; stars: number }[]
  >([]);

  function addComment() {
    if (text.trim() === "") return;

    setComments((prevComments) => [...prevComments, { name, text, stars }]);

    setName("");
    setText("");
  }

  function toggleComment() {
    setCommentActive((prev) => !prev);
  }

  return (
    <div className="comments">
      <div
        className={"comments-top" + (commentactive ? " active" : "")}
        onClick={toggleComment}
      >
        <i className="bi-chat-dots"> </i>
        {comments.length}
      </div>
      <div className={"comments-container" + (commentactive ? " active" : "")}>
        {comments.map((x, index) => {
          return (
            <Comment
              key={index}
              name={x.name}
              date={new Date().toLocaleDateString()}
              stars={x.stars}
              comment={x.text}
            ></Comment>
          );
        })}
      </div>
      <div className={"comments-bottom" + (commentactive ? " active" : "")}>
        <input
          type="text"
          placeholder="Your Name"
          id="comment-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="rating">
          <div className="rating">
            <input
              type="radio"
              name="rating"
              id="star5"
              value="5"
              onChange={(e) => setStars(Number(e.target.value))}
            />
            <label htmlFor="star5">★</label>

            <input
              type="radio"
              name="rating"
              id="star4"
              value="4"
              onChange={(e) => setStars(Number(e.target.value))}
            />
            <label htmlFor="star4">★</label>

            <input
              type="radio"
              name="rating"
              id="star3"
              value="3"
              onChange={(e) => setStars(Number(e.target.value))}
            />
            <label htmlFor="star3">★</label>

            <input
              type="radio"
              name="rating"
              id="star2"
              value="2"
              onChange={(e) => setStars(Number(e.target.value))}
            />
            <label htmlFor="star2">★</label>

            <input
              type="radio"
              name="rating"
              id="star1"
              value="1"
              onChange={(e) => setStars(Number(e.target.value))}
            />
            <label htmlFor="star1">★</label>
          </div>
        </div>
        <div className="comment-type">
          <input
            type="text"
            placeholder="Your Comment"
            id="comment-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={addComment}>
            <i className="bi-send-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentSection;
