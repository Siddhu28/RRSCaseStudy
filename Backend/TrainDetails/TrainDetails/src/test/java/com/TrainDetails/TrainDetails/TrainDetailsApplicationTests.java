package com.TrainDetails.TrainDetails;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.TrainDetails.TrainDetails.Entity.Train;
import com.TrainDetails.TrainDetails.Repository.TrainRepository;
import com.TrainDetails.TrainDetails.Services.TrainService;


@SpringBootTest
@RunWith(SpringRunner.class)
class TrainDetailsApplicationTests {

	@Autowired
	private TrainService trainService;
	
	@MockBean
	private TrainRepository trainrepository;

	@Test
	public void getTrainTest() {
		when(trainrepository.findAll()).thenReturn(Stream
				.of(new Train("101","Manglore Express","MCST","Manglore"), new Train("102","Tutari Express","Dadar","Sawantwadi")).collect(Collectors.toList()));
		//assertEquals(2,trainService.getContact().size());
	}
		@Test
		public void saveTrainTest() {
			Train train = new Train("105","Indrayani Express","Dadar","Pune");
			when(trainrepository.save(train)).thenReturn(train);
			assertEquals(train, trainService.addTrain(train));
		
		}
		@Test
		public void deleteUserTest() {
			Train train = new Train("102","Tutari Express","Dadar","Sawantwadi");
			trainService.deleteTrain(train);
			verify(trainrepository, times(1)).delete(train);
		}

}
