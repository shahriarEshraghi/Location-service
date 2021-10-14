<template>
  <v-card max-width="375" class="mx-auto" outlined>
    <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="primary">
            mdi-account
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="mb-3">نام و نام خانوادگی</v-list-item-title>
          <v-list-item-subtitle>{{firstName}} {{lastName}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider inset></v-divider>
            <v-list-item>
        <v-list-item-icon>
          <v-icon color="primary">
            mdi-map-marker
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="mb-3">آدرس</v-list-item-title>
          <v-list-item-subtitle
            >{{address}}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-divider inset></v-divider>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="primary">
            mdi-phone
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="mb-3">موبایل</v-list-item-title>
          <v-list-item-subtitle>{{phoneNumber}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-action></v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="mb-3">شماره ثابت</v-list-item-title>
          <v-list-item-subtitle>{{telNumber}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: ["firstName", "lastName", "telNumber", "phoneNumber", "address"]
};
</script>

<style></style>
