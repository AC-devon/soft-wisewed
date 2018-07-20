<template>
    <div id="pop-up-deal" class="grid-x rtl" :class="{ 'show-popup':progress >= 100}" v-show="closePopUp == false" >
        <div class="small-12">
            <div id="close" @click="closePopUp  = true"><i class="far fa-window-close"></i></div>
        </div>
        <div id="pop-up-text" class="small-12 text-center">
          <br>  מזל טוב! אתם חכמים יותר ומוכנים טיפ טופ.
            המחיר למנה שיצא לכם הוא:
            <div id="calc-price">₪{{calc}}</div>
            <button class="button hallow">שמור לפעם הבאה</button>
        </div>
    </div>
</template>

<script>
export default {
  props: ["calc", "progress"],
  data() {
    return {
      closePopUp: false
    };
  }
};
</script>

<style>
#pop-up-deal {
  top: -50%;
  transition: 1s ease;
  background-color: #e74b46e6;
  position: fixed;
  color: white;
  margin: 0 auto;
  left: 0;
  right: 0px;
  padding: 10px;
  max-width: 90%;
  z-index: 2;
  width: 450px;
}
#pop-up-text {
  padding: 0px 10px;
}
#pop-up-deal.show-popup {
  top: 20%;
}
#close {
  cursor: pointer;
}
#pop-up-text button {
  margin: 5% 0%;
}
#calc-price {
  font-size: 25px;
}
</style>
