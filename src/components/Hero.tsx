import Arrow from '../assets/icons/arrow-w.svg'
export default function Hero (){
  return(
      <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-[96px] relative overflow-clip ">
                <div className='bg-black absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[368px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]'>

              </div>
                      <div className="relative container">
                        <div className="flex items-center justify-center">
                            <a href="#" className="inline-flex gap-3 border border-white/30 py-1 px-2 rounded-[12px]">
                                <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">Version 2.0 is here</span>
                                <span className='inline-flex gap-1 items-center'>
                                <span>
                                  Read more
                                </span>
                                  <Arrow/>
                                  </span>
                            </a>
                          </div>
                          <div className='flex justify-center'>
                            <h1 className='text-7xl sm:text-9xl sm:mt-12 text-center tracking-tighter font-bold mt-10 inline-flex'>
                            One Task 
                            <br/>at a Time
                            </h1>
                          </div>
                          <div className='flex justify-center'>
                              <p className='text-xl text-center mt-10 sm:max-w-md'>                 
                                  Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
                              </p>
                          </div>
                          
                          <div className='flex items-center justify-center mt-10'>
                            <button className='border px-5 py-3 bg-white text-black rounded-[8px] font-medium'>Get for free</button>
                          </div>
                        
                      </div>
        
      </div>
  );
}