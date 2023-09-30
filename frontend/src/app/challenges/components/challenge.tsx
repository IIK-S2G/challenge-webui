'use client'

import { useState } from "react"
import ChallengeInfo from "./challengeInfo"

type ChallengeComponentProps = {
    challenge: ChallengeProps | FullChallengeProps
    solves: ChallengeSolvesProps[] | null
    hints: HintProps[] | null
}

export default function Challenge({challenge, solves, hints}: ChallengeComponentProps) {
    const [showChallengeInfo, setShowChallengeInfo] = useState(false)
    const challengeColor = challenge.solved_by_me ? 'bg-green-500':'bg-[#191919]'

    function handleClick() {
        setShowChallengeInfo(!showChallengeInfo)
    }

    return(
        <>
            <main className="grid place-items-center mx-4 mb-8 cursor-pointer" onClick={handleClick}>
                <div className={`grid place-items-center ${challengeColor} h-[100px] w-[338px] rounded-lg`}>
                    <h1 className='text-lg font-semibold'>{challenge.name}</h1>
                    <h1 className='font-semibold'>{challenge.value}</h1>
                </div>
            </main>
            {showChallengeInfo && <ChallengeInfo challenge={challenge} solves={solves} hints={hints} handler={handleClick}/>}
        </>
    )
}
