<template>
  <div class="googleForm">
    <iframe 
      src="https://docs.google.com/forms/d/e/1FAIpQLSe7kE7Ynjz3Zwn_PsyPxncr-0fRNA3fGf2oIWlblg_DgsCNnQ/viewform?embedded=true"
      class="responsiveFrame"
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
.googleForm {    
  width: 100%; 
  overflow: hidden; 
  padding-top: 100%;
} 
   
.responsiveFrame { 
  position: absolute; 
  top: 5%; left: 0; 
  bottom: 0; 
  right: 0; 
  width: 100%; 
  height: 100%; 
  border: none; 
} 

@media screen and (max-width: 1024px) {
  .responsiveFrame { 
    top: 1%; left: 0;
    height: 600px; 
  } 
}
@media screen and (max-width: 768px) {
  .responsiveFrame { 
    top: 6%; left: 0;
  } 
}
</style>
