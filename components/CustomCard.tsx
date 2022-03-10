import Image from 'next/image';
import { useRouter } from 'next/router';
import { Card } from 'primereact/card';
import { ScrollPanel } from 'primereact/scrollpanel';
import { ProjectData } from 'types';

import Button from './Button';

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
      className="overflow-hidden md:w-[21rem] min-w-[300px]"
      title={
        <h1 className="!text-2xl prose font-bold !custom-gradient-text !from-cyan-500 !to-blue-500 !m-0">
          {title}
        </h1>
      }
      footer={
        <div className="flex flex-col sm:flex-row gap-x-3 ">
          <Button
            icon="pi pi-arrow-right"
            label="Demo"
            iconPos="right"
            className="p-button-info p-button-outlined"
            onClick={() => router.push(linkDemo)}
          />

          <Button
            icon="pi pi-github"
            label="Repo"
            iconPos="right"
            className="p-button-outlined"
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
      <ScrollPanel className="prose text-justify h-[9rem] min-w-[270px]  max-w-[270px] md:max-w-none custom-scrollpanel pr-4 ">
        {description}
      </ScrollPanel>
    </Card>
  );
};

export default CustomCard;
