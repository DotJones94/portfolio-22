<script>
export default {
    props: {
        skill : Object
    }
}
</script>
<template>
    <div class="skill-block">
        <img :scr="skill.image" class="" />
        <div class="heading__six">{{skill.name}}</div>
        <div class="skill-block__amounts">
            <div v-for="skill in skill.skills" :key="skill.id" class="amount"> 
                <div class="amount__percentage">{{skill.percentage}}</div>
                <div class="amount__name heading__five">{{skill.name}}</div>
            </div>
        </div>
        
    </div>
</template>