import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Generate Fibonacci sequence
export function fibonacciSequence(start: number): number[] {
  const fib: number[] = [start, start];

  for (let i = 2; i < 10; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  return fib;
}

// Generate Martingale sequence
export function martingaleSequence(initialBet: number): number[] {
  const bets: number[] = [initialBet];

  for (let i = 1; i < 10; i++) {
    bets.push(bets[i - 1] * 2);
  }

  return bets;
}

// Generate Quadratic sequence

export function quadraticSequence(initialValue: number): number[] {
  const sequence: number[] = [initialValue];

  for (let i = 1; i < 10; i++) {
    const increment = 5 * Math.pow(i - 1, 2); // (5 * (i - 1)^2)
    sequence.push(sequence[i - 1] * 2 + increment);
  }

  return sequence;
}


// Function to calculate the results of each round
export function calculateBets(fib: number[], multiplier: number): { spin: number, currentBet: number, gain: number, loss: number }[] {
  let totalLoss = 0;
  let previousBetsSum = 0;

  return fib.map((value, index) => {
    const currentBet = value;
    const gain = (currentBet * multiplier) - currentBet - previousBetsSum;
    totalLoss += currentBet;
    previousBetsSum += currentBet;

    return {
      spin: index + 1,
      currentBet: currentBet,
      gain: gain,
      loss: totalLoss
    };
  });
}

export async function getDateTime(): Promise<DateTimeType> {
  const currentDate = new Date();

  // Get current date
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  // Get current time
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const date: DateType = {day, month, year}
  const time: TimeType = {hours, minutes, seconds}

  return {
    time,
    date
  }
}

// Function to format the date
export function formatDate (date: DateType): string  {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const { day, month, year } = date;
  const monthString = monthNames[month - 1];
  return `${day} ${monthString} ${year}`;
};

// Function to format the time
export function formatTime  (time: TimeType): string  {
  const { hours, minutes, seconds } = time;
  const isLessThanTen = (Num: number)=> {
    if (Num < 10) {
      return `0${Num}`
    }
    return Num
  }
  return `${isLessThanTen(hours)}:${isLessThanTen(minutes)}:${isLessThanTen(seconds)}`;
};

export function formatTimer (timer: number)  {
  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 60);
  const seconds = timer % 60;

  return hours > 0
      ? `${hours}h ${minutes}m ${seconds}s`
      : minutes > 0
          ? `${minutes}m ${seconds}s`
          : `${seconds}s`;
};