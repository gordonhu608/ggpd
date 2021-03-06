----------------------------业务流水号开始-------------------
-------数据
INSERT INTO PUB_IDTABLE (ID_ID, ID_VALUE, ID_NAME, ID_PREFIX, IS_PREFIX, ID_LENGTH, IS_SUFFIX, ID_SUFFIX, IS_GLOBAL, ORGAN_ID, ID_TYPE, ID_DATE)
VALUES ('ORGAN_ID', 1, '组织内码', 'O', '1', 20, '0', '', '1', '', '00', '');

INSERT INTO PUB_IDTABLE (ID_ID, ID_VALUE, ID_NAME, ID_PREFIX, IS_PREFIX, ID_LENGTH, IS_SUFFIX, ID_SUFFIX, IS_GLOBAL, ORGAN_ID, ID_TYPE, ID_DATE)
VALUES ('STRU_ID', 1, '结构内码', 'S', '1', 20, '0', '', '1', '', '00', '');

INSERT INTO PUB_IDTABLE (ID_ID, ID_VALUE, ID_NAME, ID_PREFIX, IS_PREFIX, ID_LENGTH, IS_SUFFIX, ID_SUFFIX, IS_GLOBAL, ORGAN_ID, ID_TYPE, ID_DATE)
VALUES ('STRU_EXT_ID', 1, '组织结构关系内码', '', '0', 20, '0', '', '1', '', '00', '');

INSERT INTO PUB_IDTABLE (ID_ID, ID_VALUE, ID_NAME, ID_PREFIX, IS_PREFIX, ID_LENGTH, IS_SUFFIX, ID_SUFFIX, IS_GLOBAL, ORGAN_ID, ID_TYPE, ID_DATE)
VALUES ('RULE_ID', 1, '规则内码', '', '0', 30, '0', '', '1', '', '00', '');

INSERT INTO PUB_IDTABLE (ID_ID, ID_VALUE, ID_NAME, ID_PREFIX, IS_PREFIX, ID_LENGTH, IS_SUFFIX, ID_SUFFIX, IS_GLOBAL, ORGAN_ID, ID_TYPE, ID_DATE)
VALUES ('ROLE_GROUP_ID', 1, '角色组内码', '', '0', 30, '0', '', '1', '', '00', '');

INSERT INTO PUB_IDTABLE (ID_ID, ID_VALUE, ID_NAME, ID_PREFIX, IS_PREFIX, ID_LENGTH, IS_SUFFIX, ID_SUFFIX, IS_GLOBAL, ORGAN_ID, ID_TYPE, ID_DATE)
VALUES ('MENU_ID', 1, '菜单内码', '', '0', 30, '0', '', '1', '', '00', '');

INSERT INTO PUB_IDTABLE (ID_ID, ID_VALUE, ID_NAME, ID_PREFIX, IS_PREFIX, ID_LENGTH, IS_SUFFIX, ID_SUFFIX, IS_GLOBAL, ORGAN_ID, ID_TYPE, ID_DATE)
VALUES ('MENU_STRU_ID', 1, '菜单结构内码', '', '0', 30, '0', '', '1', '', '00', '');

INSERT INTO PUB_IDTABLE (ID_ID, ID_VALUE, ID_NAME, ID_PREFIX, IS_PREFIX, ID_LENGTH, IS_SUFFIX, ID_SUFFIX, IS_GLOBAL, ORGAN_ID, ID_TYPE, ID_DATE)
VALUES ('MENU_TYPE_ID', 1, '菜单类型内码', '', '0', 10, '0', '', '1', '', '00', '');

----------------------------业务流水号结束-------------------


-----------------------------组织结构相关开始----------------------------------------

-------组织类型-------
INSERT INTO PUB_ORGAN_TYPE (ORGAN_TYPE, TYPE_NAME, PARENT_TYPE, IN_USE)
VALUES ('1', '单位', '1', '1');

INSERT INTO PUB_ORGAN_TYPE (ORGAN_TYPE, TYPE_NAME, PARENT_TYPE, IN_USE)
VALUES ('2', '部门', '2', '1');

INSERT INTO PUB_ORGAN_TYPE (ORGAN_TYPE, TYPE_NAME, PARENT_TYPE, IN_USE)
VALUES ('6', '岗位', '6', '1');

INSERT INTO PUB_ORGAN_TYPE (ORGAN_TYPE, TYPE_NAME, PARENT_TYPE, IN_USE)
VALUES ('8', '员工', '8', '1');

-----组织结构类型-------
INSERT INTO PUB_STRU_TYPE (STRU_TYPE, TYPE_NAME, ROOT_ID, IS_DEFAULT, NOTE, IN_USE)
VALUES ('00', '人力资源', '1', '1', '人力资源', '1');

