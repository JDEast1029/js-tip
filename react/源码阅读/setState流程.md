# React -- setState
## setState主要流程
1. enqueueSetState将state放入队列中，并调用enqueueUpdate处理要更新的Component。
2. 如果组件当前正处于update事务中，则先将Component存入dirtyComponent中。否则调用batchedUpdates处理。
3. batchedUpdates发起一次transaction.perform()事务。
4. 开始执行事务初始化，运行，结束三个阶段
```text
a. 初始化：事务初始化阶段没有注册方法，故无方法要执行
b. 运行：执行perform()传入的method。
c. 结束：更新isBatchingUpdates为false，并执行FLUSH_BATCHED_UPDATES这个wrapper中的close方法。
```
5. FLUSH_BATCHED_UPDATES在close阶段，会循环遍历所有的dirtyComponents，调用updateComponent刷新组件，并执行它的pendingCallbacks, 也就是setState中设置的callback。