import getNotifications from '@/utils/notifications/getNotifications'
import en from '../text/en.json'

export default async function Notifications() {
    const notifications = await getNotifications()

    if (!notifications.length) return <h1 className='grid place-items-center text-4xl font-bold mb-4'>{en.empty}</h1>
    const cols = notifications.length > 4 ? '1160px:grid-cols-2 1460px:grid-cols-2 1860px:grid-cols-3 2200px:grid-cols-3':''

    return (
        <>
            <h1 className='grid place-items-center text-4xl font-bold mb-4'>{en.notifications}</h1>
            <div className={`grid 480px:grid-cols-1 740px:grid-cols-1 ${cols} place-items-center`}>
                {notifications.map((notification: NotificationProps) => {
                    return(
                        <>
                            <Notification key={notification.id} notification={notification} />
                        </>
                    )
                })}
            </div>
        </>
      )
}

function Notification({notification}: {notification: NotificationProps}) {
    const date = en.month[Number(notification.date[5] + notification.date[6])-1] + ' ' + notification.date[8] + notification.date[9] + (Number(String(notification.date[8] + notification.date[9]).slice(-1)) == 1 ? "st, " : Number(String(notification.date[8] + notification.date[9]).slice(-1)) == 2 ? "nd, " : Number(notification.date[8] + notification.date[9]) == 3 ? "rd, " : Number(notification.date[8] + notification.date[9]) == 23 ? "rd, ": "th, ") + notification.date.slice(11, 19) + " GMT."
    
    return(
        <main className="grid place-items-center mt-4 w-full bg-[#191919] rounded-lg max-w-xl">
            <div className={`grid text-left w-full items-center p-2 px-5`}>
                <h1 className='w-full text-2xl font-semibold'>{notification.title}</h1>
                <h1 className='w-full text-md'>{notification.content}</h1>
                <h1 className='w-full text-sm text-[#555]'>{date}</h1>
            </div>
        </main>
    )
}
