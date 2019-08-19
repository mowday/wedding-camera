<template>
  <div class="wrapper">
    <div class="grid">
      <div class="slot"><image-switcher :src="slotA"/></div>
      <div class="slot"><image-switcher :src="slotB"/></div>
    </div>
    <div class="grid">
      <div class="slot"><image-switcher :src="slotC"/></div>
      <div class="slot"><image-switcher :src="slotD"/></div>
    </div>
    <div class="middle-circle" @click="startCountdown">
      <div class="outer">
        <div class="inner" v-if="!showCountdown">
          <div class="wedding">Bröllop</div>
          <div class="names">Camilla<br>&<br>Henrik</div>
          <div class="dates">2019-01-01</div>
        </div>
        <div class="inner" v-else>
          <div class="wedding">Get Ready!</div>
          <div class="number">{{ countdown }}</div>
          <div class="dates">Say cheese</div>
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
      slotA: this.getImage(),
      slotB: this.getImage(),
      slotC: this.getImage(),
      slotD: this.getImage(),
      lastSlot: 0,
      showCountdown: false,
      countdown: 5
    }
  },
  mounted() {
    setInterval(() => {
      const slots = ['slotA', 'slotB', 'slotC', 'slotD'];
      const slot = slots[this.lastSlot++];
      this[slot] = this.getImage();
      if (this.lastSlot > slots.length) {
        this.lastSlot = 0;
      }
    }, 10000);
  },
  methods: {
    getImage() {
      const a = [
        'https://media.glamour.com/photos/5788fbfa84667b5051f412c6/master/w_1600%2Cc_limit/wedding-guests.jpg',
        'https://earcandy-beec.kxcdn.com/wp-content/uploads/2017/02/5555-1024x576.jpg',
        'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_661,q_50,w_1920/v1/clients/frederickcountymd/Wedding_at_Thorpewood_2_db549f4c-ee8b-4707-aec7-d8f3a0eb8bb6.jpg',
        'http://thisfairytalelife.com/wp-content/uploads/2017/04/Disney-wedding-guests-4.jpg',
        'https://home.bt.com/images/the-clooneys-and-the-beckhams-are-among-the-royal-wedding-guests-136427280517702601-180519111018.jpg'
      ]

      return a[Math.floor(Math.random() * a.length)];
    },
    startCountdown() {
      this.countdown = 5;
      this.showCountdown = true;
      const cd = setInterval(() => {
        this.countdown -= 1;
        if (this.countdown == 0) {
          clearInterval(cd);
          this.countdownComplete();
        }
      }, 1000);
    },
    countdownComplete() {
      this.countdown = 'O_o';
      setTimeout(() => {
        this.showCountdown = false;
      }, 2000);
    }
  },
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
  border: 6px solid white;
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

.inner > .number {
  display: table-cell;
  vertical-align: middle;
  font-size: 200px;
  font-family: 'Cinzel', serif;
  line-height: 80px;
  color: rgba(0,0,0,0.8)
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
