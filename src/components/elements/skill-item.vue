<script>
export default {
    props: {
        skillItem : Object
    },
    data(){
        return{
            hover: false
        }
    }
}
</script>
<template>
    <div class="skill-item">
        <div class="percentage--text" v-if="hover">{{skillItem.percentage}}%</div> 
        <div class="amount"  @mouseover="hover = true" @mouseleave="hover = false">
            <div class="amount__percentage" >
                <svg viewBox="0 0 4.5 4.5" xmlns="http://www.w3.org/2000/svg">
                    <!-- Lower circle -->
                    <circle cx="2.25" cy="2.25" r="2" 
                    fill="transparent" stroke="rgba(255,255,255,0.3)"
                    stroke-width="0.35" />
                    <!-- Actual circle -->  
                    <circle cx="2.25" cy="2.25" r="2" 
                    fill="transparent" stroke="rgba(255,255,255,1)" 
                    stroke-width="0.5" 
                    :stroke-dasharray="skillItem.strokeDasharray" 
                    stroke-linecap="round" transform="rotate(-90 2.25 2.25)" />
                </svg>
            </div>
            <div class="amount__name ">
                <div class="heading__five">{{skillItem.name}}</div>
                <div class="description">{{skillItem.subItems}}</div>
            </div>
        </div>
    </div>
    
</template>