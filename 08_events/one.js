    // document.getElementById('owl').onclick = function(){
    //     alert("owl clicked")
    // }

    //  attachEvent()
    // jQuery - on
// document.getElementById('owl').addEventListener('click', function(e){
//     console.log(e);
//     alert("Owl Clicked");
// },false)

 // type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("owl clicked");
//     e. stopPropagation();// for stoping propagation 
// },)

// document.getElementById('images').addEventListener('click', function(e){
//     console.log("ul Clicked");
    
// },)

// yes - event capture top to buttom parent to childern propagation
//false - event bubbling buttom  to top child to parent propagation

// document.getElementById('google').addEventListener('click', function(e){
//     e.stopPropagation();
//     e.preventDefault();
//     console.log("Google is clicked");
// },false)

document.querySelector('#images').addEventListener('click', function(e){
        console.log(e.target.tagName);
        if (e.target.tagName === 'IMG') {
            console.log(e.target.id);
            let removeIt = e.target.parentNode;
            removeIt.remove(); //li remove
        }
        
       //removeIt.parentNode.removeChild(removeIt);//li --> ul --> li
}, false)


