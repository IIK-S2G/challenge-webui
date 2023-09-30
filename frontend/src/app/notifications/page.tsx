import Notifications from "./components/notifications"

export default function NotificationPage(): JSX.Element {

    return(
        <main className="grid place-items-center h-[92vh] mx-8">
            <div className="w-full">
                <Notifications/>
            </div>
        </main>
    )
}
