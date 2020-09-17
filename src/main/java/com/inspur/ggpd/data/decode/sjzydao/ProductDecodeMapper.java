package com.inspur.ggpd.data.decode.sjzydao;

import com.inspur.ggpd.data.decode.data.ProductDecodeTable;
import com.inspur.ggpd.data.decode.data.ProductDecodeText;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @ClassName ProductDecodeMapper
 * @Deacription 生产解读
 * @Author tangxianwei
 * @Date 2020/8/26 15:39
 * @Version 1.0
 **/
public interface ProductDecodeMapper {

    /**
     * 获取生产解读数据中对应的表格数据
     * @param year 年份
     */
    List<ProductDecodeTable> getProductDecodeTableDataByYear(@Param("year") String year);

    /**
     * 获取生产解读数据中文本对应的数据
     * @param year 年份
     */
    ProductDecodeText getProductDecodeTextDataByYear(@Param("year") int year);
}
