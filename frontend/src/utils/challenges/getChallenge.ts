import { base_url, ctfd_token } from "@parent/secret.json"

export default async function getChallenge(id: number): Promise<FullChallengeProps | null> {
    const url = `${base_url}challenges/${id}`

    const res = await fetch(url, {
            headers: {
                'Authorization': `Token ${ctfd_token}`,
                'Content-Type': 'application/json'
            },
            next: { revalidate: 60 }
    })

    if (!res.ok) return null
    return (await res.json()).data
}
