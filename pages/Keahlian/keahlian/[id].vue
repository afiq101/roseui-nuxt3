<template>
    <div>
        <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full">
            <div class="rounded-t mb-5 px-0">
                <div class="flex flex-wrap items-center py-2 justify-between">
                    <div>
                        <div>
                            <span class="text-gray-800 font-bold text-2xl">Maklumat Keahlian {{$route.params.id}}</span>
                        </div>
                        <span class="text-sm text-gray-500">Maklumat dibawah merujuk kepada maklumat keahlian {{$route.params.id}}.</span>
                    </div>
                </div>  
            </div>
        </div>

        <div class="mt-4">
            <div class="grid grid-cols-3 gap-2">
                <div class="p-2">
                    <rs-card class="p-2 items-center justify-center content-center">
                        <center>
                            <img :src="senarai_keahlian.membership_image" class="w-60 h-32" />
                        </center>
                    </rs-card>
                </div>
                <div class="p-2 col-span-2">
                    <rs-card class="p-5">
                        <div>
                            <div>
                                <h3>Maklumat Keahlian</h3>
                            </div>
                        </div>

                        <div class="mt-5">
                            <div>
                                <p class="font-bold text-lg">Nama Keahlian</p>
                            </div>
                            <div class="">
                                <span>{{ senarai_keahlian.membership_name }}</span>
                            </div>
                        </div>

                        <div class="mt-4">
                            <div>
                                <p class="font-bold text-lg">Kod Keahlian</p>
                            </div>
                            <div class="">
                                <span>{{ senarai_keahlian.membership_code }}</span>
                            </div>
                        </div>

                        <div class="mt-4">
                            <div>
                                <p class="font-bold text-lg">Keterangan</p>
                            </div>
                            <div class="">
                                <span>{{ senarai_keahlian.membership_description }}</span>
                            </div>
                        </div>

                        <div class="mt-4">
                            <div>
                                <p class="font-bold text-lg">Alamat</p>
                            </div>
                            <div class="">
                                <span>{{ senarai_keahlian.membership_address }}</span>
                            </div>
                        </div>

                        <div class="mt-4">
                            <div>
                                <p class="font-bold text-lg">E-mel</p>
                            </div>
                            <div class="">
                                <span>{{ senarai_keahlian.membership_email }}</span>
                            </div>
                        </div>

                        <div class="mt-4">
                            <div>
                                <p class="font-bold text-lg">No. Telefon</p>
                            </div>
                            <div class="">
                                <span>{{ senarai_keahlian.membership_phone }}</span>
                            </div>
                        </div>

                        <div class="mt-4">
                            <div>
                                <p class="font-bold text-lg">Yuran Keahlian</p>
                            </div>
                            <div class="">
                                <span>RM {{ parseFloat(senarai_keahlian.membership_fees).toFixed(2) }}</span>
                            </div>
                        </div>

                        <div class="mt-4">
                            <div>
                                <p class="font-bold text-lg">Status Keahlian</p>
                            </div>
                            <div class="">
                                <span>{{ senarai_keahlian.membership_status === 1 ? 'Aktif' : 'Tidak Aktif' }}</span>
                            </div>
                        </div>

                        <div class="mt-4">
                            <div>
                                <p class="font-bold text-lg">Status Pembayaran</p>
                            </div>
                            <div class="flex justify-between items-center">
                                <div>
                                    <span>{{ senarai_keahlian.membership_payable === 1 ? 'Aktif' : 'Tidak Aktif' }}</span>
                                </div>
                                <div>
                                    <label :for="`toggle-status`" class="inline-flex relative items-center cursor-pointer">
                                        <input type="checkbox" :id="`toggle-status`" class="sr-only peer" :checked="senarai_keahlian.membership_payable === 1 ? true : false" @change="updateWakafStatus('wakaf_member_status', senarai_keahlian.membership_payable === 1 ? '0' : '1')">
                                        <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-800"></div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4">
                            <div>
                                <p class="font-bold text-lg">Gambar Keahlian</p>
                            </div>
                            <div class="">
                                <NuxtLink :to="senarai_keahlian.membership_image" target="_blank">
                                    <span class="text-primary-800 underline">
                                        {{ senarai_keahlian.membership_image }}
                                    </span>
                                </NuxtLink>
                            </div>
                        </div>


                    </rs-card>
                </div>
            </div>
        </div>
        <!-- {{ JSON.stringify(senarai_keahlian)}} -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isLoading: true,
                senarai_keahlian: {}
            }
        },
        mounted: async function() {
            await this.fetchMembership(this.$route.params.id)
        },
        methods: {
            async fetchMembership(membership_code) {
                this.isLoading = true;
                try {

                    let get_data = await $fetch('/api/membership/list', {
                        method: 'post',
                        body: {
                            membershipCode: membership_code
                        }
                    }).then(res => {
                        console.log('Log Response API : ', res);

                        if(res.status_code === 200) {
                            this.senarai_keahlian = res.body[0]
                        } else {
                            this.senarai_keahlian = []
                        }
                    }).catch(e => {
                        console.log('Error while hitting your API : ', e);
                    }).finally(
                        this.isLoading = false
                    )

                } catch(e) {
                    console.log('Syntax Error while hitting your API', e);
                    this.isLoading = false
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>