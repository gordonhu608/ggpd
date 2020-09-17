package com.inspur.ggpd.util;

import com.inspur.ggpd.data.source.InspurComboPooledDataSource;
import com.inspur.ggpd.resource.catalog.data.TableColumn;
import org.springframework.beans.factory.annotation.Autowired;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 *    
 * 项目名:   ggpd
 * 包名:     com.inspur.ggpd.util  
 * 类名:     DbUtil
 * 描述:     [一句话描述该类的功能]
 * 创建人:    tangxianwei   
 * 创建时间:  2020/8/1 15:49  
 * 修改人:    tangxianwei  
 * 修改时间:  2020/8/1 15:49  
 * 修改备注:  [说明本次修改内容]  
 * 版本:     v1.0  
 *  
 */
public class DbUtil {

    @Autowired
    InspurComboPooledDataSource dataSourceSjzy;


    /**
     * 获取数据表字段及注释
     *
     * @param tableName
     * @return
     */
    public List<TableColumn> getTableColumns(String tableName) {
        Connection connection = null;
        ResultSet colRet = null;
        try {
            connection = dataSourceSjzy.getConnection();
            //获取表结构
            DatabaseMetaData metaData = connection.getMetaData();
            //提取表结构
            colRet = metaData.getColumns(null, null, tableName, "%");
            List<TableColumn> tableColumns = new ArrayList<TableColumn>();
            if (colRet != null) {
                while (colRet.next()) {
                    TableColumn tableColumn = new TableColumn();
                    tableColumn.setColumnName(colRet.getString("COLUMN_NAME"));
                    tableColumn.setRemark(getColumnRemark(null, tableName, colRet.getString("COLUMN_NAME")));
                    tableColumns.add(tableColumn);
                }
            }
            if (colRet != null) {
                colRet.close();
            }
            return tableColumns;
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            try{
                if(connection!=null){
                    connection.close();
                }
            } catch (Exception ex){

            }
        }
        return null;
    }

    /**
     * 获取字段注释
     *
     * @param schemaPattern
     * @param tableNamePattern
     * @param columnNamePattern
     * @return
     */
    public String getColumnRemark(String schemaPattern, String tableNamePattern, String columnNamePattern) {
        Connection connection = null;
        try {
            connection = dataSourceSjzy.getConnection();
            ResultSet resultSet = null;
            try {
                DatabaseMetaData dbMetaData = connection.getMetaData();
                resultSet = dbMetaData.getColumns(null, schemaPattern, tableNamePattern, columnNamePattern);
                if (resultSet != null) {
                    resultSet.next();
                    return resultSet.getString("REMARKS");
                } else {
                    return "";
                }
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                if (resultSet != null) {
                    resultSet.close();
                }
                if (connection != null) {
                    connection.close();
                }
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }finally {
            try{
                if(connection!=null){
                    connection.close();
                }
            } catch (Exception ex){

            }
        }
        return null;
    }


}
