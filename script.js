//responsive menu stuff
const btn_menu = document.querySelector('.mobile-menu');
const sidebar = document.querySelector('.sidebar')
btn_menu.addEventListener('click', ()=> {
    sidebar.classList.toggle('-translate-x-full');
});//responsive menu stuff

//registration and login
const btnCancel = document.querySelector('#cancel');
const btnCancel1 = document.querySelector('#cancel1');
const modal = document.querySelector(".modal");
const modal1 = document.querySelector(".modal1");
const overlay = document.querySelector('#overlay');
const login = document.querySelector('.btnLogin') //login first time
const container = document.querySelector('.container');
const email = document.querySelector('#email2');
const password = document.querySelector('#password2');
const loginbtn = document.querySelector('#login2')
const regbtn = document.querySelector('#regbtn')
const add = document.querySelector('#add')


add.addEventListener('click', ()=> {
    modal.classList.toggle('active');
})


if(btnCancel){btnCancel.addEventListener('click', ()=> {
    modal.classList.toggle('active');
})}
if(btnCancel1){btnCancel1.addEventListener('click', ()=> {
    modal1.classList.toggle('active');
})}
regbtn.addEventListener('click', ()=> {
    modal1.classList.toggle('active');
})

//registration

function getData(users){
    if(localStorage['users']){
        users = JSON.parse(localStorage['users'])
    } else {
        users = [];
    }
    return users;
}


let singnedIn = false;

login.addEventListener('click', function(){ 

    if( singnedIn === true) {
        Swal.fire({
            title: 'Do you want to sign out?',
            showDenyButton: true,
            confirmButtonText: 'Sign out',
            denyButtonText: `cancel`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                singnedIn = false
              return Swal.fire('Signed out', '', 'success')
            } else if (result.isDenied) {
                
                singnedIn = true
               return Swal.fire('Cancelled', '', 'info')
            }
          })
    } else {
    Swal.fire({
        title: 'Login Form',
        html: `<input type="text" id="login" class="swal2-input" placeholder="Email">
        <input type="password" id="password" class="swal2-input" placeholder="Password">`,
        confirmButtonText: 'Sign in',
        focusConfirm: false,
        preConfirm: () => {
          const email = Swal.getPopup().querySelector('#login').value
          const password = Swal.getPopup().querySelector('#password').value

          let data;
          let users  = getData(data);
          const currentUser = users.find(usr => usr.email === email && usr.password === password);

          if (!currentUser) {
            Swal.showValidationMessage(`Please try again`)
          } else {
                localStorage.setItem('currentUSer', JSON.stringify(currentUser));
                Swal.fire("Logged in!")
                login.innerHTML = `${currentUser.username}`
                singnedIn = true;
          }
        }
      })
    }
}) // add post

class Add {
    constructor(title, price, discription, category, picture){
        this.title = title;
        this.price = price;
        this.discription = discription;
        this.category = category;
        this.picture = picture;
    }
    post(adds){
        adds.push(this);
    }
}
const title = document.querySelector('#title');
const price = document.querySelector('#price');
const discription = document.querySelector('#discription');
const picture = document.querySelector('#picture');
const shoes = document.querySelector('#shoes');
const tees = document.querySelector('#tees');
const hats = document.querySelector('#hats');
const pants = document.querySelector('#pants');
const other = document.querySelector('#other');
const post = document.querySelector('#post')

