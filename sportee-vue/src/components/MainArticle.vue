<template>
<div class="main-article">
	<img src="../assets/running_women.jpg" alt="women run up">
	<div class="article-holder">
		<div class="text">
			<h2>Nejaktuálnější nebo nejdůležitějí článek</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse debitis, quas perspiciatis pariatur ut
				tempora aperiam possimus libero, cumque quae quisquam, beatae quia. Cum quam iure, blanditiis nihil
				at
				accusamus.</p>
		</div>
		<div id="readMore">
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse debitis, quas perspiciatis pariatur ut
				tempora aperiam possimus libero, cumque quae quisquam, beatae quia. Cum quam iure, blanditiis nihil
				at accusamus.</p>

			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse debitis, quas perspiciatis pariatur ut
					tempora aperiam possimus libero, cumque quae quisquam, beatae quia. Cum quam iure, blanditiis nihil
					at accusamus.</p>
		</div>
		<button onclick="readArticle()">Číst více</button>
	</div>
</div>

</template>

<script>
export default {

}
</script>

<style>

.main-article img {
	width: 300px;
}

.main-article {
	margin: 30px;
}

#readMore {
	display: none;
	margin-left: 20px;
}

.article-holder button {
	margin-left: 20px
}

@media (min-width: 650px) {

	.main-article {
		display: flex;
	}

	.text {
		margin-left: 20px;
	}
}

</style>