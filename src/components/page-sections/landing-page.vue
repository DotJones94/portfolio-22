<template>
    <div class="full_page">
        <!-- Heading of my name -->
        <h1 class="heading__main landing-page__heading landing-page__layer">
            Kelly Dot Jones
        </h1>

        <!-- Background circle -->

        <!-- Image of plant -->

        <!-- Bees -->
        <div class="landing-page__bees landing-page__layer">
            <div v-for="index in 4" :key="index" class="landing-page__bees--single">
                <img src="../../assets/images/bee_template.png" alt="bee template" />
            </div>
        </div>
    </div>
    
</template>
