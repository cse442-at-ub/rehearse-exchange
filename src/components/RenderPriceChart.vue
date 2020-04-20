<script>
    import { Line } from 'vue-chartjs'


    export default {
        data() {
            return {
                alpha: this.changeTime(1)
            }
        },
        props: ['timeframe'],
        methods: {
            makeChart() {
                this.renderChart({
                        labels: this.alpha,
                        datasets: [{
                            lineTension: 0,
                            fill: false,
                            borderColor: "#55b6f9",
                            pointRadius: 2,
                            label: this.$parent.$parent.selectedCurrencyGet,
                            data: [1, 5, 2, 5, 5, 10, 12, 13, 15, 11, 17, 20]
                        }]
                    }, {
                        responsive: true,
                        maintainAspectRatio: false
                    }, {
                        legend: { //hides the legend
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

                // var date = new Date();

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




                //1 Minutes
                if (timeframe == 1) {
                    // var date = new Date();

                    this.alpha = [date29.addMinutes((-29)), date28.addMinutes((-28)), date27.addMinutes((-27)),
                        date26.addMinutes((-26)), date25.addMinutes((-25)), date24.addMinutes((-24)),
                        date23.addMinutes((-23)), date22.addMinutes((-22)), date21.addMinutes((-21)),
                        date20.addMinutes((-20)), date19.addMinutes((-19)), date18.addMinutes((-18)),
                        date17.addMinutes((-17)), date16.addMinutes((-16)), date15.addMinutes((-15)),
                        date14.addMinutes((-14)), date13.addMinutes((-13)), date12.addMinutes((-12)),
                        date11.addMinutes((-11)), date10.addMinutes((-10)), date9.addMinutes((-9)),
                        date8.addMinutes((-8)), date7.addMinutes((-7)), date6.addMinutes((-6)),
                        date5.addMinutes((-5)), date4.addMinutes((-4)), date3.addMinutes((-3)),
                        date2.addMinutes((-2)), date1.addMinutes((-1)), date0.addMinutes((-0))];
                    this.makeChart();
                }
                // //5 Minutes
                // else if (timeframe == 2) {
                //     this.alpha = [date11.addMinutes((-11*5)), date10.addMinutes((-10*5)), date9.addMinutes((-9*5)),
                //         date8.addMinutes((-8*5)), date7.addMinutes((-7*5)), date6.addMinutes((-6*5)),
                //         date5.addMinutes((-5*5)), date4.addMinutes((-4*5)), date3.addMinutes((-3*5)),
                //         date2.addMinutes((-2*5)), date1.addMinutes((-1*5)), date0.addMinutes((-0))];
                //     this.makeChart();
                // }
                // //15 Minutes
                // else if (timeframe == 3) {
                //     this.alpha = [date11.addMinutes((-11*15)), date10.addMinutes((-10*15)), date9.addMinutes((-9*15)),
                //         date8.addMinutes((-8*15)), date7.addMinutes((-7*15)), date6.addMinutes((-6*15)),
                //         date5.addMinutes((-5*15)), date4.addMinutes((-4*15)), date3.addMinutes((-3*15)),
                //         date2.addMinutes((-2*15)), date1.addMinutes((-1*15)), date0.addMinutes((-0))];
                //     this.makeChart();
                // }
                //1 Hours
                else if (timeframe == 4) {
                    this.alpha = [date29.addHours((-29)), date28.addHours((-28)), date27.addHours((-27)),
                        date26.addHours((-26)), date25.addHours((-25)), date24.addHours((-24)),
                        date23.addHours((-23)), date22.addHours((-22)), date21.addHours((-21)),
                        date20.addHours((-20)), date19.addHours((-19)), date18.addHours((-18)),
                        date17.addHours((-17)), date16.addHours((-16)), date15.addHours((-15)),
                        date14.addHours((-14)), date13.addHours((-13)), date12.addHours((-12)),
                        date11.addHours((-11)), date10.addHours((-10)), date9.addHours((-9)),
                        date8.addHours((-8)), date7.addHours((-7)), date6.addHours((-6)),
                        date5.addHours((-5)), date4.addHours((-4)), date3.addHours((-3)),
                        date2.addHours((-2)), date1.addHours((-1)), date0.addHours((-0))];
                    this.makeChart();
                }
                // //6 Hours
                // else if (timeframe == 5) {
                //     this.alpha = [date11.addHours((-11*6)), date10.addHours((-10*6)), date9.addHours((-9*6)),
                //         date8.addHours((-8*6)), date7.addHours((-7*6)), date6.addHours((-6*6)),
                //         date5.addHours((-5*6)), date4.addHours((-4*6)), date3.addHours((-3*6)),
                //         date2.addHours((-2*6)), date1.addHours((-1*6)), date0.addHours((-0*6))];
                //     this.makeChart();
                // }
                //1 Days
                else if (timeframe == 6) {
                    this.alpha = [date29.addDays((-29)), date28.addDays((-28)), date27.addDays((-27)),
                        date26.addDays((-26)), date25.addDays((-25)), date24.addDays((-24)),
                        date23.addDays((-23)), date22.addDays((-22)), date21.addDays((-21)),
                        date20.addDays((-20)), date19.addDays((-19)), date18.addDays((-18)),
                        date17.addDays((-17)), date16.addDays((-16)), date15.addDays((-15)),
                        date14.addDays((-14)), date13.addDays((-13)), date12.addDays((-12)),
                        date11.addDays((-11)), date10.addDays((-10)), date9.addDays((-9)),
                        date8.addDays((-8)), date7.addDays((-7)), date6.addDays((-6)),
                        date5.addDays((-5)), date4.addDays((-4)), date3.addDays((-3)),
                        date2.addDays((-2)), date1.addDays((-1)), date0.addDays((-0))];
                    this.makeChart();
                }
                //Should not be possible
                else {
                    window.alert("Invalid Timeframe");
                }
            }
        },

        watch: {
            timeframe: function () {
                this.changeTime(this.timeframe);

            }
        },
        extends: Line,
        mounted() {
            this.makeChart();

        },
    }

</script>

<style>
</style>