import { ProjectData } from 'types';
import { Card } from 'primereact/card';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Button } from 'primereact/button';
import Image from 'next/image';
import { useRouter } from 'next/router';

const CustomCard = ({
  description,
  image,
  linkDemo,
  linkRepo,
  title,
}: Omit<ProjectData, '_id'>) => {
  const router = useRouter();

  return (
    <Card
      className="overflow-hidden prose sm:w-96 m-4 min-w-[300px]"
      title={
        <h3 className=" text-2xl font-bold custom-gradient-text from-cyan-500 to-blue-500 m-0">
          {title}
        </h3>
      }
      footer={
        <div className="flex flex-col sm:flex-row ">
          <Button
            icon="pi pi-arrow-right"
            label="Demo"
            iconPos="right"
            className="p-button-info"
            onClick={() => router.push(linkDemo)}
          />

          <Button
            icon="pi pi-github"
            label="Repo/Code"
            iconPos="right"
            className="p-button-primary sm:ml-2 mt-4 sm:mt-0"
            onClick={() => router.push(linkRepo)}
          />
        </div>
      }
      header={
        <div className="relative w-full h-64">
          <Image src={image} alt="Card" layout="fill" objectFit="cover" />
        </div>
      }
    >
      <ScrollPanel className="prose text-justify h-48 custom-scrollpanel pr-4 ">
        {description}
      </ScrollPanel>
    </Card>
  );
};

export default CustomCard;
