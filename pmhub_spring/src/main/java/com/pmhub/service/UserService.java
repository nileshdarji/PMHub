package com.pmhub.service;

import com.pmhub.model.User;

public interface UserService {

	public void saveUser(User user);
	
	public boolean isUserAlreadyPresent(User user);
}
