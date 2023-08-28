export default function Page() {
    return (
      <>
            <header className='bg-black text-white flex justify-between p-6 place-items-center shadow shadow-black'>
        <h1 className=' text-3xl'>Rotas</h1>
        <div className='flex place-items-center'>
          <nav>
            <ul className='flex'>
              <li className='p-2'>
                <a href="#">youtube</a>
              </li>
              <li className='p-2'>
                <a href="#">google</a>
              </li>
              <li className='p-2'>
                <a href="">spotify</a>
              </li>
              <button className='bg-white text-black py-1 px-3 rounded-full hover:bg-green-500 transi'>entrar</button>
            </ul>
          </nav>
        </div>
      </header>
     <section className='text-center'>
       <h1 className='text-white text-5xl  p-10'>Fazendo Rotas</h1>
       <button className='bg-white text-black py-1 px-3 rounded-full hover:bg-green-500 transi'>Saiba mais</button>
     </section>
      </>
    )
    
}