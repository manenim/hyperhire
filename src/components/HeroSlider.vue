<script setup></script>

<template>
  <div class="wrap-home-resources">
    <!-- <script src="./home-resources.js" inline></script> -->

    <div class="home-resources-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div id="carousel-home-resources" class="carousel-home-resources">
              <carousel-3d
                :perspective="0"
                :border="0"
                :width="300"
                :height="430"
                :controls-visible="true" 
                :space="100"
                :clickable="true"
              >
                <slide :index="0">
                  <img src="https://loremflickr.com/585/370/paris/?random=1" />
                </slide>

                <slide :index="1">
                  <img src="https://loremflickr.com/585/370/paris/?random=2" />
                </slide>

                <slide :index="2">
                  <img src="https://loremflickr.com/585/370/paris/?random=3" />
                </slide>
              </carousel-3d>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
</template>

<style scoped>
.container {
  width: 100%;
}

.carousel-home-resources {
  .left-1 {
    transform: translateX(-200px) translateZ(-300px) rotateY(0deg) !important;

  }
  .right-1 {
    transform: translateX(200px) translateZ(-300px) rotateY(0deg) !important;

  
  }
}
</style>
