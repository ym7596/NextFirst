<template>

    <v-container>
		<v-row>
      <v-col cols="6" v-for="(data,index) in monlist" :key="index">
	    <PCard :data="data" />
	  </v-col>

	  </v-row>
	</v-container>

</template>
<script>
import monlist from "../static/testdata.json"
import PCard from "./PCard.vue"
export default {
    data() {
        return {
            monlist: monlist
        };
    },
    components: { PCard }
}
</script>
<style>

</style>