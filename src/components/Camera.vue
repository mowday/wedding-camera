<template>
  <div class="camera-wrapper" v-bind:class="{ active: value }">
    <div class="countdown" v-if="countdown != 0">{{countdown}}</div>
    <video ref="video" :class="{ visible: !image }"></video>
    <canvas ref="canvas" :class="{ visible: image }"></canvas>
  </div>
</template>

<script>
export default {
  name: 'Camera',
  data() {
    return {
      countdown: 7,
      running: false,
      image: undefined,
    }
  },
  methods: {
    start() {
      this.countdown = 7;
      let cd = setInterval(() => {
        this.countdown--;
        if (this.countdown == 0) {
          clearInterval(cd);
          this.takePhoto();
        }
      }, 1000);
    },
    async takePhoto() {
      console.log('Take Photo');
      console.log(this.$refs.video)
      this.$refs.canvas.width = this.$refs.video.clientWidth;
      this.$refs.canvas.height = this.$refs.video.clientHeight;
      
      this.$refs.canvas.getContext('2d').drawImage(
        this.$refs.video, 
        0, 0, 
        this.$refs.canvas.width,
        this.$refs.canvas.height
      )
      
      this.image = this.$refs.canvas.toDataURL('image/jpeg', 1.0);
      const result = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: this.image
      });
      
      setTimeout(() => {
        this.$emit('input', false);
        this.image = undefined;
      }, 5000);
    },
  },
  mounted() {
    navigator.getUserMedia(
        {video:true, audio:false},
        mediaStream => {
            var video = this.$refs.video;
            video.srcObject = mediaStream;
            video.play();

            this.canvas = document.createElement('canvas');
        },
        console.log);
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    }
  },
  watch: {
    value(val, previous) {
      if (val && !previous) {
        this.start();
      }
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Cinzel&display=swap');

  .camera-wrapper {
    margin: 0;
    padding: 0;
    position: relative;
    visibility: hidden;
  }

  .camera-wrapper.active {
    visibility: visible;
  }

  .countdown {
    font-family: 'Cinzel', serif;
    color: white;
    font-size: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-shadow: 3px 3px 6px rgba(0,0,0, 0.8)
  }

  video {
    border-radius: 70px;
    border: 5px solid white;
    padding: 0;
    display: none;
  }

  canvas {
    border-radius: 70px;
    border: 5px solid white;
    padding: 0;
    display: none;
  }

  .visible {
    display: block;
  }
</style>