<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
    mounted () {
    this.renderChart({
        labels: ['November', 'December', 'January', 'February'],
        datasets: [
        {
            label: 'BTC Price',
            data: [5, 10000]
        }
        ]},
        {
        responsive: true,
        maintainAspectRatio: false
        }
    )
    }

}

</script>

<style>
</style>