
import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { GithubIcon, ExternalLinkIcon } from './icons/SocialIcons';

const Projects = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Projects</h2>
        <p className="mt-4 text-lg leading-8 text-gray-400">A selection of my work, demonstrating my skills in practice.</p>
      </div>
      <div className="mt-16 space-y-16">
        {PROJECTS_DATA.map((project) => (
          <article key={project.title} className="relative isolate flex flex-col gap-8 lg:flex-row rounded-2xl bg-gray-800/50 ring-1 ring-inset ring-gray-700/50 p-8 transition-shadow hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
              <img
                src={project.imageUrl}
                alt={`Screenshot of ${project.title}`}
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div>
              <div className="flex items-center gap-x-4 text-xs">
                {/* Optional date or category can go here */}
              </div>
              <div className="group relative max-w-xl">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-cyan-400">
                    {project.title}
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-400">{project.description}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-full bg-cyan-900/50 px-3 py-1 text-xs font-medium text-cyan-300 ring-1 ring-inset ring-cyan-400/20">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-x-4">
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 text-gray-400 hover:text-white transition-colors" aria-label="GitHub Repository">
                    <GithubIcon className="h-5 w-5" />
                    <span>Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 text-gray-400 hover:text-white transition-colors" aria-label="Live Demo">
                    <ExternalLinkIcon className="h-5 w-5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
