import React from "react";
import "./Footer.scss";

import {LuGithub} from "react-icons/lu";
import {AiOutlineInstagram} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";
import {LuTwitter} from "react-icons/lu";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-footer">
        <h1>Want to Know about us ?</h1>
      </div>
      <div className="middle-footer">
        <div className="middle-footer-text">
          <p>
            Come and know more about Zairza and join our community to experience
            such more amazing stuffs.
          </p>
        </div>
        <div className="middle-footer-icon">
          <div className="middle-footer-icons"><LuTwitter /></div>
          <div className="middle-footer-icons"><AiOutlineMail /></div>
          <div className="middle-footer-icons"><AiOutlineInstagram /></div>
          <div className="middle-footer-icons"><LuGithub /></div>
        </div>
      </div>
      <div className="bottom-footer">
       <div className="bottom-footer-text">
       <p>
          OUTR (CET Campus), Kalinga Nagar, Ghatikia, Bhubaneswar, Odisha. +91
          7205883336
        </p>
       </div>
       <div className="bottom-footer-icon">
       <div className="bottom-footer-icons">Presented by</div>
       <div className="bottom-footer-icons">icon1</div>
       </div>
      </div>
    </div>
  );
};

export default Footer;
