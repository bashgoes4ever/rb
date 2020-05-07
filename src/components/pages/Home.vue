<template>
    <div class="main-page">
        <div v-if="is_mobile" class="mobile-bar">
            <div class="container">
                <div class="mobile-bar__flex">
                    <RouterLink to="/">
                        <img src="img/logo.png" alt="" class="logo">
                    </RouterLink>
                    <img v-if="!show_menu" @click="show_menu = true" src="img/icons/menu.png" alt="" class="menu">
                    <div v-if="show_menu" @click="show_menu = false" class="close"><span>+</span></div>
                </div>
            </div>
        </div>

        <div v-if="!is_mobile || show_menu" class="top-panel">
            <div class="container">
                <div class="top-panel__flex">

                    <div class="top-panel__locals">
                        <div class="top-panel__time">
                            <div class="img-icon clock-icon"></div>
                            <span>09 : 03</span>
                        </div>
                        <div class="top-panel__lang" v-on:click.stop="lang_open = !lang_open">
                            <div class="img-icon planet-icon"></div>
                            {{current_lang}}
                            <ul v-if="lang_open" class="dropdown">
                                <li v-for="l in lang" :key="l" v-on:click.stop="changeLang(l)">{{l}}</li>
                            </ul>
                        </div>
                    </div>

                    <div class="top-panel__socials">
                        <a href="/" target="_blank">
                            <span class="img-icon twitter-icon"></span>
                        </a>
                        <a href="/" target="_blank">
                            <span class="img-icon fb-icon"></span>
                        </a>
                        <a href="/" target="_blank">
                            <span class="img-icon inst-icon"></span>
                        </a>
                        <RouterLink to="/" target="_blank">
                            <span class="img-icon help-icon"></span>
                            <span>HELP</span>
                        </RouterLink>
                    </div>

                    <div class="top-panel__buttons">
                        <button @click="setRegisterPopup({'open': true})" class="reg-btn">REGISTER</button>
                        <button class="login-btn">SIGN IN</button>
                    </div>

                </div>
            </div>
        </div>

        <div class="top-menu">
            <div class="container">
                <div class="top-menu__flex">

                    <div class="top-menu__logo">
                        <a href="/">
                            <img src="img/logo.png" alt="">
                        </a>
                    </div>

                    <nav>
                        <RouterLink to="/">HOME</RouterLink>
                        <RouterLink to="/">START PLAYING</RouterLink>
                        <RouterLink to="/">BIG BONUSES</RouterLink>
                    </nav>

                    <div class="top-menu__right">
                        <RouterLink to="/"><span>TOP BONUS</span> <img src="img/icons/promo.png" alt=""></RouterLink>
                    </div>


                </div>
            </div>
        </div>

        <div v-if="is_mobile" class="main-steps-wrapper">
            <div class="container">
                <carousel :autoWidth="true" :margin="7" :items="1" :nav="false" :dots="false" class="main-steps">
                    <div class="main-step main-step1">
                        <div class="num">1</div>
                        <div class="title">click ‘REGISTER‘ NOW!</div>
                        <div class="text">quick and easy registration</div>
                    </div>
                    <div class="main-step main-step2">
                        <div class="num">2</div>
                        <div class="title">make your first deposit!</div>
                        <div class="text">deposit a balance of at least £50</div>
                    </div>
                    <div class="main-step main-step3">
                        <div class="num">3</div>
                        <div class="title">Get our bonus!</div>
                        <div class="text">we have a fair play policy</div>
                    </div>
                </carousel>
            </div>
        </div>

        <div v-if="!is_mobile" class="top-banners">
            <div class="container">
                <div class="top-banners__flex">
                    <div class="top-banner top-banner1">
                        <div class="content">
                            <div class="title">Start Enjoying Today!</div>
                            <div class="text1">At Royalbet, we have all of your favorite Online Slots games. We have
                                player favorites from NetEnt, like Starburst and Gonzos Quest, but also other great
                                games from Red Tiger and Play n Go. You can play on all of these fantastic games at one
                                of the best UK Online Casinos. If you prefer Blackjack or Roulette then no problem, we
                                also have great Live Dealer games for you to enjoy!
                            </div>
                            <button class="gold-btn">Start Playing</button>
                        </div>
                        <img src="img/banners/1.png" alt="" class="crown">
                    </div>
                    <div class="top-banner top-banner2">
                        <div class="content">
                            <div class="title">Top Games Studios</div>
                            <div class="text2">All of our games are from industry leading studios and include all of the
                                biggest and best brands!
                            </div>
                            <button class="gradient-btn">View our top slots games</button>
                        </div>
                        <img src="img/banners/2.png" alt="" class="jewels">
                        <img src="img/banners/3.png" class="award" alt="">
                        <img src="img/banners/bg.png" alt="" class="bg">
                    </div>
                </div>
            </div>
        </div>

        <carousel
                :items="carouselOptions.items"
                :loop="carouselOptions.loop"
                :nav="carouselOptions.nav"
                :navText="carouselOptions.navText"
                :autoplay="carouselOptions.autoplay"
                class="main-slider"
        >
            <div class="main-slide main-slide1">
                <div class="container">
                    <div class="content">
                        <img src="img/slider/1.png" alt="" class="title">
                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing <br>elit, sed do eiusmod
                            tempor
                            incididunt ut labore
                        </div>
                        <button class="gradient-btn">View our top slots games</button>
                        <img src="img/slider/2.png" alt="" class="age">
                    </div>
                    <img src="img/slider/3.png" alt="" class="goble">
                    <img src="img/slider/bg.png" alt="" class="bg">
                </div>
            </div>
            <div class="main-slide main-slide1">
                <div class="container">
                    <div class="content">
                        <img src="img/slider/1.png" alt="" class="title">
                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing <br>elit, sed do eiusmod
                            tempor
                            incididunt ut labore
                        </div>
                        <button class="gradient-btn">View our top slots games</button>
                        <img src="img/slider/2.png" alt="" class="age">
                    </div>
                    <img src="img/slider/3.png" alt="" class="goble">
                    <img src="img/slider/bg.png" alt="" class="bg">
                </div>
            </div>
        </carousel>

        <div v-if="is_mobile" class="top-banners">
            <div class="container">
                <div class="top-banners__flex">
                    <div class="top-banner top-banner1">
                        <div class="content">
                            <div class="title">Start Enjoying Today!</div>
                            <div class="text1">At Royalbet, we have all of your favorite Online Slots games.
                            </div>
                            <button class="gold-btn">Start Playing</button>
                        </div>
                        <img src="img/banners/1.png" alt="" class="crown">
                    </div>
                    <div class="top-banner top-banner2">
                        <div class="content">
                            <div class="title">Top Games Studios</div>
                            <div class="text2">All of our games are from industry leading studios and include all of the biggest and best brands!
                            </div>
                            <button class="gradient-btn">top slots games</button>
                        </div>
                        <img src="img/banners/2-m.png" alt="" class="jewels">
                        <img src="img/banners/3.png" class="award" alt="">
                        <img src="img/banners/bg.png" alt="" class="bg">
                    </div>
                </div>
            </div>
        </div>

        <div v-if="!is_mobile" class="main-steps-wrapper">
            <div class="container">
                <div class="main-steps">
                    <div class="main-step main-step1">
                        <div class="num">1</div>
                        <div class="title">click ‘REGISTER‘ NOW!</div>
                        <div class="text">quick and easy registration</div>
                    </div>
                    <div class="main-step main-step2">
                        <div class="num">2</div>
                        <div class="title">make your first deposit!</div>
                        <div class="text">deposit a balance of at least £50</div>
                    </div>
                    <div class="main-step main-step3">
                        <div class="num">3</div>
                        <div class="title">Get our bonus!</div>
                        <div class="text">we have a fair play policy</div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="!is_mobile" class="recent-winners-wrap">
            <div class="container">
                <div class="recent-winners">
                    <div class="title-wrap">
                        <div class="title">recent winners</div>
                        <div class="text">Description is <br/>comming soon</div>
                    </div>

                    <div class="recent-winner">
                        <div class="image">
                            <img src="img/winners/1.png" alt="">
                        </div>
                        <div class="content">
                            <div class="name">John Doe</div>
                            <div class="amount">65 023 <span>£</span></div>
                            <div class="game">In Wild Dolphin</div>
                        </div>
                    </div>
                    <div class="recent-winner violet">
                        <div class="image">
                            <img src="img/winners/1.png" alt="">
                        </div>
                        <div class="content">
                            <div class="name">John Doe</div>
                            <div class="amount">65 023 <span>£</span></div>
                            <div class="game">In Wild Dolphin</div>
                        </div>
                        <img src="img/winners/2.png" alt="" class="banner">
                    </div>
                    <div class="recent-winner red">
                        <div class="image">
                            <img src="img/winners/1.png" alt="">
                        </div>
                        <div class="content">
                            <div class="name">John Doe</div>
                            <div class="amount">65 023 <span>£</span></div>
                            <div class="game">In Wild Dolphin</div>
                        </div>
                        <img src="img/winners/3.png" alt="" class="banner">
                    </div>
                    <div class="recent-winner gold">
                        <div class="image">
                            <img src="img/winners/1.png" alt="">
                        </div>
                        <div class="content">
                            <div class="name">John Doe</div>
                            <div class="amount">65 023 <span>£</span></div>
                            <div class="game">In Wild Dolphin</div>
                        </div>
                        <img src="img/winners/4.png" alt="" class="banner">
                    </div>
                    <div class="recent-winner">
                        <div class="image">
                            <img src="img/winners/1.png" alt="">
                        </div>
                        <div class="content">
                            <div class="name">John Doe</div>
                            <div class="amount">65 023 <span>£</span></div>
                            <div class="game">In Wild Dolphin</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="games-filter container">
            <div class="games-filter__flex">
                <div class="title">games fit <br>for royalty</div>

                <div v-if="!is_mobile" class="games-filter__icons">
                    <div
                            v-for="(tab, index) in filter_tabs"
                            :key="index"
                            @click="applyFilters(...tab.params); filter_tabs[index].is_active = true;"
                            :class="[{'games-filter__icon-wrap-active': tab.is_active}, 'games-filter__icon-wrap']">
                        <div class="games-filter__icon">
                            <img :src="tab.icon" alt="">
                        </div>
                        <div class="text">{{tab.title}}</div>
                    </div>
                </div>

                <div v-if="!is_mobile" class="games-filter__search">
                    <input v-model="filters.query" type="text" name="search" placeholder="SEARCH">
                    <img src="img/filters/search.png" alt="" class="icon">
                </div>

                <carousel class="games-filter__carousel" v-if="is_mobile" :items="5" :autoWidth="true" :margin="15" :nav="false" :dots="false">
                    <div class="games-filter__icon-wrap">
                        <div class="games-filter__icon">
                            <img src="img/filters/search2.png" alt="">
                        </div>
                        <div class="text">search</div>
                    </div>
                    <div
                            v-for="(tab, index) in filter_tabs"
                            :key="index"
                            @click="applyFilters(...tab.params); filter_tabs[index].is_active = true;"
                            :class="[{'games-filter__icon-wrap-active': tab.is_active}, 'games-filter__icon-wrap']">
                        <div class="games-filter__icon">
                            <img :src="tab.icon" alt="">
                        </div>
                        <div class="text">{{tab.title}}</div>
                    </div>
                </carousel>

            </div>
        </div>

        <div class="games-container container">
            <div v-if="games" class="games__flex">
                <Game
                        v-for="(game, index) in filtered_games"
                        :game="game"
                        :key="index"
                ></Game>
            </div>
            <div v-if="games == null" class="games-loader">
                <Loader></Loader>
            </div>
        </div>

        <div v-if="is_mobile" class="top-panel__buttons footer-buttons">
            <button @click="setRegisterPopup({'open': true})" class="reg-btn">REGISTER</button>
            <button class="login-btn">SIGN IN</button>
        </div>

        <footer>
            <div class="container">
                <nav>
                    <RouterLink to="/">about us</RouterLink>
                    <RouterLink to="/">privacy policy</RouterLink>
                    <RouterLink to="/">terms & conditions</RouterLink>
                    <RouterLink to="/">banking</RouterLink>
                    <RouterLink to="/">faq</RouterLink>
                    <RouterLink to="/">affiliates</RouterLink>
                    <RouterLink to="/">contact us</RouterLink>
                </nav>
                <p>www.royalbet.co.uk is licensed through Big Sky Genesis B.V. (Dr. M.J. Hugenholtzweg Z/N UTS Buiding,
                    Curacao), incorporated in Curacao under registration number 145019 and licensed via Curacao - Dutch
                    Caribbean under license</p>
            </div>
        </footer>

        <div class="bottom-text container">
            <p>Gambling can be addictive, please play responsibly. Read more about
                <RouterLink to="/">Responsible Gambling.</RouterLink>
            </p>
        </div>

        <Registration v-if="register_popup.open"></Registration>

    </div>

