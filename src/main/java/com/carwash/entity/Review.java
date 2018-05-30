package com.carwash.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nameSender;
    private String number;
    private String address;
    private String title;
    private String description;
    private double rating;
    private boolean confirmed;
    @Column(columnDefinition = "mediumblob")
    private String photo;

}
