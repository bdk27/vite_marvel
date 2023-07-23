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
                <h3>超級英雄電影相關資訊</h3>
                <h3>更多精彩漫威、DC電影等你來查詢</h3>
            </div>
            <div class="search">
                <div class="input-group">
                    <input type="text" class="form-control bg-transparent" placeholder="尋找電影、影集" aria-label="Username" aria-describedby="basic-addon1">
                    <button class="btn btn-primary">搜尋</button>
                </div>
            </div>
            <div class="mt-3">
                <p>立即訂閱 T.MOV ,各式方案任您選擇,最高享有10%優惠</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #hero-bg-img {
        background-image: linear-gradient(to right, rgb(16, 14, 3), transparent), url('../assets/img/hero-marvel-img.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .logo {
        margin-bottom: 2rem;
        h1 {
            font-family: 'Russo One', sans-serif;
            font-size: 5rem;
            color: #e0c3fc;
           /*  background-image: linear-gradient(to right, #e0c3fc, #8ec5fc);
            -webkit-background-clip: text;
            background-clip: text; */
            .icon {
                color: #e0c3fc;
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
    }

    .search {
        margin-top: 5rem;
        input {
            max-width: 500px;
            padding: 1rem;
            font-size: 1.8rem;
            color: #fff;
            border: 1px solid #31343e;
            border-radius: 4px 0 0 4px;
            color: silver;
            &::placeholder {
                color: #ccc;
            }
            &:focus {
                border: 1px solid #8ec5fc;
            }
        }
        button {
            border-radius: 0 4px 4px 0;
            color: #fff;
            border: none;
            font-size: 1.6rem;
            padding: 1rem;
            width: 100px;
        }
    }

    p {
        color: #adadad;
        font-size: 1.6rem;
    }

    @media (max-width: 991px) {

    }
    @media (max-width: 768px) {
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

    }
    @media (max-width: 450px) {
    }
</style>