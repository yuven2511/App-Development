package com.mindunits.yuven.service;

import com.mindunits.yuven.dto.request.AuthenticationRequest;
import com.mindunits.yuven.dto.request.RegisterRequest;
import com.mindunits.yuven.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
