import { Button } from 'primereact/button'
import { CustomButtonProps } from 'types'

const CustomButton = ({ components, className, ...rest }: CustomButtonProps) => {
  return (
    <Button
      {...rest}
      className={`prose dark:prose-invert ${className}    dark:!text-white  border-2 dark:!bg-transparent hover:dark:!bg-black/60 hover:dark:!border-white hover:dark:!text-white`}
    >
      {components}
    </Button>
  )
}

export default CustomButton
