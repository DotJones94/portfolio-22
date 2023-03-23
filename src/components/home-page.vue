<script setup>
import LandingPage from './page-sections/landing-page.vue'
import SideNavigation from './navigation/side-navigation.vue';
import Experience from './page-sections/experience.vue';
import Skills from './page-sections/skills.vue';
import Qualifications  from './page-sections/qualifications.vue';
import ContactMe  from './page-sections/contact-us.vue';
import Portfolio from './page-sections/portfolio.vue';
import codeProjects from './page-sections/code-projects.vue';
import { mapState } from 'vuex';
import Bee from './elements/bee.vue';
</script>

<template>
    <div ref="full" class="full"  @mousemove="moveCircle">
        <!-- Hive Background -->
        <div class="background--honey" v-if="fullyLoaded"></div> 
        <div id="background--circle" class="circle" v-show="fullyLoaded" ></div>

        <!-- Laoding -->
        <div class="circle__wrapper full-layer" v-if="!fullyLoaded">
            <div class="circle-loading circle-loading__outer" :class="{'circle-loading--loaded' : loaded}" ></div>
            <div class="circle-loading circle-loading__inner"  :class="{'circle-loading--loaded' : loaded}"></div>
            <div class="circle-loading circle-loading__inner-most" :class="{'circle-loading--loaded' : loaded}" ></div>
        </div>

        <div class="loading-wrapper" v-if="!fullyLoaded">
            <div class="loading-layer" :class="{'loading-layer--loaded' : loaded}"></div>
        </div>

        <!-- Bees -->
        <div class="bees full-layer" v-if="fullyLoaded" > 
               <Bee v-for="index in 7" :key="index" class="bee bee--left" :style="{top: getRandomNumberTop(index)}"/>
               <Bee  v-for="index in 7" :key="index" class="bee bee--right" :style="{top: getRandomNumberTop(index)}"/>
        </div>

        <SideNavigation v-if="fullyLoaded"/>

        <div class="pages" v-if="fullyLoaded">
            <LandingPage id="home"/>
            <Experience id="experience"/>
            <code-projects id="code-projects"/>
            <skills id="skills"/>
            <Portfolio id="portfolio" />
            <Qualifications id="qualifications"/>
            <ContactMe id="contact-me"/>
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

        setTimeout(() => { this.loaded = true;}, "2000");
        setTimeout(() => { this.fullyLoaded = true;}, "3000");
        

        this.circle = document.getElementById('background--circle');
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
            loaded: false,
            fullyLoaded: false,
            windowWitdth : window.innerWidth-60,
            windowHeight: 0,
            circle: null
        };
    },
    methods: {
        navigationChange() {
            let home = Math.ceil(document.getElementById("home").getBoundingClientRect().top);
            let experience = Math.ceil(document.getElementById("experience").getBoundingClientRect().top);
            let codeProjects = Math.ceil(document.getElementById("code-projects").getBoundingClientRect().top);
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
            if (codeProjects > 0 && codeProjects < 50)
                this.$store.commit("changeSection", {
                    newSectionName: "code-projects"
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
        getRandomNumberTop(index) {
            switch(index){
                case 1 : return Math.random() * (900 - 0 + 1) + 0 + 'px';
                case 2 : return Math.random() * (1600 - +900 + 1) + 900 + 'px';
                case 3 : return Math.random() * (2500 - 1600 + 1) + 1600 + 'px';
                case 4 : return Math.random() * (3500 - 2500 + 1) + 2500 + 'px';
                case 5 : return Math.random() * (4500 - 3500 + 1) + 3500 + 'px';
                case 6 : return Math.random() * (5500 - 4500 + 1) + 4500 + 'px';
                case 7 : return Math.random() * (6500 - 5500 + 1) + 5500 + 'px';
            }

            return Math.random() * 5500 + 'px';
        },
        moveCircle(e){
            this.circle.style.left = e.clientX - 100 + 'px';
            this.circle.style.top = e.clientY - 100 + 'px';
        }
    },
    components: { Bee }
}
</script>
