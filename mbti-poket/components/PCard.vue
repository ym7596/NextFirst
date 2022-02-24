<template>
	<div>
	<v-card
    class="mx-auto"
    max-width="344">
    <v-img
      :src= "data.imgsrc"
	  alt = "Image"
      height= "auto"
    ></v-img>

    <v-card-title>
      {{ data.Name_ko }}  ({{ data.Name }})
    </v-card-title>

    <v-card-subtitle>
	  <span>{{ data.Type1 }} </span> <span v-if="data.Type2 != 'None'">/ {{ data.Type2 }} </span>
	<!-- <p v-html="data.description">

		</p> -->
	  <!-- {{ data.description }} -->
    </v-card-subtitle>


  </v-card>

	</div>
</template>
<script>
import { ref } from 'vue'
export default {
	props: {
		data: Object,
	},
	setup(props) {
		const data= props.data

		return {data}
	}
}
</script>
<style>

</style>