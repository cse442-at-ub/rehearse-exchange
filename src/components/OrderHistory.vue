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
      hasOrders: false,
      orderData: []
    }
  },
  methods: {
    updateRow(row) {
      this.orderData[row + 1][6] = "Filled";
      localStorage.setItem('orderData', JSON.stringify(this.orderData));
    },
    newOrder(newRowData) {
      this.orderData.push(newRowData);
      var rowIndex = this.orderData.length - 1;
      localStorage.setItem('orderData', JSON.stringify(this.orderData));
      this.addRow(newRowData, rowIndex);
    },
    addRow(newRowData, rowIndex) {
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
          cell.innerHTML = "<font color='#6CBF65'>" + newRowData[i]; + "</font>";
        } else if (newRowData[i] == "Sell") {
          cell.innerHTML = "<font color='#D6605A'>" + newRowData[i]; + "</font>";
        } else {
          cell.innerHTML = newRowData[i];
        }

        if(i == 6 && newRowData[6] != "Filled" && newRowData[6] != "Canceled"){
          var btn = document.createElement('a');
          btn.className = "delete is-medium";
          btn.style.float = "right";
          cell.appendChild(btn);
          btn.addEventListener('click',()=>{
            this.$emit('cancel',newRowData[7]);
            row.deleteCell(6);
            var newCell = row.insertCell(6);
            newCell.innerHTML = "Canceled";
            this.orderData[rowIndex][6] = "Canceled";
            localStorage.setItem('orderData', JSON.stringify(this.orderData));
          });
        }
      }

      if (!this.hasOrders) {
        var placeholder = document.getElementById("order-placeholder");
        placeholder.parentNode.removeChild(placeholder);
        var headerTitles = [ "Side", "Market", "Size", "Price (USD)", "Fee (USD)", "Time", "Status"];
        var header = table.createTHead();
        var headerRow = header.insertRow(-1);
        for (var j = 0; j < 7; j++) {
          var headerCell = headerRow.insertCell(j);
          headerCell.innerHTML = "<b>" + headerTitles[j] + "</b>";
        }
        this.hasOrders = true;
        this.$emit('passTable', table);
      }

    }
  },
  mounted() {
    if (localStorage.getItem('orderData')) {
      this.orderData = JSON.parse(localStorage.getItem('orderData'));
      for (var i = 0; i < this.orderData.length; i++) {
        this.addRow(this.orderData[i], i);
      }
    }
  }
}
</script>

<style scoped>

td {
  text-align: center;
}

.table-container {
  overflow: auto;
  max-height: 100%;
}

.button {
  background:#4e5d6c;
  border-color: #35475a;
  color:lightgrey;
  font-family: 'Roboto', sans-serif;
  font-family: 'Lato', sans-serif;
}

.table {
  width: 100%;
}

#order-placeholder {
  text-align: center;
}

</style>
