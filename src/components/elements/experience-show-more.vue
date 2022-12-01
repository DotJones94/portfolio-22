<script>
    export default {
        props: {
            experience : Object
        },
        components: {
        },
    
        computed:{
           activeExperience(){
                return this.prevExperience.find(el => el.id === this.experience.id);
           }
        },
        data(){
            return {
                prevExperience : [
                    {
                        id: 2,
                        tools : "PHP, Laravel, CSS, Vue.js",
                        description: "My major role in the company was being responsible for the technical development. Mela Insights is a web platform for purpose-built venues where they are able to source events which best match their specifications, location, and open calendar dates. I contributed to developing the product from scratch, heading up the design, such as wireframes, all the way through development. I too assisted in communication with key users for testing and validation of ideas, including going to international events such as IBTM in Barcelona.  Before the company was formed, I was apart of The Alacrity Foundation, which is a charity organisation that aims to train graduates to become future tech entrepreneurs. During this time, as a technical lead, completed both the tech and business bootcamps that were part of the program. I gained new skills in public speaking, from the numerous panel updates and presentations, team cooperation, from the groups we were placed in, and product validation, from the ideas that were given to us. The biggest thing I learnt was the ins and outs of a business and how each building block in the entrepreneurial process is just as important as the previous one.",
                        imageFolder: 'techdec',
                        imagesTo: 25 
                    },
    
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
            }
        }
    }
</script>
<template>
  <div class="exp__see-more-info" v-if="activeExperience">
    <!-- Left Side -->
    <div class="see-more__left">
        <div class="heading__two">
            From {{experience.yearFrom}} -  {{experience.yearTo}}
        </div>
        <div class="heading__six">{{experience.role}}</div>
        <div class="heading__five">Tools: {{activeExperience.tools}}</div>
        <div class="description">{{activeExperience.description}}</div>
    </div>

    <!-- Rigth Side -->
    <div class="see-more__right">
        <div class="left__images" >
            <img v-for="index in activeExperience.imagesTo" 
            :key="index" 
            :src="'./src/assets/images/experience/techdec/img'+(index-1)+'.jpg'" />
        </div> 
    </div>
  </div>
</template>