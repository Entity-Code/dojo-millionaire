<template>
  <div class="container">
    <img width="270px" src="../assets/logo.png" alt="milionario">
    <div class="sub-container">
        <domanda :data="data"></domanda>
    </div>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .container{
    background: rgb(43, 43, 151);
    width: 100vw;
    height: 100vh;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #fff;
    padding: 50px 0;
    .sub-container{
      background: rgb(12, 12, 85);
      margin-top: 35px;
      min-height: 70%;
      padding: 10px;
    }
  }
</style>

<script>

export default {
  name: 'app',
  
  data () {
    return {
      
    }
  },
  //dati messi in App.vue
  props: {
    data: Array
  },

  mounted: function (){

    
    //console.log(this.data);
    

  },
  methods: {
    
  }
}
</script>