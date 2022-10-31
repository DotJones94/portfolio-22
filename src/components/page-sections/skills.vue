<script>
    import SkillBlock from '../elements/skill-block.vue';

    export default {
        emits: ["changeCurrentRole"],
        components: {
            SkillBlock,
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
                            },
                            {
                                name: 'Adobe Suite',
                                percentage: 80,
                            },
                            {
                                name: '3Ds Max',
                                percentage: 70,
                            },
                            {
                                name: 'Unity',
                                percentage: 75,
                            },
                        ]
                    },
                    {
                        id: 2,
                        name: 'Web Development',
                        image: '',
                        skills: [
                            {
                                name: 'HTML/CSS',
                                percentage: 95,
                            },
                            {
                                name: 'Javascript',
                                percentage: 85,
                            },
                            {
                                name: 'PHP',
                                percentage: 90,
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
                            },
                            {
                                name: 'C++',
                                percentage: 70,
                            },
                            {
                                name: 'c#',
                                percentage: 60,
                            },
                        ]
                    },
                   
                    
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
    <div class="full_page skills">
        <div class="skills__header-wrapper">
            <!-- Image of plant -->
            <div></div>

            <!-- Navigation links -->
            <div class="top__navigation">
                <div class="line_breaker"></div>
                <h2 class="heading__two">Skills</h2>
            </div>
        </div>

        <div class="skills__blocks">
            <skill-block v-for="skill in skills" :key="skill.id" :skill="skill"/>
        </div>
    </div>
</template>