import { ProjectData } from "types";
import { Card } from "primereact/card";
import { ScrollPanel } from "primereact/scrollpanel";
import { Button } from "primereact/button";
import Image from "next/image";
import { useRouter } from "next/router";

const CustomCard = ({
  description,
  image,
  link_demo,
  link_repo,
  title,
}: Omit<ProjectData, "_id">) => {
  const router = useRouter();

  return (
    <Card
      className=" overflow-hidden sm:w-96 m-4 min-w-[288px]"
      title={
        <p className=" text-transparent bg-clip-text bg-gradient-to-r  from-cyan-500 to-blue-500">
          {title}
        </p>
      }
      footer={
        <div className="flex flex-col sm:flex-row ">
          <Button
            icon="pi pi-arrow-right"
            label="Demo"
            iconPos="right"
            className="p-button-info"
            onClick={() => router.push(link_demo)}
          />

          <Button
            icon="pi pi-github"
            label="Repo/Code"
            iconPos="right"
            className="p-button-primary sm:ml-2 mt-4 sm:mt-0"
            onClick={() => router.push(link_repo)}
          />
        </div>
      }
      header={
        <div className="relative w-full h-64">
          <Image src={image} alt="Card" layout="fill" objectFit="cover" />
        </div>
      }
    >
      <ScrollPanel
        className="text-justify h-48 custom-scrollpanel pr-4 "
        style={{ lineHeight: "1.5" }}
      >
        {description}
      </ScrollPanel>
    </Card>
  );
};

export default CustomCard;
