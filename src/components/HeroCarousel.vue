<script setup>
import CarouselContent from './CarouselContent.vue';




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
  <Slide class="bg-white shadow-1 slide-1" :index="0"> 
    <CarouselContent />    
</Slide>
  <Slide class="bg-white shadow-1 slide-2" :index="1"> <CarouselContent />  </Slide>
  <Slide class="bg-white shadow-1 slide-3" :index="2"> <CarouselContent />  </Slide>
</Carousel3d>

</template>

<style scoped>
.slide-1{
    border-radius: 8px;
    
}
.slide-2{
    border-radius: 8px;
}
.slide-3{
    border-radius: 8px;
}

</style>
