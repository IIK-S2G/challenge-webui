import { base_url, ctfd_token } from "@parent/secret.json"

export default async function getNotifications() {
    const url = `${base_url}notifications`

    const res = await fetch(url, {
            headers: {
                'Authorization': `Token ${ctfd_token}`,
                'Content-Type': 'application/json'
            },
            next: { revalidate: 60 }
    })

    if (!res.ok) return []
    else return (await res.json()).data
}
