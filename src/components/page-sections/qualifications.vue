<script>
import Multimedia from '../../assets/images/qualifications/multimedia.vue';
import Film from '../../assets/images/qualifications/film.vue';
import Leadership from '../../assets/images/qualifications/leadership.vue';
import Online from '../../assets/images/qualifications/online.vue';
import ListLink from '../global/links/list-link.vue';

export default {
    components: {
    ListLink,
    Multimedia,
    Film,
    Online,
    Leadership
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
                    name : 'Level 5 NVQ Leadership and Management Diploma',
                    subList: ['Swansea University'],
                    image: 'qualification3.png'
                },
                {
                    id: 4,
                    name : 'Online Courses',
                    subList: [
                        '- Advanced CSS and Sass',
                        '- Master Laravel 9, Vue 3 & Inertia Fullstack', 
                        '- The Ultimate Guide to Game Development with Unity'
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
            <div class="qualifications__line">
                <svg v-if="activeQualificationID === 1"
                    width="120px" height="300px" viewBox="0 0 150 300" class="qualifications__line-first">
                    <path class="path" fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" stroke-dasharray="15.6225,15.6225" d="M22.948,8.38
			        c11.423,2.1,24.181,5.61,30.817,11.336c41.85,36.109-6.47,127.947,33.763,176.851c11.974,14.554,33.126,21.991,47.465,25.542"/>
                </svg>

                <svg v-if="activeQualificationID === 2"
                width="120px" height="300px" viewBox="0 0 150 300" >
                    <path class="path" fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" stroke-dasharray="15.0143,15.0143" d="M22.43,61.601
			        c11.553,1.575,24.599,4.237,31.335,8.621c41.85,27.233,1.295,112.698,33.763,138.928c15.402,12.442,34.507,15.718,47.506,16.322" />
                </svg>

                <svg v-if="activeQualificationID === 3"
                x="0px" y="0px" width="120px" height="300px" viewBox="0 0 150 300" enable-background="new 0 0 150 300" xml:space="preserve">
                    <path class="path" fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" stroke-dasharray="14.991,14.991" d="M15.477,128.343
                        c9.168-6.67,22.157-12.025,38.288-8.075c44.428,10.879-0.483,80.124,33.763,94.176c21.007,8.62,39.043,2.841,50.259-3.306"/>
                </svg>

                <svg v-if="activeQualificationID === 4"
                x="0px" y="0px" width="120px" height="300px" viewBox="0 0 150 300" enable-background="new 0 0 150 300" xml:space="preserve">
                    <path class="path" fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" stroke-dasharray="15.1065,15.1065" d="
                        M15.597,259.612c9.161,6.611,22.107,11.888,38.168,7.966C98.193,256.729,59.5,197,87.528,173.665
                        c18.717-15.583,38.873-6.552,51.081,2.104"/>
                </svg>
            </div>

            <!-- Image -->
            <div class="qualifications__image">
                <Multimedia v-if="activeQualificationID === 1" />
                <Film v-if="activeQualificationID === 2"/>
                <Leadership v-if="activeQualificationID === 3"/>
                <Online v-if="activeQualificationID === 4"/>
            </div>
        </div>

        <div>
            
        </div>
        
        

    </div>
</template>