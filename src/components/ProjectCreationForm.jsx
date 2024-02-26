import { useState, useEffect } from "react";
import postProject from "../api/post-project";
import useCategories from "../hooks/use-categories";

function ProjectCreationForm() {
  const { categories } = useCategories();
  const [project, setProject] = useState({
    title: "",
    description: "",
    goal: "",
    image: "",
    categories: [],
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    if (id === "categories") {
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
      project.image &&
      project.categories.length > 0
    ) {
      postProject(
        project.title,
        project.description,
        project.goal,
        project.image,
        project.categories
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
