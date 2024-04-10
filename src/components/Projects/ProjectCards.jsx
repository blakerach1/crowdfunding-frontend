import "./ProjectCards.css";
import ProjectCard from "./ProjectCard";
import {useState, useEffect } from "react";
import Paginate from "../Projects/Paginate.jsx";


function ProjectCards({ projects }) {
    const [shuffledProjects, setShuffledProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage] = useState(6);

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = shuffledProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
    );

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const previousPage = () => {
        if (currentPage !== 1) {
        setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage !== Math.ceil(shuffledProjects.length / projectsPerPage)) {
        setCurrentPage(currentPage + 1);
        }
    };

    useEffect(() => {
        const allProjects = projects.flat();
        const shuffled = shuffleArray(allProjects);
        setShuffledProjects(shuffled);
    }, [projects]); //remount every time the projects change

    //the function to shuffle the array elements
    const shuffleArray = (array) => {
        const shuffledArray = [...array]; //creates a copy of the original array
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i],
            ]; //swap the current element with a random element
        }
        return shuffledArray;
    };

    return (
        <>
            <div className="profile-cards-container">
                {currentProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            <div className="paginate-section">
                <div className="paginate-numbers">
                    <Paginate
                    projectsPerPage={projectsPerPage}
                    totalProjects={shuffledProjects.length}
                    paginate={paginate}
                    previousPage={previousPage}
                    nextPage={nextPage}
                    />
                </div>
            </div>
        </>
    );
}

export default ProjectCards;
  