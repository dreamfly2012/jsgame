var IM = []

var loadImg = function(name,src){
    var img = new Image()
    
    img.addEventListener('load', function () {
        var obj = {}
        obj.name = name;
        obj.img = img
        IM.push(obj)
    }, false)
    img.src = src
}