import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Legend, Title, Tooltip, BarController } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { useState } from 'react';
import { fetchy } from './fetchy';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { RestartAlt } from '@mui/icons-material';

export function DataStatus(props) {
    const headers = { 'content-Type': 'application/json' }
    fetch(process.env.NODE_ENV === 'development' ? 'http://localhost:18080/api/Sales/Daily?days=' + props.period : 'danspizza-api.azurewebsites.net/api/Sales/Daily?days=' + props.period, headers)
        .catch((error) => {
            console.log('API error: ' + JSON.stringify(error.message))
            props.setDataPosted(false)
        })
        .then((res) => { return res.json()
        })
        .then((data) => {
            console.log('handleFetch login data: ' + JSON.stringify(data))
            props.setPrice(data.sales.reduce((a, b) => [...a, b.price], []))
            props.setLabels(data.sales.map(x => (x.foodType + ' (' + x.amount + ')')))
            props.setDataPosted(false)
        })
        .catch((error) => {
            console.log('React fetch error: ' + error.message)
            props.setError(error.message)
            props.setDataPosted(false)
        })
}

export default function BarSales(props) {

    const [period, setPeriod] = useState(1);
    const [dataPosted, setDataPosted] = useState(false);
    const [error, setError] = useState(null)
    const [price, setPrice] = useState(props.data.reduce((a, b) => [...a, b.price], []))
    const [labels, setLabels] = useState(props.data.map(x => (x.foodType + ' (' + x.amount + ')')))

    const food = props.data.reduce((a, b) => [...a, b.foodType], [])
    const amount = props.data.reduce((a, b) => [...a, b.amount], [])

    console.log('sales: ' + food)
    console.log('amount: ' + amount)
    console.log('price: ' + price)
    console.log('label: ' + props.data.map(x => (x.foodType + ' (' + x.amount + ')')))

    ChartJS.register(CategoryScale, LinearScale, BarElement, BarController, Title, Legend, Tooltip);

    const handleDay = () => {
        setPeriod(1)
        setDataPosted(true)
    }
    const handleWeek = () => {
        setPeriod(7)
        setDataPosted(true)
    }
    const handleMonth = () => {
        setPeriod(30)
        setDataPosted(true)
    }

    return (
        <Box sx={{p:5}}>
            <ButtonGroup sx={{mb: 5}} variant="contained" aria-label="outlined primary button group">
                <Button onClick={handleDay}>Day</Button>
                <Button onClick={handleWeek}>Week</Button>
                <Button onClick={handleMonth}>Month</Button>
            </ButtonGroup>
            <Chart
                type={'bar'}
                options={{
                    responsive: true,
                        plugins: {
                            legend: {
                              position: 'top',
                            },
                            title: {
                                display: true,
                                text: 'Sales By Menu Category'
                            },
                            tooltip: {
                                callbacks: {
                                    label: function (context) {
                                        let label = context.dataset.label || '';

                                        if (label) {
                                            label += ': ';
                                        }
                                        if (context.parsed.y !== null) {
                                            label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                                        }
                                        return label;
                                    }
                                }
                            }
                        },
                        scales:{
                            y: { beginAtZero: true }
                        }
                    }}
                data={{
                    type: 'bar',
                    labels: labels,
                    datasets: [
                    {
                        label: 'Price',
                        data: price, // number of each
                        borderWidth: 1,
                        backgroundColor: '#084c63'
                    },
                    // {
                    //     label: 'Amount Sold',
                    //     data: amount, // number of each
                    //     borderWidth: 1,
                    //     backgroundColor: '#631f08'
                    // },
                ]
                }}
            />
            {dataPosted &&
                <DataStatus
                    period={period}
                    setLabels={(data) => setLabels(data)}
                    setPrice={(data) => setPrice(data)}
                    setDataPosted={(data) => setDataPosted(data)}
                    setError={(data) => setError(data)}
                />}
            {error && <Box>{error}</Box>}
        </Box>
    )
}

