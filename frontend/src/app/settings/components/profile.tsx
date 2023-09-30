// this file will require a user parameter and use client at some point
import en from '../text/en.json'

export default function Profile(): JSX.Element {
    return(
        <main className="bg-[#191919] ml-8 mr-4 p-10 h-[92vh] overflow-auto rounded-xl w-1/2">
            <div className='flex'>
                <div className='rounded-xl w-full'>
                    <h1 className='text-4xl font-bold mb-4'>{en.profile}</h1>
                    <p className='text-1xl mt-2'>{en.username}</p>
                    <input className='w-full bg-[#222] h-[35px] rounded-lg mt-2 pl-2' placeholder={en.username} />
                    <p className='text-1xl mt-2'>{en.email}</p>
                    <input className='w-full bg-[#222] h-[35px] rounded-lg mt-2 pl-2' placeholder={en.email} type="email"/>
                    <p className='text-1xl mt-2'>{en.current_password}</p>
                    <input className='w-full bg-[#222] h-[35px] rounded-lg mt-2 pl-2' placeholder={en.current_password} type="password"/>
                    <p className='text-1xl mt-2'>{en.password}</p>
                    <input className='w-full bg-[#222] h-[35px] rounded-lg mt-2 pl-2' placeholder={en.password} type="password"/>
                    <p className='text-1xl mt-2'>{en.affiliation}</p>
                    <input className='w-full bg-[#222] h-[35px] rounded-lg mt-2 pl-2' placeholder={en.affiliation}/>
                    <p className='text-1xl mt-2'>{en.website}</p>
                    <input className='w-full bg-[#222] h-[35px] rounded-lg mt-2 pl-2' placeholder={en.website} type="url"/>
                    <p className='text-1xl mt-2'>{en.country}</p>
                    <input className='w-full bg-[#222] h-[35px] rounded-lg mt-2 pl-2' placeholder={en.country}/>
                    <div className="grid items-center bg-[#228B22] h-[35px] rounded-lg mt-4">
                        <h1 className="text-center">{en.save}</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}
