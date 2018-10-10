$(function(){
    'use strict';

    Vue.component('DefaultButton', {
        template: `<a :href="buttonLink" class="default-button" :class="buttonClass">{{buttonLabel}}</a>`,
        props: {
            buttonType: {
                type: String,
                default: 'primary'
            },
            buttonLabel: {
                type: String,
                default: 'Saiba mais'
            },
            buttonLink: {
                type: String,
                default: '#'
            }
        },
        computed: {
            buttonClass() {
                return this.buttonType;
            }
        }
    })
    
    Vue.component('Banner', {
        template: /*html*/`
            <section id="banner">
                <span>{{bannerTitle}}</span>
                <default-button></default-button>
            </section>`,
        props: {
            bannerTitle: {
                type: String,
                default: 'Titulo do banner'
            },
        }
    });
    
    new Vue({
        el: '#landing_page',
        data: {
            message: 'Hello world'
        }
    });
});
