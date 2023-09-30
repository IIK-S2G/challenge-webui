import en from '../text/en.json'

export default function Token(): JSX.Element {
    return(
        <main className="bg-[#191919] mr-8 ml-4 p-10 h-[92vh] w-1/2 overflow-auto rounded-xl">
            <div className='flex'>
                <div className='bg-[#191919] rounded-xl w-full'>
                    <h1 className='text-4xl font-bold mb-4'>{en.token}</h1>
                    <p className='text-1xl mt-2'>{en.expiration}</p>
                    <input className='w-full bg-[#222] h-[35px] rounded-lg mt-2 pl-2' placeholder={en.expiration}/>
                    <div className="grid items-center bg-[#228B22] h-[35px] rounded-lg mt-4">
                        <h1 className="text-center">{en.generate}</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}
