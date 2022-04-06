import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "../About.css";
import { text } from "./variables";
import Alex from "../resources/Alex.jpg";
import Daxada from "../resources/Jim.jpg";
import Jim from "../resources/Daxada.jpg";

const info = [
  {
    fname: "Δημήτρης",
    description:
      "Undergraduate Student in Computer Science from the Aristotle University of Thessaloniki",
    interests: "Penetration Testing & Traveling",
    imgURL: Daxada,
  },
  {
    fname: "Αλέξανδρος",
    description:
      "Undergraduate Student in Computer Science from the Aristotle University of Thessaloniki",
    interests: "Data-Web Management & CS:GO",
    imgURL: Alex,
  },
  {
    fname: "Τριαντάφυλλος",
    description:
      "Undergraduate Student in Computer Science from the Aristotle University of Thessaloniki",
    interests: "Web Development & Football",
    imgURL: Jim,
  },
];

const About = () => {
  return (
    <>
      <div className="my_Container">
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
          {text}
        </motion.div>
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
