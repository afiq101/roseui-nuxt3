<template>
    <div>
        <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full">
            <div class="rounded-t mb-5 px-0">
                <div class="flex flex-wrap items-center py-2 justify-between">
                    <div>
                        <div>
                            <span class="text-gray-800 font-bold text-2xl">Transaksi Wakaf Pengguna</span>
                        </div>
                        <span class="text-sm text-gray-500">Berikut merupakan transaksi wakaf pengguna dan lain-lain.</span>
                    </div>
                </div>  
            </div>
        </div>
        <div v-if="isLoading === true">
            Loading....
        </div>
        <div v-if="isLoading === false">
            <rs-card class="p-2 md:p-4">
                <div v-if="!isLoading2 && user_wakaf_config !== {}">
                    <div>
                        <span class="text-gray-800 font-bold text-xl">Maklumat Keahlian Wakaf : {{ user_wakaf_config.accountUserFullname ? user_wakaf_config.accountUserFullname : user_wakaf_config.userUsername}}</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                        <div>
                            <label for="first-name" class="block text-sm font-medium text-gray-700">Kod Keahlian</label>
                            <input 
                                v-model="user_wakaf_config.wakaf_member_code"
                                type="text" 
                                disabled
                                class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm p-2"
                            >
                        </div>
                        <div>
                            <label for="first-name" class="block text-sm font-medium text-gray-700">Jenis Keahlian</label>
                            <input 
                                v-model="user_wakaf_config.wakaf_member_type"
                                type="text" 
                                disabled
                                class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm p-2"
                            >
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                        <div>
                            <label for="first-name" class="block text-sm font-medium text-gray-700">Level Keahlian</label>
                            <input 
                                v-model="user_wakaf_config.wakaf_member_level"
                                type="text" 
                                disabled
                                class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm p-2"
                            >
                        </div>
                        <div>
                            <label for="first-name" class="block text-sm font-medium text-gray-700">Tarikh Daftar</label>
                            <input 
                                v-model="user_wakaf_config.wakaf_member_created_date"
                                type="text" 
                                disabled
                                class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm p-2"
                            >
                        </div>
                        <div>
                            <label for="first-name" class="block text-sm font-medium text-gray-700">Jumlah Sumbangan</label>
                            <input 
                                type="number" 
                                v-model.number="user_wakaf_config.wakaf_member_current_amount"
                                disabled
                                class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm p-2"
                            >
                        </div>
                    </div>
                    <div class="flex justify-between p-2 md:p-3 mt-5 bg-gray-100 rounded items-center">
                        <div>
                            <label for="first-name" class="block text-sm font-medium text-gray-700">Status</label>
                        </div>
                        <div class="flex justify-between items-center">
                            <label :for="`toggle-status`" class="inline-flex relative items-center cursor-pointer">
                            <input type="checkbox" :id="`toggle-status`" class="sr-only peer" :checked="user_wakaf_config.wakaf_member_status === 1 ? true : false" @change="updateWakafStatus('wakaf_member_status', user_wakaf_config.wakaf_member_status === 1 ? '0' : '1')">
                            <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-800"></div>
                            </label>
                        </div>
                    </div>
                    <div class="p-2 md:p-3 mt-2 bg-gray-100 rounded">
                        <div class="flex justify-between items-center">
                            <div>
                                <label for="first-name" class="block text-sm font-medium text-gray-700">Auto-Wakaf (Recurring)</label>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="mr-2">
                                    <!-- <span>RM {{ parseFloat(amount_recurring).toFixed(2) }}</span> -->
                                </div>
                                <label :for="`toggle-recurring`" class="inline-flex relative items-center cursor-pointer">
                                <!-- <input 
                                    type="checkbox" 
                                    :id="`toggle-recurring`" 
                                    class="sr-only peer" 
                                    :checked="toggle_recurring" 
                                    @change="updateWakafRecurring('wakaf_member_recurring', !toggle_recurring)"
                                > -->
                                <input 
                                    type="checkbox" 
                                    :id="`toggle-recurring`" 
                                    class="sr-only peer" 
                                    v-model="toggle_recurring"
                                >
                                <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-800"></div>
                                </label>
                            </div>
                        </div>
                        <div v-if="toggle_recurring" class="mt-2 bg-gray-100 rounded items-center">
                            <div class="bg-transparent shadow-none">
                                <div>
                                    <p>Setup User Recurring Wakaf</p>
                                </div>
                                <div class="grid grid-cols-2 gap-2 mt-4">
                                    <div>
                                        <FormKit 
                                        label="Amaun Wakaf" 
                                        type="number" 
                                        validation="required|number|between:1,30001,value"
                                        placeholder="2.00"
                                        v-model="amount_recurring"
                                        error-behavior="live"
                                        >
                                        <template #prefix>
                                            <div class="bg-slate-100 dark:bg-slate-700 h-full rounded-l-md px-3">
                                            RM
                                            </div>
                                        </template>
                                        </FormKit>
                                    </div>
                                    <div>
                                        <FormKit
                                        type="select"
                                        label="Status"
                                        validation="required"
                                        validation-visibility="dirty"
                                        :options="options_status"
                                        />
                                    </div>
                                </div>
                                <div class="grid grid-cols-2 gap-2">
                                    <div>
                                        <FormKit
                                            type="date"
                                            label="Tarikh Mula"
                                            v-model="start_recurring"
                                            :help="`Tarikh mula mesti melebihi ${date_today}`"
                                            :validation="`date_after:${date_today}`"
                                            validation-visibility="live"
                                        />
                                    </div>
                                    <div>
                                        <FormKit
                                            type="date"
                                            label="Tarikh Akhir"
                                            v-model="end_recurring"
                                            :help="`Tarikh akhir mesti melebihi ${start_recurring}`"
                                            :validation="`date_after:${start_recurring}`"
                                            validation-visibility="live"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <FormKit
                                        type="checkbox"
                                        label="Notifikasi Pengguna"
                                        help="Setiap auto wakaf yang dilakukan akan maklum pada pengguna."
                                        name="Maklum Pengguna"
                                        input-class="icon-check text-primary-800"
                                        class="text-primary-800"
                                    />
                                </div>
                                <div class="flex justify-between">
                                    <div>

                                    </div>
                                    <div>
                                        <button class="bg-primary-800 hover:bg-primary-700 p-3 rounded w-40">
                                            <p class="text-white">Simpan</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <span>{{ JSON.stringify(user_wakaf_config) }}</span> -->
                </div>
            </rs-card>
            <rs-card v-if="list.length > 0" class="">
                <rs-table 
                :data="list"
                :options="{
                    variant: 'default'
                }"
                advanced
                >
                <template v-slot:name="data">
                    <NuxtLink
                    class="text-primary-400 hover:underline"
                    :to="data.value.path"
                    target="_blank"
                    >{{ data.text }}</NuxtLink
                    >
                </template>
                <template v-slot:visible="data">
                    <div class="flex justify-center items-center">
                    <Icon
                        name="mdi:eye-outline"
                        class="text-primary-400"
                        size="22"
                        v-if="data.value.visible"
                    />
                    <Icon
                        name="mdi:eye-off-outline"
                        class="text-gray-300"
                        size="22"
                        v-else
                    />
                    </div>
                </template>
                <template v-slot:action="data">
                    <div
                    class="flex justify-center items-center"
                    v-if="data.value.parentMenu != 'admin'"
                    >
                    <Icon
                        name="material-symbols:edit-outline-rounded"
                        class="text-primary-400 hover:text-primary-500 cursor-pointer mr-1"
                        size="22"
                        @click="openModalEdit(data.value)"
                    ></Icon>
                    <Icon
                        name="material-symbols:close-rounded"
                        class="text-primary-400 hover:text-primary-500 cursor-pointer"
                        size="22"
                        @click="deleteMenu(data.value)"
                    ></Icon>
                    </div>
                    <div class="flex justify-center items-center" v-else>-</div>
                </template>
                </rs-table>
            </rs-card>
        </div>
    </div>
