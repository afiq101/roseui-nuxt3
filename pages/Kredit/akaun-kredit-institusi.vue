<template>
    <div>

        <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full">
            <div class="grid grid-cols-1 rounded-t mb-5 px-0 content-center justify-between">
                <div class="flex flex-wrap items-center py-2">
                    <div>
                        <div>
                            <span class="text-gray-800 font-bold text-2xl">Akaun Kredit Institusi</span>
                        </div>
                        <span class="text-sm text-gray-500">
                            Pengurusan akaun kredit institusi seperti senarai akaun kredit institusi, kemaskini akaun kredit institusi dan lain-lain.
                        </span>
                    </div>
                </div>  
            </div>
        </div>

        <div>
            <div v-if="isLoading">
                <Skeleton />
            </div>
            <div v-if="!isLoading && list_wallet.length > 0">
                <rs-card>
                    <template #header>Senarai Akaun Kredit Institusi</template>
                    <template #body>
                        <rs-table
                        :data="list_wallet"
                        :options-advanced="{
                            sortable: true,
                            responsive: true,
                        }"
                        advanced
                        >
                        </rs-table>
                    </template>
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
            list_wallet: []
        }
    },
    mounted: async function() {
        this.isLoading = true;

        let fetch = await $fetch('/api/organization/wallet/list', {
            method: 'post',
            body: {}
        })
        .then(res => {

            console.log("RESPONSE API : ", res);

            if(res.status_code === 200) {
                this.list_wallet = res.data
            }else {

            }
            this.isLoading = false
        }).catch(e => {
            console.log("Axios Error : ", e);
            this.isLoading = false
        })
    }
}
</script>

<style lang="scss" scoped>

</style>