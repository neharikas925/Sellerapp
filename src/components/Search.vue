<template>
    <div id="main">
        <div><img src="../assets/SellerApp white logo.png" alt=""></div>
        <span style="font-size: 12px; color: white;" class="main-item">
            <a href="#">Keyword</a>
            <a href="#">Extended</a>
            <a href="#">ASIN</a>
            <a href="#">Translate</a>
        </span>
        <div class="main-item">
            <form @submit.prevent="searchFun" class="form-inline mr-auto">
                <input v-model="word" class="form-control" type="text" placeholder="Keyword or ASIN" aria-label="Search" required>
                <button class="btn btn-primary btn-sm my-0 ml-sm-2">Search</button>
            </form>
        </div>
        <a href="#">About Sellerapp</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            image: '@/assets/1511.jpg',
            word: "",
            frequent: [],
        }
    },
    methods: {
        searchFun: function () {
            let word = this.word;
            this.word = "";
            this.$router.push({ path: `/result/${word}` });
        }
    }
}
</script>

<style scoped>

#main {
    width: 100%;
    margin: 0px;
    padding-top: 0;
    margin-top: 0;
    top: 0px;
    background-image: url('.././assets/1511.jpg');

    display: grid;
    justify-content: center;
    align-content: center;
    text-align: center;
}
 img {
    width: 230px;
    padding: 30px 0px 15px 0px;
}
.main-item a{
    margin: 5px;
}
.main-item form {
    padding: 10px 0px;
}
</style>