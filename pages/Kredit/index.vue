<template>
    <div>

        <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full">
            <div class="grid grid-cols-3 rounded-t mb-5 px-0 content-center justify-between">

                <div class="col-span-2 flex flex-wrap items-center py-2">
                    <div>
                        <div>
                            <span class="text-gray-800 font-bold text-2xl">Akaun Kredit</span>
                        </div>
                        <span class="text-sm text-gray-500">
                            Pengurusan akaun kredit seperti transaksi akaun kredit, tambah nilai akaun kredit dan lain-lain.
                        </span>
                    </div>
                </div>  

                <div class="col-span-1 flex justify-end">
                    <button class="bg-primary-800 button-md rounded py-2 px-6 text-white self-center">
                        <span>Transaksi</span>
                    </button>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-2">

            <div class="bg-white rounded p-2 colspan-1 lg:p-4 border border-gray-200 items-stretch" style="justify-content: center; align-items: center;">
                <div style="justify-content: center; align-items: center;">
                    <center>
                    <div class="justify-center align-center items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/584/584026.png" class="self-auto object-contain w-10 h-10 lg:w-16 lg:h-16" />
                    </div>
                    <div class="mt-3">
                        <h2 class="text-3xl font-bold">200.00</h2>
                    </div>
                    <div class="mt-2">
                        <div>
                            <span class="text-md text-gray-600">Baki Kredit</span>
                        </div>
                        <button class="hidden md:block w-32 px-2 py-2 mt-1 text-white bg-red-900 rounded" style="justify-content: center; align-items: center;">
                            <nuxt-link to="/kredit/tambah-nilai">
                                <span>Tambah Nilai</span>
                            </nuxt-link>
                        </button>
                    </div>
                    </center>
                </div>
            </div>

            <div class="bg-white rounded border border-gray-200 p-2 lg:col-span-2 lg:p-4">
                <div class="border-b border-gray-100">
                    <h2 class="font-bold text-lg">Maklumat Kredit</h2>
                </div>
                <div class="mt-3">
                    <h4 class="font-bold text-sm">No. Akaun Kredit</h4>
                    <span class="text-gray-600 text-sm">981279817923</span>
                </div>
                <div class="mt-2">
                    <h4 class="font-bold text-sm">Nama Pemegang Akaun</h4>
                    <span class="text-gray-600 text-sm">Admin Awqaf</span>
                </div>
                <div class="mt-2">
                    <h4 class="font-bold text-sm">Tarikh Cipta</h4>
                    <span class="text-gray-600 text-sm">12 Julai 2022</span>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>