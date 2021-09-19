package com.peaksoft.controller;

import com.peaksoft.model.User;
import com.peaksoft.service.RoleService;
import com.peaksoft.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.security.Principal;

@Controller

public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private RoleService roleService;
    @GetMapping("/register")
    public String register(){
        return "index";
    }

     @GetMapping("/")
     public String login(){
        return "redirect:login";
     }
    @GetMapping("/user")
    public String getUser(Principal principal, Model model){
        User user = userService.findByUsername(principal.getName());
        model.addAttribute("user",user);
        return "user";
    }
}
