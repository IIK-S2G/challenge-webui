import { base_url, ctfd_token } from "@parent/secret.json"

export default async function getUserPages(): Promise<number> {
    const url = `${base_url}users`

    const res = await fetch(url, {
            headers: {
                'Authorization': `Token ${ctfd_token}`,
                'Content-Type': 'application/json'
            },
            next: { revalidate: 60 }
    })

    if (!res.ok) return 1
    else return (await res.json()).meta.pagination.pages
}
