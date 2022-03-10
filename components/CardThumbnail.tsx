import Image from 'next/image';
import { useRouter } from 'next/router';
import { Card } from 'primereact/card';
import { ProjectData } from 'types';

import Button from './Button';

const CardThumbnail = ({
  image,
  linkDemo,
  linkRepo,
  title,
}: Omit<ProjectData, '_id' | 'description'>) => {
  const router = useRouter();

  return (
    <Card
      className="overflow-hidden prose sm:w-96 m-4 min-w-[300px] shadow-2xl"
      title={
        <h3 className=" text-2xl font-bold custom-gradient-text from-cyan-500 to-blue-500 m-0">
          {title}
        </h3>
      }
      footer={
        <div className="flex flex-col sm:flex-row gap-3 ">
          <Button
            icon="pi pi-arrow-right"
            label="Demo"
            iconPos="right"
            className="p-button-outlined p-button-info prose"
            onClick={() => router.push(linkDemo)}
          />

          <Button
            icon="pi pi-github"
            label="Repo/Code"
            iconPos="right"
            className="p-button-outlined prose"
            onClick={() => router.push(linkRepo)}
          />
        </div>
      }
      header={
        <div className="relative w-full h-64">
          <Image src={image} alt="Card" layout="fill" objectFit="cover" />
        </div>
      }
    ></Card>
  );
};

export default CardThumbnail;
