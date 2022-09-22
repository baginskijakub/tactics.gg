import React from 'react'
import './builder.css'


interface Props{
    avgPlacement: number;
    winrate: number;
    playrate: number;
    top4Ratio: number;
}

export const AnalysisPerformance:React.FC<Props> = ({avgPlacement, winrate, playrate, top4Ratio}) => {

    var colors: string[] = [];

  //setting color of avg placement
  if (avgPlacement < 3.7) {
    colors.push("body green");
  } else if (avgPlacement < 4.6) {
    colors.push("body yellow");
  } else {
    colors.push("body red");
  }

  //setting color of top 4 ratio
  if (top4Ratio > 55) {
    colors.push("body green");
  } else if (top4Ratio > 45) {
    colors.push("body yellow");
  } else {
    colors.push("body red");
  }

  //setting color of winrate
  if (winrate > 15) {
    colors.push("body green");
  } else if (winrate > 11) {
    colors.push("body yellow");
  } else {
    colors.push("body red");
  }

  //setting color of playrate
  if (playrate < 0.5) {
    colors.push("body green");
  } else if (playrate < 0.8) {
    colors.push("body yellow");
  } else {
    colors.push("body red");
  }

    return (
        <div className="analysis-performance-wrapper">
            <h3>Performance</h3>
            <div className="analysis-performance-inner">
                <div className="analysis-performance-row">
                    <p className="body">Average Placement</p>
                    <p className={colors[0]}>{avgPlacement}</p>
                </div>
                <div className="analysis-performance-row">
                    <p className="body">TOP4 Ratio</p>
                    <p className={colors[1]}>{top4Ratio}%</p>
                </div>
                <div className="analysis-performance-row">
                    <p className="body">Winrate</p>
                    <p className={colors[2]}>{winrate}%</p>
                </div>
                <div className="analysis-performance-row">
                    <p className="body">Playrate</p>
                    <p className={colors[3]}>{playrate}</p>
                </div>
            </div>
        </div>
    )
}

export default AnalysisPerformance
