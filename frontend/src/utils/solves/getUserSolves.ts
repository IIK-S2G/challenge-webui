import { base_url, ctfd_token } from "@parent/secret.json"

export default async function getUserSolves(uid: number): Promise<UserSolvesProps[]> {
    const url = `${base_url}users/${uid}/solves`


    const res = await fetch(url, {
            headers: {
                'Authorization': `Token ${ctfd_token}`,
                'Content-Type': 'application/json'
            },
            next: { revalidate: 60 }
    })

    return (await res.json()).data
}
