<template>
    <div class="mainBoxMaps">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52871.83397158759!2d-118.47747513630271!3d34.08259538907241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20California%2C%20EE.%20UU.!5e0!3m2!1ses-419!2smx!4v1715198351519!5m2!1ses-419!2smx"
            class="mapFrame" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mapFrame {
    width: 100%;
    height: 500px;
}
.mainBoxMaps {
    display: flex;
    justify-content: center;
}
</style>