<script setup>
import LandingPage from './page-sections/landing-page.vue'
import SideNavigation from './navigation/side-navigation.vue';
import Experience from './page-sections/experience.vue';
import Skills from './page-sections/skills.vue';
import Qualifications  from './page-sections/qualifications.vue';
import ContactMe  from './page-sections/contact-us.vue';
import Portfolio from './page-sections/portfolio.vue'
import { mapState } from 'vuex';
import Bee from './elements/bee.vue';
</script>

<template>
    <div ref="full">
        <!-- Laoding -->
        <div class="circle__wrapper full-layer">
            <div class="circle circle__outer" :class="{'circle--loaded': loading}"></div>
            <div class="circle circle__inner" :class="{'circle--loaded': loading}"></div>
            <div class="circle circle__inner-most" :class="{'circle--loaded': loading}"></div>
        </div>

        <!-- Bees -->
        <div class="bees full-layer" v-if="loading" > 
               <Bee v-for="index in 7" :key="index" class="bee bee--left" :style="{top: getRandomNumberTop(), left: getRandomNumberLeft()}"/>
               <Bee  v-for="index in 7" :key="index" class="bee bee--right" :style="{top: getRandomNumberTop(), left: getRandomNumberRight()}"/>
        </div>

        <SideNavigation v-if="loading"/>
        <div class="pages">
            <LandingPage id="home" v-if="loading"/>
            <Experience id="experience" v-if="loading"/>
            <skills id="skills" v-if="loading"/>
            <Portfolio id="portfolio" v-if="loading"/>
            <Qualifications id="qualifications" v-if="loading"/>
            <ContactMe id="contact-me" v-if="loading"/>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        window.addEventListener("scroll", this.navigationChange);
    },
    mounted() {
        console.log(this.$refs.full.scrollHeight);
        this.windowHeight = this.$refs.full.clientHeight;
        this.loading = true;
    },
    computed: {
        ...mapState({
            activeSection: "activeSection"
        })
    },
    watch: {
        activeSection: function (newSectionName) {
            const element = document.getElementById(newSectionName);
            if (element)
                element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    },
    data() {
        return {
            loading: false,
            windowWitdth : window.innerWidth-60,
            windowHeight: 0
        };
    },
    methods: {
        navigationChange() {
            let home = Math.ceil(document.getElementById("home").getBoundingClientRect().top);
            let experience = Math.ceil(document.getElementById("experience").getBoundingClientRect().top);
            let skills = Math.ceil(document.getElementById("skills").getBoundingClientRect().top);
            let qualifications = Math.ceil(document.getElementById("qualifications").getBoundingClientRect().top);
            let contactMe = Math.ceil(document.getElementById("contact-me").getBoundingClientRect().top);
            if (home >= 0 && home < 50)
                this.$store.commit("changeSection", {
                    newSectionName: "home"
                });
            if (experience > 0 && experience < 50)
                this.$store.commit("changeSection", {
                    newSectionName: "experience"
                });
            if (skills > 0 && skills < 50)
                this.$store.commit("changeSection", {
                    newSectionName: "skills"
                });
            if (qualifications > 0 && qualifications < 50)
                this.$store.commit("changeSection", {
                    newSectionName: "qualifications"
                });
            if (contactMe > 0 && contactMe < 50)
                this.$store.commit("changeSection", {
                    newSectionName: "contact-me"
                });
        },
        getRandomNumberTop() {
            return Math.random() * 5500 + 'px';
        },
        getRandomNumberLeft(){
            return Math.random() * (this.windowWitdth/2) + 0 + 'px';
        },
        getRandomNumberRight(){
            return Math.random() * (this.windowWitdth) + this.windowWitdth/2 + 'px';
        }

    },
    components: { Bee }
}
</script>
