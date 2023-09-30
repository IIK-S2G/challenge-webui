import en from '../text/en.json'
import PieChart from './pieChart';
import LineChart from '@/components/lineChart';
import calcScore from '@utils/scoreboard/calcScore';
import getChallenges from '@/utils/challenges/getChallenges';
import getAwardContent from '@/utils/awards/getAwardContent';
import getProfile from '@/utils/profile/getProfile';
import getUserSolves from '@/utils/solves/getUserSolves';
import getFails from '@/utils/fails/getFails';
import getAwards from '@/utils/awards/getAwards';

export default async function Profile() {
    // const profile = await getProfile()
    // const solves = await getUserSolves()
    // const fails = await getFails()
    // const awards = await getAwards()

    let profile = {email: "eirimhan@stud.ntnu.no", country: "NO", name: "eirikhanasand", team_id: null, website: null, id: 232, oauth_id: null, affiliation: null, fields: [], bracket: null, place: "1st", score: 950}
    let solves = [{"challenge_id": 7, "ip": "10.50.194.254", "user": {"name": "eirikhanasand", "id": 232}, "date": "2023-06-15T18:25:20.982710+00:00", "provided": "S2G{218}", "challenge": {"name": "Bridge", "id": 7, "value": 1000, "category": "OSINT"}, "type": "correct", "id": 13, "team": null}, {"challenge_id": 4, "ip": "10.50.195.20", "user": {"name": "eirikhanasand", "id": 232}, "date": "2023-06-13T12:26:46.509830+00:00", "provided": "S2G{Fiskebrygga}", "challenge": {"name": "Wharf 1", "id": 4, "value": 1000, "category": "OSINT"}, "type": "correct", "id": 2, "team": null}]
    let fails = [1,2,3]
    let awards = [{"description": "Hint for Bridge", "user_id": 232, "user": 232, "name": "Hint 4", "date": "2023-06-15T18:24:52.319819+00:00", "icon": null, "team_id": null, "category": "hints", "id": 6, "team": null, "value": -100, "requirements": null}, {"description": "Hint for Bridge", "user_id": 232, "user": 232, "name": "Hint 3", "date": "2023-06-15T18:24:48.459775+00:00", "icon": null, "team_id": null, "category": "hints", "id": 5, "team": null, "value": -50, "requirements": null}, {"description": "Hint for Wharf 2", "user_id": 232, "user": 232, "name": "Hint 2", "date": "2023-06-13T21:59:19.739651+00:00", "icon": null, "team_id": null, "category": "hints", "id": 1, "team": null, "value": -50, "requirements": null}]
    
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
                <div className='grid grid-cols-5 w-full h-[50px] items-center pl-5 mb-5 bg-[#111] rounded-lg'>
                    <h1 className='w-full text-xl'>{en.type}</h1>
                    <h1 className='w-full text-xl'>{en.category}</h1>
                    <h1 className='w-full text-xl'>{en.value}</h1>
                    <h1 className='w-full text-xl'>{en.time}</h1>
                    <h1 className='w-full text-xl'>{en.hint}</h1>
                </div>
                {awards.map((award) => {
                    return(
                        <Award key={award.id} award={award}/>
                    )
                })}
            </div>
            <h1 className='w-full text-3xl font-semibold'>{en.solves}</h1>
            <div className={`grid text-left w-full items-center pt-2 rounded-xl`}>
                <div className='grid grid-cols-5 w-full h-[50px] items-center pl-5 mb-5 bg-[#111] rounded-lg'>
                    <h1 className='w-full text-xl'>{en.challenge}</h1>
                    <h1 className='w-full text-xl'>{en.category}</h1>
                    <h1 className='w-full text-xl'>{en.value}</h1>
                    <h1 className='w-full text-xl'>{en.time}</h1>
                    <h1 className='w-full text-xl'>{en.flag}</h1>
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

function ProfileChallenges({challenge}: {challenge: UserSolvesProps}): JSX.Element {
    const date = en.month[Number(challenge.date[5] + challenge.date[6])-1] + ' ' + challenge.date[8] + challenge.date[9] + (Number(String(challenge.date[8] + challenge.date[9]).slice(-1)) == 1 ? "st, " : Number(String(challenge.date[8] + challenge.date[9]).slice(-1)) == 2 ? "nd, " : Number(challenge.date[8] + challenge.date[9]) == 3 ? "rd, " : Number(challenge.date[8] + challenge.date[9]) == 23 ? "rd, ": "th, ") + challenge.date.slice(11, 19) + " GMT."
    
    return(
        <div className={`bg-[#191919] grid grid-cols-5 w-full h-[50px] items-center pl-5 rounded-lg mb-5`}>
            <h1 className='w-full text-md'>{challenge.challenge.name}</h1>
            <h1 className='w-full text-md'>{challenge.challenge.category}</h1>
            <h1 className='w-full text-md'>{challenge.challenge.value}</h1>
            <h1 className='w-full text-md'>{date}</h1>
            <h1 className='w-full text-md'>{challenge.provided}</h1>
        </div>
    )
}

async function Award({award}: {award: AwardProps}): Promise<JSX.Element> {
    const challenges = await getChallenges()
    const date = en.month[Number(award.date[5] + award.date[6])-1] + ' ' + award.date[8] + award.date[9] + (Number(String(award.date[8] + award.date[9]).slice(-1)) == 1 ? "st, " : Number(String(award.date[8] + award.date[9]).slice(-1)) == 2 ? "nd, " : Number(award.date[8] + award.date[9]) == 3 ? "rd, " : Number(award.date[8] + award.date[9]) == 23 ? "rd, ": "th, ") + award.date.slice(11, 19) + " GMT."
    const category = award.category == "hints" ? "Hint" : award.category

    return(
        <div className={`bg-[#191919] grid grid-cols-5 w-full h-[50px] items-center pl-5 rounded-lg mb-5`}>
            <h1 className='w-full text-md'>{award.description.slice(9)}</h1>
            <h1 className='w-full text-md'>{category}</h1>
            <h1 className='w-full text-md'>{award.value}</h1>
            <h1 className='w-full text-md'>{date}</h1>
            <h1 className='w-full text-md'>{challenges && await getAwardContent({challenges, award})}</h1>
        </div>
    )
}
