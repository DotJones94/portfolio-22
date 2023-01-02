<script>
import portfolioLine from '../elements/portfolio-line.vue'
export default {
  components: { portfolioLine },
    data(){
        return{
            portfolio: [
                {
                    index : 0,
                    name : 'Explainer Video',
                    year: '2022',
                    program: 'After Effects',
                    type: 'Media Content',
                    description: "To help clients better understand our product and how Substantive Research is able to help wealth managers in the current research climate, we created a short explainer video.",
                    images: [
                        'substanive01.jpg', 'substanive02.jpg', 'substanive03.jpg'
                    ],
                    content: [
                        {linkName: 'Explainer video', link: 'substantive/explainer.mp4', type: 'video'},
                    ]
                },
                {
                    index : 1,
                    name : 'Innocence',
                    year: '2020',
                    program: 'Unity / 3DSMAX',
                    type: 'VR Film',
                    description: "My final year project during my postgraduate in film arts was a VR film. I created an interactive virtual reality film that related to my dissertation, nostalgia. Using a Samsung VR Headset and headphones. This has been converted to PC usage.",
                    images: [
                        'innocent01.jpg', 'innocent02.jpg', 'innocent03.jpg', 'innocent04.jpg'
                    ],
                    content: [
                        {linkName: 'Download VR Film', link: 'HonoursVRHouse.zip', type: 'download'},
                    ]
                },
                {
                    index : 2,
                    name : 'Robot Cop',
                    year: '2020',
                    program: 'Unity / Blender',
                    type: 'Games',
                    description: "Robot cop is a 2.5D game that was created in the Unity Game Development course. This project displays basic game principles of a coin collection and moving platforms.",
                    images: [
                        'robo_cop01.jpg', 'robocop02.jpg', 'robocop03.jpg'
                    ],
                    content: [
                        {linkName: 'Download Game', link: 'RoboCop.zip', type: 'download'},
                    ]
                },
                {
                    index : 3,
                    name : 'Space Shooter',
                    year: '2020',
                    program: 'Unity',
                    type: 'Games',
                    description: "Space shooter is a 2D game created in the Unity Game Development course. With single and multiple player options, the user can shoot, power-up and move in a space-like environment.",
                    images: [
                        'space-shooter01.jpg', 'spaceshooter02.jpg', 'spaceshooter03.jpg', 'spaceshooter.jpg'
                    ],
                    content: [
                        {linkName: 'Download Game', link: 'SpaceShooter.zip', type: 'download'},
                    ]
                },
                {
                    index : 4,
                    name : 'Sci-Fi Tech Demo',
                    year: '2020',
                    program: 'Unity',
                    type: 'Games',
                    description: "Sci-Fi Tech Demo is a first person shooter 3D game created in the Unity Game Development course. The play is able to collect a coin, buy a weapon, and shoot appropriate objects.",
                    images: [
                        'sci-fi-tech01.jpg', 'scifi.jpg', 'scifi02.jpg'
                    ],
                    content: [
                        {linkName: 'Download Game', link: 'SciFiTechDemo.zip', type: 'download'},
                    ]
                },
                {
                    index : 5,
                    name : 'Minion Creator',
                    year: '2020',
                    program: 'Unity',
                    type: 'Games',
                    description: "The Minion Creator was created to further develop my coding skills. It is based on an Abstract Factory design Pattern and uses inheritance and object orientated programming.",
                    images: [
                        'minion01.jpg', 'minion02.jpg', 'minion03.jpg'
                    ],
                    content: [
                        {linkName: 'Download Game', link: 'MinionWeapon.zip', type: 'download'},
                    ]
                },
                {
                    index : 6,
                    name : 'Caws Bach Melyn',
                    year: '2019',
                    program: 'After Effects',
                    type: 'Film',
                    description: "This a short animated film on a Welsh folk tale about a little yellow cheese that goes on a journey. This short film was part of my postgraduate year and is a simple 2D film that helped me explore my heritage.",
                    images: [
                        'caws01.jpg', 'caws02.jpg', 'caws03.jpg'
                    ],
                    content: [
                        {linkName: 'View Film', link: 'caws/caws.mp4', type: 'video'},
                        {linkName: 'New version comming soon', link: '', type: 'none'},
                    ]
                },
                {
                    index : 7,
                    name : 'Jelly Bean Production',
                    year: '2018',
                    program: '3DSMAX',
                    type: 'Film',
                    description: "This film is a continuous loop portraying the production of jelly beans. Each jelly bean goes through stages as they get older, making sure only the perfect jelly beans are packaged. It is a reflection on today's society.",
                    images: [
                        'pink.gif', 'jellybean03.jpg', 'jellybean04.jpg', 'jellybean02.jpg'
                    ],
                    content: [
                        {linkName: 'Final Film', link: 'jellybean/bean_final.mp4', type: 'video'},
                        {linkName: 'Verion 03', link: 'jellybean/jelly03.mp4', type: 'video'},
                        {linkName: 'Verion 02', link: 'jellybean/jelly02.mp4', type: 'video'},
                        {linkName: 'Verion 01', link: 'jellybean/jelly01.mp4', type: 'video'},
                    ]
                },
                {
                    index : 8,
                    name : 'Mr Jones & I',
                    year: '2018',
                    program: 'After Effects',
                    type: 'Film',
                    description: "This ancestor project was made to discover more about our past and how our ancestors make up who we are. We were to find a picture of a significant ancestor and bring it to life by putting ourselves in it.",
                    images: [
                        'mr-jones01.jpg', 'jones02.jpg'
                    ],
                    content: [
                        {linkName: 'Final Film', link: 'mrjones/ancestor.mp4', type: 'video'},
                    ]
                },
                {
                    index : 9,
                    name : 'Poly Series',
                    year: '2017',
                    program: '3DSMAX',
                    type: 'Film',
                    description: "A few extra short films, experimenting with water effects in a poly world. Using poly made up trees and environment is touching on our journey, which is often unknown. We are the only light to guide us or push towards each direction.",
                    images: [
                        'poly01.jpg', 'poly02.jpg', 'poly03.jpg', 'poly04.jpg'
                    ],
                    content: [
                        {linkName: 'Light', link: 'poly/poly01.mp4', type: 'video'},
                        {linkName: 'River 01', link: 'poly/poly02.mp4', type: 'video'},
                        {linkName: 'River 02', link: 'poly/poly03.mp4', type: 'video'},
                    ]
                },
                {
                    index : 10,
                    name : 'Jailer Jim',
                    year: '2016',
                    program: 'Unity / 3DSMAX',
                    type: 'Games',
                    description: "Jailer Jim was a collaborative project in my final year of my undergraduate. The team decided to create a puzzle game which was set in a future time where robots have been jailed. Jim and a few other robots attempt to escape.",
                    images: [
                        'jailer-jim01.jpg', 'jailerjim02.jpg', 'jailerjim03.jpg'
                    ],
                    content: [
                        {linkName: 'Download Game', link: 'jailerjim.zip', type: 'download'},
                    ]
                },
                {
                    index : 11,
                    name : 'Robot Series',
                    year: '2016',
                    program: '3DSMAX',
                    type: 'Characters',
                    description: "After the creation of the game Jailer Jim, I produced a few shorts to illustrate some of the characters. This series are just reveals of each character and a few of their animations they do.",
                    images: [
                        'robo01.jpg', 'robo02.jpg', 'robo03.jpg', 'robo04.jpg' 
                    ],
                    content: [
                        {linkName: 'Boxer', link: 'robot/robot01.mp4', type: 'video'},
                        {linkName: 'Jose', link: 'robot/robot02.mp4', type: 'video'},
                        {linkName: 'Jim', link: 'robot/robot03.mp4', type: 'video'},
                        {linkName: 'Flyer', link: 'robot/robot04.mp4', type: 'video'},
                    ]
                },
                {
                    index : 12,
                    name : 'The Ferris Caretaker',
                    year: '2016',
                    program: '3DSMAX',
                    type: 'Film',
                    description: "A small personal project experimenting with 3D animation and film. A short film about a man who is cleaning up an old fun fair to find a magical leaf that shows him what the place could look like, almost like his dream.",
                    images: [
                        'caretaker01.jpg', 'caretaker02.jpg', 'caretaker03.jpg'
                    ],
                    content: [
                        {linkName: 'Final Film', link: 'caretaker/holiday.mp4', type: 'video'},
                    ]
                },
            ],
            showModal: false,
            contentLink : null,
            type : null,
        }
    },
    methods: {
        showModalTrue(content, type){
            this.showModal = true;
            this.contentLink = content;
            this.type = type;
        },
        getScr(srcName){
            return new URL(`../../assets/portfolio/${srcName}`, import.meta.url).href;
        }
    }
}
</script>

<template>
   <div class="full_page portfolio">
        <div class="header-wrapper">
            <!-- Image of plant -->
            <div>
            </div>

            <!-- Navigation links -->
            <div class="top__navigation">
                <div class="line_breaker"></div>
                <h2 class="heading__two">Portfolio</h2>
            </div>
        </div>

        <div class="portfolio__wrapper">
            <portfolio-line v-for="(item) in portfolio" 
            :key="item" 
            v-bind="item"
            @showModalTrue="showModalTrue" />
        </div>

         <!-- Content modal -->
         <div class="portfolio__modal" v-if="showModal" @click="showModal=false">
            <video controls v-if="type === 'video'">
                <source :src="getScr(this.contentLink)" type="video/mp4">
                <source :src="getScr(this.contentLink)" type="video/ogg">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</template>