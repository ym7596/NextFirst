<template>
  <nav>
	  <v-app-bar>

		  <v-app-bar-title class="text-uppercase grey--text">
			  <span class="font-weight-light"></span>

		  </v-app-bar-title>
		  <v-row
		  align="center"
		  justify="space-around">
			  <v-col cols="4" align = "center">
				  <v-btn>HOME</v-btn>
	  		  </v-col>
				<v-col cols="4" align = "center">
				  <v-btn>도감</v-btn>
	  		  </v-col>
			<v-col cols="4" align = "center">
				  <v-btn>개발정보</v-btn>
	  		  </v-col>


		  </v-row>
		  <v-spacer></v-spacer>

	  </v-app-bar>
  </nav>
</template>
<script>
export default {
	data: () => ({
    drawer: false,
	group:null,

  }),
  watch: {
	  group() {
		  this.drawer = false
	  }
  }
}
</script>
<style>

</style>