import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
    return (
        <div className="info">
            <img className="profile_img" src="/src/assets/omar.jpg" alt="" />
            <h1 className="name">Omar Hiweish</h1>
            <h5 className="title">Full Stack Developer</h5>
            <h6 className="website">omarhiweish.website</h6>
            <div className="buttons">
                <a className="email" href="mailto:omarhiweish@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                    Email
                </a>
                <a
                    className="linkedin"
                    target={"_blank"}
                    href="https://www.linkedin.com/in/omar-hiweish/">
                    <FontAwesomeIcon icon={faLinkedin} />
                    LinkedIn
                </a>
            </div>
        </div>
    );
}
