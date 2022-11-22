<template>
    <div>
        <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full">
            <div class="rounded-t mb-5 px-0">
                <div class="flex flex-wrap items-center py-2 justify-between">
                    <div>
                        <div>
                            <span class="text-gray-800 font-bold text-2xl">Transaksi Wakaf Pengguna</span>
                        </div>
                        <span class="text-sm text-gray-500">Berikut merupakan transaksi wakaf pengguna dan lain-lain.</span>
                    </div>
                </div>  
            </div>
        </div>
        <div v-if="isLoading === true">
            Loading....
        </div>
        <div v-if="isLoading === false">
            <rs-card v-if="list.length > 0" class="p-2 md:p-4">
                <rs-table 
                :data="list"
                advanced
                >

                </rs-table>
            </rs-card>
        </div>
    </div>
</template>

<script>
    export default {
    props: {
        userId: String,
    },
    data() {
        return {
            isLoading: false,
            userId: this.$route.query.userId,
            list: []
        };
    },
    mounted: async function () {
        this.isLoading = true;
        await this.getTransaction(this.$route.query.userId);
    },
    methods: {
        async getTransaction(userid) {
            console.log("User ID : ", userid);
            let fetch = await $fetch("/api/wakaf/listusertransaction", {
                method: "post",
                body: {
                    userId: userid
                }
            }).then(res => {
                console.log("Response API : ", res);
                if (res.status_code === 200 || res.status === "success") {
                    this.list = res.data;
                }
                else {
                    this.list = [];
                }
                this.isLoading = false;
            }).catch(err => {
                console.log("Syntax Error while fething your data : ", err);
                this.isLoading = false;
            }).finally(this.isLoading = false);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>