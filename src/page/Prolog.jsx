import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Prolog.scss";

function Prolog() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  console.log(2);
  const text = () => {
    if (page === 0) return "추억이 향기라면";
    else if (page === 1) return "당신은 후각을 잃었습니다.";
    else return "향기를 기억해내기 위해 추억을 되돌아보시겠습니까?";
  };

  const context = text();

  const prologClickHandler = () => {
    if (page < 1) setPage(page + 1);
  };

  return (
    <div className="home">
      {page === 0 && (
        <div className="home-pr" onClick={prologClickHandler}>
          {context}
        </div>
      )}
      {page === 1 && (
        <div className="home-pr">
          <div className="home-pr-text">{context}</div>
          <div
            className="home-pr-start"
            onClick={() => {
              setPage(page + 1);
            }}
            aria-hidden="true">
            다음
          </div>
        </div>
      )}
      {page === 2 && (
        <div className="home-pr">
          <div className="home-pr-text">{context}</div>
          <div
            className="home-pr-start"
            onClick={() => {
              navigate("/test");
            }}
            aria-hidden="true">
            시작하기
          </div>
        </div>
      )}
    </div>
  );
}

export default Prolog;