------组织结构规则
INSERT INTO PUB_STRU_RULE VALUES ('00:1:1', '00', '1', '1', '单位下可以成立新的单位');
INSERT INTO PUB_STRU_RULE VALUES ('00:1:2', '00', '1', '2', '单位下可以成立新的部门');
INSERT INTO PUB_STRU_RULE VALUES ('00:2:2', '00', '2', '2', '部门下可以成立新的部门');
INSERT INTO PUB_STRU_RULE VALUES ('00:1:6', '00', '1', '6', '单位下可以设置岗位');
INSERT INTO PUB_STRU_RULE VALUES ('00:2:6', '00', '2', '6', '部门下可以设置岗位');
INSERT INTO PUB_STRU_RULE VALUES ('00:6:8', '00', '6', '8', '岗位下可以委派职工');

-----组织机构-----------------
---organ
INSERT INTO PUB_ORGAN (ORGAN_ID, ORGAN_CODE, ORGAN_NAME, SHORT_NAME, ORGAN_TYPE, IN_USE)
VALUES ('1', '9999', '我的单位', '我的单位', '1', '1');
----stru
INSERT INTO PUB_STRU (STRU_ID, ORGAN_ID, STRU_TYPE, PARENT_ID, STRU_LEVEL, STRU_PATH, STRU_ORDER, IS_LEAF, IN_USE)
VALUES ('1', '1', '00', 'rootId', 1, 'rootId#1', 1, '0', '1');
-----stru_ext
INSERT INTO PUB_STRU_EXT (ID, TYPE, SRC_ID, TARGET_ID, STRU_TYPE, STRU_ID)
VALUES ('SE001', '00', '1', '1', '00', '1');

INSERT INTO PUB_STRU_EXT (ID, TYPE, SRC_ID, TARGET_ID, STRU_TYPE, STRU_ID)
VALUES ('SE002', '01', '1', '1', '00', '1');

-----------------------------组织结构相关结束----------------------------------------


--系统预置菜单
INSERT INTO PUB_MENU_TYPE(MENU_TYPE_ID,MENU_TYPE_NAME,IS_SYS,IS_SYS_DEFAULT) VALUES('1','系统预置菜单','1','1');
------操作类型--
INSERT INTO PUB_OPERATION_TYPE (OPERATION_TYPE_CODE,OPERATION_TYPE_NAME) VALUES ('00','查询');
INSERT INTO PUB_OPERATION_TYPE (OPERATION_TYPE_CODE,OPERATION_TYPE_NAME) VALUES ('01','操作');

-----------------------------用户开始------------------------------------------------
----用户类型
INSERT INTO PUB_USER_TYPE(USER_TYPE_CODE,USER_TYPE_NAME,IS_USE)VALUES('00','内部用户','1');
----用户
INSERT INTO PUB_USERS (USER_ID,USER_TYPE_CODE,USER_NAME,PASSWORD,ACCOUNT_STATUS,IS_SYS,CREATE_TIME,LOCK_TIME,EXPIRED_TIME,PWD_UPT_TIME,PWD_TIME) VALUES('SUPERADMIN','00','SUPERADMIN','99c6b157085564b43b85711360ec6166','11','1','20100120',NULL,NULL,NULL,NULL);
INSERT INTO PUB_USERS (USER_ID,USER_TYPE_CODE,USER_NAME,PASSWORD,ACCOUNT_STATUS,IS_SYS,CREATE_TIME,LOCK_TIME,EXPIRED_TIME,PWD_UPT_TIME,PWD_TIME) VALUES('SYSADMIN','00','SYSADMIN','99c6b157085564b43b85711360ec6166','11','1','20100120',NULL,NULL,NULL,NULL);
INSERT INTO PUB_USERS (USER_ID,USER_TYPE_CODE,USER_NAME,PASSWORD,ACCOUNT_STATUS,IS_SYS,CREATE_TIME,LOCK_TIME,EXPIRED_TIME,PWD_UPT_TIME,PWD_TIME) VALUES('PUBLIC','00','PUBLIC','99c6b157085564b43b85711360ec6166','11','0','20100120',NULL,NULL,NULL,NULL);
INSERT INTO PUB_USERS (USER_ID,USER_TYPE_CODE,USER_NAME,PASSWORD,ACCOUNT_STATUS,IS_SYS,CREATE_TIME,LOCK_TIME,EXPIRED_TIME,PWD_UPT_TIME,PWD_TIME) VALUES('DEMO','00','demo','61de73dbbd7a2bfc22edb0a1d12198f3','11','0','20151222',NULL,NULL,NULL,NULL);
----用户员工表
INSERT INTO PUB_USER_EMPLOYEE(USER_ID,CORPORATION_ID,DEPARTMENT_ID,EMPLOYEE_ID) VALUES('SYSADMIN','1','1',NULL);
INSERT INTO PUB_USER_EMPLOYEE SELECT U.USER_ID, '', '', NULL FROM PUB_USERS U LEFT JOIN PUB_USER_EMPLOYEE E ON E.USER_ID = U.USER_ID WHERE U.USER_ID != 'SYSADMIN' AND (E.EMPLOYEE_ID IS NULL OR E.EMPLOYEE_ID = '');

