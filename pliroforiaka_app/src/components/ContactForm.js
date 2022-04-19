import React, { useState } from "react";
// import "./ContactForm.css";
import ContactCard from "./ContactCard";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="bodyBg">
      <h1 className="text-center py-3">Επικοινωνία</h1>
      <ContactCard
        email="Email: EE.Media@ee.doe.gov."
        text="Office of the Assistant Secretary
              Energy Efficiency and Renewable Energy
              Mail Stop EE-1
              Department of Energy
              Washington, DC 20585"
        title="OFFICE OF ENERGY EFFICIENCY AND RENEWABLE ENERGY"
        imgUrl={
          "https://roofandfloor.thehindu.com/real-estate-blog/wp-content/uploads/sites/14/2021/05/Sustainable-homes.png"
        }
      />
      <ContactCard
        email="Industrieweg 9
          7944 HT MEPPEL
          The Netherlands"
        text="Green Earth Products is registered with the Chamber of Commerce under number 32158695.
          Our VAT number: NL0021.64.130.B18"
        title="Green Earth"
        imgUrl={
          "https://i.pinimg.com/736x/38/6a/90/386a9072c0575d625e6f7c50da9f38aa.jpg"
        }
      />
      <ContactCard
        phone="Phone:
          613-599-3419"
        email="
          Email:
          info@makeitgreen.ca"
        text="5200 Flewellyn Rd. Stittsville, Ontario"
        title="Make It Green"
        imgUrl={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Ls9MnB2X-fT7i_7fDNXS9Sety1SxuEgtbs3X_rcIpoeFMmKdXwUhdIh5DIQBxUFoSqw&usqp=CAU"
        }
      />
      <section id="contact">
        <div className="contact-box">
          <div className="contact-links">
            <h2 className="contactTitle">Επικοινωνία</h2>
            <div className="links">
              <div className="link">
                <a href="linkedin.com">
                  <img
                    class="contactImg"
                    src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
                    alt="linkedin"
                  />
                </a>
              </div>
              <div className="link">
                <a href="https://github.com/alexpap1996/pliroforiakaSistimatIstou2022">
                  <img
                    class="contactImg"
                    src="https://i.postimg.cc/YCV2QBJg/github.png"
                    alt="github"
                  />
                </a>
              </div>
              <div className="link">
                <a href="codepen.io">
                  <img
                    className="contactImg"
                    src="https://i.postimg.cc/W4Znvrry/codepen.png"
                    alt="codepen"
                  />
                </a>
              </div>
              <div className="link">
                <a href="gmail.com">
                  <img
                    class="contactImg"
                    src="https://i.postimg.cc/NjLfyjPB/email.png"
                    alt="email"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit}>
              <div className="form-item my-3">
                <input type="text" name="name" id="name" required />
                <label htmlFor="name">Όνομα:</label>
              </div>
              <div className="form-item my-3">
                <input type="text" name="email" id="email" required />
                <label htmlFor="email">Email:</label>
              </div>
              <div className="form-item">
                <textarea
                  className=""
                  name="message"
                  id="message"
                  required
                ></textarea>
                <label htmlFor="message">Μήνυμα:</label>
              </div>
              <button className="submit-btn" type="submit">
                {status}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
