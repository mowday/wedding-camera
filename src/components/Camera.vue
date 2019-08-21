<template>
  <div class="camera-wrapper" v-bind:class="{ active: value }">
    <div class="countdown">{{countdown}}</div>
    <video ref="video"></video>
  </div>
</template>

<script>
export default {
  name: 'Camera',
  data() {
    return {
      countdown: 7,
      running: false
    }
  },
  methods: {
    start() {
      this.countdown = 7;
      let cd = setInterval(() => {
        this.countdown--;
        if (this.countdown == 0) {
          clearInterval(cd);
          this.$emit('input', false);
        }
      }, 1000);
    }
  },
  mounted() {
    navigator.getUserMedia(
        {video:true, audio:false},
        mediaStream => {
            var video = this.$refs.video;
            video.srcObject = mediaStream;
            video.play();
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
  }
</style>