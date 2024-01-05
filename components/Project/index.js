import {useState} from 'react';
import './index.css'

const Project = () => {
    const [text, setText] = useState('');
    const [description, setDescription] = useState('');
    const [projectLink, setProjectLink] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const addProject = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = e => {
    setSubmitted(false);
    setText(e.target.value);
    setDescription(e.target.value);
    setProjectLink(e.target.value);
  };

    addProject = e =>{
        e.preventDefault();
    setSubmitted(true);

    }

    const handleChange = e => {
    setSubmitted(false);
    setText(e.target.value);
    };

   return ( 
  <div className="container">
      <h1 className="form-heading">Project</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <div className="mb">
          <label HtmlFor="name">Project Name</label>
          <input type="text" value = {name} className="form-control" id="name" onChange={e => handleChange(e)} />
          
        </div>
        <div class="mb">
          <label htmlFor="project-link">Project Link</label>
          <input type="text" value = {projectLink} className="form-control" id="project-link" onChange={e => handleChange(e)}/>
          
        </div>
        <div className=mb>
            <label htmlFor= "description">Description</label>
            <textarea rows="4" value = {description} className="form-control" id="description" onChange={e => handleChange(e)}>

            </textarea>
        </div>
        <div class="container-btn">
        <button className="btn" type="submit" onClick= {addProject}>Add</button>
        </div>
      </form>
      {submitted && (<div>
          <h3>{name}</h3>
          <p>{description}</p>
      </div>)}
    </div>
   )
}

export default Project