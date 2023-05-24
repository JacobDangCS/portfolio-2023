import React from 'react';
import dungeons from '../assets/portfolio/dungeons.png';
import mobile from '../assets/portfolio/mobile.png';
import bugtrack from '../assets/portfolio/bugtrack.png';
import qrgenerator from '../assets/portfolio/qr-generator.png';
import budgettracker from '../assets/portfolio/budgettracker.png';

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: dungeons,
      alt: 'dungeons-and-data',
      code: 'https://github.com/dungeons-and-data/dungeons-and-data',
      demo: 'https://github.com/dungeons-and-data/dungeons-and-data'
    },
    {
      id: 2,
      src: mobile,
      alt: 'mobile app',
      code: 'https://github.com/JacobDangCS/lab41-mobile',
      demo: 'https://serene-brioche-cd7c97.netlify.app/',
    },
    {
      id: 3,
      src: bugtrack,
      alt: 'bug-tracker',
      code: 'https://github.com/chjkt-bug-tracker/bug-tracker-frontend',
      demo: 'https://www.youtube.com/watch?v=OV23NNmTaMM',
    },
    {
      id: 4,
      src: qrgenerator,
      alt: 'qr-generator',
      code: 'https://github.com/JacobDangCS/qr-generator',
      demo: 'https://jacobdangcs.github.io/qr-generator/',
    },
    {
      id: 5,
      src: budgettracker,
      alt: 'budget-tracker',
      code: 'https://github.com/JacobDangCS/budget-tracker-frontend',
      demo: 'https://jd-budget-tracker-frontend.onrender.com/',
    },
  ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500"> Portfolio </p>
          <p className="py-6 "> Check out some of my work here! </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-0 px-12 sm:px-0">

          {
            portfolios.map(({ id, src, alt, demo, code }) => (

              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img src={src} alt={alt} className="rounded-md duration-200 hover:scale-105" />
                <div className="flex items-center justify-center">
                  <a href={demo} className="w1/2 px-6 py-3 m-4 duration-200 hover:scale-105" target='_blank' rel="noreferrer">Demo</a>
                  <a href={code} className="w1/2 px-6 py-3 m-4 duration-200 hover:scale-105" target='_blank' rel="noreferrer">Code</a>
                </div>
              </div>

            ))}
        </div>
      </div>

    </div>
  )
}

export default Portfolio;