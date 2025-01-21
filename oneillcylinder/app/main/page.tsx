import {LinkImageCreate} from '../../modules/textlink';


export default function Page() {
     
    return (
    <div className='w-full h-full'>
      <div className='flex flex-row h-12 w-full border-b border-white object-top'>
          <div className='w-4'/> 
          <div> 
          <div className='h-5'></div>
           <img className='h-50 w-14' src="/CylWire.png"/>
           </div>

           <div className='w-5'></div>

           <div> 
           <div className='h-2'></div>
           <p className='text-xl w-80' >O'NEILL_CYLINDERS an exploration</p>
           </div> 
           <div className='object-right w-4/6'> </div>
           <img src='/faceNew.svg'/> 
          </div>
     

      <div className='size-20'></div>
      <img className='w-5/6 h-1/5' src='/Cylinder.png'/>
      <div className='size-20'> 
       </div>

      <p className='text-xl w-80'></p>
      <div className='flex flex-row '> 
      <div className='relative w-20 h-20'> 
      <LinkImageCreate imglink ={'/origin.jpg'}
      tolink ={'https://www.w3schools.com/html/html_paragraphs.asp'}>
      </LinkImageCreate> 
      </div>
      </div>


      <div className = ''> 
      <div className = ''> 
      <b> </b>
      <div className = ''>
      </div>
      </div> 
      <p> </p>
    
      </div> 
    


    </div>

    ) 
    
  }