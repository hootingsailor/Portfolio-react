

const Contact = () => {
  return (
    <div name="Contact" className="w-full md:h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <h1 className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">Contact</h1>
                <p className="py-6">Submit the form below to get in touch with us!</p>
            </div>
            <div className="flex justify-center items-center">
				<form action="https://getform.io/f/0935cc35-c566-4a08-9785-41b9af1d04d1" method="POST" className="flex flex-col w-full md:w-1/2 ">
					<input type="text" name="name" placeholder="Enter your name" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
					<input type="email" name="email" placeholder="Enter your email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
					<textarea name="message" rows="10" placeholder="Enter your message" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
					<button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
						Let's talk
					</button>
				</form>
            </div>
        </div>
    </div>
  )
}

export default Contact;