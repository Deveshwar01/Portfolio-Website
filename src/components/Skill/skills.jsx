import React from 'react';
import { skills } from '../../assets/data/portfolioData';

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col justify-center items-center relative z-10">
      <h1 className="text-4xl font-semibold text-center mt-20 text-primary dark:text-white">
        Skills
      </h1>
      <div className="w-full flex flex-wrap justify-center mt-8 space-x-4 space-y-4">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="w-full max-w-screen-sm bg-card border border-purple-500 shadow-lg rounded-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-secondary dark:text-gray-400 mb-4 text-center">
              {skill.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {skill.skills.map((item, index) => (
                <div
                  key={index}
                  className="text-primary-80 border border-primary-80 rounded-lg p-2 flex items-center justify-center space-x-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-6 h-6"
                  />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
