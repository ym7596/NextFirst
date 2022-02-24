<template>
  <nav>
	  <v-app-bar>
		  <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
		  <v-app-bar-title class="text-uppercase grey--text">
			  <span class="font-weight-light">실전 포켓몬 검사</span>

		  </v-app-bar-title>
		  <v-spacer></v-spacer>
		  <v-navigation-drawer app v-model="drawer" class="indigo">
		   <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title><h3>검사하기</h3></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><h3>실전도감</h3></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><h3>개발정보</h3></v-list-item-title>
          </v-list-item>


        </v-list-item-group>
      </v-list>
		  </v-navigation-drawer>
	  </v-app-bar>
  </nav>
</template>
<script>
export default {
	data: () => ({
    drawer: false,
	group:null,
    links: [
      { icon: 'home', text: 'Home', route: '/'},
      { icon: 'contacts', text: 'About', route: '/about'},
    ]
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