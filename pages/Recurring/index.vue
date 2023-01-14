<template>
    <div>
        <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full">
            <div class="rounded-t mb-5 px-0">
                <div class="flex flex-wrap items-center py-2 justify-between">
                    <div>
                        <div>
                            <span class="text-gray-800 font-bold text-2xl">Maklumat Provider Recurring</span>
                        </div>
                        <span class="text-sm text-gray-500">Maklumat di bawah memaparkan keterangan lanjut mengenai tetapan syarikat recurring provider, {{ maklumat_senangpay.nama_provider }}</span>
                    </div>
                </div>  
            </div>
        </div>

        <div class="mt-2 items-stretch grid grid-cols-3 gap-2 p-2">
            <div class="col-span-2">
                <rs-card class="p-4">
                    <div>
                        <div>
                            <FormKit
                            label="Nama Syarikat"
                            type="text"
                            v-model="maklumat_senangpay.nama_provider" 
                            disabled
                            />
                        </div>
                        <div>
                            <FormKit
                            label="Keterangan Syarikat"
                            type="textarea"
                            v-model="maklumat_senangpay.keterangan_senangpay" 
                            disabled
                            />
                        </div>
                        <div>
                            <FormKit
                            label="API Key"
                            type="text"
                            v-model="maklumat_senangpay.api_key" 
                            disabled
                            />
                        </div>
                        <div>
                            <FormKit
                            label="Merchant Id"
                            type="text"
                            v-model="maklumat_senangpay.merchant_id" 
                            disabled
                            />
                        </div>
                        <div>
                            <FormKit
                            label="Kadar Cas"
                            type="text"
                            v-model="maklumat_senangpay.rate" 
                            disabled
                            />
                        </div>
                        <div>
                            <FormKit
                            label="Status"
                            type="text"
                            v-model="maklumat_senangpay.status"
                            disabled
                            />
                        </div>
                    </div>
                </rs-card>
            </div>
            <div class="">
                <rs-card class="p-4">
                    <center>
                        <div>
                            <img class="w-60 h-24" :src="maklumat_senangpay.gambar_senangpay" />
                        </div>
                        <div class="mt-5">
                            <div class="p-4">
                                <p class="text-lg font-bold">{{ maklumat_senangpay.nama_provider}}</p>
                                <div class="mt-4">
                                    <span>
                                        Simplepay Gateway Sdn. Bhd. (1155742-H),
                                        Unit K03-10-3A,
                                        UOA Business Park,
                                        No.1 Jalan Pengaturcara,
                                        U1/51A, Seksyen U1,
                                        40150 Shah Alam.
                                    </span>
                                </div>
                                <div class="mt-4">
                                    <span>
                                        03-2771 2707
                                    </span>
                                </div>
                                <div class="mt-2">
                                    <span>
                                        Customer Support Email : help@senangpay.my
                                    </span>
                                </div>
                            </div>
                        </div>
                    </center>
                </rs-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                maklumat_senangpay: {
                    nama_provider: 'SenangPay Sdn. Bhd.',
                    keterangan_senangpay: 'senangPay Payment Form helps our company to make an analysis of marketing campaigns that are carried out effectively or not through click counting.',
                    gambar_senangpay: 'https://senangpay.my/wp-content/uploads/2022/09/logo_senangpay_v3-payment-form.png',
                    api_key: '33997-926',
                    merchant_id: '719164632221816',
                    rate: '2.00 %',
                    status: 'Aktif'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>