<template lang="html">
      <v-card>
          <v-card-text px-0>
            <fusioncharts
              :type="type"
              :width="width"
              _height="height"
              :dataFormat="dataFormat"
              :dataSource="dataSource" />
          </v-card-text>
      </v-card>
</template>

<script>

let dataSource = {
    "chart": {
        "caption": "Sales Analysis of Shoe Brands",
        "subcaption": "Last Quarter",
        "xAxisMinValue": "0",
        "xAxisMaxValue": "100",
        "yAxisMinValue": "0",
        "yAxisMaxValue": "30000",
        "plotFillAlpha": "70",
        "plotFillHoverColor": "#6baa01",
        "xAxisName": "Average Price",
        "yAxisName": "Units Sold",
        "numDivlines": "2",
        "showValues": "1",
        "plotTooltext": "$name : Profit Contribution - $zvalue%",
        "drawQuadrant": "1",
        "quadrantLineAlpha": "80",
        "quadrantLineThickness": "3",
        "quadrantXVal": "50",
        "quadrantYVal": "15000",
        "quadrantLabelTL": "Low Price / High Sale",
        "quadrantLabelTR": "High Price / High Sale",
        "quadrantLabelBL": "Low Price / Low Sale",
        "quadrantLabelBR": "High Price / Low Sale",
        "use3dlighting": "0",
        "showAlternateHGridColor": "0",
        "showAlternateVGridColor": "0",
        theme: window.config.fusionChartsInitialTheme,

        exportEnabled: 1,
        exportFileName: 'Bubble Export',
    },
    "categories": [
        {
            "category": [
                {
                    "label": "$0",
                    "x": "0"
                },
                {
                    "label": "$20",
                    "x": "20",
                    "showverticalline": "1"
                },
                {
                    "label": "$40",
                    "x": "40",
                    "showverticalline": "1"
                },
                {
                    "label": "$60",
                    "x": "60",
                    "showverticalline": "1"
                },
                {
                    "label": "$80",
                    "x": "80",
                    "showverticalline": "1"
                },
                {
                    "label": "$100",
                    "x": "100",
                    "showverticalline": "1"
                }
            ]
        }
    ],
    "dataset": [
        {
            "color": "#00aee4",
            "data": [
                {
                    "x": "80",
                    "y": "15000",
                    "z": "24",
                    "name": "Nike"
                },
                {
                    "x": "60",
                    "y": "18500",
                    "z": "26",
                    "name": "Adidas"
                },
                {
                    "x": "50",
                    "y": "19450",
                    "z": "19",
                    "name": "Puma"
                },
                {
                    "x": "65",
                    "y": "10500",
                    "z": "8",
                    "name": "Fila"
                },
                {
                    "x": "43",
                    "y": "8750",
                    "z": "5",
                    "name": "Lotto"
                },
                {
                    "x": "32",
                    "y": "22000",
                    "z": "10",
                    "name": "Reebok"
                },
                {
                    "x": "44",
                    "y": "13000",
                    "z": "9",
                    "name": "Woodland"
                }
            ]
        }
    ],
    "trendlines": [
        {
            "line": [
                {
                    "startValue": "20000",
                    "endValue": "30000",
                    "isTrendZone": "1",
                    "color": "#aaaaaa",
                    "alpha": "14"
                },
                {
                    "startValue": "10000",
                    "endValue": "20000",
                    "isTrendZone": "1",
                    "color": "#aaaaaa",
                    "alpha": "7"
                }
            ]
        }
    ],
    "vTrendlines": [
        {
            "line": [
                {
                    "startValue": "44",
                    "isTrendZone": "0",
                    "color": "#0066cc",
                    "thickness": "1",
                    "dashed": "1",
                    "displayValue": "Gross Avg."
                }
            ]
        }
    ]
}

export default {
    name: 'FCBubbleChart',

    data(){ return {
        type: "bubble",
        width: "100%",
        // height: "100%",
        dataFormat: "json",
        dataSource
    }},

    watch: {
        '$root.fusionChartTheme'(val){
            this.dataSource.chart.theme = val
        }
    }
}
</script>
