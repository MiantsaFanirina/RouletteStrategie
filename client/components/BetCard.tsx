const BetCard = ({isRed, value, spin, gain, loss, unit} : BetCardType) => {
    return (
        <div
            className={`w-[75px] h-[75px] ${isRed ? 'bg-primary' : 'bg-secondary'} rounded-md border-2 border-black relative flex items-center justify-center`}>
            <span
                className={'absolute top-0.5 left-0.5 text-[7px] font-semibold rounded-full w-[20px] h-[20px] flex justify-center items-center bg-gray-600 text-white'}>{spin} S</span>
            <span
                className={`absolute bg-green-700 text-white text-[9px] font-bold top-0.5 right-0.5 px-1 h-[15px] flex justify-center items-center rounded-sm`}>{gain.toFixed(1)} {unit}</span>
            <h1 className={'relative font-bold text-white text-lg'}>{value} {unit}</h1>

            <span
                className={`absolute bg-orange-800 text-white text-[9px] font-bold bottom-0.5 right-0.5 py-0.5 px-2 flex justify-center items-center rounded-sm`}>{loss} {unit}</span>
        </div>
    )
}
export default BetCard