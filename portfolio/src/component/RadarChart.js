// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/radar
import * as React from 'react';
import { ResponsiveRadar } from '@nivo/radar'


// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.


const tooltip = (props)=>{
   // console.log(props.data[0])
   const rank = {1:'F',2:'B',3:'A',4:'S',5:'OP'}
   const colors = {'F':'gray','B':'green','A':'red','S':'orange','OP':'black'}
    let tier = props.data[0].value;
    let color = colors[rank[tier]];
    return <div>
        <b><h5>{props.index}</h5> <h4 style={{color:color, fontWeight:900}}>{rank[tier]}</h4></b>
    </div>
}
const RadarChart = (e) => {

    return(
        <div style={{ width: '500px', height: '400px', margin: '0 auto'  ,
        justifyContent: 'center',
        borderColor: 'black'
        }}>
    <ResponsiveRadar
        data={e.data}
        keys={['티어']}
        indexBy="컨텐츠"
        maxValue={5}
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}

        borderColor={{ from: 'color' }}
        sliceTooltip={tooltip}
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