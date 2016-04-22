# mse-food
MSE FOOD 订餐系统

使用JavaScript 全栈MEAN架构开发。

源文件在src目录下
dump目录下为数据库备份

###运行环境要求
1) Node.JS

2) MongoDB

3) Python (编译SASS时需要用到)

###运行步骤：
1）安装npm依赖包：`$ sudo npm install`

2）安装bower依赖包：`$ sudo bower install`

3) 导入数据库：进入项目根目录，运行命令：`$ mongorestore -d mse-food  ./dump/mse-food`

3）运行node server: `$ node server.js` 或运行gulp:  `$ gulp`

4）在浏览器中打开 http://localhost:5000
