<script>
    import ListLink from '../global/links/list-link.vue';
    import SeeMore from '../global/icons/see-more.vue';
    import SeeMoreExperience from '../elements/experience-show-more.vue';

    export default {
        emits: ["changeCurrentRole"],
        components: {
            ListLink, SeeMore, SeeMoreExperience
        },
        computed:{
            activeExperience(){
                return this.prevExperience.find(el => el.id === this.activeRoleID);
            }
        },
        data(){
            return {
                prevExperience : [
                    {
                        id: 1,
                        yearFrom: '2020', 
                        yearTo: 'Current',
                        role: 'Software Developer',
                        image: 'substantive02.png'
                    },
                    {
                        id: 2,
                        yearFrom: '2018', 
                        yearTo: '2020',
                        role: 'Co-Founder & Technical Director',
                        image : 'mela.svg'
                    },
                    {
                        id: 3,
                        yearFrom: '2013', 
                        yearTo: '2020',
                        role: 'Freelance Developer',
                        image: 'CapitalK.png'
                    },
                    {
                        id: 4,
                        yearFrom: '2017', 
                        yearTo: '2017',
                        role: 'Events Co-Ordinator',
                        image: 'impac.png'
                    }
                ],
                activeRoleID : 1,
                showMore : false,
            }
        },
        methods:{
            changeCurrentRole(newId){
                this.activeRoleID = newId;
            },
            handleFocusOut(){
                this.showMore = false;
            },
            getImage(imageName){
                return new URL(`../../assets/images/experience/${imageName}`, import.meta.url).href;
            },
        }
    }
</script>

<template>
    <div class="full_page exp">
        <div class="exp__navigation-wrapper">
            <!-- Navigation links -->
            <div class="top__navigation">
                <div class="line_breaker"></div>
                <h2 class="heading__two">Developing since 2013</h2>
                <div class="exp__links">
                    <list-link v-for="experience in prevExperience" 
                        :key="experience.id"
                        :currentRoleId="activeRoleID"
                        :id="experience.id"
                        @changeCurrentRole="changeCurrentRole">
                        {{experience.role}}
                    </list-link>
                </div>
            </div>
        </div>
         
         <!-- Content of expereince  -->
         <div class="exp__content"  @focusout="handleFocusOut"
        tabindex="0">
            <!-- Circle -->
            <div :class="[showMore ? 
                        'content__circle--show-more' :
                        'content__circle--logo',  
                        'content__circle']">
            </div>

            <!-- text -->
            <div class="content__text">
                <!-- <img :src="'../../assets/images/experience/' + activeExperience.image" class="content__logo" /> -->
                <img :src="getImage(activeExperience.image)" class="content__logo" />
                <div class="content__text--headings">
                    <div class="heading__five">
                        From {{activeExperience.yearFrom}} -  {{activeExperience.yearTo}}
                    </div>
                    <div class="heading__four">{{activeExperience.role}}</div>
                    <div class="content__button">
                        <div class="btn btn--main " @click="showMore = !showMore">
                            <div class="btn__circle"></div>
                            <div class="btn__text">
                                <seeMore class="btn__icon"/>
                                <span class="link__text link__text--btn" v-show="!showMore">Show more</span>
                                <span class="link__text link__text--btn" v-show="showMore">Show less</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <!-- See More -->
            <div class="exp__see-more" v-if="showMore">
                   <SeeMoreExperience :experience="activeExperience" :key="activeExperience.id"/>
            </div>
        </div>
    </div>
</template>