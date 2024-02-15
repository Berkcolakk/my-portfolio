"use client"
import CardWithImage from "@/components/CardWithImage";
import Programmer from "@/assets/image/Programmer.svg";
import CVData from "@/data/CV.json";

const WorkHistoryCards = () => {
    return (
        <div className="flex gap-4">
            {CVData.Projects.map((item, index) => {
                return (
                    <CardWithImage key={index}
                        clickedIcon={require(`@/assets/image/${item.clickedIcon}`)}
                        image={require(`@/assets/image/${item.imageName}`)}
                        description={`${item.viaCompany ?? ''} ${item.viaCompany ? 'via' : ''} ${item.company} `}
                        footerDescription={''}
                        title={item.name}
                        link={item.address}
                    />
                )
            })}
        </div>
    )
}
export default WorkHistoryCards;