<template>
  <ion-card>
    <ion-card-header>
      <img v-if="path" :src="`${path.path}`" alt="img" height="80"/>
    </ion-card-header>

    <ion-card-content>
        <ion-card-title> {{ name }}</ion-card-title>
      <ion-card-subtitle v-html="description"></ion-card-subtitle>
      <a href="">Zobrazit ulohy</a>
    </ion-card-content>
  </ion-card>
</template>

<script>
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/vue'

export default {
  props: ['name', 'path', 'description'],
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
  },
}
</script>

<style scoped>
ion-card {
  width: 270px;
  height: 250px;
  cursor: pointer;
  border-radius: 8px;
  --ion-background-color: white;
  box-shadow: 0px 0px 15px -8px rgb(0 0 0 / 20%);
}
ion-card-header {
display: flex;
justify-content: center;
align-items: center;
}
span:not(:last-of-type) {
  padding-right: 10px;
}
</style>
