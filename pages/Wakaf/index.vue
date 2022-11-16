<template>
    <div>

        <rs-card class="bg-white p-6">
            <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                    <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                </li>
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                </li>
                <li class="ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
            </ol>
        </rs-card>

        <div class="bg-white">
            <div class="pt-6">
                <nav aria-label="Breadcrumb">
                <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <li>
                        <div class="flex items-center">
                            <a href="#" class="mr-2 text-sm font-medium text-gray-900">Wakaf</a>
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-4 text-gray-300">
                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                            </svg>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <a href="#" class="mr-2 text-sm font-medium text-gray-900">Agihan Wakaf</a>
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-4 text-gray-300">
                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                            </svg>
                        </div>
                    </li>
                    <li class="text-sm">
                        <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">Senarai</a>
                    </li>
                </ol>
                </nav>

                <!-- Image gallery -->
                <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                <div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                    <img src="https://awqaf.com.my/wp-content/uploads/2020/11/Poster-webinar-covid19-800x800.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
                <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                    <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                    <img src="https://awqaf.com.my/wp-content/uploads/2021/03/159091949_1178771909220210_3824260264835480923_o-800x801.jpg" alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center">
                    </div>
                    <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                    <img src="https://awqaf.com.my/wp-content/uploads/2020/08/16kolumnis.transformed-800x454.jpg" alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center">
                    </div>
                </div>
                <div class="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                    <img src="https://awqaf.com.my/wp-content/uploads/2018/10/Allahyarham-TSA.png" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center">
                </div>
                </div>

                <!-- Product info -->
                <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Basic Tee 6-Pack</h1>
                </div>

                <!-- Options -->
                <div class="mt-4 lg:row-span-3 lg:mt-0">
                    <h2 class="sr-only">Product information</h2>
                    <p class="text-3xl tracking-tight text-gray-900">$192</p>

                    <!-- Reviews -->
                    <div class="mt-6">
                    <h3 class="sr-only">Reviews</h3>
                    <div class="flex items-center">
                        <div class="flex items-center">
                        <!--
                            Heroicon name: mini/star

                            Active: "text-gray-900", Default: "text-gray-200"
                        -->
                        <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                        </svg>

                        <!-- Heroicon name: mini/star -->
                        <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                        </svg>

                        <!-- Heroicon name: mini/star -->
                        <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                        </svg>

                        <!-- Heroicon name: mini/star -->
                        <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                        </svg>

                        <!-- Heroicon name: mini/star -->
                        <svg class="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                        </svg>
                        </div>
                        <p class="sr-only">4 out of 5 stars</p>
                        <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                    </div>
                    </div>

                    <form class="mt-10">
                    <!-- Colors -->
                    <div>
                        <h3 class="text-sm font-medium text-gray-900">Color</h3>

                        <fieldset class="mt-4">
                        <legend class="sr-only">Choose a color</legend>
                        <div class="flex items-center space-x-3">
                            <!--
                            Active and Checked: "ring ring-offset-1"
                            Not Active and Checked: "ring-2"
                            -->
                            <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                            <input type="radio" name="color-choice" value="White" class="sr-only" aria-labelledby="color-choice-0-label">
                            <span id="color-choice-0-label" class="sr-only"> White </span>
                            <span aria-hidden="true" class="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"></span>
                            </label>

                            <!--
                            Active and Checked: "ring ring-offset-1"
                            Not Active and Checked: "ring-2"
                            -->
                            <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                            <input type="radio" name="color-choice" value="Gray" class="sr-only" aria-labelledby="color-choice-1-label">
                            <span id="color-choice-1-label" class="sr-only"> Gray </span>
                            <span aria-hidden="true" class="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"></span>
                            </label>

                            <!--
                            Active and Checked: "ring ring-offset-1"
                            Not Active and Checked: "ring-2"
                            -->
                            <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                            <input type="radio" name="color-choice" value="Black" class="sr-only" aria-labelledby="color-choice-2-label">
                            <span id="color-choice-2-label" class="sr-only"> Black </span>
                            <span aria-hidden="true" class="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"></span>
                            </label>
                        </div>
                        </fieldset>
                    </div>

                    <!-- Sizes -->
                    <div class="mt-10">
                        <div class="flex items-center justify-between">
                        <h3 class="text-sm font-medium text-gray-900">Size</h3>
                        <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                        </div>

                        <fieldset class="mt-4">
                        <legend class="sr-only">Choose a size</legend>
                        <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                            <!-- Active: "ring-2 ring-indigo-500" -->
                            <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50 text-gray-200 cursor-not-allowed">
                            <input type="radio" name="size-choice" value="XXS" disabled class="sr-only" aria-labelledby="size-choice-0-label">
                            <span id="size-choice-0-label">XXS</span>

                            <span aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                                <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                                <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                                </svg>
                            </span>
                            </label>

                            <!-- Active: "ring-2 ring-indigo-500" -->
                            <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                            <input type="radio" name="size-choice" value="XS" class="sr-only" aria-labelledby="size-choice-1-label">
                            <span id="size-choice-1-label">XS</span>

                            <!--
                                Active: "border", Not Active: "border-2"
                                Checked: "border-indigo-500", Not Checked: "border-transparent"
                            -->
                            <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>

                            <!-- Active: "ring-2 ring-indigo-500" -->
                            <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                            <input type="radio" name="size-choice" value="S" class="sr-only" aria-labelledby="size-choice-2-label">
                            <span id="size-choice-2-label">S</span>

                            <!--
                                Active: "border", Not Active: "border-2"
                                Checked: "border-indigo-500", Not Checked: "border-transparent"
                            -->
                            <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>

                            <!-- Active: "ring-2 ring-indigo-500" -->
                            <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                            <input type="radio" name="size-choice" value="M" class="sr-only" aria-labelledby="size-choice-3-label">
                            <span id="size-choice-3-label">M</span>

                            <!--
                                Active: "border", Not Active: "border-2"
                                Checked: "border-indigo-500", Not Checked: "border-transparent"
                            -->
                            <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>

                            <!-- Active: "ring-2 ring-indigo-500" -->
                            <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                            <input type="radio" name="size-choice" value="L" class="sr-only" aria-labelledby="size-choice-4-label">
                            <span id="size-choice-4-label">L</span>

                            <!--
                                Active: "border", Not Active: "border-2"
                                Checked: "border-indigo-500", Not Checked: "border-transparent"
                            -->
                            <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>

                            <!-- Active: "ring-2 ring-indigo-500" -->
                            <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                            <input type="radio" name="size-choice" value="XL" class="sr-only" aria-labelledby="size-choice-5-label">
                            <span id="size-choice-5-label">XL</span>

                            <!--
                                Active: "border", Not Active: "border-2"
                                Checked: "border-indigo-500", Not Checked: "border-transparent"
                            -->
                            <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>

                            <!-- Active: "ring-2 ring-indigo-500" -->
                            <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                            <input type="radio" name="size-choice" value="2XL" class="sr-only" aria-labelledby="size-choice-6-label">
                            <span id="size-choice-6-label">2XL</span>

                            <!--
                                Active: "border", Not Active: "border-2"
                                Checked: "border-indigo-500", Not Checked: "border-transparent"
                            -->
                            <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>

                            <!-- Active: "ring-2 ring-indigo-500" -->
                            <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                            <input type="radio" name="size-choice" value="3XL" class="sr-only" aria-labelledby="size-choice-7-label">
                            <span id="size-choice-7-label">3XL</span>

                            <!--
                                Active: "border", Not Active: "border-2"
                                Checked: "border-indigo-500", Not Checked: "border-transparent"
                            -->
                            <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>
                        </div>
                        </fieldset>
                    </div>

                    <button type="submit" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
                    </form>
                </div>

                <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                    <!-- Description and details -->
                    <div>
                    <h3 class="sr-only">Description</h3>

                    <div class="space-y-6">
                        <p class="text-base text-gray-900">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
                    </div>
                    </div>

                    <div class="mt-10">
                    <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

                    <div class="mt-4">
                        <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                        <li class="text-gray-400"><span class="text-gray-600">Hand cut and sewn locally</span></li>

                        <li class="text-gray-400"><span class="text-gray-600">Dyed with our proprietary colors</span></li>

                        <li class="text-gray-400"><span class="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>

                        <li class="text-gray-400"><span class="text-gray-600">Ultra-soft 100% cotton</span></li>
                        </ul>
                    </div>
                    </div>

                    <div class="mt-10">
                    <h2 class="text-sm font-medium text-gray-900">Details</h2>

                    <div class="mt-4 space-y-6">
                        <p class="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
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
    data(){
        return {
            showModal: false
        }
    },
    setup () {
        return {}
    },
    methods: {
        toggleModal() {
            this.showModal = !this.showModal
        }
    }
}
</script>

<style lang="scss" scoped>

</style>