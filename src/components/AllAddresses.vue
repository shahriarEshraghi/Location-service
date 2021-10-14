<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card elevation="2" class="mx-auto pa-5" max-width="800">
          <h3 class="text-center">
            آدرس های ثبت شده
          </h3>
          <v-alert
            v-if="isResultEmpty"
            outlined
            type="warning"
            prominent
            border="left"
            class="mt-sm-5"
          >
            هیچ آدرسی جهت نمایش وجود ندارد. برای ثبت آدرس روی " افزودن آدرس جدید
            " کلیک کنید
          </v-alert>
          <v-sheet
            v-if="isLoading"
            :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
            class="pa-3"
          >
            <v-skeleton-loader
              class="mx-auto"
              max-width="300"
              type="card"
            ></v-skeleton-loader>
          </v-sheet>

          <div class="d-md-flex flex-wrap">
            <v-col cols="12" md="6" v-for="res in result" :key="res.id">
              <single-address
                :firstName="res.firstName"
                :lastName="res.lastName"
                :telNumber="res.telNumber"
                :phoneNumber="res.phoneNumber"
                :address="res.address"
              />
            </v-col>
          </div>
          <v-col cols="12" class="text-left">
            <router-link to="/NewAddress" class="text-decoration-none">
              <v-btn
                color="primary"
                depressed
                outlined
                class="font-weight-bold "
                left
              >
                <v-icon left>
                  mdi-plus
                </v-icon>
                افزودن آدرس جدید
              </v-btn>
            </router-link>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SingleAddress from "./SingleAddress.vue";
export default {
  name: "AllAddresses",
  components: { SingleAddress },
  inject: {
    theme: {
      default: { isDark: false }
    }
  },
  data: () => {
    return {
      result: [],
      isLoading: false,
      isResultEmpty:false
    };
  },
  created() {
    this.isLoading = true;
    fetch("https://manageuseraddress-default-rtdb.firebaseio.com/address.json")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
        this.isLoading = false;
        const res = [];
        for (const id in data) {
          res.push({
            id: id,
            firstName: data[id].firstName,
            lastName: data[id].lastName,
            telNumber: data[id].telNumber,
            phoneNumber: data[id].phoneNumber,
            address: data[id].address
          });
        }
        this.result = res;
        if(this.result.length===0){
          this.isResultEmpty=true;
        }
        console.log(this.result);
      });
  }
};
</script>

<style></style>
