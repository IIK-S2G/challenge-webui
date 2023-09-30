import Hint from './hint';

/**
 * Hint components for challenges
 * @param {HintProps[]} hints Array of hint objects
 * @returns Hint components as a JSX Element
 */
export default function Hints({hints}: {hints: HintProps[]}) {

    return (
        <div className="bottom-12 w-full">
            {hints.map((hint) => {
                return <Hint key={hint.id} hint={hint}/>
            })}
        </div>
    ) 
}