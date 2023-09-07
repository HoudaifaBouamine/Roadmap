/*control panel*/
var mainElement=document.getElementById('maincontent');



console.log(mainElement.nodeName);


function add_node(...args){
   var newNode=document.createElement(args[1]);
   newNode.innerHTML=args[2];

   if (args[3]){
   newNode.setAttribute("class", args[3]);
   }
   if (args[4]){
   newNode.setAttribute("id", args[4]);
   }
   
   args[0].appendChild(newNode);
   return newNode;
}

add_p=function(parentNode, text){
   add_node(parentNode, 'p', text);

   console.log("p added succefullly !");
}

add_ul=function(parentNode, text=""){
   return add_node(parentNode, 'ul', text);
}

add_li=function(parentNode, text){
   return add_node(parentNode, 'li', text);
}

add_section=function(parentNode, listId, text, className="", id=""){
   const targetList=document.getElementById(listId);
   const node=add_node(targetList, 'li',"",'item-lvl1');
   add_node(node, 'a', text);
   return add_node(parentNode,'h2', text, className, id);
}

add_h1=function(parentNode, text, className=""){
   return add_node(parentNode, 'h1', text, className);
}

add_quotes=function(parentNode, text, className){
   return add_node(parentNode, 'caption', text, className);
}


function remove_all(element){
   const arr=Array.from(element.childNodes);

   for (let i=0; i<arr.length; i++){
      element.removeChild(arr[i]);
      console.log(arr[i].nodeName);
   }
}


function page2(){
   remove_all(mainElement);
   /*Drawing Point*/
}

function page3(){
   remove_all(mainElement);
   /*....*/
}

/*test case where we have added a section to the list and the page one time*/
/*add_section(mainElement,"computer-graphic", "New Section", "item-lvl1");*/




















