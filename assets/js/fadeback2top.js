var scroll_top_div = document.getElementById('#scroll_top_div'); 

document.onscroll = function() { 
  scroll_top_div.forEach(scroll_top_div => {
  var posi = scroll_top_div.getBoundingClientRect(); 
  var height = posi.top;
  
  if(height < 300) { 
    scroll_top_div.classList.add('fadeBack2Top'); //adiciona a classe .scroll--show
  }
 });
}