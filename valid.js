function validateform(){
    let x=document.ValidTeszt.knev.value;
    if (x === ""){
        alert("A mező kitöltése kötelező!")
        return false
    }
    return true;
}