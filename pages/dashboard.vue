<script setup>

definePageMeta({
  title: "Dashboard",
  // middleware: ["auth"], // This is for Login Auth for page
  // requiresAuth: true,  // This is use for Login Auth for page
})

const data1 = ref([]);
const data2 = ref([]);
const data3 = ref([]);
const data4 = ref([]);

var sparkline1Data = [47, 45, 54, 38, 56, 24, 65];
var sparkline2Data = [61, 35, 66, 41, 59, 25, 32];
var sparkline3Data = [25, 18, 36, 41, 43, 35, 14];
var sparkline4Data = [8, 16, 22, 41, 43, 35, 14];
const customers = [
  {
    name: "Ali",
    age: "25",
    city: "Kuala Lumpur",
    country: "Malaysia",
    totalPurchase: 1524,
    purchase: 23,
  },
  {
    name: "Kamal",
    age: "45",
    city: "Pulau Pinang",
    country: "Malaysia",
    totalPurchase: 643,
    purchase: 14,
  },
  {
    name: "Auni",
    age: "21",
    city: "Kelantan",
    country: "Malaysia",
    totalPurchase: 543,
    purchase: 12,
  },
  {
    name: "Iqmal",
    age: "19",
    city: "Negeri Sembilan",
    country: "Malaysia",
    totalPurchase: 258,
    purchase: 6,
  },
];

const randomizeArray = function (arg) {
  var array = arg.slice();
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

data1.value.push({
  name: "Revenues",
  data: randomizeArray(sparkline1Data),
});

data2.value.push({
  name: "Users",
  data: randomizeArray(sparkline2Data),
});

data3.value.push({
  name: "Products",
  data: randomizeArray(sparkline3Data),
});

data4.value.push({
  name: "Viewers",
  data: randomizeArray(sparkline4Data),
});

const chartOptions = computed(() => ({
  chart: {
    type: "area",
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    curve: "smooth",
  },
  fill: {
    opacity: 2,
  },
  labels: [...Array(7).keys()].map((n) => `2022-06-0${n + 1}`),
  xaxis: {
    type: "datetime",
  },
}));

const radialData = ref([1, 0, 0, 0, 0, 0]);

const chartOptionsRadial = computed(() => ({
  chart: {
    height: 1000,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        style: {
          colors: "#9CA3AF",
        },
        name: {
          offsetY: 30,
          fontSize: "18px",
        },
        value: {
          offsetY: -15,
          fontSize: "30px",
        },
        total: {
          show: true,
          label: "Jumlah",
          formatter: function (w) {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            return 249;
          },
        },
      },
    },
  },
  labels: ['Ahli Biasa', 'Ahli Hadid', 'Ahli Fiddah', 'Ahli Zahab', 'Ahli Zamrud', 'Ahli Balatin'],
  stroke: {
    lineCap: "round",
  },
}));

