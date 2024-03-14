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

VALUES (1, 'https://i.imgur.com/12J19sh.jpg', 'The Time of Tears','Carnegie Sanders is a typical 19-year-old. He goes to college, he lives at home and in a dorm, has a crush on a girl he went to high school with, and has no idea what to do with his life. Life is normal. Then hydrogen bombs decimate the globe, and robed beings start wiping out everyone else lucky enough to live in rural America. In his small town in southern Arizona, Carnegie realizes survival is more than chance. Running on instinct, Erin, Santana, and Carnegie find the decimation of their people to be the beginning of change and tragedy never witnessed in history. As the world resets, Carnegie, Erin, and Santana face odds that would consume them, if not for new relationships forged. Creatures from fantastic stories lost in time and translation seek to keep humanity in check as Carnegie seeks a place to call home, a place to be safe. No one is safe as sinister forces work behind the veil of secrecy, and everyone in Carnegie’s new circle will experience turmoil. Lost in the new races of lore calling themselves the Nine, Carnegie is thrust into becoming someone he isn’t ready to be for those who rely on him. Set in the dynamic landscape of the American Southwest, and from deserts to mountains and even under the earth itself, no where is safe. Fighting for survival is just the beginning. Nothing has prepared them for this time. A time of confusion. A time of loss. And a time of tears.',
        324, '2019-02-26', now(), null,null);

insert into book (id, cover, title, description, page_count, publication_date, date_added, date_updated, link_id)
VALUES (2, 'https://i.imgur.com/RMSohKY.jpg', 'The Fall of the Nine','Set along the Colorado Rockies, The Fall of the Nine continues the struggle of Carnegie, Erin, and Santana as they continue their fight in a post-apocalyptic world. On the mend after their encounter, Carnegie and his friends start their journey from the outskirts of Denver and discover that the true evil is just awakening. As tensions escalate, Carnegie makes a choice that he will pay for in blood. Entering the post-bomb city, the Gnomes and other species of the Nine that have taken the Human world for their own continue to show the surviving humans that the Old World is gone, and it will never be the same again. With the arrival of the rulers of each race, Cheradyn’s identity is threatened and she must face demons of her own past to become the Faerie the New World needs her to be. As the world continues to reset, the Princess learns that she must protect the ones who have been there for her. Moving in the shadows, Nicholas contends with the darkness inside him and the greater evil comes to the foreground, inciting other dark beings to the anarchic tendencies they have always hoped would be unleashed. Somewhere in Texas, a young businessman fights the post-apocalyptic southwest, his companions, and a mysterious power inside him that threatens to tear him apart. Darkness is on the move as ancient secrets are revealed, but hope still finds a small place in the creeping void. Hope, however, is in short supply for the Nine. The true evil is revealed. He has planned this for centuries. The Nine are not prepared.',
        428, '2019-07-03', now(), null, null);

insert into book (id, cover, title, description, page_count, publication_date, date_added, date_updated, link_id)
VALUES (3, 'https://i.imgur.com/8AuJTCq.jpg', 'Tales of the Nine','From Arizona to Massachusetts, to the Caribbean and deep under the earth in prisons so dark, only evil can grow, the world of the Nine is revealed. In seventeen short stories we explore some of the origin stories through first-hand accounts as mysteries are both solved and revealed. With many characters, new and known, the Nine and their true threat, their cataclysm from a lost history, is offered in a different medium. The Time of Tears: Tales of the Nine deepens the lore through time: past, present, and future, preparing our heroes for the last battle for survival all of them must face. Questions are answered. The cataclysm is unleashed in The Tales of the Nine.',
    148, '2019-08-17', now(), null, null);

