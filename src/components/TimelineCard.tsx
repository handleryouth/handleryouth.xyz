import { Card } from 'primereact/card'
import { TimelineCardProps } from 'types'

const TimelineCard = ({ title, description, time }: TimelineCardProps) => {
  return (
    <Card
      className="dark:bg-black/10"
      title={<h3 className="prose dark:prose-invert my-0 text-2xl leading-loose">{title}</h3>}
      subTitle={<p className="prose dark:prose-invert my-0">{time}</p>}
    >
      <p className="prose dark:prose-invert my-0">{description}</p>
    </Card>
  )
}

export default TimelineCard
