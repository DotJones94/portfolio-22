<script>
import ListLink from '../global/links/list-link.vue';

export default {
    components: {
        ListLink,
    },
    computed:{
        activeQualificationImage : function(){
            let qualification = this.qualifications.find(el => el.id === this.activeQualificationID);
            if(qualification) return qualification.image;
        }
    },
    data(){
        return{
            qualifications: [
                {
                    id: 1,
                    name : 'Bachelors of Information speaclising in Multimedia',
                    subList:['University of Pretoria'],
                    image: 'qualification1.png'
                },
                {
                    id: 2,
                    name : 'Bachelors of Film Arts Honours specalising in 3D Animation',
                    subList: ['Open Window'],
                    image: 'qualification2.png'
            
                },
                {
                    id: 3,
                    name : 'Level 5 NQV Leadership and Management',
                    subList: ['Swansea University'],
                    image: 'qualification3.png'
                },
                {
                    id: 4,
                    name : 'Online Courses',
                    subList: [
                        'udemy 1',
                        'udemy 2', 
                        'udemy 3'
                    ],
                    image: 'qualification4.png'
                },
            ],
            activeQualificationID : 1,
        }
    },
    methods:{
        changeCurrentQualification(newId){
            this.activeQualificationID = newId;
        }
    }
}
</script>
<template>
    <div class="full_page">
        <div class="header-wrapper">
            <!-- Image of plant -->
            <div>
                <img src="../../assets/images/section-navigation/hanging01.png"
                 alt="Hanging plant"
                 class="navigation__image" />
            </div>

            <!-- Navigation links -->
            <div class="top__navigation">
                <div class="line_breaker"></div>
                <h2 class="heading__two">Qualifications</h2>
            </div>
        </div>

        <div class="qualifications">
            <!-- Qualications  -->
            <div class="qualifications--wrapper">
                <list-link v-for="qualifaction in qualifications" 
                        :key="qualifaction.id"
                        :currentRoleId="activeQualificationID"
                        :id="qualifaction.id"
                        :subList="qualifaction.subList"
                        @changeCurrentRole="changeCurrentQualification">
                        {{qualifaction.name}}
                    </list-link>
            </div>

            <!-- Line -->
            <div>
                <img src="../../assets/images/qualifications/line-01.png" 
                alt="line to image"
                class="qualifications__image" />
            </div>

            <!-- Image -->
            <div>
                <img :src="'../../src/assets/images/qualifications/' + activeQualificationImage" 
                alt="Icon to describe qualification"
                class="qualifications__image" />
            </div>
        </div>

        <div>
            
        </div>
        
        

    </div>
</template>