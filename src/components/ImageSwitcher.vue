<template>
  <div class="image-switcher-wrapper">
    <div
      class="image-switcher-top"
      v-bind:class="{ active: showTop === true }"
      v-bind:style="{ 'background-image': topUrl }"
      v-on:load="imageReady(true)"
      ref="top"
    ></div>
    <div
      class="image-switcher-bottom"
      v-bind:class="{ active: showTop === false }"
      v-bind:style="{ 'background-image': bottomUrl }"
      v-on:load="imageReady(false)"
      ref="bottom"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'ImageSwitcher',
  data() {
    return {
      showTop: undefined,
      topUrl: undefined,
      bottomUrl: undefined,
    }
  },
  props: {
    src: String
  },
  mounted() {
    if (this.src) {
      this.update(this.src);
    }
  },
  methods: {
    update(val) {
      // const target = this.showTop ? this.$refs.bottom : this.$refs.top;
      // target.src = val;
      
      if (this.showTop) {
        this.bottomUrl = `url("${val}")`
      } else {
        this.topUrl = `url("${val}")`
      }

      // if (target.complete) {
        this.imageReady(!this.showTop);
      // }
    },
    imageReady(top) {
      this.showTop = top;
    }
  },
  watch: {
    src(val) {
      this.update(val);
    }
  }
}
</script>

<style scoped>
  .image-switcher-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .image-switcher-bottom,
  .image-switcher-top {
    -webkit-transition: opacity 3s ease-in;
    -moz-transition: opacity 3s ease-in;
    -o-transition: opacity 3s ease-in;
    -ms-transition: opacity 3s ease-in;
    transition: opacity 3s ease-in;

    /* background-image: url("http://localhost:3000/pictures/2019-10-27-20-29-53-63.jpg"); */
    background-size: cover;
    background-position: 50% 50%;

    position: absolute;
    left: 0;
    top: 50%;
    margin-left: 50%;
    transform: translate(-50%, -50%);

    height: 100%;
    width: 100%;
  }

  .image-switcher-top {
    z-index: 1;
    opacity: 0;
  }

  .image-switcher-top.active {
    opacity: 1;
  }
</style>