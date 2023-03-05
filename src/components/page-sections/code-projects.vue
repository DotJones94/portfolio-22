<script>
    import lanuagePill from '../elements/lanuage-pill.vue';
    import codeExamples from '../elements/code-examples.vue';

    export default {
        components: {
            lanuagePill, codeExamples
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
                    {name: 'Tic Tac Toe', langPics: ['vue.png', 'html.svg', 'css.png'], link: 'https://github.com/DotJones94/tic-tac-toe'},
                    {name: 'Vue Testing', langPics: ['vue.png',], link: 'https://github.com/DotJones94/vue-testing'},
                    {name: 'Advanced CSS & Sass', langPics: ['html.svg', 'css.png', 'sass.png'], link: 'https://github.com/DotJones94/advanced-css-and-sass-course'},
                    {name: 'Portfolio 2023', langPics: ['html.svg', 'css.png', 'sass.png', 'vue.png'], link: 'https://github.com/DotJones94/portfolio-22'},
                    {name: 'Portfolio 2020', langPics: ['html.svg', 'css.png', 'php.png'], link: 'https://github.com/DotJones94/portfolio'},
                ]
            }
        },
        mounted() {
         
        },
        methods:{
          
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
            <div class="code-projects__examples-wrapper">
                <code-examples v-for="example in codeExamples" :key="example.id"
                :example="example" />
            </div>
        </div>
    </div>
    
</template>
