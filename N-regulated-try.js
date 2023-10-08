
canvas = document.querySelector('canvas');
const c= canvas.getContext("2d");
canvas.width = 1024
canvas.height = 576

c.fillRect(0,0,canvas.width,canvas.height)

c.moveTo(5,5)
c.lineTo(canvas.width-5,5)
c.strokeStyle = 'white';
c.stroke();

c.moveTo(canvas.width-5,5)
c.lineTo(canvas.width-5,canvas.height-5)
c.strokeStyle = 'white';
c.stroke();

c.moveTo(canvas.width-5,canvas.height-5)
c.lineTo(5,canvas.height-5)
c.strokeStyle = 'white';
c.stroke();

c.moveTo(5,5)
c.lineTo(5,canvas.height-5)
c.strokeStyle = 'white';
c.stroke();


function Point(x,y){
    c.fillStyle = 'white'
    c.fillRect(x,y,1,1);
}

function Inside(x,y){
    if((x > 10 && x <canvas.width -7)  && (y > 10 && y < canvas.height-7)    )
        return true
    return false
}

var work = true

document.addEventListener('keypress',function (e){
    if(e.key == 'e')
    if(work)
        work = false;
    else
        work = true;

})

function start(){
    
    var gasit = false
    var x = 1
    var y = 1
    var unghix = 1
    var unghiy = 1
    while(!gasit){
     x = Math.floor(Math.random() * canvas.width-7   )
     y = Math.floor(Math.random() * canvas.height-7   )
    if(Inside(x,y)) gasit = true;
    }
    setInterval(function(){
        if(work){

            var random = Math.floor(Math.random() * 8 )
           if(random  == 0){
            unghix = 5
            unghiy = 5
           }
        else if(random  == 1){
            unghix = canvas.width-5
            unghiy = 5
           }
        else if(random == 2){
            unghix = canvas.width-5
            unghiy = canvas.height-5
               
        }
        else if(random == 3) {
            unghix = 5
            unghiy = canvas.height-5
        }
        else if(random == 4) {
            unghix = (canvas.width-5)/2
            unghiy = 5
        }
        else if(random == 5) {
            unghix = canvas.width-5
            unghiy = (canvas.height-5) /2
        }
        else if(random == 6) {
            unghix = (canvas.width-5) /2
            unghiy = canvas.height-5
        }
        else if(random == 7) {
            unghix = 5
            unghiy = (canvas.height-5) /2
        }

        x  = (x + unghix)/3
        y = (y + unghiy)/3
        Point(x,y)
    
    
        }},1)
    
}
start()





