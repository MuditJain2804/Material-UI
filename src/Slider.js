import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';


export function ContinuosSlider (){
    const[value, setValue] = React.useState(30);
    const handleChange = (event,newValue) => {
        setValue(newValue);
    };
    return(
        <Box sx={{width:200}}>
            <Stack spacing={2} direction='row' sx={{mb:1}} alignItems='center'>
                <VolumeDown/>
                <Slider aria-label='Volume' value={value} onChange={handleChange}/>
                <VolumeUp/>
            </Stack>
            <Slider sx={{ml:1}} disabled defaultValue={30}/>
        </Box>
    )
}

export function DiscreteSlider(){
    return(
        <Box sx={{width:300 ,ml:2}}>
            <Slider
                aria-label='Temperature'
                defaultValue={30}
                valueLabelDisplay='auto'
                marks
                step={10}
                min={10}
                max={100}
            />
            <Slider disabled defaultValue={30} marks min={10} max={100} step={10} />
        </Box>
    )
}

    const marks = [
        {
            value: 0,
            label:'0°C',
        },
        {
            value: 20,
            label:'20°C',
        },
        {
            value: 37,
            label:'37°C',
        },
        {
            value: 100,
            label:'100°C',
        },
    ];

    export function CustomMarks(){
    return(
        <Box sx={{width:300, ml:2}}>
            <Slider
                defaultValue={20}
                marks={marks}
                step={10}
                valueLabelDisplay='auto'
            />
        </Box>
    );
}

function valueLabelFormat(value){
    return marks.findIndex((marks)=>marks.value===value)+1;
}
export function RestrictedValue(){
    return(
        <Box sx={{width:300, ml:2}}>
            <Slider
                defaultValue={20}
                valueLabelFormat={valueLabelFormat}
                valueLabelDisplay='auto'
                marks={marks}
                step={null}
            />
        </Box>
    )
}

export function LabelAlwaysVisible(){
    return(
        <Box sx={{width : 300, ml:2}}>
            <Slider
                defaultValue={70}
                valueLabelDisplay='on'
                marks={marks}
                step={10}
            />
        </Box>
    )
}

export function RangeSlider(){
    const[value, setValue] = React.useState([20,37]);

    const handleChange = (event,newValue)=>{
        setValue(newValue);
    };
    return(
        <Box sx={{width:300, ml:2}}>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay='auto'
            />
        </Box>
    )
}


export function VerticalSlider() {
    return (
      <Stack sx={{ height: 300 }} spacing={1} direction="row">
        <Slider
          orientation="vertical"
          valueLabelDisplay="auto"
          defaultValue={30}
        />
        <Slider
          orientation="vertical"
          defaultValue={30}
          valueLabelDisplay="auto"
          disabled
        />
        <Slider
          orientation="vertical"
          defaultValue={[20, 37]}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </Stack>
    );
  }