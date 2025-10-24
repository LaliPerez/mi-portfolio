
import React from 'react';
import { SKILLS_DATA } from '../constants';

const Skills = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Technical Proficiency</h2>
        <p className="mt-4 text-lg leading-8 text-gray-400">A snapshot of the technologies I work with.</p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS_DATA.map((category) => (
          <div key={category.title} className="rounded-2xl bg-gray-800/50 p-6 ring-1 ring-inset ring-gray-700/50">
            <h3 className="text-xl font-semibold leading-7 text-cyan-400">{category.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center rounded-md bg-gray-700 px-3 py-1 text-sm font-medium text-gray-300"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
