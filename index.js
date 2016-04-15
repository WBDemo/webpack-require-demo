console.log('aaaaaaaaaaaaaa');
console.log('aaaaaaaaaaaaaa');

var button = document.getElementById('button');

function addEvent(obj,type,handle){
    try{  // Chrome、FireFox、Opera、Safari、IE9.0及其以上版本
        obj.addEventListener(type,handle,false);
    }catch(e){
        try{  // IE8.0及其以下版本
            obj.attachEvent('on' + type,handle);
        }catch(e){  // 早期浏览器
            obj['on' + type] = handle;
        }
    }
}

addEvent(button, 'click', function() {
 console.log('clicked');

  require.ensure(['jquery'], function () {
    console.log("进入require.ensure回调")
    require("./ensure.js")
    console.log("调用完require.ensure")
  })
});
