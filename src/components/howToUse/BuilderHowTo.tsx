import React from 'react'
import './howToUse.css'

export const BuilderHowTo:React.FC = () => {
    return (
        <div className="builder-how-to-wrapper">
            <div className="builder-how-to-container">
                <h1>Building board</h1>
                <div className="builder-how-to-inner">
                    <h4>How to build a board?</h4>
                    <p className="body-small">The tool is based on drag and drop interactions. Simply click, drag and drop a unit on a desired hex to put it on the board. You can move units by dragging and dropping a hex with unit to another hex. As you change the board, traits will change automatically.</p>
                </div>
                <div className="builder-how-to-inner">
                    <h4>How do I add an item?</h4>
                    <p className="body-small">Drag an item and drop it on a unit that is already on board. You can use that feature to display best in slot items for your carries.</p>
                </div>
                <div className="builder-how-to-inner">
                    <h4>Can I save a composition?</h4>
                    <p className="body-small">Defo, complete your board and click the “Copy link” button in top-right corner of your board. The link will be copied to you clipboard and you can view your board any time later on.</p>
                </div>
            </div>
            <div className="builder-how-to-container">
                <h1>Analyzing board</h1>
                <div className="builder-how-to-inner">
                    <h4>How does it work?</h4>
                    <p className="body-small">Analyzing board is a feature that we’ve implemented to let TFT players test performance, best items and best augments for a given set of units.  The tool analyzes latest 500 games (4.000 comps) played by Challenger players. It looks up for compositions that have your units included and then analyzes them. The algorithim can analyze compositions that have more units than your board but the analyzed composition needs to have all your units and possibly more. </p>
                </div>
                <div className="builder-how-to-inner">
                    <h4>How should I use it?</h4>
                    <p className="body-small">To get a lot of data analyzed try to think what units are essential for a composition to be considered a given comp. For example if you want to analyze performance of Legendary Composition which could be Terra, Shyvana, Ao’ Shin, Shi Oh Yu, Bard, Jayce you technically could just put on the board all of the units but to get more reliable data you should put just Terra, Shyvana, Ao’ Shin as the rest of the board often varies depending on match up.</p>
                </div>
                <div className="builder-how-to-inner">
                    <h4>How to understand the outcome of analysis?</h4>
                    <h5>Performance</h5>
                    <p className="body-small">This section is fairly simple to understand. The only things that might be a bit confusing is Top4Ratio and Playrate. The first one is the number of Top4 placements(1st-4th) divided by all matching comps. The latter is average amount of players in each lobby analyzed.</p>
                    <h5>Items</h5>
                    <p className="body-small">These are all the items played on each of your units. Each items comes with its average placement and playrate. This section is especially useful for big data samples as items vary from game to game and small data sample might result in data being not reliable.</p>
                    <h5>Augments</h5>
                    <p className="body-small">This section is a bit tricky to understand. The augments displayed are all augments sorted by average placement. In 4.000 composition it is quite rare to find an augment that have been played in a given composition more than ten times, especially when it comes to rare augments like Personal Training or Cutthroat. Don’t make your decisions based on this data, but take it into consideration when choosing your augments.</p>   
                </div>
                <div className="builder-how-to-inner">
                    <h4>Can I save the outcome of analysis?</h4>
                    <p className="body-small">Sure thing, analyze your comp and copy the link to your board. Your analysis will be there when you open the link.</p>
                </div>
            </div>
        </div>
    )
}
