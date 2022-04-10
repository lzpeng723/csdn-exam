package net.csdn.ac.c4.exam.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import net.csdn.ac.c4.exam.config.GenerateEntityIdListener;
import org.hibernate.annotations.DynamicInsert;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.AbstractAuditable;
import org.springframework.data.jpa.domain.AbstractPersistable;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * 多数据源 https://www.jianshu.com/p/9f812e651319
 * 列注释 http://www.majunwei.com/view/201707241152140494.html
 * 注解@JsonFormat 主要是后台到前台的时间格式的转换
 * 注解@DateTimeFormat 主要是前后到后台的时间格式的转换
 * JPA的CascadeType的解释: https://www.jianshu.com/p/ae07c9f147bc
 *
 * @DynamicInsert Insert 时不插入 null, 可以使数据库默认值生效
 * 要使用包装类型变量，不要使用基本类型变量
 * 基础的关系型数据库实体
 * @date: 2020/2/1
 * @time: 21:51
 * @author: lzpeng
 * @see AbstractAuditable
 * @see AbstractPersistable
 */
@Data
@ApiModel("基础实体")
@DynamicInsert
@MappedSuperclass
@EnableJpaAuditing
@EntityListeners({AuditingEntityListener.class, GenerateEntityIdListener.class})
@JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler"})
public abstract class BaseEntity implements Serializable {

    /**
     * 序列化id
     */
    @Transient
    protected static final long serialVersionUID = 1L;

    /**
     * 设置主键
     * @param pk 主键
     */
    public abstract void setPrimaryKey(String pk);

    /**
     * 获取主键
     * @return
     */
    public abstract String getPrimaryKey();

    /**
     * @time
     */
    @CreatedDate
    @Temporal(TemporalType.TIMESTAMP)
    @ApiModelProperty(value = "创建时间", hidden = true)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @Column(columnDefinition = "varchar(255) COMMENT '创建时间'", updatable = false)
    private Date createdTime;

//    @Transient
//    @ApiModelProperty(hidden = true)
//    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "GMT+8")
//    private LocalDateTime create_time;
    /**
     * 最后修改时间
     */
    @LastModifiedDate
    @Temporal(TemporalType.TIMESTAMP)
    @ApiModelProperty(value = "修改时间", hidden = true)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @Column(columnDefinition = "varchar(255) COMMENT '修改时间'")
    private Date updatedTime;

    /**
     * @author
     */
    @CreatedBy
    @ApiModelProperty(value = "创建人", hidden = true)
    @Column(columnDefinition = "varchar(255) COMMENT '创建人'", updatable = false)
    private String createdBy;
    /**
     * 最后修改者
     */
    @LastModifiedBy
    @ApiModelProperty(value = "修改人", hidden = true)
    @Column(columnDefinition = "varchar(255) COMMENT '修改人'")
    private String updatedBy;


}