<script>

import VueApexCharts from 'vue3-apexcharts'

export default {
    name: 'Workingtime',
    components: {
        apexchart: VueApexCharts
    },
    data: {
          series: [
            {
              data: [
                {
                  x: '2008',
                  y: [2800, 4500]
                },
                {
                  x: '2009',
                  y: [3200, 4100]
                },
                {
                  x: '2010',
                  y: [2950, 7800]
                },
                {
                  x: '2011',
                  y: [3000, 4600]
                },
                {
                  x: '2012',
                  y: [3500, 4100]
                },
                {
                  x: '2013',
                  y: [4500, 6500]
                },
                {
                  x: '2014',
                  y: [4100, 5600]
                }
              ]
            }
          ],
          chartOptions: {
            chart: {
              height: 350,
              type: 'rangeBar',
              zoom: {
                enabled: false
              }
            },
            plotOptions: {
              bar: {
                isDumbbell: true,
                columnWidth: 3,
                dumbbellColors: [['#008FFB', '#00E396']]
              }
            },
            legend: {
              show: true,
              showForSingleSeries: true,
              position: 'top',
              horizontalAlign: 'left',
              customLegendItems: ['Product A', 'Product B']
            },
            fill: {
              type: 'gradient',
              gradient: {
                type: 'vertical',
                gradientToColors: ['#00E396'],
                inverseColors: true,
                stops: [0, 100]
              }
            },
            grid: {
              xaxis: {
                lines: {
                  show: true
                }
              },
              yaxis: {
                lines: {
                  show: false
                }
              }
            },
            xaxis: {
              tickPlacement: 'on'
            }
          }
        }
}

</script>

<template>
    <div class="w-6/12 h-56 px-6 py-4 bg-clockbg rounded-3xl shadow">
        <div id="chart">
            <apexchart type="rangeBar" height="350" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>

</template>

<style>

</style>