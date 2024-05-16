<template>
  <NavBar />
  <div class="mainBoxCarrer">
    <img src="../assets/partnerGround.jpeg" alt="backgroundCarrer" class="photoGround">
    <div class="informationOnTheImage">
      <h1>Event Staff Jobs</h1>
      <h2>Los Angeles</h2>
      <p>
        Apply to join JJ event staff team by
        filling out our online application form
      </p>
      <button class="buttonApply" @click="movetoLinkedIn">Apply Now</button>
      <div class="options">
        <ul>
          <div class="iconBox">
            <svg-icon type="mdi" :path="path" class="icon"></svg-icon>
            Event Bantenders
          </div>
          <li>-Flexible schedule</li>
          <li>-Work at elite banquets and celebrity-attended cocktail hours</li>
        </ul>
        <ul>
          <div class="iconBox">
            <svg-icon type="mdi" :path="path" class="icon"></svg-icon>
            Banquet Servers
          </div>
          <li>-Flexible schedule</li>
          <li>-Work at elite banquets and celebrity-attended cocktail hours</li>
        </ul>
        <ul>
          <div class="iconBox">
            <svg-icon type="mdi" :path="path" class="icon"></svg-icon>
            Promo models & BA
          </div>
          <li>-Flexible schedule</li>
          <li>-Opportunity to represent famous brands</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="informationCarrer">
    <h1 class="tittleCarrer">Event Staff Job -Opportunity</h1>
    <p class="informationAboutThePersonal">
      We are looking for personable, reliable, and professional talent to join our roster. 
      You'll get to work at exquisite banquets, celebrity-attended cocktail hours, on the rooftops
      with the best views, and participate in the latest brand activations, all while still pursuing 
      your creative goals, auditioning, and performing
    </p>
    <div class="listsInformation">
      <h3>We offer you:</h3>
      <ol>
        <li>- Competitive compensation</li>
        <li>- Flexible schedule — you choose when you work!</li>
        <li>- Flexible schedule — you choose when you work!</li>
        <li>- Service training and professional growth opportunities</li>
        <li>- Excellent experience working in a team of ultra professionals</li>
      </ol>
      <h3>Requirements:</h3>
      <ol>
        <li>- Being able to Must follow directions, respond proactively and work well as a team;</li>
        <li>- Commitment to delivering personal best every time;</li>
        <li>- Ability to lift and carry up to 45 lbs (for server/bartender positions);</li>
        <li>- Fine dining or high-end event experience in the role applying for.</li>
      </ol>
    </div>
  </div>
  <div class="mapBox">
    <h2>Our Office in L.A</h2>
    <maps />
  </div>
  <div class="bottomInformationCarrer ">
    <p>"If you want to join our team and you are in Los Angeles, California, apply for one of our vacancies."</p>
    <button class="buttonApply" @click="movetoLinkedIn">Apply Now</button>
  </div>
  <bottomBar />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCheckCircleOutline } from '@mdi/js';
