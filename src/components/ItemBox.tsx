import { ItemBoxProps } from 'types'

const ItemBox = ({ title, time, company, description, customClassName }: ItemBoxProps) => {
  return (
    <div
      className={`border-2 p-4 flex flex-col  justify-center prose-h3:my-0 prose-p:my-0 rounded-md w-full ${customClassName}`}
    >
      <h3>{title}</h3>
      <p>{company}</p>
      <p>{time}</p>
      <p>{description}</p>
    </div>
  )
}

export default ItemBox
