import en from "./text/en.json"

export default function Boilerplate(): JSX.Element {

    return(
        <main className="grid place-items-center h-[92vh]">
            <div>
                <h1 className="grid place-items-center text-4xl font-bold mb-4">{en.scoreboard}</h1>
            </div>
        </main>
    )
}
