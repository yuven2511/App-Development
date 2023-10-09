package com.mindunits.yuven.service;

import java.util.List;

import com.mindunits.yuven.dto.request.UserRequest;
import com.mindunits.yuven.dto.response.UserResponse;

public interface ServiceService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteUser(Long uid);

}




