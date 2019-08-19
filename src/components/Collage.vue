<template>
  <div class="wrapper">
    <div class="grid">
      <div class="slot"><image-switcher :src="target"/></div>
      <div class="slot"><image-switcher :src="target"/></div>
    </div>
    <div class="grid">
      <div class="slot"><image-switcher :src="target"/></div>
      <div class="slot"><image-switcher :src="target"/></div>
    </div>
    <div class="middle-circle">
      <div class="outer">
        <div class="inner">
          <div class="wedding">Bröllop</div>
          <div class="names">Camilla<br>&<br>Henrik</div>
          <div class="dates">2019-01-01</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageSwitcher from './ImageSwitcher';

export default {
  name: 'Collage',
  components: {
    ImageSwitcher
  },
  data() {
    return {
      target: 'https://www.hermoney.com/wp-content/uploads/2018/08/let-the-journey-begin_t20_9lPYBy-840x487.jpg'
    }
  },
  mounted() {
    setTimeout(() => {
      this.target = 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_661,q_50,w_1920/v1/clients/frederickcountymd/Wedding_at_Thorpewood_2_db549f4c-ee8b-4707-aec7-d8f3a0eb8bb6.jpg'
    }, 5000);
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Cinzel&display=swap');

.slot {
  height: 100%;
  width: 47%;
  width: -webkit-calc(50% - 5px);
  width: calc(50% - 5px);
  margin: 0 5px 5px 0;
  float: left;

  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
}

.grid {
  height: 50%;
  width: 100%;
}

.wrapper {
  height: 98%;
  height: -webkit-calc(100% - 15px);
  height: calc(100% - 15px);
  margin-left: 5px;
  margin-top: 5px;
}


.middle-circle {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 500;
}

.middle-circle > .outer {
  border-radius: 50%;
  width: 510px;
  height: 510px;
  border: 10px solid white;
  /* border: 5px solid #8BA661; */
  position: relative;
}

.middle-circle > .outer > .inner {
  width: 500px;
  height: 500px;
  margin-left: 5px;
  margin-top: 5px;
  border-radius: 50%;
  background-color: white;
  display: table;
}

.middle-circle > .outer > .inner > .names {
  display: table-cell;
  vertical-align: middle;
  font-size: 90px;
  font-family: 'Cinzel', serif;
  line-height: 80px;
  color: rgba(0,0,0,0.7)
  /* color: #8BA661; */
}

.wedding {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 50px;
  font-family: 'Cinzel', serif;
  font-size: 30px;
  border-top: 1px solid rgba(0,0,0,0.7);
  border-bottom: 1px solid rgba(0,0,0,0.7);
  color: rgba(0,0,0,0.7);
  padding-left: 40px;
  padding-right: 40px;
}

.dates {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 50px;
  font-family: 'Cinzel', serif;
  font-size: 30px;
  border-top: 1px solid rgba(0,0,0,0.7);
  border-bottom: 1px solid rgba(0,0,0,0.7);
  color: rgba(0,0,0,0.7);
  padding-left: 40px;
  padding-right: 40px;
}
</style>
