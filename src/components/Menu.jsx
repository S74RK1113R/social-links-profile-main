import avatar from '../assets/avatar-jessica.jpeg'
import Button from './Button'
import { SOCIALMEDIA } from '../constants/Constants'

export default function CardMenu() {
    return(
        <div className="bg-FTM-Grey-800 rounded-xl position-cards text-FTM-White mx-5 font-inter">
            <div className='position-cards m-7'>
                <div className='rounded-full overflow-hidden w-4/12 mb-5'>
                    <img src={avatar} alt="A girl image"/>
                </div>

                <h1 className='text-xl font-bold'>Jessica Randall</h1>
                <h2 className='text-FTM-Green text-xs py-2'>London, United Kingdom</h2>
                <p className='text-base text-FTM-White/70 py-5 mx-2'>"Front-end developer and avid reader."</p>

                <div className='flex flex-col gap-3.5 w-full'>
                    {SOCIALMEDIA.map((name,idx)=>{
                        return(
                            <Button key={idx}>
                                {name}
                            </Button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}