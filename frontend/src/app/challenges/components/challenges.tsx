import en from '../text/en.json'
import Challenge from './challenge'
import getChallenges from '@utils/challenges/getChallenges'
import getChallenge from '@utils/challenges/getChallenge'
import getHints from '@utils/hints/getHints'
import getChallengeSolves from '@/utils/solves/getChallengeSolves'

export default async function Challenges() {
    const challenges = await getChallenges()

    // todo: Replace by countdown component <Countdown/>
    // if countdown is at 0 but challenges are still null there has to be an error, throw "Loading challenges..." text
    
    if (!challenges) return <h1 className='grid place-items-center text-2xl font-bold mb-4'>{en.error}</h1>
    if (!challenges.length) return <h1 className='grid place-items-center text-4xl font-bold mb-4'>{en.empty}</h1>
    
    let uniqueCategories = new Set<string>(challenges.map((challenge : ChallengeProps) => challenge.category))

    // if (!uniqueCategories.size) return <h1 className='grid place-items-center text-4xl font-bold mb-4'>{en.empty}</h1>

    return (
        <>
          {[...uniqueCategories].map((category: string) => {
            let challengesOfCategory = challenges.filter((challenge: ChallengeProps) => challenge.category == category)
    
            return(
                <>
                    <h1 className='text-3xl ml-4 mb-2 font-semibold'>{category}</h1>
                    <div className='grid 480px:grid-cols-1 740px:grid-cols-2 1160px:grid-cols-3 1460px:grid-cols-4 1860px:grid-cols-5 2200px:grid-cols-6 place-items-center justify-content'>
                        {challengesOfCategory.map(async(challenge: ChallengeProps) => {
                            const full = await getChallenge(challenge.id)
                            const solves = await getChallengeSolves(challenge.id)
                            const hints = await getHints(challenge.id)

                            return <Challenge key={challenge.id} challenge={full ? full : challenge} solves={solves} hints={hints} />
                        })}
                    </div>
                </>
            )
          })}
        </>
      )
}
