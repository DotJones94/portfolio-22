<script>
import skillItem from './skill-item.vue'
export default {
  components: { skillItem },
    props: {
        skill : Object,
    },
    data(){
        return{
            hover : false,
        }
    }
}
</script>
<template>
    <div class="skill-block"
     @mouseover="hover = true" @mouseleave="hover = false"
     :class="{'active' : hover}">
        <img :scr="skill.image" class="" />
        <div class="heading__six">{{skill.name}}</div>
        <div class="skill-block__amounts">
            <skill-item v-for="skill in skill.skills" :key="skill.id" :skillItem="skill" />
        </div>
    </div>
</template>