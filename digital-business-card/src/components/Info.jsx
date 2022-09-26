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
                <div className="email">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href="mailto:omarhiweish@gmail.com" type="email">
                        Email
                    </a>
                </div>
                <div className="linkedin">
                    <FontAwesomeIcon icon={faLinkedin} />
                    <a target={"_blank"} href="https://www.linkedin.com/in/omar-hiweish/">
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
}
