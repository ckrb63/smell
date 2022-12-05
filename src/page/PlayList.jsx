import React, { useState } from "react";
import "./PlayList.scss";
import classNames from "classnames";
import play from "../icons/play.svg";
import back from "../icons/back.svg";
import forward from "../icons/forward.svg";
import pageback from "../icons/backspace.svg";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";
import img8 from "./img/8.jpg";
import img9 from "./img/9.jpg";
import img10 from "./img/10.jpg";
import img11 from "./img/11.jpg";
import img12 from "./img/12.jpg";
import img13 from "./img/13.jpg";
import img14 from "./img/14.jpg";
import img15 from "./img/15.jpg";
import img16 from "./img/16.jpg";

const answer = [
  `
  \n당신은 삶의 한 페이지에 꽂혀있습니다.
  \n 당신의 추억엔 아무런 향기가 나지 않을 것 같지만 몇몇 사람의 손길이 닿은 어깨에는 책갈피 향기가 납니다.
\n 몇몇 사람은 당신과의 추억에 책갈피를 꽂고 여러 번 되돌아볼지도 모릅니다. 
\n당신 추억을 요약한 책의 제목은 무엇인가요?
책을 덮어야 제목이 보이겠죠. \n열심히 살아온 당신도 가끔은 책갈피를 꽂고 책을 덮은 뒤 추억을 되돌아보세요.`
];

function PlayList(props) {
  const [isTouch, setIsTouch] = useState(false);

  const getImage = () => {
    if (props.type.img === 1)
      return (
        <img className="playlist-wrapper-main-img" src={img1} alt="finish" />
      );
    else if (props.type.img === 2)
      return (
        <img className="playlist-wrapper-main-img" src={img2} alt="finish" />
      );
    else if (props.type.img === 3)
      return (
        <img className="playlist-wrapper-main-img" src={img3} alt="finish" />
      );
    else if (props.type.img === 4)
      return (
        <img className="playlist-wrapper-main-img" src={img4} alt="finish" />
      );
    else if (props.type.img === 5)
      return (
        <img className="playlist-wrapper-main-img" src={img5} alt="finish" />
      );
    else if (props.type.img === 6)
      return (
        <img className="playlist-wrapper-main-img" src={img6} alt="finish" />
      );
    else if (props.type.img === 7)
      return (
        <img className="playlist-wrapper-main-img" src={img7} alt="finish" />
      );
    else if (props.type.img === 8)
      return (
        <img className="playlist-wrapper-main-img" src={img8} alt="finish" />
      );
    else if (props.type.img === 9)
      return (
        <img className="playlist-wrapper-main-img" src={img9} alt="finish" />
      );
    else if (props.type.img === 10)
      return (
        <img className="playlist-wrapper-main-img" src={img10} alt="finish" />
      );
    else if (props.type.img === 11)
      return (
        <img className="playlist-wrapper-main-img" src={img11} alt="finish" />
      );
    else if (props.type.img === 12)
      return (
        <img className="playlist-wrapper-main-img" src={img12} alt="finish" />
      );
    else if (props.type.img === 13)
      return (
        <img className="playlist-wrapper-main-img" src={img13} alt="finish" />
      );
    else if (props.type.img === 14)
      return (
        <img className="playlist-wrapper-main-img" src={img14} alt="finish" />
      );
    else if (props.type.img === 15)
      return (
        <img className="playlist-wrapper-main-img" src={img15} alt="finish" />
      );
    else if (props.type.img === 16)
      return (
        <img className="playlist-wrapper-main-img" src={img16} alt="finish" />
      );
  };

  const image = getImage();

  const wrapperClickHandler = () => {
    if (isTouch) setIsTouch(false);
  };

  return (
    <div className="playlist">
      <div
        className={classNames("playlist-wrapper", { isTouch })}
        onClick={wrapperClickHandler}>
        {!isTouch && (
          <div className="playlist-wrapper-main">
            {image}
            <div className="playlist-wrapper-main-title">
              {props.type.title}
              <div>나는</div>
            </div>
            <div className="playlist-wrapper-main-time">
              <div className="playlist-wrapper-main-time-start">2:19</div>
              <div className="playlist-wrapper-main-time-bar">
                <div className="playlist-wrapper-main-time-fill" />
              </div>
              <div className="playlist-wrapper-main-time-start">4:09</div>
            </div>
            <div className="playlist-wrapper-main-play">
              <img src={back} alt="back" />
              <img
                className="button"
                src={play}
                alt="play"
                onClick={() => {
                  setIsTouch(true);
                }}
              />
              <img src={forward} alt="forward" />
            </div>
            <div className="playlist-wrapper-main-tip">
              재생버튼을 눌러보세요
            </div>
          </div>
        )}
        {isTouch && (
          <div className="playlist-wrapper-back">
            <div className="playlist-wrapper-back-title">
              당신의 추억은 <span>{props.type.title}</span>
            </div>
            <p className="playlist-wrapper-desc">{props.type.text}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PlayList;
