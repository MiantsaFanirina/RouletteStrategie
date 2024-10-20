import GameMethod from "@/components/GameMethod";
import WinHistory from "@/components/WinHistory";

export default function HomePage() {
    return (
        <div className={'w-full h-full md:py-10 md:px-32 gap-6 flex'}>
            <GameMethod/>
            <WinHistory/>
        </div>
    )
}
