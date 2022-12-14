import React, { useState } from "react";
import { list, typeList } from "./testQuestion";
import "./Test.scss";
import { useRef } from "react";
import { useEffect } from "react";
import classNames from "classnames";
import PlayList from "./PlayList";
import img1 from "./img/20.jpg";
import img2 from "./img/21.jpg";
import img3 from "./img/22.jpg";
import img4 from "./img/23.jpg";
import img5 from "./img/24.jpg";
import img6 from "./img/25.jpg";
import img7 from "./img/26.jpg";
import img8 from "./img/27.jpg";
import img9 from "./img/28.jpg";
import img10 from "./img/29.jpg";
import img11 from "./img/30.jpg";
import img12 from "./img/31.jpg";

function Test() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState({ a: 0, b: 0, c: 0, d: 0 });
  const [transition, setTransition] = useState(false);
  const scrollRef = useRef();

  const answerHandler = () => {
    setIndex(index + 1);
  };

  useEffect(() => {
    if (index === 12) {
      scrollRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
    } else {
      setTimeout(() => {
        scrollRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
      }, 100);
    }
  }, [index]);

  const answerClickHandler = (ans, type) => {
    setIndex(index + 1);
    if (type === 1) {
      const temp = count.a;
      setCount((prev) => {
        return { ...prev, a: temp + ans };
      });
    } else if (type === 2) {
      const temp = count.b;
      setCount((prev) => {
        return { ...prev, b: temp + ans };
      });
    } else if (type === 3) {
      const temp = count.c;
      setCount((prev) => {
        return { ...prev, c: temp + ans };
      });
    } else if (type === 4) {
      const temp = count.d;
      setCount((prev) => {
        return { ...prev, d: temp + ans };
      });
    }
  };

  const getType = () => {
    if (count.a > 0 && count.d < 0 && count.d < 0 && count.b < 0)
      return typeList[0];
    else if (count.a > 0 && count.c < 0 && count.d < 0 && count.b > 0)
      return typeList[1];
    else if (count.a > 0 && count.c < 0 && count.d > 0 && count.b < 0)
      return typeList[2];
    else if (count.a > 0 && count.c < 0 && count.d > 0 && count.b > 0)
      return typeList[3];
    else if (count.a > 0 && count.c > 0 && count.d < 0 && count.b < 0)
      return typeList[4];
    else if (count.a > 0 && count.c > 0 && count.d < 0 && count.b > 0)
      return typeList[5];
    else if (count.a > 0 && count.c > 0 && count.d > 0 && count.b < 0)
      return typeList[6];
    else if (count.a > 0 && count.c > 0 && count.d > 0 && count.b > 0)
      return typeList[7];
    else if (count.a < 0 && count.c < 0 && count.d < 0 && count.b < 0)
      return typeList[8];
    else if (count.a < 0 && count.c < 0 && count.d < 0 && count.b > 0)
      return typeList[9];
    else if (count.a < 0 && count.c < 0 && count.d > 0 && count.b < 0)
      return typeList[10];
    else if (count.a < 0 && count.c < 0 && count.d > 0 && count.b > 0)
      return typeList[11];
    else if (count.a < 0 && count.c > 0 && count.d < 0 && count.b < 0)
      return typeList[12];
    else if (count.a < 0 && count.c > 0 && count.d < 0 && count.b > 0)
      return typeList[13];
    else if (count.a < 0 && count.c > 0 && count.d > 0 && count.b < 0)
      return typeList[14];
    else if (count.a < 0 && count.c > 0 && count.d > 0 && count.b > 0)
      return typeList[15];
    else return typeList[0];
  };

  const type = getType();
  console.log(type.title, count.a, count.c, count.d, count.b);

  return (
    <div
      className={classNames("test", {
        end: index > 11,
        zero: type === typeList[0],
        one: type === typeList[1],
        two: type === typeList[2],
        three: type === typeList[3],
        four: type === typeList[4],
        five: type === typeList[5],
        six: type === typeList[6],
        seven: type === typeList[7],
        eight: type === typeList[8],
        nine: type === typeList[9],
        ten: type === typeList[10],
        eleven: type === typeList[11],
        twelve: type === typeList[12],
        thirhteen: type === typeList[13],
        fourteen: type === typeList[14],
        fifteen: type === typeList[15]
      })}
      ref={scrollRef}>
      {index === 12 && <PlayList type={type} />}
      <div className="test-item">
        <img className="test-item-img" src={img1} alt="img1" />
        <div className="test-item-q">{list[0].q}</div>
        <div className="test-item-a">
          <div
            className="test-item-a-yes"
            onClick={() => {
              answerClickHandler(1, 1);
            }}>
            ???
          </div>
          <div
            className="test-item-a-yes"
            onClick={() => {
              answerClickHandler(-1, 1);
            }}>
            ?????????
          </div>
        </div>
      </div>
      {index >= 1 && (
        <div className="test-item">
          <img className="test-item-img" src={img2} alt="img1" />
          <div className="test-item-q">{list[1].q}</div>
          <div className="test-item-a">
            <div
              className="test-item-a-yes"
              onClick={() => {
                answerClickHandler(1, 2);
              }}>
              ???
            </div>
            <div
              className="test-item-a-yes"
              onClick={() => {
                answerClickHandler(-1, 2);
              }}>
              ?????????
            </div>
          </div>
        </div>
      )}
      {index >= 2 && (
        <div className="test-item">
          <img className="test-item-img" src={img3} alt="img1" />
          <div className="test-item-q">{list[2].q}</div>
          <div className="test-item-a">
            <div
              className="test-item-a-yes"
              onClick={() => {
                answerClickHandler(1, 2);
              }}>
              ???
            </div>
            <div
              className="test-item-a-yes"
              onClick={() => {
                answerClickHandler(-1, 2);
              }}>
              ?????????
            </div>
          </div>
        </div>
      )}
      {index >= 3 && (
        <div className="test-item">
          <img className="test-item-img" src={img4} alt="img1" />
          <div className="test-item-q">{list[3].q}</div>
          <div className="test-item-a">
            <div
              className="test-item-a-yes"
              onClick={() => {
                answerClickHandler(1, 3);
              }}>
              ???
            </div>
            <div
              className="test-item-a-yes"
              onClick={() => {
                answerClickHandler(-1, 3);
              }}>
              ?????????
            </div>
          </div>
        </div>
      )}
      {index >= 4 && (
        <div className="test-item">
          <img className="test-item-img" src={img5} alt="img1" />
          <div className="test-item-q">{list[4].q}</div>
          <div className="test-item-a">
            <div
              className="test-item-a-yes"
              onClick={() => {
                answerClickHandler(1, 4);
              }}>
              ???
            </div>
            <div
              className="test-item-a-yes"
              onClick={() => {
                answerClickHandler(-1, 4);
              }}>
              ?????????
            </div>
          </div>
        </div>
      )}
      {index >= 5 && (
        <div className="test-item">
          <img className="test-item-img" src={img6} alt="img1" />
          <div className="test-item-q">{list[5].q}</div>
          <div className="test-item-a">
            <div
              className="test-item-a-yes"
              onClick={() => {
                answerClickHandler(1, 3);
              }}>
              ???
            </div>
            <div
              className="test-item-a-yes"
              onClick={() => {
                answerClickHandler(-1, 3);
              }}>
              ?????????
            </div>
          </div>
        </div>
      )}
      {index >= 6 && (
        <div className="test-item">
          <img className="test-item-img" src={img7} alt="img1" />
          <div className="test-item-q">{list[6].q}</div>
          <div className="test-item-a">
            <div
              className="test-item-a-yes"
              onClick={() => {
                answerClickHandler(-1, 3);
              }}>
              ???
            </div>
            <div
              className="test-item-a-yes"
              onClick={() => {
                answerClickHandler(1, 3);
              }}>
              ?????????
            </div>
          </div>
        </div>
      )}
      {index >= 7 && (
        <div className="test-item">
          <img className="test-item-img" src={img8} alt="img1" />
          <div className="test-item-q">{list[7].q}</div>
          <div className="test-item-a">
            <div
              className="test-item-a-yes"
              onClick={() => {
                answerClickHandler(-1, 1);
              }}>
              ???
            </div>
            <div
              className="test-item-a-yes"
              onClick={() => {
                answerClickHandler(1, 1);
              }}>
              ?????????
            </div>
          </div>
        </div>
      )}
      {index >= 8 && (
        <div className="test-item">
          <img className="test-item-img" src={img9} alt="img1" />
          <div className="test-item-q">{list[8].q}</div>
          <div className="test-item-a">
            <div
              className="test-item-a-yes"
              onClick={() => {
                answerClickHandler(1, 4);
              }}>
              ???
            </div>
            <div
              className="test-item-a-yes"
              onClick={() => {
                answerClickHandler(-1, 4);
              }}>
              ?????????
            </div>
          </div>
        </div>
      )}
      {index >= 9 && (
        <div className="test-item">
          <img className="test-item-img" src={img10} alt="img1" />
          <div className="test-item-q">{list[9].q}</div>
          <div className="test-item-a">
            <div
              className="test-item-a-yes"
              onClick={() => {
                answerClickHandler(1, 4);
              }}>
              ???
            </div>
            <div
              className="test-item-a-yes"
              onClick={() => {
                answerClickHandler(-1, 4);
              }}>
              ?????????
            </div>
          </div>
        </div>
      )}
      {index >= 10 && (
        <div className="test-item">
          <img className="test-item-img" src={img11} alt="img1" />
          <div className="test-item-q">{list[10].q}</div>
          <div className="test-item-a">
            <div
              className="test-item-a-yes"
              onClick={() => {
                answerClickHandler(1, 2);
              }}>
              ???
            </div>
            <div
              className="test-item-a-yes"
              onClick={() => {
                answerClickHandler(-1, 2);
              }}>
              ?????????
            </div>
          </div>
        </div>
      )}
      {index >= 11 && (
        <div className="test-item">
          <img className="test-item-img" src={img12} alt="img1" />
          <div className="test-item-q">{list[11].q}</div>
          <div className="test-item-a">
            <div
              className="test-item-a-yes"
              onClick={() => {
                answerClickHandler(-1, 1);
              }}>
              ???
            </div>
            <div
              className="test-item-a-yes"
              onClick={() => {
                answerClickHandler(1, 1);
              }}>
              ?????????
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Test;
