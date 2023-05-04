<template>
  <v-form>
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
            @click:append="sendMessage"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      message: '',
    }),

    methods: {
      sendMessage () {
        console.log('teste')
      },
      clearMessage () {
        this.message = ''
      }
    },
  }
</script>