</template>

<script>
    import carousel from 'vue-owl-carousel2'
    import Game from '../elements/Game'
    import Loader from '../elements/Loader'
    import Registration from '../elements/Registration'
    import {mapGetters, mapActions} from 'vuex'


    export default {
        name: "Home",
        props: ['width'],
        components: {carousel, Game, Loader, Registration},
        data: () => ({
            lang_open: false,
            current_lang: 'EN',
            lang: ['EN', 'RU'],
            carouselOptions: {
                items: 1,
                loop: true,
                nav: true,
                navText: ['<img src="img/slider/arrow.png" alt="">',
                    '<img src="img/slider/arrow.png" alt="">'],
                autoplay: true
            },
            games: null,
            filters: {
                query: '',
                category: 'all',
                is_new: false,
                is_popular: false
            },
            filter_tabs: [
                {
                    title: 'Popular',
                    icon: 'img/filters/1.png',
                    is_active: false,
                    params: ['all', false, true]
                },
                {
                    title: 'new games',
                    icon: 'img/filters/2.png',
                    is_active: false,
                    params: ['all', true, false]
                },
                {
                    title: 'slots',
                    icon: 'img/filters/3.png',
                    is_active: false,
                    params: ['Slot', false, false]
                },
                {
                    title: 'table games',
                    icon: 'img/filters/4.png',
                    is_active: false,
                    params: ['all', false, false]
                },
                {
                    title: 'roulette',
                    icon: 'img/filters/5.png',
                    is_active: false,
                    params: ['all', false, false]
                },
                {
                    title: 'All',
                    icon: 'img/filters/6.png',
                    is_active: true,
                    params: {category: 'all', is_new: false, is_popular: false}
                },
            ],
            show_menu: false
        }),
        methods: {
            ...mapActions(['setRegisterPopup']),
            changeLang(lang) {
                if (lang != this.current_lang) {
                    this.current_lang = lang
                }
                this.lang_open = false
            },
            async getAllGames() {
                const res = await this.axios.get('https://games.netdnstrace1.com/?appName=skin&platform=desktop&is_carousel=true&sort=carousel&lang=en')
                this.games = res.data
            },
            applyFilters(category = 'all', is_new = false, is_popular = false) {
                this.filters = {
                    query: this.filters.query,
                    category,
                    is_new,
                    is_popular
                }
                this.filter_tabs.forEach(tab => tab.is_active = false)
            }
        },
        created: function () {
            this.getAllGames()
        },
        computed: {
            is_mobile: function() {
              return this.width <= 1400
            },
            ...mapGetters(['register_popup']),
            filtered_games: function () {
                if (!this.filters.query
                    && this.filters.category == 'all'
                    && this.filters.is_new == false
                    && this.filters.is_popular == false) {
                    return this.games
                } else {
                    return this.games.filter(game => {
                        return (this.filters.category != 'all' ? game.game_family_group == this.filters.category : true
                            && this.filters.is_new ? game.is_new == this.filters.is_new : true
                            && this.filters.is_popular ? game.is_most_popular == this.filters.is_popular : true)
                            && game.application_name.toLowerCase().includes(this.filters.query.toLowerCase())

                    })
                }
            }
        }
    }
</script>

<style>


</style>