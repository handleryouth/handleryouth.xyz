import { Tooltip } from 'primereact/tooltip'
import { TooltipProps } from 'types'

const CustomTooltip = ({ target, text, icon }: TooltipProps) => {
  return (
    <div>
      <Tooltip className="prose text-sm sm:text-base" target={`.${target}`} />
      <i className={target} data-pr-showdelay="200" data-pr-tooltip={text} data-pr-position="top">
        {icon}
      </i>
    </div>
  )
}

export default CustomTooltip
