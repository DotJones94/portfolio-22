<template>
    <div class="full_page landing-page">
        <!-- Heading of my name -->
        <h1 class="heading__main landing-page__heading landing-page__layer">
            Kelly Dot Jones
        </h1>

        <!-- Background circle -->
        <div class="landing-page__layer">
            <div class="landing-page__background-circle"></div>
        </div>

        <!-- Image of plant -->

        <!-- Bees -->
        <div class="landing-page__bees landing-page__layer">
            <div v-for="index in 4" :key="index" class="landing-page__bees--single">
                <img src="../../assets/images/bee_template.png" alt="bee template" />
            </div>
        </div>

        <!-- Welcome note -->
        <div class="landing-page__welcome-note">
            <div class="line_breaker"></div>
            <h2 class="heading__two">Welcome to my portfolio</h2>
            <div class="description">Something short sweet and a little funny, like a quote or something that shows a little bit more about me</div>
            <div class="btn btn--main ">
                <div class="btn--circle"></div>
                <div>
                    <span>Icon</span>
                    <span class="link__text link__text--btn">Drop me an email</span>
                </div>
                
            </div>
        </div>
    </div>
    
</template>
