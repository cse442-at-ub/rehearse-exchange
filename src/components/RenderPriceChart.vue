<script>
    import axios from 'axios'
    import { Line } from 'vue-chartjs'
    export default {
        data() {
            return {
                minutes: [[]],
                hours: [[]],
                days: [[]],
                display: [[]],
                alpha: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
            }
        },
        props: ['timeframe'],
        methods: {
            makeChart() {
                var displayCurrency;
                if (this.$parent.$parent.selectedCurrencyGet == "BTC") {
                    displayCurrency = this.display[0];
                } else if (this.$parent.$parent.selectedCurrencyGet == "LTC") {
                    displayCurrency = this.display[1];
                } else if (this.$parent.$parent.selectedCurrencyGet == "ETH") {
                    displayCurrency = this.display[2];
                } else if (this.$parent.$parent.selectedCurrencyGet == "XRP") {
                    displayCurrency = this.display[3];
                } else if (this.$parent.$parent.selectedCurrencyGet == "LINK") {
                    displayCurrency = this.display[4];
                }
                this.renderChart({
                        labels: this.alpha,
                        datasets: [{
                            lineTension: 0,
                            fill: false,
                            borderColor: "#55b6f9",
                            pointRadius: 2,
                            label: this.$parent.$parent.selectedCurrencyGet,
                            data: displayCurrency
                        }]
                    }, {
                        responsive: true,
                        maintainAspectRatio: false
                    }, {
                        legend: { //hides the legend
                            display: false,
                        }
                    }
                )
            },
            changeTime(timeframe) {
                //1 Minutes
                if (timeframe == 1) {
                    // var date = new Date();
                    var time = 	new Date(Math.floor(new Date().getTime()/10000.0));
                    this.alpha = [time, time, time, time, '5', '6', '7', '8', '9', '10', '11', '12'];
                    this.display = this.minutes;
                    this.makeChart();
                }
                //5 Minutes
                else if (timeframe == 2) {
                    this.alpha = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60'];
                    this.makeChart();
                }
                //15 Minutes
                else if (timeframe == 3) {
                    this.alpha = ['15', '30', '45', '60', '75', '90', '105', '120', '135', '150', '165', '180'];
                    this.makeChart();
                }
                //1 Hours
                else if (timeframe == 4) {
                    this.alpha = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
                    this.display = this.hours;
                    this.makeChart();
                }
                //6 Hours
                else if (timeframe == 5) {
                    this.alpha = ['6', '12', '18', '24', '30', '36', '42', '48', '54', '60', '66', '72'];
                    this.makeChart();
                }
                //1 Days
                else if (timeframe == 6) {
                    this.alpha = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
                    this.display = this.days;
                    this.makeChart();
                }
                //Should not be possible
                else {
                    window.alert("Invalid Timeframe");
                }
            },
            parseData(minuteData, hourData, dayData) {
                this.minutes.push([],[],[],[],[]);
                for (var a = 0; a < minuteData.length; a++) {
                    this.minutes[0][a] = minuteData[a].BTC.USD;
                    this.minutes[1][a] = minuteData[a].LTC.USD;
                    this.minutes[2][a] = minuteData[a].ETH.USD;
                    this.minutes[3][a] = minuteData[a].XRP.USD;
                    this.minutes[4][a] = minuteData[a].LINK.USD;
                }
                for (var i = 0; i < 5; i++) {
                    for (var j = 0; j < 30; j++) {
                        this.hours[i][j] = hourData[i][j].close;
                    }
                    this.hours.push([]);
                }
                for (var x = 0; x < 5; x++) {
                    for (var y = 0; y < 30; y++) {
                        this.days[x][y] = dayData[x][y].close;
                    }
                    this.days.push([]);
                }
                this.makeChart();
            }
        },
        watch: {
            timeframe: function () {
                this.changeTime(this.timeframe);
            }
        },
        extends: Line,
        mounted() {
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
                dayData = dayResponse.data
            }));
            setTimeout(() => { this.parseData(minuteData, hourData, dayData); }, 2000);
        },
    }
</script>

<style>
</style>