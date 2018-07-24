 <template>
    <div class="grid-container ">
      <Popup  v-bind:calc="this.calcProp(),progress"></Popup>
      <div class="row text-center home-img">
        <img class="text-center" src="../assets/WiseWed_logo.svg">
      </div>
      <div id="hello-user" class="rtl">
        <label> ברוך הבא {{ this.$props.userName }} </label>
        <label>אתם מתחתנים בתאריך {{ this.$props.weddingDate }}</label>
      </div>
      <div id="inv" class="row grid-x rtl ">
        <div class="columns medium-2  small-5 vertical"> כמה מוזמנים יש לכם? </div>
        <div class="columns medium-1  small-2 vertical">
        <input type="number" class="text-center" v-model="invetations"> </div>
        <div class="columns pc text-left ltr medium-9 small-12  vertical">
          <div id="text-progress" v-text="textProgress"></div>
          <div id="progress-bar">
            <div id="bar-health" :style="{width: progress+'%'}">{{ (progress).toFixed(0)+'%'}}</div>
          </div>
        </div>
      </div>
      <div id="wedding-data" class="grid-x ">
       <div class="mob"> 
        <button id="left-btn" class="nav-btn " @click="weddingPosition++" :disabled="weddingPosition >= weddingProp.length-1"><i class="fas fa-arrow-left"></i></button>
                <div class="text-center mob ">
          <div id="text-progress" v-text="textProgress"></div>
          <div id="progress-bar">
            <div id="bar-health" :style="{width: progress+'%'}">{{ (progress).toFixed(0)+'%'}}</div>
          </div>
        </div>
        <button id="right-btn"   class="nav-btn " :disabled="weddingPosition <= 0"  @click="weddingPosition--"><i class="fas fa-arrow-right"></i></button>
       </div>
        <div id="menu" class="columns small-12 medium-2">
        <ul >
          <li v-for="(prop,index) in weddingProp" @click="weddingPosition = index" >
           
            <div class="row btn grid-x">
             
              <div class=" columns small-2 text-left">
                 <i v-show="prop.contract != null" class="fas fa-check"></i>
                 
                  </div> 
                
                 <div class="columns small-10 text-right">{{prop.kind}} </div>
                
                 </div>
            </li>
        </ul>
      </div>
      <transition name="fade">
        <div  class="wedding-prop columns small-12 medium-10" >
          <div class="row grid-x bit-mrg">
            <i id="prop-tooltip" class="columns small-1 text-left fas" :class="weddingProp[weddingPosition].class" v-tooltip="{ content: weddingProp[weddingPosition].tip, trigger: 'hover , click' }"></i>
          </div>
          <div class="row grid-x rtl">
            <div id="prop-name" class="columns medium-6 small-6 text-right" v-text="weddingProp[weddingPosition].kind"></div>
            <input id="current-price" type="number" class="columns medium-6 small-6 text-left" :placeholder="weddingProp[weddingPosition].rangeVal" v-model="weddingProp[weddingPosition].rangeVal">
          </div>
          <div class="row grid-x">
            <input type="range" class="columns range small-12" :step="weddingProp[weddingPosition].pipe" :min="weddingProp.min" :max="weddingProp[weddingPosition].max" v-model="weddingProp[weddingPosition].rangeVal" enable="enable">
          </div>
          <div class="row grid-x ">
            <div id="low-range" class="columns medium-6 small-6 text-left" v-text="weddingProp[weddingPosition].min"></div>
            <div id="high-range" class="columns medium-6 small-6 text-right" v-text="weddingProp[weddingPosition].max"></div>
          </div>
          <div class="row grid-x contract text-center">
            <div id="estimated" class="columns small-6">
              <button class="button hollow" :class="{ 'fill-btn':  weddingProp[weddingPosition].contract == true }" @click="weddingProp[weddingPosition].contract = true,progressBar()">ממשי</button>
            </div>
            <div id="real" class="columns small-6">
              <button class="button hollow" :class="{ 'fill-btn': weddingProp[weddingPosition].contract == false }" @click="weddingProp[weddingPosition].contract = false,progressBar()"> משוער</button>
            </div>
  
          </div>
        </div>
      </transition>
      </div>

   <transition name="fade">
      <div id="sum" class="text-right " v-show="invetations > 0">
        <span id="full-calc"> על סך הנתונים שהכנסתם, מחיר ממוצע למנה יעלה כ
          <span id="avg-price" class="primary-color">₪{{ avragePrice }}</span> לאדם </span>
        <div id="register" >
          <div id="pop" :class="{popup:weddingPosition > 3, removePopup:save == false}">
            <div>...לפעמים תוכניות משתנות
              <br> ?מה דעתכם שנשמור לכם את כל המידע לפעם הבאה שתחזרו</div>
            <div class="save-btn row grid-x text-center">
              <div class="columns medium-2 small-5">
                <button class="button hollow " @click="save = false">לא תודה</button>
              </div>
              <div class="columns medium-2 small-5">
                <button class="button hollow" @click="register">!כן אני רוצה לשמור</button>
              </div>
            </div>
          </div>
        </div>
      </div>
   </transition>
    </div>
  </template>

<script>
import Popup from '../components/Popup.vue'
import { dbSuppliersRef } from '../firebaseConfig'

