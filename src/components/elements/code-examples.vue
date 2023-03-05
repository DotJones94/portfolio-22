<script>
export default {
    props: {
        example : Object
    },
    data(){
        return{
            hover: false
        }
    },
    methods: {
        getPotImage(){
            return new URL(`../../assets/images/hexagon.png`, import.meta.url).href;
        },
        getImage(imageName){
            return new URL(`../../assets/images/lanuage-logos/${imageName}`, import.meta.url).href;
        },
    },
}
</script>
<template>
    <div class="code-example" :style="{ 'background-image': 'url(' + getPotImage() + ')' }" v-if="example"
    :href="example.link" target="_blank">

    <a>
        <div class="code-example__title">{{ example.name }}</div>

        <div class="code-example__logo-wrapper">
            <div v-for="pic in example.langPics" :key="pic.id" class="code-example__logo" 
            :style="{ 'background-image': 'url(' + getImage(pic) + ')' }"></div>
        </div> 
    </a>
</div>
</template>
