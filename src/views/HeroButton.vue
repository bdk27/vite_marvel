<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const activeButton = ref('marvel');
    const router = useRouter();

    function onButtonClick(buttonType) {
        activeButton.value = buttonType;
        switch(buttonType) {
            case 'marvel':
                router.push('/marvel');
                break;
            case 'dc':
                router.push('/dc');
                break;
            /* case 'fox':
                router.push('/fox');
                break;
            case 'sony':
                router.push('/sony');
                break; */
            default:
                router.push('/marvel');
        }
    }
</script>

<template>
        <div class="container">
            <div class="row row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
                <div class="col-6">
                    <router-link to="#" custom v-slot="{ navigate }">
                        <button @click="navigate, onButtonClick('marvel')" role="link" class="link marvel-btn" :class="{ active: activeButton === 'marvel' }">
                            MARVEL<span class="fw-bold ms-2">漫威</span>
                        </button>
                    </router-link>
                </div>
                <div class="col-6">
                    <router-link to="#" custom v-slot="{ navigate }">
                        <button @click="navigate, onButtonClick('dc')" role="link" class="link dc-btn" :class="{ active: activeButton === 'dc' }" >
                            DC<span class="fw-bold ms-2">漫畫</span>
                        </button>
                    </router-link>
                </div>
                <div class="col-6">
                    <button href="#" class="link ">
                        FOX<span class="fw-bold ms-2">福斯</span>
                    </button>
                </div>
                <div class="col-6">
                    <button href="#" class="link ">
                        SONY<span class="fw-bold ms-2">索尼</span>
                    </button>
                </div>    
            </div>
        </div>
</template>

<style lang="scss" scoped>
    @import url(../scss/button.scss);

    .container {
        padding-top: 5.6vw ;
    }

</style>