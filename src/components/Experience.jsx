import html from "../images/html-5.png";
import css from "../images/css-3.png";
import js from "../images/js.png";
import react from "../images/react.png";
import bootstrap from "../images/bootstrap.png";
import tailwind from "../images/tailwind.png";

const Experience = () => {

	const techs = [
		{
			id: 1,
			src: html,
			title: 'HTML',
			style: 'shadow-orange-500'
		},
		{
			id: 2,
			src: css,
			title: 'CSS',
			style: 'shadow-blue-500'
		},
		{
			id: 3,
			src: js,
			title: 'JavaScript',
			style: 'shadow-yellow-500'
		},
		{
			id: 4,
			src: react,
			title: 'React',
			style: 'shadow-blue-600'
		},
		{
			id: 5,
			src: bootstrap,
			title: 'Bootstrap',
			style: 'shadow-violet-500'
		},
		{
			id: 6,
			src: tailwind,
			title: 'Tailwind',
			style: 'shadow-sky-400'
		}
	]

  return (
    <div name="Experience" className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen pt-20">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        	<div>
            	<h1 className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">Experience</h1>
				<p className="py-6">These are some of the technologies that I have worked with along with many more...</p>
          	</div>
			<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
				{
					techs.map(({id, src, title, style}) => (
						<div key={id} className={"shadow-md hover:scale-105 duration-500 py-2 rounded-lg " + style}>
							<img src={src} alt="" className="w-20 mx-auto"/>
							<p className="mt-4">{title}</p>
						</div>
					))
				}
				
			</div>
        </div>
    </div>
  )
}

export default Experience;