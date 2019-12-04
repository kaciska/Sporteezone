<template>
<div>
  <div class="container blog">

		<div class="blog-container">
			<h1>Blog</h1>
			<p>V našem blogu se dočtete novinky ze světa sportu, recenze na sportoviště a také informace o jednotlivých
				sportech.</p>
		</div>
	</div>

  <mainarticle />

  <hr>

  <otherarticle />

  </div>

</template>


<script>

import MainArticle from "./../components/MainArticle.vue"
import OtherArticle from "./../components/OtherArticle.vue"

export default {
  components: {
    "mainarticle": MainArticle,
    "otherarticle": OtherArticle

  }

}
</script>



<style scoped>

.blog-container {
	margin: 30px;
}

@media (min-width: 860px) {
	.container.blog {
		padding: 10px;
		margin: 0px auto 0 auto;
	}
}

</style>
