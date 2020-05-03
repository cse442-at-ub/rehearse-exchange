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
      for (var i = 0; i < 8; i++) {
        var cell = row.insertCell(i);

        if(i==7){

          var btn = document.createElement('button');
          btn.className = "button is-small";
          btn.innerText = 'Cancel';
          btn.outerHTML="";
          cell.appendChild(btn);
          btn.addEventListener('click',()=>{
            this.$emit('cancel',newRowData[7]);
            btn.disabled=true;
          });
          break;
        }
        if (newRowData[i] == "Buy") {
          cell.innerHTML = "<font color='#6CBF65'>" + newRowData[i]; + "</font>";
        } else if (newRowData[i] == "Sell") {
          cell.innerHTML = "<font color='#D6605A'>" + newRowData[i]; + "</font>";
        } else {
          cell.innerHTML = newRowData[i];
        }
      }

      if (!this.hasOrders) {
        var placeholder = document.getElementById("order-placeholder");
        placeholder.parentNode.removeChild(placeholder);
        var headerTitles = [ "Side", "Market", "Size", "Price", "Fee", "Time", "Status", "Cancel"];
        var header = table.createTHead();
        var headerRow = header.insertRow(-1);
        for (var j = 0; j < 8; j++) {
          var headerCell = headerRow.insertCell(j);
          headerCell.innerHTML = "<b>" + headerTitles[j] + "</b>";
        }
        this.hasOrders = true;
        this.$emit('passTable', table);
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

.button {
  background:#4e5d6c;
  border-color: #35475a;
  color:lightgrey;
  font-family: 'Roboto', sans-serif;
  font-family: 'Lato', sans-serif;
}

.table {
  width: 99%;
}

#order-placeholder {
  text-align: center;
}

</style>
