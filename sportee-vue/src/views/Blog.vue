<template>

  <div class="container blog">

    <div v-for="article in this.articles">
      <articledetail v-bind:title="article.title" v-bind:author="article.author" v-bind:id="article.id" />
    </div>


		<div class="blog-container">
			<h1>Blog</h1>
      <div class="border"></div>
			<p>V našem blogu se dočtete novinky ze světa sportu, recenze na sportoviště a také informace o jednotlivých
				sportech.</p>
		</div>


  <mainarticle />

  <hr>

  <otherarticle />

  <otherarticle />


  </div>

</template>


<script>

import MainArticle from "./../components/MainArticle.vue"
import OtherArticle from "./../components/OtherArticle.vue"
import ArticleDetail from './../components/ArticleDetail.vue'

export default {
  components: {
    "mainarticle": MainArticle,
    "otherarticle": OtherArticle,
    "articledetail": ArticleDetail
  },
  data() {
		return {
			articles: [{
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
      ]
		}
	},
	mounted() {
		this.fetchArticles()
	},
	methods: {
            fetchArticles() {
              let id = this.$route.params.id;
                      let url = 'http://localhost:8080/articles.json';
                      axios.get(url)
                          .then(response => {
                      this.articles = response.data
                  })
			},
	}

}
</script>



<style scoped>

.blog-container {
	margin: 30px;
  text-align: center;
}

.blog-container p {
	margin-bottom: 50px;
}


.border{
  width: 160px;
  height: 5px;
  background: rgb(100, 195, 158);
  margin: 26px auto;
}

@media (min-width: 860px) {
	.blog {
		padding: 10px;
		margin: 0px auto 0 auto;
  }

  .container {
    width: 960px;
    background-color: white;
    box-shadow: 0 0 8px 1px rgba(140, 138, 140, 1);
    position: relative;
    z-index: 1;
  }
}


</style>
