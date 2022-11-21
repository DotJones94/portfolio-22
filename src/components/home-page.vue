<script setup>
import LandingPage from './page-sections/landing-page.vue'
import SideNavigation from './navigation/side-navigation.vue';
import Experience from './page-sections/experience.vue';
import Skills from './page-sections/skills.vue';
import Qualifications  from './page-sections/qualifications.vue';
import ContactMe  from './page-sections/contact-us.vue';
import { mapState } from 'vuex';
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
        <div class="pages">
            <LandingPage id="home"/>
            <Experience id="experience"/>
            <skills id="skills" />
            <Qualifications id="qualifications"/>
            <ContactMe id="contact-me"/>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        ...mapState({
            activeSection: "activeSection"
        })
    },
    watch: {
        activeSection : function(newSectionName){
            const element = document.getElementById(newSectionName);

            if(element) element.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
    }
}
</script>
