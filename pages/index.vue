<template>
  <v-sheet elevation="5" rounded class="pa-3">
    <h1>
      List of Books
    </h1>
    <v-row>
      <v-col cols="12" md="3">
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template #activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Picker without buttons"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="date"
            @input="menu2 = false"
          />
        </v-menu>
      </v-col>
    </v-row>
    <v-row class="pa-3">
      Total results: {{ filteredBooks.length }}
    </v-row>
    <v-row>
      <v-col v-for="book in filteredBooks" :key="book.id" cols="12" md="4">
        <book-card :book="book" />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'Index',
  middleware: 'authenticaded',
  data() {
    return {
      lazyOptions: {
        threshold: .5,
      },
      date: '',
      activePicker: null,
      menu2: false,
    }
  },
  async fetch() {
    await this.$store.dispatch('books/fetchBooks')
  },
  computed: {
    ...mapGetters('books', ['books', 'filteredBooks']),
  },
  watch: {
    date() {
      this.filterBooks()
    },
  },
  methods: {
    filterBooks() {
      this.$store.commit('books/filterBooks', this.date)
    },
  },
})
</script>
