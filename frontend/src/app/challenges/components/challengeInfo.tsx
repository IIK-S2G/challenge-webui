import { useState } from "react"
import en from '../text/en.json'
import FormatDescription, { FlagFormat } from "./formatDescription"
import Attachments from "./attachments"
import Hints from "./hint/hints"

type ChallengeInfoProps = {
    challenge: ChallengeProps | FullChallengeProps
    solves: ChallengeSolvesProps[] | null
    hints: HintProps[] | null
    handler: () => void
}

export default function ChallengeInfo({challenge, solves, hints, handler}: ChallengeInfoProps) {
    const [solvePage, showSolvePage] = useState(false)

    function Info() {

        function submitFlag() {
            // submit flag logic
        }

        if (!('description' in challenge && 'decay' in challenge)) return (
            <div className="fixed top-0 left-0 w-full h-full grid place-items-center mt-1">
                <div className="h-[200px] w-[200px]" onClick={(event) => {event.stopPropagation()}}>
                    <h1 className='text-center text-lg font-semibold'>{challenge.name}</h1>
                    <h1 className='text-center font-semibold'>{challenge.value}</h1>
                    <h1 className='text-center font-semibold'>{challenge.tags[0]}</h1>
                    <h1 className='text-center font-semibold'>Failed to load info. Retrying in 1 minute.</h1>
                </div>
            </div>
        )

        const flagformat = FlagFormat(challenge.description)

        return (
            <div className="fixed grid place-items-center min-h-[430px] mt-12">
                <div className="relative w-[360px] max-h-[400px] overflow-auto p-3" onClick={(event) => {event.stopPropagation()}}>
                    <h1 className='text-center text-2xl font-bold'>{challenge.name}</h1>
                    <h1 className='text-center font-bold'>{challenge.value}</h1>
                    <h1 className='grid items-center mx-auto text-center font-semibold bg-[#555] w-[160px] h-[20px] rounded-md text-xs mb-2 mt-1'>{challenge.tags[0]}</h1>
                    <FormatDescription string={challenge.description} />
                    {hints && <Hints hints={hints} />}
                    <Attachments files={challenge.files}/>
                    <div className="flex justify-between w-full">
                        <input className="bg-[#555] w-[225px] h-[35px] rounded-lg text-center" placeholder={flagformat} />
                        <div className="grid items-center bg-[#228B22] h-[35px] rounded-lg w-[100px] cursor-pointer">
                            <h1 className="text-center" onClick={submitFlag}>{en.submit}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function Solves() {
        if (!solves) return(<div>Failed to load solves... Retrying in 1 minute.</div>)

        return (
            <div className="fixed grid place-items-center min-h-[430px] mt-12">
                <div className="relative w-[360px] max-h-[400px] overflow-auto p-3" onClick={(event) => {event.stopPropagation()}}>
                    <div className="grid grid-cols-2 text-center">
                        <h1 className="font-bold">Name</h1>
                        <h1 className="font-bold">Time</h1>
                    </div>
                    {solves.map((solve) => {
                        return (
                            <div className=" grid grid-cols-2 text-center">
                                <h1 className='text-lg'>{solve.name}</h1>
                                <h1 className='text-lg'>{solve.date.slice(11,16)}</h1>
                            </div>
                        )
                    })}
                    </div>
            </div>
        )
    }

    function Header() {

        function handleClick() {
            showSolvePage(!solvePage)
        }

        return(
            <div className="w-full h-[50px] flex items-center space-between p-6">
                <div className="h-[30px] flex items-center w-[92%]" onClick={(event) => event.stopPropagation()}>
                    <div className={`text-center cursor-pointer w-[90px] ${solvePage ? 'bg-[#555]': 'bg-[#228B22]'} rounded-md`} onClick={(event) => {event.stopPropagation(); handleClick()}}>Challenge</div>
                    <div className={`text-center cursor-pointer w-[90px] ${solvePage ? 'bg-[#228B22]': 'bg-[#555]'} rounded-md ml-2`}  onClick={(event) => {event.stopPropagation(); handleClick()}}>{`Solves ${solves ? solves.length : null}`}</div>
                </div>
                <div className="text-center cursor-pointer w-[8%]" onClick={handler}>❌</div>
            </div>
        )
    }

    return(
        <div className="fixed top-0 left-0 w-full h-full grid place-items-center bg-[#00000050]" onClick={handler}>
            <div className="min-h-[500px] w-[400px] bg-[#222] flex justify-center rounded-2xl p-2 pt-4">
                {solves && <Header/>}
                {!solvePage && <Info/>}
                {solvePage && <Solves/>}
            </div>
        </div>
    )
}
