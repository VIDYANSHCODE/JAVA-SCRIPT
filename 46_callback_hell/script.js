function loadScript(url, callback) {
    var script = document.createElement('script');
    script.src = url;
    script.onload = function() {
        console.log(url + ' loaded');
        callback(null, url);
    }
    script.onerror = function() {
        console.error('Error loading script: ' + url);
        callback(new Error('Failed to load script: ' + url));
    };
    document.head.appendChild(script);
}

// const goodmorning = (error, url) => {
//     if (error) {
//         console.error(error + ' - Unable to proceed.'+ 'with'+ ' ' + url);
//         sendEmergencyAlert(errr);
//     }
//     console.log('Good morning! Script loaded from: ' + url);
// }

// loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js'
//     , goodmorning )

// pyramid of doom

loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js', function goodmornig(error, url) {
    if (error) {
        console.error(error + ' - Unable to proceed.' + ' with ' + url);
        return;
    }
    loadScript('https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js', function goodafternoon(error, url) {
        if (error) {
            console.error(error + ' - Unable to proceed.' + ' with ' + url);
            return;
        }
        loadScript('https://cdn.jsdelivr.net/npm/popper.js@2.11.6/dist/umd/popper.min.js', function goodevening(error, url) {
            if (error) {
                console.error(error + ' - Unable to proceed.' + ' with ' + url);
                return;
            }
            loadScript('https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js', function goodnight(error, url) {
                if (error) {
                    console.error(error + ' - Unable to proceed.' + ' with ' + url);
                    return;
                }
                loadScript('https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js', function goodday(error, url) {
                    if (error) {
                        console.error(error + ' - Unable to proceed.' + ' with ' + url);
                        return;
                    }
                    loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js', function goodnightagain(error, url) {
                        if (error) {
                            console.error(error + ' - Unable to proceed.' + ' with ' + url);
                            return;
                        }
                        console.log('All scripts loaded successfully!');
                    });
                });
            });
        });
    });
});