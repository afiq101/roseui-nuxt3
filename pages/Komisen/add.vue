<template>
    <div>

        <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full">
            <div class="rounded-t mb-5 px-0">
                <div class="flex flex-wrap items-center py-2 justify-between">
                    <div>
                        <div>
                            <span class="text-gray-800 font-bold text-2xl">Tetapan Komisen Baru</span>
                        </div>
                        <span class="text-sm text-gray-500">Sila isi maklumat tetapan komisen baru di bawah dan pastikan semua lengkap.</span>
                    </div>
                </div>  
            </div>
        </div>

        <div>
            <rs-card class="p-2 bg-white rounded-md">
                <div>
                    <div class="mt-10 sm:mt-0 p-4">
                    <div class="md:grid md:grid-cols-3 md:gap-6">

                        <div class="md:col-span-1">
                            <div class="px-4 sm:px-0">
                                <h3 class="text-lg font-medium leading-6 text-gray-900">Maklumat Komisen</h3>
                                <p class="mt-1 text-sm text-gray-600">Sila lengkapkan maklumat komisen yang baru di sebelah.</p>
                            </div>
                        </div>

                        <div class="mt-5 md:col-span-2 md:mt-0">
                            <form action="#" method="POST">
                                <div class="overflow-hidden shadow sm:rounded-md">

                                    <div class="bg-white px-4 py-5 sm:p-6">
                                        <div class="grid grid-cols-6 gap-6">

                                        <div class="col-span-6">
                                            <label for="first-name" class="block text-sm font-medium text-gray-700">Nama Komisen</label>
                                            <input 
                                                v-model="comission_name"
                                                type="text" 
                                                name="first-name" 
                                                id="first-name" 
                                                class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm p-2">
                                        </div>

                                        <div class="col-span-6">
                                            <label for="last-name" class="block text-sm font-medium text-gray-700">Keterangan Komisen</label>
                                            <textarea 
                                                v-model="comission_description"
                                                type="text" 
                                                name="last-name" 
                                                id="last-name" 
                                                class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm p-2"
                                            >
                                            </textarea>
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="country" class="block text-sm font-medium text-gray-700">Jenis Komisen</label>
                                            <select 
                                                id="country" 
                                                name="country" 
                                                v-model="comission_type"
                                                class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                                            >
                                            <option value="" selected>-- Sila Pilih --</option>
                                            <option value="RM">Nilai (RM)</option>
                                            <option value="%">Peratus (%)</option>
                                            </select>
                                        </div>

                                        <div class="col-span-6">
                                            <label for="street-address" class="block text-sm font-medium text-gray-700">Nilai Komisen {{ comission_type && `(${comission_type})` }}</label>
                                            <input 
                                                v-model="comission_value"
                                                @keypress="numbersOnly($event)"
                                                type="text" 
                                                name="street-address" 
                                                id="street-address" 
                                                class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm p-2" 
                                            />
                                        </div>

                                        <div class="col-span-6">
                                            <fieldset>
                                            <legend class="contents text-sm font-medium text-gray-700">Status Komisen</legend>
                                            <div class="mt-4 space-y-4">
                                                <div class="flex items-center">
                                                    <input 
                                                        id="push-everything" 
                                                        name="push-notifications" 
                                                        type="radio" 
                                                        value="Active"
                                                        v-model="comission_status"
                                                        class="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500">
                                                    <label for="push-everything" class="ml-3 block text-sm font-medium text-gray-700">Aktif</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input 
                                                        id="push-email" 
                                                        name="push-notifications" 
                                                        type="radio" 
                                                        value="Inactive"
                                                        v-model="comission_status"
                                                        class="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500">
                                                    <label for="push-email" class="ml-3 block text-sm font-medium text-gray-700">Tidak Aktif</label>
                                                </div>
                                            </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <button type="button" class="inline-flex justify-center rounded-md border border-transparent bg-red-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 ">Tambah Tetapan</button>
                                </div>

                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </rs-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            comission_name: '',
            comission_description: '',
            comission_type: '',
            comission_value: null,
            comission_status: 'Inactive'
        }
    },
    methods: {
        submitForm() {

        },
        numbersOnly(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault();;
            } else {
                return true;
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>