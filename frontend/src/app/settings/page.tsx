import Profile from "./components/profile"
import Token from "./components/tokens"
import en from "./text/en.json"

export default function Settings(): JSX.Element {

    return(
        <main className="grid place-items-center h-[92vh] w-full">
            <div className='flex w-full'>
                <Profile/>
                <Token/>
            </div>
        </main>
    )
}
