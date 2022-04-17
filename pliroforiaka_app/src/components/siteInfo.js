import Alex from "../resources/Alex.jpg";
import Daxada from "../resources/Jim.jpg";
import Jim from "../resources/Daxada.jpg";

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

export { aboutText, developerInfo };
