<<<<<<< HEAD
<template>
  <div class ="container">

      <div class="control">
        <div class="select">
          <select>
            <option>
              <button class="button">1 week</button>
            </option>
            <hr class="dropdown-divider">
            <option>
              <button class="button">1 day</button>
            </option>
            <hr class="dropdown-divider">
            <option>
              <button class="button">12 hours</button>
            </option>
            <hr class="dropdown-divider">
            <option>
              <button class="button">1 hour</button>
            </option>
            <hr class="dropdown-divider">
            <option>
              <button class="button">10 minutes</button>
            </option>
          </select>
        </div>
      </div>


      <figure class ="image is-3by1">
          <img src="../assets/placeHolderGraph.png">
      </figure>

      <!-- <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="title">12:00</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title">13:00</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title">14:00</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title">15:00</p>
          </div>
        </div>
      </nav> -->
      <div id="table">
        <ul id="list">
          <li>12:00</li>
          <li>13:00</li>
          <li>14:00</li>
          <li>15:00</li>
        </ul>
      </div>

    </div>

</template>

<script>
export default{
  name:'PriceChart'
}
</script>

<style scoped>
#table{
  display:table;
  margin:0 auto;
}
ul#list li{
  display:inline;
  margin:3rem;
}
</style>
=======
<template>
<div></div>
</template>

<script>
export default {
  name: 'PriceChart'
}
</script>

<style scoped>

</style>
>>>>>>> 9addbcea2ebf98f64ab23932f6d629b5d82ea48c
