let template = document.createElement("template")
template.innerHTML =`
<link rel="stylesheet" href="./template/product/product.css">
<div class="boxproduct">
<img alt="product">
 <div class="info">
     <h2 class="hidden"></h2>
     <h3 class="hidden"></h3>
     <button>show diteils</button>
 </div>
</div>

`

class Pro extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode :"open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }
    connectedCallback(){
    let h2 = this.shadowRoot.querySelector(".info h2")
    h2.innerHTML = this.getAttribute("productname")
    let h3 = this.shadowRoot.querySelector(".info h3")
    h3.innerHTML = this.getAttribute("productprice")
    this.shadowRoot.querySelector('img').setAttribute('src', this.getAttribute("productsrcimg"))
    this.shadowRoot.querySelector("button").addEventListener("click",function(){
        h2.classList.toggle("hidden")
        h3.classList.toggle("hidden")
    })
       
      
        console.log(this);

    }

    static observedAttributes (){
        return ["productname","productprice","productsrcimg"]
    }

    

}

export {Pro}





