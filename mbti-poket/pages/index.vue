<template>

<div><Home /></div>





</template>

<script>

import Home from "../components/Home.vue";
export default {


	components: { Home}
}
/*
메인 페이지 안에 들어갈것은?
1. 인트로 페이지
2. 조건부 랜더링으로 퀴즈 컴포넌트
3. 페이지 이동 /result/_mbti
*/

// export default {

//   computed: {

//     page() {
//         return this.$store.state.page;
//     },

//   },

// 	methods:{

// 		startTest() {
// 		  this.$store.commit("SET_PAGE",1);
// 		}
// 	},
//     components: { Button, Question, Result, DexPage, NavBar }
// }
</script>