if(!localStorage['adds']){
    let adds = [
        {
            title: "Nike shoes",
            price: "39",
            discription: "Brand new lifestyle shoes",
            category: "shoes",
            picture: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/exz5hx5lva0ysh6ghhco/killshot-2-leather-mens-shoe-zrq1wk.png"
        },
        {
            title: "Nike shoes",
            price: "79",
            discription: "Brand black shoes",
            category: "shoes",
            picture: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/qwqfyddzikcgc4ozwigp/revolution-5-road-running-shoes-szF7CS.png"
        },
        {
            title: "Nike gray",
            price: "59",
            discription: "lorem20",
            category: "shoes",
            picture: "https://media.kohlsimg.com/is/image/kohls/3798326_Gray_Platinum?wid=600&hei=600&op_sharpen=1"
        },
        {
            title: "Tees",
            price: "19",
            discription: "Liuon king t-shirt",
            category: "tees",
            picture: "https://images.urbndata.com/is/image/UrbanOutfitters/57140063_012_b?$xlarge$&fit=constrain&qlt=80&wid=640"
        },
        {
            title: "Pink floyd tee",
            price: "29",
            discription: "Yellow tee",
            category: "tees",
            picture: "https://editorialist.com/wp-content/uploads/2021/04/Graphic-Tee-_-5-675x700.jpg"
        },
        {
            title: "Hat",
            price: "39",
            discription: "Baseball hat",
            category: "hats",
            picture: "https://images.complex.com/complex/image/upload/c_crop,h_393,w_629,x_8,y_124/c_fill,dpr_auto,f_auto,fl_lossy,g_face,q_auto,w_1280/ljjim66ysfqzbexnwnzk.png"
        },
        {
            title: "Khaki pants",
            price: "99",
            discription: "Italian lose fit pants",
            category: "pants",
            picture: "https://media.gq.com/photos/613797d33024e65002098579/master/w_2000,h_1333,c_limit/Todd-Snyder-Italian-gurkha-trouser.jpg"
        },
        {
            title: "Watch",
            price: "199",
            discription: "Skagen watch",
            category: "other",
            picture: "https://media.gq.com/photos/615b1c917461b547d1da59c4/master/w_2000,h_1333,c_limit/Skagen-'Jorn'-quartz-analog-stainless-steel-and-leather-watch.jpg"
        },

    ];
    localStorage.setItem('adds', JSON.stringify(adds))
}


function postAdd(obj){
    
    if(localStorage['adds']){
        adds = JSON.parse(localStorage['adds'])
    } else {
        adds = [];
    }
    const {title, price, discription, category, picture} = obj;
    const add = new Add(title, price, discription, category, picture);
    add.post(adds)
    localStorage.setItem('adds', JSON.stringify(adds))
}

if(post){
    post.addEventListener('click', event => {
        event.preventDefault()
        let x;
        if(tees.checked){
            x = tees.value;
        }
        if(shoes.checked){
            x = shoes.value;
        }
        if(hats.checked){
            x = hats.value;
        }
        if(pants.checked){
            x = pants.value;
        }
        if(other.checked){
            x = other.value;
        }
        if(title.value !== "" && price.value !== "" && discription.value) {
            postAdd({
                title: title.value,
                price: price.value,
                discription: discription.value,
                category: x,
                picture: picture.value
            })
            new Swal("Posted!")
            modal.classList.toggle('active');
            thing();
        }
    })
}


const content = document.querySelector('.content')
function thing(type) {
    let posts;
    content.innerHTML = " ";
    if(localStorage["adds"]){
        posts = JSON.parse(localStorage['adds'])
    }
    for(let i = 0; i<posts.length; i++){
        content.insertAdjacentHTML('afterbegin', `
        <div class="bg-white view transition duration-200 ease-in-out hover:bg-blue-300  max-w-xs rounded card-h overflow-hidden mx-auto shadow-xl my-4 p-4">
        
        <img id="img"  class="w-full object-cover h-mine" src="${posts[i].picture}" alt="pic">
        <div class="flex flex-col justify-evenly>
        <div class="py-4 px-6">
          <div class="font-bold text-xl">${posts[i].title}</div>
          <p class="text-sm text-gray-700">${posts[i].discription}</p>
        </div>
        <div class="h-px bg-gray-200"></div>
        <div class="py-4 px-6">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer">$${posts[i].price}</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer">#${posts[i].category}</span>
        </div>
        <button id="${posts[i].price}" value="${posts[i].title}" class="buyBtn inline-block bg-gray-400 rounded-full px-3 py-1 font-semibold text-sm px-28 text-gray-700 cursor-pointer">Buy</button>
      </div>
      </div>
    ` )
    }
}
window.onload = thing()

