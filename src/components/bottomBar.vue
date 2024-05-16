<template>
    <div class="bottomInformation">
        <router-link to="/">
            <img src="../assets/logoJJ.png" alt="" class="logoJJ">
        </router-link>
        <div class="iconsSocial">
            <a href="https://www.tiktok.com/@jj.event.staffing?_t=8mMWnJrAWhx&_r=1">
                <font-awesome-icon :icon="['fab', 'tiktok']" class="icon" />
            </a>
            <a href="https://www.instagram.com/jjeventstaffing?igsh=MzRlODBiNWFlZA==">
                <font-awesome-icon :icon="['fab', 'instagram']" class="icon" />
            </a>
            <a href="https://wa.me/14246537256">
                <font-awesome-icon :icon="['fab', 'whatsapp']" class="icon" />
            </a>
            <a href="https://www.linkedin.com/in/jj-staffing-354a21309/">
                <font-awesome-icon :icon="['fab', 'linkedin']"  class="icon" />
            </a>
        </div>
        <ul>
            <router-link to="/services">
                <li>Services</li>
            </router-link>
            <router-link to="/About">
                <li>About Us</li>
            </router-link>
            <router-link to="/carrer">
                <li>Carrer</li>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  
  }
</script>
  
<style scoped> 
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap');
.bottomInformation {
    display: flex;
    gap: 12%;
    justify-content: center;
    background-color:  #000000;
    color: #ffffff;
    align-items: center;
    width: 100%;
}
.bottomInformation img {
    width: 100px;
    height: auto;
}
.bottomInformation ul {
    padding-top: 30px ;
}
.bottomInformation ul li {
    padding: 10px;
    list-style: none;
    cursor: pointer;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: italic;

}
.bottomInformation ul li:hover {
    opacity: 0.5;
}
.iconsSocial {
    display: flex;
    flex-direction: row;
}
.iconsSocial .icon {
    padding: 20px;
    width: 40px;
    height: auto;
    cursor: pointer;
}
.icon:hover {
    opacity:0.5 ;
}
a {
    color: inherit;
    text-decoration: none;
}



@media screen and (max-width: 1024px) {
    .bottomInformation ul li {
        padding: 10px;
        list-style: none;
        cursor: pointer;
        font-size: 20px;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-style: italic;

}
}

@media screen and (max-width: 768px) { 
    .bottomInformation {
        gap: 5%;
        justify-content: baseline;
        padding-top: 0;
    }
    .bottomInformation img {
        width: 60px;
    }
    .bottomInformation ul li {
        padding-top: 0px;
        font-size: 2.5vw;
    }
    .iconsSocial .icon {
        padding: 10px;
        width: 23px;
    }
    .logoJJ {
        width: 2px;
    }
}
</style>