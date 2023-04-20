import React, { useEffect, useState } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";

const Scroll = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [isShow, setIsShow] = useState("none");
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
    if (winScroll > 100) {
      setIsShow("grid");
    } else {
      setIsShow("none");
    }
  };
  const topHandler = () => {
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="progressbar">
          <div
            className="progressMain"
            style={{ width: `${scrollTop}%` }}></div>
        </div>
      </div>
      <div
        id="progress"
        style={{
          display: `${isShow}`,
          background: `conic-gradient(#49516E ${scrollTop}%, rgba(255, 255, 255, 0.0)  ${scrollTop}%)`,
        }}
        onClick={topHandler}>
        <span id="progress-value">
          <IoMdArrowRoundUp />
        </span>
      </div>
    </>
  );
};

export default Scroll;
