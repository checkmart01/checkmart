var originaljson;

fetch("/chackmart.json").then(response => {
  return response.json();
}).then(data => {
  originaljson = data;
  update_OptionBar(data);
  update_banner(data);
  update_rightUp(data);
  update_rightDown(data)
});


var boardtimeflag=0;
var boardtimeflag_Contron = setInterval(function(){
  let left_board_keys = Object.keys(originaljson["board"]["right"]);
    let left_board_value = Object.values(originaljson["board"]["right"]);
  
  if (boardtimeflag == ((left_board_keys.length) - 1)) {
      boardtimeflag=0;
    } else {
      boardtimeflag = boardtimeflag + 1;
    };
  
},4000);






function update_OptionBar(json) {
  for (var i = 0; i < 5; i++) {
    let keys = Object.keys(json["option_bar"]);
    let value = Object.values(json["option_bar"]);
    var option = document.getElementsByClassName("option")[i];
    option.href = value[i];
    option.innerText = keys[i];

  }
}









function update_banner(json) {
  var rightkeys = Object.keys(json["board"]["right"]);
  var rightvalues = Object.values(json["board"]["right"]);
  update_scroll_indicator(rightkeys.length);

  if (update_right) {
    update_right(rightkeys, rightvalues);
    
  }

  //  update_rightUp();


}









function update_scroll_indicator(dot_count) {
  let scroll_indicator = document.getElementById("scroll_indicator");

  scroll_indicator_html = "";
  for (var i = 0; i < dot_count; i++) {
    if (i == 0) {
      scroll_indicator_html += `<div class="scroll_dot activeScroll_dot"></div>`;
    } else {
      scroll_indicator_html += `<div class="scroll_dot"></div>`;
    }

    scroll_indicator.innerHTML = scroll_indicator_html;
  }


}







var myInterval;

function update_right(keys, values, status) {
  const divElement = document.querySelector('.dis-left');

  let currentIndex = 0;
  var leftboard = document.querySelector('.dis-left');
  var imglink = keys[currentIndex];

  leftboard.style.backgroundImage = `url("` + imglink + `")`;
  leftboard.style.backgroundSize = "cover";
  update_left_a(values, currentIndex);


  currentIndex++;




  
 

    

  

  function regulator() {

    var imglink = keys[currentIndex];

    leftboard.style.backgroundImage = `url("` + imglink + `")`;
    leftboard.style.backgroundSize = "cover";

    update_left_a(values, currentIndex);

    if (currentIndex == ((keys.length) - 1)) {
      currentIndex = 0;
    } else {
      currentIndex = currentIndex + 1;
    };
    
    incriment_scroll_dot((keys.length) - 1);


  }





function myStopFunction() {
  clearInterval(myInterval);
}



if (status==="clear") {
  myStopFunction();
}else{
myInterval = setInterval(regulator, 4000);
}


};









var dotIndex = "0";


function incriment_scroll_dot(total_dots) {


  if (dotIndex == total_dots) {
    dotIndex = 0;
  } else {
    dotIndex++;
  };




  if (dotIndex == 0) {
    var dot_to_leave_class = document.getElementsByClassName("scroll_dot")[total_dots];
  } else {
    var dot_to_leave_class = document.getElementsByClassName("scroll_dot")[dotIndex - 1];
  }

  var dot_to_ocupy_class = document.getElementsByClassName("scroll_dot")[dotIndex];

  dot_to_leave_class.classList.remove('activeScroll_dot');
  dot_to_ocupy_class.classList.add('activeScroll_dot');








}



function decriment_scroll_dot(total_dots) {


  if (dotIndex == 0) {
    dotIndex = total_dots;
  } else {
    dotIndex--;
  };




  if (dotIndex == total_dots) {
    var dot_to_leave_class = document.getElementsByClassName("scroll_dot")[0];
  } else {
    var dot_to_leave_class = document.getElementsByClassName("scroll_dot")[dotIndex + 1];
  }

  var dot_to_ocupy_class = document.getElementsByClassName("scroll_dot")[dotIndex];

  dot_to_leave_class.classList.remove('activeScroll_dot');
  dot_to_ocupy_class.classList.add('activeScroll_dot');








}



function update_left_a(values, currentIndex) {
  link = values[currentIndex];
  document.getElementById("dis_left_a").href = link;
};





function update_rightUp(json) {
  var right_Up_keys = Object.keys(json["board"]["left_up"]);
  var right_Up_values = Object.values(json["board"]["left_up"]);
  var right_Up = document.getElementsByClassName("dis-right1")[0];
  right_Up.style.backgroundImage = `url("` + right_Up_keys[0] + `")`;
  right_Up.style.backgroundSize = "cover";

  document.getElementById("dis_left_up_a").href = right_Up_values[0];

};



function nextboard() {
  
 
  const leftboard = document.querySelector('.dis-left');

    
  var keys = Object.keys(originaljson["board"]["right"]);
  var values = Object.values(originaljson["board"]["right"]);
  
  if (boardtimeflag == ((keys.length) - 1)) {
      boardtimeflag=0;
    } else {
      boardtimeflag = boardtimeflag + 1;
    }
    
  var imglink = keys[boardtimeflag];

  leftboard.style.backgroundImage = `url("` + imglink + `")`;
  leftboard.style.backgroundSize = "cover";

clearInterval(myInterval);
clearInterval(boardtimeflag_Contron);
update_left_a(values, boardtimeflag);
incriment_scroll_dot((keys.length) - 1);

}


function prevboard() {
  
  const leftboard = document.querySelector('.dis-left');
  
 
  var keys = Object.keys(originaljson["board"]["right"]);
  var values = Object.values(originaljson["board"]["right"]);
  
  
  if (boardtimeflag == 0) {
    boardtimeflag = ((keys.length) - 1);
  } else {
    boardtimeflag = boardtimeflag - 1;
  }
  
  var imglink = keys[boardtimeflag];

  leftboard.style.backgroundImage = `url("` + imglink + `")`;
  leftboard.style.backgroundSize = "cover";
  
clearInterval(myInterval);
clearInterval(boardtimeflag_Contron);
update_left_a(values, boardtimeflag);
decriment_scroll_dot((keys.length) - 1);
}








function update_rightDown(json){
  let rightDown_keys = Object.keys(json["board"]["left_down"]);
  let rightDown_values = Object.values(json["board"]["left_down"]);
  var right_DownCount=rightDown_keys.length;
  var right_DownHtml="";
  
  
  for (var j = 0; j < right_DownCount; j++) {
    var img_link=rightDown_keys[j];
    var href_link=rightDown_values[j];
    
    right_DownHtml+=`<a href="`+img_link+`"><img src="`+href_link+`" alt="not available"></a>
`;
  }
  right_DownHtml+=`<a href="`+rightDown_keys[0]+`"><img src="`+rightDown_values[0]+`" alt="not available"></a>`
  
  document.getElementsByClassName("float-down-container")[0].innerHTML=right_DownHtml;
  
  
}





const swipeDiv = document.querySelector(".dis-left");

let startX = 0;

// Function to be called on swipe left
function onSwipeLeft() {
  alert("Swiped left!");
}

// Function to be called on swipe right
function onSwipeRight() {
  alert("Swiped right!");
}

swipeDiv.addEventListener("touchstart", function(e) {
  startX = e.touches[0].clientX;
});

swipeDiv.addEventListener("touchend", function(e) {
  const endX = e.changedTouches[0].clientX;
  const deltaX = endX - startX;

  if (deltaX > 0) {
    prevboard();
  } else if (deltaX < 0) {
    nextboard();
  }
});