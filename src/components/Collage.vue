<template>
  <div class="wrapper" v-if="!error" @click="countdown = true">
    <camera class="camera" v-model="countdown"></camera>
    <div class="grid">
      <div class="slot"><image-switcher :src="slotA"/></div>
      <div class="slot"><image-switcher :src="slotB"/></div>
      <div class="slot"><image-switcher :src="slotC"/></div>
    </div>
    <div class="grid">
      <div class="slot"><image-switcher :src="slotD"/></div>
      <div class="slot"><image-switcher :src="slotE"/></div>
      <div class="slot"><image-switcher :src="slotF"/></div>
    </div>
    <div class="middle-circle">
      <div class="outer">
        <!-- <div class="inner">
          <div class="wedding">Bröllop</div>
          <div class="names">Camilla<br>&<br>Henrik</div>
          <div class="dates">2019-08-31</div>
        </div> -->
        <div class="inner">
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    {{error}}
  </div>
</template>

<script>
import ImageSwitcher from './ImageSwitcher';
import Camera from './Camera';

export default {
  name: 'Collage',
  components: {
    ImageSwitcher,
    Camera
  },
  data() {
    return {
      images: [],
      slotA: undefined,
      slotB: undefined,
      slotC: undefined,
      slotD: undefined,
      slotE: undefined,
      slotF: undefined,
      lastSlot: 0,
      lastIndex: 0,
      countdown: false,
      error: undefined,
    }
  },
  async mounted() {
    setInterval(async () => {
      await this.updateImages();
      this.swapNextSlot()
    }, 10000);
    await this.updateImages();
    this.swapNextSlot();
    this.swapNextSlot();
    this.swapNextSlot();
    this.swapNextSlot();
    this.swapNextSlot();
    this.swapNextSlot();

    setInterval(() => {
      async () => {
        const result = await fetch('/awaiting_photo');
        if (result.status === 200) {
          const data = await result.json();
          if (data === true) {
            countdown = true;
          }
        }
      }
    }, 200);
  },
  methods: {
    getImage() {
      if (this.images.length === 0) {
        return;
      } else if (this.images.length === 1) {
        return this.images[0]
      } else {
        let index = this.lastIndex++;
        if (index >= this.images.length) {
          index = 0;
          this.lastIndex = 0;
        }
        return this.images[index];
      }
    },
    async updateImages() {
      const result = await fetch('http://localhost:3000/images.json');
      if (result.status === 200) {
        const data = await result.json();
        this.images = data;
      } else {
        // eslint-disable-next-line
        console.log('Failed to get images')
      }
    },
    swapNextSlot() {
      if (!navigator.getUserMedia) {
        this.error = 'No webcam detected :('
      }
      const slots = ['slotA', 'slotB', 'slotC', 'slotD', 'slotE', 'slotF'];
      const slot = slots[this.lastSlot++];
      this[slot] = this.getImage();
      if (this.lastSlot > slots.length) {
        this.lastSlot = 0;
      }
    },
  },
  watch: {
    async countdown(val) {
      if (!val) {
        await this.updateImages();
        if (this.images.length < 6) {
          this.swapNextSlot();
        }
      }
    }
  }
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css?family=Oswald&display=swap'); */

.slot {
  height: 100%;
  width: 33%;
  width: -webkit-calc(33% - 2px);
  width: calc(33% - 2px);
  margin: 0 5px 5px 0;
  float: left;
  
  /* background-color: ghostwhite; */
  /* background-color: #2c3e50; */

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
  background-image: url('../assets/ist-logo.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
  /* border-radius: 50%;
  width: 510px;
  height: 510px;
  border: 6px solid white;
  position: relative; */
}

.middle-circle > .outer > .inner {
  width: 500px;
  height: 500px;
  margin-left: 5px;
  margin-top: 5px;
  border-radius: 50%;
  /* background-color: white; */
  display: table;
}

.middle-circle > .outer > .inner > .names {
  display: table-cell;
  vertical-align: middle;
  font-size: 90px;
  font-family: 'Oswald', serif;
  line-height: 80px;
  color: rgba(0,0,0,0.7)
}

.wedding {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 50px;
  font-family: 'Oswald', serif;
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
  font-family: 'Oswald', serif;
  line-height: 80px;
  color: rgba(0,0,0,0.8)
}

.dates {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 50px;
  font-family: 'Oswald', serif;
  font-size: 30px;
  border-top: 1px solid rgba(0,0,0,0.7);
  border-bottom: 1px solid rgba(0,0,0,0.7);
  color: rgba(0,0,0,0.7);
  padding-left: 40px;
  padding-right: 40px;
}

.camera {
  position: absolute;
  z-index: 900;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
