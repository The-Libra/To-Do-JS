var god;
let cards=[];
console.log(cards);
document.querySelector("#addTask").addEventListener("click", createList);
document.querySelector("#cancelList").addEventListener("click", hideListForm);
document.querySelector("#addList").addEventListener("click", addCards);

function createList(){
    document.querySelector("#formList").style.visibility= "visible";
    document.querySelector("#blankMessage").style.display="none";
    document.querySelector("header").style.filter= "blur(2px)";
    document.querySelector("#cardsContainer").style.filter= "blur(2px)";
}

function hideListForm(){
    document.querySelector("#formList").style.visibility= "hidden";
    document.querySelector("header").style.filter= "blur(0px)";
    document.querySelector("#cardsContainer").style.filter= "blur(0px)";
}

function addCards(){
    document.querySelector("#formList").style.visibility="hidden";
    document.querySelector("header").style.filter= "blur(0px)";
    document.querySelector("#cardsContainer").style.filter= "blur(0px)";

    let cardName=document.querySelector("#newList").value;
    if (cardName!=="")
    {
        let cardDivs=document.createElement("div");
        cardDivs.setAttribute("class", "cards");
        console.log(document.querySelectorAll(".cards"));

        let hrLine=document.createElement("hr");
        
        //let cardItems=[];
        
        let cardItemsDiv=document.createElement("div");
        cardItemsDiv.className="itemsBox"
        //cardItemsDiv.setAttribute("id", "Items");
        
        let addItemsIcon=document.createElement("i");
        addItemsIcon.setAttribute("class", "fa-solid fa-circle-plus");
        //addItemsIcon.setAttribute("id", "plusIcon");

        

        let deleteItemsIcon=document.createElement("i");
        deleteItemsIcon.setAttribute("class", "fa-solid fa-trash");
        //deleteItemsIcon.setAttribute("id", "trashIcon");
        
    

        
    deleteItemsIcon.addEventListener("click", removeCard);

    function removeCard()
    {
        document.querySelector("#cardsContainer").removeChild(cardDivs);
        
    }
        //console.log(cardName); just to check if fetching is okay or not
    
    
        let cardTitle=document.createElement("h2");
    cardTitle.innerText=cardName;

    let h2s=document.querySelectorAll(".cards h2");
    // cardTitle.addEventListener("click", displayLarge);
    // function displayLarge(index)
    // {
    //     let bigCardBox=document.createElement("div");
    //     bigCardBox.id="bigCardBox";
    //     let bigTitle=document.createElement("h1");
    //     let bigCardItemsDiv= document.createElement("div");

        
    //     console.log(h2s);
    //     console.log(bigCardBox);
    //     let cards=document.querySelectorAll(".cards");
    //     for(let j=0; j<cards.length;j++)
    //     {
    //         if(index==j)      
    //         {     
    //     bigTitle.innerText=document.querySelectorAll(".cards h2")[j].value;
    //     bigCardItemsDiv=document.querySelectorAll(".itemsBox")[j].innerHTML;
    //         }
    //     }
                
            
        
    //     bigCardBox.append(bigTitle, bigCardItemsDiv);
    //     document.querySelector("body").append(bigCardBox);
    // }


    cardDivs.append(cardTitle);
    cardDivs.append(hrLine);
    cardDivs.append(cardItemsDiv)
    cardDivs.append(addItemsIcon);
    cardDivs.append(deleteItemsIcon);
    document.querySelector("#cardsContainer").append(cardDivs);
    cards.push(cardDivs);

    addItemsIcon.addEventListener("click", ()=>
    {document.querySelector("#newCardItem").style.visibility="visible";
    document.querySelector("header").style.filter= "blur(2px)";
    document.querySelector("#cardsContainer").style.filter= "blur(2px)";});

    deleteItemsIcon.addEventListener("click", ()=>
    {document.querySelector("#newCardItem").style.visibility="hidden";
    document.querySelector("header").style.filter= "blur(0px)";
    document.querySelector("#cardsContainer").style.filter= "blur(0px)";});

    document.querySelector("#cancelItem").addEventListener("click", ()=>
    {document.querySelector("#newCardItem").style.visibility="hidden";
    document.querySelector("header").style.filter= "blur(0px)";
    document.querySelector("#cardsContainer").style.filter= "blur(0px)";});

    document.querySelector("#addItem").addEventListener("click", addCardItems);   
    function addCardItems()
    {
        document.querySelector("header").style.filter= "blur(0px)";
        document.querySelector("#cardsContainer").style.filter= "blur(0px)";
        document.querySelector("#newCardItem").style.visibility="hidden";
            let itemName=document.querySelector("#newItem").value;  

            
            if(itemName!="")
            {
            let pItems=document.createElement("p");
            pItems.innerText=itemName;
            console.log(pItems);

            let listItems=[];
            listItems.push(pItems);
            
            display(listItems);
            function display(array)
            {
                for(let i=0; i<array.length; i++)
                {
                    //if(cards[i]==cardDivs)
                    let span=document.createElement("span");
                    span.innerHTML=`<button class="markDone">Done</button>`
                    pItems.append(span)
                    cardItemsDiv.append(pItems);
                    span.addEventListener("click", lineThrough);
                    function lineThrough()
                    {
                        pItems.style.textDecoration="line-through";
                        span.style.visibility="hidden";
                        
                    };
                    
                }
                
            }
            
            }

    }
}
else
{
    alert("Please Enter Task");
}
}
// if(cards.length>=0)
//         {
//             console.log("hi");
//         }
//         else
//         {
//             document.querySelector("#blankMessage").style.display="block";
//         }

