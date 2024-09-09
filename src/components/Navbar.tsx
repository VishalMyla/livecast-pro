import Image from 'next/image';
import logo from '../assets/images/logosaas.png'
import Hamburger from '../assets/icons/menu.svg'
export default function Navbar(){
  return(
    <div className='bg-black'>

   
    <div className=' container  '>
      <div className='py-4 flex items-center justify-between'>
        <div className='relative'>
            <div className='absolute w-full top-2 bottom-0 bg-[linear-gradinet(to_right,rgb(248, 123, 255),rgb(251, 146, 207),rgb(255, 221, 155),rgb(194, 240, 177),rgb(47, 216, 254))]'>
              <Image src={logo} alt="Logo" className='h-12 w-12'/>
            </div>
        </div>
       <nav className='gap-6 items-center hidden sm:flex'>
        <a href='#' className='text-opacity-60 text-white hover:text-opacity-100 transition'>
          About 
        </a>
        <a href='#' className='text-opacity-60 text-white hover:text-opacity-100 transition'>
          Features
        </a>
        <a href='#' className='text-opacity-60 text-white hover:text-opacity-100 transition'>
          Updates 
        </a>
        <a href='#' className='text-opacity-60 text-white hover:text-opacity-100 transition'>
          Help
        </a>
        <a href='#' className='text-opacity-60 text-white hover:text-opacity-100 transition'>
          Customers
        </a>
        <button className='bg-white  text-black py-2 px-4 rounded'>Get for free</button>
       </nav>
          
        <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded sm:hidden'>
          <Hamburger className="text-white "/> 
        </div>

        
      </div>
     
    </div>
    </div>
  );
}