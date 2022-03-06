import { ReactNode } from 'react';

interface ActivityDescriptionProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ActivityDescription = ({ title, description, icon }: ActivityDescriptionProps) => {
  return (
    <div className="flex flex-col sm:flex-row prose-h3:mt-0">
      <div className="text-6xl mr-4">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p className="sm:w-[25rem]">{description}</p>
      </div>
    </div>
  );
};

export default ActivityDescription;
