SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

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
        'ONLY_FULL_GROUP_BY,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER IF NOT EXISTS 'user2'@'localhost' IDENTIFIED BY 'test';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON menrvadb.* TO 'user2'@'localhost';

create table if not exists author
(
    id           int auto_increment
        primary key,
    photo        varchar(100) null,
    pen_name     varchar(20)  not null,
    bio          longtext     null,
    text         longtext     null,
    date_created date         not null,
    date_updated date         null,
    user_id      int          null,
    FOREIGN KEY (user_id) references user (id)

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
    link_id          int          null,
    foreign key (link_id) references link (id)

);

create table if not exists community_tags
(
    id           int auto_increment
        primary key,
    tag          varchar(50) not null,
    date_added   date        not null,
    date_updated date        null,
    user_id      int         not null,
    book_id      int         not null,
    foreign key (user_id) references user (id),
    foreign key (book_id) references book (id)

);

create table if not exists comment
(
    id           int auto_increment
        primary key,
    comment      longtext not null,
    date_added   date     not null,
    date_updated date     null,
    user_id      int      not null,
    book_id      int      not null,
    foreign key (user_id) references user (id),
    foreign key (book_id) references book (id)

);

create table if not exists genre
(
    id           int auto_increment
        primary key,
    name         varchar(20) not null,
    date_added   date        not null,
    date_updated date        null
);

create table if not exists keyword
(
    id           int auto_increment
        primary key,
    name         int  not null,
    date_added   date not null,
    date_updated date null
);

create table if not exists link
(
    id           int auto_increment
        primary key,
    name         varchar(20)  not null,
    link         varchar(100) not null,
    date_added   date         not null,
    date_updated date         null
);

create table if not exists series
(
    id            int auto_increment
        primary key,
    name          varchar(100) not null,
    series_number int          not null,
    date_added    date         not null,
    date_updated  date         null
);

create table if not exists social_media
(
    id           int auto_increment
        primary key,
    name         varchar(100) not null,
    link         varchar(100) not null,
    date_added   date         not null,
    date_updated date         null,
    author_id    int          not null,
    FOREIGN KEY (author_id) REFERENCES author (id)
);

create table if not exists sub_genre
(
    id           int auto_increment
        primary key,
    name         varchar(20) not null,
    date_added   date        not null,
    date_updated date        null
);

create table if not exists subscription
(
    id           int auto_increment
        primary key,
    level        varchar(20) not null,
    paid         int         not null,
    date_added   date        not null,
    date_updated date        null
);

create table if not exists user
(
    id              int auto_increment
        primary key,
    role            varchar(20) not null,
    first_name      varchar(20) not null,
    last_name       varchar(20) not null,
    tag             varchar(20) not null,
    email           varchar(50) not null,
    username        varchar(50) not null,
    password        varchar(200)not null,
    active          int         not null,
    date_added      date        not null,
    date_updated    date        null,
    subscription_id int         not null,
    FOREIGN KEY (subscription_id) REFERENCES subscription (id)
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
    book_id  INT,
    genre_id INT,
    PRIMARY KEY (book_id, genre_id),
    FOREIGN KEY (book_id) REFERENCES book (id),
    FOREIGN KEY (genre_id) REFERENCES genre (id)
);

CREATE TABLE book_has_sub_genre
(
    book_id      INT,
    sub_genre_id INT,
    PRIMARY KEY (book_id, sub_genre_id),
    FOREIGN KEY (book_id) REFERENCES book (id),
    FOREIGN KEY (sub_genre_id) REFERENCES sub_genre (id)
);

CREATE TABLE book_has_keyword
(
    book_id    INT,
    keyword_id INT,
    PRIMARY KEY (book_id, keyword_id),
    FOREIGN KEY (book_id) REFERENCES book (id),
    FOREIGN KEY (keyword_id) REFERENCES keyword (id)
);

CREATE TABLE book_interactions
(
    book_id      INT,
    user_id      INT,
    has_read     int not null default 0,
    interested   int not null default 0,
    favorite     int not null default 0,
    like_dislike int not null default 0,
    PRIMARY KEY (book_id, user_id),
    FOREIGN KEY (book_id) REFERENCES book (id),
    FOREIGN KEY (user_id) REFERENCES user (id)
);

CREATE TABLE series_interactions
(
    series_id   INT,
    user_id     INT,
    interested  int not null default 0,
    favorite    int not null default 0,
    in_progress int not null default 0,
    PRIMARY KEY (series_id, user_id),
    FOREIGN KEY (series_id) REFERENCES series (id),
    FOREIGN KEY (user_id) REFERENCES user (id)
);

