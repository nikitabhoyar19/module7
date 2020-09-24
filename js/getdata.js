// here we gonna retrive our data

let alldata = document.getElementById("alldata");
const db = firebase.firestore();
// onSnapshot is used isted of get() for calling data realtime
// This onSnap function onshop means realtime values lega aur provide krega 
db.collection("users").onSnapshot(
    function(snapshot){
    snapshot.docChanges().forEach(
        function(change){
        if(change.type ==="added")
        { 
         console.log(change.doc.data());
  //change.doc.data(); used to change the data of document everytime when query fetches
    
            let html = `        
            <div class="col mb-5" id= "cards_container">
          <div class="card w-200 mb-4 p-3 border-top-0 border-left-0 border-warning border-5" >
          <div class="card-inner" >
            
            
                <h5 class="card-title" >${change.doc.data().name}</h5>
                </br> 
                   
            
              
              <p class="card-text">
                  ${change.doc.data().address}
              </p>
              <p class="card-text">
                  ${change.doc.data().email}
              </p>
              <p class="card-text">
                  ${change.doc.data().phone}
              </p> 
            
      
            </div>
          </div>
        </div>
        `;
      
         alldata.insertAdjacentHTML("afterbegin",html);
         // if added vla document
        }
        // chane function document
      }
      // for each ke andar
    );
    // this is snapshot function
  }
);

// For retriving data there methods
// 1. METHOD
     // db.collection(users").get()


// 2. METHOD
     // db.collection("users").onSnapshot(
     // function(snapshot){
     // snapshot.forEach(
     // function(doc){
     // console.log("change ka id", doc.id());
     // console.log("change ka data", doc.data());
     // })
     // });