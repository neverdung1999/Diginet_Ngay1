import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import Content from "../content/index";
import _ from "lodash";

let arrTest = [];

function Index(props) {
  const { data } = props;
  let jsonParse = [];
  const [dataTest, setDataTest] = useState(data);
  const [newArr] = useState([]);
  const [newArr2] = useState([]);
  const [dataTags, setDataTags] = useState([]);
  const [arrFilterChoose, setArrFilterChoose] = useState([]);

  const handleChooseCategory = (value, index) => {
    newArr2.splice(index, 1);
    setArrFilterChoose([...arrFilterChoose, value]);
    arrTest.push(value);

    checkValue();
  };

  const checkValue = () => {
    let arrTest1 = [];
    data.map((item, index) => {
      let status = false;
      let temp = [];
      if (item.tags !== undefined) {
        jsonParse = JSON.parse(item.tags);
        arrTest.forEach((e, idx) => {
          if (!jsonParse.includes(e)) {
            status = true;
            temp.push(e);
          }
        });
        if (!status) {
          arrTest1.push(item);
          setDataTags(arrTest1);
        } else {
          if (dataTags.length === temp.length) {
            setDataTags([]);
            setDataTest([]);
          }
        }
      }
    });
  };

  const handleClickChoosedCate = (value, index) => {
    let temp = arrFilterChoose.filter((item) => item !== value);
    setArrFilterChoose(temp);
    arrTest.splice(index, 1);
    checkValue1();
  };

  const checkValue1 = () => {
    let arrTest1 = [];
    data.forEach((item) => {
      let status = false;
      let temp = [];
      if (item.tags !== undefined) {
        jsonParse = JSON.parse(item.tags);
        console.log(jsonParse);
        arrTest.forEach((e, idx) => {
          console.log(e);
          if (!jsonParse.includes(e)) {
            status = true;
            temp.push(e);
          }
        });

        if (!status) {
          arrTest1.push(item);
          setDataTags(arrTest1);
          if (arrTest.length === 0) {
            setDataTags([]);
          }
        } else {
          setDataTest(data);
        }
      }
    });
  };

  return (
    <div className="container">
      {data.forEach((value) => {
        const test = value.tags;
        if (typeof test === "string") {
          const test = JSON.parse(value.tags);
          for (let i = 0; i < test.length; i++) {
            newArr.push(test[i]);
          }
        }
        for (let i = 0; i < newArr.length; i++) {
          if (newArr2.indexOf(newArr[i]) === -1) {
            if (!arrFilterChoose.includes(newArr[i])) {
              newArr2.push(newArr[i]);
            }
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
      <div className="listChooseCate">
        <span id="span__listChooseCate">Danh sách chủ đề đã chọn:</span>

        {arrFilterChoose.map((value, index) => {
          return (
            <p
              key={index}
              id="p-content"
              onClick={() => handleClickChoosedCate(value, index)}
            >
              {value}
            </p>
          );
        })}
      </div>
      <Content
        data={dataTest}
        dataTags={dataTags}
        arrFilterChoose={arrFilterChoose}
      />
    </div>
  );
}

export default Index;
