document.addEventListener('DOMContentLoaded', function() {
            
    var markers = document.querySelectorAll('a-marker');

    markers.forEach(function(marker) {

        var sound = marker.querySelector('a-sound');

        if (sound) {

            sound.addEventListener('loaded', function(evt) {
            
                var soundComponent = evt.target.components.sound;
    
                setInterval(function() {
                    if (soundComponent.loaded) {
                        if (marker.object3D.visible) {
                            if (!soundComponent.isPlaying) {
                                soundComponent.playSound();
                            }                                
                        } else {
                            soundComponent.pauseSound();
                        }
                    }
                }, 500);
                
            }); 

        }
                       

    });

});