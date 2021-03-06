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
### 骚气的JavaScript
1. 去掉小数部分
```text
parseInt(num)
~~num
num >> 0
num | 0
```
2. 判断x是否为整数
```text
function isInt(x) {
  return (x ^ 0) === x
}
return Math.round(x) === x
return (typeof num === 'number') && (x % 1 === 0)
(x % 1 === 0)
//ES6 Number.isInteger(num)
```
3. 递归求阶乘
```text
function factorial(n) {
    return (n > 1) ? n * factorial(n-1) : n
}
factorial(3) //6
```
4. 克隆数组
```text
arr.slice(0);

let arr1 = [1,2,3];
let arr2 = arr1.slice(0);
console.log(arr1, arr2, arr1 === arr2) //[1,2,3] [1,2,3] false
```
5. js替换掉富文本或html中的标签和空白
```text
var html = '<div style="color:red">111<span>222</span>&nbsp;&nbsp;333<a>444</a>555</div>';
html = html.replace(/<\/?.+?>/g, "");

html= html.replace(/&nbsp;/g, " ");

console.log(html);

//结果是111222333444555 
```
6. 获取当月天数
getDate() 方法可返回月份的某一天。取值范围是1~31
如果是0的话，就返回最后一天。这样就能取得当月的天数了
```js
var  day = new Date(2016,2,0);
var daycount = day.getDate();
alert(daycount);//29
```
7. 两个字符串数字比较大小
比较的时候，从字符串左边开始，一次比较每个字符，直接出现差异、或者其中一个串结束为止。比如ABC与ACDE比较，第一个字符相同，继续比较第二个字符，由于第二个字符是后面一个串大，所以不再继续比较，结果就是后面个串大。再如ABC与ABC123比较，比较三个字符后第一个串结束，所以就是后面一个串大。所以，长度不能直接决定大小，`字符串的大小是由左边开始最前面的字符决定的`。
```js
'321' > '4' // false
```
