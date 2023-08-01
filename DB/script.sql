create extension if not exists "uuid-ossp";

create table user(
	id uuid primary key default uuid_generate_v4(),
	name character varying not null,
	phone_number character varying not null,
	email character varying not null,
	password character varying not null
);

create table address(
	id serial primary key,
	address character varying not null,
	user_id uuid,
	constraint "FK_3c2bc72f03fd5abbbc5ac169501" foreign key("user_id") references user("id")
);

create table product(
	name character varying not null,
	description character varying not null,
	price float not null,
	sku character varying not null unique,
	id uuid not null primary key default uuid_generate_v4()
);

create table category(
	id serial primary key,
	name character varying not null
);

create table product_category(
	"product_id" uuid,
	"category_id" integer,
	constraint "FK_3c2bc72f03fd5abbbc5ac169499" foreign key("product_id") references product("id"),
	constraint "FK_3c2bc72f03fd5abbbc5ac169500" foreign key("category_id") references category("id")
);


create table "order"(
	id uuid primary key default uuid_generate_v4(),
	order_address integer,
	price float not null default 0,
	user_id uuid,
	constraint "FK_3c2bc72f03fd5abbbc5ac169502" foreign key("order_address") references address("id"),
	constraint "FK_3c2bc72f03fd5abbbc5ac169503" foreign key("user_id") references user("id")
);

create table product_order(
	id serial primary key,
	"product_id" uuid,
	"order_id" uuid,
	"count" integer not null default 0,
	"price" float,
	constraint "FK_3c2bc72f03fd5abbbc5ac169491" foreign key("product_id") references product("id"),
	constraint "FK_3c2bc72f03fd5abbbc5ac169001" foreign key("order_id") references "order"("id")
);

INSERT INTO user
(id, "name", phone_number, email, "password")
VALUES(uuid_generate_v4(), 'Virat Kohli', '+918087878787', 'vr@krp.com', 'blahblahblah'),
(uuid_generate_v4(), 'Sachin T', '+918087123787', 'st@p.com', 'blahblahblahblah'),
(uuid_generate_v4(), 'MS Dhoni', '+918012345787', 'msd@s.com', 'blahblahblahblahblah');


INSERT INTO address
(address, user_id)
VALUES('My New Address', (select id from user where name='Virat Kohli')),
('Who Cares', (select id from user where name='Sachin T')),
('Ha Ha Ha', (select id from user where name='MS Dhoni'));

INSERT INTO product
("name", description, price, sku, id)
VALUES('Mouse', 'Useful Mouse', 20, 'ASDFGH', uuid_generate_v4()),
('Keyboard', 'Amazing Keyboard', 120, 'ZXCVBH', uuid_generate_v4()),
('Laptop', 'Fast Laptop', 220, 'MNBVCT', uuid_generate_v4()),
('Bottle', 'Premium', 270, 'ASDFGP', uuid_generate_v4()),
('T-Shirt', 'Nice T', 70, 'MNHGTY', uuid_generate_v4());

INSERT INTO category
("name")
VALUES('Logistics'), ('Electronics');

INSERT INTO product_category
(product_id, category_id)
VALUES((select id from product  where name='Mouse'), (select id from category  where name='Electronics')),
((select id from product  where name='Mouse'), (select id from category  where name='Logistics')),
((select id from product  where name='Keyboard'), (select id from category  where name='Electronics')),
((select id from product  where name='Laptop'), (select id from category  where name='Electronics')),
((select id from product  where name='Bottle'), (select id from category  where name='Logistics'));

INSERT INTO "order"
(id, order_address, price, user_id)
VALUES(uuid_generate_v4(), 1, 330, (select id from user where name='Virat Kohli')),
(uuid_generate_v4(), 2, 40, (select id from user where name='Sachin T')),
(uuid_generate_v4(), 2, 240, (select id from user where name='Sachin T')),
(uuid_generate_v4(), 3, 220, (select id from user where name='MS Dhoni')),
(uuid_generate_v4(), 3, 310, (select id from user where name='MS Dhoni'));

INSERT INTO product_order
(product_id, order_id, count, price)
VALUES((select id from product  where name='Mouse'), 'b3fc4f5a-b4b0-4c68-a1ec-a9862d30236b', 2, (select price from product  where name='Mouse')),
((select id from product  where name='Keyboard'), 'b3fc4f5a-b4b0-4c68-a1ec-a9862d30236b', 3, (select price from product  where name='Keyboard')),
((select id from product  where name='Mouse'), '3d43b197-3945-4524-a00c-97aadc2a241c', 2, (select price from product  where name='Mouse')),
((select id from product  where name='Laptop'), 'b3fc4f5a-b4b0-4c68-a1ec-a9862d30236b', 1, (select price from product  where name='Laptop')),
((select id from product  where name='Mouse'), 'a1826fe4-acb7-4d8c-b119-70b5a64a96f6', 1, (select price from product  where name='Mouse')),
((select id from product  where name='Bottle'), '77f59ab9-26b5-4a33-b66c-a0f25d22bc1e', 2, (select price from product  where name='Bottle')),
((select id from product  where name='Laptop'), '23ae2474-64de-4233-8daa-a3a1ab3e09d2', 1, (select price from product  where name='Laptop')),
((select id from product  where name='T-Shirt'), '23ae2474-64de-4233-8daa-a3a1ab3e09d2', 1, (select price from product  where name='T-Shirt'));

create index user_phone_number on user("phone_number");
create index user_email on user("email");
create index address_address on address("address");
create index product_sku on product("sku");
create index product_name on product("name");

-- drop table "order";
-- drop table "product_order";

