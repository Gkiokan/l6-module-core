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
        "caption": "Tags Overview",
        "subCaption": "most used tags",
        "basefontsize": "9",
        "pieFillAlpha": "60",
        "pieBorderThickness": "2",
        "hoverFillColor": "#cccccc",
        "pieBorderColor": "#ffffff",
        "showPercentInTooltip": "0",
        "numberPrefix": "$",
        "plotTooltext": "$label, $$valueK, $percentValue",
        theme: window.config.fusionChartsInitialTheme,
    },
    "category": [
        {
            "label": "Sales by category",
            "color": "#ffffff",
            "value": "150",
            "category": [
                {
                    "label": "Food & {br}Beverages",
                    "color": "#f8bd19",
                    "value": "55.5",
                    "category": [
                        {
                            "label": "Breads",
                            "color": "#f8bd19",
                            "value": "11.1"
                        },
                        {
                            "label": "Juice",
                            "color": "#f8bd19",
                            "value": "27.75"
                        },
                        {
                            "label": "Noodles",
                            "color": "#f8bd19",
                            "value": "9.99"
                        },
                        {
                            "label": "Seafood",
                            "color": "#f8bd19",
                            "value": "6.66"
                        }
                    ]
                },
                {
                    "label": "Apparel &{br}Accessories",
                    "color": "#e44a00",
                    "value": "42",
                    "category": [
                        {
                            "label": "Sun Glasses",
                            "color": "#e44a00",
                            "value": "10.08"
                        },
                        {
                            "label": "Clothing",
                            "color": "#e44a00",
                            "value": "18.9"
                        },
                        {
                            "label": "Handbags",
                            "color": "#e44a00",
                            "value": "6.3"
                        },
                        {
                            "label": "Shoes",
                            "color": "#e44a00",
                            "value": "6.72"
                        }
                    ]
                },
                {
                    "label": "Baby {br}Products",
                    "color": "#008ee4",
                    "value": "22.5",
                    "category": [
                        {
                            "label": "Bath &{br}Grooming",
                            "color": "#008ee4",
                            "value": "9.45"
                        },
                        {
                            "label": "Feeding",
                            "color": "#008ee4",
                            "value": "6.3"
                        },
                        {
                            "label": "Diapers",
                            "color": "#008ee4",
                            "value": "6.75"
                        }
                    ]
                },
                {
                    "label": "Electronics",
                    "color": "#33bdda",
                    "value": "30",
                    "category": [
                        {
                            "label": "Laptops",
                            "color": "#33bdda",
                            "value": "8.1"
                        },
                        {
                            "label": "Televisions",
                            "color": "#33bdda",
                            "value": "10.5"
                        },
                        {
                            "label": "SmartPhones",
                            "color": "#33bdda",
                            "value": "11.4"
                        }
                    ]
                }
            ]
        }
    ]
}


export default {
    name: 'FCPieMultiSeriesChart',

    data(){ return {
        type: "multilevelpie",
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
