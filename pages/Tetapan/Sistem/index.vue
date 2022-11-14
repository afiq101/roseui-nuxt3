<template>
    <div>
        <div>
            <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full">
                <div class="rounded-t mb-5 px-0">
                    <div class="flex flex-wrap items-center py-2">
                        <div>
                            <div>
                                <span class="text-gray-800 font-bold text-2xl">Tetapan Sistem</span>
                            </div>
                            <span class="text-sm text-gray-500">Berikut merupakan maklumat dan tetapan sistem ini seperti warna tema sistem, pengurusan pengguna, pengurusan institusi dan lain-lain.</span>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
        <div class="mt-2">
            <div class="grid grid-cols-1">
                <div v-if="isLoading" class="justify-center items-center content-center">
                    <p>Sedang diproses...</p>
                </div>

                <div v-if="!isLoading">
                    <div v-for="conf in config" :key="conf.configurationId" class="rounded rounded-md border border-gray-200 p-4 bg-white flex justify-between items-center mb-2">
                        <div>   
                            <h4 class="text-md text-gray-700">{{ conf.configurationName }}</h4>
                            <span class="text-sm text-gray-500">{{ conf.configurationCode }}</span>

                            <div class="mt-2 items-center grid grid-cols-2 gap-2">
                                <div v-if="conf.configurationData && conf.configurationDataType">
                                    <div v-if="conf.configurationDataType === 'RM'">
                                        <span class="text-md text-gray-500 font-bold">
                                            {{ conf.configurationDataType + parseFloat(conf.configurationData).toFixed(2) }}
                                        </span>
                                    </div>
                                    <div v-else-if="conf.configurationDataType === '%'">
                                        <span class="text-md text-gray-500 font-bold">
                                            {{parseFloat(conf.configurationData).toFixed(2) + conf.configurationDataType}}
                                        </span>
                                    </div>
                                </div>
                                <div v-if="conf.configurationData && !conf.configurationDataType">
                                    <div>
                                        <span class="text-md text-gray-500 font-bold">
                                            {{ conf.configurationData }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label :for="`default-toggle${conf.configurationId}`" class="inline-flex relative items-center cursor-pointer">
                            <input type="checkbox" :value="conf.configurationCode" :id="`default-toggle${conf.configurationId}`" class="sr-only peer" :checked="conf.configurationStatus === '1' ? true : false" @change="updateStatus(conf.configurationCode, conf.configurationStatus)">
                            <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-800"></div>
                            </label>
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
            isLoading: true,
            config: []
        }
    },
    mounted: async function() {
        this.isLoading = true;
        let fetching = await $fetch("/api/configuration/list").then(res => {
            console.log("Return API : ", res);
            let q = res;
            if(q.status_code === 200 && q.status === "success") {
                this.config = q.data;
                this.isLoading = false;
            } else {
                console.log("Error axios : ", q.message);
                this.isLoading = false
            }
        }).catch(e => {
            console.log("Syntax Error at axios : ", e);
            this.isLoading = false
        })
    },
    methods: {
        async updateStatus(code, status) {
            //console.log("event checkbox : ", e);
            //this.isLoading = true;
            console.log("CODE : ", code);
            console.log("STATUS : ", status);
            
            let new_status = status === '1' ? '0' : '1';
            let updateAxios = await $fetch("/api/configuration/update", 
            {
                method: 'post',
                body: {
                    configurationCode: code,
                    configurationStatus: new_status
                }
            }).then(res => {
                console.log(res);
                if(res.status_code === 200) {
                    this.$router.go('/tetapan/sistem');
                } else {
                    this.isLoading = false;
                }
            }).catch(e => {
                console.log("Syntax Error at Axios UpdateStatus : ", e);
                this.isLoading = false;
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>