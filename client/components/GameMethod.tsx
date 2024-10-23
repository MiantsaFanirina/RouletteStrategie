"use client"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {useState} from "react";
import BetAmountForm from "@/components/BetAmountForm";
import {calculateBets, fibonacciSequence, martingaleSequence, quadraticSequence} from "@/lib/utils";
import BetSession from "@/components/BetSession";

export default function GameMethod({}) {

    const [multiplier, setMultiplier] = useState(3)
    const [val, setVal] = useState([0.5]);
    const [unit, setUnit] = useState('K')
    const [betsType, setBetsType] = useState('fibionnaci')

    const fib: number[] = fibonacciSequence(val[0]);
    const martingale: number[] = martingaleSequence(val[0])
    const quadratic: number[] = quadraticSequence(val[0])
    const betsFib: BetType[] = calculateBets(fib, multiplier);
    const betsMartingale: BetType[] = calculateBets(martingale, multiplier);
    const betsQuadratic: BetType[] = calculateBets(quadratic, multiplier);

    const handleBetsType = (value: string) => {
        setBetsType(value)
    }

    const GetBetsType = () : BetType[] => {
        if(betsType === 'fibionnaci') {
            return betsFib
        }
        else if(betsType === 'martingale') {
            return betsMartingale
        }
        return betsQuadratic
    }

    return (
        <div className={'w-2/3 h-full gap-6 flex flex-col items-center'}>
            <h1 className={'text-2xl font-semibold'}>
                Select your play method</h1>
            <Tabs defaultValue="fibionnaci" onValueChange={handleBetsType} className="w-full h-1/2">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="fibionnaci">Fibionnaci</TabsTrigger>
                    <TabsTrigger value="martingale">Martingale</TabsTrigger>
                    <TabsTrigger value="quadratic">Quadratic</TabsTrigger>
                </TabsList>
                <TabsContent value="fibionnaci"  >
                    <Card className={'py-3 px-6'}>
                        <BetAmountForm unit={unit} setUnit={setUnit} val={val} setVal={setVal} bets={betsFib} multiplier={multiplier} setMultiplier={setMultiplier }/>
                    </Card>
                </TabsContent>
                <TabsContent value="martingale">
                    <Card className={'py-3 px-6'}>
                        <BetAmountForm unit={unit} setUnit={setUnit} val={val} setVal={setVal} bets={betsMartingale} multiplier={multiplier} setMultiplier={setMultiplier }/>
                    </Card>
                </TabsContent>
                <TabsContent value="quadratic">
                    <Card className={'py-3 px-6'}>
                        <BetAmountForm unit={unit} setUnit={setUnit} val={val} setVal={setVal} bets={betsQuadratic} multiplier={multiplier} setMultiplier={setMultiplier }/>
                    </Card>
                </TabsContent>
            </Tabs>

            <BetSession bets={GetBetsType()} unit={unit}/>
        </div>
    )
}
