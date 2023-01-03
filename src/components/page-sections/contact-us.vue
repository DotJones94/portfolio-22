<script>
    import PotPlant from '../../assets/images/bottom-images/pot-plant-1.vue';
    import Send from '../global/icons/send.vue';
    export default {
        components: {
            PotPlant, Send
        },
    }
</script>
<template>
    <div class="full_page contact-us">
        <!-- Contact -->
        <div class="contact-us__info">
            <div class="contact-us__words">
                <div class="heading__four contact-us__heading">Let's Chat</div>
                <div class="btn btn--main ">
                    <div class="btn__circle"></div>
                    <div class="btn__text">
                        <send class="btn__icon"/>
                        <span class="link__text link__text--btn">Drop me an email</span>
                    </div>
                </div>
            </div>
            
            <div class="contact-us__image-wrapper">
                <PotPlant class="contact-us__image"/>
            </div>
            
        </div>

        <!-- Other links -->
        <div>
            
        </div>
    </div>
</template>