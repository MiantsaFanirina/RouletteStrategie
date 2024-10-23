import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {formatTimer} from "@/lib/utils";

const CurrentSessionHistory = ({Sessions} : {Sessions: CurrentSessionHistoryType[] | []}) => {
    return (
        <div className="h-full w-1/3 ml-6">
            {Sessions.length === 0 ? (
                <div className="px-4">
                    <h4 className="mb-4 text-sm font-medium leading-none">Session History</h4>
                    <p className="text-sm text-gray-500">No sessions yet</p>
                </div>
            ) : (
                <ScrollArea className="h-full rounded-md border">
                    <div className="p-4">
                        <h4 className="mb-4 text-sm font-medium leading-none">Session History</h4>

                        {Sessions.map((session, index) => (
                            <div key={index} className="flex flex-col gap-1">
                                <div className="w-full text-sm">time played {formatTimer(session.timer)}</div>
                                <div className="text-sm flex justify-between">
                                    <p>Spin: {session.spin}</p>
                                    {session.gain > 0 && <p className="text-emerald-500">+{session.gain}</p>}
                                    {session.loss < 0 && <p className="text-orange-600">{session.loss}</p>}
                                </div>
                                <Separator className="my-2" />
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            )}
        </div>
    );
};

export default CurrentSessionHistory;
