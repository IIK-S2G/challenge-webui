import { useState } from "react"
import ShowInfo from "./showInfo"

export default function User({user}: {user: UserListProps}) {
    const [showInfo, setShowInfo] = useState<boolean>(false)

    function handleClick() {
        setShowInfo(!showInfo)
    }

    return(
        <main className="grid place-items-center mt-4 w-full bg-[#191919] rounded-lg" onClick={handleClick}>
            <div className={`grid grid-cols-4 text-left w-full h-[50px] items-center pt-1`}>
                <h1 className='w-full text-md ml-10'>{user.name}</h1>
                <h1 className='w-full text-md ml-5'>{user.website}</h1>
                <h1 className='w-full text-md ml-5'>{user.affiliation}</h1>
                <h1 className='w-full text-md ml-5'>{user.country}</h1>
            </div>
            {/* {showInfo && <ShowInfo uid={user.id}/>} */}
        </main>
    )
}