const transactionData = ref([
  {
    name: "Ahli Asas",
    data: [...Array(12).keys()].map((n) => Math.round(Math.random() * 100)),
  },
  {
    name: "Ahli Hadid",
    data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  {
    name: "Ahli Fiddah",
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    name: "Ahli Zahab",
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    name: "Ahli Zamrud",
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    name: "Ahli Balatin",
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
]);

const chartOptionsTransaction = computed(() => ({
  chart: {
    height: 800,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  colors: ["#60a5fa", "#22c55e", "#eab308", "#f97316", "#db2777", "#0d9488"],
  yaxis: {
    labels: {
      style: {
        colors: "#9CA3AF",
        fontSize: "12px",
      },
    },
  },
  xaxis: {
    type: "datetime",
    categories: [
      `${new Date().getFullYear()}-01-01`,
      `${new Date().getFullYear()}-02-01`,
      `${new Date().getFullYear()}-03-01`,
      `${new Date().getFullYear()}-04-01`,
      `${new Date().getFullYear()}-05-01`,
      `${new Date().getFullYear()}-06-01`,
      `${new Date().getFullYear()}-07-01`,
      `${new Date().getFullYear()}-08-01`,
      `${new Date().getFullYear()}-09-01`,
      `${new Date().getFullYear()}-10-01`,
      `${new Date().getFullYear()}-11-01`,
      `${new Date().getFullYear()}-12-01`,
    ],
    labels: {
      style: {
        colors: "#9CA3AF",
        fontSize: "14px",
        fontWeight: 400,
      },
      datetimeFormatter: {
        month: "MMM",
      },
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    labels: {
      colors: "#9CA3AF",
      useSeriesColors: false,
    },
  },
  tooltip: {
    x: {
      format: "MMMM",
    },
  },
}));

const bgColor = (bg) => {
  if(bg === "Ahli Asas") 
  {
      return 'bg-blue-400 hover:bg-blue-300'
  } 
  else if(bg === "Ahli Hadid") 
  {
      return 'bg-green-500 hover:bg-green-400' 
  } 
  else if(bg === "Ahli Fiddah") 
  {
      return 'bg-yellow-500 hover:bg-yellow-400'
  } 
  else if(bg === "Ahli Zahab") 
  {
      return 'bg-orange-600 hover:bg-orange-500'
  } 
  else if(bg === "Ahli Zamrud") 
  {
      return 'bg-pink-600 hover:bg-pink-500'
  } 
  else if(bg === "Ahli Balatin") 
  {
      return 'bg-teal-600 hover:bg-teal-500'
  }
}

const valueSide = (bg) => {
  if(bg === "Ahli Asas") 
  {
      return 561.00
  } 
  else if(bg === "Ahli Hadid") 
  {
      return 1024.56
  } 
  else if(bg === "Ahli Fiddah") 
  {
      return 0.00
  } 
  else if(bg === "Ahli Zahab") 
  {
      return 0.00
  } 
  else if(bg === "Ahli Zamrud") 
  {
      return 0.00
  } 
  else if(bg === "Ahli Balatin") 
  {
      return 0.00
  }
}

</script>

<template>
  <div>
    <LayoutsBreadcrumb />
    <!-- First Row -->
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-6">

      <!-- Summary Card #1 -->
      <rs-card>
        <div class="summary-1 pt-5 pb-3 px-5 flex items-center gap-4">
          <div
            class="p-5 flex justify-center items-center bg-primary-100 rounded-2xl"
          >
            <Icon
              class="text-primary-500"
              name="ic:outline-attach-money"
            ></Icon>
          </div>
          <div class="flex-1 truncate">
            <span class="block font-semibold text-xl leading-tight">
              RM 100,000</span
            >
            <span class="text-base font-semibold text-secondary"
              >Keseluruhan Wakaf</span
            >
          </div>
        </div>
        <ClientOnly>
          <VueApexCharts
            width="100%"
            height="53"
            :options="{
              ...chartOptions,
              colors: ['#F43F5E'],
              yaxis: {
                min: 0,
                max: Math.max(...data1[0].data) + 10,
              },
            }"
            :series="data1"
          ></VueApexCharts>
        </ClientOnly>
      </rs-card>

      <!-- Summary Card #2 -->
      <rs-card>
        <div class="summary-2 pt-5 pb-3 px-5 flex items-center gap-4">
          <div
            class="p-5 flex justify-center items-center bg-indigo-100 rounded-2xl"
          >
            <Icon
              class="text-indigo-500"
              name="ic:outline-account-circle"
            ></Icon>
          </div>
          <div class="flex-1 truncate">
            <span class="block font-semibold text-xl leading-tight">10</span>
            <span class="text-base font-semibold text-secondary"
              >Pewakaf</span
            >
          </div>
        </div>
        <ClientOnly>
          <VueApexCharts
            width="100%"
            height="53"
            :options="{
              ...chartOptions,
              colors: ['#6366F1'],
              yaxis: {
                min: 0,
                max: Math.max(...data2[0].data) + 10,
              },
            }"
            :series="data2"
          ></VueApexCharts>
        </ClientOnly>
      </rs-card>

      <!-- Summary Card #3 -->
      <rs-card>
        <div class="summary-3 pt-5 pb-3 px-5 flex items-center gap-4">
          <div
            class="p-5 flex justify-center items-center bg-orange-100 rounded-2xl"
          >
            <Icon class="text-orange-500" name="ic:outline-account-circle"></Icon>
          </div>
          <div class="flex-1 truncate">
            <span class="block font-semibold text-xl leading-tight"> 5</span>
            <span class="text-base font-semibold text-secondary"
              >Pewakaf Baru</span
            >
          </div>
        </div>
        <ClientOnly>
          <VueApexCharts
            width="100%"
            height="53"
            :options="{
              ...chartOptions,
              colors: ['#F97316'],
              yaxis: {
                min: 0,
                max: Math.max(...data3[0].data) + 10,
              },
            }"
            :series="data3"
          ></VueApexCharts>
        </ClientOnly>
      </rs-card>

      <!-- Summary Card #4 -->
      <rs-card>
        <div class="summary-4 pt-5 pb-3 px-5 flex items-center gap-4">
          <div
            class="p-5 flex justify-center items-center bg-blue-100 rounded-2xl"
          >
            <Icon class="text-blue-500" name="ic:outline-attach-money"></Icon>
          </div>
          <div class="flex-1 truncate">
            <span class="block font-semibold text-xl leading-tight">RM 2,456.00</span>
            <span class="text-base font-semibold text-secondary"
              >Wakaf Bulan Ini</span
            >
          </div>
        </div>
        <ClientOnly>
          <VueApexCharts
            width="100%"
            height="53"
            :options="{
              ...chartOptions,
              colors: ['#3B82F6'],
              yaxis: {
                min: 0,
                max: Math.max(...data4[0].data) + 10,
              },
            }"
            :series="data4"
          ></VueApexCharts>
        </ClientOnly>
      </rs-card>

    </div>

    <div class="flex flex-col md:flex-row gap-x-6">
      <div class="w-12/2 md:w-8/12 flex flex-col">
        <!-- Graph -->
        <rs-card class="flex-1">
          <template #header> Graf Transaksi Wakaf {{ new Date().getFullYear()}} </template>
          <template #body>
            <ClientOnly>
              <VueApexCharts
                width="100%"
                height="300"
                name="area"
                :options="chartOptionsTransaction"
                :series="transactionData"
              ></VueApexCharts
            ></ClientOnly>
          </template>
        </rs-card>
        <rs-card class="flex-1">
          <template #header> Ahli Terkini (Pewakaf Baru)</template>
          <template #body>
            <div
              v-for="(val, index) in customers"
              :key="index"
              class="flex justify-between items-center rounded-lg bg-gray-100 dark:bg-slate-700 p-5 first:mt-0 mt-3"
            >
              <div class="flex items-center gap-x-4">
                <img
                  :src="`https://avatars.dicebear.com/api/adventurer-neutral/${val.name}.svg`"
                  class="h-10 w-10 rounded-lg"
                />
                <div class="flex-1">
                  <div class="flex flex-col">
                    <span
                      class="text-gray-900 dark:text-white font-semibold text-lg"
                    >
                      {{ val.name }}
                    </span>
                    <span class="text-gray-600 dark:text-gray-50 text-sm">
                      RM{{ parseFloat(val.totalPurchase).toFixed(2) }} •
                      {{ val.purchase }} sumbangan
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <button
                  class="flex items-center p-4 rounded-full bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-900 shadow-md"
                >
                  <Icon size="20px" name="ic:round-format-list-bulleted"></Icon>
                </button>
              </div>
            </div>
          </template>
        </rs-card>
      </div>


      <div class="w-12/2 md:w-4/12 flex flex-col">
        <!-- Monthly Target Radial -->
        <rs-card class="flex-1">
          <template #header> Sumbangan Wakaf (Kategori Ahli) - {{new Date().getFullYear()}} </template>
          <template #body>
            <ClientOnly>
              <VueApexCharts
                width="100%"
                height="300"
                name="radialBar"
                :options="chartOptionsRadial"
                :series="radialData"
              ></VueApexCharts>
            </ClientOnly>
            <hr class="my-4" />
            <p class="text-xl py-5 font-medium">Kategori Ahli Pewakaf</p>
            <div
              class="flex item-center gap-x-4"
              :class="{
                'mt-0': index === 0,
                'mt-3': index !== 0,
              }"
              v-for="(val, index) in ['Ahli Asas', 'Ahli Hadid', 'Ahli Fiddah', 'Ahli Zahab', 'Ahli Zamrud', 'Ahli Balatin']"
              :key="index"
            >
              <div
                :src="`https://picsum.photos/id/${Math.round(Math.random() * 100)}/200/300`"
                class="h-20 w-20 object-cover rounded-lg"
                :class="bgColor(val)"
              ></div>
              <div class="flex-1 flex items-center">
                <div>
                  <span class="font-semibold text-lg leading-tight"
                    >{{ val }}</span
                  >
                  <p>
                    {{valueSide(val)}} sumbangan wakaf.
                  </p>
                </div>
              </div>
            </div>
          </template>
        </rs-card>
      </div>



    </div>
  </div>
</template>
