import React from "react";
import PropTypes from "prop-types";

item.propTypes = {};

function item(props) {
  const { item, data } = props;
  console.log(data);
  return (
    <div className="grid-item">
      <div className="diplay-row">
        <div className="course-row-left"></div>
        <div className="course-discount">UP TO 20% OFF</div>
      </div>
      <img src={item.image} alt="" id="img-content" />
      <div className="title">
        <h3 id="h3-title">{item.title}</h3>
        <span id="span-title">{item.school.name}</span>
      </div>
      <div className="category">
        <span id="span-category">Tailored Lessons</span>
        <span id="span-category">Tailored Lessons</span>
        <span id="span-category">Tailored Lessons Tailored Lessons</span>
        <span id="span-category">Tailored Lessons Tailored Lessons</span>
        <span id="span-category">Tailored Lessons Tailored Lessons</span>
        <span id="span-category">Tailored Lessons Tailored Lessons</span>
      </div>
      <div className="price">
        <div className="price-left">
          <span id="span-price">average rating</span>
          <span id="span-price-not">Not enough reviews yet</span>
        </div>
        <div className="price-right">
          <p id="p-price-from">from</p>
          <p id="p-price">
            810.073 <span id="p-price">₫</span>
          </p>
        </div>
      </div>
      <div className="bottom-card">
        <span id="span-bottom">
          <i className="far fa-clock" id="icon-bottom"></i>min/lesson
        </span>
        <span id="span-bottom">
          <i className="far fa-lightbulb" id="icon-bottom"></i>beginners
        </span>
        <span id="span-bottom">
          <i className="far fa-smile" id="icon-bottom"></i>1 on 1
        </span>
      </div>
    </div>
  );
}

export default item;
