import { ReactNode } from "react";
import { Tooltip } from "primereact/tooltip";

interface TooltipProps {
  target: string;
  text: string;
  icon: ReactNode | string;
}

const CustomTooltip = ({ target, text, icon }: TooltipProps) => {
  return (
    <div>
      <Tooltip target={`.${target}`} />
      <i
        className={target}
        data-pr-showdelay="200"
        data-pr-tooltip={text}
        data-pr-position="top"
      >
        {icon}
      </i>
    </div>
  );
};

export default CustomTooltip;
