import { LinkImageCreate } from "@/modules/textlink";
import Link from 'next/link';

export default function GerardPage(){
    return  (
        <div className="w-full h-full">
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
            <p className='text-xl  text-gray-50' >Gerard K. O'Neill</p>
            <p style={{fontFamily:"Proxima Nova Light", whiteSpace:"nowrap"}} className="text-gray-100 mt-[1.6px]">an exploration</p>

           </div>
              
           </div> 
           <div className='object-right w-4/6'> </div>
           <img src='/faceNew.svg'/> 
          </div>

        {/* spacer btwn header and first img */}
        {/* <div className='size-20'></div> */}
          {/* face and text section */}
          <div className="h-[450px] w-full p-10">
          <div className="h-10"></div>
          <div className=" flex flex-row gap-10">
            <img className='w-1/4 h-1/4' src='/Screenshot 2025-01-21 at 7.28.17 AM.png'></img>

            <div>
                <p className="text-gray-300 w-3/6"> Gerard K. O'Neill (1927–1992) was an influential American physicist and space visionary. He is best known for his groundbreaking work on space colonization and the concept of space habitats. As a professor of physics at Princeton University, O'Neill specialized in particle physics and made notable contributions in high-energy physics research. However, he gained widespread recognition for his pioneering ideas on human expansion into space.

In his 1976 book, The High Frontier: Human Colonies in Space, O'Neill proposed constructing large-scale space habitats, such as the O'Neill Cylinder—a massive rotating space station capable of supporting thousands of people. His vision included using lunar and asteroid materials to build these habitats and harnessing solar energy to power them. O'Neill argued that such colonies could alleviate Earth’s environmental and resource pressures while opening new frontiers for human settlement.

O'Neill's ideas inspired the broader space advocacy movement, including organizations like the L5 Society, which later merged into the National Space Society. His work laid the foundation for modern discussions about space settlement, in-orbit manufacturing, and the utilization of extraterrestrial resources.</p>
            </div>
          </div>
          </div>

          {/* talk section */}
          <div className="h-[350px] w-full p-10 my-2">
            <p className="text-gray-50 text-md mb-7">Talk_</p>
            <div className="flex gap-10">
              <div className="w-1/2 rounded-xl bg-gray-500 bg-opacity-50 h-[220px]">
                <div className="flex flex-col bg-transparent"> 
                <div className="h-10 w-10 bg-transparent"></div>
                <p className="text-gray-50 bg-transparent pl-4">Email Gerald@AImail.net</p>
                </div>
              </div>
               
              <div className="border border-gray-100 rounded-xl w-1/2 h-[220px] p-8">
                <p className="text-gray-500">loading response...</p>
              </div>
            </div>


          </div>
          {/* more section */}
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
            <div className="h-10 w-3/6"></div>
            <Link href='http://localhost:3000/main'> <img className='h-80 object-right'  src='/Screenshot 2025-01-14 at 10.58.28 AM.png'></img></Link>
          </div>

        </div>

        </div>

      
    )
}