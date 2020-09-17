
##### 1、开发时去修改pom.xml中profiles节点中的 activeByDefault,将相应的环境配置改为true，其他的改为false，即可实现使用不用的环境参数运行程序
##### 2、目前env-dev 、env-test、env-product仅放置了数据库连接的配置文件，如果在开发、测试、生成中其他的配置文件也不相同时，将相应的配置文件放到env-dev 、env-test、env-product中，然后删除resource根目录下的同名文件即可
#### 3、使用maven打包时不同环境的打包命令通过 -P 参数指定
#####3.1 生产环境
```
mvn clean package -Dmaven.test.skip=true -P product -f pom.xml
```
#####3.2 测试环境
```
mvn clean package -Dmaven.test.skip=true -P test -f pom.xml
```
#####3.3 开发环境
```
mvn clean package -Dmaven.test.skip=true -P dev -f pom.xml
```



