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
    <div >
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
    created () {
        window.addEventListener('scroll', this.navigationChange);
    },
    destroyed () {
        window.removeEventListener('scroll', this.navigationChange);
    },
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
    },
    methods: {
        navigationChange(){
            let home = Math.ceil(document.getElementById('home').getBoundingClientRect().top);
            let experience = Math.ceil(document.getElementById('experience').getBoundingClientRect().top);
            let skills = Math.ceil(document.getElementById('skills').getBoundingClientRect().top);
            let qualifications = Math.ceil(document.getElementById('qualifications').getBoundingClientRect().top);
            let contactMe = Math.ceil(document.getElementById('contact-me').getBoundingClientRect().top);


            if(home >= 0 && home < 50) 
                this.$store.commit('changeSection', {
                    newSectionName: 'home'
                })

            if(experience > 0 && experience < 50) 
                this.$store.commit('changeSection', {
                    newSectionName: 'experience'
                })

            if(skills > 0 && skills < 50) 
                this.$store.commit('changeSection', {
                    newSectionName: 'skills'
                })
            
            if(qualifications > 0 && qualifications < 50) 
                this.$store.commit('changeSection', {
                    newSectionName: 'qualifications'
                })
            
            if(contactMe > 0 && contactMe < 50) 
                this.$store.commit('changeSection', {
                    newSectionName: 'contact-me'
                })
        },
    }
}
</script>
