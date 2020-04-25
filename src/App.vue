<template>
  <v-app>
    <v-card color="grey lighten-4" flat height="200px" tile>
      <v-toolbar dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title class="headline text-uppercase">
          <router-link to="/" tag="span" style="cursor: pointer">Movie Man</router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-flex xs12 sm6 md3 flat>
          <v-text-field label="Movie Name" v-model="searchString"></v-text-field>
        </v-flex>

        <v-btn icon :disabled="!dataAvailable" @click="searchMovie">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn>
          <v-badge let color="green">
            <span slot="badge">5</span>
            <v-icon>shopping_cart</v-icon>
          </v-badge>
        </v-btn>
      </v-toolbar>
    </v-card>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>




<script>
//<---! import --->
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default Vue.extend({
  name: "App",
  components: {},
  data: () => ({
    searchString: ""
  }),
  methods: {
    searchMovie() {
      this.$router.push("/search/" + this.searchString);
      this.searchString = "";
    }
  },
  computed: {
    dataAvailable() {
      return this.searchString !== null && this.searchString !== "";
    }
  }
});
</script>


 