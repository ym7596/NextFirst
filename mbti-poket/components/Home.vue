<template>
	 <main v-if="page === 0">

	<img src="../static/titleimg.png" alt="포켓몬 그림">
	<h1>나에게 맞는 포켓몬 MBTI</h1>
	<h2>나와 가장 닮은 포켓몬은 누구일까요?</h2>
	<Button text="테스트 시작!" :clickEvent="startTest" />

  </main>
  <main v-else-if="page < 5">

    <Question />
  </main>

  <main v-else-if="page === 6">

    <Result />
  </main>
</template>
<script>
import Button from "../components/Button.vue";
import Question from "../components/Question.vue";
import Result from "../pages/result/_mbti.vue";


export default {

  computed: {

    page() {
        return this.$store.state.page;
    },

  },

	methods:{

		startTest() {
		  this.$store.commit("SET_PAGE",1);
		}
	},
    components: { Button, Question, Result}
}
</script>
<style>

</style>