import "@nanoandrew4/vue3-carousel-3d/dist/style.css"; // Import styles globally

import { boot } from "quasar/wrappers";
import { Carousel3dPlugin } from "@nanoandrew4/vue3-carousel-3d";
import { MotionPlugin } from "@vueuse/motion";


// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  app.use(Carousel3dPlugin);
  app.use(MotionPlugin);
});
