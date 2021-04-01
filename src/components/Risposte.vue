<template>
    <div>
        <div v-if="finished == true" class="risultati">
            <h4>Risposte corrette: {{esatte.length}}</h4>
            <ul class="esatte">
                <li v-for="esatta in esatte" :key="esatta.id">{{esatta}}</li>
            </ul>

            <h3>Risposte sbagliate: {{sbagliate.length}}</h3>
            <ul class="sbagliate">
                <li v-for="sbagliata in sbagliate" :key="sbagliata.id">{{sbagliata}}</li>
            </ul>
        </div>


        <div class="msg" v-if="verify == true && answered == true">Congratulazioni, hai indovinato!</div>
        <div class="msg" v-if="verify == false && answered == true">Mi dispiace, ma hai sbagliato.</div>

        <div class="risposte">
            <ul>
                <li :class="answer.status == true ? correct : wrong" @click="check(i)" v-for="(answer,i) in answers" :key="answer.id">
                    {{answer.text}}
                    {{answer.status}}
                </li>
                <br>

            </ul>
        </div>
        
        
    </div>
</template>



<script>
export default {
    name: 'app',
    props: {
        questions: Array,
        answers: Array,
        answered: Boolean,
        correct: String,
        wrong: String,
        finished: Boolean
    },
    data () {
        return {
            sbagliate: [],
            esatte: [],
            verify: null,
            
        }
    },
    methods: {
        check: function(i) {
            if (this.answered == false) {
                if (this.answers[i].status == true) {
                    this.verify = true;
                    this.correct = 'correct';
                    this.wrong = 'wrong';
                }  else if(this.answers[i].status == false) {
                    this.verify = false;
                    this.correct = 'correct';
                    this.wrong = 'wrong';        
                }  else {
                    this.reset();
                }
                this.answered = true;
            }
            
            if (this.answers[i].status == true) {
                this.esatte.push(this.answers[i].text)
                //console.log(this.esatte);
            } else {
                this.sbagliate.push(this.answers[i].text)
                //console.log(this.sbagliate)
            }
            
            console.log(this.questions)
            if (this.questions.length >= 4 ) {
                this.finished = true;
            }
           console.log(this.finished)
           
        },
        reset: function() {
            this.verify = null;
            this.wrong = '';
            this.correct = '';       
        }
    }
}
</script>



<style lang="scss">
    .risposte {
        
        &,ul{
            display: flex;
            flex-flow: wrap row;
            justify-content: center;
        }
        ul{
            margin: 25px auto;
            width: 75%;
            max-width: 900px;
            li{
                border: 2px solid white;
                padding: 15px 100px;
                margin: 25px;
                cursor: pointer;
                &:hover{
                    opacity: 0.8;
                }
            }
        }
        
    }
    .msg{
        margin-top: 20px ;
    }
    .wrong{
        background: rgba(255, 0, 0, 0.7);
        
    }
    
    .correct{
        background: rgba(0, 211, 0, 0.7);
        
    }

    .esatte{
        background: rgba(0, 211, 0, 0.4); 
    }

    .sbagliate{
        background: rgba(255, 0, 0, 0.4);
    }

</style>