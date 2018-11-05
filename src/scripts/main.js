$(function() {
    'use strict';

    Vue.component('MainMenu', {
        template: /*html*/ `
            <nav id="main_menu">
                <ul>
                    <li v-for="item in menuItemsList">
                        <a :href="item.menuAnchor">{{item.menuLabel}}</a>
                    </li>
                </ul>
            </nav>
        `,
        data: function() {
            return {
                menuItemsList: [
                    { menuLabel: 'Menu 1', menuAnchor: 'anchor1' },
                    { menuLabel: 'Menu 2', menuAnchor: 'anchor2' },
                    { menuLabel: 'Menu 3', menuAnchor: 'anchor3' }
                ]
            };
        }
    });

    Vue.component('DefaultButton', {
        template: `<a :href="buttonLink" class="default-button" :class="buttonClass" :target="buttonTarget">{{buttonLabel}}</a>`,
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
            },
            buttonTarget: {
                type: String,
                default: '_self'
            }
        },
        computed: {
            buttonClass() {
                return `default-button--${this.buttonType}`;
            }
        }
    });

    Vue.component('Banner', {
        template: /*html*/ `
            <section id="banner">
                <img :src="logoImgSrc" />
                <h1 id="banner_title">{{bannerTitle}}</h1>
                <default-button buttonType="secondary" :buttonLabel="bannerCtaLabel" :buttonLink="bannerCtaAnchor"></default-button>
                <div class="detalhe"></div>
            </section>`,
        props: {
            bannerTitle: {
                type: String,
                default: 'Titulo do banner'
            },
            bannerCtaLabel: {
                type: String,
                default: 'Saiba mais'
            },
            bannerCtaAnchor: {
                type: String,
                default: '#contact'
            },
            logoImgSrc: {
                type: String,
                default: ''
            }
        }
    });

    Vue.component('AboutUs', {
        template: /*html*/ `
            <section id="aboutUs">
                <h2 class="section-title" v-html="aboutUsTitle"></h2>
                <div class="about-items">
                    <article v-for="item in aboutItems">
                        <figure>
                            <img class="about-img" :src="item.imageSrc" />
                        </figure>
                        <div class="about-text">
                            <h4 class="about-title article-title">{{item.title}}</h4>
                            <span class="about-description article-text">{{item.description}}</span>    
                            <div class="article-cta">
                                <default-button buttonType="primary" :buttonLabel="item.btnText" :buttonLink="item.btnLink" buttonTarget='_blank'></default-button>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        `,
        props: {
            aboutUsTitle: {
                type: String,
                default: 'Sobre o <span class="blue-letters">2</span><span class="green-letters">0</span><span class="red-letters">50</span>'
            }
        },
        data() {
            return {
                aboutItems: [
                    {
                        title: 'Projeções energéticas',
                        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                               when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                        imageSrc: '/src/images/post-instagram-2.png/',
                        btnText: 'Quero participar',
                        btnLink: 'https://www.sympla.com.br/geracao-de-energia-fontes-energeticas-para-o-futuro__370920'
                    },
                    {
                        title: 'Transmissão de energia',
                        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                               when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                        imageSrc: '/src/images/post-instagram-4.png/',
                        btnText: 'Quero participar',
                        btnLink: 'https://www.sympla.com.br/transmissao-de-energia-redes-em-2050__370922'
                    }
                ]
            }
        }
    })

    Vue.component('EventsCalendar', {
        template: /*html*/ `
        <section id="events_calendar">
            <h2 class="section-title" v-html="eventsCalendarTitle"></h2>
            <h5 class="section-subtitle">{{eventsCalendarSubtitle}}</h5>
            <div class="calendar-wrapper">
                <div id="interactive_calendar"></div>
                <aside id="event_details">
                    <ul v-if="hasEvents">
                        <li class="event-details" v-for="event in eventsList" v-show="event.isVisible">
                            <span class="event-title article-title">{{event.eventTitle}}</span>
                            <span class="event-description article-text">{{event.eventDescription}}</span>
                        </li>
                    </ul>
                </aside>
            </div>
        </section>`,
        props: {
            eventsCalendarTitle: {
                type: String,
                default: 'Calendário de <span class="blue-letters">Ev</span><span class="green-letters">ent</span><span class="red-letters">os</span>'
            },
            eventsCalendarSubtitle: {
                type: String,
                default: 'Clique na data referente e saiba mais'
            }
        },
        data() {
            return {
                selectedDate: '',
                eventsList: [
                    {
                        eventDate: '24/10/2018',
                        eventTitle: 'Projeções energéticas',
                        eventDescription: 'Descrição do evento',
                        eventImage: '',
                        isVisible: false
                    },
                    {
                        eventDate: '31/10/2018',
                        eventTitle: 'Geração',
                        eventDescription: 'Descrição do evento',
                        eventImage: '',
                        isVisible: false
                    },
                    {
                        eventDate: '08/11/2018',
                        eventTitle: 'Transmissão',
                        eventDescription: 'Descrição do evento',
                        eventImage: '',
                        isVisible: false
                    },
                    {
                        eventDate: '13/11/2018',
                        eventTitle: 'Distribuição',
                        eventDescription: 'Descrição do evento',
                        eventImage: '',
                        isVisible: false
                    },
                    {
                        eventDate: '22/11/2018',
                        eventTitle: 'Eficiência energética',
                        eventDescription: 'Descrição do evento',
                        eventImage: '',
                        isVisible: false
                    },
                    {
                        eventDate: '29/11/2018',
                        eventTitle: 'Cenários energéticos',
                        eventDescription: 'Descrição do evento',
                        eventImage: '',
                        isVisible: false
                    }
                ],
                eventDates: []
            };
        },
        mounted() {
            this.fillEventDatesArray();
            
            $('#interactive_calendar').datepicker({
                dateFormat: 'dd/mm/yy',
                dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
                dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
                dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                showOtherMonths: true,
                monthNames: [
                    'Janeiro',
                    'Fevereiro',
                    'Março',
                    'Abril',
                    'Maio',
                    'Junho',
                    'Julho',
                    'Agosto',
                    'Setembro',
                    'Outubro',
                    'Novembro',
                    'Dezembro'
                ],
                monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                nextText: 'Próximo',
                prevText: 'Anterior',
                onSelect: selectedDate => {
                    this.selectedDate = selectedDate;
                },
                beforeShowDay: (date) => {
                    let dateFormated = $.datepicker.formatDate('dd/mm/yy', date);
                    let highlightDate = this.eventDates[dateFormated];

                    if (highlightDate) {
                        return [true, 'highlight', 'Há evento neste dia'];
                    }

                    return [true, ''];
                },
            });
        },
        computed: {
            hasEvents() {
                let eventsCount = 0;
                this.eventsList.forEach(item => {
                    if (this.selectedDate === item.eventDate) {
                        eventsCount += 1;
                        item.isVisible = true;
                    }
                    else {
                        item.isVisible = false;
                    }
                });

                if (eventsCount > 0) {
                    return true;
                } else return false;
            }
        },
        methods: {
            fillEventDatesArray() {
                this.eventsList.forEach(item => {
                    this.eventDates[item.eventDate] = item.eventDate;
                });
            }
        }
    });

    Vue.component('Speakers', {
        template: /*html*/ `
            <section id="speakers">
                <h2 class="section-title" v-html="speakersSectionTitle"></h2>
                <h5 class="section-subtitle">{{speakersSectionSubtitle}}</h5>
                <section class="speakers-list">
                    <article v-for="speaker in speakersList">
                        <h4 class="speaker-name article-title">{{speaker.name}}</h4>
                        <h5 class="speaker-position article-text">{{speaker.position}}</h5>
                        <img class="speaker-picture" :src="speaker.picture" />

                        <div class="speaker-overlay">
                            <h4 class="speaker-name article-title">{{speaker.name}}</h4>
                            <h5 class="speaker-position article-text">{{speaker.position}}</h5>
                            <div class="speaker-overlay-box">
                                <div class="talk-title">{{speaker.talkTitle}}</div>
                                <div class="talk-schedule">{{speaker.talkSchedule}}</div>
                            </div>
                        </div> 

                    </article>
                </section>
            </section>
        `,
        props: {
            speakersSectionTitle: {
                type: String,
                default: 'Nossos <span class="blue-letters">Pale</span><span class="green-letters">stra</span><span class="red-letters">ntes</span>'
            },
            speakersSectionSubtitle: {
                type: String,
                default: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            }
        },
        data() {
            return {
                speakersList: [
                    {
                       name: 'Bebezão da Silva',
                       position: 'PO - Pampers',
                       talkTitle: 'Como fazer amigos e influenciar pessoas sendo um bebê',
                       talkSchedule: '18h - Berçario',
                       picture: '/src/images/pampers-baby.jpg'
                    },
                    {
                        name: 'Bebezão da Silva',
                        position: 'PO - Pampers',
                        talkTitle: 'Como fazer amigos e influenciar pessoas sendo um bebê',
                        talkSchedule: '18h - Berçario',
                        picture: '/src/images/pampers-baby.jpg'
                     },
                     {
                        name: 'Bebezão da Silva',
                        position: 'PO - Pampers',
                        talkTitle: 'Como fazer amigos e influenciar pessoas sendo um bebê',
                        talkSchedule: '18h - Berçario',
                        picture: '/src/images/pampers-baby.jpg'
                     },
                     {
                        name: 'Bebezão da Silva',
                        position: 'PO - Pampers',
                        talkTitle: 'Como fazer amigos e influenciar pessoas sendo um bebê',
                        talkSchedule: '18h - Berçario',
                        picture: '/src/images/pampers-baby.jpg'
                     }
                ]
            }
        }
    });

    Vue.component('CallToAction', {
        template: /*html*/ `
            <section id="call_to_action">
                <h2 class="section-title" v-html="ctaTitle"></h2>
                <default-button buttonType="secondary" :buttonLabel="ctaBtnLabel" :buttonLink="ctaBtnLink" buttonTarget="_blank"></default-button>
            </section>
        `,
        props: {
            ctaTitle: {
                type: String,
                default: 'Vamos construir <span class="blue-letters">ju</span><span class="green-letters">nt</span><span class="red-letters">os</span> esta história?'
            },
            ctaBtnLabel: {
                type: String,
                default: 'Ver todos os eventos'
            },
            ctaBtnLink: {
                type: String,
                default: 'http://www.fumsoft.com.br'
            }
        }
    });

    Vue.component('FooterArea', {
        template: /*html*/ `
            <section id="footer">
                <div class="footer-text section-title" v-html="footerText"></div>
                <div class="footer-images">
                    <img :src="footerLogo" />
                </div>
            </section>
        `,
        props: {
            footerText: {
                type: String,
                default: '<span class="blue-letters">REAL</span><span class="green-letters">IZA</span><span class="red-letters">ÇÃO:</span>'
            },
            footerLogo: {
                type: String,
                default: '/src/images/logo-rodape.png'
            }
        }
    });

    new Vue({
        el: '#landing_page',
        data: {
            message: 'Hello world'
        }
    });
});
