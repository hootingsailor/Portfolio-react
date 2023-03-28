import gym from "../images/MyGym.png";
import netflix from "../images/Netflix.png";
import simongame from "../images/SimonGame.png";
import magicmatch from "../images/MagicMatch.png";

const Projects = () => {

    const portfolios = [
        {
            id: 1,
            src: gym,
            alt: "Gym Website",
            web: "https://hootingsailor.github.io/gym-website/"
        },
        {
            id: 2,
            src: netflix,
            alt: "Netflix Clone",
            web: "https://netflix-2ec4d.firebaseapp.com/"
        },
        {
            id: 3,
            src: simongame,
            alt: "Simon Game",
            web: "https://hootingsailor.github.io/SimonGame/"
        },
        {
            id: 4,
            src: magicmatch,
            alt: "Magic Match Game",
            web: "https://magicmatch-383b2.firebaseapp.com/"
        }
    ]

  return (
    <div name="Projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-20">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <h1 className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</h1>
                <p className="py-6">Check out some of our work right here.</p>
            </div>
           
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {
                portfolios.map(({id, src, alt, web}) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                        <img src={src} alt={alt} className="w-1/2 mx-auto rounded-md duration-200 hover:scale-105" />
                        <div className="flex items-center justify-center">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href={web} target="_blank" rel="noreferrer">Demo</a></button>
                            {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button> */}
                        </div>
                    </div>
                ))
            }                
            </div>
        </div>
    </div>
  )
}

export default Projects;