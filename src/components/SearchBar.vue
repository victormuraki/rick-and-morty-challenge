<template>
  <v-form @submit.prevent="fetchCriteria">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="message"
            append-icon="mdi-magnify"
            variant="filled"
            clear-icon="mdi-close-circle"
            clearable
            label="Busque por um personagem"
            type="text"
            @click:append="fetchCriteria"
            @click:clear="clearMessage"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    data: () => ({
      message: '',
    }),

    methods: {
      ...mapActions({
        setSearchName: 'setSearchName',
        setCurrentPage: 'setCurrentPage'
    }),
      fetchCriteria() {
        this.setSearchName(this.message)
        this.setCurrentPage(1)
      },
      clearMessage() {
        this.message = ''
        this.setCurrentPage(1)
        this.setSearchName('')
      }
    },
  }
</script>