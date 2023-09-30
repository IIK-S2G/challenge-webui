import en from '../../profile/text/en.json'
import PieChart from '../../profile/components/pieChart';
import LineChart from '@/components/lineChart';
import calcScore from '@utils/scoreboard/calcScore';
import getAwards from '@/utils/awards/getAwards';
import getFails from '@/utils/fails/getFails';
import getUserSolves from '@/utils/solves/getUserSolves';
import getProfile from '@/utils/profile/getProfile';

function ProfileChallenges({challenge}: {challenge: UserSolvesProps}): JSX.Element {
    const date = en.month[Number(challenge.date[5] + challenge.date[6])-1] + ' ' + challenge.date[8] + challenge.date[9] + (Number(String(challenge.date[8] + challenge.date[9]).slice(-1)) == 1 ? "st, " : Number(String(challenge.date[8] + challenge.date[9]).slice(-1)) == 2 ? "nd, " : Number(challenge.date[8] + challenge.date[9]) == 3 ? "rd, " : Number(challenge.date[8] + challenge.date[9]) == 23 ? "rd, ": "th, ") + challenge.date.slice(11, 19) + " GMT."
    
    return(
        <div className={`bg-[#191919] grid grid-cols-4 w-full h-[50px] items-center pl-5 rounded-lg mb-5`}>
            <h1 className='w-full text-md'>{challenge.challenge.name}</h1>
            <h1 className='w-full text-md'>{challenge.challenge.category}</h1>
            <h1 className='w-full text-md'>{challenge.challenge.value}</h1>
            <h1 className='w-full text-md'>{date}</h1>
        </div>
    )
}

async function Award({award}: {award: AwardProps}): Promise<JSX.Element> {
    const date = en.month[Number(award.date[5] + award.date[6])-1] + ' ' + award.date[8] + award.date[9] + (Number(String(award.date[8] + award.date[9]).slice(-1)) == 1 ? "st, " : Number(String(award.date[8] + award.date[9]).slice(-1)) == 2 ? "nd, " : Number(award.date[8] + award.date[9]) == 3 ? "rd, " : Number(award.date[8] + award.date[9]) == 23 ? "rd, ": "th, ") + award.date.slice(11, 19) + " GMT."
    const category = award.category == "hints" ? "Hint" : award.category

    return(
        <div className={`bg-[#191919] grid grid-cols-4 w-full h-[50px] items-center pl-5 rounded-lg mb-5`}>
            <h1 className='w-full text-md'>{award.description.slice(9)}</h1>
            <h1 className='w-full text-md'>{category}</h1>
            <h1 className='w-full text-md'>{award.value}</h1>
            <h1 className='w-full text-md'>{date}</h1>
        </div>
    )
}

async function ShowInfo({uid}: {uid:number}) {
    const profile = await getProfile(uid)
    const solves = await getUserSolves(uid)
    const fails = await getFails(uid)
    const awards = await getAwards(uid)

    let counts = solves.reduce<Record<string, number>>((acc, val) => {
        acc[val.challenge.category] = (acc[val.challenge.category] || 0) + 1;
        return acc;
    }, {});

    let categoryLabelArray = Object.keys(counts);
    let categoryDataArray = Object.values(counts);

    let ScoreArray = calcScore({solves, awards})

    if (!profile) return <h1 className='grid place-items-center text-2xl font-bold mb-4'>{en.error}</h1>

    return(
        <main className="grid place-items-center w-full rounded-xl max-w-[98%] min-h-[92vh] mx-8">
            <div className={`grid text-left w-full items-center pt-2 bg-[#191919] rounded-xl mb-5`}>
                <div className='text-center'>
                    <h1 className='w-full text-4xl font-semibold'>{profile.name}</h1>
                    <h1 className='w-full text-md'>{profile.country}</h1>
                    <h1 className='w-full text-sm text-[#555]'>{profile.place} {en.place}</h1>
                    <h1 className='w-full text-sm text-[#555]'>{profile.score} {en.points}</h1>
                </div>
                <div className='grid grid-cols-2 justify-between text-center'>
                    <h1 className='w-full text-2xl font-semibold'>{en.percentage}</h1>
                    <h1 className='w-full text-2xl font-semibold'>{en.category_breakdown}</h1>
                </div>
                <div className='grid grid-cols-2 w-full items-center text-center'>
                    <PieChart dataset={[solves.length, fails.length]} labels={['Solves', 'Fails']} label="Attempts" />
                    <PieChart dataset={categoryDataArray} labels={categoryLabelArray} label="Solves"/>
                </div>
                <h1 className='w-full text-2xl font-semibold text-center'>{en.score_over_time}</h1>
                <LineChart className='h-[300px] grid place-items-center m-5' dataset={ScoreArray.points} labels={ScoreArray.times} label="Points"/>
            </div>
            <h1 className='w-full text-3xl font-semibold'>{en.awards}</h1>
            <div className={`grid text-left w-full items-center pt-2 rounded-xl`}>
                <div className='grid grid-cols-4 w-full h-[50px] items-center pl-5 mb-5 bg-[#111] rounded-lg'>
                    <h1 className='w-full text-xl'>{en.type}</h1>
                    <h1 className='w-full text-xl'>{en.category}</h1>
                    <h1 className='w-full text-xl'>{en.value}</h1>
                    <h1 className='w-full text-xl'>{en.time}</h1>
                </div>
                {awards.map((award) => {
                    return(
                        <Award key={award.id} award={award}/>
                    )
                })}
            </div>
            <h1 className='w-full text-3xl font-semibold'>{en.solves}</h1>
            <div className={`grid text-left w-full items-center pt-2 rounded-xl`}>
                <div className='grid grid-cols-4 w-full h-[50px] items-center pl-5 mb-5 bg-[#111] rounded-lg'>
                    <h1 className='w-full text-xl'>{en.challenge}</h1>
                    <h1 className='w-full text-xl'>{en.category}</h1>
                    <h1 className='w-full text-xl'>{en.value}</h1>
                    <h1 className='w-full text-xl'>{en.time}</h1>
                </div>
                {solves.map((challenge) => {
                    return(
                        <ProfileChallenges key={challenge.challenge_id} challenge={challenge}/>
                    )
                })}
            </div>
        </main>
    )
}

export default ShowInfo