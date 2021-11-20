
import {Howl,Howler} from 'howler'
export function reaction2key(e){
    console.log(e);
    let ret = {};
    switch(e){
        case 'q':
            //动画，创建 position 
            //
            ret = {
            sound : new Howl({
                src : ['assets/bubbles.mp3']
            }),
            color:'#1abc9c'
            }
        case 'w':
            ret = {
                sound: new Howl({
                    src: ['assets/clay.mp3']
                  }),
                  color: '#2ecc71'
                }
    }
    return ret;
}