<template>
    <div class="grid grid-cols-1 lg:grid-cols-1 gap-4">
        <div v-if="isLoading">
            <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full">
                <div class="rounded-t mb-5 px-0">
                    <div class="flex flex-wrap items-center py-2">
                        <div>
                            <div>
                                <span class="text-gray-800 font-bold text-2xl">Transaksi Wakaf</span>
                            </div>
                            <span class="text-sm text-gray-500">Senarai transaksi keseluruhan wakaf termasuk nama pewakaf, nombor rujukan bayaran wakaf dan juga tarikh dan masa pembayaran.</span>
                        </div>
                    </div>  
                </div>
                <div class="rounded mb-0 px-0 border-0 justify-center">
                    <div class="block w-full overflow-x-auto rounded-lg justify-center">
                        <Skeleton />
                    </div>
                </div>
            </div>
        </div>

        <div v-if="!isLoading">
            <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full rounded">
                <div class="rounded-t mb-5 px-0">
                    <div class="flex flex-wrap items-center py-2">
                        <div>
                            <div>
                                <span class="text-gray-800 font-bold text-2xl">Transaksi Wakaf</span>
                            </div>
                            <span class="text-sm text-gray-500">Senarai transaksi keseluruhan wakaf termasuk nama pewakaf, nombor rujukan bayaran wakaf dan juga tarikh dan masa pembayaran.</span>
                        </div>
                    </div>  
                </div>
                <div class="rounded mb-0 px-0 border-0 bg-white">
                    <!-- <div class="flex flex-wrap items-center px-4 py-2">
                        <div class="relative w-full max-w-full flex-grow flex-1">
                            <h3 class="font-semibold text-base text-gray-900">Transaksi Wakaf</h3>
                        </div>
                    </div> -->
                    <div class="block w-full overflow-x-auto rounded-lg shadow-sm">
                    <table class="items-center w-full bg-white border-collapse">
                        <thead>
                            <tr>
                                <th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">No.</th>
                                <th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Rujukan</th>
                                <th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Nama</th>
                                <th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Institusi</th>
                                <th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Jumlah (RM)</th>
                                <th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Tarikh</th>
                                <th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr v-if="!isLoading && data.length < 1">
                            <td colspan="7" class="text-center border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4">
                                -- Tiada Maklumat Terkini --
                            </td>
                        </tr>
                        <tr v-for="trans in data" class="text-gray-700 hover:bg-gray-200">
                            <th class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4 text-left">{{ data.indexOf(trans) + 1 }}</th>
                            <th class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4 text-left text-red-900">{{ trans.billpaymentInvoiceNo ? trans.billpaymentInvoiceNo : '--' }}</th>
                            <td class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4"> {{ trans.billpaymentPayorName}}</td>
                            <td class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4"> {{ trans.organizationName}}</td>
                            <td class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4"> {{ trans.billpaymentAmount ? parseFloat(trans.billpaymentAmount).toFixed(2) : '0.00'}}</td>
                            <td class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4"> {{ trans.billpaymentCreatedDate}}</td>
                            <td 
                                :class="
                                    trans.billpaymentStatus === 1 ? 'border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs font-bold whitespace-nowrap p-4 text-green-600' :
                                    trans.billpaymentStatus === 3 ? 'border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs font-bold whitespace-nowrap p-4 text-red-600' :
                                    'border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs font-bold whitespace-nowrap p-4 text-gray-900'
                                ">
                                {{ 
                                    trans.billpaymentStatus === 1 ? "Berjaya" : 
                                    trans.billpaymentStatus === 3 ? "Gagal" : "--" 
                                }} 
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
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
            try {

                let fetch = await $fetch("/api/transaction/list").then(res => {
                    //console.log("RETURN API : ", res.data);
                    if(res.status_code === 200 && res.status === "success") {
                        this.data = res.data
                    } 
                })

                this.isLoading = false;

            } catch(e) {
                console.log("Syntax Error : ", e);
                this.isLoading = false;
            }
        },
        methods: {
            async fetchData() {

                
            }
        }
}
</script>

<style lang="scss" scoped>

</style>