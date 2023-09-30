import Line from '@/components/line'
import en from '../text/en.json'

export default function UserHeader(): JSX.Element {
    return(
        <main className="grid h-[50px]">
            <div className='grid grid-cols-4 pl-10 bg-[#111] rounded-lg h-[50px] items-center'>
                <h1 className='text-xl'>{en.name}</h1>
                <h1 className='text-xl'>{en.website}</h1>
                <h1 className='text-xl'>{en.affiliation}</h1>
                <h1 className='text-xl'>{en.country}</h1>
            </div>
        </main>
    )
}
