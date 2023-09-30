'use client'

import User from './user'
import en from '../text/en.json'
import UserHeader from './header'
import { useState } from 'react'

export default function Users({allUsers}: {allUsers: UserListProps[]}) {
    const [showAllUsers, setShowAllUsers] = useState<boolean>(false)
    const [usersPage, setUsersPage] = useState<number>(1)
    const users = showAllUsers ? allUsers : allUsers.slice(usersPage*50-50, usersPage*50)

    function handleShowAll() {
        setShowAllUsers(!showAllUsers)
    }

    function handlePageChange(event: React.ChangeEvent<HTMLInputElement>) {
        const num = Number(event.target.value)
        setUsersPage(num > 0 && num <= Math.ceil(allUsers.length/50) ? num : 1)
    }

    if (!users.length) return <h1 className='grid place-items-center text-4xl font-bold mb-4'>{en.empty}</h1>

    return (
        <>
            <UserHeader/>
            <div className='grid 480px:grid-cols-1 740px:grid-cols-1 1160px:grid-cols-1 1460px:grid-cols-1 1860px:grid-cols-2 2200px:grid-cols-3 place-items-center'>
                {users.map((user: UserListProps) => {
                    return <User key={user.id} user={user} />
                })}
                <div className='flex mb-10'>
                    <p className='mt-5'>{en.page}</p>
                    <input type='number' placeholder='1' min={1} max={Math.ceil(allUsers.length/50)} onChange={handlePageChange} className='text-white text-center mt-5 ml-2 mr-10 px-auto w-[50px] rounded-lg bg-[#191919]'/>
                    <p className='mt-5'>{en.showall}</p>
                    <input type='checkbox' className='text-white text-center ml-2 mt-[26px] px-auto w-[50px] rounded-lg bg-[#191919]' onChange={handleShowAll}/>
                </div>
            </div>
        </>
      )
}
