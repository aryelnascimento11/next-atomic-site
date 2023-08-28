export default function Header() {
    
    return (
        <header className='bg-black text-white flex justify-between p-6 place-items-center shadow shadow-black'>
        <h1 className=' text-3xl'>Hello World</h1>
        <div className='flex place-items-center'>
          <input type="search" className='text-black  rounded-lg p-4 ' placeholder='Search'/>
          <nav>
            <ul className='flex'>
              <li className='p-2'>
                <a href="#">exemplo</a>
              </li>
              <li className='p-2'>
                <a href="#">exemplo</a>
              </li>
              <li className='p-2'>
                <a href="#">exemplo</a>
              </li>
              <button className='bg-white text-black py-1 px-3 rounded-full hover:bg-blue-500 transi'>entrar</button>
            </ul>
          </nav>
        </div>
      </header>
      
    )
  }