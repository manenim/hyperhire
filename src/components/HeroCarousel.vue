<script setup>
import { defineComponent } from "vue";

import CarouselContent from "./CarouselContent.vue";
import { data } from "../data";
</script>

<template>
  <Carousel3d
    :perspective="0"
    :border="0"
    :width="260"
    :height="380"
    :controls-visible="true"
    :space="200"
    :clickable="true"
    :autoplay="true"
    :autoplay-timout="5000"
  >
    <Slide class="bg-white slide-1" :index="0">
      <CarouselContent
        :name="data[0].name"
        :img="data[0].img"
        :years="data[0].years"
      />
    </Slide>
    <Slide class="bg-white slide-2" :index="1">
      <CarouselContent
        :name="data[1].name"
        :img="data[1].img"
        :years="data[1].years"
      />
    </Slide>
    <Slide class="bg-white slide-3" :index="2">
      <CarouselContent
        :name="data[2].name"
        :img="data[2].img"
        :years="data[2].years"
      />
    </Slide>
  </Carousel3d>
</template>

<style scoped>
.slide-1 {
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
.slide-2 {
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
.slide-3 {
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
</style>
