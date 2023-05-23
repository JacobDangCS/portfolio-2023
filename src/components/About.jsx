import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            <div> 
                <p className="text-xl mt-20">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ab in quas consectetur consequatur deleniti quibusdam accusamus quod perferendis dolor. Repellat, sequi deleniti ducimus eum dolorem modi molestiae, iure numquam quos maxime itaque sint velit veniam, distinctio assumenda. Quam, earum accusamus asperiores molestias impedit consequatur. Aliquam quod a hic vero.</p>
                <br/>
                <p className="text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus harum perferendis non reprehenderit necessitatibus odit quo aperiam, veritatis iusto dicta repudiandae voluptates sequi consequuntur itaque sapiente sed ducimus molestiae laudantium esse. Quasi repellat facilis aperiam, nostrum suscipit ab porro fugit omnis minima ut error praesentium. Sit nostrum a doloribus provident.</p>
            </div>
        </div>
    </div>
  )
}

export default About