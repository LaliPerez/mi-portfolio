
import React from 'react';
import { CERTIFICATIONS_DATA } from '../constants';
import { ExternalLinkIcon } from './icons/SocialIcons';

const Certifications = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Certifications & Credentials</h2>
        <p className="mt-4 text-lg leading-8 text-gray-400">My commitment to continuous learning and professional development.</p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {CERTIFICATIONS_DATA.map((cert) => (
          <div key={cert.title} className="group relative flex flex-col rounded-2xl bg-gray-800/50 ring-1 ring-inset ring-gray-700/50 transition-all duration-300 hover:ring-cyan-400/50 hover:bg-gray-800">
            <div className="flex flex-1 flex-col p-8">
              <div className="flex items-center gap-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-700">
                  <cert.logo className="h-7 w-7 text-gray-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold leading-6 text-white">{cert.title}</h3>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                </div>
              </div>
            </div>
            <a href={cert.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0" aria-label={`View certification: ${cert.title}`}>
              <span className="sr-only">View certification</span>
            </a>
            <ExternalLinkIcon className="absolute top-4 right-4 h-5 w-5 text-gray-500 transition-colors group-hover:text-cyan-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
