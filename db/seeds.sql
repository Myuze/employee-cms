INSERT INTO department (id, name)
VALUES (001, "Department_1"),
       (002, "Department_2"),
       (003, "Department_3"),
       (004, "Department_4"),
       (005, "Department_5");

INSERT INTO role (id, title, salary, department_id)
VALUES (001, "Manager", 50000, 001),
       (002, "Engineer", 100000, 001),
       (003, "Intern",10000, 001),
       (004, "Sales", 75000, 002);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Florian", "Meneses", 001, NULL),
       (002, "Evelyn", "Nguyen", 002, 001),
       (003, "Mike", "Ngo", 003, 002),
       (004, "Micheal", "Rogers", 002, 001),
       (005, "Julian", "Williams", 004, 002);
       