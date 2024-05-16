<template>
  <div class="mainBoxCollage">
    <div
        v-for="photo in photos"
        :key="photo.id"
        class="boxPhotos"
    >
        <img :src="`src/data/${photo.img}`" alt="" class="photos">
    </div>
  </div>
</template>

<script>
import photosCollage from '@/data/collage.json'
export default {
    data() {
        return{
            photos: []
        }
    },
    created() {
        this.photos = photosCollage
    }
}
</script>

<style>
.mainBoxCollage {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px
}
.boxPhotos {
    flex: 20%;
    max-width: 20%;
    padding: 0 4px;
}
.photos {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
}
</style>