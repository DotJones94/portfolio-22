<script>
    import SkillBlock from '../elements/skill-block.vue';
    import potPlant from '../../assets/images/bottom-images/pot-plant-1.vue';

    export default {
        emits: ["changeCurrentRole"],
        components: {
            SkillBlock, potPlant,
        },
        computed:{
            activeExperience(){
                return this.prevExperience.find(el => el.id === this.activeRoleID);
            }
        },
        data(){
            return {
                skills : [
                    {
                        id: 1,
                        name: 'Creative Tools',
                        image: '',
                        skills: [
                            {
                                name: 'Figma',
                                percentage: 70,
                                strokeDasharray: "7.5 100",
                                subItems: 'Wireframes & prototyping',
                            },
                            {
                                name: 'Adobe Suite',
                                percentage: 80,
                                strokeDasharray: "10 100",
                                subItems: 'PS, AI, FL, AE, XD, ID, PR',
                            },
                            {
                                name: '3Ds Max',
                                percentage: 70,
                                strokeDasharray: "7.5 100",
                                subItems: 'Modeling & Animation',
                            },
                            {
                                name: 'Unity',
                                percentage: 75,
                                strokeDasharray: "8.9 100",
                                subItems: 'Game dev, film, VR',
                            },
                        ]
                    },
                    {
                        id: 2,
                        name: 'Web Development',
                        image: 'www.png',
                        skills: [
                            {
                                name: 'HTML/CSS',
                                percentage: 95,
                                strokeDasharray: "11.2 100",
                                subItems: 'HTML 5, Sass',
                            },
                            {
                                name: 'Javascript',
                                percentage: 85,
                                strokeDasharray: "10.5 100",
                                subItems: 'Vue.js, Jquery',
                            },
                            {
                                name: 'PHP',
                                percentage: 90,
                                strokeDasharray: "11 100",
                                subItems: 'Laravel',
                            },
                        ]
                    },
                    {
                        id: 3,
                        name: 'Software Development',
                        image: '',
                        skills: [
                            {
                                name: 'Java',
                                percentage: 75,
                                strokeDasharray: "8.9 100",
                                subItems: 'Data structure & Algorithms',
                            },
                            {
                                name: 'C++',
                                percentage: 70,
                                strokeDasharray: "7.5 100",
                                subItems: '',
                            },
                            {
                                name: 'c#',
                                percentage: 60,
                                strokeDasharray: "7 100",
                                subItems: 'Game development',
                            },
                        ]
                    },
                   
                    
                ],
                activeSkillID : 2,
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
    <div class="full_page skills">
        <div class="header-wrapper">
            <!-- Image of plant -->
            <div>
              
            </div>

            <!-- Navigation links -->
            <div class="top__navigation">
                <div class="line_breaker"></div>
                <h2 class="heading__two">Skills</h2>
            </div>
        </div>

        <div class="skills__blocks">
            <skill-block v-for="skill in skills"
                @mouseover="this.activeSkillID = skill.id" 
                @mouseleave="this.activeSkillID = 2"    
                :key="skill.id" 
                :skill="skill"
                :class="{'skill-block--active' : this.activeSkillID === skill.id}"/>
        </div>

        <!-- Image of bottom Plant
        <div class="bottom-images bottom-images--skills">
            <pot-plant class="bottom-image"  />
        </div> -->
    </div>
</template>