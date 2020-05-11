<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link  :href="item.path">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-card color="grey lighten-4" flat height="200px" tile>
      <v-toolbar dense>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title class="headline text-uppercase">
          <router-link to="/" tag="span" style="cursor: pointer">Movie Man</router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-flex xs12 sm6 md3 flat>
          <v-text-field label="Movie Name" v-model="searchString"></v-text-field>
        </v-flex>

        <v-tooltip left>
          <template>
            <v-btn icon :disabled="!dataAvailable" @click="searchMovie">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </template>
          <span>Left tooltip</span>
        </v-tooltip>

        <v-btn icon :disabled="!dataAvailable" @click="searchMovie">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-menu bottom left offset-y origin="top right" transition="scale-transition">
          <template v-slot:activator="{ attrs, on }">
            <v-btn
              class="ml-2"
              min-width="0"
              text
              v-bind="attrs"
              v-on="on"
              @click.stop="dialog = true"
            >
              <v-badge color="green" overlap bordered>
                <template v-slot:badge>
                  <span>{{ inCart.length }}</span>
                </template>
                <v-icon>shopping_cart</v-icon>
              </v-badge>
            </v-btn>
          </template>

          <v-list :tile="false" nav>
            <div>
              <app-bar-item v-for="(n, i) in notifications" :key="`item-${i}`">
                <v-list-item-title v-text="n" />
              </app-bar-item>
            </div>
          </v-list>
        </v-menu>

        <!-- <v-btn>
          <v-badge let color="green">
            <span slot="badge">(0)</span>      
            <v-icon>shopping_cart</v-icon>
          </v-badge>
        </v-btn>-->
      </v-toolbar>
    </v-card>

    <!-- popup modal for shopping cart-->
    <v-dialog v-model="dialog" max-width="690">
     

      <v-card hover>
        <v-card-media
          src="https://raw.githubusercontent.com/ijklim/simon-game/gh-pages/assets/img/bg--game-pad.jpg"
          height="150px"
        ></v-card-media>

        <v-card-title>
          <h2>Cart</h2>
        </v-card-title>

        <v-card-text>Number of items pushed in your cart :{{ inCart.length }}</v-card-text>

        <v-container v-if="inCart.length<0">
          <div class="text-xs-center">
            <v-progress-circular indeterminate :size="150" :width="8" color="green"></v-progress-circular>
          </div>
        </v-container>
        <v-container v-else grid-list-xl>
          <div>
            <tr v-for="(item,index) in inCart" :key="index">
              <img :src="item.image" :alt="item.name" class="card-img-top" />
              <td>{{ item.invId }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.type }}</td>
              <td class="text-right">{{ item.price }}</td>
            </tr>
          </div>
        </v-container>
      </v-card>
    </v-dialog>

    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>




<script>
//<---! import --->
import Vue from "vue";
import Vuetify from "vuetify";
import { mapGetters, mapState } from "vuex";
import "vuetify/dist/vuetify.min.css";

//import NavigationTop from "./components/shared/NavigationTop";
import Footer from "./components/shared/Footer";
//import StatCard from "./components/base/StatsCard";

Vue.use(Vuetify);

export default Vue.extend({
  name: "App",
  components: { Footer, }, //StatCard,NavigationTop ,},
  data: () => ({
    searchString: "",
    drawer: null,
    items: [
      { title: "Home", icon: "dashboard", path: '/' },
      { title: "List of movies", icon: "question_answer", path: '/list', }
    ],
    notifications: [],
    dialog: false
  }),
  methods: {
    searchMovie() {
      this.$router.push("/search/" + this.searchString);
      this.searchString = "";
    },
    getImgUrl(pic) {
      return require(pic + ".png");
    },

    selectSource(source) {
      this.$emit("selectsource", source);
    }
  },
  computed: {
    dataAvailable() {
      return this.searchString !== null && this.searchString !== "";
    },
    ...mapGetters(["inCart"]),
    ...mapState(["inCart"])
  }
});
</script>


 