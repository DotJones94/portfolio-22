<script>
import skillItem from './skill-item.vue'
export default {
  components: { skillItem },
    props: {
        skill : Object,
    },
}
</script>
<template>
    <div class="skill-block">
        <img :scr="'../../assets/images/skills-icons/www.png'"  />
        <div class="heading__six">{{skill.name}}</div>
        <div class="skill-block__amounts">
            <skill-item v-for="skill in skill.skills" :key="skill.id" :skillItem="skill" />
        </div>
    </div>
</template>