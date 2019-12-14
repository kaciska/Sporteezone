<template>

<articledetail v-bind:title="this.article.title" v-bind:author="this.article.author" />

</template>

<script>

import ArticleDetail from './../components/ArticleDetail.vue'

export default {
	data() {
		return {
			article: {
				article: null,
				id: null,
				title: null,
				author: null,
				date: null,
				text: null,
				place: null,
				other: null,
				price: null,
				card: null,
				review: null,
			}
		}
	},
	components: {
		"articledetail": ArticleDetail
	},
	mounted() {
		this.fetchArticle()
	},
	methods: {
            fetchArticle() {
				let id = this.$route.params.id;
                let url = 'http://localhost:8080/articles.json';
                axios.get(url)
                    .then(response => {
						response.data.forEach(article => {
							if(article.id == id) {
								this.article = article;
							}
						});
                    })
			},
	},
	watch: {
            '$route.params.id': 'fetchArticle'
        }

}
</script>

<style>

</style>