import React from 'react';
import Head from '../components/head';
import HomeSection from '../components/home-section';
import Footer from '../components/footer';
import { Component } from "react";

const breakpoint = 480;
let lastWidth;
let body;
let rows;

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "intro": {
                "title": "A collaborative project by <a class='mid-gray no-underline underline-hover' href='https://twitter.com/abirahussein?lang=en'>Abira Hussein</a> and <a class='no-underline underline-hover' href='https://mnemoscene.io'>Mnemoscene</a>",
                "text": "Nomad is a <a class='orange no-underline underline-hover' href='#mixed-reality'>mixed reality</a> experience premiering at the Somali Week Festival 2018. Alongside <a class='blue no-underline underline-hover' href='#workshops'>workshops</a> engaging Somali communities in London, Nomad explores the creative use of immersive and web-based technology to contextualise archival Somali <a class='green no-underline underline-hover' href='#archive'>objects</a> with the people and traditions to which they belong."
            },
            "sections": [
                {
                    "color": "orange",
                    "id": "mixed-reality",
                    "video": "https://player.vimeo.com/video/298863478?title=0&byline=0&portrait=0",
                    "title": "Mixed Reality",
                    "text": "Nomad is a Mixed Reality experience for the Microsoft HoloLens developed by <a class='no-underline underline-hover' href='https://mnemoscene.io'>Mnemoscene.</a> The experience layers sound recordings from the British Library, digitised objects and photographs from the British Museum and Powell-Cotton Museum, and people presented as 3D holograms into the user’s real-life environment."
                },
                {
                    "color": "blue",
                    "id": "workshops",
                    "images": ["/static/img/workshop1.jpg", "/static/img/workshop2.jpg", "/static/img/workshop3.jpg", "/static/img/workshop4.jpg"],
                    "title": "Workshops",
                    "text": "This project aims to gather and share the heritage of Somali communities in London with the public. Workshops invite participants to record their own stories and create 3D models of objects from their personal collections using photogrammetry."
                },
                {
                    "color": "green",
                    "id": "archive",
                    "images": ["/static/img/object.jpg"],
                    "title": "Archive",
                    "text": "A collection of 3D objects, photographs and audio recordings from the British Museum and Nomad workshops.",
                    "link": "/archive/index.html",
                    "linktext": "view archive"
                }
            ]
        }
    }

    alternatingCols() {

        // if small, add a mobile class to body
        if (window.innerWidth < breakpoint) {
            body.classList.add('mobile');
        } else {
            body.classList.remove('mobile');
        }
    
        // for each odd row, if the screen is large, reverse the columns
        Array.prototype.slice.call(rows).forEach(function (row, index) {
    
            if (!(index % 2 === 0)) { // odd row
    
                const parent = row.querySelector('article');
                const firstCol = parent.querySelector('div');
    
                if (!(window.innerWidth < breakpoint)) {

                    if (firstCol.classList.contains('left')) {
                        parent.appendChild(parent.firstElementChild);
                        parent.classList.add('switched');
                    }
    
                } else {
    
                    if (firstCol.classList.contains('right')) {
                        parent.appendChild(parent.firstElementChild);
                        parent.classList.remove('switched');
                    }
    
                }
            }
        });
    }

    componentDidMount() {

        lastWidth = window.innerWidth;
        body = document.querySelector('body');
        rows = this.sectionContainer.querySelectorAll('section');

        const that = this;

        window.addEventListener('resize', function () {
            // if small and the lastwidth is greater than the breakpoint
            if ((window.innerWidth < breakpoint) && lastWidth > breakpoint) {
                that.alternatingCols();
            } else if (lastWidth < breakpoint) {
                that.alternatingCols();
            }

            lastWidth = window.innerWidth;
        }, true);

        this.alternatingCols();
    }

    render() {
        return (
            <div>
                <Head title="Nomad Project">
                    <script src="https://player.vimeo.com/api/player.js"></script>
                </Head>

                <header class="vh-100 dt w-100">
                    <div class="dtc v-mid tc ph4 pv4">
                        <h1 class="mt2 mb0 firasans fw6 f2 f1-ns">Nomad</h1>
                        <div class="f5 f3-ns">
                            <p class="fw6 lh-copy mw8 center firasans" dangerouslySetInnerHTML={{ __html: this.state.intro.title }}></p>
                            <p class="lh-copy mw8 center firasans" dangerouslySetInnerHTML={{ __html: this.state.intro.text }}></p>
                        </div>
                        <div class="cf mw7 center">
                            <a class="link dim gray dib h2 w2 br-100 mr3 " href="https://twitter.com/hashtag/nomadproject?src=hash"
                                title="">
                                <svg data-icon="twitter" viewBox="0 0 32 32" fill="currentColor">
                                    <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"></path>
                                </svg>
                            </a>
                            <a class="link dim gray dib br-100 h2 w2 mr3 " href="https://instagram.com/nomadproject.uk" title="">
                                <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                    fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
                                    <path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z" />
                                </svg>
                            </a>
                            <a class="link dim gray dib br-100 h2 w2 mr3 " href="mailto:info@nomad-project.co.uk" title="info@nomad-project.co.uk">
                                <svg aria-hidden="true" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16"
                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </header>

                <main ref={ref => this.sectionContainer = ref}>
                    {
                        this.state.sections.map(({ color, id, video, images, title, text, link, linktext }) => (
                            <HomeSection color={color} id={id} video={video} images={images} title={title} text={text} link={link} linktext={linktext} />
                        ))
                    }
                </main>

                <Footer />

            </div>
        )
    }
}