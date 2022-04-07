import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "../About.css";
import variables from "./variables";
// import SearchBox from "./SearchBox";

const { about_text, developerInfo: info } = variables;

const About = () => {
  return (
    <>
      <div className="container my_Container">
        {/* <hr /> */}
        <motion.div
          className="dropdown"
          initial={{ y: -250 }}
          animate={{ y: 30 }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          <span className="asdf">
            <h2>About</h2>
          </span>
        </motion.div>
        <br />
        <motion.div
          className="text"
          initial={{ y: -400 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          style={{ margin: 50 }}
        >
          {about_text}
        </motion.div>
        {/* <SearchBox /> */}
        <br />
        <div className="profiles">
          {info.map((info, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="profile-item"
              key={info.fname + index}
            >
              <h2
                className="bold-text"
                style={{ marginTop: -70, textAlign: "center" }}
              >
                {info.fname}
              </h2>
              <img src={info.imgURL} alt={info.fname} />
              <p className="p-text" style={{ marginTop: 20 }}>
                {info.description}
                <br />
                <b>
                  <i>
                    <u>Interests</u>:&nbsp;
                  </i>
                </b>
                {info.interests}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
