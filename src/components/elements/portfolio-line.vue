<script>
export default {
    props: {
        name: String,
        year: String, 
        program: String, 
        type: String,
        description: String, 
        images : Array, 
    },
    data(){
        return{
            hover : false,
            circle : null,
            displayDesc : false,
        }
    },
    mounted() {
        this.circle = document.getElementById('circle');
    },
    methods: {
        mouseMove(event) {
            //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
            try {
                //PageX and PageY return the position of client's cursor from top left of screen
                var x =  event.clientX ;
                var y =  event.clientY;
            } catch (event) {console.log('here')}
            //set left and top of div based on mouse position
            this.circle.style.left = x - 200 + "px";
            this.circle.style.top = y - 200 + "px";
        },
    }
}
</script>
<template>
    <div class="portfolio-line portfolio__text" 
        @mouseenter="hover = true" 
        @mouseleave="hover = false"
        @mousemove="mouseMove"
        @click="displayDesc = !displayDesc">

        <div class="portfolio-line__header">
            <!-- Name -->
            <div class="portfolio__text--name">{{name}}</div>

            <!-- Year -->
            <div>{{year}}</div>

            <!-- Program -->
            <div>{{program}}</div>

            <!-- Type -->
            <div>{{type}}</div>

        </div>
        
        <!-- Main image -->
        <div class="portfolio-line__main-image" v-show="hover" id="circle"></div>
        
        <div class="portfolio-line__description" v-if="displayDesc">
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