import React, { useState } from "react";
import "./styles.css";
import Content from "../content/index";

function Index(props) {
  var newArr = [];
  var newArr2 = [];
  var jsonParse = [];
  let arrTest = [];
  const [dataTags, setDataTags] = useState([]);
  const { data } = props;

  const handleChooseCategory = (value, id) => {
    data.forEach((data) => {
      if (data.tags !== undefined) {
        jsonParse = JSON.parse(data.tags);
        jsonParse.filter((item) => {
          if (item === value) {
            arrTest.push(data);
          }
        });
        setDataTags(arrTest);
      }
    });
  };

  return (
    <div className="container">
      {data.forEach((value, index) => {
        const test = value.tags;
        if (typeof test === "string") {
          const test = JSON.parse(value.tags);
          for (let i = 0; i < test.length; i++) {
            newArr.push(test[i]);
          }
        }
        for (var i = 0; i < newArr.length; i++) {
          if (newArr2.indexOf(newArr[i]) === -1) {
            newArr2.push(newArr[i]);
          }
        }
      })}
      <div className="content">
        {newArr2.map((value, index) => {
          return (
            <p
              key={index}
              id="p-content"
              onClick={() => handleChooseCategory(value, index)}
            >
              {value}
            </p>
          );
        })}
      </div>
      <Content data={data} dataTags={dataTags} />
    </div>
  );
}

export default Index;
