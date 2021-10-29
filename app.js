let girilen,seçilen
let eklenen,btntamamla,btnsil

let tıkla=document.getElementById("button")


  tıkla.addEventListener("click",listeyeekle)  
  
  
  function listeyeekle() {
    girilen=document.getElementById("input").value;
    if(girilen!=""){
        
        let ilk=document.getElementsByClassName("section1__1")[0];
        
        
        div1=document.createElement("div");
        div1.setAttribute("id","section1__1");
        ilk.appendChild(div1)

    div1.innerHTML=girilen
    // girilen=""
        btntamamla=document.createElement("img");
        div1.appendChild(btntamamla)
    
        btntamamla.setAttribute("src","https://uc-emoji.azureedge.net/orig/0d/5232f11b284da4884088de94d0da1d.png");
        btntamamla.setAttribute("id","img");

        // btnsil=document.createElement("img");
        // div1.appendChild(btnsil)
        
  

        // btnsil.setAttribute("src","https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/298/recycling-symbol_267b-fe0f.png");
        // btnsil.setAttribute("id","img");
        
        
        
        btntamamla.addEventListener("click",tamamla);
       
        // eklenen.addEventListener("click",sil);
        // btnsil.addEventListener("click",sil1);
        // btnsil.addEventListener("click",azalt);
       
       
    }else{
        alert("boş bırakılamaz")
    }
    
}





var t=1;

function tamamla() {
     
    var foother=document.getElementById("foother")

    let sec=document.getElementsByClassName("section2__başlık")[0];
        eklenen=document.createElement("div");
        eklenen.setAttribute("id","section1__1")
        sec.appendChild(eklenen)

        
        // eklenen.addEventListener("click",sil1);
    //    console.log(btnsil+"sil");
      
      
        var seçilen = this.parentElement;
        
        // console.log(seçilen+"seç");
        seçilen.remove()
        
       
        eklenen.innerText=seçilen.innerText

        t+=1
      
        btnsil=document.createElement("img");
        eklenen.appendChild(btnsil)
        


        btnsil.setAttribute("src","https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/298/recycling-symbol_267b-fe0f.png");
        btnsil.setAttribute("id","img1");

        btnsil.addEventListener("click",sil);
        console.log(foother.innerHTML);
        foother.innerHTML=t
       
sil()
 }


 function sil() {
    
     
     foother.innerHTML=foother.innerHTML-1
  
     console.log(foother.innerHTML+"   aa");
     var seçilen = this.parentElement;
         
     //   console.log(seçilen+"seçilen");
     seçilen.remove()
     t-=1
 }