insert into book (id, cover, title, description, page_count, publication_date, date_added, date_updated, link_id)
values (4, 'https://i.imgur.com/jBrsMog.jpg', 'Tide of Darkness (Dark World Trilogy Book 1)', 'They say the land flourished once, ripe with wealth and blessed by nature, but those are only stories. There is no light now—there is only the Darkness. Mirren has grown up hearing tales of the Dark World from the safety of Similis, a utopian society with no poverty, no violence and no choices. Rumors of the horrors that writhe in the darkness keep anyone from venturing further than the Boundary, but when a mysterious illness befalls her brother, Mirren is desperate to save him—desperate enough to cross into the wild land to find the cure he needs to survive. Raised beyond the Boundary, Shaw has only ever known violence. With no laws to inhibit the cruel reign of warlords and a curse that keeps the land on the edge of starvation, he understands the only way to survive is by being more ruthless than everyone else. When he finds a panicked woman escaping Similis, he realizes he’s been granted a rare gift of fate: a way to get back what was stolen from him. Infuriatingly enchanting and not at all what he expected, Mirren challenges Shaw at every turn. But the pair soon discover their greatest fight may not lie with each other. A prophecy has been unearthed, and if it speaks the truth, one of them may be the key to breaking the curse. But light is a dangerous thing to wield in a land ruled by the dark. Together, they must decide if love and freedom are worth the cost. Tide of Darkness is a New Adult fantasy romance and is intended to be enjoyed by mature audiences. It contains mature themes, sexual content, violence, gore and references to abuse. For a full list of trigger warnings, please visit the author''s social media or website.',
         495, '2022-08-30', now(), null, null);

insert into book (id, cover, title, description, page_count, publication_date, date_added, date_updated, link_id)
values (5, 'https://i.imgur.com/DXoYn3a.jpg', 'Flame of Shadow (Dark World Trilogy Book 2)', 'All Mirren ever wanted was to save her brother, though now that she’s seen the horror and beauty of the Dark World, Similis feels more suffocating than ever. Her heart broken and her power now stifled, she vows to live an ordinary life, but when the Boundary is breached and the lights that have shone for a thousand years begin to flicker, she knows must protect her home from the growing threat of the Praeceptor. Even if it means leaving behind the brother she sacrificed everything for. Because the warlord has brought destruction to their gates, and if Mirren doesn’t decipher the remainder of the Dead Prophecy, both Ferusa and Similis will fall to the Darkness. And it isn’t just the Praeceptor who seeks to stop her. Leading his father’s reign of terror is the newly returned heir. Soulless, cruel, and set on vengeance, Shaw will stop at nothing to get what he wants—including destroying the woman he once loved. To thwart Shaw and save Ferusa, Mirren will have to find the depths of her power and push herself to the edge of her humanity. She must decide once and for all, where the line between dark and light lies. Because the Darkness demands souls, and it is coming for hers. Flame of Shadow is the second book in the Dark World Trilogy and is a dark fantasy romance intended for audiences 18+ as it contains graphic violence and sexual content. For a full list of trigger warnings, please see the author''s social media.',
        498, '2022-12-06', now(), null, null);

insert into book (id, cover, title, description, page_count, publication_date, date_added, date_updated, link_id)
values (6, 'https://i.imgur.com/byF0ZAf.jpg', 'Wave of Light (Dark World Trilogy Book 3)', 'The Darkness changes all those it touches... Mirren has learned from her time in Ferusa that light cannot exist without the dark, nor beauty without pain. She has bled and fought, given everything she has to protect those she loves, and still, the Darkness demands more. With the return of nature magic and the rise of an ancient evil, the Dead Prophecy is the only way to restore balance to the land--but Mirren fears the price may be too high to pay. In the thrilling conclusion to the epic fantasy trilogy, loyalties will be tested... Souls will be shattered... And sacrifices will be made, as the Darkness rises for its final calling. Wave of Light is a new adult fantasy intended to be enjoyed by mature audiences. It contains mature themes, sexual content, violence, gore and references to abuse. For a full list of trigger warnings, please visit the author''s website.',
        583, '2023-11-14', now(), null, null);

