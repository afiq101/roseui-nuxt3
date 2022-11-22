<template>
    <div>

        <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full">
            <div class="rounded-t mb-5 px-0">
                <div class="flex flex-wrap items-center justify-between py-2">
                    <div>
                        <div>
                            <span class="text-gray-800 font-bold text-2xl">Komisen</span>
                        </div>
                        <span class="text-sm text-gray-500">Maklumat di bawah memaparkan senarai komisen yang akan digunakan kepada setiap transaksi yang berjaya.</span>
                    </div>
                    <div class="hidden md:block">
                        <button type="button" class="bg-primary-800 text-white p-2 rounded-md">
                            <span>
                                <Icon name="ic:outline-plus" />
                            </span>
                            <span>
                                Komisen Baru
                            </span>
                        </button>
                    </div>
                </div>  
            </div>
        </div>

        <div v-if="isLoading">
            <Skeleton />
        </div>

        <div v-if="isLoading === false && data.length > 0">
            <rs-card class="p-2 md:p-4 bg-white rounded-md border">
                <rs-table 
                :data="data" 
                :options-advanced="{
                    sortable: true,
                    responsive: true,
                }"
                advanced
                />
            </rs-card>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                isLoading: true,
                data: []
            }
        },
        mounted: async function() {
            this.isLoading = true;

            let fetch = await $fetch('/api/commission/list').then(res => {
                console.log('Log API : ', res);

                if(res.status_code === 200) {
                    this.data = res.data
                } else {
                    this.data = []
                }

                this.isLoading = false;

            }).catch(e => {
                console.log("Syntax Error API : ", e);
                this.isLoading = false
            }).finally(
                this.isLoading = false
            )
        }
    }
</script>

<style lang="scss" scoped>

</style>