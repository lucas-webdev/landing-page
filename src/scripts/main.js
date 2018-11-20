$(function() {
    'use strict';
    
    let eventsList = [
        {
            date: '24/10/2018',
            image: '/src/images/events/projecoes-energeticas.png',
            title: 'Projeções energéticas: Matriz energética para 2050',
            description: `Na noite de 24 de outubro de 2018, o Prof. André F. P. Lucena da <b>COPPE-UFRJ</b> realizou uma apresentação
                         extremamente interessante sobre projeções energéticas para a matriz energética mundial e nacional em 2050. 
                         Levando em conta as condições de contorno impostas pelo objetivo de manter o aquecimento global abaixo do limite 
                         de dois graus Celsius, a partir do qual os efeitos seriam catastróficos.`,
            schedule: `
                <span class="topic">DATA: 24/10/2018</span><br/>
                <span class="topic">HORÁRIO: 18h30min</span><br/>
                <span class="topic">PROGRAMAÇÃO</span><br/>
                <span class="topic">18h30min: Credenciamento e café com prosa</span><br/>
                <span class="topic">19h00 – </span>Abertura<br/>
                <span class="topic">19h10 - </span>Nelson José Hubner Moreira – Consultor<br/>
                <span class="topic">19h40 - </span>André Frossard Pereira de Lucena – COPPE/UFRJ<br/>
                <span class="topic">20h10 – </span>Painel com palestrantes + convidados<br/>
                Leonardo Fares Menhem – Fumsoft<br/>
                Leonardo Pontes Guerra – P7Criativo<br/>
                Nelson José Hubner Moreira – Consultor<br/>
                André Frossard Pereira de Lucena – COPPE/UFRJ<br/>
                <span class="topic">20h50 – Encerramento e Networking</span><br/>
                <span class="topic">21h00 - Confraternização</span><br/>
            `,
            blogLink: 'http://www.fumsoft.org.br/projecoes-energeticas-matriz-energetica-para-2050/',
            symplaLink: '',
            showOnPastEvents: true,
            showOnCalendar: false
        },
        {
            date: '31/10/2018',
            image: '/src/images/events/geracao-fontes-energeticas.png',
            title: 'Geração: Fontes energéticas para o futuro',
            description: `No dia 31/10 aconteceu o segundo Seminário sobre Cenários Energéticos à luz do Projeto Minas 2050, 
                        dessa vez discutimos as fontes: Hidráulica, Biomassa e Solar, todas renováveis. Quais as vantagens competitivas 
                        de cada uma para compor a matriz energética em 2050, considerando as novas tecnologias e inovações?`,
            schedule: `
                <span class="topic">DATA: 31/10/2018</span><br/>
                <span class="topic">PROGRAMAÇÃO</span><br/>
                <span class="topic">18h30min: Credenciamento e café com prosa</span><br/>
                <span class="topic">19h00 – </span>Abertura<br/>
                <span class="topic">19h10 - </span>Hidráulica – Scott Wells Queiroz, Quebec Engenharia<br/>
                <span class="topic">19h40 - </span>Biomassa – Douglas Martins – Siamig<br/>
                <span class="topic">20h10 – </span>Solar - Antônia Sônia Alves Cardoso Diniz – Green Solar / PUCMinas<br/>
                <span class="topic">20h40 – Encerramento e Networking</span><br/>
                <span class="topic">21h00 - Confraternização</span><br/>
            `,
            blogLink: 'http://www.fumsoft.org.br/geracao-de-energia-fontes-energeticas-para-o-futuro/',
            symplaLink: '',
            showOnPastEvents: true,
            showOnCalendar: false
        },
        {
            date: '08/11/2018',
            image: '/src/images/events/transmissao-redes.png',
            title: 'Transmissão: redes em 2050',
            description: `O evento abordou o tema “Transmissão, redes em 2050”, ou seja, os desafios e tendências dessa fase do 
                        Sistema Elétrico Nacional, que conecta a Geração à Distribuição, fazendo a energia elétrica chegar onde é demandada.`,
            schedule: `
                <span class="topic">DATA: 08/11/2018</span><br/>
                <span class="topic">HORÁRIO: 18h30min</span><br/>
                <span class="topic">PROGRAMAÇÃO</span><br/>
                <span class="topic">18h30min: Credenciamento e café com prosa</span><br/>
                <span class="topic">19h00 – </span>Abertura<br/>
                <span class="topic">19h05 - </span>Raul Lycurgo Leite, TAESA<br/>
                <span class="topic">19h45 - </span>Roberto Isao Kishinami, Consultor (confirmado)<br/>
                <span class="topic">20h00 – </span>Frederico Ribas / Nelson Araujo, CEMIG<br/>
                <span class="topic">20h15 – </span>Participação do público<br/>
                <span class="topic">20h45 – </span>Encaminhamentos e Networking<br/>
                <span class="topic">21h00 - Confraternização</span><br/>
            `,
            blogLink: 'http://www.fumsoft.org.br/transmissao-redes-em-2050-2/',
            symplaLink: '',
            showOnPastEvents: true,
            showOnCalendar: false
        },
        {
            date: '13/11/2018',
            image: '/src/images/events/distribuicao-uso-da-energia.png',
            title: 'Distribuição: Uso da energia em 2050',
            description: `Após discutir os temas Geração e Transmissão o Seminário de 13/11 abordará as inovações e tendências para a 
                        Distribuição de energia, especificamente nos segmentos onde estão os maiores desafios e possibilidades: Armazenamento, Mobilidade Elétrica e Geração Distribuída.`,
            schedule: `
                <span class="topic">DATA: 13/11/2018</span><br/>
                <span class="topic">HORÁRIO: 18h30min</span><br/>
                <span class="topic">PROGRAMAÇÃO</span><br/>
                <span class="topic">18h30min: Credenciamento e café com prosa</span><br/>
                <span class="topic">19h00 – </span>Abertura<br/>
                <span class="topic">19h05 - </span>Armazenamento, Laboratório TESLA - UFMG<br/>
                <span class="topic">19h25 - </span>Mobilidade elétrica – Braz de Jesus Cardoso Filho, UFMG / Tesla<br/>
                <span class="topic">19h45 – </span>Geração distribuída – Ronaldo Gomes de Abreu, CEMIG<br/>
                <span class="topic">20h05 – </span>Participação do público<br/>
                <span class="topic">20h50 – </span>Encaminhamentos e Networking<br/>
                <span class="topic">21h00 - Confraternização</span><br/>
            `,
            blogLink: 'http://www.fumsoft.org.br/distribuicao-uso-da-energia-em-2050/',
            symplaLink: '',
            showOnPastEvents: true,
            showOnCalendar: false
        },
        {
            date: '22/11/2018',
            image: '/src/images/events/eficiencia-energetica.png',
            title: 'Eficiência Energética: Competitividade Energética em 2050',
            description: `No dia 22/11 o Minas 2050 abordará o tema Eficiência Energética, à luz de pesquisas e estudos do CEFET-MG, UNICAMP e CEMIG. 
                        Indústrias e negócios globalmente competitivos, assim como o bem estar das pessoas, dependem decisivamente do grau de eficiência energética 
                        que conseguiremos imprimir ao Sistema Elétrico Nacional. Discutiremos possibilidades e tendências para 2050.`,
            schedule: `
                <span class="topic">DATA: 22/11/2018</span><br/>
                <span class="topic">HORÁRIO: 18h30min</span><br/>
                <span class="topic">PROGRAMAÇÃO</span><br/>
                <span class="topic">18h30min: Credenciamento e café com prosa</span><br/>
                <span class="topic">19h00 – </span>Abertura<br/>
                <span class="topic">19h05 - </span>Gilberto De Martino Jannuzzi, Unicamp<br/>
                <span class="topic">19h45 - </span>Alexandre Heringer – Cemig<br/>
                <span class="topic">20h00 – </span>Patrícia Jota – Cetec<br/>
                <span class="topic">20h15 – </span>Participação do público<br/>
                <span class="topic">20h50 – </span>Encaminhamentos e Networking<br/>
                <span class="topic">21h00 - Confraternização</span><br/>
            `,
            blogLink: '',
            symplaLink: 'https://www.sympla.com.br/eficiencia-energetica-competitividade-energetica-em-2050__370925',
            showOnPastEvents: false,
            showOnCalendar: false
            showOnCalendarDefault: true
        },
        {
            date: '29/11/2018',
            image: '/src/images/events/planejamento-cenario.png',
            title: 'Cenários energéticos (Síntese dos eventos anteriores)',
            description: `Agora é a hora - Planejamento do cenário energético para 2050, desafios e oportunidades. No dia 29/11 próximo será a conclusão das discussões 
                        sobre os Cenários Energéticos para 2050. O Engº Elétrico Prof. Dr. Hani Camille Yehia, da UFMG, apresentará uma síntese 
                        de todos os temas apresentados e discutidos: Matriz Energética, Geração, Transmissão, Distribuição e Eficiência Energética, envolvendo possibilidades, desafios e oportunidades.`,
            schedule: `
                <span class="topic">DATA: 29/11/2018</span><br/>
                <span class="topic">HORÁRIO: 18h30min</span><br/>
                <span class="topic">PROGRAMAÇÃO</span><br/>
                <span class="topic">18h30min: Credenciamento e café com prosa</span><br/>
                <span class="topic">19h00 – </span>Abertura<br/>
                <span class="topic">19h05 - </span>Danilo Iglesias Brandão, UFMG<br/>
                <span class="topic">19h45 - </span>Cemig<br/>
                <span class="topic">20h00 – </span>Gasmig<br/>
                <span class="topic">20h15 – </span>Fiemg<br/>
                <span class="topic">20h30 – </span>Participação do público<br/>
                <span class="topic">21h00 - </span>Encaminhamentos e Networking<br/>
                <span class="topic">21h10 - Confraternização</span><br/>
            `,
            blogLink: '',
            symplaLink: 'https://www.sympla.com.br/agora-e-a-hora-planejamento-do-cenario-energetico-para-2050__370926',
            showOnPastEvents: false,
            showOnCalendar: false,
           
        }
    ];

    const btnTexts = {
        fullContent: 'VER CONTEÚDO COMPLETO',
        soon: 'EM BREVE',
        registration: 'QUERO PARTICIPAR'
    };

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
                <default-button @click.prevent="smoothScroll"  buttonType="secondary" :buttonLabel="bannerCtaLabel" :buttonLink="bannerCtaAnchor"></default-button>
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
        },
        methods: {
            smoothScroll(anchor) {
                $('html, body').stop().animate({
                    scrollTop: $( anchor ).offset().top - 160
                }, 400);
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
                            <img class="about-img" :src="item.image" />
                        </figure>
                        <div class="about-text">
                            <h4 class="about-title article-title">{{item.title}}</h4>
                            <span class="about-description article-text" v-html="item.description"></span>    
                            <div class="article-cta">
                                <default-button buttonType="primary" v-if="item.blogLink || item.symplaLink" :buttonLabel="getBtnText(item)" :buttonLink="item.blogLink || item.symplaLink" buttonTarget='_blank'></default-button>
                            </div>
                        </div>
                        <div class="article-divisor"></div>
                    </article>
                </div>
            </section>
        `,
        props: {
            aboutUsTitle: {
                type: String,
                default: 'Eventos do minas <span class="blue-letters">2</span><span class="green-letters">0</span><span class="red-letters">50</span>'
            }
        },
        data() {
            return {
                aboutItems: eventsList
            }
        },
        methods: {
            getBtnText(event) {
                if (!event.symplaLink) {
                    return btnTexts.fullContent;
                }
                else {
                    return btnTexts.registration;
                }
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
                <aside id="event_details_wrapper">
                    <ul v-if="hasEvents">
                        <li class="event-details" v-for="event in eventsList" v-show="event.showOnCalendar || event.eventToday">
                            <div class="talk-details">
                                <img class="event-image" :src="event.image" />
                                <div class="event-text">
                                    <span class="event-title article-title">{{event.title}}</span>
                                    <span class="event-description article-text" v-html="event.schedule"></span>
                                </div>
                            </div>
                            <!-- <div class="speaker-details">
                                <img class="speaker-image" :src="event.speakerImage" />
                                <div class="speaker-text">
                                    <span class="speaker-name article-title">{{event.speakerName}}</span>
                                    <span class="speaker-description article-text">{{event.speakerDescription}}</span>
                                </div>
                            </div> -->
                            <default-button class="events-calendar-btn" v-if="event.blogLink || event.symplaLink" buttonType="secondary" :buttonLabel="getBtnText(event)" :buttonLink="event.blogLink || event.symplaLink" buttonTarget="_blank"></default-button>
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
                default: 'Clique nas datas abaixo e veja o cronograma completo dos nossos evento.'
            }
        },
        data() {
            return {
                selectedDate: '',
                eventsList,
                eventDates: [],
                dateSelectedOnce: false
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
                selectOtherMonths: true,
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
                    this.dateSelectedOnce = true;
                },
                beforeShowDay: (date) => {
                    let dateFormated = $.datepicker.formatDate('dd/mm/yy', date);
                    let highlightDate = this.eventDates[dateFormated];

                    this.eventsList.forEach(item => {
                        if (this.highlightDate === item.date ) {
                            item.showOnCalendar = true;
                            item.eventToday = true;
                        }
                    });

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
                if (!this.selectedDate) {
                    this.selectedDate = $.datepicker.formatDate('dd/mm/yy', new Date());
                }
                
                this.eventsList.forEach(item => {
                    if (this.selectedDate === item.date) {
                        eventsCount += 1;
                        item.showOnCalendar = true;
                    }
                    else if (eventsCount === 0 && 
                            (item.showOnCalendarDefault || item.eventToday) &&
                            !this.dateSelectedOnce
                    ) {
                        eventsCount++;
                        item.showOnCalendar = true;
                    }
                    else {
                        item.showOnCalendar = false;
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
                    this.eventDates[item.date] = item.date;
                });
            },
            getBtnText(event) {
                if (event.blogLink) {
                    return btnTexts.fullContent;
                }
                else if(event.symplaLink) {
                    return btnTexts.registration;
                }
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
                default: 'https://www.sympla.com.br/fumsoft'
            }
        }
    });

    Vue.component('PastEvents', {
        template: /*html*/ `
            <section id="past_events">
                <h2 class="section-title" v-html="pastEventsSectionTitle"></h2>
                <h5 class="section-subtitle">{{pastEventsSectionSubtitle}}</h5>
                <section class="events-list">
                    <article v-for="event in pastEventsList" v-if="event.showOnPastEvents">
                        <img class="event-picture" :src="event.image" />
                        <h4 class="event-name article-title">{{event.title}}</h4>
                        <h5 class="event-date article-text">{{event.date}}</h5>
                        <default-button class="past-events-btn" :class="event.blogLink == '' ? 'disabled' : ''" buttonType="secondary" :buttonLabel="getBtnText(event)" :buttonLink="event.blogLink" buttonTarget="_blank"></default-button>
                    </article>
                </section>
            </section>
        `,
        props: {
            pastEventsSectionTitle: {
                type: String,
                default: 'Sobre nossos  <span class="blue-letters">ev</span><span class="green-letters">ent</span><span class="red-letters">os</span>'
            },
            pastEventsSectionSubtitle: {
                type: String,
                default: 'Perdeu algum dos eventos passados? Não se preocupe! Acesse o conteúdo completo dos eventos em nosso blog.'
            }
        },
        methods: {
            isVisible(eventDate) {
                const currentDate = new Date();
                const formatedDate = $.datepicker.formatDate('dd/mm/yyyy', currentDate);
                if (eventDate < formatedDate) {
                    return true;
                }
                return false;
            },
            getBtnText(event) {
                if (event.blogLink) {
                    return btnTexts.fullContent;
                }
                else {
                    return btnTexts.soon;
                }
            }
        },
        data() {
            return {
                pastEventsList: eventsList
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
