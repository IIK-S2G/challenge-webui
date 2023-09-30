import { base_url, ctfd_token } from "@parent/secret.json"

export default async function getUsers({page = 1} = {}): Promise<UserListProps[]> {
    const url = `${base_url}users?page=${page}`

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
