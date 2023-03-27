import programmer from "../images/programmer.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
return (
	<div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-1/6">
		<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
			<div className="flex flex-col justify-center h-full">
				<h2 className="text-4xl sm:text-7xl font-bold text-white">
				Make your business shine on the web.
				</h2>
				<p className="text-gray-500 py-4 max-w-md">
					We work in a creative way to make your website a powerful tool for your business. We offer perfection in every web design we create.
				</p>
				<div>
					<Link to="Portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
						Portfolio
						<span className="group-hover:rotate-90 duration-300">
							<MdOutlineKeyboardArrowRight size={20} className="ml-1"/>								
						</span>
					</Link>
				</div>
			</div>
			<div>
				<img src={programmer} alt="Programmer" className="rounded-2xl mx-auto w-2/3 md:w-full" />
			</div>
		</div>
	</div>
)
}

export default Home;