<template>
	<main>
	  <img :src="result[mbti].img" :alt="result[mbti].title">
	  <h1>{{result[mbti].title}}</h1>
	  <p v-html = "result[mbti].description"></p>
	  <Button text="다시 테스트하기" :clickEvent="ReSetPage" />
	</main>
</template>
<script>
export default {
	data() {
		return {
			mbti: null,
			result: {
				enfp: {
					img: "",
					title: "타이틀",
					description: `안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
					<br/><br/>안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요`
				}
			}
		}
	},
	created() {
		// this.mbti = this.$route.params.mbti;

		this.mbti = 'enfp';
		//예외 처리
		if(this.result[this.$route.params.mbti] === undefined) {
			this.$router.push({ name: "index "})
		}
	},
	methods: {
		ReSetPage() {
			this.$store.dispatch('clickResetButton');
			this.$router.push({name: "index" });
		}
	},
}
</script>
