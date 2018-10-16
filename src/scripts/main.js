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

    Vue.component('EventsCalendar', {
        template: /*html*/ `
        <section id="events_calendar">
            <h2>{{eventsCalendarTitle}}</h2>
            <div class="calendar-wrapper">
                <div id="interactive_calendar"></div>
                <aside id="event_details">
                    <ul v-if="hasEvents">
                        <li class="event-details" v-for="event in events" v-show="event.isVisible">
                            <span>{{event.eventTitle}}</span>
                            <span>{{event.eventDescription}}</span>
                        </li>
                    </ul>
                </aside>
            </div>
        </section>
        `,
        props: {
            eventsCalendarTitle: {
                type: String,
                default: 'Calendário de Eventos'
            }
        },
        data() {
            return {
                selectedDate: '',
                events: [
                    {
                        eventDate: '11/10/2018',
                        eventTitle: 'Evento Teste 1',
                        eventDescription: 'Descrição do evento teste 1',
                        eventImage: '',
                        isVisible: false
                    },
                    {
                        eventDate: '11/10/2018',
                        eventTitle: 'Evento Teste 2',
                        eventDescription: 'Descrição do evento teste 2',
                        eventImage: '',
                        isVisible: false
                    },
                    {
                        eventDate: '12/10/2018',
                        eventTitle: 'Evento Teste 3',
                        eventDescription: 'Descrição do evento teste 3',
                        eventImage: '',
                        isVisible: false
                    }
                ]
            };
        },
        mounted() {
            $('#interactive_calendar').datepicker({
                dateFormat: 'dd/mm/yy',
                dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
                dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
                dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
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
                }
            });
        },
        computed: {
            hasEvents() {
                let eventsCount = 0;
                this.events.forEach(item => {
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
        }
    });

    new Vue({
        el: '#landing_page',
        data: {
            message: 'Hello world'
        }
    });
});
