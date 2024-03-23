import { BsArrowUpShort } from "react-icons/bs";
import "./scroll.css";
import { useEffect, useState } from "react";

const Scroll = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const toggleScroll = () => {
      if (window.scrollY > 300) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", toggleScroll);
    return () => {
      window.addEventListener("scroll", toggleScroll);
    };
  }, []);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <>
      {scroll && (
        <button onClick={scrollTop} className="btn-scroll">
          <BsArrowUpShort />
        </button>
      )}
    </>
  );
};

export default Scroll;