</template>

<script>
    import { FormKit } from "@formkit/vue";
import { DateTime } from "luxon";

    const dt = DateTime.now();

    const date = dt.toISODate();
    const datetime = dt.toFormat("yyyy-MM-dd'T'HH:mm");
    const month = dt.toFormat("yyyy-MM");
    const time = dt.toFormat("HH:mm");
    const week = dt.toFormat("yyyy-'W'kk");
    const dateStart = dt.plus({ days: 1}).toFormat("yyyy-MM-dd");
    const dateEnd = dt.plus({ days: 7 }).toFormat("yyyy-MM-dd");

    export default {
    props: {
        userId: String,
    },
    data() {
        return {
            isLoading: false,
            isLoading2: true,
            userId: this.$route.query.userId,
            wakaf_code: this.$route.query.wakaf_code,
            user_wakaf_config: null,
            list: [],
            date_today: date,
            default_toggle_recurring: false,
            default_amount_recurring: false,
            default_start_recurring: dateStart,
            default_end_recurrng: dateEnd,
            toggle_recurring: false,
            amount_recurring: 0,
            start_recurring: dateStart,
            end_recurring: dateEnd,
            options_status: ["Aktif", "Tidak Aktif"]
        };
    },
    mounted: async function () {
        this.isLoading = true;
        await this.getUserWakafInformation(this.$route.query.userId, this.$route.query.wakaf_code);
        await this.getTransaction(this.$route.query.userId);
    },
    methods: {
        async currencyConverter(value) {
            return `RM ${parseFloat(value).toFixed(2)}`;
        },
        async updateWakafStatus(field, data) {
            this.isLoading = true;
            let update = await $fetch("/api/user/wakaf/updateinformation", {
                method: "post",
                body: {
                    userId: this.$route.query.userId,
                    wakafCode: this.$route.query.wakaf_code,
                    updateField: field,
                    updateData: data
                }
            }).then(res => {
                console.log("Return From API Update Information Wakaf : ", res);
                if (res.status_code === 200 && res.status === "successs") {
                    //alert('Update Success');
                    window.location.reload();
                }
                else {
                    alert("Update Failed. Please contact your system administrator.");
                }
                this.isLoading = false;
            }).catch(e => {
                console.log("Syntax Error at API Update Information Wakaf : ", e);
                alert("System Error. Please contact your system administrator.");
                this.isLoading = false;
            });
        },
        async updateWakafRecurring(field, data) {
            this.isLoading = true;
            let update = await $fetch("/api/user/wakaf/updateinformation", {
                method: "post",
                body: {
                    userId: this.$route.query.userId,
                    wakafCode: this.$route.query.wakaf_code,
                    updateField: field,
                    updateData: data
                }
            }).then(res => {
                console.log("Return From API Update Information Wakaf : ", res);
                if (res.status_code === 200 && res.status === "successs") {
                    //alert('Update Success');
                    window.location.reload();
                }
                else {
                    alert("Update Failed. Please contact your system administrator.");
                }
                this.isLoading = false;
            }).catch(e => {
                console.log("Syntax Error at API Update Information Wakaf : ", e);
                alert("System Error. Please contact your system administrator.");
                this.isLoading = false;
            });
        },
        async getUserWakafInformation(userid, wakafcode) {
            this.isLoading2 = true;
            let fetch = await $fetch("/api/user/wakaf/information", {
                method: "post",
                body: {
                    userId: userid,
                    wakafCode: wakafcode
                }
            }).then(res => {
                console.log("Response API 1 : ", res);
                if (res.status_code === 200 && res.status === "successs") {
                    this.default_toggle_recurring = res.body[0]["wakaf_member_recurring"] === 1 ? true : false;
                    this.default_amount_recurring = (res.body[0]["wakaf_member_recurring_amount"] === null || res.body[0]["wakaf_member_recurring_amount"] === 0) ? 0 : parseFloat(res.body[0]["wakaf_member_recurring_amount"]);
                    this.toggle_recurring = res.body[0]["wakaf_member_recurring"] === 1 ? true : false;
                    this.amount_recurring = (res.body[0]["wakaf_member_recurring_amount"] === null || res.body[0]["wakaf_member_recurring_amount"] === 0) ? 0 : parseFloat(res.body[0]["wakaf_member_recurring_amount"]);
                    this.user_wakaf_config = res.body[0];
                }
                else {
                    this.toggle_recurring = false;
                    this.amount_recurring = 0;
                    this.user_wakaf_config = {};
                }
                this.isLoading2 = false;
            }).catch(e => {
                console.log("Syntax Error API 1 : ", e);
                this.isLoading2 = false;
            });
        },
        async getTransaction(userid) {
            let fetch = await $fetch("/api/wakaf/listusertransaction", {
                method: "post",
                body: {
                    userId: userid
                }
            }).then(res => {
                if (res.status_code === 200 || res.status === "success") {
                    this.list = res.data;
                }
                else {
                    this.list = [];
                }
                this.isLoading = false;
            }).catch(err => {
                this.isLoading = false;
            }).finally(this.isLoading = false);
        }
    },
    components: { FormKit }
}
</script>

<style lang="scss" scoped>

</style>