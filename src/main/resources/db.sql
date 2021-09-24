select * from users;
insert into users(name, password,email, age)
values ('user','user','user@gmail.com',20),
       ('admin','admin','admin@gmail.com',30);


select * from roles;
insert into roles (role)
values ('ROLE_USER'),
       ('ROLE_ADMIN');

select * from user_roles;
insert into user_roles(user_id,role_id)
values (1,1),
       (2,1),
       (2,2);