insert into book (id, cover, title, description, page_count, publication_date, date_added, date_updated, link_id)
values (7, 'https://i.imgur.com/olTZZRa.jpg', 'A Twist of Demon (Cocktails in Hell Book 1)', 'Want longer hair, whiter teeth, a smaller nose? Violet has a potion for that. Want to hex an enemy, make someone fall in love with you, or curse someone? Well…that will cost you. By day, Violet is a supposed charlatan running a potion shop in New Orleans and catering to drunk tourists who want to take a walk on the wild side. By night, she’s a Potion Master, a rare, magical being whose shop straddles the portal to Earth and Hell, slinging potions to magical beasts who only come out at night. She’s also the protector of both, a neutral being who carefully navigates the Accords between oblivious humans and the creatures who wouldn’t mind snacking on them. Unfortunately for both sides, Violet is terrible at her job. After the last Potion Master dies a horrible death and she’s pulled out of anonymity by a handsome and super annoying demon, Violet’s shop transforms and she’s thrust into unwanted instafame. And not the good kind, either. Suddenly, everyone either wants to date her, or they want to kill her. And, honestly? Violet isn’t sure which one is easier anymore.',
        186, '2023-04-06', now(), null, null);

insert into book (id, cover, title, description, page_count, publication_date, date_added, date_updated, link_id)
values (8, 'https://i.imgur.com/YlbhAYq.jpg', 'A Shake of Succubus (Cocktails in Hell Book 2)', 'Violet is the newest Potionsmaster, Guardian of the Hell Gates, and Lucifer has his eye on her… With her life a weird mess right now, Violet has no one to turn to. Az is still in hiding, and she’s never been able to trust Max. Lucifer has offered a shoulder, but Violet knows better than to trust the original Serpent and her brand spanking new employer. Doesn’t she? As the hunt for the creature who escaped the boundaries continues, more Potionsmasters meet their ends. But when someone she definitely shouldn''t trust offers her a cryptic clue, Violet has to decide if her life is worth the truth. Can she endanger everyone she loves and the entire world to save her own hide? Or will she make the ultimate sacrifice and take her secret to the grave?',
        210, '2023-07-26', now(), null, null);

insert into book (id, cover, title, description, page_count, publication_date, date_added, date_updated, link_id)
values (9, 'https://i.imgur.com/2sN0YIR.jpg', 'A Stir of Fairies (Cocktails in Hell Book 3)', 'Violet''s secret is out. Now comes the fun part… It''s time to train. With Violet''s identity revealed to her closest allies, the time has come for her to embrace who she is. But who is she anyway? Witch? Angel? Demon? None of the above? Meanwhile, Daddy Dearest is busy gathering a powerful force to stage a coup in Heaven, while Violet and the crew have to harness her powers and teach her to use them before he succeeds. Between slinging drinks for Hell''s finest, training for a potential world-ending war, and trying to figure out why the new brooding bar guest keeps giving her funny looks, Violet has her hands full. And then came the dragons... Unfortunately, Violet ain''t seen nothing yet.',
        203, '2023-10-10', now(), null, null);

insert into book (id, cover, title, description, page_count, publication_date, date_added, date_updated, link_id)
values (10, 'https://i.imgur.com/SuPhH2m.jpg', 'A Dash of Vampire (Cocktails in Hell Book 4)', 'What happens when you accidentally kidnap a Fae King, invite a demented vampire queen to bunk with you, and enlist both to plot revenge against the dragons? Violet doesn''t know yet, but she''s about to find out. Her little jaunt to the fae lands ended with Violet carrying more luggage out than she brought in. Now, with a ticked off Unseelie King brooding and tied up in the corner, she has to figure out how to smooth relations while also deciphering Michael''s newest plans. Toss in a sullen traitor, an emotional fairy, and a human(ish?) law enforcement officer sniffing around, and Violet''s juggling more balls than she knows what to do with. As if that''s not bad enough, Violet receives one final visitor to her bar the night before she visits the dragons, and this one is a real doozy… Welcome to Swan''s, where the creatures are weird, the drinks are potent, and the antics are completely unhinged.',
        219, '2023-12-19', now(), null, null);

