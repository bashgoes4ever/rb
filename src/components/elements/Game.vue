<template>
    <div class="game__item">
        <img :src="genImgUrl()" alt="" class="bg">
        <div class="game-item__layer">
            <div class="title">{{game.application_name}}</div>
            <button v-if="game.fun_mode" @click="is_open = true" class="gold-btn">play for free</button>
            <button @click="setRegisterPopup({'open': true})" class="gradient-btn">try now</button>
        </div>
        <div v-if="game.is_new" class="ribbon new">
            <img src="img/games/new.png" alt="">
            <span>new</span>
        </div>
        <div v-if="game.is_most_popular" class="ribbon popular">
            <img src="img/games/popular.png" alt="">
            <span>popular</span>
        </div>
        <div v-if="is_open" class="game__popup-layer">
            <div class="close" @click="is_open = false">&times;</div>
            <div class="game__popup">
                <iframe :src="genIframeSrc()"
                        frameborder="0"
                        class="game__iframe"
                ></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "Game",
        props: ['game'],
        data: () => ({
            is_open: false
        }),
        methods: {
            ...mapActions(['setRegisterPopup']),
            genImgUrl() {
                const url = 'https://aws-origin.image-tech-storage.com/gameRes/sq/200/'
                const title = this.game.application_name.replace(/[^A-Z0-9]/ig, '')
                return `${url}${title}.jpg`
            },
            genIframeSrc() {
                switch (this.game.game_provider) {
                    case 'Play N Go':
                        return `https://emtcw.playngonetwork.com/casino/ContainerLauncher?pid=345&gameId=${this.game.external_game_id}&lang=en_GB&practice=1&channel=desktop&div=pngCasinoGame&width=100%&height=100%`
                    case 'Pragmatic':
                        return `https://demogamesfree.pragmaticplay.net/gs2c/html5Game.do?extGame=1&symbol=vs5joker&gname=${this.game.external_game_id}&jurisdictionID=UK&mgckey=stylename@generic~SESSION@707090ab-8280-4a70-a1b7-12ec53d37077`
                    case 'Red Tiger':
                        return `https://gserver-skillonnet.redtiger.cash/skillonnet/launcher/${this.game.external_game_id}?playMode=demo&lang=en&hasAutoplayTotalSpins=true&hasAutoplayLimitLoss=true&hasAutoplaySingleWinLimit=true&hasAutoplayStopOnJackpot=true&hasAutoplayStopOnBonus=true`
                    case 'Yggdrasil':
                        return `https://staticpff.yggdrasilgaming.com/app/neonrush/index.2.40.1.html?gameid=${this.game.external_game_id}&lang=en&currency=EUR&org=SON_INT&topOrg=SkillOnNetGroup&channel=pc&key=&appsrv=https%3A%2F%2Fpff.yggdrasilgaming.com&license=&boostUrl=%2Fapp%2FboostUI%2Fboost.0.0.1.js&pcUrl=%2Fpc%2Fpartnerconnect.1.4.7.js`
                    case 'Green Valley Games':
                        return `https://casino.skilldnsproc.com/app/reg/Royalbet/?gameId=${this.game.external_game_id}&m_Lang=1&guest=true`
                    default:
                        return null
                }
            }
        }
    }
</script>

<style scoped>
    .close {
        width: 30px;
        height: 30px;
        font-size: 30px;
        text-align: center;
        line-height: 30px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        background-color: #777777;
        color: #ffffff;
        cursor: pointer;
        position: absolute;
        top: 30px;
        right: 30px;
    }
    .game__iframe {
        width: 100%;
        height: 100%;
    }
</style>