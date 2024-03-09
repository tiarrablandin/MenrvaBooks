
SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS, UNIQUE_CHECKS = 0;
SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS = 0;
SET @OLD_SQL_MODE = @@SQL_MODE, SQL_MODE =
        'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema menrvadb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `menrvadb`;

-- -----------------------------------------------------
-- Schema menrvadb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `menrvadb` DEFAULT CHARACTER SET utf8;
USE `menrvadb`;

SET SQL_MODE = '';
DROP USER IF EXISTS menrvadb@localhost;
SET SQL_MODE =
        'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER IF NOT EXISTS 'user'@'localhost' IDENTIFIED BY 'C0z_Mo$';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON menrvadb.* TO 'menrvadb'@'localhost';

create table if not exists author
(
    id           int auto_increment
        primary key,
    photo        varchar(100) not null,
    bio          longtext     null,
    text         longtext     null,
    date_created date         not null,
    date_updated date         null,
    user_id int null,
    FOREIGN KEY (user_id) references user(id)

);

create table if not exists book
(
    id               int auto_increment
        primary key,
    cover            varchar(500) not null,
    title            varchar(50)  not null,
    description      longtext     not null,
    page_count       int          not null,
    publication_date date         not null,
    date_added       date         not null,
    date_updated     date         null,
    link_id int null,
    foreign key (link_id) references link (id)

);

create table if not exists comment
(
    id   int auto_increment
        primary key,
    comment      longtext not null,
    date_added   date     not null,
    date_updated date     null,
    user_id int not null,
    book_id int not null,
    foreign key (user_id) references user (id),
    foreign key (book_id) references book (id)

);

create table if not exists genre
(
    id     int auto_increment
        primary key,
    name         varchar(20) not null,
    date_added   date        not null,
    date_updated date        null
);

create table if not exists keyword
(
    id   int auto_increment
        primary key,
    name         int  not null,
    date_added   date not null,
    date_updated date null
);

create table if not exists link
(
    id  int auto_increment
        primary key,
    name         varchar(20)  not null,
    link         varchar(100) not null,
    date_added   date         not null,
    date_updated date         null
);

create table if not exists series
(
    id     int auto_increment
        primary key,
    name          varchar(100) not null,
    series_number int          not null,
    date_added    date         not null,
    date_updated  date         null
);

create table if not exists social_media
(
    id int auto_increment
        primary key,
    name            varchar(100) not null,
    link            varchar(100) not null,
    date_added      date         not null,
    date_updated    date         null,
    author_id       int          not null,
    FOREIGN KEY (author_id) REFERENCES author (id)
);

create table if not exists sub_genre
(
    id int auto_increment
        primary key,
    name         varchar(20) not null,
    date_added   date        not null,
    date_updated date        null
);

create table if not exists subscription
(
    id int auto_increment
        primary key,
    level           varchar(20) not null,
    paid            int         not null,
    date_added      date        not null,
    date_updated    date        null
);

create table if not exists user
(
    id      int auto_increment
        primary key,
    first_name   varchar(20) not null,
    last_name    varchar(20) not null,
    tag          varchar(20) not null,
    email        varchar(50) not null,
    password     varchar(20) not null,
    active       int         not null,
    date_added   date        not null,
    date_updated date        null
);

CREATE TABLE author_has_series
(
    author_id INT,
    series_id INT,
    PRIMARY KEY (author_id, series_id),
    FOREIGN KEY (author_id) REFERENCES author (id),
    FOREIGN KEY (series_id) REFERENCES series (id)
);

CREATE TABLE author_has_book
(
    author_id INT,
    book_id   INT,
    PRIMARY KEY (author_id, book_id),
    FOREIGN KEY (author_id) REFERENCES author (id),
    FOREIGN KEY (book_id) REFERENCES book (id)
);

CREATE TABLE book_has_genre
(
    book_id INT,
    genre_id   INT,
    PRIMARY KEY (book_id, genre_id),
    FOREIGN KEY (book_id) REFERENCES book (id),
    FOREIGN KEY (genre_id) REFERENCES genre (id)
);

CREATE TABLE book_has_sub_genre
(
    book_id INT,
    sub_genre_id   INT,
    PRIMARY KEY (book_id, sub_genre_id),
    FOREIGN KEY (book_id) REFERENCES book (id),
    FOREIGN KEY (sub_genre_id) REFERENCES sub_genre (id)
);

CREATE TABLE book_has_keyword
(
    book_id INT,
    keyword_id   INT,
    PRIMARY KEY (book_id, keyword_id),
    FOREIGN KEY (book_id) REFERENCES book (id),
    FOREIGN KEY (keyword_id) REFERENCES keyword (id)
);


