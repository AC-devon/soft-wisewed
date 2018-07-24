<template>
    <div class="home grid-container text-center">
    
      <form >
        <div class="row text-center home-img">
      <img class="text-center" src="../assets/WiseWed_logo.svg">
    </div>
          <div class="wrap-enter">
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
            <div id="enter">
               <a class="button" @click="goCalc">!התחברו</a><br>
            <a  @click="loginPopup = true">כבר יש לי משתמש</a>
            </div>
           <div v-if="loginPopup">
             <div id="login-wrapper">
             <form v-on:submit.prevent="login">
               <div>
               <label for="email">אימייל</label>
                 <input v-model="email" type="email"/>
 </div>
    <div>
               <label for="password">סיסמה</label>
                 <input v-model="password" type="password"/>
 </div>
 <button id="btn" >התחברו</button>
 <div v-if="showErrLogin"   class="errMsg">{{errtext}}</div>
             </form>
             </div>
           </div>
          </div>
          <div v-if="errMsg" class="errMsg">
            נו בחיית תגלו לנו מה השם שלכם
          </div>
      </form>
    </div>
  </template>

<script>
import firebase from "firebase";
import { auth } from "../firebaseConfig";
import { store } from "../store.js";
import Router from '../router'; 

auth.onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch("setUser", user);
    Router.push('/Calc')
  } else {
    store.dispatch("setUser", null);
  }

  console.log(user);
});

export default {
  name: "home",
  data() {
    return {
      email: null,
      password: null,
      userName: "",
      weddingDate: "",
      errMsg: false,
      loginPopup: false,
      errtext: "",
      showErrLogin: false
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
      this.showErrLogin = true;

      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(function(err) {
          var errCode = err.code;
          var errMessage = err.message;
          if (errCode == "auth/wrong-password") {
            alert("worng pw");
          } else {
            alert(errMessage);
          }
        });
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
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
.wrap-enter {
  width: 350px;
  margin: 0 auto;
}
.errMsg {
  color: #e84a45;
}
.red-heart {
  animation-name: colorfull;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}

@keyframes colorfull {
  0% {
    color: #e84a45;
  }
  50% {
    color: black;
  }
  100% {
    color: #e84a45;
  }
}

#enter {
  margin-top: 12%;
}

#login-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  background: #0000009c;
}
#login-wrapper form {
  font-size: 20px;
  background: white;
  padding: 20px 45px;
  border: 1px solid #e84a45;
  border-radius: 10px;
}
#login-wrapper label {
  font-size: 20px;
}
#btn {
  background: #e84a45;
  color: white;
  padding: 20px 45px;
  border-radius: 10px;
}

a.button {
  font-size: 18px;
  width: 200px;
  max-width: 100%;
}
</style>
