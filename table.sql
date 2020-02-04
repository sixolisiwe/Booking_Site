create table Accomonation (
	id serial not null primary key,
    reference  int,
    province text not null,
    accomodation_type text not null,
    adults int, 
    children int,
    rooms int,
    in_date int,
    out_date int

);