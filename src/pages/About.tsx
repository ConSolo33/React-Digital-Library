import Background from '../assets/images/lib2.jpg'

function About() {
  return (
    <div style={{ backgroundImage: `url(${Background})`}}
    className="flex flex-row justify-center mx-auto mt-0 bg-cover bg-fixed h-screen"
    >
      <div className="bg-black bg-opacity-50 text-slate-200 mt-10 rounded p-6 w-2/5 h-2/5">
        <h1 className='text-5xl font-extrabold p-6 flex justify-center tracking-widest'>About </h1>
        <p className='text-center italic font-serif'> Inspired by a love of reading, this application
        has the capacity to store all of the important information for all of your favorite
        books.  
        </p>
      </div>
    </div>
  )
}

export default About