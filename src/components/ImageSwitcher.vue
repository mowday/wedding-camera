<template>
  <div class="image-switcher-wrapper">
    <img
      class="image-switcher-top"
      v-bind:class="{ active: showTop === true }"
      v-on:load="imageReady(true)"
      ref="top"
    >
    <img
      class="image-switcher-bottom"
      v-bind:class="{ active: showTop !== undefined }"
      v-on:load="imageReady(false)"
      ref="bottom"
    >
  </div>
</template>

<script>
export default {
  name: 'ImageSwitcher',
  data() {
    return {
      showTop: undefined
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
      const target = this.showTop ? this.$refs.bottom : this.$refs.top;
      target.src = val;

      if (target.complete) {
        this.imageReady(!this.showTop);
      }
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

    position: absolute;
    left: 0;
    top: 50%;
    margin-left: 50%;
    transform: translate(-50%, -50%);

    min-height: 100%;
    min-width: 100%;
    opacity: 0;
  }

  .image-switcher-top {
    z-index: 1;
  }

  .image-switcher-top.active {
    opacity: 1;
  }

  .image-switcher-bottom.active {
    opacity: 1;
  }
</style>