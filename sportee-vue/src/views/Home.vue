<template>
<div>
	<div id="cover-photo">
		<div class="text-cover-photo">
			<h1>Sportuj s námi</h1>
			<p>Sportuješ často a nebaví tě pořád sledovat rozvrhy jednotlivých sportovišť? Vyzkoušej naši aplikaci a
				hned zjistíš, kde se co cvičí, a jestli je ještě volné místo.</p>
		</div>
	</div>

<activityform />

<signpost />


</div>

</template>

<script>

import ActivityForm from './../components/ActivityForm.vue'
import SignPost from './../components/SignPost.vue'

export default {
  components: {
    "activityform": ActivityForm,
    "signpost": SignPost
  }
}

</script>




<style scoped>
#cover-photo {
  height: 500px;
  background-image: url(../assets/gym.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.text-cover-photo {
  padding: 30px;
  padding-top: 150px;
  color: white;
}

@media (min-width: 650px) {

  .text-cover-photo {
    padding-left: 20%;
    padding-right: 20%;
  }
}
</style>
