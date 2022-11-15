<template>
    <div class="p-5">
        <div class="lg:flex lg:items-center lg:justify-between">
            <div class="min-w-0 flex-1">
                <div class="mt-0 flex sm:items-center sm:justify-between" style="justify-content: space-between; align-items: baseline;">
                    <div>
                        <span class="text-2xl font-bold">Kredit / Tambah Nilai</span>
                    </div>
                </div>
                <span class="text-sm text-gray-500">Isi maklumat di bawah dan pilih amaun tambah nilai yang sesuai.</span>
            </div>
        </div>

        <div class="mt-5 p-4 bg-white rounded">
            <div>
                <div class="md:grid md:grid-cols-3 md:gap-6">

                    <div class="md:col-span-1">
                        <div class="">
                            <h3 class="m-0 text-lg font-medium leading-6 text-gray-900">Maklumat Tambah Nilai</h3>
                            <p class="text-xs text-gray-500">Sila lengkapkan maklumat pembayaran tambah nilai di bawah dan pilih kaedah bayaran tambah nilai anda di sebelah kanan.</p>
                        </div>

                        <div class="mt-4">
                            <div class="grid grid-cols-1 gap-6">
                                <div class="col-span-3 sm:col-span-2">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700">No. Rujukan Bayaran</label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <input type="text" disabled v-model="payment_reference_no" name="payment_reference_no" id="payment_reference_no" class="bg-gray-200 rounded-md border border-gray-300 text-sm w-full p-2" placeholder="Ahmad Husni">
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4 grid grid-cols-1 gap-6">
                                <div class="col-span-3 sm:col-span-2">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700">Deskripsi</label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <textarea type="text" disabled v-model="payment_description" name="payment_description" id="payment_description" class="rounded-md border border-gray-300 text-sm w-full p-2" placeholder="Ahmad Husni">
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4 grid grid-cols-1 gap-6">
                                <div class="col-span-3 sm:col-span-2">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700">Nama</label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <input v-model="payor_name" type="text" name="nama" id="nama" class="rounded-md border border-gray-300 text-sm w-full p-2" placeholder="Ahmad Husni">
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4 grid grid-cols-1 gap-6">
                                <div class="col-span-3 sm:col-span-2">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700">E-mel</label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <input v-model="payor_email" type="email" name="nama" id="nama" class="rounded-md border border-gray-300 text-sm w-full p-2" placeholder="ahmadhusni@gmail.com">
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4 grid grid-cols-1 gap-6">
                                <div class="col-span-3 sm:col-span-2">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700">No. Telefon</label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <input v-model="payor_phone" type="text" name="nama" id="nama" class="rounded-md border border-gray-300 text-sm w-full p-2" placeholder="0123456789">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-5 md:col-span-2 md:mt-0">
                    <div>
                        <div class="md:shadow sm:overflow-hidden sm:rounded-md">
                        <div class="space-y-6 bg-white md:px-4 py-5 sm:p-6">

                            <div class="grid grid-cols-1 gap-6">
                                <div class="col-span-3 sm:col-span-2">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700">Amaun</label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 p-2">RM</span>
                                        <input type="text" v-model="topup_amount" name="topup_amount" id="company-website" class="border border-gray-300 text-sm w-full p-2" placeholder="10.00">
                                    </div>
                                    <p v-if="topup_amount < 30.00" class="mt-2 text-xs text-red-800">* Minima amaun tambah nilai ialah RM30.00.</p>
                                </div>
                            </div>

                            <div class="mt-2">
                                <rs-collapse type="border">
                                <rs-collapse-item :title="`Online Banking (FPX) [${ bankcode ? bankcode : '--Sila Pilih--'}]`">
                                    <div class="grid grid-cols-1 sm:grid-cols-2 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
                                        <div 
                                        v-for="bank in list_bank_fpx" 
                                        @click="setBank(bank.CODE)"
                                        :class="bank.CODE === bankcode ? `p-2 bg-gray-200 text-gray-700 border h-20 rounded border-gray-200` : `p-2 bg-white text-gray-700 h-20 rounded border border-gray-200`" 
                                        style="align-items: center;"
                                        >
                                            <center class="py-auto">
                                                <img :src="`https://dev.toyyibpay.com/asset/img/logobank/${bank.CODE}.png`" class="w-7 h-7" />
                                                <span class="text-sm text-gray-500">{{ bank.NAME }}</span>
                                                <div v-if="bank.CODE === bankcode">
                                                    <font-awesome-icon class="w-5 h-5 text-green-600" :icon="['fas', 'check']" />
                                                </div>
                                            </center>
                                        </div>
                                    </div>
                                </rs-collapse-item>
                                <rs-collapse-item title="Kad Kredit & Debit (SenangPay)">
                                    <p>Collapse Item 2 content</p>
                                </rs-collapse-item>
                                </rs-collapse>
                            </div>

                        </div>
                        <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            <button type="button" @click="payWithFPX" class="m-0 inline-flex justify-center rounded-md border border-transparent bg-red-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                Tambah Nilai - RM {{ topup_amount ? parseFloat(topup_amount).toFixed(2) : parseFloat(0).toFixed(2) }}
                            </button>
                        </div>
                        </div>
                    </div>
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
            payor_name: "",
            payor_email: "",
            payor_phone: "",
            topup_amount: 0.00,
            payment_description: "",
            payment_reference_no: "",
            payment_method: null,
            bankcode: "",
            card_holder_name: "",
            card_bank_account: "",
            card_cvv: "",
            card_year: "",
            card_month: "",
            list_bank_loading: true,
            list_bank_fpx: [
                { "CODE":"ABB0233","NAME":"Affin Bank" },
                { "CODE":"ABMB0212","NAME":"Alliance Bank" },
                { "CODE":"AMBB0209","NAME":"AmBank" },
                {"CODE":"BIMB0340","NAME":"Bank Islam"},
                {"CODE":"BMMB0341","NAME":"Bank Muamalat"},
                {"CODE":"BKRM0602","NAME":"Bank Rakyat"},
                {"CODE":"BSN0601","NAME":"BSN"},
                {"CODE":"BCBB0235","NAME":"CIMB Clicks"},
                {"CODE":"HLB0224","NAME":"Hong Leong Bank"},
                {"CODE":"HSBC0223","NAME":"HSBC"},
                {"CODE":"KFH0346","NAME":"KFH"},
                {"CODE":"MB2U0227","NAME":"Maybank2U"},
                {"CODE":"OCBC0229","NAME":"OCBC Bank"},
                {"CODE":"PBB0233","NAME":"Public Bank"},
                {"CODE":"RHB0218","NAME":"RHB Bank"},
                {"CODE":"TEST0021","NAME":"SBI Bank A"},
                {"CODE":"TEST0022","NAME":"SBI Bank B"},
                {"CODE":"TEST0023","NAME":"SBI Bank C"},
                {"CODE":"SCB0216","NAME":"Standard Chartered"},
                {"CODE":"UOB0226","NAME":"UOB Bank"}
            ]
        }
    },
    mounted: async function() {
        let reference_no = "AWQFTOPUP" + new Date().getTime();
        if(reference_no && this.payment_reference_no === "") {
            this.payment_reference_no = reference_no;
            this.payment_description = `Bayaran tambah nilai untuk ${reference_no}`
        }
        // let fetch_bankfpx = await this.$axios.get('https://dev.toyyibpay.com/api/getBankFPX').then(res => {
        //     console.log("LIST BANK FPX : ", res.data);
        //     this.list_bank_fpx = res.data;
        // }).catch(e => {
        //     console.log("Unable to fetch list bank fpx : ", e);
        //     this.list_bank_fpx = [
        //         { "CODE":"ABB0233","NAME":"Affin Bank" },
        //         { "CODE":"ABMB0212","NAME":"Alliance Bank" },
        //         { "CODE":"AMBB0209","NAME":"AmBank" },
        //         {"CODE":"BIMB0340","NAME":"Bank Islam"},
        //         {"CODE":"BMMB0341","NAME":"Bank Muamalat"},
        //         {"CODE":"BKRM0602","NAME":"Bank Rakyat"},
        //         {"CODE":"BSN0601","NAME":"BSN"},
        //         {"CODE":"BCBB0235","NAME":"CIMB Clicks"},
        //         {"CODE":"HLB0224","NAME":"Hong Leong Bank"},
        //         {"CODE":"HSBC0223","NAME":"HSBC"},
        //         {"CODE":"KFH0346","NAME":"KFH"},
        //         {"CODE":"MB2U0227","NAME":"Maybank2U"},
        //         {"CODE":"OCBC0229","NAME":"OCBC Bank"},
        //         {"CODE":"PBB0233","NAME":"Public Bank"},
        //         {"CODE":"RHB0218","NAME":"RHB Bank"},
        //         {"CODE":"TEST0021","NAME":"SBI Bank A"},
        //         {"CODE":"TEST0022","NAME":"SBI Bank B"},
        //         {"CODE":"TEST0023","NAME":"SBI Bank C"},
        //         {"CODE":"SCB0216","NAME":"Standard Chartered"},
        //         {"CODE":"UOB0226","NAME":"UOB Bank"}
        //     ];
        // }).finally(
        //     this.list_bank_loading = false
        // )
    },
    methods: {
        async payWithFPX() {

            let pay = await $fetch('/api/payment/createPayment', {
                method: 'post',
                body: {
                    billName: 'Bayar bil tambah nilai',
                    billDescription: `Bayar Topup ${parseFloat(this.topup_amount).toFixed(2)}`,
                    billTo: this.payor_name,
                    billEmail: this.payor_email,
                    billPhone: this.payor_phone,
                    billAmount: parseFloat(this.topup_amount).toFixed(2)
                }
            }).then(res => {
                console.log("RESPONSE API : ", res);

                if(res.status_code === 200 && res.status === "success") {
                    window.location.href = res.data.url + `?billBankID=${this.bankcode}`
                }
            })
        },
        async payWithCC() {
            
        },
        setBank(bank) {
            this.bankcode = bank
        }
    }
}
</script>

<style lang="scss" scoped>

</style>