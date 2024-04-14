import { useState } from "react";
import postProject from "../../api/post-project";
import useCategories from "../../hooks/use-categories";
import { useNavigate } from "react-router-dom";
import "./ProjectCreationForm.css";

function ProjectCreationForm() {
  const navigate = useNavigate();
  const { categories } = useCategories();
  const [project, setProject] = useState({
    title: "",
    description: "",
    goal: "",
    image: "",
    categories: [],
  });

  const [projectImage, setProjectImage] = useState(null);

  const handleChange = (event) => {
    const { id, value } = event.target;
    if (id === "image") {
      setProjectImage({
        image: event.target.files,
      });
      console.log(event.target.files);
    }
    else if (id === "categories") {
      const selectedCategories = Array.from(
        event.target.selectedOptions,
        (option) => option.text
      );
      setProject((prevProject) => ({
        ...prevProject,
        categories: selectedCategories,
      }));
    } else {
      setProject((prevProject) => ({
        ...prevProject,
        [id]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      project.title &&
      project.description &&
      project.goal &&
      projectImage &&
      project.categories.length > 0
    ) {
      const formData = new FormData();
      formData.append("title", project.title);
      formData.append("description", project.description);
      formData.append("goal", project.goal);
      formData.append("image", projectImage);
      project.categories.forEach((category) => {
        formData.append("categories[]", category);
      });
      postProject(
        formData
      ).then((response) => {
        navigate(`/project/${response.id}`);
      });
    }
  };

  return (
    <form className="project-creation-form" onSubmit={handleSubmit}>
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
          accept="image/*"
          id="image"
          onChange={handleChange}
          name="image"
          type="file"
        />
      </div>
      <div>
        <label htmlFor="categories">Project Category:</label>
        <select
          id="categories"
          value={project.categories}
          onChange={handleChange}
          multiple
        >
          {categories.map((category) => (
            <option key={category.id} value={category.title}>
              {category.title}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Create Project</button>
    </form>
  );
}

export default ProjectCreationForm;
