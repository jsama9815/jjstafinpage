<template>
  <NavBar />
  <div class="mainBoxHome">
    <img src="../assets/HomeGround.jfif" alt="" class="imageGround">
    <div class="fillOutForms" v-if="contact || information">
        <div 
          class="contactInformation"
          v-if="contact"
        >
          <button class="iconCloseForms" @click="closeTheForms">
            <svg-icon 
              type="mdi"
              class="iconClose" 
              :path="path" 
            >
            </svg-icon>
          </button>
          <contactForm />
        </div>
        <div 
          class="formInformation"
          v-if="information"
        >
          <button class="iconCloseForms" @click="closeTheForms">
            <svg-icon 
              type="mdi"
              class="iconClose" 
              :path="path" 
            >
            </svg-icon>
          </button>
          <formInformation />
        </div>
    </div>
    <div class="information">
      <h1>When hiring your ideal party staff in Los Angeles, 
        look no further than JJ Event Staffing
      </h1>
      <div class="buttons">
        <button class="buttonQuote" @click="showFormInformation">Request a quote</button>
        <button class="buttonContact" @click="showContactForm">Contact US</button>
      </div>
      
    </div>
  </div>
  <div class="servicesBox">
    <h1> Services We Provide</h1>
    <p>
      We have all the staffing for events you will need.<br> 
      We work with Corporate Events, Private Parties, Weddings,<br> 
      Galas, Promotional Events, Cocktail Parties, Birthdays, and more!
    </p>
  </div>
  <div class="cards">
    <v-card
    class=" my-8 card"
    elevation="23"
    >
    <img  src="../assets/waiter.jpg" />
    <h1>Waitstaff</h1>
    <p>
      You need to find as soon as possible the professional 
      waitstaff with the right skills to work on your important day. 
      Julia Valler Event Staffing Agency is at your service.
    </p>
    </v-card>
    <v-card
    class=" my-8 card"
    elevation="16"
    >
    <img  src="../assets/cup.jpg" />
    <h1>Bartenders</h1>
    <p>
      Our bartenders at Julia Valler Event Staffing provide not only 
      exceptional guest service, but they have winning personalities 
      that will charm and create a very warm environment at your event.
    </p>
    </v-card>
    <v-card
    class="my-8 card"
    elevation="16"
    >
    <img  src="../assets/promotion.jpg" />
    <h1>Promotional Staff</h1>
    <p>
      We have been providing some of the best promotional modeling
      talents for various industries and occasions. You can be sure 
      of your event success with our brand ambassadors and promo models.
    </p>
    </v-card>
    <div class="client">
      <h2>Our Clients</h2>
      <p>
        Our event staffing company in Los Angeles is happy to work with private and corporate clients from many different industries: event planners, 
        individuals hosting private events, catering companies, private chefs, restaurants, event venues, off-premise event locations, art galleries, 
        fashion houses, media agencies, PR companies, and anyone in need of high-quality event staffing services.
      </p>
    </div>
    <div class="imagesOfEvents">
      <h2>Some images of ours events</h2>
      <div class="photosOfEventsBox">
        <collageOfPhotos />
      </div>
    </div>
    <div class="informationButton">
      <p>Whatever your staffing for events needs, we've got you covered</p>
      <button class="buttonBotom" @click="showFormInformation">Request a quote</button>
    </div>
  </div>
  <bottom-bar />
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import BottomBar from '@/components/bottomBar.vue';
import contactForm from '@/components/contactForm.vue';
import formInformation from '@/components/formInformation.vue';
import collageOfPhotos from '@/components/collageOfPhotos.vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCloseOutline } from '@mdi/js';
export default {
  components: { 
    NavBar, 
    BottomBar, 
    contactForm, 
    formInformation,
    collageOfPhotos,
    SvgIcon
  },
  data() {
    return {
      path: mdiCloseOutline,
      contact: false,
      information: false,
      isMobile: false
    }
  },
  methods: {
    showFormInformation() {
      this.information = true
    }, 
    showContactForm() {
      this.contact = true
    },
    closeTheForms() {
      this.information = false
      this.contact = false
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap');


.mainBoxHome {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  padding-bottom: 5%;
  max-width: 100%;
}
.imageGround {
  display: block;
  width: 100%;
  height: auto;
  filter: brightness(0.7);
}
.information {
  position: absolute; 
  top: 20%;
  left: 30%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 90%;
  max-width: 900px;
  color: white;
}
.information h1 {
  font-size: 4vw;
}
.buttons {
  display: flex;
  position: absolute;
  top: 140%;
  padding: 20px;
  
}
.buttonContact {
  width: 100%;
  height: 60px;
  color: #ffffff;
  background-color: #000000;
  border-radius: 20px;
  cursor: pointer;
  position: absolute;
  left: 100%;
  font-size: 20px;
  border: 1px solid #000000;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
.buttonContact:hover {
  background-color: grey;
  color: white;
  border: none;
  transition: background-color 0.3s ease;
}
.buttonQuote {
  width: 250px;
  height: 60px;
  color: #ffffff;
  border: 3px solid #c7c6c6;
  background-color: grey;
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s ease;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
.buttonQuote:hover {
  background-color: black;
  border: none;
}
.servicesBox {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px 40px 0px;
  text-align: center;
  
}
.servicesBox h1 {
  font-size: 60px;
  padding-bottom: 3vw;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 500;
  font-style: normal;
}
.servicesBox p {
  font-size: 30px;
  padding-bottom: 2vw;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-style: italic;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2%;
  padding-bottom: 5%;
}
.card {
  width: 28%;
  height: 500px;
  border-radius: 13px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  text-align:justify;
  justify-content:end;  
}

.card h1 {
  padding-bottom: 25px;
  font-size: 35px;
  font-family: "Lora", serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}
.card p {
  font-family: "Lora", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  padding-bottom: 35px;
}
.card img {
  width: 15%;
  max-width: 70px ;
  height: auto ;
  position: absolute;
  top: 7%;
}
.fillOutForms {
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
.contactInformation {
  background-color: rgba(63, 58, 58, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
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
.bottomBarCellphone {
  width: 100%;
}
.client{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
}
.client h2 {
  padding-bottom: 3%;
  font-size: 50px;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 500;
  font-style: normal;
}
.client p {
  width: 80%;
  padding-bottom: 3%;
  font-size: 25px;
  text-align: justify;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-style: italic;
}
.imagesOfEvents{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding-bottom: 3%;
}
.imagesOfEvents h2 {
  font-size: 50px;
  padding-bottom: 3%;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 500;
  font-style: normal;
}
.informationButton {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
  text-align: center;
  align-items: baseline;
  padding-bottom: 2%;
  padding-top: 1%;
}
.informationButton p {
  font-size: 30px;
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: italic;
  font-variation-settings:
    "wdth" 100;
}
.buttonBotom {
  width: 250px;
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
.buttonBotom:hover {
  opacity: 0.7;
}


@media screen and (max-width: 1024px) {
  .information {
    width: 100%; 
    left: 50%;
  }
  .buttonContact, .buttonQuote {
    width: 200px; 
    height: 60px;
    border: 1px solid white;
  }
  .servicesBox h1 {
    font-size: 6vw; 
    padding-bottom: 5vw; 
  }
  .servicesBox p {
    font-size: 3vw; 
    padding-bottom: 4vw; 
  }
  .card {
    width: 90%; 
    max-width: none; 
    margin-bottom: 2%; 
  }
  .card h1 {
    font-size: 5vw; 
    padding-bottom: 4vw;
  }
  .card p {
    font-size: 3vw; 
    padding-bottom: 5vw; 
  }
  .informationButton {
    gap: 20px;
  }
  .informationButton p {
    font-size: 2.2vw;
  }
  .buttonBotom {
    width: 250px;
    height: 65px;
    font-size: 2vw;
  }
  .iconClose {
    right: 6%;
    top: 1%;
  }
}

@media screen and (max-width: 768px) {
  .information {
    width: 90%; 
    padding-left: 20%;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    padding: 0 10px 0 0;
  }
  .buttonContact, .buttonQuote {
    width: 130px; 
    font-size: 12px;
  }
  .servicesBox h1 {
    font-size: 18px; 
    padding-bottom: 5vw; 
  }
  .servicesBox p {
    font-size: 3vw; 
    padding-bottom: 4vw; 
  }
  .cards {
    padding-left: 0;
  }
  .card {
    width: 75%;
    height:auto; 
    max-width: none; 
    padding-bottom: 5%;
  }
  .card h1 {
    padding-left: 40%;
    font-size: 5vw; 
    padding-bottom: 4vw; 
  }
  .card p {
    font-size: 3vw; 
    padding-bottom: 5vw; 
  }
  .client h2 {
    font-size: 25px;
  }
  .client p {
    font-size: 3.3vw; 
  }
  .card img {
    width: 15%;
    max-width: 70px ;
    height: auto ;
    position: absolute;
    top: 13%;
    left: 18%;
}
  .imagesOfEvents h2 {
    font-size: 25px;
  }
  .informationButton {
    gap: 10px;
  }
  .informationButton p {
    font-size: 3vw;
    padding-left: 20px;
  }
  .buttonBotom {
    width: 180px;
    height: 40px;
    font-size: 3vw ;
  }
}
</style>