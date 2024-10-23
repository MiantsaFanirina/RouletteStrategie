import {formatDate, formatTime} from "@/lib/utils";

const SessionDate = ({ currentDateTime } : { currentDateTime: DateTimeType | {} }) => {


    return <h1>
        <span className={'text-sm'}>Session :</span> <span className={'font-semibold underline'}>{currentDateTime ? <>{formatDate((currentDateTime as DateTimeType).date)} - {formatTime((currentDateTime as DateTimeType).time)}</> : <></>}</span>
    </h1>
}
export default SessionDate