<template>
  <NavBar />
  <div class="informationAboutThePerks">
    <div class="fillTheForm" v-if="information">
      <div 
          class="formInformation"
          v-if="information"
        >
          <button class="iconCloseForms" @click="closeTheForm">
            <svg-icon 
              class="iconClose"
              type="mdi"
              :path="path" 
            >
            </svg-icon>
          </button>
          <formInformation />
        </div>
    </div>
    <div class="cardPerks">
      <div class="cardPerksImg">
        <img src="../assets/informationImg.jpg" alt="" class="imgPerk">
      </div>
      <div class="cardPerksInformation">
        <h2>Get the Perks of Being On-Account with JJ Event Staffing</h2>
        <p>
          JJ Event Staffing is the #1 professional staffing agency for 
          promotional modeling in Los Angeles. Our promotional talent staffs product 
          launches, brand announcements, store openings, and more!
          Our promotional models are highly sought after for their natural talents 
          in conveying marketing strategies, brand awareness, and proper product use to 
          your intended audience with ease, charm, and a magnetic personality.
        </p>
      </div>
    </div>
    <div class="bottomInformationPerks">
      <p>
        Giving a human aspect to your promotional event will attract more people and 
        create a more lasting and memorable occasion. See what their experience and skills can do in making 
        a difference for your next big launch!
      </p>
    </div>
  </div>
  <div class="missionAndVisionBox">
    <div class="tittleAndInformation">
      <h1>Why Choose JJ Staffing</h1>
      <p>
        We come highly recommended and reviewed by our peers, clients, and staff, so it's no wonder why we are 
        considered one of the best sources for promotional staffing talent in Los Angeles, Miami, and NYC. The 
        following popular services we provide make our agency stand out from the competition:
      </p>
    </div>
  </div>
  <div class="carousel">
    <VueperSlides 
    class="no-shadow"
    :visible-slides="3"
    slide-multiple
    :gap="1"
    :slide-ratio="1 / 4"
    :dragging-distance="200"
    :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
    >
      <VueperSlide 
        v-for="(slide, index) in slides" 
        :key="index" 
        :image="slide.image"
        >
        <h2>{{ slide.title }}</h2>
        <p>{{ slide.description }}</p>
      </VueperSlide>
    </VueperSlides>
  </div>
  <div class="informationGallery">
    <p>Whatever your staffing for events needs, we've got you covered</p>
    <button class="buttonQuote" @click="showTheInformation">Request a quote</button>
  </div>
  <bottomBar />
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import bottomBar from '@/components/bottomBar.vue';
import formInformation from '@/components/formInformation.vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCloseOutline } from '@mdi/js';

