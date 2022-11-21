<template>
    <div>

        <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full">
            <div class="rounded-t mb-5 px-0">
                <div class="flex flex-wrap items-center py-2">
                    <div>
                        <div>
                            <span class="text-gray-800 font-bold text-2xl">Wakaf Biz Amal</span>
                        </div>
                        <span class="text-sm text-gray-500">Maklumat tetapan keahlian wakaf seperti maklumat setiap jenis keahlian wakaf dan sebagainya.</span>
                    </div>
                </div>  
            </div>
        </div>

        <div class="mt-2 grid w-full md:w-1/2 lg:w-1/2 2xl:w-1/3 grid-cols-2 gap-2">
            <div @click="switchTab('Kategori')">
                <rs-card :class="tab === 'Kategori' && 'bg-primary-800'" class="p-2 md:p-4 text-center">
                    <p :class="tab === 'Kategori' && 'text-white'" class="font-bold text-md">Kategori Pewakaf {{ list_wakaf_category.length > 0 && `(${list_wakaf_category.length})` }}</p>
                </rs-card>
            </div>
            <div @click="switchTab('Senarai')">
                <rs-card :class="tab === 'Senarai' && 'bg-primary-800'" class="p-2 md:p-4 text-center">
                    <p :class="tab === 'Senarai' && 'text-white'" class="font-bold text-md">Senarai Pewakaf</p>
                </rs-card>
            </div>
        </div>

        <div v-if="tab === 'Kategori'" class="grid grid-cols-1">
            <rs-card class="p-2 md:p-4">
                <div></div>
                <p class="font-medium text-lg">
                    Kategori Pewakaf
                </p>
                <ul v-if="isLoading === false" class="mt-6">
                    <li 
                    class="hover:bg-primary-800 hover:text-white border border-gray-200 mb-1 rounded-md shadow-sm"
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
                <p>
                    Senarai Semua Pewakaf
                </p>
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
        }
    }
}
</script>

<style lang="scss" scoped>

</style>