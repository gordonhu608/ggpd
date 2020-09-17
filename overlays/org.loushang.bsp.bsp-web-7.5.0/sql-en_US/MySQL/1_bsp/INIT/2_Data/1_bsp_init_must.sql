############################业务流水号开始###################
#######数据
INSERT INTO PUB_IDTABLE (ID_ID, ID_VALUE, ID_NAME, ID_PREFIX, IS_PREFIX, ID_LENGTH, IS_SUFFIX, ID_SUFFIX, IS_GLOBAL, ORGAN_ID, ID_TYPE, ID_DATE)
VALUES ('ORGAN_ID', 1, 'Org Code', 'O', '1', 20, '0', '', '1', '', '00', '');

INSERT INTO PUB_IDTABLE (ID_ID, ID_VALUE, ID_NAME, ID_PREFIX, IS_PREFIX, ID_LENGTH, IS_SUFFIX, ID_SUFFIX, IS_GLOBAL, ORGAN_ID, ID_TYPE, ID_DATE)
VALUES ('STRU_ID', 1, 'Struc Code', 'S', '1', 20, '0', '', '1', '', '00', '');

INSERT INTO PUB_IDTABLE (ID_ID, ID_VALUE, ID_NAME, ID_PREFIX, IS_PREFIX, ID_LENGTH, IS_SUFFIX, ID_SUFFIX, IS_GLOBAL, ORGAN_ID, ID_TYPE, ID_DATE)
VALUES ('STRU_EXT_ID', 1, 'Org&Struc RelationShip Code', '', '0', 20, '0', '', '1', '', '00', '');

INSERT INTO PUB_IDTABLE (ID_ID, ID_VALUE, ID_NAME, ID_PREFIX, IS_PREFIX, ID_LENGTH, IS_SUFFIX, ID_SUFFIX, IS_GLOBAL, ORGAN_ID, ID_TYPE, ID_DATE)
VALUES ('RULE_ID', 1, 'Rule Code', '', '0', 30, '0', '', '1', '', '00', '');

INSERT INTO PUB_IDTABLE (ID_ID, ID_VALUE, ID_NAME, ID_PREFIX, IS_PREFIX, ID_LENGTH, IS_SUFFIX, ID_SUFFIX, IS_GLOBAL, ORGAN_ID, ID_TYPE, ID_DATE)
VALUES ('ROLE_GROUP_ID', 1, 'Role Group Code', '', '0', 30, '0', '', '1', '', '00', '');

INSERT INTO PUB_IDTABLE (ID_ID, ID_VALUE, ID_NAME, ID_PREFIX, IS_PREFIX, ID_LENGTH, IS_SUFFIX, ID_SUFFIX, IS_GLOBAL, ORGAN_ID, ID_TYPE, ID_DATE)
VALUES ('MENU_ID', 1, 'Menu Code', '', '0', 30, '0', '', '1', '', '00', '');

INSERT INTO PUB_IDTABLE (ID_ID, ID_VALUE, ID_NAME, ID_PREFIX, IS_PREFIX, ID_LENGTH, IS_SUFFIX, ID_SUFFIX, IS_GLOBAL, ORGAN_ID, ID_TYPE, ID_DATE)
VALUES ('MENU_STRU_ID', 1, 'Menu Struc Code', '', '0', 30, '0', '', '1', '', '00', '');

INSERT INTO PUB_IDTABLE (ID_ID, ID_VALUE, ID_NAME, ID_PREFIX, IS_PREFIX, ID_LENGTH, IS_SUFFIX, ID_SUFFIX, IS_GLOBAL, ORGAN_ID, ID_TYPE, ID_DATE)
VALUES ('MENU_TYPE_ID', 1, 'Menu Type Code', '', '0', 10, '0', '', '1', '', '00', '');

############################业务流水号结束###################


#############################组织结构相关开始########################################

#######组织类型#######

INSERT INTO PUB_ORGAN_TYPE (ORGAN_TYPE, TYPE_NAME, PARENT_TYPE, IN_USE)
VALUES ('1', 'Corp', '1', '1');

INSERT INTO PUB_ORGAN_TYPE (ORGAN_TYPE, TYPE_NAME, PARENT_TYPE, IN_USE)
VALUES ('2', 'Dept', '2', '1');

INSERT INTO PUB_ORGAN_TYPE (ORGAN_TYPE, TYPE_NAME, PARENT_TYPE, IN_USE)
VALUES ('6', 'Post', '6', '1');

INSERT INTO PUB_ORGAN_TYPE (ORGAN_TYPE, TYPE_NAME, PARENT_TYPE, IN_USE)
VALUES ('8', 'Employee', '8', '1');

