<template>
    <div id="result">
        <div class="row">
            <div style="padding: 20px 60px 220px 60px;" class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div style="padding-bottom: 15px;">
                    <span class="head">Keywords </span>
                    <a style="float: right; font-size: 12px; margin-top: 5px;" href=""> FAQ </a>
                    <span style="float: right;">  |  </span>
                    <a style="float: right; font-size: 12px; margin-top: 5px;" href="">Download</a>
                </div>
                <div>
                    <span style="color: gray; font-size: 11px;">{{number}} found</span>
                    <span style="color: gray; font-size: 11px; float: right;" class="right">Search Volumn</span>
                </div>
                
                <hr>
                <div v-for="word in words1" :key="word.name">
                    <p class="word">{{word.name}} <i v-bind:style="{'color': word.color,}" style="font-size: 15px; float: right;" class="fas fa-circle"></i></p>
                    
                    <hr>
                </div>
                <div class="row add">
                    <div class="col-lg-2 col-md-2 col-sm-12"><img style="width: 50px" src="../assets/SellerPrime Logo.png" alt=""></div>
                    <div class="col-lg-6 col-md-10 col-sm-12"><span style="color: rgb(0, 132, 255); font-weight: 600;">sellerapp</span><br><span>Boost your Amazon Rankings Now!</span></div>
                    <div class="col-lg-4 col-md-12 col-sm-12"><button style="width: 111px; margin: auto;" type="button" class="btn btn-primary btn-sm">Start Free Trial</button></div>
                </div>
                
                <hr>
                <div class="cover">
                    <div class="card">
                        <div class="card-body">
                            <h2>Sellerapp Powered By</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                            <hr>
                            <p style="font-size: 18px;">Boost your Amazon Sales Now!</p>
                            <button style="width: 111px; margin: auto;" type="button" class="btn btn-primary btn-sm">Start Free Trial</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body" style="text-align: left;">
                            <span style="font-size: 20px; text-align: left"><i class="fas fa-download"></i> Download Full List Here:</span>
                            <button style="width: 120px; float: right;" type="button" class="btn btn-warning btn-sm">Begin Download</button>
                        </div>
                    </div>
                </div>
                <div v-for="word in words2" :key="word.name">
                    <p class="word">{{word.name}} <i v-bind:style="{'color': word.color,}" style="font-size: 15px; float: right;" class="fas fa-circle"></i></p>
                    
                    <hr>
                </div>
            </div>
            <div style="padding: 20px 30px;" class="col-lg-6 col-md-6 col-sm-12  col-xs-12">
                <p class="head">Tell others about Sellerapp</p>
                <a href="#">Share</a>
                <br>
                <br>
                <p class="head">Frequent Words</p>
                <div class="flex-container">
                    <div v-for="word in words" :key="word" class="tag">{{word}}</div>
                </div>
                <br>
                <p class="head">Relevant Products</p>
                <div class="flex-container">
                    <div v-for="product in products" :key="product">
                        <img src="../assets/spinner_PNG58.png" alt="">
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
            number: 12313,
            words: ['hey', 'hello', 'spinner', 'waka-waka'],
            words1: [],
            words2: [],
            frequent: [],
            products: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        }
    },
    methods: {
        fun: function() {
            console.log(this.words1);
            this.word2 = [{name: 'hey', color: 'yellow'}]
            let data = {};
            let keyword = this.$route.params.id;
            let isPresent = false;
            for(let i = 0; i < this.frequent.length; i++) {
                if(this.frequent[i] === keyword) {
                    isPresent = true;
                    break;
                }
            }
            if(!isPresent) {
                this.frequent.push(keyword);
            }
            console.log(this.frequent);
            this.$http
                .post('http://demo8971001.mockable.io/getKeywords', data)
                .then(response => {
                    let data = response.data.keywords.suggested_keywords;
                    
                    let word1 = [], word2 = [];
                    data.forEach(item => {
                        let name = item.keyword;
                        let label = item.competition_index.label;
                        let color = '';
                        if(label === 'High') color = 'green';
                        else if(label == 'Medium') color = 'yellow';
                        else color = 'red';

                        if(word1.length < 3) word1.push({name, color});
                        else word2.push({name, color});
                    });
                    this.words1 = word1;
                    this.words2 = word2;
                })
                .catch(err => console.log(err));
        }
    },
    created() {
        this.fun();
    }
  
}
</script>

<style scoped>
#result {
    text-align: left;
    padding-bottom: 180px;
}
.cover {
    height: 500px;
    width: 90%;
    background-color: rgba(168, 168, 168, 0.788);
    border-radius: 10px;
    text-align: center;
    position: absolute;
    top: 380px;
    left: 60px;

}
.cover .card {
    margin: 30px 5px;
}
.tag {
    margin: 4px 5px;
    padding: 3px 8px;
    border: 0px solid rgb(58, 58, 58);
    border-radius: 20px;
    background-color: rgb(197, 236, 252);;
}
.word {
    padding-left: 10px;
    margin: 0px;
    font-size: 15px;
}
.flex-container {
    display: flex;
    flex-wrap: wrap;
}
.add {
    text-align: center;
}
img {
    width: 90px;
    margin: 10px;
}
.head {
    font-size: 18px;
    color: rgb(107, 106, 106);
    margin: 0px;
    padding: 10px 0px;
}
hr {
    margin-top: 1px;
    margin-bottom: 15px;
}

</style>