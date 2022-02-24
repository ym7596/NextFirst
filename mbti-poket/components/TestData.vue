<template>
    <div>
        <ul v-for="(item,index) in monlist" :key = "index">
            <li>{{ item.Name }} </li>
            <li>{{ item.Name_ko }} </li>
            <li>{{ item.Num }} </li>
        </ul>
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