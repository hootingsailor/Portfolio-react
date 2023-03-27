

const About = () => {
  return (
    <div name="About" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 ">
                <h1 className="text-4xl font-bold inline border-b-4 border-gray-500">About</h1>
            </div>
            <p className="text-xl mt-20">We are a website development company based in India. We do what we do because we love technology. Our services makes it easy for everyone to be online with an attractive, efficient and utilitarian web presence. No innovation limits, no coding - just total opportunity to tell what needs to be done and tackle your entire business on the web.
            </p>
            <br />
            <p className="text-xl">Our team is made up of developers, all of whom are dedicated to making sure that your projects run smoothly.
            </p>
        </div>
    </div>
  )
}

export default About;