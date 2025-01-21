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
           <div className="flex gap-2 w-80">
            <p className='text-xl  text-gray-50' >O'NEILL CYLINDERS</p>
            <p style={{fontFamily:"Proxima Nova Light", whiteSpace:"nowrap"}} className="text-gray-100 mt-[1.8px]">an exploration</p>

           </div>
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
            <div className='relative w-40 h-40'> 
              <LinkImageCreate imglink ={'/Screenshot 2025-01-21 at 3.19.09 AM.png'}
              tolink ={'https://en.wikipedia.org/wiki/O%27Neill_cylinder'}>
              </LinkImageCreate> 
            
            </div>
            <div className='relative w-40 h-40'> <LinkImageCreate imglink ={'/Screenshot 2025-01-21 at 3.19.20 AM.png'}
              tolink ={'https://www.youtube.com/watch?v=hYyg8JC-6ew&ab_channel=IsaacArthur'}></LinkImageCreate></div>
            </div>
            <div className='w-1/2 object-left'>
            <p className='text-gray-500 text-md'>
            An O'Neill cylinder is a large, rotating space habitat concept proposed by physicist Gerard K. O'Neill in the 1970s. It consists of two counter-rotating cylindrical structures, each several kilometers in length and diameter, designed to house tens of thousands to millions of people. The cylinders rotate to generate artificial gravity through centrifugal force, simulating Earth-like conditions on their inner surfaces. Inside, the habitat features alternating strips of land, water, and windows to allow for natural lighting and agriculture. The counter-rotation minimizes gyroscopic effects, ensuring stability and ease of maneuverability in space.
            </p>
            </div>
            <img className='opacity-25' src='/Screenshot 2025-01-14 at 10.58.28 AM.png'></img>
        </div>
        <div className='w-4/6 h-2 border-b border-gray-500'></div>
        </div>


        {/* second section */}
      <div className='p-10 flex flex-row gap-4 h-[400px]'>
          <div className='w-1/3'>
            <p className='text-gray-500 text-md'>
            As a utopia, it could represent a harmonious society where advanced technology, abundant resources, and responsible governance ensure a high quality of life for all inhabitants. Efficient recycling systems and renewable energy could support a sustainable environment, while thoughtful design fosters community, education, and cultural flourishing. However, it could also devolve into a dystopia if inequalities arise, with limited resources controlled by a select few. Overcrowding, resource mismanagement, or oppressive governance could exacerbate tensions, leading to social unrest
            </p>
          </div>
        <div className='flex flex-col w-2/3'>
          <p className='text-lg w-80 text-gray-50 mb-10'>UTOPIA_DYSTOPIA_</p>
          <div className='flex flex-row gap-5'> 
            <div className='relative w-40 h-40 flex-shrink-0'> 
              <LinkImageCreate imglink ={'/Screenshot 2025-01-21 at 3.26.49 AM.png'}
              tolink ={'https://space.nss.org/the-colonization-of-space-gerard-k-o-neill-physics-today-1974/'}>
              </LinkImageCreate> 
            </div>
            <div className='relative w-40 h-40'>    
              <LinkImageCreate imglink ={'/Screenshot 2025-01-21 at 3.19.41 AM.png'}
              tolink ={'https://www.youtube.com/watch?v=m9PZ05NLDww&ab_channel=towerofsticks'}></LinkImageCreate></div>
            
            <div className='relative w-40 h-40 shrink-0'> 
              <LinkImageCreate imglink ={'/Screenshot 2025-01-21 at 3.19.52 AM.png'}
              tolink ={'https://www.youtube.com/watch?v=a7B39MLVeIc&ab_channel=TED'}></LinkImageCreate>
            </div>
            
          </div>
          
          </div>
          <img className='h-80 object-right opacity-25'  src='/Screenshot 2025-01-14 at 10.58.37 AM.png'></img>
        </div>
        <div className='flex flex-row'>
        <div className='w-1/6'></div>
        <div className='w-4/6 h-2 border-b border-gray-500'></div>
        </div>
        </div>
        
        {/* third section */}
        <div className='p-10 flex gap-10 h-[400px]'>
          <div className='flex flex-col'>
            <p className='text-lg text-gray-50 mb-10'>HOW_</p>
            <div className='flex gap-5'>
              <div className='relative w-40 h-40'> 
                <LinkImageCreate imglink ={'/Screenshot 2025-01-21 at 4.31.28 AM.png'}
                tolink ={'https://spacetalkblog.com/the-economic-feasibility-of-oneill-cylinders/ '}>
                </LinkImageCreate> 
              </div>
              <div className='relative w-40 h-40'>    
                <LinkImageCreate imglink ={'/Screenshot 2025-01-21 at 4.31.42 AM.png'}
                tolink ={'https://spacecalcs.com/calcs/oneill-cylinder/'}></LinkImageCreate></div>
            </div>

          </div>
          <div className='mt-10'>
            <p className='text-gray-500 text-md'>Constructing an O'Neill cylinder would be a monumental engineering challenge requiring extensive resources and advanced technology. The process would likely begin with mining asteroids or the Moon for raw materials like metals and silicates, reducing the need to transport heavy materials from Earth. These resources would be processed in space using automated factories and 3D printers to create structural components. Modular construction techniques could assemble the cylinder in segments, with robotic systems performing dangerous or repetitive tasks.</p>
          </div>
          <img className='h-80 object-right opacity-25'  src='/Screenshot 2025-01-14 at 10.58.32 AM.png'></img>
        </div>

        <div className='flex flex-row'> 
          <div className='w-11'> </div>
          <div className='w-4/6 h-1 border-b border-gray-500'></div>
        </div>
        
        
     
        
        
        {/* fourth section */}
        <div className=" w-full basis-1/2 flex gap-10 h-[400px] p-10">
          <div className='mt-20 w-1/2'>
            <p className="text-gray-500 text-md">Progress toward building O'Neill cylinders remains largely conceptual, as current technology and infrastructure are insufficient for their construction. However, advancements in several related areas are laying the groundwork for such ambitious projects. Space mining, a critical component for sourcing materials, is being explored by private companies such as Blue Origin and national space agencies.</p>
          </div>
          <div className='flex flex-col'>
            <p className='text-lg text-gray-50 mb-10 mt-20'>NOW_</p>
            <div className='flex gap-5'>
              <div className='relative w-40 h-40'> 
                <LinkImageCreate imglink ={'/Screenshot 2025-01-21 at 3.27.17 AM.png'}
                tolink ={'https://www.youtube.com/watch?v=GQ98hGUe6FM&ab_channel=BlueOrigin?t=14m30s '}>
                </LinkImageCreate> 
              </div>
              <div className='relative w-40 h-40'>    
                <LinkImageCreate imglink ={'/Screenshot 2025-01-21 at 3.27.49 AM.png'}
                tolink ={'https://www.factoriesinspace.com/in-space-manufacturing'}></LinkImageCreate></div>
            </div>
          </div>
          <div className='h-10 w-1/3'/> 
          <img className='h-80 object-right opacity-25'  src='/Screenshot 2025-01-14 at 10.58.28 AM.png'></img>
          
        </div>
        

        <div className='flex flex-row'>
        <div className='w-1/6'></div>
        <div className='w-4/6 h-2 border-b border-gray-500'></div>
        
        </div>

        {/* fifth section */}
        <div className='p-10 h-[400px]'>
          <p className='text-lg w-80 text-gray-50 mb-10'>MORE_</p>
          <div className='flex gap-10'>
            <div className='relative w-40 h-40'> 
              <LinkImageCreate imglink ={'/Screenshot 2025-01-21 at 3.28.08 AM.png'}
              tolink ={'https://www.thriftbooks.com/w/the-high-frontier-human-colonies-in-space_gerard-k-oneill/311174/item/4562801/?utm_source=google&utm_medium=cpc&utm_campaign=low_vol_f%2fm%2fs_standard_shopping_customer_aquisition_17483481083&utm_adgroup=&utm_term=&utm_content=688842569233&gad_source=1&gclid=CjwKCAiA7Y28BhAnEiwAAdOJUDnFqOcZBCCQZeeZejQExTNl8RwHIb6ZxtkGjRVbr7GAL7WBFbaDThoCN_8QAvD_BwE#idiq=4562801&edition=1960011'}>
              </LinkImageCreate> 
            </div>
            <div className='relative w-40 h-40'>    
              <LinkImageCreate imglink ={'/Screenshot 2025-01-21 at 3.28.19 AM.png'}
              tolink ={'https://ntrs.nasa.gov/citations/19770014162'}></LinkImageCreate></div>
               <div className='relative w-40 h-40'> 
              <LinkImageCreate imglink ={'/Screenshot 2025-01-21 at 3.28.30 AM.png'}
              tolink ={'https://www.amazon.com/Technology-Edge-Opportunities-America-Competition/dp/0671554379/ref=sr_1_3?crid=FP0XMTCS6YV9&dib=eyJ2IjoiMSJ9.DH6YdJOh-6QGvjq7GjjmqNOdRBwgzxzb16mN8n8t8WeHztj5k1tZTYOAhLuAzKi36LH-rjwBqg7WJ9cqXHMSRgBEbdjjKZCwcKKEGD5JF474OCLRvqdU-CXKRLtMOg2YYX83qoAvfXIDslYiqbREytQu6frAIQoF0iOipC8yyB1Ck801tsMk2KPlTIOk_Xjjd_jcYnNyVuqKhBmSkvvX6LzNS0geJBPLzbAdwytEFk0.3JcAA4NRhCu6uQOa9Jrn3kI-X1OtGBtMqqzGM63bAJE&dib_tag=se&keywords=Gerard+K.+O%27Neill&qid=1736726237&s=books&sprefix=gerard+k.+o%27neill%2Cstripbooks%2C62&sr=1-3  '}>
              </LinkImageCreate> 
            </div>
            <div className='relative w-40 h-40'>    
              <LinkImageCreate imglink ={'/Screenshot 2025-01-21 at 3.28.42 AM.png'}
              tolink ={'http://localhost:3000/gerard'}></LinkImageCreate></div>
            
          </div>

        </div>
      
        </div>

   

    ) 
    
  }
