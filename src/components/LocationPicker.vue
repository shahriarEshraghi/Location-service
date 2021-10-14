<template>
  <v-card class="pa-5">
    <div class="text-center font-weight-bold mb-3">
      انتخاب موقعیت روی نقشه
    </div>

    <v-card-text>
      <p class="mt-2 text-center">
        با کشیدن نشانگر روی نقشه موقعیت مورد نظر را انتخاب کنید
      </p>
      <GmapMap
        :center="$store.state.mapCenter"
        :zoom="15"
        map-style-id="roadmap"
        :options="$store.state.mapOptions"
        style="width: 100%; height: 60vh"
        ref="mapRef"
        @click="handleMapClick"
      >
        <GmapMarker
          :position="$store.state.mapMarker.position"
          :clickable="true"
          :draggable="true"
          @drag="handleMarkerDrag"
          @click="panToMarker"
        />
      </GmapMap>
      <!-- <button @click="geolocate">Detect Location</button>
                        <p>Selected Position: {{ $store.state.mapMarker.position }}</p> -->
    </v-card-text>

    <v-btn color="green darken-1" outlined @click="geolocate" block>
      تایید موقعیت
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: "LocationPickers",
  methods: {
    //detects location from browser
    geolocate() {
      navigator.geolocation.getCurrentPosition(position => {
       this.$store.state.mapMarker.position = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.panToMarker();
      });
      console.log(this.$store.state.mapMarker.position);
      this.$store.state.mapModal = false;
    },
    //sets the position of marker when dragged
    handleMarkerDrag(e) {
     this.$store.state.mapMarker.position = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    },
    //Moves the map view port to marker
    panToMarker() {
      this.$refs.mapRef.panTo(this.$store.state.mapMarker.position);
      this.$refs.mapRef.setZoom(18);
    },
    //Moves the marker to click position on the map
    handleMapClick(e) {
      this.$store.state.mapMarker.position = { lat: e.latLng.lat(), lng: e.latLng.lng() };
      console.log(e);
    }
  },
  mounted() {
    this.geolocate();
  }
};
</script>

<style></style>
