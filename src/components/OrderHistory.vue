<template>
  <div class="table-container is-scrollable">
    <p id="order-placeholder">No orders to display</p>
    <table class="table is-bordered is-striped is-narrow is-haveable" id="order-table">
    </table>
  </div>
  
</template>

<script>
export default {
  name: 'OrderHistory',
  data() {
    return {
      hasOrders: false
    }
  },
  methods: {
    addRow(newRowData) {
      var table = document.getElementById("order-table");
      var row;
      if (this.hasOrders) {
        row = table.insertRow(1);
      } else {
        row = table.insertRow(0);
      }
      for (var i = 0; i < 7; i++) {
        var cell = row.insertCell(i);
        if (newRowData[i] == "Buy") {
          cell.innerHTML = "<font color='green'>" + newRowData[i]; + "</font>";
        } else if (newRowData[i] == "Sell") {
          cell.innerHTML = "<font color='red'>" + newRowData[i]; + "</font>";
        } else {
          cell.innerHTML = newRowData[i];
        }
      }
      if (!this.hasOrders) {
        var placeholder = document.getElementById("order-placeholder");
        placeholder.parentNode.removeChild(placeholder);
        var headerTitles = [ "Side", "Market", "Size", "Price", "Fee", "Time", "Status"];
        var header = table.createTHead();
        var headerRow = header.insertRow(-1);
        for (var j = 0; j < 7; j++) {
          var headerCell = headerRow.insertCell(j);
          headerCell.innerHTML = "<b>" + headerTitles[j] + "</b>";
        }
        this.hasOrders = true;
      }
    }
  }
}
</script>

<style scoped>

.table-container {
  width: 99%;
  overflow: auto;
  max-height: 100%;
}

.table {
  width: 99%;
}

#order-placeholder {
  text-align: center;
}

</style>