insert into book (id, cover, title, description, page_count, publication_date, date_added, date_updated, link_id)
values (11, 'https://i.imgur.com/Qdz9MBc.jpg', 'A Touch of Angel (Cocktails in Hell Book 5)', 'When an accidental meeting results in an unlikely alliance, Violet discovers earth-shattering secrets… Sounds like a Tuesday to her. Lucifer''s efforts to secure the angel''s cooperation are proving unsuccessful until a chance meeting ends with an invitation to attend a forum. There''s only one caveat. Violet''s presence is required, and she must offer a demonstration of her powers. Lucifer is against it. Clara wants to destroy them all. Dave is…Dave. And the enigmatic ruler of the dragons doesn''t care about any of it. He''s chosen to pursue Violet with a single-minded focus. But whether he wants her for her or her powers remains unknown. Violet has to decide soon whether she''s ready to face the world and claim her heritage. But what she doesn''t realize is her heritage isn''t straightforward at all, and the choice she has to make could bring the entire world to its knees.',
        228, '2024-03-05', now(), null, null);

insert into series (id, name, date_added, date_updated)
VALUES (1, 'The time of Tears', now(), null);

insert into series (id, name, date_added, date_updated)
VALUES (2, 'Dark World Trilogy', now(), null);

insert into series (id, name, date_added, date_updated)
VALUES (3, 'Cocktails in Hell', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (1, 'Fantasy', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (2, 'Fiction', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (3, 'Non-fiction', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (4, 'Urban-fantasy', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (5, 'Science fiction', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (6, 'Mystery', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (7, 'Historical fiction', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (8, 'Horror', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (9, 'Romance', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (10, 'Thriller', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (11, 'Autobiography', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (12, 'Young Adult', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (13, 'Adventure', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (14, 'Dystopian', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (15, 'Contemporary fiction', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (16, 'Literary fiction', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (17, 'Historical', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (18, 'Graphic novel', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (19, 'Magical realism', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (20, 'Shot story', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (21, 'Biography', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (22, 'Classics', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (23, 'Paranormal romance', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (24, 'Paranormal', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (25, 'Western fiction', now(), null);

insert into genre (id, name, date_added, date_updated)
VALUES (26, 'Comedy', now(), null);

insert into sub_genre (id, name, date_added, date_updated)
VALUES (1, 'Dark fantasy', now(), null);

insert into sub_genre (id, name, date_added, date_updated)
VALUES (2, 'High fantasy', now(), null);

insert into sub_genre (id, name, date_added, date_updated)
VALUES (3, 'Low fantasy', now(), null);

insert into sub_genre (id, name, date_added, date_updated)
VALUES (4, 'Erotica', now(), null);

insert into sub_genre (id, name, date_added, date_updated)
VALUES (5, 'Gothic fiction', now(), null);

insert into sub_genre (id, name, date_added, date_updated)
VALUES (6, 'Fairy tale', now(), null);

insert into sub_genre (id, name, date_added, date_updated)
VALUES (7, 'Crime', now(), null);

insert into sub_genre (id, name, date_added, date_updated)
VALUES (9, 'Action', now(), null);

insert into sub_genre (id, name, date_added, date_updated)
VALUES (10, 'Supernatural', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (1, 'Fairy', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (2, 'Faerie', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (3, 'Fey', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (4, 'Fae', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (5, 'Shifters', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (6, 'Vampires', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (7, 'Dragons', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (8, 'Hell', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (9, 'Underworld', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (10, 'Magic', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (11, 'Mages', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (12, 'Magical artifacts', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (13, 'Griffins', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (14, 'Magical creatures', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (15, 'Werewolves', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (16, 'Alpha', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (17, 'Omega', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (18, 'Mermaids', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (19, 'Sirens', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (20, 'Witches', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (21, 'Ghosts', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (22, 'Elves', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (23, 'Orcs', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (24, 'Myths', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (25, 'Legends', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (26, 'Folklore', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (27, 'Swords', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (28, 'Dwarves', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (29, 'Gargoyles', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (30, 'Gods', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (31, 'Trolls', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (32, 'Goblins', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (33, 'Parallel worlds', now(), null);

insert into keyword (id, name, date_added, date_updated)
VALUES (34, 'Realms', now(), null);