const shoesBtn = document.querySelector('.shoeBtn')
shoesBtn.addEventListener('click', function()  {
    content.innerHTML = " ";
    let posts = JSON.parse(localStorage['adds'])
    for(let i = 0; i<posts.length; i++){
        if(posts[i].category === "shoes"){
            content.insertAdjacentHTML('afterbegin', `
            <div class="bg-white view transition duration-200 ease-in-out hover:bg-blue-300  max-w-xs rounded card-h overflow-hidden mx-auto shadow-xl my-4 p-4">
        
        <img id="img"  class="w-full object-cover h-mine" src="${posts[i].picture}" alt="pic">
        <div class="flex flex-col justify-evenly>
        <div class="py-4 px-6">
          <div class="font-bold text-xl">${posts[i].title}</div>
          <p class="text-sm text-gray-700">${posts[i].discription}</p>
        </div>
        <div class="h-px bg-gray-200"></div>
        <div class="py-4 px-6">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer">$${posts[i].price}</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer">#${posts[i].category}</span>
        </div>
        <button id="${posts[i].price}" value="${posts[i].title}" class="buyBtn inline-block bg-gray-400 rounded-full px-3 py-1 font-semibold text-sm px-28 text-gray-700 cursor-pointer">Buy</button>
      </div>
      </div>
    ` )
        }
    }
})

const all = document.querySelector('#all');
all.addEventListener('click', function(){
    thing();
})

const teesBtn = document.querySelector('.teesBtn')
teesBtn.addEventListener('click', function()  {
    content.innerHTML = " ";
    let posts = JSON.parse(localStorage['adds'])
    for(let i = 0; i<posts.length; i++){
        if(posts[i].category === "tees"){
            content.insertAdjacentHTML('afterbegin', `
            <div class="bg-white view transition duration-200 ease-in-out hover:bg-blue-300  max-w-xs rounded card-h overflow-hidden mx-auto shadow-xl my-4 p-4">
        
            <img id="img"  class="w-full object-cover h-mine" src="${posts[i].picture}" alt="pic">
            <div class="flex flex-col justify-evenly>
            <div class="py-4 px-6">
              <div class="font-bold text-xl">${posts[i].title}</div>
              <p class="text-sm text-gray-700">${posts[i].discription}</p>
            </div>
            <div class="h-px bg-gray-200"></div>
            <div class="py-4 px-6">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer">$${posts[i].price}</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer">#${posts[i].category}</span>
            </div>
            <button id="${posts[i].price}" value="${posts[i].title}" class="buyBtn inline-block bg-gray-400 rounded-full px-3 py-1 font-semibold text-sm px-28 text-gray-700 cursor-pointer">Buy</button>
          </div>
          </div>
    ` )
        }
    }
})
const hatsBtn = document.querySelector('.hatsBtn')
hatsBtn.addEventListener('click', function()  {
    content.innerHTML = " ";
    let posts = JSON.parse(localStorage['adds'])
    for(let i = 0; i<posts.length; i++){
        if(posts[i].category === "hats"){
            content.insertAdjacentHTML('afterbegin', `
            <div class="bg-white view transition duration-200 ease-in-out hover:bg-blue-300  max-w-xs rounded card-h overflow-hidden mx-auto shadow-xl my-4 p-4">
        
        <img id="img"  class="w-full object-cover h-mine" src="${posts[i].picture}" alt="pic">
        <div class="flex flex-col justify-evenly>
        <div class="py-4 px-6">
          <div class="font-bold text-xl">${posts[i].title}</div>
          <p class="text-sm text-gray-700">${posts[i].discription}</p>
        </div>
        <div class="h-px bg-gray-200"></div>
        <div class="py-4 px-6">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer">$${posts[i].price}</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer">#${posts[i].category}</span>
        </div>
        <button id="${posts[i].price}" value="${posts[i].title}" class="buyBtn inline-block bg-gray-400 rounded-full px-3 py-1 font-semibold text-sm px-28 text-gray-700 cursor-pointer">Buy</button>
      </div>
      </div>
    ` )
        }
    }
})
const pantsBtn = document.querySelector('.pantsBtn')
pantsBtn.addEventListener('click', function()  {
    content.innerHTML = " ";
    let posts = JSON.parse(localStorage['adds'])
    for(let i = 0; i<posts.length; i++){
        if(posts[i].category === "pants"){
            content.insertAdjacentHTML('afterbegin', `
            <div class="bg-white view transition duration-200 ease-in-out hover:bg-blue-300  max-w-xs rounded card-h overflow-hidden mx-auto shadow-xl my-4 p-4">
        
            <img  id="img"  class="w-full object-cover h-mine" src="${posts[i].picture}" alt="pic">
            <div class="flex flex-col justify-evenly>
            <div class="py-4 px-6">
              <div class="font-bold text-xl">${posts[i].title}</div>
              <p class="text-sm text-gray-700">${posts[i].discription}</p>
            </div>
            <div class="h-px bg-gray-200"></div>
            <div class="py-4 px-6">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer">$${posts[i].price}</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer">#${posts[i].category}</span>
            </div>
            <button id="${posts[i].price}" value="${posts[i].title}" class="buyBtn inline-block bg-gray-400 rounded-full px-3 py-1 font-semibold text-sm px-28 text-gray-700 cursor-pointer">Buy</button>
          </div>
          </div>
    ` )
        }
    }
})