CREATE TABLE user_follows_author
(
    author_id INT,
    user_id   INT,
    follow    int not null default 0,
    PRIMARY KEY (author_id, user_id),
    FOREIGN KEY (author_id) REFERENCES author (id),
    FOREIGN KEY (user_id) REFERENCES user (id)
);

-- -----------------------------------------------------
-- INSERTS
-- -----------------------------------------------------

insert into user (id, role, first_name, last_name, tag, email, username, password, active, date_added, date_updated,
                  subscription_id)
Values (1, 'Admin', 'Tiarra', 'Blandin', '@tiarra', 'tiarra.blandin@gmail.com', 'tiarra', 'L3oN1d@S0617#', 1, NOW(), null, 1);

insert into user (id, role, first_name, last_name, tag, email, username, password, active, date_added, date_updated,
                  subscription_id)
Values (2, 'Admin', 'Matthew', 'Tilley', '@matt', 'matthew.tilley77@gmail.com', 'matt', 'Forauir11!!', 1, NOW(), null, 1);

insert into user (id, role, first_name, last_name, tag, email, username, password, active, date_added, date_updated,
                  subscription_id)
Values (3, 'Admin', 'Jonathan', 'Dominguez', '@jondom', 'jonathanadominguez@gmail.com', 'jon', 'Avion@30015', 1, NOW(), null,
        1);

insert into user (id, role, first_name, last_name, tag, email, username, password, active, date_added, date_updated,
                  subscription_id)
Values (4, 'Admin', 'William', 'Slaunwhite', '@will', 'williamslaunwhite@gmail.com', 'will', '$2a$12$.aXI64OEVlXoGf8fNHOlhef6SFgQzI4bqn2unNELnfIWTPwJj.zR6', 1, NOW(), null, 1);
-- Values (4, 'Admin', 'William', 'Slaunwhite', '@will', 'williamslaunwhite@gmail.com', 'will', 'will', 1, NOW(), null, 1);

insert into subscription (id, level, paid, date_added, date_updated)
values (1, 'Admin', 1, now(), null);

insert into author (id, photo, pen_name, bio, text, date_created, date_updated, user_id)
VALUES (1, null, 'J.T. Elliott', 'Hello, I write books.', 'Announcements', now(), null, 1);

insert into author (id, photo, pen_name, bio, text, date_created, date_updated, user_id)
VALUES (2, null, 'Matthew Blackmore', 'Hello, I write books.', 'Announcements', now(), null, 2);

insert into author (id, photo, pen_name, bio, text, date_created, date_updated, user_id)
VALUES (3, null, 'Jonathan Dominguez', 'Hello, I write books.', 'Announcements', now(), null, 3);

insert into author (id, photo, pen_name, bio, text, date_created, date_updated, user_id)
VALUES (4, null, 'Amarah Calderini', '', '', now(), null, null);

insert into author (id, photo, pen_name, bio, text, date_created, date_updated, user_id)
VALUES (5, null, 'S.E. Babin', '', '', now(), null, null);

insert into book (id, cover, title, description, page_count, publication_date, date_added, date_updated, link_id)
VALUES (1, '', 'The Time of Tears','Carnegie Sanders is a typical 19-year-old. He goes to college, he lives at home and in a dorm, has a crush on a girl he went to high school with, and has no idea what to do with his life. Life is normal. Then hydrogen bombs decimate the globe, and robed beings start wiping out everyone else lucky enough to live in rural America. In his small town in southern Arizona, Carnegie realizes survival is more than chance. Running on instinct, Erin, Santana, and Carnegie find the decimation of their people to be the beginning of change and tragedy never witnessed in history. As the world resets, Carnegie, Erin, and Santana face odds that would consume them, if not for new relationships forged. Creatures from fantastic stories lost in time and translation seek to keep humanity in check as Carnegie seeks a place to call home, a place to be safe. No one is safe as sinister forces work behind the veil of secrecy, and everyone in Carnegie’s new circle will experience turmoil. Lost in the new races of lore calling themselves the Nine, Carnegie is thrust into becoming someone he isn’t ready to be for those who rely on him. Set in the dynamic landscape of the American Southwest, and from deserts to mountains and even under the earth itself, no where is safe. Fighting for survival is just the beginning. Nothing has prepared them for this time. A time of confusion. A time of loss. And a time of tears.',
        324, '2019-02-26', now(), null,null)
