import React from 'react'
import {Augment} from '../../classes'
import './builder.css'
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";


const DefaultTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#0E1828",
    border: "1px solid #172C49",
  },
}));

interface Props{
    augments: Augment[]
}


export const AnalysisAugments:React.FC<Props> = ({augments}) => {
    return (
        <div className="analysis-augments-wrapper">
            <div className="analysis-augments-titles">
                <p className="caption">Augment</p>
                <p className="caption">Average Placement</p>
                <p className="caption">Winrate</p>
                <p className="caption">Playrate</p>
            </div>
            <div className="analysis-augments-inner">
                {augments.map(augment => {
                    return(
                        <DefaultTooltip
                        title={augment.name}
                        placement="right"
                        PopperProps={{
                          modifiers: [
                            {
                              name: "offset",
                              options: {
                                offset: [0, -460],
                              },
                            },
                          ],
                        }}>
                        <div className="analysis-augments-row">
                            <img src={augment.src} alt={augment.name}></img>
                            <p className="caption avg">{augment.avgPlacement}</p>
                            <p className="caption winrate">{augment.winrate}%</p>
                            <p className="caption freq">{augment.frequency}%</p>
                        </div>
                        </DefaultTooltip>
                    )
                })}
            </div>
        </div>
    )
}