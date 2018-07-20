<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Calc">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
label{
  font-size: 18px;
}
.primary-color{
  color:#e74b46;
}
@font-face{
    font-family:main-font;
    src: url("./assets/fonts/OpenSansHebrew-Regular.ttf");

}

*{
    font-family: main-font;
    outline: 0;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
*::-webkit-scrollbar {
    width: 0.7em;
    border-radius: 50%;
}
 
*::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background: white;   
}
 
*::-webkit-scrollbar-thumb {
  background-color: #e74b46;
  border-radius: 10px
}
* {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

input[type=range]{
    -webkit-appearance: none;
    background: none;
    outline: 0;
    cursor: pointer;
    background: #e0e0e0;
    transition: 0.3s all ease-out;
  }
  
  input[type=range]::-webkit-slider-runnable-track {
    height: 0px;
    background: #e0e0e0;
    border: none;
    border-radius: 3px;
    transition: 0.3s all ease-out;
  }
  
  input[type=range]::-ms-track {
    height: 0px;
    background: #e0e0e0;
    border: none;
    border-radius: 3px;
  }
  
  input[type=range]::-moz-range-track {
    height: 0px;
    background: #e0e0e0;
    border: none;
    border-radius: 3px;
  }
  
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 1px solid #e74b46;
    background: white;
    margin-top: -10px;
    position: relative;
    cursor: pointer;
  }
  
  input[type=range]::-ms-thumb {
    -webkit-appearance: none;
    border: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 1px solid #e74b46;
    background: white;
    margin-top: -10px;
    position: relative;
    cursor: pointer;
  }
  
  input[type=range]::-moz-range-thumb {
    -webkit-appearance: none;
    border: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 1px solid #e74b46;
    background: white;
    margin-top: -10px;
    position: relative;
    cursor: pointer;
  }

input[type="range"] {
    -webkit-appearance: none;
    -moz-apperance: none;
    height: 2px;
    background: -webkit-gradient(
 linear,
 left top,
 right top,
 color-stop(#e74b46),
 color-stop(#e0e0e0)
 );
}
input[type=range] {
    -webkit-appearance: none;
    background: none;
    outline: 0;
    cursor: pointer;
    background: #e0e0e0;
    transition: 0.3s all ease-out;
}
#app img{
  max-width: 250px;
}


</style>
