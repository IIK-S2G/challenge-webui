import Profile from "./components/profile"

export default function ProfilePage(): JSX.Element {

    return(
        <main className="grid place-items-center h-[92vh] w-full">
            <div className='flex w-full justify-center'>
                <Profile/>
            </div>
        </main>
    )
}
