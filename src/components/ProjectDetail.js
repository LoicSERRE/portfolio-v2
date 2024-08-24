import React from 'react';
import '../app/globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export default function ProjectDetail({ project }) {
    return (
        <div className="project-detail">
            <div className="project-banner">
                <h1 className="project-title">{project.title}</h1>
                <p className="project-date">{project.date}</p>
            </div>
            <div className="project-body">
                <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                </div>
                <div className="project-description-container">
                    <p className="project-description">{project.description}</p>
                </div>
            </div>
            <div className="project-info">
                <div className="project-tech">
                    <h3>Technologies Utilisées</h3>
                    <ul className="tech-list">
                        {project.technologies.map((tech, index) => (
                            <li key={index} className="tech-item">
                                <a href={tech.doc} target="_blank" rel="noopener noreferrer" className="tech-link">
                                    <img src={tech.logo} alt={tech.name} className="tech-logo" />
                                    <span className="tech-name">{tech.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="project-links">
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
                    {project.isOnline && (
                        <a href={project.preview} className="project-link" target="_blank" rel="noopener noreferrer">
                            Voir le projet
                        </a>
                    )}                
                </div>
            </div>
            {project.isOnline && (
                <div className="project-preview-container">
                    <h3 className="project-preview-title">
                        <FontAwesomeIcon icon={faEye} className="project-preview-icon" />
                        Rendu du projet ci-dessous
                    </h3>
                    <iframe src={project.preview} className="project-preview" title="Project Preview"></iframe>
                </div>
            )}
        </div>
    );
}