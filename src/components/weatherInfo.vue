<template>
  <div id="weatherapp" :class="weatherClass">
    <main>
      <v-col class="search-box">
        <v-text-field
          class="mx-auto"
          style="width: 400px; height: 50px"
          :loading="loading"
          density="compact"
          variant="solo"
          label="Search..."
          single-line
          hide-details
          v-model="query"
          @keydown.enter="fetchWeather"
        ></v-text-field>
        <v-col cols="auto">
          <v-btn @click="fetchWeather">Search</v-btn>
        </v-col>
      </v-col>
      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="location">
            {{ weather.name }}, {{ weather.sys.country }}
          </div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>

        <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
          <div class="weather">{{ weather.weather[0].main }}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import api_key from "./config.js";
export default {
  name: "WeatherInfo",
  data() {
    return {
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
      classMappings: {
        Thunderstorm: "thunderstorm",
        Drizzle: "drizzle",
        Rain: "rain",
        Snow: "snow",
        Mist: "mist",
        Smoke: "smoke",
        Haze: "haze",
        Dust: "dust",
        Fog: "fog",
        Sand: "sand",
        Ash: "ash",
        Squall: "squall",
        Tornado: "tornado",
        Clear: "clear",
        Clouds: "clouds",
      },
    };
  },
  methods: {
    fetchWeather() {
      fetch(
        `${this.url_base}weather?q=${this.query}&units=metric&APPID=${api_key}`
      )
        .then((res) => {
          return res.json();
        })
        .then(this.setResults);
    },
    setResults(results) {
      this.weather = results;
      const weatherMain = this.weather?.weather?.[0]?.main;
      this.weatherClass = this.classMappings[weatherMain] || "";
    },

    dateBuilder() {
      let d = new Date();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    },
  },
  computed: {
    weatherClass() {
      const weatherMain = this.weather?.weather?.[0]?.main;

      if (typeof weatherMain === "undefined") {
        return "none"; // Если нет данных о погоде, не добавлять класс
      } else {
        const mappedClass = this.classMappings[weatherMain];
        return mappedClass ? mappedClass : "";
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  background-color: #f5f5f5;
}
.thunderstorm {
  background-image: url("@/assets/thinderstorm.webp");
  background-size: cover;
}
.drizzle {
  background-image: url("@/assets/Drizzle.webp");
  background-size: cover;
}
.rain {
  background-image: url("@/assets/rain.webp");
  background-size: cover;
}
.snow {
  background-image: url("@/assets/snow.webp");
  background-size: cover;
}
.mist {
  background-image: url("@/assets/mist.webp");
  background-size: cover;
}
.smoke {
  background-image: url("@/assets/smoke.webp");
  background-size: cover;
}
.haze {
  background-image: url("@/assets/Haze.webp");
  background-size: cover;
}
.dust {
  background-image: url("@/assets/Dust.webp");
  background-size: cover;
}
.fog {
  background-image: url("@/assets/Fog.webp");
  background-size: cover;
}
.sand {
  background-image: url("@/assets/Sand.webp");
  background-size: cover;
}
.ash {
  background-image: url("@/assets/Ash.webp");
  background-size: cover;
}
.squall {
  background-image: url("@/assets/Squall.webp");
  background-size: cover;
}
.tornado {
  background-image: url("@/assets/Tornado.webp");
  background-size: cover;
}
.clear {
  background-image: url("@/assets/Clear.webp");
  background-size: cover;
}
.clouds {
  background-image: url("@/assets/Clouds.webp");
  background-size: cover;
}
#weatherapp {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  min-height: 65vh;
  transition: background-color 0.4s;
}

#weatherapp.warm {
  background-color: #ffcc66;
}

.weather-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.location-box {
  text-align: center;
  margin-bottom: 10px;
}

.location {
  font-size: 24px;
  font-weight: 500;
  color: #333;
}

.date {
  font-size: 16px;
  font-weight: 300;
  color: #666;
}

.weather-box {
  text-align: center;
  margin-top: 20px;
}

.temp {
  font-size: 72px;
  font-weight: 700;
  color: #333;
}

.weather {
  font-size: 24px;
  font-weight: 500;
  color: #555;
}
</style>