export default{
  components: { 
    VueperSlides,
    VueperSlide,
    NavBar ,
    bottomBar,
    formInformation,
    SvgIcon
  },
  data() {
    return {
      slides: [
        { image: '/src/assets/Gallery/photo2.png', title: 'Slide 2', description: '2' },
        { image: '/src/assets/Gallery/photo3.png', title: 'Slide 3', description: '3' },
        { image: '/src/assets/Gallery/photo4.png', title: 'Slide 4', description: '4' },
        { image: '/src/assets/Gallery/photo5.png', title: 'Slide 5', description: '5' },
        { image: '/src/assets/Gallery/photo6.png', title: 'Slide 6', description: '6' },
        { image: '/src/assets/Gallery/photo7.jfif', title: 'Slide 6', description: '7' },
        { image: '/src/assets/Gallery/photo8.jfif', title: 'Slide 6', description: '8' },
        { image: '/src/assets/Gallery/photo9.jfif', title: 'Slide 6', description: '9' },
        { image: '/src/assets/Gallery/photo10.jfif', title: 'Slide 6', description: '10' },
        { image: '/src/assets/Gallery/photo11.jfif', title: 'Slide 6', description: '11' },
        { image: '/src/assets/Gallery/photo12.jfif', title: 'Slide 6', description: '12' },
        { image: '/src/assets/Gallery/photo13.jfif', title: 'Slide 6', description: '13' },
        { image: '/src/assets/Gallery/photo14.jfif', title: 'Slide 6', description: '14' },
        { image: '/src/assets/Gallery/photo15.jfif', title: 'Slide 6', description: '15' },
        { image: '/src/assets/Gallery/photo16.jfif', title: 'Slide 6', description: '16' },
        
      ],
      information: false,
      path: mdiCloseOutline
    };
  },
  methods: {
    showTheInformation() {
      this.information = true
    },
    closeTheForm() {
      this.information = false
    }
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.carousel {
  margin: 0 auto;
  width: 90%;
  padding-top: 5%;
  padding-bottom: 2%;
}
.informationGallery {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
  text-align: center;
  align-items: baseline;
  padding-bottom: 10%;
  padding-top: 1%;
}
.informationGallery p {
  font-size: 1.5vw;
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: italic;
  font-variation-settings:
    "wdth" 100;
}
.buttonQuote {
  width: 15%;
  height: 60px;
  color: #ffffff;
  border: 3px solid #c7c6c6;
  background-color: black;
  border-radius: 25px;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s ease;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
.buttonQuote:hover {
  opacity: 0.7;
}
.informationAboutThePerks {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 5%;
  background-color: rgb(248, 248, 248);
  padding-bottom: 4%;
}
.informationAboutThePerks h2 {
  font-size: 2.3vw;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 500;
  font-style: normal;
  padding-bottom: 2%;
}
.cardPerks{
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  gap: 20px;
}
.cardPerksImg{
  float: right;
  width: 30%;
}
.cardPerksInformation {
  float: left;
  width: 25%;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: 20px;
  text-align: justify;
}
.cardPerksInformation h2{
  font-size: 35px;
}
.imgPerk {
  width: 100%;
  border-radius: 10px;
}
.bottomInformationPerks{
  padding-top: 2%;
  width: 60%;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: 25px;
  text-align: justify;
}
.missionAndVisionBox {
  width: 100%;
  display: flex;
  padding: 5%;
  justify-content: center;
}
.tittleAndInformation {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
}
.tittleAndInformation h1 {
  font-size: 3vw;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 500;
  font-style: normal;
  padding-bottom: 2%;
}
.tittleAndInformation p {
  font-size: 1.5vw;
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: italic;
}
.fillTheForm {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100% ;
  height: 100%;
  backdrop-filter: blur(10px);
}
.iconCloseForms {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}
.iconClose {
  position: fixed;
  z-index: 100;
  color: white;
  position: absolute;
  right: 3%;
  top: 3%;
  width: 40px;
  height: auto;
}


@media screen and (max-width: 1024px) {
  .informationGallery {
    gap: 60px;
    padding-bottom: 10%;
    padding-top: 2%;
  }
  .informationGallery p {
    font-size: 2.3vw;
  }
  .buttonQuote {
    width: 230px;
    height: 70px;
    font-size: 1.9vw;
  }
  .informationAboutThePerks h2 {
    font-size: 2vw;
  }
  .imgPerk {
    height: 470px;
  }
  .cardPerksImg{
    width: 40%;
    height: 460px;
  }
  .cardPerksInformation {
    width: 30%;
    font-size: 1.8vw;
  }
  .bottomInformationPerks{
    padding-top: 4%;
    width: 78%;
    font-size:  2vw;
    padding-bottom: 5%;
  }
  .tittleAndInformation {
    width: 80%;
  }
  .tittleAndInformation h1 {
    font-size: 5vw;
    padding-bottom: 5%;
  }
  .tittleAndInformation p {
    font-size: 2.3vw;
    padding-bottom: 5%;
  }
}




@media screen and (max-width: 768px) { 
.carousel {
  width: 78%;
}
.informationGallery {
  gap: 15px;
  flex-direction: column;
  align-items: center;
}
.informationGallery p {
  font-size: 3.5vw;
}
.buttonQuote {
  width: 240px;
  font-size: 3.5vw;
}
.informationAboutThePerks h2 {
  font-size: 3.5vw;
}
.cardPerksImg{
  width: 40%;
  height: 280px;
}
.imgPerk {
  height: 270px;
}
.cardPerksInformation {
  width: 40%;
  font-size: 2.8vw;
}
.bottomInformationPerks{
  padding-top: 2%;
  width: 80%;
  font-size:  2.8vw;
  padding-bottom: 5%;
}
.tittleAndInformation {
  width: 80%;
}
.tittleAndInformation h1 {
  font-size: 4vw;
  padding-bottom: 5%;
}
.tittleAndInformation p {
  font-size: 2.5vw;
  padding-bottom: 5%;
}
.iconClose {
  right: 5%;
  top: 3%;
}
}
</style>