
import {Howl,Howler} from 'howler'
export function reaction2key(e){
    console.log(e);
    let ret = {};
    switch(e){
        case 'q':
            ret = {
            sound : new Howl({
                src : require('./assets/bubbles.mp3'),
            }),
            color:'#1abc9c'
            }
        case 'w':
            ret = {
                sound: new Howl({
                    src: require('./assets/clay.mp3'),
                  }),
                  color: '#2ecc71'
                };
        case 'e':
            ret = {
                sound: new Howl({
                    src: require('./assets/confetti.mp3'),
                  }),
                  color: '#2ecc71'
                };
        case 'r':
            ret = {
                sound: new Howl({
                    src: require('./assets/corona.mp3'),
                  }),
                  color: '#2ecc71'
                };
        case 't':
            ret = {
            sound : new Howl({
                src : require('./assets/dotted-spiral.mp3'),

            }),
            color:'#1abc9c'
            }
            ret['sound'].play();
        case 'y':
            ret = {
                sound: new Howl({
                    src: require('./assets/flash-1.mp3'),
                    }),
                    color: '#2ecc71'
                };
        case 'u':
            ret = {
                sound: new Howl({
                    src: require('./assets/flash-2.mp3'),
                    }),
                    color: '#2ecc71'
                };
        case 'i':
            ret = {
                sound: new Howl({
                    src: require('./assets/flash-3.mp3'),
                    }),
                    color: '#2ecc71'
                };
        case 'o':
            ret = {
            sound : new Howl({
                src : require('./assets/glimmer.mp3'),
            }),
            color:'#1abc9c'
            }
        case 'p':
            ret = {
                sound: new Howl({
                    src: require('./assets/moon.mp3'),
                    }),
                    color: '#2ecc71'
                };
        case 'a':
            ret = {
                sound: new Howl({
                    src: require('./assets/pinwheel.mp3'),
                    }),
                    color: '#2ecc71'
                };
        case 's':
            ret = {
                sound: new Howl({
                    src: require('./assets/piston-1.mp3'),
                    }),
                    color: '#2ecc71'
                };
        case 'd':
            ret = {
            sound : new Howl({
                src : require('./assets/piston-2.mp3'),
            }),
            color:'#1abc9c'
            }
        case 'f':
            ret = {
                sound: new Howl({
                    src: require('./assets/piston-3.mp3'),
                    }),
                    color: '#2ecc71'
                };
        case 'g':
            ret = {
                sound: new Howl({
                    src: require('./assets/prism-1.mp3'),
                    }),
                    color: '#2ecc71'
                };
        case 'h':
            ret = {
                sound: new Howl({
                    src: require('./assets/prism-2.mp3'),
                    }),
                    color: '#2ecc71'
                };
        case 'j':
            ret = {
            sound : new Howl({
                src : require('./assets/prism-3.mp3'),
            }),
            color:'#1abc9c'
            }
        case 'k':
            ret = {
                sound: new Howl({
                    src: require('./assets/splits.mp3'),
                    }),
                    color: '#2ecc71'
                };
        case 'l':
            ret = {
                sound: new Howl({
                    src: require('./assets/squiggle.mp3'),
                    }),
                    color: '#2ecc71'
                };
        case 'z':
            ret = {
                sound: new Howl({
                    src: require('./assets/strike.mp3'),
                    }),
                    color: '#2ecc71'
                };                        
        case 'x':
            ret = {
                sound: new Howl({
                    src: require('./assets/suspension.mp3'),
                    }),
                    color: '#2ecc71'
                };
        case 'c':
            ret = {
                sound: new Howl({
                    src: require('./assets/timer.mp3'),
                    }),
                    color: '#2ecc71'
                };
        case 'v':
            ret = {
            sound : new Howl({
                src : require('./assets/ufo.mp3'),
            }),
            color:'#1abc9c'
            }
        case 'n':
            ret = {
                sound: new Howl({
                    src: require('./assets/wipe.mp3'),
                    }),
                    color: '#2ecc71'
                };
        case 'b':
            ret = {
                sound: new Howl({
                    src: require('./assets/veil.mp3'),
                    }),
                    color: '#2ecc71'
                };
        case 'm':
            ret = {
                sound: new Howl({
                    src: require('./assets/zig-zag.mp3'),
                    }),
                    color: '#2ecc71'
                };    
    }
    return ret;
}