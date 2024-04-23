function toggle() {
    var checkbox = document.getElementById("checked");
    var resultLabel = document.getElementById("result");

    if (checkbox.checked) {
        resultLabel.textContent = "Toggle ON";
    } else {
        resultLabel.textContent = "Toggle OFF";
    }
}

  
    function nxt1(){
        var item1=document.getElementById('item1');
        var item2=document.getElementById('item2');
        item1.style.display="none";
        item2.style.display="block";
    }


  
    function nxt0(){
        var item1=document.getElementById('item1');
        var item2=document.getElementById('item2');
        item2.style.display="none";
        item1.style.display="block";
    }
    function switchtab1(){
        var id1=document.getElementById('cur1');
        var id2=document.getElementById('cur2');
        id1.style.color="#223354";
        id1.style.borderBottomColor="#223354";
        id2.style.color="#828282";
        id2.style.borderBottomColor="#828282";
    }function switchtab2(){
        var id1=document.getElementById('cur1');
        var id2=document.getElementById('cur2');
        id1.style.color="#828282";
        id1.style.borderBottomColor="#828282";
        id2.style.color="#223354";
        id2.style.borderBottomColor="#223354";
    }
    function switchpage1(){
        var id_1=document.getElementById('page_1');
        var id_2=document.getElementById('page_2');
        var id_3=document.getElementById('page_3');
       id_1.style.color="white";
       id_2.style.color="#223354";
       id_3.style.color="#223354";
       id_1.style.backgroundColor="#223354";
       id_2.style.backgroundColor="white";
       id_3.style.backgroundColor="white";
       id_1.style.borderColor="#223354";
       
    }function switchpage2(){
        var id_1=document.getElementById('page_1');
        var id_2=document.getElementById('page_2');
        var id_3=document.getElementById('page_3');
        id_2.style.color="white";
        id_3.style.color="#223354";
        id_1.style.color="#223354";
        id_2.style.backgroundColor="#223354";
        id_1.style.backgroundColor="white";
        id_3.style.backgroundColor="white";
        id_3.style.borderColor="#223354";
        id_1.style.borderColor="black";
        id_2.style.borderColor="#223354";
       
    }function switchpage3(){
        var id_1=document.getElementById('page_1');
        var id_2=document.getElementById('page_2');
        var id_3=document.getElementById('page_3');
       id_3.style.color="white";
       id_2.style.color="#223354";
       id_1.style.color="#223354";
       id_3.style.backgroundColor="#223354";
       id_2.style.backgroundColor="white";
       id_1.style.backgroundColor="white";
       id_3.style.borderColor="#223354";
       id_1.style.borderColor="#223354";
       id_2.style.borderColor="#223354";
    }
    function prog1(){
        var progress1=document.getElementById('progress1');
        var progress2=document.getElementById('progress2');
        var progress3=document.getElementById('progress3');
      
        var line=document.getElementById('lin');
        var line1=document.getElementById('linees');
        progress1.style.backgroundColor="#223354";
        progress2.style.backgroundColor="white";
        progress2.style.borderColor="#223354";
        progress3.style.borderColor="#bdbdbd";
        progress3.style.backgroundColor="white";
        line1.style.backgroundColor="#bdbdbd";
        line.style.backgroundColor = '#223354';
    }
    function prog2(){
        var progress1=document.getElementById('progress1');
        var progress2=document.getElementById('progress2');
        var progress3=document.getElementById('progress3');
        var line=document.getElementById('lin');
        var line1=document.getElementById('linees');
        progress2.style.backgroundColor="#223354";
        progress1.style.backgroundColor="#223354";
        progress2.style.borderColor="#223354";
        progress3.style.backgroundColor="white";
        line.style.backgroundColor = '#223354';
        line1.style.backgroundColor = '#223354';
        progress3.style.borderColor="#223354";
        
    }
    function prog3(){
        var progress1=document.getElementById('progress1');
        var progress2=document.getElementById('progress2');
        var progress3=document.getElementById('progress3');
        var line=document.getElementById('lin');
        var line1=document.getElementById('linees');
        progress2.style.backgroundColor="#223354";
        progress1.style.backgroundColor="#223354";
        progress2.style.borderColor="#223354";
        
        line.style.backgroundColor = '#223354';
        line1.style.backgroundColor = '#223354';
        progress3.style.borderColor="#223354";
        progress3.style.backgroundColor="#223354";
    }
    