<template>
  <div>
    <div class="domanda">
      {{questions[questions.length-1]}}
    </div>
    <risposte 
      :questions="questions"
      :answers="answers"
      :answered="answered"
      :correct="correct"
      :wrong="wrong"
      :finished="finished"
    ></risposte>  

    <span v-if="finished == false" @click="next()" class="next">Avanti</span>
    <span v-if="finished == true" @click="next()" class="next">Riprova</span>
  </div>
</template>




<script>
export default {
  name: 'app',
  data () {
    return {
      questions: [],
      answers: [],
      avanti: true,
      answered: false,
      correct: '',
      wrong: '',
      finished: false
    }
  },
  props : {
    data: Array,
  },
  mounted: function () {
    this.next();

  },
  methods: {
      next: function() {
        let haveIt = [];
        function generateUniqueRandom() {
          let maxNr = 4;
            //Generate random number
            let random = Math.floor((Math.random() * maxNr));

            //Coerce to number by boxing
            random = Number(random);

            if(!haveIt.includes(random)) {
                haveIt.push(random);
                return random;
            } else {
            if(haveIt.length < maxNr) {
              //Recursively generate number
            return  generateUniqueRandom();
            } else {
              console.log('No more numbers available.')
              return false;
            }
          }
        }
        console.log(this.finished)
        

        var box = this.data[Math.floor(generateUniqueRandom())];

        
        while(!this.questions.includes(box.domanda)) {
          
          this.questions.push(box.domanda);
          this.answers = box.risposte;
    
          
        }
        
        this.avanti = true;
        this.answered = false;
      }
  }
}
</script>




<style lang="scss">
  .domanda{
    margin-top: 10px;
    display: inline-block;
    padding: 15px 20px;
    border: 2px solid white;
  }
  .next {
    border: 2px solid white;
    border-radius: 10px;
    background-color: #2b2b97;
    padding: 10px 15px;
    cursor: pointer;
    &:hover{
      opacity: 0.9;
    }
  }
</style>