<template>
    <div class="main-page" @click="lang_open = false">
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
                            <span>{{time}}</span>
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
                            <div class="text2">All of our games are from industry leading studios and include all of the
                                biggest and best brands!
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
                        <div class="games-filter__icon" v-html="tab.icon"></div>
                        <div class="text">{{tab.title}}</div>
                    </div>
                </div>

                <div v-if="!is_mobile" class="games-filter__search">
                    <input v-model="filters.query" type="text" name="search" placeholder="SEARCH">
                    <img src="img/filters/search.png" alt="" class="icon">
                </div>

                <carousel class="games-filter__carousel" v-if="is_mobile" :items="5" :autoWidth="true" :margin="15"
                          :nav="false" :dots="false">
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
            time: '',
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
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Слой_1" x="0px" y="0px" viewBox="0 0 425 425" style="enable-background:new 0 0 425 425;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#FFFFFF;}
</style>
<path class="st0" d="M277.3,413.4c5.2-2,16.9-6.7,30.5-15.3c15.5-9.8,26.9-20.3,34.6-28.4c31.1-32.8,48.3-76.3,48.3-121.5  c0.4-48.4-18.7-94.8-52.9-129c-5.9-5.9-15.5-6.1-21.6-0.3l-18.5,17.6C288,48.8,224.5,5.3,221.5,3.3c-6.1-4.1-14.3-3.3-19.6,1.9  L86.6,120.5c-68.4,68.4-69.9,178.7-3.5,249c8.4,9,19.6,19.1,34.1,28.2c37.7,23.7,75.6,26.7,95.3,26.7  C242,424.9,264.3,418.3,277.3,413.4z M116.9,357.8l-0.9,0.3c-2.6-2.2-5-4.5-7.5-6.9C80.7,323.6,65.2,286,65.3,246.8  c-0.1-39.2,15.5-76.8,43.2-104.4L214,36.9c18.8,17,58.1,61.5,53.6,133.9c-0.4,6.4,3.1,12.3,8.9,15s12.6,1.6,17.2-2.8l32.3-30.7  c22.1,27,34,60.9,33.7,95.8c0.1,39.1-15.5,76.5-43.3,104c-2.2,2.2-4.5,4.3-6.8,6.3l-0.8-0.3c11.9-33,6.1-69.8-15.4-97.5L225.1,173  c-2.9-3.8-7.4-6-12.2-6s-9.3,2.2-12.2,6l-68.3,87.6C110.9,288.2,105,324.8,116.9,357.8z M162.6,373.6c-25.3-25.4-27.8-65.7-5.8-94  l56.1-71.9l56.1,71.9c23.1,29.6,19.1,72.1-9,97C231.8,401.4,189.2,400.1,162.6,373.6z"/>
</svg>`,
                    is_active: false,
                    params: ['all', false, true]
                },
                {
                    title: 'new games',
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#FFFFFF;}
</style>
<g>
	<path class="st0" d="M158.2,147c-7.7-7.7-20.8-4.9-24.6,5.3L6.3,491.7c-4.5,12,7.3,23.8,19.3,19.3c17-6.4,325.7-122.1,339.4-127.3   c10.2-3.8,13.1-16.9,5.3-24.6L158.2,147z M153.5,184.7l61.6,61.6c4.3,51.3,23.3,100.5,54.2,141.3l-64.2,24.1   c-48-49.9-72.5-119.7-66-188.9L153.5,184.7z M113,446.2c-14.8-16.8-27.1-35.5-36.7-55.8l36.2-96.6c9,49.4,31.2,93.6,62.3,129.2   L113,446.2z M62.3,427.6c6.3,10.4,13.2,20.3,20.9,29.7l-37.3,14L62.3,427.6z M298.8,376.5c-22.5-27.4-38.6-59.6-47.3-93.8   l81.1,81.1L298.8,376.5z"/>
	<g>
		<path class="st0" d="M353.8,280.1c5.9,5.9,15.4,5.9,21.2,0c56.4-56.4,111.4-39,111.9-38.8c7.9,2.6,16.4-1.6,19-9.5    s-1.6-16.4-9.5-19c-3-1-73.2-23.3-142.6,46C348,264.8,348,274.3,353.8,280.1z"/>
	</g>
	<path class="st0" d="M237.2,163.5c5.9,5.9,15.4,5.9,21.2,0c69.4-69.4,47-139.7,46-142.6c-2.6-7.9-11.1-12.1-19-9.5   s-12.1,11.1-9.5,19c0.2,0.5,17.6,55.5-38.8,111.9C231.3,148.1,231.3,157.6,237.2,163.5L237.2,163.5z"/>
	<path class="st0" d="M290.2,195.3c-5.9,5.9-5.9,15.4,0,21.2c5.8,5.8,15.2,5.9,21.1,0.1c7.7-3.9,31.8,10.6,45.2-2.7   c13.2-13.2-0.8-36.8,2.7-45c8.3-3.5,31.8,10.5,45-2.7s-0.8-36.8,2.7-45c8.3-3.5,31.8,10.5,45-2.7s-0.8-36.8,2.7-45   c8.2-3.5,31.8,10.5,45-2.7c13.4-13.4-1.1-37.5,2.7-45.2c5.8-5.9,5.7-15.3-0.1-21.1c-5.9-5.9-15.4-5.9-21.2,0   c-11.8,11.8-9.5,28.5-7.3,40.4c-11.9-2.2-28.6-4.5-40.4,7.3s-9.5,28.5-7.3,40.4c-11.9-2.2-28.6-4.5-40.4,7.3s-9.5,28.5-7.3,40.4   c-11.9-2.2-28.6-4.5-40.4,7.3s-9.5,28.5-7.3,40.4C318.7,185.8,302,183.5,290.2,195.3L290.2,195.3z"/>
	<path class="st0" d="M375,68c5.9-5.9,5.9-15.4,0-21.2c-5.9-5.9-15.4-5.9-21.2,0c-5.9,5.9-5.9,15.4,0,21.2   C359.7,73.9,369.2,73.9,375,68z"/>
	<circle class="st0" cx="470.5" cy="163.5" r="15"/>
	<path class="st0" d="M438.7,301.4c-5.9,5.9-5.9,15.4,0,21.2c5.9,5.9,15.4,5.9,21.2,0c5.9-5.9,5.9-15.4,0-21.2   C454,295.5,444.5,295.5,438.7,301.4z"/>
	<path class="st0" d="M226.5,89.2c5.9-5.9,5.9-15.4,0-21.2s-15.4-5.9-21.2,0c-5.9,5.9-5.9,15.4,0,21.2   C211.2,95.1,220.7,95.1,226.5,89.2z"/>
</g>
</svg>`,
                    is_active: false,
                    params: ['all', true, false]
                },
                {
                    title: 'slots',
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#FFFFFF;}
</style>
<g>
	<g>
		<path class="st0" d="M322.8,200.3H89c-9.2,0-16.7,7.5-16.7,16.7v144.7c0,9.2,7.5,16.7,16.7,16.7h233.7c9.2,0,16.7-7.5,16.7-16.7    V217C339.5,207.8,332,200.3,322.8,200.3z M150.3,345h-44.5V233.7h44.5V345z M228.2,345h-44.5V233.7h44.5V345z M306.1,345h-44.5    V233.7h44.5V345z"/>
	</g>
</g>
<g>
	<g>
		<path class="st0" d="M461.9,0c-27.6,0-50.1,22.5-50.1,50.1c0,21.8,14,40.3,33.4,47.2v136.4h-33.4v-27.8    C411.8,92.4,319.5,0,205.9,0C92.4,0,0,92.4,0,205.9v256C0,489.5,22.5,512,50.1,512h311.7c27.6,0,50.1-22.5,50.1-50.1V267.1H462    c9.2,0,16.7-7.5,16.7-16.7V97.3C498,90.4,512,71.9,512,50.1C512,22.5,489.5,0,461.9,0z M378.4,461.9c0,9.2-7.5,16.7-16.7,16.7    H50.1c-9.2,0-16.7-7.5-16.7-16.7v-256c0-95.1,77.4-172.5,172.5-172.5s172.5,77.4,172.5,172.5V461.9z M461.9,66.8    c-9.2,0-16.7-7.5-16.7-16.7s7.5-16.7,16.7-16.7s16.7,7.5,16.7,16.7S471.1,66.8,461.9,66.8z"/>
	</g>
</g>
<g>
	<g>
		<path class="st0" d="M316.1,144.7c-16.5-46.6-60.8-77.9-110.2-77.9s-93.7,31.3-110.2,77.9c-3.1,8.7,1.5,18.2,10.2,21.3    s18.2-1.5,21.3-10.2c11.8-33.3,43.4-55.7,78.7-55.7s66.9,22.4,78.7,55.7c2.4,6.8,8.9,11.1,15.7,11.1c1.9,0,3.7-0.3,5.6-1    C314.6,162.9,319.2,153.4,316.1,144.7z"/>
	</g>
</g>
<g>
	<g>
		<circle class="st0" cx="205.9" cy="150.3" r="16.7"/>
	</g>
</g>
<g>
	<g>
		<path class="st0" d="M289.4,411.8h-167c-9.2,0-16.7,7.5-16.7,16.7s7.5,16.7,16.7,16.7h167c9.2,0,16.7-7.5,16.7-16.7    S298.6,411.8,289.4,411.8z"/>
	</g>
</g>
</svg>`,
                    is_active: false,
                    params: ['Slot', false, false]
                },
                {
                    title: 'table games',
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Outline" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#FFFFFF;}
</style>
<path class="st0" d="M490.1,153L360,118.1V96c0-4.4-3.6-8-8-8H160c-4.4,0-8,3.6-8,8v30.1L21.9,161c-4.3,1.1-6.8,5.5-5.7,9.8l0,0  l66.3,247.3c1.1,4.3,5.5,6.8,9.8,5.7l0,0l178.6-47.9l148.7,39.9c4.3,1.1,8.7-1.4,9.8-5.7l0,0l66.3-247.3  C496.9,158.5,494.3,154.1,490.1,153L490.1,153L490.1,153z M374.6,250.6c0.6,4.1,4.1,7.1,8.3,6.9c1.6-0.1,3.2,0.1,4.8,0.5  c8.5,2.3,13.6,11.1,11.3,19.6c-2.3,8.5-11.1,13.6-19.6,11.3c-8.5-2.3-13.6-11.1-11.3-19.6c1.1-4.3-1.4-8.7-5.7-9.8  c-0.8-0.2-1.6-0.3-2.4-0.3v-42.5c6.6-5.9,16.7-5.4,22.6,1.1c5.9,6.6,5.4,16.7-1.1,22.6c-0.9,0.8-1.8,1.5-2.9,2.1  C375.8,244.2,374.2,247.4,374.6,250.6z M168,104h176v240h-66l-19.4-72.4c0.9-0.3,1.8-0.8,2.5-1.4c0.5-0.4,12.4-10.4,24.5-22.5  c12.3-12.3,26.3-27.9,26.3-39.7c0-17.7-14.3-32-32-32c-9.2,0-18,4-24,10.9c-5.8-6.6-14.2-10.6-23-10.8L217.2,117  c-1.1-4.3-5.5-6.8-9.8-5.7l0,0L168,121.9V104z M253.1,250.8L237.6,193c6.3,2.3,10.4,8.3,10.4,15c0,4.4,3.6,8,8,8s8-3.6,8-8  c0-8.8,7.2-16,16-16s16,7.2,16,16c0,0.3-0.2,6.9-21.6,28.3c-6.9,6.9-13.9,13.2-18.4,17.2C255.1,252.7,254.1,251.8,253.1,250.8z   M95.9,406.2L33.8,174.4l170-45.5l62.1,231.8L95.9,406.2z M416.1,398.2L283,362.5l-0.7-2.5H352c4.4,0,8-3.6,8-8v-56.8  c4.1,4.5,9.4,7.7,15.3,9.2c2.7,0.7,5.5,1.1,8.3,1.1c17.7,0,32-14.4,31.9-32.1c0-11.9-6.7-22.9-17.3-28.4  c9.1-15.2,4.1-34.8-11.1-43.9c-8.2-4.9-18.1-5.9-27.1-2.7v-63.8l118.2,31.7L416.1,398.2z"/>
<path class="st0" d="M423.8,184.9l15.5,4.1l-4.1,15.5c-1.1,4.3,1.4,8.7,5.7,9.8c4.3,1.1,8.7-1.4,9.8-5.7l6.2-23.2  c1.1-4.3-1.4-8.7-5.7-9.8l0,0l-23.2-6.2c-4.3-1.1-8.6,1.4-9.8,5.7C417.1,179.4,419.6,183.8,423.8,184.9L423.8,184.9z"/>
<path class="st0" d="M407.7,338c-4.3-1.1-8.7,1.4-9.8,5.7l0,0l-4.1,15.5l-15.5-4.1c-4.3-1.1-8.7,1.4-9.8,5.7  c-1.1,4.3,1.4,8.7,5.7,9.8l0,0l23.2,6.2c4.3,1.1,8.7-1.4,9.8-5.7l0,0l6.2-23.2C414.5,343.5,412,339.1,407.7,338z"/>
<path class="st0" d="M296,136h16v16c0,4.4,3.6,8,8,8s8-3.6,8-8v-24c0-4.4-3.6-8-8-8h-24c-4.4,0-8,3.6-8,8  C288,132.4,291.6,136,296,136z"/>
<path class="st0" d="M320,288c-4.4,0-8,3.6-8,8v16h-16c-4.4,0-8,3.6-8,8s3.6,8,8,8h24c4.4,0,8-3.6,8-8v-24  C328,291.6,324.4,288,320,288z"/>
<path class="st0" d="M142.9,215.3c-3.2-3-8.3-2.8-11.3,0.4c-0.8,0.9-1.4,2-1.8,3.1l-16.6,54.1c-0.9,2.9,0,6.1,2.2,8.2l41.4,38.6  c3.2,3,8.3,2.8,11.3-0.4c0.8-0.9,1.4-2,1.8-3.1l16.6-54.1c0.9-2.9,0-6.1-2.2-8.2L142.9,215.3z M158.4,299.3L130,272.8l11.3-37.1  l28.4,26.5L158.4,299.3z"/>
<path class="st0" d="M84.3,177.4l-23.2,6.2c-4.3,1.1-6.8,5.5-5.7,9.8l0,0l6.2,23.2c1.1,4.3,5.5,6.8,9.8,5.7c4.3-1.1,6.8-5.5,5.7-9.8  L73,197l15.5-4.1c4.3-1.1,6.8-5.5,5.7-9.8S88.6,176.3,84.3,177.4L84.3,177.4L84.3,177.4z"/>
<path class="st0" d="M194.6,156.2c-1.1-4.3-5.5-6.8-9.8-5.7l0,0l-23.2,6.2c-4.3,1.1-6.8,5.5-5.7,9.8s5.5,6.8,9.8,5.7l15.5-4.1  l4.1,15.5c1.1,4.3,5.5,6.8,9.8,5.7s6.8-5.5,5.7-9.8l0,0L194.6,156.2z"/>
<path class="st0" d="M213.3,357.9c0.7,0,1.4-0.1,2.1-0.3l23.2-6.2c4.3-1.1,6.8-5.5,5.7-9.8l0,0l-6.2-23.2c-1.2-4.3-5.6-6.8-9.8-5.6  c-4.2,1.2-6.8,5.5-5.6,9.8l4.1,15.5l-15.5,4.1c-4.3,1.1-6.8,5.5-5.7,9.8C206.5,355.5,209.7,357.9,213.3,357.9L213.3,357.9z"/>
<path class="st0" d="M134,362.9l-15.5,4.1l-4.1-15.5c-1.1-4.3-5.5-6.8-9.8-5.7c-4.3,1.1-6.8,5.5-5.7,9.8c0,0,0,0,0,0.1l6.2,23.2  c1.1,4.3,5.5,6.8,9.8,5.7l0,0l23.2-6.2c4.3-1.2,6.8-5.6,5.6-9.8C142.6,364.3,138.2,361.8,134,362.9z"/>
</svg>`,
                    is_active: false,
                    params: ['all', false, false]
                },
                {
                    title: 'roulette',
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#FFFFFF;}
</style>
<g>
	<g>
		<path class="st0" d="M256,0C117.6,0,0,118.3,0,256c0,138.2,118.1,256,256,256c91.7,0,174.6-52,219.9-127.6    C499.5,345,512,300.6,512,256C512,117.6,393.8,0,256,0z M491.8,246h-43.1l0,0c-1.5-27.2-8.9-53.9-21.9-78.4l36.8-21.2    C480.6,177.5,490.2,211.6,491.8,246z M453.3,129.3l-36.7,21.2c-14.5-21.8-33.3-40.5-55.1-55.1l21.2-36.7    C410.8,77.1,434.9,101.2,453.3,129.3z M266,20.2c34.4,1.6,68.5,11.2,99.6,28.1l-21.2,36.8C320,72.2,293.2,64.7,266,63.2V20.2z     M246,20.2v43.1c-27.2,1.5-53.9,8.9-78.4,21.9l-21.2-36.8C177.5,31.4,211.6,21.8,246,20.2z M129.3,58.7l21.2,36.7    c-21.8,14.5-40.5,33.3-55.1,55.1l-36.7-21.2C77.1,101.2,101.2,77.1,129.3,58.7z M48.4,146.4l36.8,21.2    C72.3,192,64.8,218.8,63.3,246H20.2C21.8,211.6,31.4,177.5,48.4,146.4z M20.2,266h43.1c1.5,27.2,8.9,53.9,21.9,78.4l-36.8,21.2    C31.4,334.5,21.8,300.4,20.2,266z M58.7,382.7l36.7-21.2c14.5,21.8,33.3,40.5,55.1,55.1l-21.2,36.7    C101.2,434.9,77.1,410.8,58.7,382.7z M246,491.8c-34.4-1.6-68.5-11.2-99.6-28.1l21.2-36.8c24.4,12.9,51.2,20.4,78.4,21.9V491.8    L246,491.8z M83,256c0-94.1,79.7-173,173-173c94.2,0,173,79.9,173,173c0,93.8-79.3,173-173,173C162.2,429,83,349.7,83,256z     M266,491.8v-43.1c27.2-1.5,53.9-8.9,78.4-21.9l21.2,36.8C334.5,480.6,300.4,490.2,266,491.8z M382.7,453.3l-21.2-36.7    c21.8-14.5,40.5-33.3,55.1-55.1l36.7,21.2C434.9,410.8,410.8,434.9,382.7,453.3z M463.6,365.6l-36.8-21.2    c12.9-24.4,20.4-51.3,21.9-78.5h43.1C490.2,300.3,480.6,334.5,463.6,365.6z"/>
	</g>
</g>
<g>
	<g>
		<path class="st0" d="M393.8,181.7c-10.9-20.5-26.7-38.4-45.7-51.9c-4.5-3.2-10.7-2.1-13.9,2.4c-3.2,4.5-2.1,10.7,2.4,13.9    c16.5,11.7,30.2,27.2,39.6,45c2.6,4.9,8.6,6.7,13.5,4.1C394.5,192.7,396.4,186.6,393.8,181.7z"/>
	</g>
</g>
<g>
	<g>
		<path class="st0" d="M356,226c-13,0-24.2,8.4-28.3,20H305c-4-19.6-19.4-35-39-39v-22.7c11.6-4.1,20-15.2,20-28.3    c0-16.5-13.5-30-30-30s-30,13.5-30,30c0,13,8.4,24.2,20,28.3V207c-19.6,4-35,19.4-39,39h-22.7c-4.1-11.6-15.2-20-28.3-20    c-16.5,0-30,13.5-30,30s13.5,30,30,30c13,0,24.2-8.4,28.3-20H207c4,19.6,19.4,35,39,39v22.7c-11.6,4.1-20,15.2-20,28.3    c0,16.5,13.5,30,30,30s30-13.5,30-30c0-13-8.4-24.2-20-28.3V305c19.6-4,35-19.4,39-39h22.7c4.1,11.6,15.2,20,28.3,20    c16.5,0,30-13.5,30-30S372.5,226,356,226z M156,266c-5.5,0-10-4.5-10-10s4.5-10,10-10s10,4.5,10,10S161.5,266,156,266z M256,146    c5.5,0,10,4.5,10,10s-4.5,10-10,10s-10-4.5-10-10S250.5,146,256,146z M256,366c-5.5,0-10-4.5-10-10s4.5-10,10-10s10,4.5,10,10    S261.5,366,256,366z M256,286c-16.5,0-30-13.5-30-30s13.5-30,30-30s30,13.5,30,30S272.5,286,256,286z M356,266    c-5.5,0-10-4.5-10-10s4.5-10,10-10s10,4.5,10,10S361.5,266,356,266z"/>
	</g>
</g>
</svg>`,
                    is_active: false,
                    params: ['all', false, false]
                },
                {
                    title: 'All',
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#FFFFFF;}
</style>
<g>
	<path class="st0" d="M174.2,0H52.9C23.7,0,0,23.7,0,52.9v121.4c0,29.1,23.7,52.9,52.9,52.9h121.4c29.1,0,52.9-23.7,52.9-52.9V52.9   C227.1,23.7,203.4,0,174.2,0z M202.3,174.2c0,15.5-12.6,28.1-28.1,28.1H52.9c-15.5,0-28.1-12.6-28.1-28.1V52.9   c0-15.5,12.6-28.1,28.1-28.1h121.4c15.5,0,28.1,12.6,28.1,28.1V174.2z"/>
	<path class="st0" d="M512,53.7C512,24.1,487.9,0,458.3,0H338.6c-29.6,0-53.7,24.1-53.7,53.7v119.7c0,29.6,24.1,53.7,53.7,53.7   h119.7c29.6,0,53.7-24.1,53.7-53.7V53.7z M487.2,173.4c0,15.9-13,28.9-28.9,28.9H338.6c-15.9,0-28.9-13-28.9-28.9V53.7   c0-15.9,13-28.9,28.9-28.9h119.7c15.9,0,28.9,13,28.9,28.9V173.4z"/>
	<path class="st0" d="M174.2,284.9H52.9C23.7,284.9,0,308.6,0,337.8v121.4C0,488.3,23.7,512,52.9,512h121.4   c29.1,0,52.9-23.7,52.9-52.9V337.8C227.1,308.6,203.4,284.9,174.2,284.9z M202.3,459.1c0,15.5-12.6,28.1-28.1,28.1H52.9   c-15.5,0-28.1-12.6-28.1-28.1V337.8c0-15.5,12.6-28.1,28.1-28.1h121.4c15.5,0,28.1,12.6,28.1,28.1V459.1z"/>
	<path class="st0" d="M512,338.6c0-29.6-24.1-53.7-53.7-53.7H338.6c-29.6,0-53.7,24.1-53.7,53.7v119.7c0,29.6,24.1,53.7,53.7,53.7   h119.7c29.6,0,53.7-24.1,53.7-53.7V338.6z M487.2,458.3c0,15.9-13,28.9-28.9,28.9H338.6c-15.9,0-28.9-13-28.9-28.9V338.6   c0-15.9,13-28.9,28.9-28.9h119.7c15.9,0,28.9,13,28.9,28.9V458.3z"/>
</g>
</svg>`,
                    is_active: true,
                    params: {category: 'all', is_new: false, is_popular: false}
                },
            ],
            show_menu: false
        }),
        mounted() {
            (
                this.showTime()
            )
        },
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
            },
            showTime() {
                var date = new Date();
                var h = date.getHours(); // 0 - 23
                var m = date.getMinutes(); // 0 - 59

                h = (h < 10) ? "0" + h : h;
                m = (m < 10) ? "0" + m : m;

                var time = h + " : " + m;
                this.time = time;

                setTimeout(this.showTime, 1000);

            }
        },
        created: function () {
            this.getAllGames()
        },
        computed: {
            is_mobile: function () {
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