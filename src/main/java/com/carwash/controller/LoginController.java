package com.carwash.controller;

import com.carwash.dto.AdminDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping("/login")
public class LoginController {
    public static final String LOGIN = "carwash";
    public static final String PASS = "carwash";

    @PostMapping
    public ResponseEntity<Boolean> login(@RequestBody AdminDto adminDto) {
        if (adminDto.getLogin().equals(LOGIN) && adminDto.getPass().equals(PASS)) {
            return ResponseEntity.ok().body(true);

        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(false);
    }

}
