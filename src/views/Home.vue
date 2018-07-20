<template>
    <div class="home grid-container text-center">
    
      <form>
        <div class="row text-center home-img">
      <img class="text-center" src="../assets/WiseWed_logo.svg">
    </div>
          <div class="wrap-login">
            <div class="medium-4">
              <label>שמות המאושרים
              </label>
              <div class="input-group">
                <span class="input-group-label">
                  <i class="fas fa-heart red-heart"></i>
                </span>
                <input v-model="userName" class="input-group-field" type="text">
              </div>
            </div>
            <div class="medium-4">
              <label>תאריך החתונה</label>
              <div class="input-group">
                <span class="input-group-label">
                  <i class="fas fa-calendar-alt"></i>
                </span>
                <input v-model="weddingDate" class="input-group-field" type="date">
              </div>
            </div>
            <div id="login">
               <a class="button" @click="goCalc">!התחברו</a><br>
            <a  @click="login">כבר יש לי משתמש</a>
            </div>
           
          </div>
          <div v-if="errMsg" id="errMsg">
            נו בחיית תגלו לנו מה השם שלכם
          </div>
      </form>
    </div>
  </template>

<script>
export default {
  name: "home",
  data() {
    return {
      userName: "",
      weddingDate: "",
      errMsg: false
    };
  },
  methods: {
    goCalc() {
      let self = this;
      if (this.userName != "") {
        this.$router.push({
          name: "Calc",
          params: { userName: self.userName, weddingDate: self.weddingDate }
        });
      } else {
        this.errMsg = true;
      }
    },
    login() {
      //create login firebase
    }
  }
};
</script>


<style scope>
.home {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.input-group-field {
  text-align: center;
}
.wrap-login {
  width: 350px;
  margin: 0 auto;
}
#errMsg {
  color: red;
}
.red-heart {
  animation-name: colorfull;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}

@keyframes colorfull {
  0% {
    color: red;
  }
  50% {
    color: black;
  }
  100% {
    color: red;
  }
}

#login {
  margin-top: 12%;
}
a.button {
  font-size: 18px;
  width: 200px;
  max-width: 100%;
}
</style>
