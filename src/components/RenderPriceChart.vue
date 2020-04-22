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
        props: ['timeframe', 'selectedCurrencyGet'],
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
                        legend: {
                            display: false,
                        },
                    }
                )
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

                var date0 = new Date();
                var date1 = new Date();
                var date2 = new Date();
                var date3 = new Date();
                var date4 = new Date();
                var date5 = new Date();
                var date6 = new Date();
                var date7 = new Date();
                var date8 = new Date();
                var date9 = new Date();
                var date10 = new Date();
                var date11= new Date();
                var date12 = new Date();
                var date13 = new Date();
                var date14 = new Date();
                var date15 = new Date();
                var date16 = new Date();
                var date17 = new Date();
                var date18 = new Date();
                var date19 = new Date();
                var date20 = new Date();
                var date21 = new Date();
                var date22 = new Date();
                var date23 = new Date();
                var date24 = new Date();
                var date25 = new Date();
                var date26 = new Date();
                var date27 = new Date();
                var date28 = new Date();
                var date29 = new Date();

                if (timeframe == 0) {
                    this.display = this.minutes;
                    date29.addMinutes((-29)); date28.addMinutes((-28)); date27.addMinutes((-27));
                        date26.addMinutes((-26)); date25.addMinutes((-25)); date24.addMinutes((-24));
                        date23.addMinutes((-23)); date22.addMinutes((-22)); date21.addMinutes((-21));
                        date20.addMinutes((-20)); date19.addMinutes((-19)); date18.addMinutes((-18));
                        date17.addMinutes((-17)); date16.addMinutes((-16)); date15.addMinutes((-15));
                        date14.addMinutes((-14)); date13.addMinutes((-13)); date12.addMinutes((-12));
                        date11.addMinutes((-11)); date10.addMinutes((-10)); date9.addMinutes((-9));
                        date8.addMinutes((-8)); date7.addMinutes((-7)); date6.addMinutes((-6));
                        date5.addMinutes((-5)); date4.addMinutes((-4)); date3.addMinutes((-3));
                        date2.addMinutes((-2)); date1.addMinutes((-1)); date0.addMinutes((-0));



                    this.alpha = [this.hourFormat(date29),this.hourFormat(date28),this.hourFormat(date27),this.hourFormat(date26),this.hourFormat(date25),
                      this.hourFormat(date24),this.hourFormat(date23),this.hourFormat(date22),this.hourFormat(date21),
                      this.hourFormat(date20),this.hourFormat(date19),this.hourFormat(date18),this.hourFormat(date17),
                      this.hourFormat(date16),this.hourFormat(date15),this.hourFormat(date14),this.hourFormat(date13),
                      this.hourFormat(date12),this.hourFormat(date11), this.hourFormat(date10), this.hourFormat(date9),
                      this.hourFormat(date8), this.hourFormat(date7), this.hourFormat(date6),
                      this.hourFormat(date5), this.hourFormat(date4), this.hourFormat(date3),
                      this.hourFormat(date2), this.hourFormat(date1),this.hourFormat(date0)];
                    this.makeChart();
                }
                else if (timeframe == 1) {
                  this.display = this.hours;
                  date29.addHours((-29)); date28.addHours((-28)); date27.addHours((-27));
                      date26.addHours((-26)); date25.addHours((-25)); date24.addHours((-24));
                      date23.addHours((-23)); date22.addHours((-22)); date21.addHours((-21));
                      date20.addHours((-20)); date19.addHours((-19)); date18.addHours((-18));
                      date17.addHours((-17)); date16.addHours((-16)); date15.addHours((-15));
                      date14.addHours((-14)); date13.addHours((-13)); date12.addHours((-12));
                      date11.addHours((-11)); date10.addHours((-10)); date9.addHours((-9));
                      date8.addHours((-8)); date7.addHours((-7)); date6.addHours((-6));
                      date5.addHours((-5)); date4.addHours((-4)); date3.addHours((-3));
                      date2.addHours((-2)); date1.addHours((-1)); date0.addHours((-0));
                    this.alpha = [this.hourFormat(date29),this.hourFormat(date28),this.hourFormat(date27),this.hourFormat(date26),this.hourFormat(date25),
                      this.hourFormat(date24),this.hourFormat(date23),this.hourFormat(date22),this.hourFormat(date21),
                      this.hourFormat(date20),this.hourFormat(date19),this.hourFormat(date18),this.hourFormat(date17),
                      this.hourFormat(date16),this.hourFormat(date15),this.hourFormat(date14),this.hourFormat(date13),
                      this.hourFormat(date12),this.hourFormat(date11), this.hourFormat(date10), this.hourFormat(date9),
                      this.hourFormat(date8), this.hourFormat(date7), this.hourFormat(date6),
                      this.hourFormat(date5), this.hourFormat(date4), this.hourFormat(date3),
                      this.hourFormat(date2), this.hourFormat(date1),this.hourFormat(date0)];
                    this.makeChart();
                }
                else if (timeframe == 2) {
                  this.display = this.days;
                  date29.addDays((-29)); date28.addDays((-28)); date27.addDays((-27));
                      date26.addDays((-26)); date25.addDays((-25)); date24.addDays((-24));
                      date23.addDays((-23)); date22.addDays((-22)); date21.addDays((-21));
                      date20.addDays((-20)); date19.addDays((-19)); date18.addDays((-18));
                      date17.addDays((-17)); date16.addDays((-16)); date15.addDays((-15));
                      date14.addDays((-14)); date13.addDays((-13)); date12.addDays((-12));
                      date11.addDays((-11)); date10.addDays((-10)); date9.addDays((-9));
                      date8.addDays((-8)); date7.addDays((-7)); date6.addDays((-6));
                      date5.addDays((-5)); date4.addDays((-4)); date3.addDays((-3));
                      date2.addDays((-2)); date1.addDays((-1)); date0.addDays((-0));
                    this.alpha = [this.dayFormat(date29),this.dayFormat(date28),this.dayFormat(date27),this.dayFormat(date26),this.dayFormat(date25),
                      this.dayFormat(date24),this.dayFormat(date23),this.dayFormat(date22),this.dayFormat(date21),
                      this.dayFormat(date20),this.dayFormat(date19),this.dayFormat(date18),this.dayFormat(date17),
                      this.dayFormat(date16),this.dayFormat(date15),this.dayFormat(date14),this.dayFormat(date13),
                      this.dayFormat(date12),this.dayFormat(date11), this.dayFormat(date10), this.dayFormat(date9),
                      this.dayFormat(date8), this.dayFormat(date7), this.dayFormat(date6),
                      this.dayFormat(date5), this.dayFormat(date4), this.dayFormat(date3),
                      this.dayFormat(date2), this.dayFormat(date1),this.dayFormat(date0)];
                    this.makeChart();
                }
            },
            hourFormat(date){
              if(date.getMinutes().toString().length==1){
                return date.getHours().toString() +":0" +date.getMinutes().toString();
              }
              else{
                return date.getHours().toString() +':' +date.getMinutes().toString();
              }
            },
            dayFormat(date){
              return date.getMonth()+1 + '/' + date.getDate().toString();
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
            },
            selectedCurrencyGet: function() {
                this.makeChart();
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
