<template>
<div class="container">
	<h1><router-link v-bind:to="'/clanek/' + id">{{title}}</router-link></h1>

	<p>Autor: {{author}}</p>

	<P>15. 12. 2019</p>

	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error non quidem ab incidunt impedit rerum molestiae amet iste odio soluta, odit, nostrum dolorem sint? Eligendi aut assumenda accusantium tempore fuga!</p>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloribus ut atque magnam odio quo modi distinctio sit nemo omnis adipisci quis recusandae, libero, expedita eum illum non totam alias!</p>
	<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla illo, perspiciatis, id quod dignissimos voluptates atque earum consectetur pariatur, similique iure quis obcaecati molestiae veniam perferendis laborum eos aperiam quibusdam!</p>
</div>
</template>

<script>
export default {
	props: [
		'article',
		'id',
		'title',
		'author',
		'date',
		'text',
		'place',
		'other',
		'price',
		'card',
		'review'
	]
}
</script>

<style scoped>

.container {
	padding: 30px;
}

@media(min-width:1000px) {
	.container {
		width: 960px;
		margin: 0 auto;
	}
}

</style>