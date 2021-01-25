/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 600
            }
        },
        "color": {
            "value": ["#ddd", "#ddd", "#ddd", "#ddd"]
                // "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
        },

        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#b3b3b3"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 2,
                "opacity_min": 0.25,
                "sync": false
            }
        },
        "size": {
            "value": 6,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.5,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#b3b3b3",
            "opacity": 0.2,
            "width": 2
        },
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": false
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 240,
                "line_linked": {
                    "opacity": 0.2
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true


});