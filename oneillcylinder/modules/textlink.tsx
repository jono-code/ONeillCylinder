import Link from 'next/link'


export function LinkImageCreate({imglink, tolink}:{imglink:string, tolink:string}) { 
    return( 
            <div className='relative content-center'> 
                <Link href = {tolink}> <img className='w-full h-auto' src = {imglink}/> </Link>
            </div>
    )
 
}