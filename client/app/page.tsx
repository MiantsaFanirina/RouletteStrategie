import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Image from "next/image";


function Home() {
    return (

        <div className=" flex flex-col md:flex-row h-screen">
            <div className={'w-full h-full flex items-center justify-center'}>
                <div className={'flex flex-col w-300 items-center gap-3'}>
                    <Image src={"/roulette.png"} alt={"roulette"} width={250} height={"250"}></Image>
                    <Input type="text" placeholder="Nom d'utilisateur"/>
                    <Input type="password" placeholder="Mot de passe" />
                    <Button variant={"outline"} className={"w-full"}>Jouer</Button>
                </div>
            </div>
        </div >
    )
}

export default Home
