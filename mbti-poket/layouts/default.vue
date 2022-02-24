<template>
<main>
	 <nav>
	  <v-app-bar>

		  <v-app-bar-title class="text-uppercase grey--text">
			  <span class="font-weight-light"></span>

		  </v-app-bar-title>
		  <v-row
		  align="center"
		  justify="space-around">

				  <NuxtLink to="/">HOME</NuxtLink>


					<NuxtLink to="/DexPage">덱스</NuxtLink>


				 <NuxtLink to="/DexPage">개발정보</NuxtLink>



		  </v-row>
		  <v-spacer></v-spacer>

	  </v-app-bar>
  </nav>
	<Nuxt />
</main>
</template>
