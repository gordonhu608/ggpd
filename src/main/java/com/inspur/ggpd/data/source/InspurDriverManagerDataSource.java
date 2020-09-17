package com.inspur.ggpd.data.source;

import com.mchange.v2.c3p0.DriverManagerDataSource;
import com.mchange.v2.c3p0.cfg.C3P0Config;
import com.mchange.v2.c3p0.impl.DriverManagerDataSourceBase;
import com.mchange.v2.log.MLevel;
import com.mchange.v2.log.MLog;
import com.mchange.v2.log.MLogger;

import javax.sql.DataSource;
import java.beans.PropertyChangeEvent;
import java.beans.PropertyChangeListener;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.PrintWriter;
import java.sql.*;
import java.util.Properties;
import java.util.logging.Logger;

/**
 *    
 * 项目名:   ggpd
 * 包名:     com.inspur.ggpd.data.source  
 * 类名:     InspurDriverManagerDataSource
 * 描述:      修改了 com.mchange.v2.c3p0.DriverManagerDataSource 包中DriverManagerDataSource相关代码，
 *             增加了获取表字段注释到的属性，直接使用原的驱动无法获取字段注释
 * 创建人:    tangxianwei   
 * 创建时间:  2020/8/3 10:52  
 * 修改人:    tangxianwei  
 * 修改时间:  2020/8/3 10:52  
 * 修改备注:  [说明本次修改内容]  
 * 版本:     v1.0  
 *  
 */
public class InspurDriverManagerDataSource extends DriverManagerDataSourceBase implements DataSource {
    static final MLogger logger;
    Driver driver;
    boolean driver_class_loaded;
    private static final long serialVersionUID = 1L;
    private static final short VERSION = 1;

    public InspurDriverManagerDataSource() {
        this(true);
    }

    public InspurDriverManagerDataSource(boolean autoregister) {
        super(autoregister);
        this.driver_class_loaded = false;
        this.setUpPropertyListeners();
        String user = C3P0Config.initializeStringPropertyVar("user", (String)null);
        String password = C3P0Config.initializeStringPropertyVar("password", (String)null);
        if (user != null) {
            this.setUser(user);
        }

        if (password != null) {
            this.setPassword(password);
        }

    }

    private void setUpPropertyListeners() {
        PropertyChangeListener driverClassListener = new PropertyChangeListener() {
            @Override
            public void propertyChange(PropertyChangeEvent evt) {
                if ("driverClass".equals(evt.getPropertyName())) {
                    InspurDriverManagerDataSource.this.setDriverClassLoaded(false);
                }

            }
        };
        this.addPropertyChangeListener(driverClassListener);
    }

    private synchronized boolean isDriverClassLoaded() {
        return this.driver_class_loaded;
    }

    private synchronized void setDriverClassLoaded(boolean dcl) {
        this.driver_class_loaded = dcl;
    }

    private void ensureDriverLoaded() throws SQLException {
        try {
            if (!this.isDriverClassLoaded()) {
                if (this.driverClass != null) {
                    Class.forName(this.driverClass);
                }

                this.setDriverClassLoaded(true);
            }
        } catch (ClassNotFoundException var2) {
            if (logger.isLoggable(MLevel.WARNING)) {
                logger.log(MLevel.WARNING, "Could not load driverClass " + this.driverClass, var2);
            }
        }

    }

    @Override
    public Connection getConnection() throws SQLException {
        this.ensureDriverLoaded();
        this.properties.put("remarksReporting", "true");
        Connection out = this.driver().connect(this.jdbcUrl, this.properties);
        if (out == null) {
            throw new SQLException("Apparently, jdbc URL '" + this.jdbcUrl + "' is not valid for the underlying " + "driver [" + this.driver() + "].");
        } else {
            return out;
        }
    }

    @Override
    public Connection getConnection(String username, String password) throws SQLException {
        this.ensureDriverLoaded();
        Connection out = this.driver().connect(this.jdbcUrl, this.overrideProps(username, password));
        if (out == null) {
            throw new SQLException("Apparently, jdbc URL '" + this.jdbcUrl + "' is not valid for the underlying " + "driver [" + this.driver() + "].");
        } else {
            return out;
        }
    }

    @Override
    public PrintWriter getLogWriter() throws SQLException {
        return DriverManager.getLogWriter();
    }
    @Override
    public void setLogWriter(PrintWriter out) throws SQLException {
        DriverManager.setLogWriter(out);
    }
    @Override
    public int getLoginTimeout() throws SQLException {
        return DriverManager.getLoginTimeout();
    }
    @Override
    public void setLoginTimeout(int seconds) throws SQLException {
        DriverManager.setLoginTimeout(seconds);
    }

    @Override
    public synchronized void setJdbcUrl(String jdbcUrl) {
        super.setJdbcUrl(jdbcUrl);
        this.clearDriver();
    }

    public synchronized void setUser(String user) {
        String oldUser = this.getUser();
        if (!eqOrBothNull(user, oldUser)) {
            if (user != null) {
                this.properties.put("user", user);
            } else {
                this.properties.remove("user");
            }

            this.pcs.firePropertyChange("user", oldUser, user);
        }

    }

    public synchronized String getUser() {
        return this.properties.getProperty("user");
    }

    public synchronized void setPassword(String password) {
        String oldPass = this.getPassword();
        if (!eqOrBothNull(password, oldPass)) {
            if (password != null) {
                this.properties.put("password", password);
            } else {
                this.properties.remove("password");
            }

            this.pcs.firePropertyChange("password", oldPass, password);
        }

    }

    public synchronized String getPassword() {
        return this.properties.getProperty("password");
    }

    private final Properties overrideProps(String user, String password) {
        Properties overriding = (Properties)this.properties.clone();
        if (user != null) {
            overriding.put("user", user);
        } else {
            overriding.remove("user");
        }

        if (password != null) {
            overriding.put("password", password);
        } else {
            overriding.remove("password");
        }
        overriding.put("remarksReporting", "true");

        return overriding;
    }

    private synchronized Driver driver() throws SQLException {
        if (this.driver == null) {
            this.driver = DriverManager.getDriver(this.jdbcUrl);
        }

        return this.driver;
    }

    private synchronized void clearDriver() {
        this.driver = null;
    }

    private static boolean eqOrBothNull(Object a, Object b) {
        return a == b || a != null && a.equals(b);
    }

    private void writeObject(ObjectOutputStream oos) throws IOException {
        oos.writeShort(1);
    }

    private void readObject(ObjectInputStream ois) throws IOException, ClassNotFoundException {
        short version = ois.readShort();
        switch(version) {
            case 1:
                this.setUpPropertyListeners();
                return;
            default:
                throw new IOException("Unsupported Serialized Version: " + version);
        }
    }

    static {
        logger = MLog.getLogger(DriverManagerDataSource.class);
    }

    @Override
    public <T> T unwrap(Class<T> iface) throws SQLException {
        return null;
    }

    @Override
    public boolean isWrapperFor(Class<?> iface) throws SQLException {
        return false;
    }

    @Override
    public Logger getParentLogger() throws SQLFeatureNotSupportedException {
        return null;
    }
}

