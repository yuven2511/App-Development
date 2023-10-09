package com.mindunits.yuven.dto.response;



import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ServiceResponse {
	private Long id;
	private String service_name;
	private String service_description;
	private String service_type;
	private String service_owner;
	private String service_status;
	private String service_cost;
	private String service_duration;
	private String service_availabe;
}
