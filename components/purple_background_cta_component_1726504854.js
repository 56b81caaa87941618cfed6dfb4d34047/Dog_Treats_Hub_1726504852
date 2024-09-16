<!-- 
INSTRUCTION: Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
INSTRUCTION: It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
-->

<template>
  <section id="cta-section-container" class="bg-blue-500">
    <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6 bg-blue-500"></div> <div id="content" class="max-w-3xl mx-auto text-center" style=""><div id="content-subtitle" class="flex"><div id="content-subtitle-text" class="flex-1 font-medium bg-clip-text pb-3 text-transparent bg-gradient-to-r from-purple-500 to-purple-200" style="">
              Explore Our Pawsome Treats Collection
            </div></div> <div id="content-title-container" class="flex"><h2 id="content-title" class="flex-1 h2 bg-clip-text pb-4 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60" style="">
              Treat Your Pup to Tail-Wagging Goodness
            </h2></div> <div id="content-body-container" class="flex" style=""><p id="content-body" data-mf-new="true" class="flex-1 text-lg mb-8 text-slate-400" style="">
              discover our treats!</p></div> <div class="flex flex-col items-center">
            <a id="content-cta-button" href="#0" class="btn transition duration-150 ease-in-out group text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white mb-4">
              Get Started
            </a>
            <button id="alert-button" class="btn transition duration-150 ease-in-out group text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 rounded-lg px-4 py-2 shadow-lg" @click="showAlert">
              <i class="bx bx-bell mr-2"></i>
              Show Alert
            </button>
</template>

<script>
export default {
  name: "PurpleBackgroundCtaComponent",
  data() {
    return {
      expanded: false,
      tab: null
    };
  },
  methods: {
    // Alert method
    showAlert() {
      alert("This is an alert triggered by the button!");
    }
    // End of Alert method
  }
};
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>