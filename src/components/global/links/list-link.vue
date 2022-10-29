<script>
    import Arrow from '../icons/arrow.vue';

    export default {
        components: {
            Arrow,
        },
    }
</script>

<template>
    <div class="list-link">
        <!-- Icon -->
        <Arrow class="list-link__arrow" />
        <!-- Link -->
        <div class="list-link__text "><slot></slot></div>
    </div>
</template>