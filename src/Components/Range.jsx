import React, { useRef } from "react";
import "./styles/range.css";

const Range = () => {
  const myinput = useRef();

  const changeSlider = (e) => {
    // const inputVal = e.target.value;
    // const min = e.target.min;
    // const max = e.target.max;
    // myinput.current.style.background =
    //   "linear-gradient(to right, green, yellow , red )";
    // myinput.current.style.background = `linear-gradient(to right, green, yellow , red ${
    //   ((inputVal - min) / (max - min)) * 100
    // }%)`;
  };
  return (
    <React.Fragment>
      <input
        // onInput={(e) => {
        //   changeSlider(e);
        // }}
        ref={myinput}
        type="range"
        min={10}
        max={100}
        step={1}
        defaultValue={100}
      />
    </React.Fragment>
  );
};

export default Range;
