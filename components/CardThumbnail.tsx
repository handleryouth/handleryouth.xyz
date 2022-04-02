import Image from 'next/image';
import { useRouter } from 'next/router';
import { Card } from 'primereact/card';

import Button from './Button';

import { ProjectData } from 'types';

const CardThumbnail = ({
  image,
  linkDemo,
  linkRepo,
  title,
}: Omit<ProjectData, '_id' | 'description'>) => {
  const router = useRouter();

  return (
    <Card
      className="overflow-hidden prose sm:w-96 m-4 min-w-[300px] shadow-2xl dark:bg-black/10 dark:border-2 dark:border-slate-700"
      title={
        <h3 className=" text-2xl font-bold custom-gradient-text from-cyan-500 to-blue-500 dark:text-white m-0">
          {title}
        </h3>
      }
      footer={
        <div className="flex flex-col sm:flex-row gap-3 ">
          <Button
            icon="pi pi-arrow-right"
            label="Demo"
            iconPos="right"
            className="p-button-outlined p-button-info"
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
    ></Card>
  );
};

export default CardThumbnail;
