package com.carwash.service;

import com.carwash.entity.Review;
import com.carwash.repository.ReviewRepository;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Service
public class ReviewService {

    public static final String PATH_TO_IMG_DIRECTORY = "/desktop/resource/";
//    public static final String PATH_TO_IMG_DIRECTORY = "\\backend\\img\\";

    @Autowired
    private ReviewRepository reviewRepository;

    public List<Review> findAll() {
        return reviewRepository.findAll();
    }

    public List<Review> findAllConfirmed() {
        return reviewRepository.findByConfirmedTrue();
    }

    public void delete(int id) {
        reviewRepository.deleteById(id);
    }

    public void hideReview(int id) {
        Review review = reviewRepository.findById(id).orElse(null);
        if (review != null) {
            review.setConfirmed(false);
            reviewRepository.save(review);
        }
    }

    public void showReview(int id) {
        Review review = reviewRepository.findById(id).orElse(null);
        if (review != null) {
            review.setConfirmed(true);
            reviewRepository.save(review);
        }
    }

    public Review save(Review review) {
        String photoName = savePhoto(review.getPhoto());
        review.setPhoto(photoName);
        return reviewRepository.save(review);
    }

    private String savePhoto(String photo) {
        byte[] imageBytes = Base64.decodeBase64(photo.split(",")[1]);
        ByteArrayInputStream bis = new ByteArrayInputStream(imageBytes);
        try {
            File pathToFolder = new File(System.getProperty("user.home") + PATH_TO_IMG_DIRECTORY);
            createFolder(pathToFolder);

            BufferedImage image = ImageIO.read(bis);
            String photoName = UUID.randomUUID() + ".png";

            ImageIO.write(image, "png", new File(pathToFolder, photoName));

            return photoName;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "boy.png";
    }

    private void createFolder(File pathToFolder) {
        if (!pathToFolder.exists()) {
            pathToFolder.mkdirs();
        }
    }
}
