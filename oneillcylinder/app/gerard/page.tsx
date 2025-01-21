import { LinkImageCreate } from "@/modules/textlink";

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
            <p className="text-xl text-gray-500 mb-4">faceNew 1</p>
          <div className=" flex gap-10">
            <div className="w-1/3">
            <LinkImageCreate imglink="/origin.jpg" tolink="https://www.w3schools.com/html/html_paragraphs.asp"/>
            </div>
            <div>
                <p className="text-gray-300">Lorem psum</p>
            </div>
          </div>
          </div>

          {/* talk section */}
          <div className="h-[350px] w-full p-10 my-2">
            <p className="text-gray-50 text-md mb-7">Talk_</p>
            <div className="flex gap-10">
              <div className="w-1/2 rounded-xl bg-gray-500 bg-opacity-50 h-[220px]">
                {/* <p className="text-gray-50">Text gerald</p> */}
              </div>
               
              <div className="border border-gray-100 rounded-xl w-1/2 h-[220px] p-8">
                <p className="text-gray-500">Lorem ipsum dolor</p>
              </div>
            </div>


          </div>
          {/* more section */}
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
            
          </div>

        </div>

        </div>
    )
}