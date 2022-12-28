<script>
import portfolioLine from '../elements/portfolio-line.vue'
export default {
  components: { portfolioLine },
    data(){
        return{
            portfolio: [
                {
                    name : 'Innocence',
                    year: '2020',
                    program: 'Unity / 3DSMAX',
                    type: 'VR Film',
                    description: "My final year project during my postgraduate in film arts was a VR film. I created an interactive virtual reality film that related to my dissertation, nostalgia. Using a Samsung VR Headset and headphones. This has been converted to PC usage.",
                    images: [
                        ''
                    ]
                },
                {
                    name : 'Robot Cop',
                    year: '2020',
                    program: 'Unity / Blender',
                    type: 'Games',
                    description: "Robot cop is a 2.5D game that was created in the Unity Game Development course. This project displays basic game principles of a coin collection and moving platforms.",
                    images: [
                        ''
                    ]
                },
                {
                    name : 'Space Shooter',
                    year: '2020',
                    program: 'Unity',
                    type: 'Games',
                    description: "Space shooter is a 2D game created in the Unity Game Development course. With single and multiple player options, the user can shoot, power-up and move in a space-like environment.",
                    images: [
                        ''
                    ]
                },
                {
                    name : 'Sci-Fi Tech Demo',
                    year: '2020',
                    program: 'Unity',
                    type: 'Games',
                    description: "Sci-Fi Tech Demo is a first person shooter 3D game created in the Unity Game Development course. The play is able to collect a coin, buy a weapon, and shoot appropriate objects.",
                    images: [
                        ''
                    ]
                },
                {
                    name : 'Minion Creator',
                    year: '2020',
                    program: 'Unity',
                    type: 'Games',
                    description: "The Minion Creator was created to further develop my coding skills. It is based on an Abstract Factory design Pattern and uses inheritance and object orientated programming.",
                    images: [
                        ''
                    ]
                },
                {
                    name : 'Caws Bach Melyn',
                    year: '2019',
                    program: 'After Effects',
                    type: 'Film',
                    description: "This a short animated film on a Welsh folk tale about a little yellow cheese that goes on a journey. This short film was part of my postgraduate year and is a simple 2D film that helped me explore my heritage.",
                    images: [
                        ''
                    ]
                },
                {
                    name : 'Jelly Bean Production',
                    year: '2018',
                    program: '3DSMAX',
                    type: 'Film',
                    description: "This film is a continuous loop portraying the production of jelly beans. Each jelly bean goes through stages as they get older, making sure only the perfect jelly beans are packaged. It is a reflection on today's society.",
                    images: [
                        ''
                    ]
                },
                {
                    name : 'Mr Jones & I',
                    year: '2018',
                    program: 'After Effects',
                    type: 'Film',
                    description: "This ancestor project was made to discover more about our past and how our ancestors make up who we are. We were to find a picture of a significant ancestor and bring it to life by putting ourselves in it.",
                    images: [
                        ''
                    ]
                },
                {
                    name : 'Poly Series',
                    year: '2017',
                    program: '3DSMAX',
                    type: 'Film',
                    description: "A few extra short films, experimenting with water effects in a poly world. Using poly made up trees and environment is touching on our journey, which is often unknown. We are the only light to guide us or push towards each direction.",
                    images: [
                        ''
                    ]
                },
                {
                    name : 'Jailer Jim',
                    year: '2016',
                    program: 'Unity / 3DSMAX',
                    type: 'Games',
                    description: "Jailer Jim was a collaborative project in my final year of my undergraduate. The team decided to create a puzzle game which was set in a future time where robots have been jailed. Jim and a few other robots attempt to escape.",
                    images: [
                        ''
                    ]
                },
                {
                    name : 'Robot Series',
                    year: '2016',
                    program: '3DSMAX',
                    type: 'Characters',
                    description: "After the creation of the game Jailer Jim, I produced a few shorts to illustrate some of the characters. This series are just reveals of each character and a few of their animations they do.",
                    images: [
                        ''
                    ]
                },
                {
                    name : 'The Ferris Caretaker',
                    year: '2016',
                    program: '3DSMAX',
                    type: 'Film',
                    description: "A small personal project experimenting with 3D animation and film. A short film about a man who is cleaning up an old fun fair to find a magical leaf that shows him what the place could look like, almost like his dream.",
                    images: [
                        ''
                    ]
                },
            ]
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
                <h2 class="heading__two">Portfolio</h2>
            </div>
        </div>

        <div class="portfolio">
            <portfolio-line v-for="item in portfolio" 
            :key="item" 
            v-bind="item"/>
        </div>
    </div>
</template>