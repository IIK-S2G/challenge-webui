import { base_url, ctfd_token } from "@parent/secret.json"

export default async function getProfile(uid?: number): Promise<ProfileProps> {
    const user = uid ? uid : 'me'
    const url = `${base_url}users/${user}`

    const res = await fetch(url, {
            headers: {
                'Authorization': `Token ${ctfd_token}`,
                'Content-Type': 'application/json'
            },
            next: { revalidate: 60 }
    })

    return (await res.json()).data
}
