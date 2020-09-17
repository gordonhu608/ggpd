## 国家
CREATE TABLE PUB_COUNTRY(
  COUNTRY_CODE VARCHAR(30) NOT NULL,
  COUNTRY_NAME VARCHAR(250 ) NOT NULL,
  SHORT_NAME VARCHAR(250),
  IN_USE  CHAR(1) NOT NULL,
  PRIMARY KEY(COUNTRY_CODE)
);
###行政区划类型
CREATE TABLE PUB_CANT_TYPE(
  CANT_TYPE VARCHAR(10) NOT NULL,
  TYPE_NAME VARCHAR(60) NOT NULL,
  IN_USE CHAR(1) NOT NULL,
  PRIMARY KEY(CANT_TYPE)
);
###行政区划
CREATE TABLE PUB_CANT(
  CANT_CODE VARCHAR(20) NOT NULL,
  CANT_NAME VARCHAR(250) NOT NULL,
  SHORT_NAME VARCHAR(120),
  CANT_TYPE VARCHAR(10) NOT NULL,
  SUPER_CODE VARCHAR(20) NOT NULL,
  COUNTRY_CODE VARCHAR(30) ,
  CANT_NOTE VARCHAR(10),
  IN_USE CHAR(1) NOT NULL,
  PRIMARY KEY(CANT_CODE),
  FOREIGN KEY(CANT_TYPE) REFERENCES PUB_CANT_TYPE(CANT_TYPE),
  FOREIGN KEY(COUNTRY_CODE) REFERENCES PUB_COUNTRY(COUNTRY_CODE)
);
###工作地点
CREATE TABLE PUB_WORKPLACE (
	WORKPLACE_ID VARCHAR(30) NOT NULL,
	WORKPLACE_CODE VARCHAR(30) NOT NULL,
	WORKPLACE_NAME VARCHAR(100) NOT NULL,
	SHORT_NAME VARCHAR(30) ,
	CANT_CODE VARCHAR(20) NOT NULL,
	LINKMAN VARCHAR(120) ,
	TEL VARCHAR(80),
	FAX VARCHAR(80),
	E_MAIL VARCHAR(80),
	WWW VARCHAR(250),
	POST_CODE VARCHAR(20),
	POST_ADDRESS VARCHAR(250),
	ENGLISH_ADDRESS VARCHAR(250),
	AM_START_TIME VARCHAR(8),
	AM_END_TIME VARCHAR(8),
	PM_START_TIME VARCHAR(8),
	PM_END_TIME VARCHAR(8),
	PRIMARY KEY(WORKPLACE_ID),
	FOREIGN KEY(CANT_CODE) REFERENCES PUB_CANT(CANT_CODE)
);
CREATE TABLE PUB_ORGAN_EXT(
  ORGAN_ID VARCHAR(30) NOT NULL,
  WORKPLACE_ID VARCHAR(30) NOT NULL,
  PRIMARY KEY(ORGAN_ID)
);
