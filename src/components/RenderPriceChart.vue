<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
    mounted () {
    this.renderChart({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'],
        datasets: [{
            lineTension: 0,
            fill: false,
            borderColor: "#55b6f9",
            pointRadius: 2,
            label: 'BTC',
            data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
        }]
        }, {
            responsive: true,
            maintainAspectRatio: false
        }, {
        legend: { //hides the legend
            display: false,
         },
        }

    )}

}

</script>

<style>
</style>