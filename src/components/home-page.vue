<script setup>
import LandingPage from './page-sections/landing-page.vue'
import SideNavigation from './navigation/side-navigation.vue';
import Experience from './page-sections/experience.vue'
</script>

<template>
    <div>
        <!-- Bees -->
        <div class="bees full-layer">
            <div v-for="index in 4" :key="index" class="landing-page__bees--single">
                <img src="../assets/images/bee_template.png" alt="bee template" />
            </div>
        </div>

        <SideNavigation/>
        <LandingPage/>
        <Experience/>
    </div>
</template>
