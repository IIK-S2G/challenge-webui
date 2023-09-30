'use client'

import { useState } from "react"
import en from "./text/en.json"
import Link from "next/link"

export default function Login(): JSX.Element {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value)
    }

    function handleLogin() {
        // Handle the login call
    }

    return(
        <main className="grid place-items-center h-[92vh]">
            <div>
                <h1 className="grid place-items-center text-4xl font-bold mb-4">{en.login}</h1>
                <input className="bg-[#191919] grid place-items-center h-[30px] m-4 text-center rounded-lg w-[300px]" type="text" value={username} placeholder={en.username} onChange={handleUsernameChange} />
                <input className="bg-[#191919] grid place-items-center h-[30px] m-4 text-center rounded-lg w-[300px]" type="password" value={password} placeholder={en.password} onChange={handlePasswordChange} />
                <h1 className="bg-white grid place-items-center h-[30px] m-4 text-center rounded-lg w-[300px] cursor-pointer text-black font-semibold" onClick={handleLogin}>{en.login}</h1>
                <div className="flex w-[300px] justify-between ml-4">
                    <Link className="text-[#0096FF]" href="/register">{en.register}</Link>
                    <Link className="text-[#0096FF]" href="/reset_password">{en.forgot}</Link>
                </div>
            </div>
        </main>
    )
}
