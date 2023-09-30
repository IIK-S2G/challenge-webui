import getScoreboard from '@/utils/scoreboard/getScoreboard';
import ScoreBoardEntry from './scoreBoardEntry';
import ListHeader from './listHeader';
import swap from '@/utils/scoreboard/swap';

export default async function List(): Promise<JSX.Element> {
    const scoreboard = await getScoreboard()

    if (scoreboard) {
        swap(scoreboard, 0, 10)
        const cols = scoreboard.length > 1 ? 'grid-cols-2' : ''

        return (
            <div className={`grid ${cols} w-full`}>
                <ListHeader userCount={scoreboard.length}/>
                {scoreboard.map((user) => {
                    return <ScoreBoardEntry user={user} userCount={scoreboard.length}/>
                })}
            </div>
        )
    }

    return <div/>
}
