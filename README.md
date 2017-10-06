# js-tip
### JQuery
##### 关于jquery的serialize方法转换空格为+号的解决方法
```text
//serialize()对空格进行了转义，转换成了 + 号
//serialize()方法对真正的“+”号转义的是 %2B

var a= $('$frm1').serialize(); //序列化，默认会调用encodeURIComponent()进行编码
alert(a); // content=abc+++123+++456
var b = a.replace(/\+/g," ");   // g表示对整个字符串中符合条件的都进行替换
b =  decodeURIComponent(b);  //对serialize后的内容进行解码
alert(b); // content=abc + 123 + 456
```
