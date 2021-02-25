function myModule(){
    var msg = 'at guigu';
    function doSomething(){
        console.log('doSomething ' + msg.toUpperCase());
    }
    function doOtherthing(){
        console.log('doOtherthing ' + msg.toLocaleLowerCase());
    }

    return {
        doSomething:doSomething,
        doOtherthing:doOtherthing
    }
}