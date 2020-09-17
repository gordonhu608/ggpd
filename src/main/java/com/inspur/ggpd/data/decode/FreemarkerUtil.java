package com.inspur.ggpd.data.decode;

import freemarker.template.Configuration;
import freemarker.template.DefaultObjectWrapper;
import freemarker.template.Template;
import freemarker.template.TemplateException;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.StringWriter;
import java.util.Map;

/**
 * @ClassName FreemarkerUtil
 * @Deacription Freemarker工具类，获取ftl模板生成文件
 * @Author tangxianwei
 * @Date 2020/8/27 9:50
 * @Version 2.0
 **/
public class FreemarkerUtil {
    /**
     * 根据模板名称 获取freemarket模板
     *
     * @param templateName 模板名称
     * @return
     */
    public Template getTemplate(String templateName, String templatePath) {
        try {
            //创建Configration对象
            Configuration configuration = new Configuration();
            configuration.setClassForTemplateLoading(this.getClass(), templatePath);
            configuration.setObjectWrapper(new DefaultObjectWrapper());
            configuration.setDefaultEncoding("UTF-8");

            //获取或创建一个模版。
            Template template = configuration.getTemplate(templateName);
            return template;
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }

    /**
     * 生成文件
     *
     * @param templateName
     * @param root
     * @param outFilePath
     * @return
     */
    public Boolean generateFile(String templateName, Map<String, Object> root, String outFilePath, String templatePath) {
        Boolean result = true;
        //FileWriter out = null;
        FileOutputStream out = null;
        OutputStreamWriter osw = null;
        try {
            // 通过一个文件输出流，就可以写到相应的文件中，此处用的是绝对路径
            //out = new FileWriter(new File(outFilePath));
            out = new FileOutputStream(outFilePath);
            osw = new OutputStreamWriter(out, "UTF-8");
            Template temp = this.getTemplate(templateName, templatePath);
            temp.process(root, osw);

        } catch (IOException e) {
            e.printStackTrace();
            result = false;
        } catch (TemplateException e) {
            e.printStackTrace();
            result = false;
        } finally {
            try {
                if (osw != null) {
                    osw.close();
                }
                if (out != null) {
                    out.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
                result = false;
            }
        }
        return result;
    }


    /**
     * 获取freemarket模板内容
     *
     * @param templateName 模板名称
     * @return
     */
    public String getTextByTemplate(Map<String, Object> root, String templateName, String templatePath) {
        try {
            //创建Configration对象
            Configuration configuration = new Configuration();
            configuration.setClassForTemplateLoading(this.getClass(), templatePath);
            configuration.setObjectWrapper(new DefaultObjectWrapper());
            configuration.setDefaultEncoding("UTF-8");
            //获取或创建一个模版。
            Template template = configuration.getTemplate(templateName);
            StringWriter stringWriter = new StringWriter();
            template.process(root, stringWriter);
            //通过模板处理后得到的字符串内容
            return stringWriter.toString();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }
}
