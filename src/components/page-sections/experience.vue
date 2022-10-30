<script>
    import ListLink from '../global/links/list-link.vue';

    export default {
        emits: ["changeCurrentRole"],
        components: {
            ListLink,
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
                        role: 'Software Developer'
                    },
                    {
                        id: 2,
                        yearFrom: '2018', 
                        yearTo: '2020',
                        role: 'Co-Founder & CTO'
                    },
                    {
                        id: 3,
                        yearFrom: '2013', 
                        yearTo: '2020',
                        role: 'Freelance Developer'
                    },
                    {
                        id: 4,
                        yearFrom: '2017', 
                        yearTo: '2017',
                        role: 'Events Co-Ordinator'
                    }
                ],
                activeRoleID : 1,
            }
        },
        methods:{
            changeCurrentRole(newId){
                this.activeRoleID = newId;
            }
        }
    }
</script>

<template>
    <div class="full_page exp">
    
        <div class="exp__navigation-wrapper full-layer">
            <!-- Image of plant -->
            <div></div>

            <!-- Navigation links -->
            <div class="exp__navigation">
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
         <div class="exp__content full-layer">
                <!-- Circle -->
                <div class="content__circle">
                    <img class="content__logo" />
                    <div class="content__text">
                        <div class="heading_six">
                            From {{activeExperience.yearFrom}} -  {{activeExperience.yearTo}}
                        </div>
                    </div>
                </div>
            </div>

    </div>
    
</template>