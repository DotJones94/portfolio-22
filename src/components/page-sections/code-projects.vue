<script>
    import lanuagePill from '../elements/lanuage-pill.vue';
    import codeExamples from '../elements/code-examples.vue';
    import TicTacToe from '../elements/example-codes/tic-tac-toe.vue';
import { KinesisContainer } from 'vue-kinesis';
import AdvancedStyling from '../elements/example-codes/advanced-styling.vue';
import VueTesting from '../elements/example-codes/vue-testing.vue';
import Portfolio2020 from '../elements/example-codes/portfolio-2020.vue';
import Portfolio2023 from '../elements/example-codes/portfolio-2023.vue';

    export default {
        components: {
            lanuagePill,
            codeExamples,
            KinesisContainer,
            TicTacToe,AdvancedStyling, VueTesting, Portfolio2020,Portfolio2023
        },
        data(){
            return{
                lanuages: [
                    { id: 1, name: 'PHP',logo: 'php.png' },
                    { id: 2, name: 'Vue',logo: 'vue.png' },
                    { id: 3, name: 'HTML', logo: 'html.svg'},
                    { id: 4, name: 'CSS', logo: 'css.png'},
                    { id: 5, name: 'JQuery', logo: 'jquery.svg'},
                    { id: 6, name: 'Sass', logo: 'sass.png'},
                ],
                codeExamples: [
                    {imageName: 'tic-tac-toe.svg', langPics: ['vue.png', 'html.svg', 'css.png'], link: 'https://github.com/DotJones94/tic-tac-toe'},
                    {imageName: 'vue-testing.svg', langPics: ['vue.png',], link: 'https://github.com/DotJones94/vue-testing'},
                    {imageName: 'advanced-css-sass.svg', langPics: ['html.svg', 'css.png', 'sass.png'], link: 'https://github.com/DotJones94/advanced-css-and-sass-course'},
                    {imageName: 'portfolio-2023.svg', langPics: ['html.svg', 'css.png', 'sass.png', 'vue.png'], link: 'https://github.com/DotJones94/portfolio-22'},
                    {imageName: 'portfolio-2020.svg', langPics: ['html.svg', 'css.png', 'php.png'], link: 'https://github.com/DotJones94/portfolio'},
                ]
            }
        },
        mounted() {
         
        },
        methods:{
            getImage(imageName){
                return new URL(`../../assets/images/code-examples/${imageName}`, import.meta.url).href;
            },
        }
    }

</script>

<template>
    <div class="full_page code-projects">

        <div class="header-wrapper">
            <!-- Image of plant -->
            <div>
            </div>

            <!-- Navigation links -->
            <div class="top__navigation">
                <div class="line_breaker"></div>
                <h2 class="heading__two">Code Examples</h2>
            </div>
        </div>

        <!-- Lanuages Pills -->
        <div class="code-projects__pills-wrapper">
            <div class="code-projects__pills">
                <lanuage-pill v-for="lang in lanuages" :key="lang.id" :lanuage="lang" />
            </div>
        </div>

        <!-- Code examples -->
        <div class="code-projects__wrapper">
            <KinesisContainer class="code-projects__examples-wrapper">
                <a v-for="(example, index) in codeExamples" :key="example.id"
                :href="example.link" target="_blank" >
                    <kinesis-element 
                        :strength="-10 + (index*2)"
                        transformOrigin="50% 400%"
                        axis="y"
                        type="translate">
                            <TicTacToe v-if="index === 0" class="example__image"/>
                            <vue-testing v-if="index === 1" class="example__image" />
                            <advanced-styling v-if="index === 2" class="example__image" />
                            <portfolio-2020 v-if="index === 3" class="example__image" />
                            <portfolio-2023 v-if="index === 4" class="example__image" />
                    </kinesis-element>
                </a>
            </KinesisContainer>
        </div>
    </div>
    
</template>
