<template>
  <div id="app">
    <contenitore :data="data"></contenitore>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
}
body{
  overflow-x: hidden;
}
</style>


<script>

export default{
  data () {
    return {

      data: [
        //n.1
        {
          id: 1,
          domanda: 'Chi è stato il primo insegnante di Boolean?',
          risposte: [
            {text: 'Fabio', status: true},
            {text: 'Michele', status: false},
            {text: 'Chiara', status: false},
            {text: 'Luca', status: false},
          ]
        },
        //n.2
        {
          id: 2,
          domanda: "Chi ha scoperto l'America?",
          risposte: [
            {text: 'Micheal Jackson', status: false},
            {text: 'Giuseppe Garibaldi', status: false},
            {text: 'Cristoforo Colombo', status: true},
            {text: 'Nessuno tra questi', status: false},
          ]
        },
        //n.3
        {
          id: 3,
          domanda: 'Quanto fa 5+7?',
          risposte: [
            {text: '2', status: false},
            {text: '12', status: true},
            {text: '5', status: false},
            {text: '13', status: false},
          ]
        },
        //n.4
        {
          id: 4,
          domanda: 'Chi ha creato questo sito?',
          risposte: [
            {text: 'Sara', status: false},
            {text: 'Alessia', status: false},
            {text: 'Mario', status: false},
            {text: 'Mattia', status: true},
          ]
        }
      ]

      
    }
  }
}
</script>

