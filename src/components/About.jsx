import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <div>
          <p className="text-xl">
            Currently my title is an Application Developer and Engineering Support contracted by Amazon Mechatronics R&D Department. With my experience at Amazon, I've become associated with
            various exciting technologies and projects. Working with software such as LabVIEW and CodeSYS has broaden my scope of tools I wasn't previously familiar with. At the lab, we utilize
            CSV files to collect data. At the scale Amazon currently tests at, parsing through various CSV data structures becomes challenging when it comes to the requirments the Mechatronics engineers need to work with, which is the niche I
            fill as an Application Developer. Utilizing Python, Javascript as well as frame works like OpenCV, Microsoft Excel, and Flask allow me to manage, designate, and integrate systems into the flow of research and development at Amazon. I'm a passionate learner and
            am always seeking to innovate myself and be adaptable as a resource for my team. I always strive for improving the user experience and productivity of my work.
          </p>
          <br />
        </div>
      </div>
    </div>
  )
}

export default About;