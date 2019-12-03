<template>

  <div id="app">
      <h1>Vyber si aktivitu</h1>
      <div class="date">
          <label>Datum:</label>
          <input type="date" name="date">
      </div>

      <div class="time">
          <label>Zvolte čas:</label>
          <input type="time" name="time">
      </div>
      <div class="activity">
          <label>Aktivita:</label>
          <select>
              <option value="0">Vyber aktivitu:</option>
              <option value="1">Aerobik</option>
              <option value="2">Bosu</option>
              <option value="3">Jóga</option>
              <option value="4">Kruhový trénink</option>
              <option value="5">Pilates</option>
              <option value="6">Walking</option>
          </select>
      </div>

      <div class="card">
          <label>Vyber kartu:</label><br>
          <input type="checkbox" class="largerCheckbox" name="multisport"><label>Multisport</label>
          <input type="checkbox" class="largerCheckbox" name="activepass"><label>Activepass</label>
      </div>
    <button>Vyhledat</button>
  </div>


</template>

<script>
import SearchButton from './../components/SearchButton.vue'

export default {
  components: {
    "searchbutton": SearchButton
  }
}
</script>

<style scoped>
#app {
  width: 100%;
  padding: 50px;
  text-align: center;
  color: black;
}

#app h1 {
  text-align: center;
}

.date,
.time,
.activity,
.card {
  padding: 10px;
}

input,
select {
  padding: 5px;
}

input[type="checkbox"] {
  width: 30px;
}

input,
select
 {
  box-shadow: 0 0 6px 0 rgba(0,0,0,0.2);
  border-radius: 5px;
  border: none;
  margin-left: 10px;
  height: 35px;
}

input[type="checkbox"] {
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  background: white;

}

input[type="checkbox"]:checked {
  background: white;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  position: relative;
}

input[type="checkbox"]:checked::after {
  font: normal normal normal 14px/1 FontAwesome;
  content: "\f00c";
  color: #333;
  font-size: 12px;
  position: absolute;
  top: 5px;
  left: 5px;
}

input.largerCheckbox {
  vertical-align: middle;
  width: 20px;
  height: 20px;
  margin: 5px;
}


</style>