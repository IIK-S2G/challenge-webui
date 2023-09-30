type ThemeState = {
    theme: number
}

type ChallengeResponse = {
    success: boolean
    data: string[]
}

type ChallengeProps = {
    id: number
    type: string
    name: string
    value: number
    solves: number
    solved_by_me: boolean
    category: string
    tags: string[]
    template: string
    script: string
}

type UserProps = {
    id: number
    oauth_id: number | null
    name: string
    password: string
    email: string
    type: string
    secret: string
    website: string | null
    affiliation: string | null
    country: string | null
    bracket: string | null
    fields: Array
    hidden: boolean
    banned: boolean
    verified: boolean
    team_id: number | null
    created: string
}

type NotificationProps = {
    id: number
    user: number | null
    user_id: number | null
    team: number | null
    team_id: number | null
    title: string
    content: string
    date: string
    html: string
}

type ProfileProps = {
    email: string
    country: string
    name: string
    team_id: number | null
    website: string | null
    id: number
    oauth_id: number | null
    affiliation: string | null
    fields: []
    bracket: null
    place: string | null
    score: number | null
}

type UserSolvesProps = {
    challenge_id: number
    ip: string
    user: SelfProps
    date: string
    provided: string
    challenge: UserChallengeProps
    type: string
    id: number 
    team: number | null
}

type SelfProps = {
    name: string
    id: number
}

type UserChallengeProps = {
    name: string
    id: number
    value: number
    category: string
}

type AwardProps = {
    description: string
    user_id: number
    user: number
    name: string
    date: string
    icon: string | null
    team_id: number | null
    category: string
    id: number
    team: number | null
    value: number
    requirements: string | null
}

type AwardProfileProps = {
    challenge_id: number,
    ip: string,
    user: SelfProps,
    date: string,
    provided: string,
    challenge: UserChallengeProps,
    type: string,
    id: number,
    team: number | null
}

type HintProps = {
    challenge_id: number
    type: string
    id: number
    challenge: number
    requirements: string | null
    cost: number 
    content: string
}

type FullChallengeProps = {
    id: number
    name: string
    value: number
    initial: number
    decay: number
    minimum: number
    description: string
    connection_info: string | null
    category: string
    state: string
    max_attempts: number
    type: string
    type_data: TypeDataProps
    solves: number
    solved_by_me: boolean
    attempts: number
    files: string[]
    tags: string[]
    hints: HintsProps[]
    view: string
}

type HintsProps = {
    id: number
    cost: number
}

type TypeDataProps = {
    id: string
    name: string
    template: {
        create: string
        update: string
        view: string
    }
    scripts: {
        create: string
        update: string
        view: string
    }
}

type ChallengeSolvesProps = {
    account_id: number
    name: string
    date: string
    account_url: string
}

type FailProps = {
    challenge_id: number, 
    ip: string
    user: SelfProps
    date: string, 
    provided: string, 
    challenge: UserChallengeProps
    type: string,
    id: number, 
    team: number | null
}

type ScoreboardProps = {
    pos: number
    account_id: number
    account_url: string
    account_type: string
    oauth_id: number | null
    name: string
    score: number
}

type LineChartProps = {
    dataset: number[]
    label: string
    labels: string[]
    className?: string
};

type MultiLineChartProps = {
    dataset: number[][]
    label: string[]
    labels: string[][]
    className?: string
};

type DatasetEntryProps = {
    label: string,
    labels: string[],
    data: number[],
    borderColor: string,
    backgroundColor: string
}

type UserListProps = {
    name: string
    country: string | null
    team_id: number | null,
    website: string | null,
    id: number,
    oauth_id: number | null,
    affiliation: string | null,
    fields: [],
    bracket: null
}