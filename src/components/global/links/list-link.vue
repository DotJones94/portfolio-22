<script>
    import Arrow from '../icons/arrow.vue';

    export default {
        props: {
            currentRoleId : Number, 
            id : Number,
        },
        components: {
            Arrow,
        },
        methods:{
            changeCurrentRole(){
                this.$emit('changeCurrentRole', this.id);
            }
        }

    }
</script>

<template>
    <div class="list-link"
         :class="{'list-link--active' : currentRoleId === id}"
         @click="changeCurrentRole">
        <!-- Icon -->
        <Arrow class="list-link__arrow" />
        <!-- Link -->
        <div class="list-link__text "><slot></slot></div>
    </div>
</template>