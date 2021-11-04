$(document).ready(()=>{
    let position_widget=$('.position_widget');
    let output=$('.output');
    let centerofY=window.innerHeight/2;
    let centerofX=window.innerWidth/2;

   
    position_widget.on('click',(e)=>{

        //Getting logic to the of top left position
        if(e.clientX>=0 && e.clientX<= centerofX){
            if(e.clientY>=0 && e.clientY<=centerofY){
                output.text("top left");
            }
        }

        //Getting logic to the of top right position
        if(e.clientX>=centerofX && e.clientX<= centerofX*2){
            if(e.clientY>=0 && e.clientY<=centerofY){
                output.text("top right");
            }
        }

        //Getting logic to the of bottom left position
        if(e.clientX>=0 && e.clientX<= centerofX){
            if(e.clientY>=centerofY && e.clientY<=centerofY*2){
                output.text("bottom left");
            }
        }

        //Getting logic to the of bottom right position
        if(e.clientX>=centerofX && e.clientX<= centerofX*2){
            if(e.clientY>=centerofY && e.clientY<=centerofY*2){
                output.text("bottom right");
            }
        }
       
       //Getting logic to the of center position
        if(e.clientX===centerofX && e.clientY===centerofY){
            
            output.text("center");
        }

        //Getting logic to the of top center position
        if(e.clientX === centerofX){
            if(e.clientY=0 ){
                output.text("Top center");
            }
        }

        //Getting logic to the of left center position
        if(e.clientY === centerofY){
            if(e.clientX=0 ){
                output.text("Left center");
            }
        }

        //Getting logic to the of bottom center position
        if(e.clientX === centerofX){
            if(e.clientY=centerofY*2 ){
                output.text("Bottom center");
            }
        }

        //Getting logic to the of right center position
        if(e.clientX === centerofX*2){
            if(e.clientY=centerofY ){
                output.text("Right center");
            }
        }
    });
 });