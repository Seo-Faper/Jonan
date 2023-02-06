// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/radar
import * as React from 'react';
import { ResponsiveRadar } from '@nivo/radar'
import { Tooltip } from 'bootstrap';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const CustomTooltip = (point)=>{
    console.log(point);
    let cell = point.cell;
    let styleValue = {
        width:'auto',
        maxHeight: '200px',
        color: '#000000',
        marginBottom: '20px',
        padding: '10px',
        border:`2px solid ${cell.color}`,
        borderRadius : '5px',
        backgroundColor: cell.color,
    }
    var fontSize = {fontSize: '12px'}
    return(
        <div style={styleValue}>
             <span  style={fontSize}>등급</span>
        </div>
    )
};
const RadarChart = (e) => {
    const rank = {0:'F',1:'B',2:'A',3:'S',4:'OP'}
    return(
        <div style={{ width: '400px', height: '400px', margin: '0 auto'  ,
        justifyContent: 'center',
        borderColor: 'black'
        }}>
    <ResponsiveRadar
        data={e.data}
        keys={['히카리']}
        indexBy="taste"
        maxValue={5}
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}

        borderColor={{ from: 'color' }}
        theme={{
            
            axis:{
                ticks:{
                    text:{
                        fontSize: 20,
                        fill: '#000000' 
                    }
                    
                },
            }
        }}
        gridShape="linear"
        gridLabelOffset={10}
        enableDots={false}

        colors={{ scheme: 'category10' }}
    />
    </div>);
};
export default RadarChart;