<script>
export default {
    props: {
        lanuage : Object
    },
    data(){
        return{
            hover: false
        }
    },
    methods: {
        getImage(imageName){
            return new URL(`../../assets/images/lanuage-logos/${imageName}`, import.meta.url).href;
        },
    },
}
</script>
<template>
    <div class="lanuage-pill">
       <div class="lanuage-pill__logo" 
            :style="{ 'background-image': 'url(' + getImage(lanuage.logo) + ')' }"></div>
        <div class="lanuage-pill__name"> {{ lanuage.name }} </div>
    </div>
</template>