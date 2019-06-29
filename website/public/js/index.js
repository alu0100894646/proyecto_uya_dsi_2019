document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var options = {
        edge: 'right'
    }
    var instances = M.Sidenav.init(elems,options);
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.parallax');
    var options;
    var instances = M.Parallax.init(elems, options);
});
