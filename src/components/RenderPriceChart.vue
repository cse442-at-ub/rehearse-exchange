<script>
    import axios from 'axios'
    import { Line } from 'vue-chartjs'
    export default {
        data() {
            return {
                minutes: [[]],
                hours: [[]],
                days: [[]],
                hourTimestamps: [],
                dayTimestamps: [],
                display: [[]],
                alpha: [],
                percentageChange: []
            }
        },
        props: ['timeframe', 'selectedCurrencyGet'],
        methods: {
            makeChart() {
                var displayCurrency;
                var price;
                var percentage;
                if (this.selectedCurrencyGet == "BTC") {
                    displayCurrency = this.display[0];
                    price = this.minutes[0][this.minutes[0].length - 1];
                    percentage = this.percentageChange[0];
                } else if (this.selectedCurrencyGet == "LTC") {
                    displayCurrency = this.display[1];
                    price = this.minutes[1][this.minutes[1].length - 1];
                    percentage = this.percentageChange[1];
                } else if (this.selectedCurrencyGet == "ETH") {
                    displayCurrency = this.display[2];
                    price = this.minutes[2][this.minutes[2].length - 1];
                    percentage = this.percentageChange[2];
                } else if (this.selectedCurrencyGet == "XRP") {
                    displayCurrency = this.display[3];
                    price = this.minutes[3][this.minutes[3].length - 1];
                    percentage = this.percentageChange[3];
                } else if (this.selectedCurrencyGet == "LINK") {
                    displayCurrency = this.display[4];
                    price = this.minutes[4][this.minutes[4].length - 1];
                    percentage = this.percentageChange[4];
                }
                 this.$emit('getPrice', price.toFixed(2));
                 this.$emit('getPercentage', percentage.toFixed(2));
                this.renderChart({
                        labels: this.alpha ,
                        datasets: [{
                            lineTension: 0,
                            fill: false,
                            borderColor: "#55b6f9",
                            pointRadius: 0,
                            data: displayCurrency
                        }]
                    },
                    {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    display: true ,
                                    color: '#4E5D6C',
                                },
                                position: 'right',
                                ticks: {
                                    fontColor: '#d3d3d3',
                                    callback: function(value) {
                                        return '$' + value;
                                    }
                                }
                            }],
                            xAxes: [{
                                gridLines: {
                                    display: true ,
                                    color: '#4E5D6C'
                                },
                                ticks: {
                                    fontColor: '#d3d3d3',
                                    autoSkip: true,
                                    maxTicksLimit: 15
                                }
                            }]
                        },
                        animation: {
                            duration: 0
                        },
                        tooltips: {
                            callbacks: {
                                label: function(tooltipItems) {
                                    return "$" + tooltipItems.yLabel.toString();
                                }
                            }
                        },
                        legend: {
                            display: false
                        }
                    }
                )
            },
            updateData() {
                var minuteData;
                var hourData;
                var dayData;
                axios.all([
                    axios.get('http://localhost:8080/minute-data'),
                    axios.get('http://localhost:8080/hour-data'),
                    axios.get('http://localhost:8080/day-data')
                ])
                .then(axios.spread((minuteResponse, hourResponse, dayResponse) => {
                    minuteData = minuteResponse.data,
                    hourData = hourResponse.data,
                    dayData = dayResponse.data,
                    this.parseData(minuteData, hourData, dayData)
                }));
            },
            changeTime(timeframe) {

                Date.prototype.addDays = function (n) {
                    var time = this.getTime();
                    var changedDate = new Date(time + (n * 24 * 60 * 60 * 1000));
                    this.setTime(changedDate.getTime());
                    return this;
                };
                Date.prototype.addHours = function (n) {
                    var time = this.getTime();
                    var changedDate = new Date(time + (n * 60 * 60 * 1000));
                    this.setTime(changedDate.getTime());
                    return this;
                };
                Date.prototype.addMinutes = function (n) {
                    var time = this.getTime();
                    var changedDate = new Date(time + (n * 60 * 1000));
                    this.setTime(changedDate.getTime());
                    return this;
                };

                if (timeframe == 0) {

                    this.display = this.minutes;
                    var dates = [];
                    for (var date = -29; date < 1; date++) {
                        dates.push(this.minuteFormat(new Date().addMinutes(date)));
                    }
                    this.alpha = dates;

                    for (var i = 0; i < 5; i++) {
                        var changeInValue = (this.minutes[i][this.minutes[i].length - 1])  - this.minutes[i][0];
                        var percentageChange = (changeInValue / this.minutes[i][0]) * 100;
                        this.percentageChange[i] = percentageChange;
                    }

                }
                else if (timeframe == 1) {

                    this.display = this.hours;
                    this.alpha = this.hourTimestamps;

                    for (i = 0; i < 5; i++) {
                        changeInValue = (this.minutes[i][this.minutes[i].length - 1]) - this.hours[i][0];
                        percentageChange = (changeInValue / this.hours[i][0]) * 100;
                        this.percentageChange[i] = percentageChange;
                    }

                }
                else if (timeframe == 2) {

                    this.display = this.days;
                    this.alpha = this.dayTimestamps;

                    for (i = 0; i < 5; i++) {
                        changeInValue = (this.minutes[i][this.minutes[i].length - 1]) - this.days[i][0];
                        percentageChange = (changeInValue / this.days[i][0]) * 100;
                        this.percentageChange[i] = percentageChange;
                    }

                }

                this.makeChart();

            },
            minuteFormat(date) {
                var hour;

                if (date.getHours() == 0 || date.getHours() == 12) {
                    hour = "12";
                } else if (date.getHours() < 13) {
                    hour = date.getHours().toString();
                } else {
                    hour = (date.getHours() - 12).toString();
                }

                if (date.getMinutes < 10) {
                    return hour + ":0" + date.getMinutes().toString();
                } else {
                    return hour + ":" + date.getMinutes().toString();
                }
            },
            hourFormat(date) {
                if (date.getHours() == 0) {
                    return "12AM";
                } else if (date.getHours() == 12) {
                    return "12PM";
                } else if (date.getHours() < 13) {
                    return date.getHours().toString() + "AM";
                } else {
                    return (date.getHours() - 12).toString() + "PM";
                }
            },
            dayFormat(date) {
                if (date.getDate() < 10) {
                    return date.getMonth() + 1 + "/0" + date.getDate().toString();
                } else {
                    return date.getMonth() + 1 + "/" + date.getDate().toString();
                }
            },
            parseData(minuteData, hourData, dayData) {
                this.minutes.push([],[],[],[],[]);
                for (var i = 0; i < minuteData.length; i++) {
                    this.minutes[0][i] = minuteData[i].BTC.USD;
                    this.minutes[1][i] = minuteData[i].LTC.USD;
                    this.minutes[2][i] = minuteData[i].ETH.USD;
                    this.minutes[3][i] = minuteData[i].XRP.USD;
                    this.minutes[4][i] = minuteData[i].LINK.USD;
                }

                var hourTimestamps = [];
                for (i = 0; i < 5; i++) {
                    for (var j = 0; j < 29; j++) {
                        this.hours[i][j] = hourData[i][j].close;
                        if (i == 0) {
                            hourTimestamps.push(this.hourFormat(new Date(hourData[0][j].time * 1000)));
                        }
                    }
                    this.hours[i][29] = this.minutes[i][minuteData.length - 1];
                    this.hours.push([]);
                }
                hourTimestamps.push("hi");
                this.hourTimestamps = hourTimestamps;

                var dayTimestamps = [];
                for (i = 0; i < 5; i++) {
                    for (j = 0; j < 29; j++) {
                        this.days[i][j] = dayData[i][j].close;
                        if (i == 0) {
                            dayTimestamps.push(this.dayFormat(new Date(dayData[0][j].time * 1000)));
                        }
                    }
                    this.days[i][29] = this.minutes[i][minuteData.length - 1];
                    this.days.push([]);
                }
                dayTimestamps.push("hi");
                this.dayTimestamps = dayTimestamps;

                this.changeTime(this.timeframe);
            }
        },
        watch: {
            timeframe: function () {
                this.changeTime(this.timeframe);
            },
            selectedCurrencyGet: function() {
                this.makeChart();
            }
        },
        extends: Line,
        mounted() {
            this.updateData();
            setInterval(() => { this.updateData(); }, 60000);
        },
    }
</script>

<style>
</style>
