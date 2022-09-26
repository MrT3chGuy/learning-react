import React from "react";
import twitter from "../assets/twitter.svg";
import fb from "../assets/fb.svg";
import insta from "../assets/insta.svg";
import github from "../assets/github.svg";

export default function Footer() {
  return (
    <div className="footer">
      <a href="">
        <img src={twitter} alt="" />
      </a>
      <a href="">
        <img src={fb} alt="" />
      </a>
      <a href="">
        <img src={insta} alt="" />
      </a>
      <a target={"_blank"} href="https://github.com/MrT3chGuy">
        <img src={github} alt="" />
      </a>
    </div>
  );
}
