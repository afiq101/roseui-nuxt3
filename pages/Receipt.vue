<template>
    <div
        class="flex-none md:flex justify-center text-center items-center h-screen"
    >

        <div class="w-full md:w-3/4 lg:w-1/2 xl:w-2/6">
        <rs-card class="h-screen md:h-auto px-10 md:px-16 py-12 md:py-20 mb-0">

            <div>
                <client-only>
                <Vue3Lottie
                    :animationLink="status == 1 ? lottie_success : lottie_failed"
                    :height="200"
                    :width="200"
                />
                </client-only>
            </div>

            <h3 class="mb-4">Resit Pembayaran</h3>
            <p class="text-slate-500 mb-6">
            Tahniah! Tambah nilai sebanyak RM 100.00 anda telah berjaya
            </p>
            <div class="grid grid-cols-2">
            
            </div>
            <p class="mt-3 text-center text-slate-500">
            <NuxtLink to="/kredit" class="text-primary-800 hover:underline">
                <Icon 
                    class="text-primary-800"
                    name="ph:arrow-left"
                >
                </Icon> Kembali
            </NuxtLink>
            </p>
        </rs-card>
        </div>
    </div>
</template>

<script>
definePageMeta({
    layout: 'empty',
})

export default {
    data() {
        return {
            title: 'title',
            lottie_success: 'https://assets4.lottiefiles.com/packages/lf20_s2lryxtd.json',
            lottie_failed: 'https://assets9.lottiefiles.com/private_files/lf30_mlsj6yqm.json',
            status: null
        }
    },
    mounted: async function() {
        console.log("PARAMS : ", this.$route.query)

        let { status_id, billcode, msg, order_id, transaction_id } = this.$route.query;

        console.log("Status ID : ", status_id);
        console.log("BillCode : ", billcode);
        console.log("Message : ", msg);
        console.log("Order ID : ", order_id);
        console.log("Transaction ID : ", transaction_id);

        this.status = status_id;
    }
}
</script>

<style lang="scss" scoped>

</style>