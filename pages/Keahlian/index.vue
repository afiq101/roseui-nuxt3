<template>
    <div>
        <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full">
            <div class="rounded-t mb-5 px-0">
                <div class="flex flex-wrap items-center py-2 justify-between">
                    <div>
                        <div>
                            <span class="text-gray-800 font-bold text-2xl">Keahlian Wakaf</span>
                        </div>
                        <span class="text-sm text-gray-500">Senarai dibawah merupakan keahlian yang aktif dan tidak aktif dalam aplikasi Biz Amal.</span>
                    </div>
                    <div class="hidden md:block">
                        <button type="button" class="bg-primary-800 text-white p-2 rounded-md">
                            <span>
                                <Icon name="ic:outline-plus" />
                            </span>
                            <span>
                                Keahlian Baru
                            </span>
                        </button>
                    </div>
                </div>  
            </div>
        </div>
        <div>
            <div v-if="isLoading === true">
                <Skeleton />
            </div>

            <div v-if="isLoading === false" class="p-2">
                <rs-card class="bg-white p-2">
                    <div v-for="list in senarai_keahlian">
                        <NuxtLink :to="`/keahlian/keahlian/${list.membership_code}`" class="flex justify-between items-center border mb-2 rounded p-2">
                        <div class="flex">
                            <div>
                                <img :src="list.membership_image" class="w-18 h-18 rounded-md" />
                            </div>
                            <div class="pl-2 md:pl-4">
                                <p class="text-gray-600 font-medium">{{ list.membership_name }}</p>
                                <p class="text-gray-500 text-xs font-regular">{{ list.membership_code }}</p>
                                <p class="text-primary-800 text-xs font-regular underline pointer-events-auto hover:cursor-pointer">{{ 'RM' + parseFloat(list.membership_fees).toFixed(2) }}</p>
                                <p class="text-gray-500 text-xs font-regular mt-1">{{ list.membership_created_date }}</p>
                            </div>
                        </div>
                        <div>
                            <Icon name="material-symbols:arrow-forward-ios" size="16" />
                        </div>
                    </NuxtLink>
                    </div>
                </rs-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isLoading: true,
                senarai_keahlian: []
            }
        },
        mounted: async function() {
            this.isLoading = true;

            try {

                let get_data = await $fetch('/api/membership/list', {
                    method: 'post',
                    body: {}
                }).then(res => {
                    console.log('Log Response API : ', res);

                    if(res.status_code === 200) {
                        this.senarai_keahlian = res.body
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
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>

</style>