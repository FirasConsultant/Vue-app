<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular indeterminate :size="150" :width="8" color="green"></v-progress-circular>
    </div>
  </v-container>
  <v-container v-else grid-list-xl>
    <div>
      ffffffff
      <p>{{ count }}</p>
      <p>
        <button @click="increment">+</button>
        <button @click="decrement()">-</button>
      </p>
    </div>

    <v-layout wrap>
      <v-flex xs3 v-for="(item, index) in wholeResponse" :key="index" mb-4>
        <v-card>
          <v-responsive :aspect-ratio="16/9">
            <v-img :src="item.Poster" aspect-ratio="1"></v-img>
            <v-card-title primary-title>
              <div>
                <h4>{{item.Title}}</h4>
                <div>Year: {{item.Year}}</div>
                <div>Type: {{item.Type}}</div>
                <div>IMDB-id: {{item.imdbID}}</div>
              </div>
            </v-card-title>
            <v-card-actions class="justify-center">
              <v-btn text color="green" @click="singleMovie(item.imdbID)">View</v-btn>
            </v-card-actions>
          </v-responsive>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>




<script>
// @ is an alias to /src


import movieApi from "@/services/MovieApi";
import { mapGetters, mapState,mapActions } from "vuex";


export default {
  data() {
    return {
      wholeResponse: [],
      loading: true
    };
  },
  mounted() {
    movieApi
      .fetchMovieCollection("indiana")
      .then(response => {
        this.wholeResponse = response.Search;
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
      });
  },

  methods: {
     ...mapActions({
       increment:'increment',
       decrement:'decrement'
     }),
    singleMovie(id) {
      this.$router.push("/movie/" + id);
    },
  },
  computed: {
    ...mapGetters(['count']),
    ...mapState(['count']),
  }
};
</script>

<!--
<style lang="stylus" scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
-->

