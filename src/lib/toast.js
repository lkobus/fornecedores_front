const Toast = {
    show: function(toast, msg){
        toast.show(msg, {
        action : {
            text : 'Cancel',
            onClick : (e, toastObject) => {
                toastObject.goAway(0);
            }
        }})
    }
}

export default Toast