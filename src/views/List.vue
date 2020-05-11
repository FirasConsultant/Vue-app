<template>
  <v-container id="regular-tables" fluid tag="section">
    <!-- <base-v-component heading="Simple Tables" link="components/simple-tables" /> -->

    <base-material-card icon="mdi-clipboard-text" title="Simple Table" class="px-5 py-3">
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text"></th>
            <th class="primary--text">ID</th>
            <th class="primary--text">Name</th>
            <th class="primary--text">Type</th>
            <th class="text-right primary--text">Salary</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item,index) in forSale" :key="index">
            <img :src="item.image" :alt="item.name" class="card-img-top" />
            <td>{{ item.invId }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.type }}</td>
            <td class="text-right">{{ item.price | dollars }}</td>
            <td>
              <v-btn class="ma-2" tile outlined color="success" @click="addToCart(item)">
                <v-icon left dark>mdi-plus</v-icon>Add to Cart
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>
  </v-container>
</template>

<script>

import { mapActions } from "vuex";


export default {
  filters: {
    dollars: num => `$${num / 100}`
  },
  
  methods: {
     ...mapActions({
       addToCart:'addToCart',       
     })
  },
  data() {
    return {
      forSale: [
        {
          invId: 1,
          name: "An Item",
          image: "//placehold.it/200",
          price: 999,
          type: ""
        },
        {
          invId: 2,
          name: "Thing",
          image: "//placehold.it/200",
          price: 1499,
          type: ""
        },
        {
          invId: 3,
          name: "Doo-dad",
          image: "//placehold.it/200",
          price: 499,
          type: ""
        },
        {
          invId: 4,
          name: "Other thing",
          image: "//placehold.it/200",
          price: 299,
          type: ""
        }
      ]
    };
  }
};
</script>
 

 