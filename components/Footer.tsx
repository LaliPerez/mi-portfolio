import React from 'react';
import { PROFILE } from '../constants';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons/SocialIcons';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900/50 border-t border-gray-800">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
            <p className="mt-2 text-gray-400">Feel free to reach out for collaborations or just a friendly hello!</p>
            <a href="mailto:lauraperezbosio@email.com" className="mt-4 inline-block text-cyan-400 hover:text-cyan-300 transition-colors">
            lauraperezbosio@email.com
            </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">GitHub</span>
            <GithubIcon className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/lperezbosio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">LinkedIn</span>
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <a href="mailto:lauraperezbosio@email.com" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Email</span>
            <MailIcon className="h-6 w-6" />
          </a>
        </div>
        <p className="mt-8 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;