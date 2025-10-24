
import React, { useState, useEffect } from 'react';
import { PROFILE } from '../constants';
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon } from './icons/SocialIcons';

const Hero = () => {
  const [typedTitle, setTypedTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = ["Senior Software Architect", "Full-Stack Developer", "Cloud Native Enthusiast"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullTitle = titles[i];

      setTypedTitle(
        isDeleting
          ? fullTitle.substring(0, typedTitle.length - 1)
          : fullTitle.substring(0, typedTitle.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && typedTitle === fullTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedTitle === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typedTitle, isDeleting, typingSpeed, loopNum]);


  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-800/20 [mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]"></div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {PROFILE.name}
        </h1>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-cyan-400 sm:text-3xl md:text-4xl">
          <span className="border-r-2 border-cyan-400 pr-1">{typedTitle}</span>
          <span className="animate-ping">_</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl">
          {PROFILE.about}
        </p>
        <div className="mt-8 flex justify-center items-center text-gray-400">
           <MapPinIcon className="w-5 h-5 mr-2" />
           <span>{PROFILE.location}</span>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <GithubIcon className="h-8 w-8" />
          </a>
          <a href="https://linkedin.com/in/lperezbosio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <LinkedinIcon className="h-8 w-8" />
          </a>
          <a href="mailto:email@example.com" className="text-gray-400 hover:text-white transition-colors">
            <MailIcon className="h-8 w-8" />
          </a>
        </div>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#skills" aria-label="Scroll down">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
