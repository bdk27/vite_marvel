<script  setup>
    /* import { ref, watch } from 'vue';
    import { useTMDBStore } from '../stores/tmdb';
    import { useRoute } from 'vue-router';

    const tmdbStore = useTMDBStore();
    const bgImage = ref('');
    const route = useRoute();


    watch(() => route.path, (newPath) => {
        if (newPath === '/marvel') {
            bgImage.value = "url('../assets/img/hero-img.png')";
        } else if (newPath === '/dc') {
            bgImage.value = "url('../assets/img/1140474.jpg')";
        } else {
            // 默认的背景图片
            bgImage.value = "url('../assets/img/hero-img.png')";
        }
    }); */
   
</script>

<template>
    <section id="hero-bg-img">
        <div class="hero">
            <div class="logo">
                <h1><font-awesome-icon icon="fa-solid fa-film" class="icon"/>T.MOV</h1>
            </div>
            <div class="text">
                <h3>超級英雄電影、影集相關資訊</h3>
                <h3>更多精彩系列等你來查詢</h3>
            </div>
            <div class="search">
                <div class="input-group">
                    <input type="text" class="form-control bg-transparent" placeholder="電子郵件地址" aria-label="Username" aria-describedby="basic-addon1">
                    <button type="button" class="btn">繼續</button>
                </div>
            </div>
            <div class="subscribe-text mt-3">
                <p>立即訂閱 T.MOV ,各式方案任您選擇,最高享有10%優惠</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #hero-bg-img {
        position: relative;
        background-image: linear-gradient(to right, rgb(16, 14, 3), rgba(16, 14, 3, .1)), url('../assets/img/hero-lg-img.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .logo {
        margin-bottom: 2rem;
        h1 {
            font-family: 'Russo One', sans-serif;
            font-size: 5rem;
            color: #FFAF60;
            .icon {
                color: #FFAF60;
                margin-right: 1rem;
                font-size: 4.5rem;
            }
        }
    }
    .text {
        h3 {
            font-size: 3rem;
            color: #fff;
        }
        P {
            padding: .5rem 0;
        }
    }

    .search {
        margin-top: 5rem;
        input {
            box-shadow: none;
            max-width: 500px;
            padding: 1rem;
            font-size: 1.8rem;
            color: #fff;
            border: 1px solid #7b7b7b;
            border-radius: 4px 0 0 4px;
            color: #fff;
            &::placeholder {
                color: silver;
            }
            &:focus {
                border: 1px solid #FFAF60;
            }
        }
        .btn {
            border-radius: 0 4px 4px 0;
            color: #000;
            border: none;
            font-size: 1.6rem;
            padding: 1rem;
            width: 100px;
            background: #FFAF60;
            transform: .5s;
            &:hover {
                background-color: #FF8F59;
            }
        }
    }

    p {
        color: #adadad;
        font-size: 1.6rem;
    }

    @media (max-width: 991px) {

    }
    @media (max-width: 768px) {
        #hero-bg-img {
            background-image: linear-gradient(to bottom, rgb(16, 14, 3), rgba(16, 14, 3, .1)), url('../assets/img/hero-md-img.png');
        }
        .logo {
            text-align: center;
            margin-top: 5rem;
        }
        .text {
            text-align: center;
        }
        .search {
            .input-group {
                input {
                   border-radius: 0;
                   max-width: 100%;
                   text-align: center;
                }
                button {
                    margin-top: 1rem;
                    width: 100%;
                    border-radius: 0;
                }
            }
        }
        .subscribe-text {
            text-align: center;
        } 

    }
    @media (max-width: 450px) {
    }
</style>