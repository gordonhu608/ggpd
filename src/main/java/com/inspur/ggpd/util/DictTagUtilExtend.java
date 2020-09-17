package com.inspur.ggpd.util;

import java.io.IOException;
import java.util.*;
import javax.servlet.jsp.*;
import javax.servlet.jsp.tagext.TagSupport;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.loushang.framework.api.IDict;
import org.loushang.framework.i18n.MessageSourceExt;
import org.loushang.framework.util.JSONUtil;
import org.loushang.framework.util.SpringContextHolder;

public class DictTagUtilExtend extends TagSupport {
	private static final long serialVersionUID = 1L;
    private static final Log logger = LogFactory.getLog(DictTagUtilExtend.class);
    transient IDict dictProvider;
    private String id;
    private String name;
    private String dictCode;
    private String currentVal;
    private String classes;
    private String render;
    private String datatype;
    private String nullmsg;
    private String ignore;

    public DictTagUtilExtend() {
        dictProvider = (IDict)SpringContextHolder.getBean("dictProvider");
        name = "";
        currentVal = "";
        classes = "";
        render = "select";
        datatype = "";
        nullmsg = "";
        ignore = "";
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName(){
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDictCode() {
        return dictCode;
    }

    public void setDictCode(String dictCode) {
        this.dictCode = dictCode;
    }

    public String getCurrentVal()
    {
        return currentVal;
    }

    public void setCurrentVal(String currentVal) {
        this.currentVal = currentVal;
    }

    public String getClasses() {
        return classes;
    }

    public void setClasses(String classes) {
        this.classes = classes;
    }

    public String getRender() {
        return render;
    }

    public void setRender(String render) {
        this.render = render;
    }

    public String getDatatype() {
        return datatype;
    }

    public void setDatatype(String datatype) {
        this.datatype = datatype;
    }

    public String getNullmsg() {
        return nullmsg;
    }

    public void setNullmsg(String nullmsg) {
        this.nullmsg = nullmsg;
    }

    public String getIgnore() {
        return ignore;
    }

    public void setIgnore(String ignore) {
        this.ignore = ignore;
    }

    @SuppressWarnings("rawtypes")
	public int doStartTag() throws JspException {
        try {
            List dictItems = dictProvider.getDictItems(dictCode);
            Iterator iterator = dictItems.iterator();
            if(name.equals("")) {
            	name = id;
            }
            if("radio".equals(render)) {
                pageContext.getOut().println((new StringBuilder()).append("<div class=\"radio\" id=\"").append(id).append("\" >").toString());
                while(iterator.hasNext()) {
                    Map item = (Map)iterator.next();
                    if(currentVal.equals(item.get("ITEM_CODE"))) {
                        pageContext.getOut().println((new StringBuilder()).append("<label><input type=\"radio\" name=\"").append(name).append("\" value=\"").append(item.get("ITEM_CODE")).append("\" ").append(getPropSetting()).append(" checked=\"checked\" />").append(item.get("ITEM_VALUE")).append("</label>").toString());
                    } else {
                    	pageContext.getOut().println((new StringBuilder()).append("<label><input type=\"radio\" name=\"").append(name).append("\" value=\"").append(item.get("ITEM_CODE")).append("\" ").append(getPropSetting()).append(" />").append(item.get("ITEM_VALUE")).append("</label>").toString());
                    }
                }
                if(!nullmsg.equals("")) {
                	pageContext.getOut().println("<span class=\"Validform_checktip\"></span>");
                }
                pageContext.getOut().println("</div>");
            } else if("checkbox".equals(render)) {
                pageContext.getOut().println((new StringBuilder()).append("<div class=\"checkbox\" id=\"").append(id).append("\" >").toString());
                while(iterator.hasNext()) {
                    Map item = (Map)iterator.next();
                    String[] val = currentVal.split(",");
                    boolean flag = false;
                    for(int i = 0; i < val.length; i++){
                    	if(val[i].equals(item.get("ITEM_CODE"))){
                    		flag = true;
                    		break;
                    	}
                    }
                    
                    if(flag) {
                        pageContext.getOut().println((new StringBuilder()).append("<label><input type=\"checkbox\" name=\"").append(name).append("\" value=\"").append(item.get("ITEM_CODE")).append("\" ").append(getPropSetting()).append(" checked=\"checked\" />").append(item.get("ITEM_VALUE")).append("</label>").toString());
                    } else {
                    	pageContext.getOut().println((new StringBuilder()).append("<label><input type=\"checkbox\" name=\"").append(name).append("\" value=\"").append(item.get("ITEM_CODE")).append("\" ").append(getPropSetting()).append(" />").append(item.get("ITEM_VALUE")).append("</label>").toString());
                    }
                }
                if(!nullmsg.equals("")) {
                	pageContext.getOut().println("<span class=\"Validform_checktip\"></span>");
                }
                pageContext.getOut().println("</div>");
            } else if("select".equals(render)) {
                pageContext.getOut().println((new StringBuilder()).append("<select id=\"").append(id).append("\" name=\"").append(name).append("\" ").append(getPropSetting()).append("><option value=''>\u8BF7\u9009\u62E9</option>").toString());
                while(iterator.hasNext()) {
                    Map item = (Map)iterator.next();
                    if(currentVal.equals(item.get("ITEM_CODE"))) {
                        pageContext.getOut().println((new StringBuilder()).append("<option value=\"").append(item.get("ITEM_CODE")).append("\" selected=\"selected\" >").append(item.get("ITEM_VALUE")).append("</option>").toString());
                    } else {
                        pageContext.getOut().println((new StringBuilder()).append("<option value=\"").append(item.get("ITEM_CODE")).append("\" >").append(item.get("ITEM_VALUE")).append("</option>").toString());
                    }
                }
                pageContext.getOut().println("</select>");
                if(!nullmsg.equals("")) {
                    pageContext.getOut().println("<span class=\"Validform_checktip Validform_span\"></span>");
                }
            }else if("span".equals(render)) {
        		StringBuilder sb = new StringBuilder("<span id=\"").append(id).append("\" class=\"").append(classes).append("\">");
            	while(iterator.hasNext()) {
                    Map item = (Map)iterator.next();
                    String[] val = currentVal.split(",");
                    boolean flag = false;
                    for(int i = 0; i < val.length; i++){
                    	if(val[i].equals(item.get("ITEM_CODE"))){
                    		flag = true;
                    		break;
                    	}
                    }
                    
                    if(flag) {
                        sb.append(item.get("ITEM_VALUE")).append(",");
                    }
                }
            	pageContext.getOut().println(sb.toString().endsWith(",")?sb.toString().substring(0, sb.toString().length()-1):sb.toString());
                pageContext.getOut().println("</span>");
            }else if("label".equals(render)){
        		StringBuilder sb = new StringBuilder("<label id=\"").append(id).append("\"");
        		if(classes!=null && !"".equals(classes)) {
        			sb.append(" class=\"").append(classes).append("\"");
        		}
        		sb.append(">");
        		
            	while(iterator.hasNext()) {
            		
                    Map item = (Map)iterator.next();
                    String[] val = currentVal.split(",");
                    boolean flag = false;
                    for(int i = 0; i < val.length; i++){
                    	if(val[i].equals(item.get("ITEM_CODE"))){
                    		flag = true;
                    		break;
                    	}
                    }
                    
                    if(flag) {
                        sb.append(item.get("ITEM_VALUE")).append(",");
                    }
                }
            	pageContext.getOut().println(sb.toString().endsWith(",")?sb.toString().substring(0, sb.toString().length()-1):sb.toString());
            	pageContext.getOut().println("</label>");
            } else {
                pageContext.getOut().println((new StringBuilder()).append("<script type=\"text/javascript\">").append(render).append("(").append(JSONUtil.bean2Json(dictItems)).append(");</script>").toString());
            }
        } catch(Exception e) {
            String message = MessageSourceExt.getLocaleMessage("framework.tag.003", "\u5904\u7406{0}\u65F6\u51FA\u9519", new Object[] {"DictTag"});
            logger.error(message, e);
            try {
                pageContext.getOut().print((new StringBuilder()).append(message).append(e.getMessage()).toString());
            } catch(IOException ioe) {
                logger.error(ioe);
            }
        }
        return 0;
    }

    private String getPropSetting() {
        String propSetting = "";
        if(!classes.equals("")) {
        	propSetting = (new StringBuilder()).append(propSetting).append("class=\"").append(classes).append("\"").toString();
        }
        if(!datatype.equals("")) {
        	propSetting = (new StringBuilder()).append(propSetting).append(" datatype=\"").append(datatype).append("\"").toString();
        }
        if(!nullmsg.equals("")) {
        	propSetting = (new StringBuilder()).append(propSetting).append(" nullmsg=\"").append(nullmsg).append("\"").toString();
        }
        if(!ignore.equals("")) {
        	propSetting = (new StringBuilder()).append(propSetting).append(" ignore=\"").append(ignore).append("\"").toString();
        }
        return propSetting;
    }

}
