export default function ScoreBoardEntry({user, userCount}: {user: ScoreboardProps, userCount: number}): JSX.Element {

    // Adding left margin for top 5, right margin for top 6-10, otherwise right for odd numbers and left for even
    const margin = user.pos < 10 ? user.pos < 6 ? 'mr-4' : 'ml-4' : user.pos % 2 ? 'mr-4' : 'ml-4'

    // Checks if there is only 1 person on the scoreboard, and if so removes all margin
    const overrideMargin = userCount < 2 ? 'mr-0' : ''

    // color lookup table (faster than switch statement)
    const backgroundColors: { [key: number]: string } = { 1: 'bg-[#FFD700]', 2: 'bg-[#c0c0c0]', 3: 'bg-[#cd7f32]' };
    
    // Checks if the user is top 3, if so gives gold, silver or bronze color, otherwise checks if its top 10 for blue, or anything else for gray
    const backgroundColor = backgroundColors[user.pos] || ((user.pos >= 4 && user.pos <= 10) ? 'bg-[#152238]' : 'bg-[#191919]');

    return (
        <div className={`flex ${backgroundColor} h-[50px] mb-4 ${margin} ${overrideMargin} ${user.pos < 4 ? 'font-bold text-[#000]':''} rounded-xl px-4`}>
            <p className="grid place-items-center mx-2 w-[80px]">{user.pos}</p>
            <p className="mt-auto mb-auto mr-2 w-full pl-10">{user.name}</p>
            <p className="mt-auto mb-auto w-[60px]">{user.score}</p>
        </div>
    )
}
