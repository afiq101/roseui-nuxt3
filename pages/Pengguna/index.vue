<template>
    <div>
        <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full">
            <div class="rounded-t mb-5 px-0">
                <div class="flex flex-wrap items-center py-2">
                    <div>
                        <div>
                            <span class="text-gray-800 font-bold text-2xl">Pengguna Aplikasi Biz Amal</span>
                        </div>
                        <span class="text-sm text-gray-500">Senarai pewakaf yang telah didaftarkan ke dalam sistem Biz Amal serta maklumat pewakaf.</span>
                    </div>
                </div>  
            </div>
        </div>
        <!-- pengguna {{ isLoading }} -->
        <div v-if="!isLoading && list.length > 0">
            <rs-card>
                <template #header>Senarai Pengguna Berdaftar</template>
                <template #body>
                    <rs-table
                    :data="list"
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
        <!-- <div v-if="list.length > 0">
            <ul>
                <li v-for="user in list" v-bind:key="user.accountId">
                    {{
                        user.accountUserName
                    }}
                </li>
            </ul>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: true,
            list: []
        }
    },
    mounted: async function() {
        await $fetch('/api/user/get', {
            method: 'POST',
        }).then(res => {
            console.log("RESPONSE API : ", res)
            if(res.status_code === 200) {
                this.list = res.data
            }
        }).finally(
            this.isLoading = false
        )
    }
}
</script>

<style lang="scss" scoped>

</style>