import { merge, now } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import dynamic from 'next/dynamic';
// material
import { Card, CardHeader, Box, Container, Grid, TextField } from '@mui/material';
//
import BaseOptionChart from './BaseOptionChart';

// ----------------------------------------------------------------------
import React from 'react';
const SplitButtonYear = dynamic(() => import('./ButtonGroupYear'))
const SplitButtonMonth = dynamic(() => import('./ButtonGroupMonth'))


export default function Traffic() {
    const [typeDate, setTypeData] = React.useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sartuday', 'Sunday']);
    const [growth, setGrowth] = React.useState('January - July 2022')
    var CHART_DATA = [
        {
            name: 'Lượt truy cập (Nghìn lượt)',
            type: 'area',
            data: [22, 3, 56, 2, 14, 15]
        },
        {
            name: 'Số người dùng',
            type: 'area',
            data: [2, 33, 32, 2, 12, 72]
        }
    ];


    const chartOptions = merge(BaseOptionChart(), {
        stroke: { width: [1, 2, 3] },
        plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
        fill: { type: ['gradient', 'gradient'] },
        xaxis: {
            categories: typeDate,
        },
        yaxis: {
            decimalsInFloat: 2
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: (y) => {
                    //   if (typeof y !== 'undefined') {
                    //     if(regulation == {})
                    //     {
                    //       return `${y.toFixed(0)} VNĐ`;
                    //     }
                    //     if (regulation.currency == 'vnd')
                    //       return `${y.toFixed(0)} VNĐ`;
                    //     else
                    //       return `${(y).toFixed(2)} $`;
                    //   }
                    return y.toFixed(2);
                }
            }
        }
    });

    return (
        <Container style={{ marginTop: '24px' }}>
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <Card className='border-1 border-solid border-black'>
                        <CardHeader style={{ fontWeight: '800' }} title="Hàng hóa" subheader={growth} />
                        <div className='flex justify-end mr-5'>
                            <div className='mr-4'>
                                <SplitButtonYear></SplitButtonYear>
                            </div>
                            <SplitButtonMonth></SplitButtonMonth>
                        </div>
                        <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                            <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
