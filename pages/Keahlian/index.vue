<template>
    <div>
        <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full">
            <div class="rounded-t mb-5 px-0">
                <div class="flex flex-wrap items-center py-2 justify-between">
                    <div>
                        <div>
                            <span class="text-gray-800 font-bold text-2xl">Keahlian Wakaf</span>
                        </div>
                        <span class="text-sm text-gray-500">Senarai dibawah merupakan keahlian yang aktif dan tidak aktif dalam aplikasi Biz Amal.</span>
                    </div>
                    <div class="hidden md:block">
                        <button type="button" class="bg-primary-800 text-white p-2 rounded-md">
                            <span>
                                <Icon name="ic:outline-plus" />
                            </span>
                            <span>
                                Keahlian Baru
                            </span>
                        </button>
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
                isLoading: true
            }
        },
        mounted: async function() {

        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>

</style>