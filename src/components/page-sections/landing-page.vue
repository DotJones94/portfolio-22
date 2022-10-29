<script>
    import Send from '../global/icons/send.vue';

    export default {
        components: {
            Send,
        },
    }
</script>

<template>
    <div class="full_page landing-page">
        <!-- Heading of my name -->
        <h1 class="heading__main landing-page__heading full-layer">
            Kelly Dot Jones
        </h1>

        <!-- Background circle -->
        <div class="full-layer">
            <div class="landing-page__background-circle"></div>
        </div>

        <!-- Image of plant -->

        <!-- Welcome note -->
        <div class="landing-page__welcome-note">
            <div class="line_breaker"></div>
            <h2 class="heading__two">Welcome to my portfolio</h2>
            <div class="description">Something short sweet and a little funny, like a quote or something that shows a little bit more about me</div>
            <div class="btn btn--main ">
                <div class="btn__circle"></div>
                <div class="btn__text">
                    <send class="btn__icon"/>
                    <span class="link__text link__text--btn">Drop me an email</span>
                </div>
                
            </div>
        </div>
    </div>
    
</template>
