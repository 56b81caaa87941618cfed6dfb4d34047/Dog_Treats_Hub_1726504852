<!-- 
INSTRUCTION: Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
INSTRUCTION: It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
-->

<template>
  <section id="cta-section-container" style=""><div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6 bg-white"><div id="content-container" class="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden" style=""><div id="radial-gradient" aria-hidden="true" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"><div id="radial-gradient-outer" class="bg-purple-500 absolute inset-0 translate-z-0 rounded-full blur-[120px] opacity-70"></div> <div id="radial-gradient-inner" class="absolute w-1/4 h-1/4 translate-z-0 rounded-full blur-[40px] bg-purple-400"></div></div> <div id="blurred-shape" aria-hidden="true" class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10"><svg xmlns="http://www.w3.org/2000/svg" width="434" height="427"><defs><linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%"><stop offset="0%" class="#A855F7"></stop> <stop offset="100%" stop-opacity="0" class="6366F1"></stop></linearGradient></defs>  / contenteditable="true"&gt;
          </svg></div> <div id="content" class="max-w-3xl mx-auto text-center" style=""><div id="content-subtitle" class="flex"><div id="content-subtitle-text" class="flex-1 font-medium bg-clip-text pb-3 text-transparent bg-gradient-to-r from-purple-500 to-purple-200" style="">
              Explore Our Pawsome Treats Collection
            </div></div> <div id="content-title-container" class="flex"><h2 id="content-title" class="flex-1 h2 bg-clip-text pb-4 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60" style="">
              Treat Your Pup to Tail-Wagging Goodness
            </h2></div> <div id="content-body-container" class="flex" style=""><p id="content-body" class="flex-1 text-lg mb-8 text-slate-400" style="" data-mf-new="true">
              Discover our premium selection of delicious and nutritious dog traaaeats that will make your furry friend's day!
            </p></div> <a id="content-cta-button" href="#0" class="btn transition duration-150 ease-in-out group text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white">
            Get Started
            <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-purple-500">-&gt;</span></a> <button id="alert-button" class="btn mt-4 transition duration-150 ease-in-out group text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 rounded-lg px-4 py-2 shadow-lg" style=""><i class="bx bx-bell mr-2"></i>
            Show Alert
          </button> <img id="new-image" src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Dog_Treats_Hub_1726504852/main/images/5698945cbb4944c28ba81fec8f9746d1.jpeg" alt="Dog treats" class="mt-8 rounded-lg shadow-lg w-full max-w-md mx-auto"></div></div></div></section>
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