package com.peaksoft.service.impl;


import com.peaksoft.model.Role;
import com.peaksoft.repository.RoleRepository;
import com.peaksoft.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepository roleRepository;
    @Override
    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }

    @Override
    public List<String> getNamesOfRoles() {
        List<Role> roles = roleRepository.findAll();
        List<String> list = new ArrayList<>();
        for (Role role :roles){
            list.add(role.getRole());
        }
        return list;
    }

    @Override
    public Role getRoleByName(String name) {
        List<Role> roles = roleRepository.findAll();
        List<String> list = new ArrayList<>();
        for (Role role :roles){
            if(role.getRole().equals(name)){
               return role;
            }
            }
         return null;
        }
    }

