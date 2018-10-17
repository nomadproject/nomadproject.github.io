var uv, $uv, urlDataProvider;

var root = '../static/uv';
var configUri = '../static/uv.json';
var locales = [{ name: 'en-GB' }];

function openManifest(manifest) {

    window.scrollTo(0, 0);

    $uv.slideDown("fast", function () {
        uv.set({
                root: root,
                iiifResourceUri: manifest,
                configUri: configUri,
                iiifResourceUri: manifest,
                collectionIndex: 0,
                manifestIndex: 0,
                sequenceIndex: 0,
                canvasIndex: 0,
                locales: locales
            }
        );
    });
}

window.addEventListener('uvLoaded', function (e) {

    $uv = $('#uv');

    urlDataProvider = new UV.URLDataProvider();

    var data = {
        root: root,
        iiifResourceUri: manifest,
        configUri: configUri,
        collectionIndex: Number(urlDataProvider.get('c', 0)),
        manifestIndex: Number(urlDataProvider.get('m', 0)),
        sequenceIndex: Number(urlDataProvider.get('s', 0)),
        canvasIndex: Number(urlDataProvider.get('cv', 0)),
        rotation: Number(urlDataProvider.get('r', 0)),
        xywh: urlDataProvider.get('xywh', ''),
        locales: locales
    };

    uv = createUV('#uv', data, urlDataProvider);

    uv.on('created', function () {
        Utils.Urls.setHashParameter('manifest', manifest);
    });

    const iiifGallery = document.querySelector('iiif-gallery');

    iiifGallery.addEventListener('onSelectManifest', function (evt) {
        openManifest(evt.detail.id);
    });

    iiifGallery.addEventListener('onSelectCollection', function (evt) {
        openManifest(evt.detail.id);
    });

    // are there uv hash parameters?
    var manifest = Utils.Urls.getHashParameter('manifest');

    if (manifest) {
        openManifest(manifest);
    }

}, false);