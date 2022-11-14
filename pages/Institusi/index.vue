<template>
    <div>
        <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full">
            <div class="rounded-t mb-5 px-0">
                <div class="flex flex-wrap items-center py-2">
                    <div>
                        <div>
                            <span class="text-gray-800 font-bold text-2xl">Institusi Wakaf</span>
                        </div>
                        <span class="text-sm text-gray-500">Senarai insitusi wakaf yang telah didaftarkan ke dalam sistem Biz Amal serta maklumat institusi.</span>
                    </div>
                </div>  
            </div>
        </div>
        <div v-if="!isLoading" class="ease-linear transition-all duration-150">
            <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full rounded">
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
                                <th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Nama</th>
                                <th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Kata Pengguna</th>
                                <th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">No. Tel</th>
                                <th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">E-mel</th>
                                <th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Negeri / Bandar</th>
                                <th class="px-4 text-gray-700 align-middle bg-gray-50 border-b border-solid border-gray-200 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr v-for="list in data" class="text-gray-700 hover:bg-gray-200 ease-linear transition-all duration-150">
                            <th class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4 text-left">{{ data.indexOf(list) + 1 }}</th>
                            <th class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4 text-left text-red-900">{{ list.organizationName ? list.organizationName : '--' }}</th>
                            <td class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4"> {{ list.organizationUsername}}</td>
                            <td class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4"> {{ list.organizationPhone }}</td>
                            <td class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4"> {{ list.organizationEmail }}</td>
                            <td class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4"> {{ list.organizationState }} / {{ list.organizationCity }}</td>
                            <td class="border-t-0 px-4 align-middle border-l-0 border-b border-solid border-r-0 text-xs whitespace-nowrap p-4"> {{ list.organizationStatus }}</td>
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

                let fetch = await $fetch("/api/organization/list").then(res => {
                    console.log("RETURN API : ", res);
                    if(res.status_code === 200 && res.status === "success") {
                        this.data = res.data
                    } 
                })

                this.isLoading = false;

            } catch(e) {
                //console.log("Syntax Error : ", e);
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