export default {
  components:{
    Popup
  },
  props: ["userName", "weddingDate"],
  firebase:{
    weddingProp: dbSuppliersRef
  },
  data() {
    return {
      // תאורה הגברה ואקום & כמות מוזמנים
      save: true,
      invetations: "",
      toolTip: false,
      progress: 0,
      textProgress: "הופה מתחילים",
      weddingPosition: 0,
   
    };
  },
  methods: {
    calcProp() {
      let totalCalc = 0;
      this.weddingProp.map(prop => {
        if (prop.kind == "מחיר מנה") {
          totalCalc += prop.rangeVal * this.invetations;
        } else {
          totalCalc += Number(prop.rangeVal);
        }
      });
      return (totalCalc / this.invetations).toFixed(2);
    },
    progressBar() {
      if (this.progress == 100) {
        // alert("מזל טוב! נראה שאתם בדרך לחתונה מתוכננת כמו שצריך!");
      } else {
        this.progress = 0;
        this.weddingProp.map(prop => {
          if (prop.contract != null) {
            this.progress += 100 / this.weddingProp.length;
          }
        });

        if (this.progress >= 100) {
          this.textProgress = "איזה אלופים! סיימתם, מזל טוב";
          this.$confetti.start()
          setTimeout(() => {
            this.$confetti.stop()
          }, 3000);
        } else if (this.progress > 60) {
          this.textProgress = "יאללה עוד קצת וגמרנו";
        } else if (this.progress > 30) {
          this.textProgress = "נראה שלא נשאר הרבה";
        }
      }
      if (this.weddingPosition < this.weddingProp.length - 1) {
        console.log(this.weddingPosition, this.weddingProp.length - 1);
        this.weddingPosition++;
      }
    },
    register() {
      // save user data
    }
  },
  computed: {
    avragePrice() {
      return this.calcProp();
    }
  },
  created() {
    if (typeof this.$props.userName == "undefined") {
     // this.$router.push("/");
    }
  }
};
</script>

<style >
.rtl {
  direction: rtl;
}
.ltr {
  direction: ltr;
}
#hello-user label {
  display: inline;
  text-align: right;
  font-size: 18px;
  line-height: 1.2em;
  font-weight: normal;
}
#inv {
  margin-top: 5%;
}
#progress-bar {
  border: 1px solid black;
  width: 200px;
  max-width: 100%;
      margin-bottom: 10px;
  float: left;
}
#bar-health {
  height: 20px;
  background: #1779ba;
  color: white;
  width: 0%;
  transition: 0.3s ease;
}

.wedding-prop {
  padding: 2%;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: 0.3s ease;
}
.wedding-prop:hover {
  border: 1px solid #e84a45;
}
.range {
  margin: 6% 0;
}
#wedding-data {
  border-top: 1px solid #e84a45;
  padding: 20px 0;
  position: relative;
}
#prop-tooltip {
  color: #e84a45;
}
.bit-mrg {
  margin-bottom: 15px;
}
.vertical {
  align-self: baseline;
}
#current-price {
  border: transparent;
}
#current-price:focus {
  border: red;
}
.contract {
  margin-top: 9%;
}
.button.hollow.fill-btn {
  background-color: #1779ba;
  color: #fefefe;
}
.button.hollow.fill-btn {
  background-color: #1779ba;
  color: #fefefe;
}
#avg-price {
  font-size: 17px;
  font-weight: bold;
}

#register {
  position: relative;
  text-align: center;
}

#pop {
  position: fixed;
  text-align: center;
  left: 0;
  right: 0;
  bottom: -200px;
  color: white;
  background: #e84a45;
  transition: 2s 0.3s ease;
  z-index: 2;
}
#register .popup {
  bottom: 0px;
}
#register .removePopup{
  bottom: -200px;
  transition: 0.3s ease;
}
#register button {
  color: white;
  border: 1px solid white;
}
.save-btn {
  justify-content: center;
}
.block.button {
  display: block;
}
#text-progress {
  margin-left: 3%;
}
#menu {
}
#menu ul {
  list-style: none;
  padding: 5%;
  height: 416px;
  overflow-y: scroll;
}
.row.btn.grid-x {
  border: 1px solid #1779ba;
  color: #1779ba;
  margin-bottom: 4%;
  padding: 4%;
  cursor: pointer;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.mob {
  display: none;
}
.pc {
  display: inline;
}
@media screen and (max-width: 750px) {
  .pc {
    display: none;
  }
  .mob #progress-bar {
    float: none;
    margin: 0 auto;
  }
  .mob {
    display: inline;
    position: relative;
    height: 55px;
    top: 3px;
  }
  #left-btn {
    position: absolute;
    left: 0;
  }
  #right-btn {
    position: absolute;
    right: 0;
  }
  .mob .nav-btn {
    z-index: 1;
    top: 0;
    top: -50px;
    width: 45px;
    cursor: pointer;
    height: 50px;
    border-radius: 11px;
  }
  #left-btn {
  }
  #right-btn {
  }
  .wedding-prop {
    border: 1px solid #e84a45;
    padding: 6%;
  }
  #wedding-data {
    flex-direction: column-reverse;
    overflow: hidden;
  }
  #menu {
    display: none;
  }
  #menu ul {
    height: 150px;
  }
}
</style>
