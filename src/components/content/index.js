import React from "react";
import "../../styles.css";
import _ from "lodash";

export default function index(props) {
  const { data, dataTags } = props;
  let dataTest = null;

  console.log(data);
  console.log("dataTags: ", dataTags);

  if (dataTags) {
    dataTest = dataTags.length;
  }

  const showRate = (value) => {
    let result = [];
    if (value >= 0) {
      if (value === 0) {
        result = <span id="span-price-not">Not enough reviews yet</span>;
      } else {
        for (let i = 0; i < value; i++) {
          result.push(<i className="fas fa-star" id="icon-star"></i>);
        }
        for (let j = 0; j < 5 - value; j++) {
          result.push(<i className="fas fa-star" id="icon-star-none"></i>);
        }
      }
    }
    return result;
  };

  const showPrice = (priceNum, priceUnit, discountProduct) => {
    let sum = 0;
    if (discountProduct !== 0 && discountProduct > 0) {
      if (priceUnit === "JPY") {
        sum = priceNum * 206 * (1 - discountProduct / 100);
      }
      if (priceUnit === "EUR") {
        sum = priceNum * 27600 * (1 - discountProduct / 100);
      }
      if (priceUnit === "GBP") {
        sum = priceNum * 32000 * (1 - discountProduct / 100);
      }
    } else {
      if (priceUnit === "JPY") {
        sum = priceNum * 206;
      }
      if (priceUnit === "EUR") {
        sum = priceNum * 27600;
      }
      if (priceUnit === "GBP") {
        sum = priceNum * 32000;
      }
    }
    const numberToString = String(sum);
    const format = numberToString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return format;
  };

  return (
    <div className="container__content">
      <div className="grid-container">
        {!_.isEmpty(dataTags) || !_.isEmpty(data)
          ? (dataTest > 0 ? dataTags : data).map((item, index) => {
            const timeWeeks = item.totalWeeks.slice(0, 2);
            const discountAll = item.promotions.slice(3, -3);
            const discount = discountAll.split('","');
            const discountFinal = discount.slice(-1);
            const test111 = discountFinal.join();
            const discountProduct = parseInt(
              Math.ceil(test111.replace('discount":"', ""))
            );
            if (typeof item.tags === "string") {
              var jsonParseItemTags = JSON.parse(item.tags);
            }

            return (
              <div className="grid-item" key={index}>
                {discountProduct ? (
                  <div className="diplay-row">
                    <div className="course-row-left"></div>
                    <div className="course-discount">
                      UP TO {discountProduct}% OFF
                    </div>
                  </div>
                ) : null}
                <img src={item.image} alt="" id="img-content" />
                <div className="title">
                  <h3 id="h3-title">{item.title}</h3>
                  <span id="span-title">{item.school.name}</span>
                </div>
                <div className="display-row category">
                  {jsonParseItemTags
                    ? jsonParseItemTags.map((value, index) => {
                        return (
                          <span key={index} id="span-category">
                            {value}
                          </span>
                        );
                      })
                    : null}
                </div>
                <div className="price">
                  <div className="price-left">
                    <span id="span-price">average rating</span>
                    {showRate(item.rate)}
                  </div>
                  <div className="price-right">
                    <p id="p-price-from">from</p>
                    <p id="p-price">
                      {showPrice(
                        item.priceNum,

                        item.priceUnit,

                        discountProduct
                      )}
                      <span id="p-price">₫</span>
                    </p>
                  </div>
                </div>
                <div className="bottom-card">
                  <span id="span-bottom">
                    <i className="far fa-clock" id="icon-bottom"></i>
                    {timeWeeks} Mins/lesson
                  </span>
                  {item.minLevel === 0 && (
                    <span id="span-bottom">
                      <i className="far fa-lightbulb" id="icon-bottom"></i>
                      all levels
                    </span>
                  )}
                  {item.minLevel > 0 && item.minLevel < 5 && (
                    <span id="span-bottom">
                      <i className="far fa-lightbulb" id="icon-bottom"></i>
                      beginners
                    </span>
                  )}
                  {item.minLevel >= 5 && (
                    <span id="span-bottom">
                      <i className="far fa-lightbulb" id="icon-bottom"></i>
                      advanced
                    </span>
                  )}
                  <span id="span-bottom">
                    <i className="far fa-smile" id="icon-bottom"></i>1 on 1
                  </span>
                </div>
              </div>
            );
          })
          : null}
      </div>
    </div>
  );
}
