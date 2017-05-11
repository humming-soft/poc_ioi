Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: '***************'
    },
    xAxis: {
        categories: [
            'April',
            /*'San Francisco'*/
        ]
    },
    yAxis: [{
        min: 0,
        title: {
            text: 'Metric Tonnes(MT)'
        }
    }, /*{
        title: {
            text: 'Profit (millions)'
        },
        opposite: true
    }*/],
    legend: {
        shadow: false
    },
    tooltip: {
        shared: true
    },
    plotOptions: {
        column: {
            grouping: false,
            shadow: false,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Budget',
        color: 'rgba(165,170,217,1)',
        data: [200000],
        pointPadding: 0.3,
        pointPlacement:-0.01
    }, {
        name: 'Actual',
        color: 'rgba(126,86,134,.9)',
        data: [114000],
        pointPadding: 0.4,
        pointPlacement: -0.01
    }]
});