var pr = new Promise(function(resolve,reject){
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url)
    xhr.responseType = 'json'
    xhr.setRequestHeader("Accept", "application/json")
    xhr.send()
    xhr.onreadystatechange = function(){
        if(this.status ==200){
            resolve(this.response)
        }else{
            reject(new Error(this.statusText))
        }
    }
})