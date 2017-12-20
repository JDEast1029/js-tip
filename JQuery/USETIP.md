# JQuery 使用
1. 给input赋值
```js
$("input[name='integral']").val('');
```
2. 拿到input的值
```js
$("input[name='integral']").val();
```
3. JQuery清空子元素
```js
$('.continuity_sign_list').empty();
```
4. 单选框取消选中
```js
$("input[name='sign-validity']:checked").attr('checked', false);
```