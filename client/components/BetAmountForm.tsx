"use client"
import { Slider } from "@/components/ui/slider";
import {Dispatch, SetStateAction, useState} from "react";
import BetCard from "@/components/BetCard";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";


const BetAmountForm = ({unit, setUnit, val, setVal, bets, multiplier, setMultiplier} : {
    unit: string;
    setUnit: Dispatch<SetStateAction<string>>,
    val: number[],
    setVal: Dispatch<SetStateAction<number[]>>,
    bets: BetType[],
    multiplier: number,
    setMultiplier:  Dispatch<SetStateAction<number>>

}) => {


    const HandleMultiplier = (value: string) => {
        const NumberValue = Number(value)
        setMultiplier(NumberValue)
    }

    const HandleUnit = (value: string) => {
        setUnit(value)
    }

    return (
        <>
            <h1 className={'font-semibold mb-4'}>Select your first bet</h1>
            <div className={'w-full flex lg:flex-row flex-col gap-6'}>
                <div className={'lg:w-1/2 w-full flex flex-col gap-3'}>
                    <h1>Starting point : <span className={'font-semibold text-lg'}>{val}K</span></h1>
                    <Slider defaultValue={val} max={13} min={0.5} step={0.5} onValueChange={(i) => setVal(i)}
                            className={'cursor-pointer mb-4'}/>
                    <h1>Type of bet :</h1>
                    <Select onValueChange={HandleMultiplier} defaultValue={multiplier.toString()}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={`3x`}/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="3" className={'cursor-pointer'}>3x (2:1/dozen)</SelectItem>
                                <SelectItem value="2.77" className={'cursor-pointer'}>2.77x (13/37)</SelectItem>
                                <SelectItem value="2" className={'cursor-pointer'}>2x (Color/Even-odd/half)</SelectItem>
                                <SelectItem value="1.8" className={'cursor-pointer'}>1.8x (Fishing)</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <h1>Unité : </h1>

                    <Select onValueChange={HandleUnit} defaultValue={'K'}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={`3x`}/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="U" className={'cursor-pointer'}>Unit</SelectItem>
                                <SelectItem value="K" className={'cursor-pointer'}>K</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className={'lg:w-1/2 w-full px-3 flex flex-wrap gap-1'}>

                    {bets.map(({ spin, currentBet, gain, loss }, index) => (
                        <BetCard
                            key={index}
                            isRed={(index + 1) % 2 !== 0}
                            value={currentBet}
                            spin={spin}
                            gain={gain}
                            loss={loss}
                            unit={unit}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default BetAmountForm;
