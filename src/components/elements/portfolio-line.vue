<script>
export default {
    props: {
        name: String,
        year: String, 
        program: String, 
        type: String,
        description: String, 
        images : Array, 
        index: Number
    },
    data(){
        return{
            hover : false,
            circle : null,
            displayDesc : false,
        }
    },
    mounted() {
        this.circle = document.getElementById('circle'+this.index);
    },
    computed: {
        image(){
            if(this.images)
                return new URL(`../../assets/images/portfolio/${this.images[0]}`, import.meta.url).href
            
            
            //return require('@/assets/images/portfolio/innocent01.jpg')
        },
        descriptionShow(){
            if(this.displayDesc) return 'portfolio-line__description--show';
            else return 'portfolio-line__description--hide';
        }
    },
    methods: {
        mouseMove(event) {
            //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
            try {
                //PageX and PageY return the position of client's cursor from top left of screen
                var x =  event.clientX ;
                // var y =  event.clientY;
            } catch (event) {console.log('here')}
            //set left and top of div based on mouse position
            this.circle.style.left = x - 200 + "px";
            // this.circle.style.top = y - 200 + "px";
        },
    }
}
</script>
<template>
    <div class="portfolio-line portfolio__text" 
        @mousemove="mouseMove"
        @mouseenter="hover = true" 
        @mouseleave="hover = false">

        <div class="portfolio-line__header" 
        @click="displayDesc = !displayDesc">
            <!-- Name -->
            <div class="portfolio__text--name">{{name}}</div>

            <!-- Year -->
            <div class="portfolio__text--year">{{year}}</div>

            <!-- Program -->
            <div class="portfolio__text--program">{{program}}</div>

            <!-- Type -->
            <div class="portfolio__text--type">{{type}}</div>

        </div>
        
        <!-- Main image -->
        <div class="portfolio-line__main-image" 
            v-show="hover" 
            :id="'circle'+index"
            :style="{ 'background-image': 'url(' + image + ')' }">
            <!-- <img src='../../assets/images/portfolio/innocent01.jpg' class="portfolio-line__main-image"/> -->
        </div>
        
        <div class="portfolio-line__description" 
            :class="descriptionShow">
            <!-- image / video  -->
            <div class="description__images">
                <div class="description__images--circle"></div>
                <div class="description__images--circle"></div>
                <div class="description__images--circle"></div>
            </div>

            <!-- Description  -->
            <div class="description__text">{{description}}</div>
        </div>
    </div>
</template>