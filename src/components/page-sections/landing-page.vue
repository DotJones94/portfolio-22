<script>
    import Send from '../global/icons/send.vue';
    import palm from '../../assets/images/landing-page/palm.vue';

    export default {
        components: {
            Send, palm
        },
        data(){
            return{
                typography : 'heading--loading',
                circle : null,
                loaded: false,
            }
        },
        mounted() {
            setTimeout(() => { this.loaded = true;}, "1500");
        },
        methods:{
          
        }
    }
</script>

<template>
    <div class="full_page landing-page">
        <!-- Content -->
        <div class="full-layer full-layer--background">
            <div class="landing-page__content">
                <!-- Heading of my name -->
                <h1 class="heading__main landing-page__heading"
                    :class="'landing-page__' + typography">
                    <div>Kelly</div>
                    <div>Dot</div>  
                    <div>Jones</div>
                </h1>

                <!-- Welcome note -->
                <div class="landing-page__welcome-note" v-if="loaded" >
                    <div class="line_breaker"></div>
                    <div><h2 class="heading__two">Welcome to my portfolio</h2></div>
                    <div class="description">Hi, I am a full stack developer who has been writing code since 2013, but every day is a school day and learning as I go!
                    </div>
                    <div class="btn btn--main">
                        <a  href = "mailto:kellydotjones@gmail.com">
                            <div class="btn__circle"></div>
                            <div class="btn__text">
                                <send class="btn__icon"/>
                                <span class="link__text link__text--btn">Drop me an email</span>
                            </div>
                        </a>
                    </div>
                    
                </div>
            </div>           
        </div>
    
        <!-- Background circle -->
        <div class="full_page landing-page__circle">
            <div class="landing-page__background landing-page__background--circle"></div>
        </div>

        <!-- Background circle -->
        <div class="full_page landing-page__circle">
            <div class="landing-page__background--circle2"></div>
        </div>

        <!-- Image of plant -->
        <div class="full_page full-layer--background-plant" >
            <palm class="landing-page__background landing-page__background--plant"/>
        </div>
        
    </div>
    
</template>
