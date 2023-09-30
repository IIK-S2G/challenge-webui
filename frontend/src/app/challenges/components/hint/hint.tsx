import en from '../../text/en.json'
import { useState } from 'react'

export default function Hint({hint}: {hint: HintProps}) {
    const [showConfirmationPopup, setShowConfirmationPopup] = useState(false)
    const [showHint, setShowHint] = useState(false)

    function handleClick() {
        // if user has unlocked hint
        if (true) {
            setShowHint(true)
        // if user has not unlocked the hint
        } else {
            setShowConfirmationPopup(true)
        }
    }

    function ConfirmationPopup() {
        function handleYes() {
            setShowHint(true)
        }

        function handleNo() {
            setShowConfirmationPopup(false)
        }

        return (
            <div className="fixed top-0 left-0 w-full h-full grid place-items-center mt-1">
                <div className="relative w-[360px] max-h-[400px] overflow-auto mt-8 p-3">
                    <h1 className='text-center text-2xl font-bold'>{en.confirm}</h1>
                    <div className='flex'>
                        <p className='bg-[#228B22]' onClick={handleYes}>Yes</p>
                        <p className='bg-[#D2042D]' onClick={handleNo}>No</p>
                    </div>
                </div>
            </div> 
        )
    }

    return (
        <div key={hint.id} className={`grid items-center bg-[#482D81] h-[35px] rounded-lg w-full mb-3 cursor-pointer`} onClick={handleClick}>
            {!showHint && <p className="text-center text-sm">{en.hint_start + hint.cost + en.hint_end}</p>}
            {showConfirmationPopup && <ConfirmationPopup/>}
            {showHint && <p className="text-center text-sm">{hint.content}</p>}
        </div>
    )
}
