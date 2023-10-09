package com.mindunits.yuven.repository;



import org.springframework.data.jpa.repository.JpaRepository;





import org.springframework.stereotype.Repository;

import com.mindunits.yuven.model.*;



@Repository

public interface ServiceRepository extends JpaRepository<Service, Long>{



}