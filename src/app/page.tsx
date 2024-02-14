import { Code } from "@nextui-org/react";
import CardWithImage from "@/components/CardWithImage";
import BreathingAppIcon from "../assets/image/breathing-app-icon.jpeg";
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
