<template>
    <div>

        <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full">
            <div class="rounded-t mb-5 px-0">
                <div class="flex flex-wrap items-center py-2 justify-between">
                    <div>
                        <div>
                            <span class="text-gray-800 font-bold text-2xl">Wakaf Biz Amal</span>
                        </div>
                        <span class="text-sm text-gray-500">Maklumat tetapan keahlian wakaf seperti maklumat setiap jenis keahlian wakaf dan sebagainya.</span>
                    </div>
                    <div class="hidden md:block">
                        <button type="button" class="bg-primary-800 text-white p-2 rounded-md">
                            <span>
                                <Icon name="ic:outline-plus" />
                            </span>
                            <span>
                                Kategori Baru
                            </span>
                        </button>
                    </div>
                </div>  
            </div>
        </div>

        <div class="mt-2 grid w-full md:w-1/2 lg:w-1/2 2xl:w-1/3 grid-cols-2 gap-2">
            <div @click="switchTab('Kategori')">
                <rs-card :class="tab === 'Kategori' && 'bg-primary-800'" class="p-2 md:p-4 text-center">
                    <p :class="tab === 'Kategori' && 'text-white'" class="font-bold text-sm">Kategori Pewakaf {{ isLoading === false && list_wakaf_category.length > 0 && `(${list_wakaf_category.length})` }}</p>
                </rs-card>
            </div>
            <div @click="switchTab('Senarai')">
                <rs-card :class="tab === 'Senarai' && 'bg-primary-800'" class="p-2 md:p-4 text-center">
                    <p :class="tab === 'Senarai' && 'text-white'" class="font-bold text-sm">Senarai Pewakaf {{ isLoading === false && list_all_wakaf.length > 0 && `(${list_all_wakaf.length})` }}</p>
                </rs-card>
            </div>
        </div>

        <div v-if="tab === 'Kategori'" class="grid grid-cols-1">
            <rs-card class="p-2 md:p-4">
                <div></div>
                <p class="font-medium text-md">
                    Kategori Pewakaf
                </p>
                <ul v-if="isLoading === false" class="mt-6">
                    <li 
                    :class="getBackgroundColor(list.wakaf_configurationName)"
                    class="text-white border border-gray-200 mb-1 rounded-md shadow-sm"
                    v-for="list in list_wakaf_category" v-bind:key="list.wakaf_configurationId">
                        <div class="p-2 md:p-3">
                            <div class="flex justify-between items-center">
                                <div class="">
                                    <div>
                                        <p class="text-md font-semibold">
                                            {{ list.wakaf_configurationName }}
                                        </p>
                                        <span class="text-xs">
                                            ({{ list.wakaf_configurationCode }})
                                        </span>
                                    </div>
                                    <div class="hidden md:block">
                                        <p class="text-xs font-semibold" v-if="list.wakaf_configurationMaxAmount">
                                            <span>
                                               • {{ currencyFormatter().format(list.wakaf_configurationMinAmount) }} - {{ currencyFormatter().format(list.wakaf_configurationMaxAmount) }}
                                            </span>
                                        </p>
                                        <p class="text-xs font-semibold" v-if="!list.wakaf_configurationMaxAmount">
                                            <span>
                                               • {{ currencyFormatter().format(list.wakaf_configurationMinAmount) }} dan ke atas.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="mr-2 md:mr-4">
                                        <p>
                                            (0) Ahli
                                        </p>
                                    </div>
                                    <Icon name="material-symbols:arrow-forward-ios" size="16" />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </rs-card>
        </div>

        <div v-if="tab === 'Senarai'" class="grid grid-cols-1">
            <rs-card class="p-2 md:p-4">
                <div></div>
                <p class="font-medium text-md">
                    Senarai Semua Pewakaf
                </p>
                <div class="mt-4">
                    
                    <div v-for="data in list_all_wakaf" v-bind:key="data.accountUsername">
                        <NuxtLink  
                            :to="{ 
                                path: `/wakaf/detail/${new Date().getTime()}`, 
                                query: { 
                                    userId: data.wakaf_member_userId 
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
                                <span>{{ data.wakaf_member_userId }}</span>
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
    data(){
        return {
            showModal: false,
            tab: 'Kategori',
            list_wakaf_category: [],
            list_all_wakaf: [],
            isLoading: true
        }
    },
    mounted: async function() {
        // HIT API 
        await this.getListCategory();
        await this.getAllPewakaf();
    },
    methods: {
        toggleModal() {
            this.showModal = !this.showModal
        },
        switchTab(value) {
            this.tab = value;
        },
        currencyFormatter(value) {

            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'MYR',

            // These options are needed to round to whole numbers if that's what you want.
            //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
            //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
            });
        },
        getBackgroundColor(bg) {

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
        },
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
        async getListCategory() {
            this.isLoading = true;

            let fetching = await $fetch('/api/wakaf/list', {
                method: 'post',
                body: {}
            }).then(res => {
                console.log('Log API : ', res);

                if(res.status_code === 200 && res.status === "success") {
                    this.list_wakaf_category = res.data
                } else {
                    this.list_wakaf_category = [];
                }

                this.isLoading = false;

            }).catch(error => {
                console.log('Syntax Error at API : ', error);
                this.isLoading = false;
            })
        },
        async getAllPewakaf() {

            this.isLoading = true;

            let fetching = await $fetch('/api/wakaf/listallpewakaf', {
                method: 'post',
                body: {
                    string: ''
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
        redirectDetail(id) {
            //return redirect(`/wakaf/detail/${id}`, { userId: id })
            let hash = new Date().getTime();

            this.$router.push({
                path: `/wakaf/detail/${hash}`,
                params: {
                    userId: id
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>