<!--
INSTRUCTION: Summary: The blank component contains the following two parts:
INSTRUCTION: - To the left: There is an empty div with text on top and bottom.
INSTRUCTION: - To the right: There is an empty div.
INSTRUCTION:
INSTRUCTION: If the user asks you to insert components left and right of each other, first wrap them into `<div><link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"> <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"> <section id="blank-section" class="bg-white dark:bg-gray-900 flex-1" style=""><div id="blank-container" class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28" style=""><div class="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 m-4" style=""><h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white" style="" data-mf-new="true">Delicious Treats</h2> <p class="text-gray-600 dark:text-gray-300 mb-4">
                        Treat your furry friend to the best with our premium dog treats. Made with all-natural ingredients, these tasty morsels are perfect for training, rewarding, or simply showing your pup some extra love.
                    </p> <ul class="list-disc list-inside text-gray-600 dark:text-gray-300"><li>High-quality, nutritious ingredients</li> <li>Variety of flavors to suit every dog's taste</li> <li>Ideal for dogs of all sizes and breeds</li> <li>Promotes dental health and fresh breath</li></ul></div></div></section></div>` and then use the following syntax:
INSTRUCTION: <div class="grid">
INSTRUCTION:     <!-- these components appear to the left side -->
INSTRUCTION:     <div id="left-side-container" class="flex"> Left side part here </div>
INSTRUCTION:
INSTRUCTION:     <!-- these components appear to the right side -->
INSTRUCTION:     <div id="right-side-container" class="flex"> Right side part here</div>
INSTRUCTION: </div>
-->
<template>
    <div>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <section id="blank-section" class="bg-white dark:bg-gray-900 flex-1">
            <div id="blank-container" class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                <div class="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 m-4">
                    <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Delicious Dog Treats</h2>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                        Treat your furry friend to the best with our premium dog treats. Made with all-natural ingredients, these tasty morsels are perfect for training, rewarding, or simply showing your pup some extra love.
                    </p>
                    <ul class="list-disc list-inside text-gray-600 dark:text-gray-300">
                        <li>High-quality, nutritious ingredients</li>
                        <li>Variety of flavors to suit every dog's taste</li>
                        <li>Ideal for dogs of all sizes and breeds</li>
                        <li>Promotes dental health and fresh breath</li>
                    </ul>
                </div>
            </div>
        </section>  
    </div>
</template>

<script>
export default {
    name: "BlankComponent",
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
