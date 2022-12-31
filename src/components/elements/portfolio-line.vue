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
                return this.getImage(this.images[0]);
        },
        descriptionShow(){
            if(this.displayDesc) return 'portfolio-line__description--show';
            else return 'portfolio-line__description--hide';
        }
    },
    methods: {
        mouseMove(event) {
            var x =  event.clientX ;
            this.circle.style.left = x - 200 + "px";
        },
        getImage(imageName){
            return new URL(`../../assets/images/portfolio/${imageName}`, import.meta.url).href;
        }
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
            <div class="portfolio__text--name">{{name}}</div>
            <div class="portfolio__text--year">{{year}}</div>
            <div class="portfolio__text--program">{{program}}</div>
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
                <div class="description__images--circle"
                    v-for="imageMore in images" :key="imageMore"
                    :style="{ 'background-image': 'url(' + getImage(imageMore) + ')' }"></div>
            </div>

            <!-- Description  -->
            <div class="description__text">
                {{description}}
                <div><a >View work</a></div>
            </div>
        </div>
    </div>
</template>