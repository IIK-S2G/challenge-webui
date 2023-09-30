export default function calcScore ({solves, awards}: {solves: UserSolvesProps[], awards: AwardProps[] | AwardProfileProps[]}) {
    const ScoreMap = new Map()

    for (let i = 0; i < solves.length; i++) {
        ScoreMap.set(solves[i].date.slice(11,19), solves[i].challenge.value)
    }
    
    for (let i = 0; i < awards.length; i++) {
        const award = awards[i]
        if ('value' in award) {
            ScoreMap.set(award.date.slice(11,19), award.value)
        } else {
            ScoreMap.set(award.date.slice(11,19), award.challenge.value);
        }
    }

    const ScoreArray = Array.from(ScoreMap)
    
    ScoreArray.sort((a,b) => {
        const first = a[0]
        const last = b[0]
        if (first < last) return -1
        if (first > last) return 1
        return 0
    })

    for (let i = 1; i < ScoreArray.length; i++) {
        ScoreArray[i][1] = ScoreArray[i-1][1] + ScoreArray[i][1]
    }

    const times: string[] = ScoreArray.map(pair => pair[0]);
    const points: number[] = ScoreArray.map(pair => pair[1]);

    return {times, points}
}
