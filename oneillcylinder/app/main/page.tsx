import {LinkImageCreate} from '../../modules/textlink';


export default function Page() {
     
    return (
    <div className='w-full h-full'>
      <div className = 'flex-row'> </div>
      <div></div>
      <img src='/Cylinder.png'/>
      <div className='relative w-11 h-11'> 
      <LinkImageCreate imglink ={'/origin.jpg'}
      tolink ={'https://www.w3schools.com/html/html_paragraphs.asp'}>
      </LinkImageCreate>
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