#####组织结构类型#######
INSERT INTO PUB_STRU_TYPE (STRU_TYPE, TYPE_NAME, ROOT_ID, IS_DEFAULT, NOTE, IN_USE)
VALUES ('00', 'HR', '1', '1', 'HR', '1');

######组织结构规则
INSERT INTO PUB_STRU_RULE VALUES('00:1:1','00','1','1','The corp can set up new corp');
INSERT INTO PUB_STRU_RULE VALUES('00:1:2','00','1','2','The corp can set up new dept');
INSERT INTO PUB_STRU_RULE VALUES('00:2:2','00','2','2','The dept can set up new dept');
INSERT INTO PUB_STRU_RULE VALUES('00:1:6','00','1','6','The corp can set up new post');
INSERT INTO PUB_STRU_RULE VALUES('00:2:6','00','2','6','The dept can set up new post');
INSERT INTO PUB_STRU_RULE VALUES('00:6:8','00','6','8','The post can be assigned employee');

#####组织机构#################
###organ
INSERT INTO PUB_ORGAN (ORGAN_ID, ORGAN_CODE, ORGAN_NAME, SHORT_NAME, ORGAN_TYPE, IN_USE)
VALUES ('1', '9999', 'My Corp', 'My Corp', '1', '1');
####stru
INSERT INTO PUB_STRU (STRU_ID, ORGAN_ID, STRU_TYPE, PARENT_ID, STRU_LEVEL, STRU_PATH, STRU_ORDER, IS_LEAF, IN_USE)
VALUES ('1', '1', '00', 'rootId', 1, 'rootId#1', 1, '0', '1');
#####stru_ext
INSERT INTO PUB_STRU_EXT (ID, TYPE, SRC_ID, TARGET_ID, STRU_TYPE, STRU_ID)
VALUES ('SE001', '00', '1', '1', '00', '1');

INSERT INTO PUB_STRU_EXT (ID, TYPE, SRC_ID, TARGET_ID, STRU_TYPE, STRU_ID)
VALUES ('SE002', '01', '1', '1', '00', '1');

#############################组织结构相关结束########################################


##系统预置菜单
INSERT INTO PUB_MENU_TYPE(MENU_TYPE_ID,MENU_TYPE_NAME,IS_SYS,IS_SYS_DEFAULT) VALUES('1','System Default','1','1');
######操作类型##
INSERT INTO PUB_OPERATION_TYPE (OPERATION_TYPE_CODE,OPERATION_TYPE_NAME) VALUES ('00','Query');
INSERT INTO PUB_OPERATION_TYPE (OPERATION_TYPE_CODE,OPERATION_TYPE_NAME) VALUES ('01','Operate');

#############################用户开始################################################
####用户类型
INSERT INTO PUB_USER_TYPE(USER_TYPE_CODE,USER_TYPE_NAME,IS_USE)VALUES('00','Internal users','1');
####用户
INSERT INTO PUB_USERS (USER_ID,USER_TYPE_CODE,USER_NAME,PASSWORD,ACCOUNT_STATUS,IS_SYS,CREATE_TIME,LOCK_TIME,EXPIRED_TIME,PWD_UPT_TIME,PWD_TIME) VALUES('SUPERADMIN','00','SUPERADMIN','99c6b157085564b43b85711360ec6166','11','1','20100120',NULL,NULL,NULL,NULL);
INSERT INTO PUB_USERS (USER_ID,USER_TYPE_CODE,USER_NAME,PASSWORD,ACCOUNT_STATUS,IS_SYS,CREATE_TIME,LOCK_TIME,EXPIRED_TIME,PWD_UPT_TIME,PWD_TIME) VALUES('SYSADMIN','00','SYSADMIN','99c6b157085564b43b85711360ec6166','11','1','20100120',NULL,NULL,NULL,NULL);
INSERT INTO PUB_USERS (USER_ID,USER_TYPE_CODE,USER_NAME,PASSWORD,ACCOUNT_STATUS,IS_SYS,CREATE_TIME,LOCK_TIME,EXPIRED_TIME,PWD_UPT_TIME,PWD_TIME) VALUES('PUBLIC','00','PUBLIC','99c6b157085564b43b85711360ec6166','11','0','20100120',NULL,NULL,NULL,NULL);
INSERT INTO PUB_USERS (USER_ID,USER_TYPE_CODE,USER_NAME,PASSWORD,ACCOUNT_STATUS,IS_SYS,CREATE_TIME,LOCK_TIME,EXPIRED_TIME,PWD_UPT_TIME,PWD_TIME) VALUES('DEMO','00','demo','61de73dbbd7a2bfc22edb0a1d12198f3','11','0','20151222',NULL,NULL,NULL,NULL);
####用户员工表
INSERT INTO PUB_USER_EMPLOYEE(USER_ID,CORPORATION_ID,DEPARTMENT_ID,EMPLOYEE_ID) VALUES('SYSADMIN','1','1',NULL);
INSERT INTO PUB_USER_EMPLOYEE SELECT U.USER_ID, '', '', NULL FROM PUB_USERS U LEFT JOIN PUB_USER_EMPLOYEE E ON E.USER_ID = U.USER_ID WHERE U.USER_ID != 'SYSADMIN' AND (E.EMPLOYEE_ID IS NULL OR E.EMPLOYEE_ID = '');

