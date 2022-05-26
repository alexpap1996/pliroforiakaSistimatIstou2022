
import "../styles/EditArticle.css";
import { motion } from "framer-motion";
import React , {useState} from 'react'
import Axios from "axios";

const CreateArticle = (state) => {
  const { changePageNameFn } = state;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [description, setDescription] = useState("");
  const [articleFile, setArticleFile] = useState("");

  const createArticle = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("body", body);
    data.append("description", description);
    data.append("articleFile", articleFile);

    Axios.post("/createArticle", data)
      .then((res) => console.log("Created new article = ", res.data))
      .catch((e) => console.log(e));
    changePageNameFn("Articles");
  };

  return (
    <>
    <div className="myContainer">
        
    <form>
        <input
          name="title"
          type="text"
          placeholder="Title..."
          onChange={(event) => {
            const { value } = event.target;
            setTitle(value);
          }}
        />
        <input
          name="body"
          type="text"
          placeholder="body..."
          onChange={(event) => {
            const { value } = event.target;
            setBody(value);
          }}
        />
        <input
          name="description"
          type="text"
          placeholder="description..."
          onChange={(event) => {
            const { value } = event.target;
            setDescription(value);
          }}
        />
        <input
          type="file"
          accept=".jpg"
          className="form-control"
          onChange={(event) => {
            const file = event.target.files[0];
            setArticleFile(file);
          }}
        />
        <button type="submit" onClick={createArticle}>
          Create Article
        </button>
      </form>

      
    </div>
        <motion.button
          className="btn mt-auto hover-dark c-bg-green mybtn1"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.1, type: "tween" }}
          onClick={() => changePageNameFn("Articles")}
        >
          Επιστροφή στα Άρθρα
        </motion.button>
    </>
  );
};

export default CreateArticle;