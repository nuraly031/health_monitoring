package com.example.healthmonitoring;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/health")
public class HealthController {

    @GetMapping("/status")
    public String checkStatus() {
        return "Health Monitoring API is running";
    }
    
    @PostMapping("/data")
    public String saveHealthData(@RequestBody String data) {
        return "Health data received: " + data;
    }
}
