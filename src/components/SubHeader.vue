<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        <v-btn icon @click="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        Rick and Morty Catalog
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item>
          <v-list-item-title>Menu Item 1</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Menu Item 2</v-list-item-title>
        </v-list-item>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>Menu Item 3</v-list-item-title>
          </template>
          <v-list-item>
            <v-list-item-title>Submenu Item 1</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Submenu Item 2</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'SubHeader',
  data() {
    return {
      drawer: false,
    };
  },
};
</script>