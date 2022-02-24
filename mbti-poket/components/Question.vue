<template>
	<div>
		<h1>{{ pagenum }}. {{ qeustion }}</h1>
	  <Button v-for="(item, index) in answers" styleType="blue" :key="index" :text="item.text"
	  :clickEvent="() => {
		  clickButton(item);

		  }"
	  />
	  <Progress />
	</div>
</template>
<script>
import Button from "./Button.vue";
import Progress from "./Progress.vue";
export default {
	computed: {
		pagenum() {
			return this.$store.state.page;
		},
		qeustion() {
			return this.$store.state.quest[this.$store.state.page -1].q;
		},
		answers() {
			return this.$store.state.quest[this.$store.state.page -1].a;
		}
	},
	methods: {
		clickButton (item) {
			this.$store.dispatch('clickButton',item.value)
			if(this.pagenum === this.$store.state.quest.length+1) {
				const result = this.$store.state.result;

				this.$router.push(
				{
					name: 'result-mbti',
					params: {
			  		mbti: `${result.e ? "e" : "i"}${result.s ? "s" : "n"}${result.f ? "f" : "t"}${result.p ? "p" : "i"}`
		  			}
		  		});
				 // this.$router.go();

			}
		}
	},
    components: { Button, Progress }
}
</script>
<style>

</style>