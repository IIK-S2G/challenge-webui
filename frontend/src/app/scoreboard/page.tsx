import en from "./text/en.json"
import List from "./list"
import Chart from "./chart"

export default function Scoreboard(): JSX.Element {

    return(
        <main className="grid place-items-center h-[92vh] mx-8">
            <div className="w-full h-full grid place-items-center">
                <h1 className="grid place-items-center text-4xl font-bold mb-4">{en.scoreboard}</h1>
                <Chart />
                <List />
            </div>
        </main>
    )
}
