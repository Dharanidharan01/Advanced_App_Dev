package com.jobpilot.job.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;


@Entity
@Table(name = "m_user")
@Data
@Builder
@GeneratedValue 
public class User {

    private Long uid;
    private String email;
    private String password;
}
