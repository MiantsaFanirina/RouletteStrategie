import {Button} from "@/components/ui/button";
import {useState} from "react";
import {getDateTime} from "@/lib/utils";
import SessionDate from "@/components/SessionDate";
import Timer from "@/components/Timer";
import BetCard from "@/components/BetCard";
import CurrentSessionHistory from "@/components/CurrentSessionHistory";

const Sessions: CurrentSessionHistoryType[] = [
    { timer: 2, gain: 100, loss: 0, currentBet: 50, spin: 1 },  // Win
    { timer: 8, gain: 0, loss: -100, currentBet: 100, spin: 2 },  // Loss
    { timer: 8, gain: 150, loss: 0, currentBet: 75, spin: 3 },  // Win
    { timer: 3600, gain: 0, loss: -120, currentBet: 120, spin: 4 },  // Loss
    { timer: 8, gain: 250, loss: 0, currentBet: 150, spin: 5 },  // Win
    { timer: 8, gain: 0, loss: -200, currentBet: 200, spin: 6 },  // Loss
    { timer: 8, gain: 350, loss: 0, currentBet: 180, spin: 7 },  // Win
    { timer: 8, gain: 0, loss: -220, currentBet: 230, spin: 8 },  // Loss
    { timer: 8, gain: 500, loss: 0, currentBet: 260, spin: 9 },  // Win
    { timer: 8, gain: 0, loss: -300, currentBet: 300, spin: 10 },  // Loss
];



const BetSession = ({bets, unit} : {bets: BetType[], unit: string}) => {
    const [timer, setTimer] = useState(1)
    const [CurrentSpin, setCurrentSpin] = useState(1)
    const [IsSessionStarted, setIsSessionStarted] = useState(false)
    const [currentDateTime, setCurrentDateTime] = useState({})

    const handleWin = () => {
        setCurrentSpin(1)
    }
    const handleLoss = () => {
        setCurrentSpin(CurrentSpin + 1)
        if(CurrentSpin > 9) {
            setCurrentSpin(1)
            setIsSessionStarted(false)
        }
    }
    const handleSession = async () => {
        if(IsSessionStarted) {
            setCurrentSpin(1)
            setIsSessionStarted(false)
        }
        else {
            const dateTime = await getDateTime()
            console.log(dateTime)
            setCurrentDateTime(dateTime)
            setTimer(1)
            setIsSessionStarted(true)
        }
    }

    return (
        <div className={'w-full h-full overflow-hidden flex'}>
            <div className={'w-2/3 h-full flex flex-col gap-3'}>
                <Button className={`${IsSessionStarted ? '' : 'bg-secondary'} rounded-md`} onClick={handleSession}>{IsSessionStarted ? 'Stop session' : 'Start session'}</Button>
                {IsSessionStarted ? <div className={'flex flex-col gap-12'}>
                        <div className="flex w-full gap-3 justify-between">
                            <SessionDate currentDateTime={currentDateTime}></SessionDate>
                            <Timer timer={timer} setTimer={setTimer} />
                        </div>
                        {bets.map(({ spin, currentBet, gain, loss }, index) => {
                            if (spin === CurrentSpin) {
                                return (
                                    <div key={index} className={'flex w-full gap-3 justify-between'}>
                                        <div className={'flex flex-col gap-6'}>
                                            <div className={'flex items-center gap-3'}>
                                                <h1 className={'text-md'}>You should bet</h1>
                                                <div
                                                    className={'py-0.5 px-3 bg-primary rounded-md font-semibold'}>{currentBet} {unit}</div>
                                            </div>
                                            <div className={'w-full flex gap-2'}>
                                                <Button className={'bg-primary rounded'} onClick={handleWin}>Win</Button>
                                                <Button className={'bg-secondary rounded'} onClick={handleLoss}>Loss</Button>
                                            </div>
                                        </div>
                                        <div className={'flex flex-col gap-3'}>

                                            <div className={'flex flex-col items-end gap-1'}>
                                                <h1 className={'text-sm'}>Current spin</h1>
                                                <div
                                                    className={'py-0.5 px-3 bg-secondary rounded-md font-semibold'}>{spin} Spin</div>
                                            </div>

                                            <div className={'flex flex-col items-end gap-1'}>
                                                <h1 className={'text-sm'}>Current gain</h1>
                                                <div
                                                    className={'py-0.5 px-3 bg-secondary rounded-md font-semibold'}>{gain.toFixed(1)} {unit}</div>
                                            </div>

                                            <div className={'flex flex-col items-end gap-1'}>
                                                <h1 className={'text-sm'}>Current loss</h1>
                                                <div
                                                    className={'py-0.5 px-3 bg-secondary rounded-md font-semibold'}>{loss.toFixed(1)} {unit}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            return <></>
                        })}
                </div> : <></>}
            </div>
            <CurrentSessionHistory Sessions={Sessions}/>
        </div>
    )
}
export default BetSession