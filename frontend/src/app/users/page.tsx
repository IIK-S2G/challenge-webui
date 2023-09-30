import getUsers from "@/utils/users/getUsers"
import Users from "./components/users"
import getAllUsers from "@/utils/users/getAllUsers"

export default async function UsersPage(): Promise<JSX.Element> {
    const users = await getUsers() // Showing first page while the others load
    const allUsers = await getAllUsers() // Loading all pages server side to quickly display on request client side

    return(
        <main className="grid place-items-center h-[92vh] mx-8">
            <div className="w-full">
                <Users allUsers={allUsers ? allUsers : users}/>
            </div>
        </main>
    )
}
