import React from "react";
import "./Paginate.css";

const Paginate = ({
    projectsPerPage,
    totalProjects,
    paginate,
    previousPage,
    nextPage,
  }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <>
        <ul className="pagination-list">
          <li onClick={previousPage} className="pagination-list-item">
            Previous
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className="pagination-list-item"
              onClick={() => paginate(number)}
            >
              {number}
            </li>
          ))}
          <li onClick={nextPage} className="pagination-list-item">
            Next
          </li>
        </ul>
      </>
    );
  };
  
  export default Paginate;
  