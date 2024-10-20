"use client"
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import BetCard from "@/components/BetCard";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";


const BetAmountForm = () => {
    const [val, setVal] = useState([0.5]);
    const [multiplier, setMultiplier] = useState(3)

    // Génère la séquence de Fibonacci
    function fibonacciSequence(start: number): number[] {
        const fib: number[] = [start, start];

        for (let i = 2; i < 10; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }

        return fib;
    }

    // Fonction pour calculer les résultats de chaque tour
    function calculateBets(fib: number[]): { tour: number, currentBet: number, gain: number, loss: number }[] {
        let totalLoss = 0;
        let previousBetsSum = 0;

        return fib.map((value, index) => {
            const currentBet = value;
            const gain = (currentBet * multiplier) - currentBet - previousBetsSum;
            totalLoss += currentBet;
            previousBetsSum += currentBet;

            return {
                tour: index + 1,
                currentBet: currentBet,
                gain: gain,
                loss: totalLoss
            };
        });
    }


    const HandleMultiplier = (value: string) => {
        const NumberValue = Number(value)
        setMultiplier(NumberValue)
    }

    const fib = fibonacciSequence(val[0]);
    const bets = calculateBets(fib); // Calcul des mises et des résultats

    return (
        <>
            <h1 className={'font-semibold mb-3'}>Sélectionnez votre premier pari</h1>
            <div className={'w-full flex'}>
                <div className={'w-1/2 flex flex-col gap-3'}>
                    <h1>Mise de depart : <span className={'font-semibold text-lg'}>{val}K</span></h1>
                    <Slider defaultValue={val} max={13} min={0.5} step={0.5} onValueChange={(i) => setVal(i)}
                            className={'cursor-pointer mb-3'}/>
                    <h1>Mise de depart : <span className={'font-semibold text-lg'}>{val}K</span></h1>
                    <Select onValueChange={HandleMultiplier} defaultValue={multiplier.toString()}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder={`3x`}/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="3" className={'cursor-pointer'}>3x (ligne/colonne)</SelectItem>
                                <SelectItem value="2.77" className={'cursor-pointer'}>2.77x (13/37)</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className={'w-1/2 px-3 flex flex-wrap gap-1'}>

                {bets.map(({ tour, currentBet, gain, loss }, index) => (
                        <BetCard
                            key={index}
                            isRed={(index + 1) % 2 !== 0}
                            value={currentBet}
                            tour={tour}
                            gain={gain}
                            loss={loss}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default BetAmountForm;
