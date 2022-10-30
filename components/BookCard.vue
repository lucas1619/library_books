<template>
  <v-lazy
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition">
          <v-card
          class="mx-auto my-12 pa-6"
          max-width="374"
        >
          <v-img
            height="200px"
            :src="book.cover"
            contain
          ></v-img>

          <v-card-title>{{book.title}}</v-card-title>

          <v-card-text>
            <ul>
              <li>
                ISBN: {{book.isbn}}
              </li>
              <li>
                Author: {{book.author === '-' ? 'Unknown' : book.author}}
              </li>
              <li>
                Published: {{book.createAt}}
              </li>
              <li>
                Category: {{book.category}}
              </li>
            </ul>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="orange"
              text
              :href="book.url"
              target="_blank"
            >
              Busca Libre
            </v-btn>
          </v-card-actions>
        </v-card>
        </v-lazy>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Book } from '../services/library_api/models/Book'
export default defineComponent({
  name: 'BookCard',
  props: {
    book: {
      type: Object as () => Book,
      required: true
    }
  }
})
</script>
