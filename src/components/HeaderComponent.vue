




<template>
  <!-- <q-layout view="lHh Lpr lFf"> -->
  
  
  
    <header
     
    style="
      background-color: transparent;
      position: absolute;
      top: 0;
      width: 100%;
      padding-left: 7%;
      padding-right: 7%;
      padding-top: 0.5rem;
    "
  >
    <q-toolbar>
      <q-toolbar-title>
        <q-img src="img/logo.svg" style="width: 120px"></q-img>
      </q-toolbar-title>

      <q-toolbar-title class="gt-sm">
        <div class="dropdown">
          <a
            href="#"
            class="q-mr-md text-white"
            style="font-size: 1rem; font-weight: bold"
            >채용
            <span class="q-ml-sm"><img src="icons/arrow-down.svg"/></span>
            </a
          >

          <div class="dropdown-content shadow-2">
            <a href="#" class="text-weight-bold">채용</a>
            <a href="#">해외 개발자 원격 채용</a>
            <a href="#">외국인 원격 채용 (비개발 직군)</a>
            <a href="#">한국어 가능 외국인 채용</a>
          </div>
        </div>
        <a
          href="#"
          class="text-white q-ml-sm"
          style="font-size: 1rem; font-weight: bold"
          >해외 개발자 활용 서비스</a
        >
      </q-toolbar-title>

      <div class="gt-sm">
        <q-btn color="white" text-color="black" label="문의하기" />
      </div>

      <div>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="lt-md"
        />
      </div>
    </q-toolbar>
  </header>

  <q-drawer v-model="leftDrawerOpen" bordered>
    <q-list>
      <q-item-label header> Essential Links </q-item-label>

      <EssentialLink
        v-for="link in linksList"
        :key="link.title"
        v-bind="link"
      />
    </q-list>
  </q-drawer>

  <!-- <q-page-container>
      <router-view />
    </q-page-container> -->
  <!-- </q-layout> -->
</template>

<script setup>
import EssentialLink from "components/EssentialLink.vue";

import { ref, onMounted, onBeforeUnmount } from 'vue';

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}






</script>

<style>


.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
margin-left: -12rem;
  background-color: #f1f1f1;
  min-width: 160px;

  border-radius: 12px;

  z-index: 999999;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 1rem;
  transition: .5s all ease;
}

.dropdown-content a:hover {
    background: rgb(223, 221, 221);
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
