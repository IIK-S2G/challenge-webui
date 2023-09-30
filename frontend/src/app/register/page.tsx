'use client'

import { useState } from "react"
import en from "./text/en.json"
import Link from "next/link"

export default function Register(): JSX.Element {
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    function handleUsernameChange (event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value)
    }

    function handleEmailChange (event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value)
    }

    function handlePasswordChange (event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value)
    }

    function handleRegister() {
        // Handle the register call
    }

    return(
        <main className="grid place-items-center h-[92vh]">
            <div>
                <h1 className="grid place-items-center text-4xl font-bold mb-4">{en.register}</h1>
                <input className="bg-[#191919] grid place-items-center h-[30px] m-4 text-center rounded-lg w-[300px]" type="text" value={username} placeholder={en.username} onChange={handleUsernameChange} />
                <input className="bg-[#191919] grid place-items-center h-[30px] m-4 text-center rounded-lg w-[300px]" type="password" value={email} placeholder={en.email} onChange={handleEmailChange} />
                <input className="bg-[#191919] grid place-items-center h-[30px] m-4 text-center rounded-lg w-[300px]" type="password" value={password} placeholder={en.password} onChange={handlePasswordChange} />
                <h1 className="bg-white grid place-items-center h-[30px] m-4 text-center rounded-lg w-[300px] cursor-pointer text-black font-semibold" onClick={handleRegister}>{en.register}</h1>
                <div className="flex w-[300px] justify-center ml-4">
                    <h1 className="mr-2">{en.userexists}</h1>
                    <Link className="text-[#0096FF]" href="/login">{en.login}</Link>
                </div>
            </div>
        </main>
    )
}
