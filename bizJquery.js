function $(selector) {
    let ele
    if (typeof selector === 'string') {
        ele = document.querySelectorAll(selector)
    }
    return new JQ(ele)
}

function JQ(par){
    this.element = par
    this.on = function (event, callFn) {
        for (let i = 0; i < this.element.length; i++) {
            this.element[i].addEventListener(event, callFn)
            
        }
        return this
    }

    this.addClass = function(nameClass) {
        if(typeof nameClass == 'string') {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].classList.add(nameClass);
                
            }
        }
        return this
    }
    this.RemoveClass = function(nameClass) {
        if(typeof nameClass == 'string') {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].classList.remove(nameClass);
                
            }
        }
        return this
    }

}



