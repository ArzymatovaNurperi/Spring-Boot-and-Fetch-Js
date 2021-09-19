package com.peaksoft.service.impl;

import com.peaksoft.model.User;
import com.peaksoft.repository.UserRepository;

import com.peaksoft.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import javax.transaction.Transactional;
import java.util.List;

@Service
public class    UserServiceImpl implements UserService {
     @Autowired
    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User saveUser(User user) {
       return userRepository.save(user);
    }

    @Override
    public User findById(int id) {
        return userRepository.findById(id).get();
    }

    @Override
    public void deleteById(int id) {
          userRepository.deleteById(id);
    }

    @Override
    public User findByUsername(String username) {
        List<User> users = userRepository.findAll();
        for (User user:users){
            if(user.getName().equals(username)){
                return user;
            }
        }
        return null;
    }
    }
