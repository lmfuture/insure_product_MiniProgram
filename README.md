来自于分支


上传到本地仓库 git commit 命令

先进行 git add


git commit -m "这里是说明"

这个说明这里是必须填的，不然commit不进去，这个命令可以指定某一个文件：

比如  git commit mvnw -m "说明"   mvnw是文件名/文件夹名

就已经在本地和缓存区保持一致了。我们可以直接push了

因为我这是第一次推，所以不会有冲突，建议每次push之前使用下命令

git pull 更新一下代码，可以解决一下冲突。

git push 推到远程仓库。