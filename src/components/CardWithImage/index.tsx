"use client"
import { Card, CardFooter, CardHeader } from "@nextui-org/react"
import Image, { StaticImageData } from "next/image"
import MyButton from "@/components/Button"
import React from "react";
import Link from "next/link";


interface IProps {
    image: StaticImageData;
    clickedIcon: StaticImageData;
    description: string;
    title: string;
    footerDescription: string;
    link?: string | null;

}
const CardWithImage: React.FC<IProps> = ({ clickedIcon, image, description, footerDescription, title, link }) => {
    return (
        <Card isFooterBlurred className=" h-52 col-span-12 sm:col-span-7 w-52">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">{description}</p>
                <h4 className="text-white/90 font-medium text-xl">{title}</h4>
            </CardHeader>
            <Image
                width={100}
                height={100}
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
                        <p className="text-tiny text-white/60">{footerDescription}</p>
                    </div>
                </div>
                {link ?
                    <Link href={link} target="_blank">
                        <MyButton>Git</MyButton>
                    </Link>
                    :
                    <MyButton disabled>
                        ...
                    </MyButton>}

            </CardFooter>
        </Card>
    )
}
export default CardWithImage;