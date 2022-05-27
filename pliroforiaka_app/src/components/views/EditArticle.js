import "../styles/EditArticle.css";
import { motion } from "framer-motion";
import React , {useState} from 'react'
import Axios from "axios";

const EditArticle = (state) => {
  const { changePageNameFn } = state;
  const {
    title,
    body,
    image,
    author,
    created,
    _id,
    description,
  } = state.pageData;

  const [title_n, setTitle] = useState("");
  const [body_n, setBody] = useState("");
  const [description_n, setDescription] = useState("");
  const [articleFile_n, setArticleFile] = useState("");

  const EditArticle = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title_n);
    data.append("body", body_n);
    data.append("description", description_n);
    data.append("articleFile", articleFile_n);
    data.append("id", _id);

    Axios.patch("/EditArticle", data , _id)
      .then((res) => console.log("Edited article = ", res.data))
      .catch((e) => console.log(e));
    changePageNameFn("Articles");
  
  };


  const deleteArticle = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("id", _id);

    Axios.delete("/deleteArticle", { data: { id: _id } })
      .then((res) => console.log("Edited article = ", res.data))
      .catch((e) => console.log(e));
    changePageNameFn("Articles");
  
  };

  return (
    <>
    <div className="myContainer">
        <img
          className="myimg1"
          src={image?.url}
          alt="article"
        />
    <form className="editform">
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Article's Title</label>
    <input placeholder={title}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    onChange={(event) => { 
        const { value } = event.target;
        setTitle(value);
    }}/>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" >Article's Body</label>
    <input placeholder= {body}  className="form-control" id="exampleInputPassword1" 
    onChange={(event) => { 
        const { value } = event.target;
        setBody(value);
    }}
    />
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Article's Description</label>
    <input placeholder={description}  className="form-control" id="exampleInputPassword1"
    onChange={(event) => {
        const { value } = event.target;
        setDescription(value);
    }}/>
    </div>

    <input
    type="file"
    accept=".jpg"
    className="form-control"
    onChange={(event) => {
    const file = event.target.files[0];
    setArticleFile(file);
    }}
    />
    </form>
    <button type="submit"  className="btn btn-danger mt-auto hover-dark mybtn_edit" onClick={EditArticle}>Edit Article</button>

    <button type="submit"  className="btn btn-danger mt-auto hover-dark mybtn_edit" onClick={deleteArticle}>Delete Article</button>

      
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

export default EditArticle;