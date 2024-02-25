import { useState } from "react";
import postProject from "../api/post-project";

function ProjectCreationForm() {
  const [project, setProject] = useState({
    title: "",
    description: "",
    goal: "",
    image: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setProject((prevProject) => ({
      ...prevProject,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (project.title && project.description && project.goal && project.image) {
      postProject(
        project.title,
        project.description,
        project.goal,
        project.image
      ).then((response) => {
        console.log(response);
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Project Name:</label>
        <input
          type="text"
          id="title"
          placeholder="Enter Project Name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">About:</label>
        <input
          type="text"
          id="description"
          placeholder="Enter Project Description"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="goal">Funding Goal ($):</label>
        <input
          type="text"
          id="goal"
          placeholder="Enter Project Funding Goal"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="image">Project Image:</label>
        <input
          type="url"
          id="image"
          placeholder="Enter Project Image URL"
          onChange={handleChange}
        />
      </div>
      {/* <div>
        <label htmlFor="categories">Project Category:</label>
        <input
          type="text"
          id="categories"
          placeholder="Choose Project Category"
          onChange={handleChange}
        />
      </div> */}
      <button type="submit">Create Project</button>
    </form>
  );
}

export default ProjectCreationForm;
