"use client"
import MyButton from "@/components/Button";
import { animated, useResize, useScroll, useSpring } from '@react-spring/web'
import MyImage from "../assets/image/BERKCOLAK.jpg";
import Image from "next/image";
import { Code } from "@nextui-org/react";
import CardWithImage from "@/components/CardWithImage";
import BreathingAppIcon from "../assets/image/breathing-app-icon.jpeg";
import Yaay from "../assets/image/Yaay.svg";
import Muud from "../assets/image/Muud.jpg";
import Intraprise from "../assets/image/Intraprise.png";
import CallCenter from "../assets/image/CallCenter.png";
import Feedback from "../assets/image/360Feedback.jpg";
import DigitalTwin from "../assets/image/DigitalTwin.jpg";
import CVData from "../data/CV.json";

export default function Home() {

  return (
    <div className="flex justify-center items-center px-40 py-6">
      <Code size="lg" color="secondary" radius="lg">Hi! Im BERK</Code>
      {CVData.Projects.map((item, index) => {
        return (
          <CardWithImage key={index} clickedIcon={BreathingAppIcon} image={require(`../assets/image/${item.imagePath}`)} />
        )
      })}
      {/* <Image src={MyImage} alt="BERK ÇOLAK" priority className="rounded-3xl " width={350} height={350} /> */}
    </div>
  );
}
