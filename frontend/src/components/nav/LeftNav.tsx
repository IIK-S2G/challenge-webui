import Link from "next/link";

export default function LeftNav(): JSX.Element {
    return(
        <div className="flex mr-50 items-center">
            <h2 className="text-gray-500 mx-4"><Link href="/resources">Resources</Link></h2>
            <h2 className="text-gray-500 mx-4"><Link href="/users">Users</Link></h2>
            <h2 className="text-gray-500 mx-4"><Link href="/scoreboard">Scoreboard</Link></h2>
            <h2 className="text-gray-500 mx-4"><Link href="/challenges">Challenges</Link></h2>
        </div>
    )
}
