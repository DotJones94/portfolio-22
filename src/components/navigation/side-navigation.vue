<script>
    import Home from './icons/home.vue'
    import Briefcase from './icons/breifcase.vue'
    import Medal from './icons/medal.vue';
    import Brush from './icons/brush.vue';
    import Percentage from './icons/percentage.vue'
    import Message from './icons/message.vue'

    export default {
        components: {
            Home,Briefcase, Medal, Brush, Percentage, Message,
        }
    }
</script>

<template>
    <div class="navigation__wrapper">
        <div class="navigation">
            <div class="navigation__link navigation__link--active ">
                <home />
                <span class="link__text">Home</span>
            </div>

            <div class="navigation__link">
                <briefcase />
                <span class="link__text">Experience</span>
            </div>

            <div class="navigation__link">
                <percentage />
                <span class="link__text">Skills</span>
            </div>

            <div class="navigation__link">
                <brush/>
                <span class="link__text">Portfolio</span>
            </div>

            <div class="navigation__link">
                <medal/>
                <span class="link__text">Qualifications</span>
            </div>

            <div class="navigation__link">
                <message />
                <div class="link__text">Contact Me</div>
            </div>
        </div>
    </div>
   
</template>