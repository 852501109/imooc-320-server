(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d66c5792"],{"67c6":function(t,i,n){(t.exports=n("2350")(!1)).push([t.i,"table th{border:1px solid #000;border-left:none}table th:first-child{border-left:1px solid #000}table td{border-bottom:1px solid #000;border-right:1px solid #000}table td:first-child{border-left:1px solid #000}div{margin-top:10px;margin-left:15px}",""])},7919:function(t,i,n){"use strict";n("eabd")},"9a1c":function(t,i,n){"use strict";n.r(i);var r={__name:"configGuide",setup:function(t){return{__sfc:!0}}},s=(n("7919"),n("2877")),e=Object(s.a)(r,(function(){var t=this,i=t._self._c;return t._self._setupProxy,i("div",[t._m(0),i("br"),i("br"),i("div",[i("div",{staticStyle:{"font-size":"30px"},attrs:{id:"title"}},[t._v("\n      平台自定义JDBC连接时，相关产品驱动包配置\n    ")]),i("el-divider"),i("div",{staticStyle:{"font-size":"14px"}},[t._v("\n      清洗融合产品和共享交换产品，如果使用了自定义JDBC驱动包，在任务执行时，需要将相应的JDBC驱动包上传到服务器或大数据平平台sqoop的指定位置，并重启相应的服务。否则任务执行过程中会遇到找不到驱动类的错误，最终导务\n    ")]),i("div",{staticStyle:{"font-size":"25px"},attrs:{id:"1"}},[t._v("\n      1.常见关系型数据库JDBC驱动\n    ")]),i("div",{staticStyle:{"font-size":"14px"}},[t._v("\n      以下驱动是在开发测试环境验证过的，如有新的JDBC驱动，以实际测试为准\n    ")]),t._m(1),i("div",{staticStyle:{"font-size":"25px"},attrs:{id:"2"}},[t._v("\n      2.华为大数据平台-Loader\n    ")]),i("div",{staticStyle:{"font-size":"14px"},attrs:{id:"2.1"}},[t._v("\n      2.1 获取动存放路径\n    ")]),i("div",[t._v("\n      获取关系型数据库对应的驱动iar包保存在Loader服务主备节点的lib路径:\n    ")]),t._m(2),i("div",{staticStyle:{"font-size":"14px"},attrs:{id:"2.2"}},[t._v("\n      2.2 修改驱动权限\n    ")]),i("div",[t._v("\n      使用root用户在主备节点分别执行以下命令修改权限:\n    ")]),t._m(3),i("div",{staticStyle:{"font-size":"14px"},attrs:{id:"2.3"}},[t._v("\n      2.3 重启服务\n    ")]),i("div",[t._v("\n      登录FusionInsight Manager系统，选择“服务管理>Loader>更多操作>重启服务”输入管理员密码重启Loader服务\n    ")]),i("div",{staticStyle:{"font-size":"25px"},attrs:{id:"3"}},[t._v("\n      3.其他大数据平台-Sqoop2\n    ")]),i("div",{staticStyle:{"font-size":"14px"},attrs:{id:"3.1"}},[t._v("\n      3.1 获取驱动存放路径\n    ")]),i("div",[t._v("\n      sqoop2安装后，专门指定了目录存放第三方JDBC驱动包:\n    ")]),i("div",{staticStyle:{"background-color":"black",color:"white"}},[t._v("\n      /var/lib/sqoop2\n    ")]),i("div",{staticStyle:{"font-size":"14px"},attrs:{id:"3.2"}},[t._v("\n      3.2 修改驱动权限\n    ")]),i("div",[t._v("\n      使用root用户分别执行以下命令修改权限:\n    ")]),i("div",{staticStyle:{"background-color":"black",color:"white"}},[t._v("\n      chmod 600 jar包文件名\n    ")]),i("div",{staticStyle:{"font-size":"14px"},attrs:{id:"3.3"}},[t._v("\n      3.3 重启服务\n    ")]),i("div",[t._v("\n      在sqoop2服务器上，执行命令:\n    ")]),t._m(4),i("div",{staticStyle:{"font-size":"25px"},attrs:{id:"4"}},[t._v("\n      4.ETL工具-kettle\n    ")]),i("div",{staticStyle:{"font-size":"14px"},attrs:{id:"4.1"}},[t._v("\n      4.1 获取驱动存放路径\n    ")]),i("div",[t._v("\n      在ETL服务器上的路径:\n    ")]),i("div",{staticStyle:{"background-color":"black",color:"white"}},[t._v("\n      S(KETTLE_HOME}/lib/\n    ")]),i("div",{staticStyle:{"font-size":"14px"},attrs:{id:"4.2"}},[t._v("\n      4.2 修改驱动权限\n    ")]),i("div",[t._v("\n      使用root用户执行以下命令修改权限:\n    ")]),i("div",{staticStyle:{"font-size":"14px"},attrs:{id:"4.3"}},[t._v("\n      4.3 重启服务\n    ")]),t._m(5),i("div",{staticStyle:{"font-size":"25px"},attrs:{id:"5"}},[t._v("\n      5.ETL工具-datax\n    ")]),i("div",{staticStyle:{"font-size":"14px"},attrs:{id:"5.1"}},[t._v("\n      5.1 获取驱动存放路径\n    ")]),i("div",[t._v("\n      在ETL服务器上的路径\n    ")]),i("div",{staticStyle:{color:"white","background-color":"black"}},[t._v("\n      /datax解压日录/lib\n    ")]),i("div",{staticStyle:{"font-size":"14px"},attrs:{id:"5.2"}},[t._v("\n      5.2 修改驱动权限\n    ")]),i("div",[t._v("\n      使用root用户执行以下命令修改权限\n    ")]),i("div",{staticStyle:{"background-color":"black",color:"white"}},[t._v("\n      chmod 600 jar包文件名\n    ")]),i("div",{staticStyle:{"font-size":"14px"},attrs:{id:"5.3"}},[t._v("\n      5.3 重启服务\n    ")]),i("div",[t._v("\n      无需重启\n    ")])],1)])}),[function(){var t=this,i=t._self._c;return t._self._setupProxy,i("div",{staticStyle:{"text-decoration":"underline","font-size":"14px",color:"#0cafd9"}},[i("div",{staticStyle:{"margin-left":"50px","margin-top":"3px"}},[i("a",{attrs:{href:"#title"}},[t._v("平台自定义JDBC连接时，相关产品驱动包配置")])]),i("div",{staticStyle:{"margin-left":"75px","margin-top":"3px"}},[i("a",{attrs:{href:"#1"}},[t._v("1.见关系型数据库JDBC驱动")])]),i("div",{staticStyle:{"margin-left":"75px","margin-top":"3px"}},[i("a",{attrs:{href:"#2"}},[t._v("2.华为大数据平台-Loader")])]),i("div",{staticStyle:{"margin-left":"100px","margin-top":"3px"}},[i("a",{attrs:{href:"#2.1"}},[t._v("2.1 获取动存放路径")])]),i("div",{staticStyle:{"margin-left":"100px","margin-top":"3px"}},[i("a",{attrs:{href:"#2.2"}},[t._v("2.2 修改驱动权限")])]),i("div",{staticStyle:{"margin-left":"100px","margin-top":"3px"}},[i("a",{attrs:{href:"#2.3"}},[t._v("2.3 重启服务")])]),i("div",{staticStyle:{"margin-left":"75px","margin-top":"3px"}},[i("a",{attrs:{href:"#3"}},[t._v("3.其他大数据平台-Sqoop2")])]),i("div",{staticStyle:{"margin-left":"100px","margin-top":"3px"}},[i("a",{attrs:{href:"#3.1"}},[t._v("3.1 获取驱动存放路径")])]),i("div",{staticStyle:{"margin-left":"100px","margin-top":"3px"}},[i("a",{attrs:{href:"#3.2"}},[t._v("3.2 修改驱动权限")])]),i("div",{staticStyle:{"margin-left":"100px","margin-top":"3px"}},[i("a",{attrs:{href:"#3.3"}},[t._v("3.3 重启服务")])]),i("div",{staticStyle:{"margin-left":"75px","margin-top":"3px"}},[i("a",{attrs:{href:"#4"}},[t._v("4.ETL工具-kettle")])]),i("div",{staticStyle:{"margin-left":"100px","margin-top":"3px"}},[i("a",{attrs:{href:"#4.1"}},[t._v("4.1 获取驱动存放路径")])]),i("div",{staticStyle:{"margin-left":"100px","margin-top":"3px"}},[i("a",{attrs:{href:"#4.2"}},[t._v("4.2 修改驱动权限")])]),i("div",{staticStyle:{"margin-left":"100px","margin-top":"3px"}},[i("a",{attrs:{href:"#4.3"}},[t._v("4.3 重启服务")])]),i("div",{staticStyle:{"margin-left":"75px","margin-top":"3px"}},[i("a",{attrs:{href:"#5"}},[t._v("5.ETLT具-datax")])]),i("div",{staticStyle:{"margin-left":"100px","margin-top":"3px"}},[i("a",{attrs:{href:"#5.1"}},[t._v("5.1 获取驱动存放路径")])]),i("div",{staticStyle:{"margin-left":"100px","margin-top":"3px"}},[i("a",{attrs:{href:"#5.2"}},[t._v("5.2 修改驱动权限")])]),i("div",{staticStyle:{"margin-left":"100px","margin-top":"3px"}},[i("a",{attrs:{href:"#5.3"}},[t._v("5.3 重启服务")])])])},function(){var t=this,i=t._self._c;return t._self._setupProxy,i("div",[i("table",[i("thead",[i("tr",[i("th",[t._v("序号")]),i("th",[t._v("数据库类型")]),i("th",[t._v("驱动包名称")]),i("th",[t._v("驱动类")])])]),i("tbody",[i("tr",[i("td",[t._v("\n            1\n          ")]),i("td",[t._v("\n            gaussdb100\n          ")]),i("td",[t._v("\n            com.huawei.gauss.jdbc.ZenithDriver-GaussDB 100 1.0.0.B019.jar\n          ")]),i("td",[t._v("\n            com.huawei.gauss.jdbc.ZenithDriver\n          ")])]),i("tr",[i("td"),i("td",[t._v("\n            连接示例:\n          ")]),i("td",[t._v("\n            jdbc:zenith:@host:4000\n          ")]),i("td")]),i("tr",[i("td",[t._v("\n            2\n          ")]),i("td",[t._v("\n            gaussdb200\n          ")]),i("td",[t._v("\n            驱动1: gsidbc200.jar\n          ")]),i("td",[t._v("\n            com.huawei.gauss200.jdbc.Driver\n          ")])]),i("tr",[i("td"),i("td",[t._v("\n            连接示例:\n          ")]),i("td",[t._v("\n            jdbc:gaussdb://host:25308/postgres\n          ")]),i("td")]),i("tr",[i("td"),i("td"),i("td",[t._v("\n            驱动2: gsidbc4.jar\n          ")]),i("td",[t._v("org.postgresql.Driver")])]),i("tr",[i("td"),i("td",[t._v("连接示例:")]),i("td",[t._v("\n            jdbc;postgresql://host:25308/postgres\n          ")]),i("td")]),i("tr",[i("td",[t._v("\n            3\n          ")]),i("td",[t._v("\n            sqlserver\n          ")]),i("td",[t._v("\n            jtds,jar\n          ")]),i("td",[t._v("\n            net.sourceforge.jtds.jdbc.Driver\n          ")])]),i("tr",[i("td"),i("td",[t._v("\n            连接示例:\n          ")]),i("td",[t._v("\n            jdbc:jtds:sqlserver://host:1433\n          ")]),i("td")]),i("tr",[i("td",[t._v("\n            4\n          ")]),i("td",[t._v("\n            mysql\n          ")]),i("td",[t._v("\n            mysql-connector-java-5.1.34.jar\n          ")]),i("td",[t._v("\n            com.mysql.jdbc.Driver\n          ")])]),i("tr",[i("td"),i("td",[t._v("\n            连接示例:\n          ")]),i("td",[t._v("\n            jdbc:mysql://host:3306/database_name\n          ")]),i("td")]),i("tr",[i("td",[t._v("\n            5\n          ")]),i("td",[t._v("\n            oracle\n          ")]),i("td",[t._v("\n            ojdbc7.jar\n          ")]),i("td",[t._v("\n            oracle.jdbc.OracleDriver\n          ")])]),i("tr",[i("td"),i("td",[t._v("\n            连接示例:\n          ")]),i("td",[t._v("\n            jdbc:oracle:thin:@host:1521/sid\n          ")]),i("td")]),i("tr",[i("td",[t._v("\n            6\n          ")]),i("td",[t._v("\n            gbase8\n          ")]),i("td",[t._v("\n            gbase-connector-java-8.8.jar\n          ")]),i("td",[t._v("\n            com.gbase.jdbc.Driver\n          ")])]),i("tr",[i("td"),i("td",[t._v("\n            连接示例:\n          ")]),i("td",[t._v("\n            jdbc:gbase://host:5258/database_name\n          ")]),i("td")]),i("tr",[i("td",[t._v("\n            7\n          ")]),i("td",[t._v("\n            postgresql\n          ")]),i("td",[t._v("\n            postgresql.jar\n          ")]),i("td",[t._v("\n            org.postgresql.Driver\n          ")])]),i("tr",[i("td"),i("td",[t._v("\n            连接示例:\n          ")]),i("td",[t._v("\n            jdbc:postgresql://host:5432/database_name\n          ")]),i("td")])])])])},function(){var t=this._self._c;return this._self._setupProxy,t("div",{staticStyle:{"background-color":"black"}},[t("div",{staticStyle:{color:"white"}},[this._v("\n        HDC60:\n      ")]),t("div",{staticStyle:{color:"white"}},[this._v("\n        /opt/huawei/Bigdata/FusionInsight_V100R002C60U20/FusionInsight-Sqoop-1.99.3/FusionInsight-Sqoop-1.99.3/server/webapps/loader/WEB-INF/lib\n      ")]),t("div",{staticStyle:{color:"white"}},[this._v("\n        HDC80:\n      ")]),t("div",{staticStyle:{color:"white"}},[this._v("\n        /opt/huawei/Bigdata/FusionInsight_Porter_V100R002C8SPC200/install/FusionInsight-Sqoop-1.99.3/FusionInsight-Sqoop-1.99.3/server/webapps/loader/WEB-INF/lib\n      ")]),t("div",{staticStyle:{color:"white"}},[this._v("\n        HD6.5:\n      ")]),t("div",{staticStyle:{color:"white"}},[this._v("\n        /opt/huawei/Bigdata/FusionInsight_Porter_6.5.1/install/FusionInsight-Sqoop-1.99.3/FusionInsight-Sqoop-1.99.3/server/webapps/loader/WEB-INF/lib\n      ")])])},function(){var t=this._self._c;return this._self._setupProxy,t("div",{staticStyle:{"background-color":"black"}},[t("div",{staticStyle:{color:"white"}},[this._v("\n        chown omm:wheel jar包文件名\n      ")]),t("div",{staticStyle:{color:"white"}},[this._v("\n        chmod 600 jar包文件名\n      ")])])},function(){var t=this._self._c;return this._self._setupProxy,t("div",{staticStyle:{"background-color":"black",color:"white"}},[t("div",[this._v("\n        cd ${SQOOP2_HOME}\n      ")]),t("div",[this._v("\n        ./sqoop2-server stop\n      ")]),t("div",[this._v("\n        ./sqoop2-server start\n      ")])])},function(){var t=this._self._c;return this._self._setupProxy,t("div",{staticStyle:{"background-color":"black",color:"white"}},[t("div",[this._v("\n        sh $(KETTLE_BASE}/stop-carte.sh\n      ")]),t("div",[this._v("\n        sh $(KETTLE_BASE}/start-carte.sh\n      ")])])}],!1,null,null,null);i.default=e.exports},eabd:function(t,i,n){var r=n("67c6");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),(0,n("499e").default)("48a0f9dc",r,!0,{sourceMap:!1,shadowMode:!1})}}]);