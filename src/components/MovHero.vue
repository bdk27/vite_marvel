<script  setup>

</script>

<template>
    <section>
        <div class="hero">
            <div class="logo">
                <h1 class="fw-bold">T.MOV</h1>
                <!-- <img src="../assets/Marvel_Logo.svg.png" alt="Logo" width="100" class="d-inline-block align-text-midle me-3">
                <img src="../assets/DC_Comics_logo.svg.png" alt="Logo" width="60" class="d-inline-block align-text-midle me-3">
                <img src="../assets/Disney-logo-white-png.png" alt="Logo" width="100" class="d-inline-block align-text-midle"> -->
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
    section {
        background-image: linear-gradient(to right, rgb(0, 0, 0), rgba(0, 0, 0, .1)), url('../assets/img/Hot-Marvel-and-DC-Comicse.jpg');
        background-position: center;
        background-repeat: repeat;
        background-size: contain;
    }

    .logo {
        margin-bottom: 2rem;
        h1 {
            font-family: 'Russo One', sans-serif;
            font-size: 5rem;
            color: transparent;
            background-image: linear-gradient(45deg, #e0c3fc, #8ec5fc);
            -webkit-background-clip: text;
            background-clip: text;           
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
        section {
            background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgba(0, 0, 0, .5)), url('../assets/img/Hot-Marvel-and-DC-Comicse.jpg');
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