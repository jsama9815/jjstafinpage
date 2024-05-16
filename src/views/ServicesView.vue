<template>
  <NavBar />
  <div class="cards">
    <v-card
      class=" my-8 card"
      elevation="16"
      v-for="card in cards"
      :key="card.id"
    >
      <img :src="`src/data/${card.img}`" alt="Card Image" class="imgCard" />
      <div class="cardBody">
        <h1 class="titleCard">{{ card.title }}</h1>
        <p class="descriptionCard">{{ card.description }}</p>
        <h2 class="priceCard">{{ card.price }}</h2>
      </div>
    </v-card>
  </div>
  <bottomBar />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import servicesInformationJson from '../data/ServicesInformation.json'
import bottomBar from '@/components/bottomBar.vue';


export default {
  components: { 
    NavBar,
    bottomBar
  },
  data() {
    return {
      cards: []
    };
  },
  created() {
    this.cards = servicesInformationJson
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap');

.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(22, 21, 21, 0.9);
}
.card {
  width: 70%;
  height: 500px;
  border-radius: 20px;
}
.imgCard {
  width: 20%;
  height: 350px;
  border-radius: 40%;
  position: absolute;
  top: 10%;
  left: 5%;
}
.cardBody {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 20%;
}
.titleCard {
  padding: 3%;
  font-size: 40px;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}
.descriptionCard {
  width: 60%;
  display: flex;
  text-align:justify;
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-size: 20px;
  padding-top: 5%;
}
.priceCard {
  position: absolute;
  bottom: 5%;
  right: 5%;
  font-size: 20px;
}


@media screen and (max-width: 1024px) {
  .card {
    width: 90%;
    height: 450px;
    border-radius: 20px;
  }
  .descriptionCard {
    width: 70%;
    font-size: 19px;
    padding-top: 5%;
  }

}



@media screen and (max-width: 768px) { 
.card {
  width: 100%;
  height: 450px;
  border-radius: 20px;
}
.imgCard {
  height: 200px;
  top: 30%;
}
.titleCard {
  font-size: 25px;
}
.descriptionCard {
  width: 70%;
  font-size: 15px;
  padding-top: 5%;
}
}

</style>