<template>
    <div>
        <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full">
            <div class="rounded-t mb-5 px-0">
                <div class="flex flex-wrap items-center py-2 justify-between">
                    <div>
                        <div>
                            <span class="text-gray-800 font-bold text-2xl">Kategori Pewakaf : {{ $route.params.id }}</span>
                        </div>
                        <span class="text-sm text-gray-500">Maklumat tetapan keahlian wakaf seperti maklumat setiap jenis keahlian wakaf dan sebagainya.</span>
                    </div>
                    <!-- <div class="hidden md:block">
                        <button type="button" class="bg-primary-800 text-white p-2 rounded-md">
                            <span>
                                <Icon name="ic:outline-plus" />
                            </span>
                            <span>
                                Kategori Baru
                            </span>
                        </button>
                    </div> -->
                </div>  
            </div>
        </div>
        <div>
            <rs-card class="p-2 md:p-4">
                <div></div>
                <p class="font-medium text-md">
                    Senarai Semua Pewakaf
                </p>
                <div class="mt-4">
                    
                    <div v-for="data in list_all_wakaf" v-bind:key="data.accountUsername" class="mb-2">
                        <NuxtLink  
                            :to="{ 
                                path: `/wakaf/detail/${new Date().getTime()}`, 
                                query: { 
                                    userId: data.wakaf_member_userId,
                                    wakaf_code: data.wakaf_member_code
                                    }
                                }"
                        >
                        <div 
                            :class="getBorderColor(data.wakaf_configurationName)"
                            class="p-4 border-l-4 border-t-2 border-t-gray-200 flex items-center justify-between rounded-md shadow-sm">
                            <div class="flex">
                                <div>
                                    <img :class="getBorderColor(data.wakaf_configurationName)" class="w-14 h-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/800px-Default_pfp.svg.png" />
                                </div>
                                <div class="pl-4">
                                    <p class="font-bold">{{ data.accountUsername }} ({{data.wakaf_member_code}})</p>
                                    <p class="text-sm">{{ data.wakaf_configurationName }} ({{data.wakaf_configurationCode}})</p>
                                    <p class="text-xs font-bold text-primary-800">RM {{ parseFloat(data.wakaf_member_current_amount).toFixed(2) }}</p>
                                </div>
                            </div>
                            <div class="items-center">
                                <!-- <span>{{ data.wakaf_member_userId }}</span> -->
                                <Icon name="material-symbols:arrow-forward-ios" size="16" />
                            </div>
                        </div>
                        </NuxtLink>
                    </div>
                </div>
            </rs-card>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isLoading: true,
                group_id: this.$route.params.id,
                list_all_wakaf: []
            }
        },
        mounted: async function() {
            await this.getAllPewakaf();
        },
        methods: {
            getBorderColor(bg) {

                if(bg === "Ahli Asas") 
                {
                    return 'border-blue-400 hover:border-blue-300'
                } 
                else if(bg === "Ahli Hadid") 
                {
                    return 'border-green-500 hover:border-green-400' 
                } 
                else if(bg === "Ahli Fiddah") 
                {
                    return 'border-yellow-500 hover:border-yellow-400'
                } 
                else if(bg === "Ahli Zahab") 
                {
                    return 'border-orange-600 hover:border-orange-500'
                } 
                else if(bg === "Ahli Zamrud") 
                {
                    return 'border-pink-600 hover:border-pink-500'
                } 
                else if(bg === "Ahli Balatin") 
                {
                    return 'border-teal-600 hover:border-teal-500'
                }
            },
            async getAllPewakaf() {

            this.isLoading = true;

            let fetching = await $fetch('/api/wakaf/listallpewakaf', {
                method: 'post',
                body: {
                    string: '',
                    wakaf_code: this.$route.params.id
                }
            }).then(res => {
                console.log('Log API : ', res);

                if(res.status_code === 200 && res.status === "success") {
                    this.list_all_wakaf = res.data
                } else {
                    this.list_all_wakaf = [];
                }

                this.isLoading = false;

            }).catch(error => {
                console.log('Syntax Error at API : ', error);
                this.isLoading = false;
            })
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>