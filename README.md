使用了分包加载，如果项目不大可以适当的做一下修改：文件和app.json
一套前端页面的实现，没有和服务端交互的逻辑，有需要的可以直接在基础上和服务端交互就可以了


git命令帮助 http://www.daqianduan.com/6399.html

先进行 git add

git commit -m "这里是说明"

这个说明这里是必须填的，不然commit不进去，这个命令可以指定某一个文件：

比如  git commit mvnw -m "说明"   mvnw是文件名/文件夹名

就已经在本地和缓存区保持一致了。我们可以直接push了

因为我这是第一次推，所以不会有冲突，建议每次push之前使用下命令

git pull 更新一下代码，可以解决一下冲突。

git push 推到远程仓库。
