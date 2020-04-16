<script>
    import { Line } from 'vue-chartjs'


    export default {
        data() {
            return {
                alpha: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
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
                //1 Minutes
                if (timeframe == 1) {
                    // var date = new Date();
                    var time = 	new Date(Math.floor(new Date().getTime()/10000.0));

                    this.alpha = [time, time, time, time, '5', '6', '7', '8', '9', '10', '11', '12'];
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