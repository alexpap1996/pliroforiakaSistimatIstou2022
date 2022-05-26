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

export default CreateArticle;