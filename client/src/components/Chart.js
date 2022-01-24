import React,{useState, useEffect} from 'react';
import axios from 'axios'

import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const options = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'left',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
}




const NewChart = () => {
    const [chartData, setChartData] = useState({  
        labels:['Intensity','Likelihood', 'Relevance', 'Year', 'Country', 'Topics', 'Region', 'City'],
    datasets: [
      {
        label: 'Dataset 1',
        data:[],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(25, 90, 13, 0.5)',
      },
      {
        label: 'Dataset 2',
        data:[],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],})


  
 useEffect(() => {
    const dataset1 = []
    const dataset2 = []
    const relevanceset = []
    const countryset  = []
    const Topicset = []
    const regionset = []
     
  const getdata = async () => {
     const res = await axios.get('/api/getdata')
     const {data} = res.data
     console.log(data);
     for(const val of data) {
         dataset1.push(val.intensity)
         dataset2.push(val.likelihood)
         relevanceset.push(val.relevance)
         countryset.push(val.country)
         Topicset.push(val.topic)
         regionset.push(val.region)
       
     }
  }
  setChartData({
    labels:[countryset, Topicset, regionset, '4', '5', '6',],
    datasets: [
      {
        label: 'Intensity Dataset',
        data:dataset1,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(25, 90, 13, 0.5)',
      },
      {
        label: 'Likelihood Dataset',
        data:dataset2,
        borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Relevance Dataset',
        data:relevanceset,
        borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'yellow',
      },
      {
        label: 'Country Dataset',
        data:countryset,
        borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'orange',
      },
      {
        label: 'Topic Dataset',
        data:Topicset,
        borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'blue',
      },
      {
        label: 'Region Dataset',
        data:regionset,
        borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'green',
      },
    
    
  
    
    ],
 
  })
  console.log('Newdata', dataset1, dataset2);
  getdata()
}, [])

   
    
 






  return (
        <div >
         
         <div style={{width:'80%', height:'50%'}}>
             <Bar data={chartData} options={options}/>
            
         </div>


  </div>
  )
};

export default NewChart;
