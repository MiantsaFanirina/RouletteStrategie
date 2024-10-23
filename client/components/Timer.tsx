"use client";
import { Dispatch, SetStateAction, useEffect } from "react";
import {formatTimer} from "@/lib/utils";

const Timer = ({
                   timer,
                   setTimer,
               }: {
    timer: number;
    setTimer: Dispatch<SetStateAction<number>>;
}) => {
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);

        return () => {
            clearInterval(interval)
        };
    }, [setTimer]);



    return (
        <div className={"flex gap-1 items-center"}>
            <h1 className={"text-sm"}>Time played :</h1>
            <h1 className={"font-semibold"}>
                {formatTimer(timer)}
            </h1>
        </div>
    );
};

export default Timer;
