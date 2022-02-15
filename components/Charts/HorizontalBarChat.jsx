import React from 'react'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJs,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js'

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export const HorizontalBarChat =({data,lables,className,title})=>{
    const options = {
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: `${title}`,
          },
        },
      };
    return(
        <Bar options={options} data={data} />
    )
}

