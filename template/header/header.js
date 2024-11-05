let template = document.createElement("template")
template.innerHTML = `
<link rel="stylesheet" href="./template/header/header.css">
<div class="hedbox">
<h1 class="hedh1">store</h1>
</div>
`



class Hed extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode :"open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }

    

}

export {Hed}




