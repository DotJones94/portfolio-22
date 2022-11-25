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
                <div class="amount__percentage--text">{{skill.percentage}}</div>
                <div class="amount__percentage">
                    <svg viewBox="0 0 4.5 4.5" xmlns="http://www.w3.org/2000/svg">
                        <!-- Lower circle -->
                        <circle cx="2.25" cy="2.25" r="2" 
                        fill="transparent" stroke="rgba(255,255,255,0.3)"
                        stroke-width="0.35" />
                        <!-- Actual circle -->  
                        <circle cx="2.25" cy="2.25" r="2" 
                        fill="transparent" stroke="rgba(255,255,255,1)" 
                        stroke-width="0.5" 
                        :stroke-dasharray="skill.strokeDasharray" 
                        stroke-linecap="round" transform="rotate(-90 2.25 2.25)" />
                    </svg>
                </div>
                <div class="amount__name heading__five">{{skill.name}}</div>
            </div>
        </div>
        
    </div>
</template>