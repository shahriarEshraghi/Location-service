<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-card elevation="2" class="mx-auto pa-5" max-width="800">
          <h3 class="">
            ثبت آدرس
          </h3>
          <p class="mt-2 text-center">لطفا اطلاعات مورد نیاز را وارد کنید</p>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-container>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="$store.state.firstName"
                    :rules="fnameRules"
                    label="نـام"
                    name="firstName"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="$store.state.lastName"
                    :rules="lnameRules"
                    label="نام خـانوادگی"
                    name="lastName"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" class="pa-0">
                  <div class="d-md-flex align-center">
                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="$store.state.phoneNumber"
                        :rules="phoneRules"
                        label="تلفن همراه"
                        name="phoneNumber"
                        type="number"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="$store.state.telNumber"
                        :rules="phoneRules"
                        label="تلفن ثابت"
                        name="tel"
                        type="number"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <div class="d-flex justify-space-between align-center">
                        <div>جنسیت :</div>
                        <div>
                          <v-btn-toggle v-model="gender" rounded>
                            <v-btn color="primary" small>
                              <span>آقا</span>
                            </v-btn>
                            <v-btn color="primary" small>
                              <span>خانم</span>
                            </v-btn>
                          </v-btn-toggle>
                        </div>
                      </div>
                    </v-col>
                  </div>
                </v-col>

                <v-col cols="12" class="pa-0">
                  <div
                    class="d-md-flex d-d-block justify-space-between align-center"
                  >
                    <v-col cols="12" md="9">
                      <v-text-field
                        v-model="$store.state.address"
                        :rules="addressRules"
                        label="آدرس"
                        name="address"
                        type="text"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-btn
                        color="primary"
                        @click.stop="$store.state.mapModal = true"
                        small
                      >
                        تعیین موقعیت در نقشه
                      </v-btn>
                    </v-col>
                  </div>
                  <v-dialog v-model="$store.state.mapModal" max-width="800">
                    <location-picker></location-picker>
                  </v-dialog>
                </v-col>
                <v-col cols="12" md="12" class="pa-0 mt-sm-5">
                  <div class="d-md-flex justify-space-between">
                    <v-col cols="12" md="4" class="text-right">
                      <router-link
                        to="/"
                        class="text-decoration-none"
                      >
                        <v-btn
                          color="primary"
                          depressed
                          outlined
                          block
                          class="font-weight-bold"
                        >
                          <v-icon left>
                            mdi-arrow-right
                          </v-icon>

                          مشاهده همه آدرس ها
                        </v-btn>
                      </router-link>
                    </v-col>
                    <v-col cols="12" md="3" class="text-left">
                      <v-btn
                        color="primary"
                        depressed
                        outlined
                        block
                        :loading="isLoading"
                        :disabled="isLoading"
                        class="font-weight-bold"
                        @click="submitForm"
                      >
                        ثبت اطلاعات</v-btn
                      >
                    </v-col>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
        <v-snackbar
          absolute
          bottom
          color="success"
          v-model="successfulReq"
          min-height="4rem"
          :timeout="timeout"
        >
          {{ successfulReqText }}
        </v-snackbar>
        <v-snackbar
          absolute
          bottom
          color="red"
          v-model="failedReq"
          min-height="4rem"
          :timeout="timeout"
        >
          {{ failedReqText }}
        </v-snackbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LocationPicker from "./LocationPicker.vue";
export default {
  components: { LocationPicker },
  name: "NewAddress",
  data: () => ({
    valid: false,
    gender: 0,
    successfulReq: false,
    failedReq: false,
    isLoading: false,
    successfulReqText: " اطلاعات با موفقیت ثبت شد !",
    failedReqText: "  ثبت اطلاعات با خطا مواجه شد لطفا دوباره امتحان کنید !",
    timeout: 3000,
    fnameRules: [v => !!v || " لطفا نام خود را وارد کنید"],
    lnameRules: [v => !!v || " لطفا نام خانوادگی خود را وارد کنید"],
    addressRules: [v => !!v || " لطفا آدرس خود را وارد کنید"],
    phoneRules: [
      v => !!v || "لطفا شماره خود را وارد کنید",
      v => v.length === 11 || "شماره باید 11 رقم باشد"
    ]
  }),
  methods: {
    submitForm() {
      const isFormValid = this.$refs.form.validate();
      if (isFormValid) {
        this.isLoading = true;
        fetch(
          "https://manageuseraddress-default-rtdb.firebaseio.com/address.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              firstName: this.$store.state.firstName,
              lastName: this.$store.state.lastName,
              telNumber: this.$store.state.telNumber,
              phoneNumber: this.$store.state.phoneNumber,
              address: this.$store.state.address,
              mapMarker: this.$store.state.mapMarker.position,
              gender: this.gender
            })
          }
        )
          .then(response => {
            console.log(response.status); // Will show you the status
            if (response.ok) {
              this.successfulReq = true;
              this.isLoading = false;
            }
          })
          .catch(err => {
            console.log(err);
            this.failedReq = true;
            this.isLoading = false;
          });
        console.log("submit");
      }
    }
  }
};
</script>
