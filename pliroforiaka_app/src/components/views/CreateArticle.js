<<<<<<< HEAD
import { motion } from "framer-motion";
import React , {useState} from 'react'
import Axios from "axios";


let getArticles
let changePageName

const CreateArticle= (state) => {
    const { changePageNameFn } = state;
    const [title_n, setTitle] = useState("");
    const [body_n, setBody] = useState("");
    const [description_n, setDescription] = useState("");
    const [articleFile_n, setArticleFile] = useState("");

    const createArticle = (e) => {
      e.preventDefault();
      const form = document.querySelector('#create')
      const formObj = [...form.elements]
      const titleVal = formObj.find(el => el === 'title').value   // TODO FIX
      const bodyVal = formObj.find(el => el === 'body').value     // TODO FIX
      const descrVal = formObj.find(el => el === 'description').value   // TODO FIX
      const articleFileVal = formObj.find(el => el === 'articleFile').value   // TODO FIX
      const data = new FormData();
      data.append("title", titleVal);
      data.append("body", bodyVal);
      data.append("description", descrVal);
      data.append("articleFile", articleFileVal); // Not sure
    
      Axios.post("/createArticle", data)
        .then((res) => {
          getArticles().then(res => {
            changePageName("Articles")
          })
        })
        .catch((e) => console.log(e));
    };

  return (
    <>
            <form>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Article's Title</label>
    <input placeholder={"title"}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    onChange={(event) => { 
        const { value } = event.target;
        setTitle(value);
    }}/>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" >Article's Body</label>
    <input placeholder= {"body"}  className="form-control" id="exampleInputPassword1" 
    onChange={(event) => { 
        const { value } = event.target;
        setBody(value);
    }}
    />
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Article's Description</label>
    <input placeholder={"description"}  className="form-control" id="exampleInputPassword1"
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

    <button type="submit" onClick={createArticle}>
          Create Article
        </button>
    </form>
    </>
  );
};

=======
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

>>>>>>> 48146e7d5932a4fb3cb34ef6c36fe83a0751997d
export default CreateArticle;