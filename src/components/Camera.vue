<template>
  <div class="camera-wrapper" v-bind:class="{ active: value }">
    <div class="countdown" v-if="countdown != 0">{{countdown}}</div>
    <video ref="video" :class="{ visible: !image }"></video>
    <div class="canvas-wrapper" :class="{ visible: image }">
      <canvas ref="canvas" :class="{ visible: image }"></canvas>
    </div>
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
      this.$refs.canvas.width = this.$refs.video.clientWidth;
      this.$refs.canvas.height = this.$refs.video.clientHeight;
      
      this.$refs.canvas.getContext('2d').drawImage(
        this.$refs.video, 
        0, 0, 
        this.$refs.canvas.width,
        this.$refs.canvas.height
      )
      
      this.image = this.$refs.canvas.toDataURL('image/jpeg', 1.0);
      await fetch('http://localhost:3000/upload', {
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
        // eslint-disable-next-line
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
  /* @import url('https://fonts.googleapis.com/css?family=Oswald&display=swap'); */

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
    font-family: 'Oswald', serif;
    color: white;
    font-size: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-shadow: 3px 3px 6px rgba(0,0,0, 0.8)
  }

  video {
    border-radius: 10px;
    border: 5px solid white;
    padding: 0;
    display: none;
    -webkit-box-shadow: 3px 3px 25px -4px rgba(0,0,0,0.8);
    -moz-box-shadow: 3px 3px 25px -4px rgba(0,0,0,0.8);
    box-shadow: 3px 3px 25px -4px rgba(0,0,0,0.8);
  }

  .canvas-wrapper {
    border-radius: 10px;
    border: 5px solid white;
    background-color: white;
    padding: 0;
    display: none;
    -webkit-box-shadow: 3px 3px 25px -4px rgba(0,0,0,0.8);
    -moz-box-shadow: 3px 3px 25px -4px rgba(0,0,0,0.8);
    box-shadow: 3px 3px 25px -4px rgba(0,0,0,0.8);
  }

  .visible {
    display: block;
  }

  canvas {
    opacity: 0;
  }

  canvas.visible {
    -webkit-animation: flash 1s;
    animation: flash 1s;
    opacity: 1;
  }



  @-webkit-keyframes flash {
    0% {  opacity: .3;  }
    100% { opacity: 1; }
  }
  @keyframes flash {
    0% { opacity: .3; }
    100% { opacity: 1;  }
  }

</style>