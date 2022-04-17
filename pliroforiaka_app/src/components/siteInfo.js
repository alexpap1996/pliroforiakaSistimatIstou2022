import Alex from "../resources/Alex.jpg";
import Daxada from "../resources/Jim.jpg";
import Jim from "../resources/Daxada.jpg";

import water from "../resources/water.jpg";
import evoia from "../resources/evoia.jpg";
import bitcoin from "../resources/bitcoin.jpg";
import gardening from "../resources/gardening.png";
import solarenergy from "../resources/solar-energy.png";

const aboutText =
  "Στην ιστοσελίδα μας σας έχουμε ομαδοποιήσει και παρουσιάσει ορισμένες " +
  "πρακτικές που θα βοηθήσουν στην ομαλή μετάβαση ενός πιο φιλικού προς " +
  "το περιβάλλον τρόπου ζωής και στην επαγρύπνηση για την χρήση της " +
  "ατομικής προσπάθειας. Παράλληλα ο κάθε χρήστης θα έχει την δυνατότητα " +
  "να προσθέσει και εκείνος το δικό του άρθρο εφόσον το επιθυμεί " +
  "συμβάλλοντας ενεργά στην ενίσχυση της παγκόσμιας οικολογικής " +
  "συνείδησης.";

const developerInfo = [
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

const articles_info = [
  {
    article_title: "Protect your groundwater",
    article_description: "Article Description",
    article_imgURL: water,
  },
  {
    article_title: "Fire Hazard Protection",
    article_description: "Article Description",
    article_imgURL: evoia,
  },
  {
    article_title: "Bitcoin under pressure to adopt more sustainable practices",
    article_description: "Article Description",
    article_imgURL: bitcoin,
  },
  {
    article_title: "Eco friendly gardening",
    article_description: "Article Description",
    article_imgURL: gardening,
  },
  {
    article_title: "Solar Energy",
    article_description: "Article Description",
    article_imgURL: solarenergy,
  },
];

export { aboutText, developerInfo, articles_info };
