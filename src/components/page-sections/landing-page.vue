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
            }
        },
        mounted() {
         
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
                <div class="landing-page__welcome-note top__navigation" >
                    <div class="line_breaker"></div>
                    <div><h2 class="heading__two">Welcome to my portfolio</h2></div>
                    <div class="description">Something short sweet and a little funny, like a quote or something that shows a little bit more about me</div>
                    <a class="btn btn--main" href = "mailto:kellydotjones@gmail.com">
                        <div class="btn__circle"></div>
                        <div class="btn__text">
                            <send class="btn__icon"/>
                            <span class="link__text link__text--btn">Drop me an email</span>
                        </div>
                    </a>
                </div>
            </div>           
        </div>
    
        <!-- Background circle -->
        <div class="full-layer full-layer--background">
            <div class="landing-page__background landing-page__background--circle"></div>
        </div>

        <!-- Image of plant -->
        <div class="full-layer full-layer--background full-layer--background-plant" >
            <palm class="landing-page__background landing-page__background--plant"/>
        </div>
        
    </div>
    
</template>
