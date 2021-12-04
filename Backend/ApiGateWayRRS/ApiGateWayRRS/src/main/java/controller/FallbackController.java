package controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FallbackController {
	@GetMapping("/AdminContactServiceFallback")
	public String AdminContactServiceFallback() {
		return "Admin Contact Service is Down at This Time";
	}
	@GetMapping("/BookingTicketServiceFallback")
	public String BookingTicketServiceFallback() {
		return "Booking Ticket Service is Down at This Time";
	}
	@GetMapping("/TrainDetailsServiceFallback")
	public String TrainDetailsServiceFallback() {
		return "Train Details Service is Down at This Time";
	}


}
