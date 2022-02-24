<template>

    <div class = "row row-cols-1 row-cols-sm-3 g-2 m-0">
      <div class="col" v-for="(data,index) in monlist" :key="index">
	    <PCard :data="data" />
	  </div>

    </div>
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