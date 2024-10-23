type BetCardType = {
    isRed : boolean;
    value: number;
    spin: number
    gain: number;
    loss: number;
    unit: string;
}

type BetType = {
    spin: number;
    currentBet: number;
    gain: number;
    loss: number;
}

type DateType = {
    day: number;
    month: number;
    year: number;
}

type TimeType = {
    hours: number;
    minutes: number;
    seconds: number;
}

type DateTimeType = {
    date: DateType;
    time: TimeType;
}

type CurrentSessionHistoryType = {
    timer: number;
    gain: number;
    loss: number;
    currentBet: number;
    spin: number;
}