const otherBtn = document.querySelector('.otherBtn')
otherBtn.addEventListener('click', function()  {
    content.innerHTML = " ";
    let posts = JSON.parse(localStorage['adds'])
    for(let i = 0; i<posts.length; i++){
        if(posts[i].category === "other"){
            content.insertAdjacentHTML('afterbegin', `
            <div class="bg-white view transition duration-200 ease-in-out hover:bg-blue-300  max-w-xs rounded card-h overflow-hidden mx-auto shadow-xl my-4 p-4">
        
            <img id="img" class="w-full object-cover h-mine" src="${posts[i].picture}" alt="pic">
            <div class="flex flex-col justify-evenly>
            <div class="py-4 px-6">
              <div class="font-bold text-xl">${posts[i].title}</div>
              <p class="text-sm text-gray-700">${posts[i].discription}</p>
            </div>
            <div class="h-px bg-gray-200"></div>
            <div class="py-4 px-6">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer">$${posts[i].price}</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer">#${posts[i].category}</span>
            </div>
            <button id="${posts[i].price}" value="${posts[i].title}" class="buyBtn inline-block bg-gray-400 rounded-full px-3 py-1 font-semibold text-sm px-28 text-gray-700 cursor-pointer">Buy</button>
          </div>
          </div>
    ` )
        }
    }
})
let cartPrice = [];
const basket = document.querySelector('#basket')
const buyBtn = document.getElementsByClassName('buyBtn')
for (let i = 0; i < buyBtn.length; i++) {
    buyBtn[i].addEventListener('click', function(event){
        Swal.fire('Added to cart')
        cartPrice.push(event.target.id);
    })
}

basket.addEventListener('click', function(){
    let total = 0;
    for(let i = 0; i<cartPrice.length; i++){
        total += +cartPrice[i];
    }
    Swal.fire({
        title: `Total is $${total}`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Buy',
        denyButtonText: `Don't buy`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Thank you!', '', 'success')
          total = 0;
        } else if (result.isDenied) {
          Swal.fire('Cart is emptied', '', 'info')
          total = 0;
        }
      })
})
document.addEventListener('click', function(event){

    if(event.target.id === "img"){
        Swal.fire({
            imageUrl: `${event.target.src}`,
            imageAlt: 'A tall image'
          })
    }
    
})
