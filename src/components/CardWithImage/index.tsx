import { Card, CardFooter, CardHeader } from "@nextui-org/react"
import Image, { StaticImageData } from "next/image"
import MyButton from "../Button"
import React from "react";

interface IProps {
    image: StaticImageData;
    clickedIcon: StaticImageData;
}
const CardWithImage: React.FC<IProps> = ({ clickedIcon, image }) => {
    return (
        <Card isFooterBlurred className=" h-52 col-span-12 sm:col-span-7 w-52">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
            </CardHeader>
            <Image
                width={100}
                height={100}
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-fill"
                src={image}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                    <Image
                        width={100}
                        height={100}
                        alt="Breathing app icon"
                        className="rounded-full w-10 h-11 bg-black"
                        src={clickedIcon}
                    />
                    <div className="flex flex-col">
                        <p className="text-tiny text-white/60">Breathing App</p>
                        <p className="text-tiny text-white/60">Get a good nights sleep.</p>
                    </div>
                </div>
                <MyButton text="Git" />
            </CardFooter>
        </Card>
    )
}
export default CardWithImage;