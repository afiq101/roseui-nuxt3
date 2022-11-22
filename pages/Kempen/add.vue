<template>
    <div>
        <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full">
            <div class="rounded-t mb-5 px-0">
                <div class="flex flex-wrap items-center py-2 justify-between">
                    <div>
                        <div>
                            <span class="text-gray-800 font-bold text-2xl">Tambah Kempen Wakaf</span>
                        </div>
                        <span class="text-sm text-gray-500">Sila lengkapkan maklumat kempen wakaf baru di bawah dan pastikan maklumat adalah tepat dan benar.</span>
                    </div>
                </div>  
            </div>
        </div>
        <div class="mt-2">
            <rs-card class="bg-white">
                <div class="p-2 md:p-4">
                    <div>
                        <p class="text-gray-700 font-bold">Maklumat Kempen Wakaf Baru</p>
                        <span class="text-gray-500 text-xs">Sila pastikan anda melengkapkan kesemua ruangan maklumat wakaf di bawah.</span>
                    </div>

                    <div class="col-span-6 mt-4">
                        <label for="first-name" class="block text-sm font-medium text-gray-700">Nama Kempen</label>
                        <input 
                            v-model="campaign_name"
                            type="text" 
                            name="first-name" 
                            id="first-name" 
                            class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm p-2"
                        >
                    </div>

                    <div class="col-span-6 mt-4">
                        <label for="first-name" class="block text-sm font-medium text-gray-700">Keterangan Kempen</label>
                        <textarea 
                            v-model="campaign_description"
                            type="text" 
                            name="first-name" 
                            id="first-name" 
                            class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm p-2"
                        ></textarea>
                    </div>

                    <div class="col-span-6 mt-4">
                        <label for="company-website" class="block text-sm font-medium text-gray-700">Permalink</label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                            <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 py-2 px-3 text-sm text-gray-500">http://localhost:3000/</span>
                            <input 
                                type="text" 
                                v-model="campaign_permalink"
                                class="p-2 block w-full flex-1 border border-l-0 border-gray-300 rounded-none rounded-r-md sm:text-sm" 
                                placeholder="www.example.com">
                        </div>
                    </div>

                    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div>
                            <FormKit
                                type="date"
                                label="Tarikh Mula"
                                :help="`Tarikh mula mesti melebihi ${campaign_start_date}`"
                                :validation="`date_after:${campaign_start_date}`"
                                validation-visibility="live"
                            />
                        </div>
                        <div>
                            <FormKit
                                type="date"
                                label="Tarikh Akhir"
                                v-model="campaign_end_date"
                                help="Tarikh akhir mesti melebihi tarikh mula"
                                :validation="`date_after:${campaign_start_date}`"
                                validation-visibility="live"
                            />
                        </div>
                    </div>

                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700">Gambar Kempen</label>
                        <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <div class="space-y-1 text-center">
                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div class="flex text-sm text-gray-600">
                                <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-primary-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 hover:text-primary-500">
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" class="sr-only" v-on:change="campaign_img">
                                </label>
                                <p class="pl-1">or drag and drop</p>
                            </div>
                            <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="bg-gray-100 p-2 md:p-4 flex justify-between">
                    <div class="">

                    </div>
                    <div class="">
                        <button class="bg-primary-800 hover:bg-primary-700 p-2 text-white rounded-md self-end">
                            Tambah Kempen
                        </button>
                    </div>
                </div>
            </rs-card>
        </div>
    </div>
</template>

<script>
import { DateTime } from "luxon";

    const dt = DateTime.now();

    const date = dt.toISODate();
    const datetime = dt.toFormat("yyyy-MM-dd'T'HH:mm");
    const month = dt.toFormat("yyyy-MM");
    const time = dt.toFormat("HH:mm");
    const week = dt.toFormat("yyyy-'W'kk");
    const dateStart = dt.plus({ days: 0}).toFormat("yyyy-MM-dd");
    const dateEnd = dt.plus({ days: 1 }).toFormat("yyyy-MM-dd");
    
    export default {
        data() {
            return {
                campaign_name: '',
                campaign_description: '',
                campaign_permalink: '',
                campaign_start_date: dateStart,
                campaign_end_date: dateEnd,
                campaign_target: 0.00,
                campaign_min: 0.00,
                campaign_img: '',
                campaign_status: 'Active'
            }
        },
        methods: {
            submitForm() {

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>