----用户策略
INSERT INTO PUB_USER_POLICY(USER_ID,IS_USE_IP,IP_POLICY_VALUE,MAX_SESSION_NUMBER)VALUES('SUPERADMIN','0',NULL,-1);
INSERT INTO PUB_USER_POLICY(USER_ID,IS_USE_IP,IP_POLICY_VALUE,MAX_SESSION_NUMBER)VALUES('SYSADMIN','0',NULL,-1);
INSERT INTO PUB_USER_POLICY(USER_ID,IS_USE_IP,IP_POLICY_VALUE,MAX_SESSION_NUMBER)VALUES('PUBLIC','0',NULL,-1);
INSERT INTO PUB_USER_POLICY(USER_ID,IS_USE_IP,IP_POLICY_VALUE,MAX_SESSION_NUMBER)VALUES('DEMO','0',NULL,-1);

-----------------------------用户结束------------------------------------------------

------------------------------数据权限开始--------------------------------------------
----数据类型
INSERT INTO PUB_DATA_TYPE(DATA_TYPE_CODE,DATA_TYPE_NAME,IS_ORGAN,SOURCE_TABLE,SOURCE_TABLE_DES,SEL_COL,SEL_COL_DES,DISP_COL,DISP_COL_DES,IS_USE_WHERE,WHERE_CONDITION,NOTE) VALUES('1','单位','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO PUB_DATA_TYPE(DATA_TYPE_CODE,DATA_TYPE_NAME,IS_ORGAN,SOURCE_TABLE,SOURCE_TABLE_DES,SEL_COL,SEL_COL_DES,DISP_COL,DISP_COL_DES,IS_USE_WHERE,WHERE_CONDITION,NOTE) VALUES('2','部门','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO PUB_DATA_TYPE(DATA_TYPE_CODE,DATA_TYPE_NAME,IS_ORGAN,SOURCE_TABLE,SOURCE_TABLE_DES,SEL_COL,SEL_COL_DES,DISP_COL,DISP_COL_DES,IS_USE_WHERE,WHERE_CONDITION,NOTE) VALUES('8','员工','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO PUB_DATA_TYPE(DATA_TYPE_CODE,DATA_TYPE_NAME,IS_ORGAN,SOURCE_TABLE,SOURCE_TABLE_DES,SEL_COL,SEL_COL_DES,DISP_COL,DISP_COL_DES,IS_USE_WHERE,WHERE_CONDITION,NOTE) VALUES('6','岗位','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
----数据权限
INSERT INTO PUB_USER_DATA_PERMIT(USER_DATA_PERMIT_ID,USER_ID,OBJECT_VALUE,OBJECT_NAME,DATA_TYPE_CODE,IS_DEFAULT,STRU_ID,STRU_TYPE,SCOPE_TYPE,SCOPE_VALUE,START_TIME,END_TIME) VALUES('BSPDATAPERMIT000000000001','SUPERADMIN','1','我的单位','1','1','1','00','0',NUll,'20000101 00:00:00','99991231 23:59:59');

------------------------------数据权限结束--------------------------------------------
INSERT INTO PUB_ROLES(ROLE_ID,ROLE_NAME,RELATION_ID,ROLE_GROUP_ID,DESCRIPTION) VALUES('SUPERADMIN','超级管理员',NULL,NULL,NULL);
INSERT INTO PUB_ROLES(ROLE_ID,ROLE_NAME,RELATION_ID,ROLE_GROUP_ID,DESCRIPTION) VALUES('SYSADMIN','系统管理员','1',NULL,NULL);
INSERT INTO PUB_ROLES(ROLE_ID,ROLE_NAME,RELATION_ID,ROLE_GROUP_ID,DESCRIPTION) VALUES('PUBLIC','系统公用角色',NULL,NULL,NULL);

INSERT INTO PUB_USER_ROLE VALUES('BSPRULE00001','00','SUPERADMIN','SUPERADMIN');
INSERT INTO PUB_USER_ROLE VALUES('BSPRULE00002','00','SYSADMIN','SYSADMIN');
INSERT INTO PUB_USER_ROLE VALUES('BSPRULE00003','00','PUBLIC','PUBLIC');
INSERT INTO PUB_USER_ROLE VALUES('BSPRULE00004','00','DEMO','SUPERADMIN');