// IIFE - immediately invoke function expression
(()=> {
    function Start() {
        console.log('App Started...');
    }
    window.addEventListener('load',Start);
})();