import bottomBar from '@/components/bottomBar.vue';
import maps from '@/components/maps.vue';
export default {
  name: "my-component",
  components: { 
    NavBar,
    bottomBar,
    maps,
    SvgIcon
  },
  data() {
    return {
      path: mdiCheckCircleOutline,
    }
  }, 
  methods: {
    movetoLinkedIn() {
      const linkedinUrl = "https://www.linkedin.com/in/jj-staffing-354a21309/";
      
      window.location.href = linkedinUrl;
    }
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap');

.photoGround {
  display: block;
  width: 100%;
  max-height: auto;
  margin: 0 auto;
  filter: brightness(0.5);
}
.informationOnTheImage {
  position: absolute; 
  top: 45%;
  left: 36%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 700px;
  max-width: 900px;
  color: white;
}
.informationOnTheImage h1 {
  padding-top: 30%;
  font-size: 50px;
  padding-bottom: 50px;
}
.informationOnTheImage h2 {
  font-size: 40px;
  padding-bottom: 50px;
}
.informationOnTheImage p {
  font-size: 30px;
  padding-bottom: 50px;
}
.buttonApply {
  width: 250px;
  height: 60px;
  background-color: rgb(226, 33, 33);
  font-size: 20px;
  border-radius: 40px;
  border: 2px solid rgb(226, 33, 33);
  color: white;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
.buttonApply:hover {
  background-color: white;
  color: black;
  transition: background-color 0.3s ease;
}
.options {
  position: absolute;
  top: 110%;
  display: flex;
  justify-content: space-between;
  width: 1100px;
}
.options ul {
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-style: bold;
  align-items: baseline;
}
.options li{
  list-style: none;
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
  padding-top: 10px;
}
.iconBox {
  display: flex;
  justify-content: space-around;
}
.icon {
  margin-right: 10px;
}
.informationCarrer{
  background-color: rgb(248, 248, 248);
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
  padding-top:5%;
  padding-bottom: 5%;
}
.tittleCarrer{
  font-size: 70px;
}
.informationCarrer p {
  padding-top: 3%;
  text-align: justify;
}
.informationAboutThePersonal {
  text-align: justify;
  font-size: 25px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: italic;
  width: 60%;
}
.listsInformation {
  padding-top: 3%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  width: 60%;
}
.listsInformation h3 {
  padding-top: 3%;
  font-size: 25px;
  padding-bottom: 2%;
}
.listsInformation ol li{
  font-size: 22px;
  list-style-type: none;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: italic;
}
.bottomInformationCarrer  {
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: row;
  padding: 3%;
}
.bottomInformationCarrer p {
  padding-right: 4%;
  font-size: 20px;
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: italic;
}
.mapBox {
  display: flex;
  flex-direction: column;
  padding-bottom: 3%;
  padding-top: 5%;
}
.mapBox h2 {
  text-align: center;
  font-size: 50px;
  padding-bottom: 3%;
}
a {
    color: inherit;
    text-decoration: none;
}


@media screen and (max-width: 1024px) {
  .informationOnTheImage {
    top: 8%;
    left: 50%;
    padding: 0px;
    width: 100%;
  }
  .options {
    width:95%;
  }
  .informationAboutThePersonal {
    width: 90%;
  }
  .informationAboutThePersonal {
    width: 90%;
  }
  .listsInformation {
    padding-top: 5%;
    width: 90%;
  }
}



@media screen and (max-width: 768px) { 
  .informationOnTheImage {
    top: 18%;
    left: 55%;
    padding: 0px;
    width: 100%;
  }
  .informationOnTheImage h1 {
    padding-top: 10%;
    font-size: 3vw;
    padding-bottom: 10px;
  }
  .informationOnTheImage h2 {
    font-size: 3vw;
    padding-bottom: 10px;
  }
  .informationOnTheImage p {
    font-size: 2.8vw;
    padding-bottom: 10px;
  }
  .buttonApply {
    width: 150px;
    height: 30px;
    font-size: 3vw;
 }
 .icon {
    margin-right: 5px;
    width: 15px;
  }
  .options {
    width:95%;
  }
  .options ul {
    font-size: 2.3vw;
  }
  .options li{
    font-size: 2vw;
    padding-top: 5px;
  }
  .tittleCarrer{
    font-size: 5vw
  }
  .informationAboutThePersonal {
    font-size: 4.5vw;
    width: 80%;
  }
  .listsInformation {
    padding-top: 5%;
    width: 90%;
  }
  .listsInformation h3 {
    padding-top: 5%;
    font-size: 5.5vw;
    padding-bottom: 4%;
  }
  .listsInformation ol li{
    font-size: 4vw;
  }
  .mapBox {
    padding-bottom: 8%;
    padding-top: 10%;
  }
  .mapBox h2 {
    font-size: 8vw;
    padding-bottom: 5%;
  }
  .bottomInformationCarrer  {
    align-items: center;
    flex-direction: column;
    padding: 3%;
  }
  .bottomInformationCarrer p {
    padding-bottom: 8%;
    font-size: 4vw;
  }
}
</style>