<script>
import VideoPlay from '../global/icons/video-play.vue'
import None from '../global/icons/none.vue'
import Download from '../global/icons/download.vue'
export default {
    components:{
        VideoPlay, None, Download
    },
    props: {
        name: String,
        year: String, 
        program: String, 
        type: String,
        description: String, 
        images : Array, 
        index: Number,
        content: Array,
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
        this.displayDesc = false;
    },
    computed: {
        image(){
            if(this.images)
                return this.getImage(this.images[0]);
        },
        descriptionShow(){
            if(!this.displayDesc) return '';
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
        },
        getSrc(srcName){
            return new URL(`../../assets/portfolio/${srcName}`, import.meta.url).href;
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
        
        <div class="portfolio-line__description portfolio-line__description--show" v-if="displayDesc">
            <!-- image / video  -->
            <div class="description__images">
                <div class="description__images--circle"
                    v-for="imageMore in images.slice(1)" :key="imageMore"
                    :style="{ 'background-image': 'url(' + getImage(imageMore) + ')' }"></div>
            </div>

            <!-- Description  -->
            <div class="description__text">
                {{description}}
                <div class="description__links">
                    <div v-for="link in content" :key="link">
                        <div @click="$emit('showModalTrue', link.link, link.type)"  
                        v-if="link.type === 'video'"
                        class="description__links--link">
                            <VideoPlay class="description__links--icon" />
                            {{link.linkName}}
                        </div>
                        <div v-if="link.type === 'none'" class="description__links--link">
                            <None  class="description__links--icon-none" />
                            {{link.linkName}}
                        </div>
                        <a v-if="link.type === 'download'" class="description__links--link"
                            :href="getSrc(link.link)" download>
                            <Download class="description__links--icon-none" />
                            {{link.linkName}}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>