var breakpoint = 480;
var lastWidth = window.innerWidth;
var body;
var rows;

function alternatingCols() {

    // if small, add a mobile class to body
    if (isSmall()) {
        body.classList.add('mobile');
    } else {
        body.classList.remove('mobile');
    }

    // for each odd row, if the screen is large, reverse the columns

    Array.prototype.slice.call(rows).forEach(function (row, index) {
        if (!(index % 2 === 0)) { // odd row

            var parent = row.querySelector('article');
            var firstCol = parent.querySelector('div');

            if (!isSmall()) {

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

function isSmall() {
    return window.innerWidth < breakpoint;
}

document.addEventListener('DOMContentLoaded', function (event) {
    body = document.querySelector('body');
    rows = document.querySelectorAll('main section');

    window.addEventListener('resize', function () {
        if (isSmall() && lastWidth > breakpoint) {
            alternatingCols();
        } else if (lastWidth < breakpoint) {
            alternatingCols();
        }

        lastWidth = window.innerWidth;
    }, true);

    setTimeout(() => {
        alternatingCols();
    }, 1);
    
});