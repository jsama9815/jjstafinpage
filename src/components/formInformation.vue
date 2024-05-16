<template>
  <div class="google-form-contenedor">
    <iframe 
      class="responsive-iframe" 
      src="https://docs.google.com/forms/d/e/1FAIpQLSf8jBa8GvLNyMbwgmoDRu8u_qSkDmfCHxUjlFQKMSfBy9EPLA/viewform?embedded=true"
      scrolling="yes"
    >
    </iframe>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.google-form-contenedor {    
  width: 100%; 
  overflow: hidden; 
  padding-top: 100%;
} 
   
.responsive-iframe { 
  position: absolute; 
  top: 0; left: 0; 
  bottom: 0; 
  right: 0; 
  width: 100%; 
  height: 100%; 
  border: none; 
} 
@media screen and (max-width: 1024px) {
  .responsive-iframe { 
    height: 600px; 
  } 
}
@media screen and (max-width: 768px) {
  .responsive-iframe { 
    top: 6%; left: 0;  
  } 
}
</style>
