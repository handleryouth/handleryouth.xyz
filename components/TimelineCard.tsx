import { Card } from 'primereact/card';

interface TimelineCardProps {
  title: string;
  description: string;
  time: string;
}

const TimelineCard = ({ title, description, time }: TimelineCardProps) => {
  return (
    <Card
      title={<h3 className="prose my-0 text-2xl leading-loose">{title}</h3>}
      subTitle={<p className="prose my-0">{time}</p>}
    >
      <p className="prose my-0">{description}</p>
    </Card>
  );
};

export default TimelineCard;
