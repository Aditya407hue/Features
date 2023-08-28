var arr = [
   {dp:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluc3RhZ3JhbSUyMG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=90",story:"https://images.unsplash.com/photo-1574701148212-8518049c7b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=90"},
   {dp:"https://images.unsplash.com/photo-1552954277-0c45bd503b54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=90",story:"https://images.unsplash.com/photo-1620523162656-4f968dca355a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=90"},
   {dp:"https://images.unsplash.com/photo-1610932146070-28464a974a7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=90",story:"https://images.unsplash.com/photo-1533729590644-695ded775a63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYXV0aWZ1bCUyMGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=80"},
   {dp:"https://images.unsplash.com/photo-1614090965443-3df21c6906ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYXV0aWZ1bCUyMGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=80",story:"https://images.unsplash.com/photo-1615887329889-a67219ec25dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJlYXV0aWZ1bCUyMGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=100"}]


var storys = document.querySelector("#storys")

var clutter = ""
arr.forEach(function(elem,idx){
 clutter += `<div class="story">
        <img id="${idx}"src="${elem.dp}" alt=""> 
 </div>`
})

storys.innerHTML = clutter;
storys.addEventListener("click",function(dets){
document.querySelector("#full-screen").style.display = "block"
 document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

 setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none"
 },2000)
})