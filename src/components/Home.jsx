import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { FiArrowRightCircle } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        I am a Full Stack Developer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        I have over a years worth of experience.
                        I value companies that reward cooperative and dedicated employees and an environment that invites creativity, flexibility, and constructive feedback.
                        Throughout my educational history and work experience, I've been told I'm punctual, devoted, cooperative and collaborative.
                        I always keep in touch with past co-workers, employers, and schoolmates.
                        I'm proficient in JavaScript, with foundation in the MERN Stack.
                        Hope you enjoy my portfolio!
                    </p>
                    <div>
                        <Link to="portfolio" smooth duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-600 to-green-800 cursor-pointer">
                            Portfolio&nbsp;&nbsp;
                            <span className="group-hover:rotate-90 duration-300">
                                <FiArrowRightCircle size={20}
                                    className="m1-1" />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
                </div>
            </div>
        </div>
    )
}

export default Home;