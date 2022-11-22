<template>
    <div>

        <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full">
            <div class="rounded-t mb-5 px-0">
                <div class="flex flex-wrap items-center py-2 justify-between">
                    <div>
                        <div>
                            <span class="text-gray-800 font-bold text-2xl">Kempen Wakaf</span>
                        </div>
                        <span class="text-sm text-gray-500">Senarai dibawah memaparkan maklumat kempen wakaf seperti nama kempen, status kempen dan lain-lain.</span>
                    </div>
                    <div class="hidden md:block">
                        <button type="button" class="bg-primary-800 text-white p-2 rounded-md">
                            <span>
                                <Icon name="ic:outline-plus" />
                            </span>
                            <span>
                                Kempen Baru
                            </span>
                        </button>
                    </div>
                </div>  
            </div>
        </div>

        <div v-if="isLoading === true">
            <Skeleton />
        </div>

        <div v-if="isLoading === false && senarai_kempen.length > 0" class="p-2">
            <rs-card class="bg-white p-2">
                <div v-for="list in senarai_kempen" class="flex justify-between items-center">
                    <div class="flex">
                        <div>
                            <img :src="list.campaign_img" class="w-18 h-18 rounded-md" />
                        </div>
                        <div class="pl-2 md:pl-4">
                            <p class="text-gray-600 font-medium">{{ list.campaign_name }}</p>
                            <p class="text-gray-500 text-xs font-regular">{{ list.campaign_code }}</p>
                            <p class="text-primary-800 text-xs font-regular underline pointer-events-auto hover:cursor-pointer">{{ 'http://localhost:3000/' + list.campaign_permalink }}</p>
                            <p class="text-gray-500 text-xs font-regular mt-1">{{ list.campaign_created_date }}</p>
                        </div>
                    </div>
                    <div>
                        <Icon name="material-symbols:arrow-forward-ios" size="16" />
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
            isLoading: true,
            senarai_kempen: []
        }
    },
    mounted: async function() {
        this.isLoading = true;

        try {

            let get_data = await $fetch('/api/campaign/list', {
                method: 'post'
            }).then(res => {
                console.log('Log Response API : ', res);

                if(res.status_code === 200 && res.status === 'success') {
                    this.senarai_kempen = res.data
                } else {
                    this.senarai_kempen = []
                }

                this.isLoading = false
            }).catch(e => {
                console.log('Error while hitting your API : ', e);
                this.isLoading = false;
            }).finally(
                this.isLoading = false
            )

        } catch(e) {
            console.log('Syntax Error while hitting your API', e);
            this.isLoading = false
        }
    }
}
</script>

<style lang="scss" scoped>

</style>