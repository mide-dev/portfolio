import React from "react";
import { Link } from "react-router-dom";

const CardComp = ({ title, image, description, webapp, github, Tech }) => {
  return (
    <div className="card-grid max-w-64 overflow-hidden rounded-lg border border-gray-300 bg-transparent text-center">
      {/* <img src={image} alt={title} className="w-full object-cover" /> */}
      <img src={image} alt={title} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-100">
          {description}
        </p>
      </div>
      <div>
        {webapp ? (
          <Link
            to={webapp}
            target="_blank"
            className="cursor-pointer text-blue-500 underline"
          >
            See WebApp
          </Link>
        ) : (
          <Link
            to={github}
            target="_blank"
            className="cursor-pointer text-blue-500 underline"
          >
            See GitHub
          </Link>
        )}
      </div>
    </div>
  );
};

export default CardComp;
