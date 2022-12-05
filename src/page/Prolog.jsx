import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Prolog.scss";

function Prolog() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  console.log(2);
  const text = () => {
    if (page === 0) return "프롤로그 페이지 1 - 당신은 후각을 잃었습니다.";
    else if (page === 1) return "프롤로그 페이지 2 - 페이지 2";
    else return "프롤로그 페이지 마지막";
  };

  const context = text();

  const prologClickHandler = () => {
    if (page < 2) setPage(page + 1);
    else navigate("/test");
  };

  return (
    <div className="home">
      {page === 0 && (
        <div className="home-pr" onClick={prologClickHandler}>
          {context}
        </div>
      )}
      {page === 1 && (
        <div className="home-pr" onClick={prologClickHandler}>
          {context}
        </div>
      )}
      {page === 2 && (
        <div className="home-pr" onClick={prologClickHandler}>
          {context}
        </div>
      )}
    </div>
  );
}

export default Prolog;
