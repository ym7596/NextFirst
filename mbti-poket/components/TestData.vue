<template>
    <div>
      
            <v-card
    class="mx-auto"
    max-width="344"
    v-for="(item,index) in monlist" :key = "index"
  >
    <v-img
      src= {{ item.imgsrc }}
      height="200px"
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    
  </v-card>
        
    </div>
</template>
<script>
import monlist from "../static/testdata.json"
export default {
    
    data() {
        return{
        monlist:monlist
    }
    },
   
}
</script>
<style>
    
</style>