####用户策略
INSERT INTO PUB_USER_POLICY(USER_ID,IS_USE_IP,IP_POLICY_VALUE,MAX_SESSION_NUMBER)VALUES('SUPERADMIN','0',NULL,-1);
INSERT INTO PUB_USER_POLICY(USER_ID,IS_USE_IP,IP_POLICY_VALUE,MAX_SESSION_NUMBER)VALUES('SYSADMIN','0',NULL,-1);
INSERT INTO PUB_USER_POLICY(USER_ID,IS_USE_IP,IP_POLICY_VALUE,MAX_SESSION_NUMBER)VALUES('PUBLIC','0',NULL,-1);
INSERT INTO PUB_USER_POLICY(USER_ID,IS_USE_IP,IP_POLICY_VALUE,MAX_SESSION_NUMBER)VALUES('DEMO','0',NULL,-1);

#############################用户结束################################################

##############################数据权限开始############################################
####数据类型
INSERT INTO PUB_DATA_TYPE(DATA_TYPE_CODE,DATA_TYPE_NAME,IS_ORGAN,SOURCE_TABLE,SOURCE_TABLE_DES,SEL_COL,SEL_COL_DES,DISP_COL,DISP_COL_DES,IS_USE_WHERE,WHERE_CONDITION,NOTE) VALUES('1','Corp','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO PUB_DATA_TYPE(DATA_TYPE_CODE,DATA_TYPE_NAME,IS_ORGAN,SOURCE_TABLE,SOURCE_TABLE_DES,SEL_COL,SEL_COL_DES,DISP_COL,DISP_COL_DES,IS_USE_WHERE,WHERE_CONDITION,NOTE) VALUES('2','Dept','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO PUB_DATA_TYPE(DATA_TYPE_CODE,DATA_TYPE_NAME,IS_ORGAN,SOURCE_TABLE,SOURCE_TABLE_DES,SEL_COL,SEL_COL_DES,DISP_COL,DISP_COL_DES,IS_USE_WHERE,WHERE_CONDITION,NOTE) VALUES('8','Staff','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO PUB_DATA_TYPE(DATA_TYPE_CODE,DATA_TYPE_NAME,IS_ORGAN,SOURCE_TABLE,SOURCE_TABLE_DES,SEL_COL,SEL_COL_DES,DISP_COL,DISP_COL_DES,IS_USE_WHERE,WHERE_CONDITION,NOTE) VALUES('6','Post','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
####数据权限
INSERT INTO PUB_USER_DATA_PERMIT(USER_DATA_PERMIT_ID,USER_ID,OBJECT_VALUE,OBJECT_NAME,DATA_TYPE_CODE,IS_DEFAULT,STRU_ID,STRU_TYPE,SCOPE_TYPE,SCOPE_VALUE,START_TIME,END_TIME) VALUES('BSPDATAPERMIT000000000001','SUPERADMIN','1','My Corp','1','1','1','00','0',NUll,'20000101 00:00:00','99991231 23:59:59');

##############################数据权限结束############################################
INSERT INTO PUB_ROLES(ROLE_ID,ROLE_NAME,RELATION_ID,ROLE_GROUP_ID,DESCRIPTION) VALUES('SUPERADMIN','SUPERADMIN',NULL,NULL,NULL);
INSERT INTO PUB_ROLES(ROLE_ID,ROLE_NAME,RELATION_ID,ROLE_GROUP_ID,DESCRIPTION) VALUES('SYSADMIN','SYSADMIN','1',NULL,NULL);
INSERT INTO PUB_ROLES(ROLE_ID,ROLE_NAME,RELATION_ID,ROLE_GROUP_ID,DESCRIPTION) VALUES('PUBLIC','PUBLICROLE',NULL,NULL,NULL);

INSERT INTO PUB_USER_ROLE VALUES('BSPRULE00001','00','SUPERADMIN','SUPERADMIN');
INSERT INTO PUB_USER_ROLE VALUES('BSPRULE00002','00','SYSADMIN','SYSADMIN');
INSERT INTO PUB_USER_ROLE VALUES('BSPRULE00003','00','PUBLIC','PUBLIC');
INSERT INTO PUB_USER_ROLE VALUES('BSPRULE00004','00','DEMO','SUPERADMIN');