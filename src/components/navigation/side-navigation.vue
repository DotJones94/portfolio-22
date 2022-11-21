<script>
    import Home from '../global/icons/home.vue'
    import Briefcase from '../global/icons/breifcase.vue'
    import Medal from '../global/icons/medal.vue';
    import Brush from '../global/icons/brush.vue';
    import Percentage from '../global/icons/percentage.vue'
    import Message from '../global/icons/message.vue'
    import { mapState } from 'vuex';

    export default {
        components: {
            Home,Briefcase, Medal, Brush, Percentage, Message,
        },
        computed:{
            ...mapState({
                activeSection: "activeSection"
            })
        },
        methods: {
            changeActiveSection(section){
                this.$store.commit('changeSection', {
                    newSectionName: section
                })
            }
        }
    }
</script>

<template>
    <div class="navigation__wrapper">
        <div class="navigation">
            <div class="navigation__link"
                :class="{'navigation__link--active' : activeSection === 'home'}"
                @click="changeActiveSection('home')">
                <home />
                <span class="link__text link__text--navigation">Home</span>
            </div>

            <div class="navigation__link"
                :class="{'navigation__link--active' : activeSection === 'experience'}"
                @click="changeActiveSection('experience')">
                <briefcase />
                <span class="link__text link__text--navigation">Experience</span>
            </div>

            <div class="navigation__link"
                :class="{'navigation__link--active' : activeSection === 'skills'}"
                @click="changeActiveSection('skills')">
                <percentage />
                <span class="link__text link__text--navigation">Skills</span>
            </div>

            <!-- <div class="navigation__link"
                :class="{'navigation__link--active' : activeSection === 'portfolio'}"
                @click="changeActiveSection('portfolio')">
                <brush/>
                <span class="link__text link__text--navigation">Portfolio</span>
            </div> -->

            <div class="navigation__link"
                :class="{'navigation__link--active' : activeSection === 'qualifications'}"
                @click="changeActiveSection('qualifications')">
                <medal/>
                <span class="link__text link__text--navigation">Qualifications</span>
            </div>

            <div class="navigation__link"
                :class="{'navigation__link--active' : activeSection === 'contact-me'}"
                @click="changeActiveSection('contact-me')">
                <message />
                <div class="link__text link__text--navigation">Contact Me</div>
            </div>
        </div>
    </div>
   
</template>