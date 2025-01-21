import {LinkImageCreate} from '../../modules/textlink';


export default function Page() {
     
    return (
    <div className='w-full h-full'>
      {/* header starts here */}
      <div className='flex flex-row h-12 w-full border-b-[0.5px] border-gray-100 object-top'>
          <div className='w-4'/> 
          <div> 
          <div className='h-5'></div>
           <img className='h-50 w-14' src="/CylWire.png"/>
           </div>

           <div className='w-5'></div>

           <div> 
           <div className='h-2'></div>
              <p className='text-xl w-80 text-gray-50' >O'NEILL_CYLINDERS an exploration</p>
           </div> 
           <div className='object-right w-4/6'> </div>
           <img src='/faceNew.svg'/> 
          </div>
     
{/* spacer btwn header and first img */}
      <div className='size-20'></div>
      <img className='w-5/6 h-1/5' src='/Cylinder.png'/>
      <div className='size-20'> 
      </div>

      <div className='justify-start'>
{/* first section */}
      <div className='px-10'>
        <p className='text-lg w-80 text-gray-50 my-4'>WHAT_</p>
        <div className='w-full h-[300px] flex justify-between gap-5'>
          <div className='flex flex-row gap-5'> 
            <div className='relative w-20 h-20'> 
              <LinkImageCreate imglink ={'/origin.jpg'}
              tolink ={'https://www.w3schools.com/html/html_paragraphs.asp'}>
              </LinkImageCreate> 
            
            </div>
            <div className='relative w-20 h-20'> <LinkImageCreate imglink ={'/origin.jpg'}
              tolink ={'https://www.w3schools.com/html/html_paragraphs.asp'}></LinkImageCreate></div>
            </div>
            <div className='w-1/2'>
            <p className='text-gray-500 text-md'>
              Lorem ipsum dolor
            </p>
          </div>
        </div>
        </div>


        {/* second section */}
      <div className='p-10 border-t border-[0.5px] border-gray-500 w-full flex gap-4 h-[400px]'>
          <div className='w-1/3'>
            <p className='text-gray-500 text-md'>
              Lorem ipsum dolor
            </p>
          </div>
        <div className='flex flex-col w-2/3'>
          <p className='text-lg w-80 text-gray-50 mb-10'>UTOPIA_DYSTOPIA_</p>
          <div className='flex flex-row gap-5'> 
            <div className='relative w-40 h-40 flex-shrink-0'> 
              <LinkImageCreate imglink ={'/origin.jpg'}
              tolink ={'https://www.w3schools.com/html/html_paragraphs.asp'}>
              </LinkImageCreate> 
            </div>
            <div className='relative w-40 h-40'>    
              <LinkImageCreate imglink ={'/origin.jpg'}
              tolink ={'https://www.w3schools.com/html/html_paragraphs.asp'}></LinkImageCreate></div>
            
            <div className='relative w-40 h-40 shrink-0'> 
              <LinkImageCreate imglink ={'/origin.jpg'}
              tolink ={'https://www.w3schools.com/html/html_paragraphs.asp'}></LinkImageCreate>
            </div>
            </div>
          </div>
        </div>
        </div>
        
        {/* third section */}
        <div className='border-t border-gray-500 border-[0.5px] flex gap-10 h-[400px] p-10'>
          <div className='flex flex-col'>
            <p className='text-lg text-gray-50 mb-10'>HOW_</p>
            <div className='flex gap-5'>
              <div className='relative w-40 h-40'> 
                <LinkImageCreate imglink ={'/origin.jpg'}
                tolink ={'https://www.w3schools.com/html/html_paragraphs.asp'}>
                </LinkImageCreate> 
              </div>
              <div className='relative w-40 h-40'>    
                <LinkImageCreate imglink ={'/origin.jpg'}
                tolink ={'https://www.w3schools.com/html/html_paragraphs.asp'}></LinkImageCreate></div>
            </div>

          </div>
          <div className='mt-10'>
            <p className='text-gray-500 text-md'>Lorem ipsum</p>
          </div>
        </div>
        
        {/* fourth section */}
        <div className="border-t w-full basis-1/2 border-gray-500 border-[0.5px] flex gap-10 h-[400px] p-10">
          <div className='mt-20 w-1/2'>
            <p className="text-gray-500 text-md">lorem ipsum</p>
          </div>
          <div className='flex flex-col'>
            <p className='text-lg text-gray-50 mb-10 mt-20'>NOW_</p>
            <div className='flex gap-5'>
              <div className='relative w-40 h-40'> 
                <LinkImageCreate imglink ={'/origin.jpg'}
                tolink ={'https://www.w3schools.com/html/html_paragraphs.asp'}>
                </LinkImageCreate> 
              </div>
              <div className='relative w-40 h-40'>    
                <LinkImageCreate imglink ={'/origin.jpg'}
                tolink ={'https://www.w3schools.com/html/html_paragraphs.asp'}></LinkImageCreate></div>
            </div>
          </div>

        </div>
        {/* fifth section */}
        <div className='p-10 border-t border-[0.5px] border-gray-500 h-[400px]'>
          <p className='text-lg w-80 text-gray-50 mb-10'>MORE_</p>
          <div className='flex gap-10'>
            <div className='relative w-40 h-40'> 
              <LinkImageCreate imglink ={'/origin.jpg'}
              tolink ={'https://www.w3schools.com/html/html_paragraphs.asp'}>
              </LinkImageCreate> 
            </div>
            <div className='relative w-40 h-40'>    
              <LinkImageCreate imglink ={'/origin.jpg'}
              tolink ={'https://www.w3schools.com/html/html_paragraphs.asp'}></LinkImageCreate></div>
               <div className='relative w-40 h-40'> 
              <LinkImageCreate imglink ={'/origin.jpg'}
              tolink ={'https://www.w3schools.com/html/html_paragraphs.asp'}>
              </LinkImageCreate> 
            </div>
            <div className='relative w-40 h-40'>    
              <LinkImageCreate imglink ={'/origin.jpg'}
              tolink ={'https://www.w3schools.com/html/html_paragraphs.asp'}></LinkImageCreate></div>
            
          </div>

        </div>
        
          
        </div>

    ) 
    
  }
