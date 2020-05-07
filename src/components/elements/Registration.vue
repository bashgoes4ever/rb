<template>
    <div class="register-layer">
        <div class="register-popup">
            <div class="register-popup__title">
                <div class="title">Registration</div>
                <div @click="setRegisterPopup({'open': false})" class="close"><span>+</span></div>
            </div>
            <div class="register-popup__body">
                <div class="register-popup__step-title">
                    <div class="title">step {{step}} of 3</div>
                </div>

                <div v-if="step==1" class="register-popup__form">
                    <div class="input-wrap">
                        <label for="reg-name">What's your first name?</label>
                        <input v-model="name" type="text" id="reg-name">
                    </div>
                    <div class="input-wrap">
                        <label for="reg-surname">What's your last name?</label>
                        <input v-model="last_name" type="text" id="reg-surname">
                    </div>
                    <div class="birthday-wrap">
                        <label>When is your birthday?</label>
                        <div class="birthday-flex flex-sb">
                            <v-select placeholder="DD" v-model="day" :from="days"/>
                            <v-select placeholder="MM" v-model="month" :from="months"/>
                            <v-select placeholder="YYYY" v-model="year" :from="years"/>
                        </div>
                    </div>
                    <div class="gender-wrap">
                        <label>Choose your gender</label>
                        <div class="gender-flex flex-sb">
                            <div class="radio-wrap">
                                <input v-model="gender" type="radio" name="gender" id="g-m" value="Male">
                                <label for="g-m">Male</label>
                            </div>
                            <div class="radio-wrap">
                                <input v-model="gender" type="radio" name="gender" id="g-f" value="Female">
                                <label for="g-f">Female</label>
                            </div>
                        </div>
                    </div>
                    <div class="input-wrap">
                        <label for="reg-surname">What's your email?</label>
                        <input v-model="email" type="email" id="reg-email">
                    </div>
                    <button @click="step = 2" class="gold-btn next-btn">continue</button>
                </div>

                <div v-if="step==2" class="register-popup__form">
                    <div class="input-wrap">
                        <label for="reg-address">Address</label>
                        <input v-model="address" type="text" id="reg-address">
                    </div>
                    <div class="input-wrap">
                        <label for="reg-city">City</label>
                        <input v-model="city" type="text" id="reg-city">
                    </div>
                    <div class="input-wrap">
                        <label for="reg-postcode">Postcode</label>
                        <input v-model="postcode" type="text" id="reg-postcode">
                    </div>
                    <div class="input-wrap">
                        <label>Pick your country</label>
                        <v-select
                                placeholder="Country"
                                v-model="country"
                                :from="countries.map(item => item.name)"
                        />
                    </div>
                    <div class="input-wrap">
                        <label>Mobile number</label>
                        <div class="mobile-flex flex-sb">
                            <v-select
                                    placeholder="Code"
                                    v-model="phone_code"
                                    :from="countries.map(item => item.code)"/>
                            <input v-model="phone" type="text">
                        </div>
                    </div>
                    <button @click="step = 3" class="gold-btn next-btn">continue</button>
                </div>

                <div v-if="step==3" class="register-popup__form">
                    <div class="input-wrap">
                        <label for="reg-username">Create a username</label>
                        <input v-model="username" type="text" id="reg-username">
                    </div>
                    <div class="input-wrap">
                        <label for="reg-password">Create a password</label>
                        <input v-model="password" type="password" id="reg-password">
                    </div>
                    <div class="input-wrap">
                        <label for="reg-password_confirm">Confirm your password</label>
                        <input v-model="password_confirm" type="password" id="reg-password_confirm">
                    </div>
                    <div class="input-wrap">
                        <label>Pick a secret question</label>
                        <v-select
                                placeholder="Secret question"
                                v-model="question"
                                :from="questions"
                        />
                    </div>
                    <div class="input-wrap">
                        <label for="reg-answer">Secret answer</label>
                        <input v-model="answer" type="text" id="reg-answer">
                    </div>
                    <div v-if="deposit_limits == 'No limits' || deposit_limits == ''" class="gender-wrap">
                        <label>Set deposit limits</label>
                        <div class="gender-flex flex-sb">
                            <div class="radio-wrap">
                                <input v-model="deposit_limits" type="radio" name="deposit_limits" id="deposit-n" value="No limits">
                                <label for="deposit-n">No</label>
                            </div>
                            <div class="radio-wrap">
                                <input v-model="deposit_limits" type="radio" name="deposit_limits" id="deposit-y" value="Daily">
                                <label for="deposit-y">Yes</label>
                            </div>
                        </div>
                    </div>
                    <div v-if="deposit_limits != 'No limits' && deposit_limits != ''" class="input-wrap">
                        <label>Set deposit limits</label>
                        <div class="deposit-flex flex-sb">
                            <input v-model="limit_amount" type="text">
                            <v-select
                                    placeholder="Limits"
                                    v-model="deposit_limits"
                                    :from="limit_terms"/>
                        </div>
                    </div>
                    <div class="checkbox-wrap">
                        <input type="checkbox" name="age_confirm" id="age_confirm">
                        <label for="age_confirm">I confirm I am over 18.</label>
                    </div>
                    <div class="checkbox-wrap">
                        <input type="checkbox" name="messages_confirm" id="messages_confirm">
                        <label for="messages_confirm">Make me eligible for Free Bonus/Exclusive Offers via all communication channels.</label>
                    </div>
                    <div class="checkbox-wrap">
                        <input type="checkbox" name="terms_agree" id="terms_agree">
                        <label for="terms_agree">I agree to the Terms and Conditions and Privacy Policy.</label>
                    </div>

                    <button class="gold-btn next-btn">Go play</button>
                </div>


                <div class="register-popup__footer">
                    <div class="title">Already have a login?</div>
                    <button class="login-btn">sign in</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {vSelect} from '@desislavsd/vue-select'
    import '@desislavsd/vue-select/dist/vue-select.css'
    import {mapActions} from 'vuex'

    export default {
        name: "Registration",
        components: {vSelect},
        data: () => ({
            step: 1,
            countries: null,
            days: [...Array(31).keys()].map(x => ++x),
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            years: [...Array(100).keys()].map(x => x + (new Date().getFullYear() - 117)).reverse(),
            questions: ['City of birth?', "Pet's name?"],
            limit_terms: ['Daily', 'Weekly', 'Monthly', 'No limits'],
            day: null,
            month: null,
            year: null,
            name: '',
            last_name: '',
            gender: '',
            email: '',
            address: '',
            city: '',
            postcode: '',
            country: '',
            phone_code: null,
            phone: '',
            username: '',
            password: '',
            password_confirm: '',
            question: '',
            answer: '',
            deposit_limits: '',
            limit_amount: null
        }),
        methods: {
            ...mapActions(['setRegisterPopup'])
        },
        created: function () {
            this.axios.get('https://restcountries.eu/rest/v2/all').then(res => {
                this.countries = res.data.map((country, index) => {
                    return {
                        index,
                        name: country.name,
                        code: country.callingCodes[0]
                    }
                })
            })
        },
        watch: {
            country: function () {
                this.phone_code = this.countries.find(c => c.name == this.country).code
            }
        }
    }
</script>

<style scoped>

</style>