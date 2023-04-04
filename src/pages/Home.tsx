import Background from '../assets/images/lib2.jpg'

function Home() {
  return (
    <div style={{ backgroundImage: `url(${Background})`}}
    className="flex flex-row justify-center mx-auto mt-0 bg-cover bg-fixed h-screen"
    >
      <div className="mt-10 text-slate-200 bg-opacity-50
       bg-black p-6 rounded h-1/4">
        <h1 className='font-extrabold text-5xl tracking-widest p-3'>Your Digital Library </h1>
        <h3 className='italic font-serif text-xl text-center p-4'>A book information hub</h3>
      </div>
    </div>
  )
}

export default Home