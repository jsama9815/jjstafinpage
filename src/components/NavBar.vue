`<template>
<div :class="{'navBarBox' : true, 'scrolled' : scrolled}">
        <div class="left">
            <router-link to="/" >
                <img src="../assets/logoJJ.png" alt="" class="logoJJ">
            </router-link>
        </div>
        <div class="rigth">
        <ul class="options">
            <li>
                <router-link to="/">
                    <font-awesome-icon :icon="['fas', 'home']" class="iconHome"/>
                </router-link>
            </li>
            <li>
                <router-link to="/Services">
                    Services
                </router-link>
            </li>
            <li>
                <router-link to="/About">
                    About Us
                </router-link>
            </li>
            <li>
                <router-link to="/Carrer">
                    Carrer
                </router-link>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scrolled: false,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            this.scrolled = window.scrollY > 0;
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap');
.navBarBox {
    width: 100%;
    height: 90px;
    display: flex;
    font-size: 23px;
    justify-content: space-between;
    align-items: center;
    background-color:  #000000;
    color: #ffffff;
    position: sticky;
    top: 0;
    z-index: 100;
    transition: background-color 0.3s ease;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal
}
.navBarBox.scrolled {
    background-color: rgba(0, 0, 0, 0.5);
    height: 80px;
}
.left{
    display: flex;
    position: absolute;
    left: 15%;
    padding-left: 30px;
}
.left h1 {
    font-size: 20px;    
}
.rigth {
    display: flex;
    position: absolute;
    left: 35%;
}

.rigth ul{
    display: flex;
    flex-direction: row;
    list-style: none;
    
}
.rigth ul li {
    position: relative;
    cursor: pointer;
    padding-right: 65px;
}
.rigth ul li:hover{
    text-decoration: underline;
}
.rigth ul ol {
    display: none;
    position: absolute;
    top: 100%; 
    left: -20px; 
    list-style: none;
    margin: 0;
    color: #ffffff;
    background-color:#000000;
    border-radius: 10px;
    width: 110%;
    height: auto;
}
.rigth ul li:hover > ol {
    display: block;
}
.navBarBox.scrolled ol {
    background-color: rgba(26, 26, 26, 0.5);

}
.rigth ul ol li {
    padding-top: 20px;
} 
.rigth ul ol li:hover {
    opacity: 0.5;
}
.iconHome:hover {
    opacity: 0.5;
}
a {
  color: inherit; 
  text-decoration: none;
}
router-link.router-link-active,
router-link.router-link-exact-active,
router-link:hover {
  background-color: transparent;
}
.logoJJ {
    max-width: 100px;
}


@media screen and (max-width: 1024px) {
    .left{
        left: 13%;
        padding-left: 0px;
    }
    .rigth ul li {
        padding-right: 70px;
    }
}



@media screen and (max-width: 768px) { 
    .navBarBox {
        height: 70px;
        font-size: 3vw;
    }
    .navBarBox.scrolled {
        height: 60px;
    }
    .left{
        left: 5%;
        padding-left: 0px;
    }
    .rigth {
        left: 35%;
    }
    .rigth ul li {
        padding-right: 20px;
    }
    .logoJJ {
        max-width: 60px;
    }
}
</style>