<template>

	<div class="container">

		 <h1>Najdi si čas a aktivitu vhodnou právě pro tebe</h1>
		 <p>Zde si můžete vybrat z dostupných možností</p>
      <div class="border"></div>


		<div class="session-body">
			<a href=""><h3>Befit.cz</h3></a>
			<table>
				<tr>
					<th class="date">Datum</th>
					<th class="time">Čas</th>
					<th class="activity">Aktivita</th>
				</tr>
				<tr>
					<td class="date">15. 12. 2019</td>
					<td class="time">18:00</td>
					<td class="activity">Bosu</td>
				</tr>
				<tr>
					<td class="date">15. 12. 2019</td>
					<td class="time">18:30</td>
					<td class="activity">Yóga</td>
				</tr>
				<tr>
					<td class="date">15. 12. 2019</td>
					<td class="time">18:40</td>
					<td class="activity">Jumping</td>
				</tr>
			</table>
		</div>

		<div class="session-body">
		<a href=""><h3>Afit.cz</h3></a>
		<table>
			<tr>
				<th class="date">Datum</th>
				<th class="time">Čas</th>
				<th class="activity">Aktivita</th>
			</tr>
			<tr>
				<td class="date">15. 12. 2019</td>
				<td class="time">18:00</td>
				<td class="activity">HEAT</td>
			</tr>
			<tr>
				<td class="date">15. 12. 2019</td>
				<td class="time">18:00</td>
				<td class="activity">Pilates</td>
			</tr>
			<tr>
				<td class="date">15. 12. 2019</td>
				<td class="time">18:30</td>
				<td class="activity">Jumping</td>
			</tr>
		</table>
		</div>
	</div>

</template>

<script>
export default {

}
</script>

<style scoped>

.container {
	width: 50%;
	margin: 0 auto;
	text-align: center;
}

.session-body{
    padding: 10px 30px;
    padding-bottom: 30px;
    border-radius: 8px 2px;
    position: top;
    background-color: white;
    margin:40px;
    box-shadow: 0 3px 25px rgba(0,0,0,.1);
}

h1 {
    margin-top: 0;
	padding-top: 40px;

  }
  .border{
  width: 160px;
  height: 5px;
  background: rgb(100, 195, 158);
  margin: 26px auto;
  }

table {
  border-collapse: collapse;
  width: 100%;
}

a {
	text-decoration: none;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 15px;
}

tr:nth-child(1) {
  background-color: rgb(215, 190, 95);
}

tr:nth-child(even) {

  background-color: #F8F8F8;
}

th.date {
	background-color: rgb(215, 190, 95);
}

th.time {
	background-color: rgb(100, 195, 158);
}

th.activity {
background-color: rgb(244, 124, 121);
}

</style>