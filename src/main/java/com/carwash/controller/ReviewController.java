package com.carwash.controller;

import com.carwash.entity.Review;
import com.carwash.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @GetMapping()
    public List<Review> get() {
        return reviewService.findAll();
    }

    @GetMapping("/showed")
    public List<Review> getConfirmed() {
        return reviewService.findAllConfirmed();
    }

    @PostMapping("/notshow/{id}")
    public void hideReview(@PathVariable int id) {
        reviewService.hideReview(id);
    }

    @PostMapping("/show/{id}")
    public void showReview(@PathVariable int id) {
        reviewService.showReview(id);
    }

    @PostMapping
    public Review save(@RequestBody Review review) {
        review.setConfirmed(true);
        return reviewService.save(review);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        reviewService.delete(id);
    }
}
