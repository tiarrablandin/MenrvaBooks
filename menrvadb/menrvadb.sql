SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS, UNIQUE_CHECKS = 0;
SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS = 0;
SET @OLD_SQL_MODE = @@SQL_MODE, SQL_MODE =
        'ONLY_FULL_GROUP_BY,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

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
    pen_name     varchar(100) not null UNIQUE,
    bio          longtext     null,
    text         longtext     null,
    date_created date         not null,
    reviewed     tinyint      not null default 0,
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
    isbn             int          null,
    date_added       date         not null,
    reviewed         tinyint      not null default 0,
    rejected         tinyint      not null default 0,
    date_updated     date         null,
    series_id        int          null,
    foreign key (series_id) references series (id)

);

create table if not exists tag
(
    id           int auto_increment
        primary key,
    name         varchar(50) not null,
    date_added   date        not null,
    reviewed     tinyint     not null default 0,
    date_updated date        null

);

create table if not exists comment
(
    id           int auto_increment
        primary key,
    comment      longtext not null,
    date_added   date     not null,
    reviewed     tinyint  not null default 0,
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
    reviewed     tinyint     not null default 0,
    date_updated date        null
);

create table if not exists keyword
(
    id           int auto_increment
        primary key,
    name         varchar(20) not null,
    date_added   date        not null,
    reviewed     tinyint     not null default 0,
    date_updated date        null
);

create table if not exists link
(
    id           int auto_increment
        primary key,
    name         varchar(20)  not null,
    link         varchar(100) not null,
    date_added   date         not null,
    reviewed     tinyint      not null default 0,
    date_updated date         null,
    book_id      int          not null,
    FOREIGN KEY (book_id) references book (id)
);

create table if not exists series
(
    id           int auto_increment
        primary key,
    name         varchar(100) not null,
    date_added   date         not null,
    reviewed     tinyint      not null default 0,
    date_updated date         null
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
    reviewed     tinyint     not null default 0,
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
    id              int auto_increment primary key,
    role            varchar(20)  not null,
    first_name      varchar(20)  not null,
    last_name       varchar(20)  not null,
    tag             varchar(20)  not null UNIQUE,
    email           varchar(200)  not null,
    password        varchar(200) not null,
    active          tinyint(1)   not null,
    date_added      date         not null,
    date_updated    date         null,
    subscription_id int          not null default 1,
    -- subscription_id int          not null,
    FOREIGN KEY (subscription_id) REFERENCES subscription (id)
);

create table if not exists user_profile
(
    id                     int auto_increment primary key,
    user_id                int not null,
    preference_vector      varchar(1024) null,
    recommendation_score   double null,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
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
    FOREIGN KEY (author_id) REFERENCES author (id),
    FOREIGN KEY (user_id) REFERENCES user (id)
);

CREATE TABLE book_has_tag
(
    book_id INT,
    tag_id  INT,
    PRIMARY KEY (book_id, tag_id),
    FOREIGN KEY (book_id) REFERENCES book (id),
    FOREIGN KEY (tag_id) REFERENCES tag (id)
);

CREATE TABLE genre_has_sub_genre
(
    genre_id     INT,
    sub_genre_id INT,
    PRIMARY KEY (genre_id, sub_genre_id),
    FOREIGN KEY (genre_id) REFERENCES genre (id),
    FOREIGN KEY (sub_genre_id) REFERENCES sub_genre (id)
);

CREATE TABLE user_has_genre
(
    user_id  INT,
    genre_id INT,
    PRIMARY KEY (user_id, genre_id),
    FOREIGN KEY (user_id) REFERENCES user (id),
    FOREIGN KEY (genre_id) REFERENCES genre (id)
);

CREATE TABLE user_has_sub_genre
(
    user_id      INT,
    sub_genre_id INT,
    PRIMARY KEY (user_id, sub_genre_id),
    FOREIGN KEY (user_id) REFERENCES user (id),
    FOREIGN KEY (sub_genre_id) REFERENCES sub_genre (id)
);

CREATE TABLE user_has_keyword
(
    user_id    INT,
    keyword_id INT,
    PRIMARY KEY (user_id, keyword_id),
    FOREIGN KEY (user_id) REFERENCES user (id),
    FOREIGN KEY (keyword_id) REFERENCES keyword (id)
);

-- -----------------------------------------------------
-- INSERTS
-- -----------------------------------------------------

insert into user (id, role, first_name, last_name, tag, email, password, active, date_added, date_updated,
                  subscription_id)
Values (1, 'Admin', 'Tiarra', 'Blandin', '@tiarra', 'tiarra.blandin@gmail.com',
        '$2b$10$k0LWgoJxJlEFPizIi3OJIu/dgnQqNDD3rsKdhkx/cJ1FwSR5wVZXO', 1, NOW(),
        '2024-03-15', 1);

insert into user (id, role, first_name, last_name, tag, email, password, active, date_added, date_updated,
                  subscription_id)
Values (2, 'Admin', 'Matthew', 'Tilley', '@matt', 'matthew.tilley77@gmail.com',
        '$2b$10$6P3YaIeyd5FN0KAnk5Wd9u.IopnLe0P5vvXrVeW3OCwVL.7Tkei1m', 1, NOW(),
        '2024-03-15', 1);

insert into user (id, role, first_name, last_name, tag, email, password, active, date_added, date_updated,
                  subscription_id)
Values (3, 'Admin', 'Jonathan', 'Dominguez', '@jondom', 'jonathanadominguez@gmail.com',
        '$2b$10$RrN6OgEk09x6nvtLPOcT7e6QYRnwBYQl/kz8KhCRELlztMkbN2twq', 1, NOW(),
        '2024-03-15', 1);

insert into user (id, role, first_name, last_name, tag, email, password, active, date_added, date_updated,
                  subscription_id)
Values (4, 'Admin', 'William', 'Slaunwhite', '@will', 'williamslaunwhite@gmail.com',
        '$2a$12$.aXI64OEVlXoGf8fNHOlhef6SFgQzI4bqn2unNELnfIWTPwJj.zR6', 1, NOW(), '2024-03-15', 1);

insert into subscription (id, level, paid, date_added, date_updated)
values (1, 'Master', 0, now(), '2024-03-15');

insert into subscription (id, level, paid, date_added, date_updated)
values (2, 'Admin I', 0, now(), '2024-03-15');

insert into subscription (id, level, paid, date_added, date_updated)
values (3, 'Admin II', 0, now(), '2024-03-15');

insert into subscription (id, level, paid, date_added, date_updated)
values (4, 'Admin III', 0, now(), '2024-03-15');

insert into subscription (id, level, paid, date_added, date_updated)
values (5, 'Employee', 0, now(), '2024-03-15');

insert into subscription (id, level, paid, date_added, date_updated)
values (6, 'Basic Reader', 0, now(), '2024-03-15');

insert into subscription (id, level, paid, date_added, date_updated)
values (7, 'Bookworm', 1, now(), '2024-03-15');

insert into subscription (id, level, paid, date_added, date_updated)
values (8, 'Bibliophile', 1, now(), '2024-03-15');

insert into subscription (id, level, paid, date_added, date_updated)
values (9, 'Scribe', 0, now(), '2024-03-15');

insert into subscription (id, level, paid, date_added, date_updated)
values (10, 'Wordsmith', 1, now(), '2024-03-15');

insert into subscription (id, level, paid, date_added, date_updated)
values (11, 'Literary Luminary', 1, now(), '2024-03-15');

insert into subscription (id, level, paid, date_added, date_updated)
values (12, 'Complimentary Reader', 0, now(), '2024-03-15');

insert into subscription (id, level, paid, date_added, date_updated)
values (13, 'Complimentary Author', 0, now(), '2024-03-15');

insert into author (id, photo, pen_name, bio, text, date_created, reviewed, date_updated, user_id)
VALUES (1, null, 'Tiarra Refosco', 'Hello, I write books.', 'Announcements', now(), 1, '2024-03-15', 1);

insert into author (id, photo, pen_name, bio, text, date_created, reviewed, date_updated, user_id)
VALUES (2, null, 'Matthew Blackmore', 'Hello, I write books.', 'Announcements', now(), 1, '2024-03-15', 2);

insert into author (id, photo, pen_name, bio, text, date_created, reviewed, date_updated, user_id)
VALUES (3, null, 'Jonathan Dominguez', 'Hello, I write books.', 'Announcements', now(), 1, '2024-03-15', 3);

insert into author (id, photo, pen_name, bio, text, date_created, reviewed, date_updated, user_id)
VALUES (4, null, 'Amarah Calderini', '', '', now(), 1, '2024-03-15', null);

insert into author (id, photo, pen_name, bio, text, date_created, reviewed, date_updated, user_id)
VALUES (5, null, 'S.E. Babin', '', '', now(), 1, '2024-03-15', null);

insert into book (id, cover, title, description, page_count, publication_date, date_added, reviewed, rejected,
                  date_updated,
                  series_id)
VALUES (1, 'https://i.imgur.com/12J19sh.jpg', 'The Time of Tears',
        'Carnegie Sanders is a typical 19-year-old. He goes to college, he lives at home and in a dorm, has a crush on a girl he went to high school with, and has no idea what to do with his life. Life is normal. Then hydrogen bombs decimate the globe, and robed beings start wiping out everyone else lucky enough to live in rural America. In his small town in southern Arizona, Carnegie realizes survival is more than chance. Running on instinct, Erin, Santana, and Carnegie find the decimation of their people to be the beginning of change and tragedy never witnessed in history. As the world resets, Carnegie, Erin, and Santana face odds that would consume them, if not for new relationships forged. Creatures from fantastic stories lost in time and translation seek to keep humanity in check as Carnegie seeks a place to call home, a place to be safe. No one is safe as sinister forces work behind the veil of secrecy, and everyone in Carnegie’s new circle will experience turmoil. Lost in the new races of lore calling themselves the Nine, Carnegie is thrust into becoming someone he isn’t ready to be for those who rely on him. Set in the dynamic landscape of the American Southwest, and from deserts to mountains and even under the earth itself, no where is safe. Fighting for survival is just the beginning. Nothing has prepared them for this time. A time of confusion. A time of loss. And a time of tears.',
        324, '2019-02-26', now(), 1, 0, '2024-03-15', 1);

insert into book (id, cover, title, description, page_count, publication_date, date_added, reviewed, rejected,
                  date_updated,
                  series_id)
VALUES (2, 'https://i.imgur.com/RMSohKY.jpg', 'The Fall of the Nine',
        'Set along the Colorado Rockies, The Fall of the Nine continues the struggle of Carnegie, Erin, and Santana as they continue their fight in a post-apocalyptic world. On the mend after their encounter, Carnegie and his friends start their journey from the outskirts of Denver and discover that the true evil is just awakening. As tensions escalate, Carnegie makes a choice that he will pay for in blood. Entering the post-bomb city, the Gnomes and other species of the Nine that have taken the Human world for their own continue to show the surviving humans that the Old World is gone, and it will never be the same again. With the arrival of the rulers of each race, Cheradyn’s identity is threatened and she must face demons of her own past to become the Faerie the New World needs her to be. As the world continues to reset, the Princess learns that she must protect the ones who have been there for her. Moving in the shadows, Nicholas contends with the darkness inside him and the greater evil comes to the foreground, inciting other dark beings to the anarchic tendencies they have always hoped would be unleashed. Somewhere in Texas, a young businessman fights the post-apocalyptic southwest, his companions, and a mysterious power inside him that threatens to tear him apart. Darkness is on the move as ancient secrets are revealed, but hope still finds a small place in the creeping void. Hope, however, is in short supply for the Nine. The true evil is revealed. He has planned this for centuries. The Nine are not prepared.',
        428, '2019-07-03', now(), 1, 0, '2024-03-15', 1);

insert into book (id, cover, title, description, page_count, publication_date, date_added, reviewed, rejected,
                  date_updated,
                  series_id)
VALUES (3, 'https://i.imgur.com/8AuJTCq.jpg', 'Tales of the Nine',
        'From Arizona to Massachusetts, to the Caribbean and deep under the earth in prisons so dark, only evil can grow, the world of the Nine is revealed. In seventeen short stories we explore some of the origin stories through first-hand accounts as mysteries are both solved and revealed. With many characters, new and known, the Nine and their true threat, their cataclysm from a lost history, is offered in a different medium. The Time of Tears: Tales of the Nine deepens the lore through time: past, present, and future, preparing our heroes for the last battle for survival all of them must face. Questions are answered. The cataclysm is unleashed in The Tales of the Nine.',
        148, '2019-08-17', now(), 1, 0, '2024-03-15', 1);

insert into book (id, cover, title, description, page_count, publication_date, date_added, reviewed, rejected,
                  date_updated,
                  series_id)
values (4, 'https://i.imgur.com/jBrsMog.jpg', 'Tide of Darkness (Dark World Trilogy Book 1)',
        'They say the land flourished once, ripe with wealth and blessed by nature, but those are only stories. There is no light now—there is only the Darkness. Mirren has grown up hearing tales of the Dark World from the safety of Similis, a utopian society with no poverty, no violence and no choices. Rumors of the horrors that writhe in the darkness keep anyone from venturing further than the Boundary, but when a mysterious illness befalls her brother, Mirren is desperate to save him—desperate enough to cross into the wild land to find the cure he needs to survive. Raised beyond the Boundary, Shaw has only ever known violence. With no laws to inhibit the cruel reign of warlords and a curse that keeps the land on the edge of starvation, he understands the only way to survive is by being more ruthless than everyone else. When he finds a panicked woman escaping Similis, he realizes he’s been granted a rare gift of fate: a way to get back what was stolen from him. Infuriatingly enchanting and not at all what he expected, Mirren challenges Shaw at every turn. But the pair soon discover their greatest fight may not lie with each other. A prophecy has been unearthed, and if it speaks the truth, one of them may be the key to breaking the curse. But light is a dangerous thing to wield in a land ruled by the dark. Together, they must decide if love and freedom are worth the cost. Tide of Darkness is a New Adult fantasy romance and is intended to be enjoyed by mature audiences. It contains mature themes, sexual content, violence, gore and references to abuse. For a full list of trigger warnings, please visit the author''s social media or website.',
        495, '2022-08-30', now(), 1, 0, '2024-03-15', 2);

insert into book (id, cover, title, description, page_count, publication_date, date_added, reviewed, rejected,
                  date_updated,
                  series_id)
values (5, 'https://i.imgur.com/DXoYn3a.jpg', 'Flame of Shadow (Dark World Trilogy Book 2)',
        'All Mirren ever wanted was to save her brother, though now that she’s seen the horror and beauty of the Dark World, Similis feels more suffocating than ever. Her heart broken and her power now stifled, she vows to live an ordinary life, but when the Boundary is breached and the lights that have shone for a thousand years begin to flicker, she knows must protect her home from the growing threat of the Praeceptor. Even if it means leaving behind the brother she sacrificed everything for. Because the warlord has brought destruction to their gates, and if Mirren doesn’t decipher the remainder of the Dead Prophecy, both Ferusa and Similis will fall to the Darkness. And it isn’t just the Praeceptor who seeks to stop her. Leading his father’s reign of terror is the newly returned heir. Soulless, cruel, and set on vengeance, Shaw will stop at nothing to get what he wants—including destroying the woman he once loved. To thwart Shaw and save Ferusa, Mirren will have to find the depths of her power and push herself to the edge of her humanity. She must decide once and for all, where the line between dark and light lies. Because the Darkness demands souls, and it is coming for hers. Flame of Shadow is the second book in the Dark World Trilogy and is a dark fantasy romance intended for audiences 18+ as it contains graphic violence and sexual content. For a full list of trigger warnings, please see the author''s social media.',
        498, '2022-12-06', now(), 1, 0, '2024-03-15', 2);

insert into book (id, cover, title, description, page_count, publication_date, date_added, reviewed, rejected,
                  date_updated,
                  series_id)
values (6, 'https://i.imgur.com/byF0ZAf.jpg', 'Wave of Light (Dark World Trilogy Book 3)',
        'The Darkness changes all those it touches... Mirren has learned from her time in Ferusa that light cannot exist without the dark, nor beauty without pain. She has bled and fought, given everything she has to protect those she loves, and still, the Darkness demands more. With the return of nature magic and the rise of an ancient evil, the Dead Prophecy is the only way to restore balance to the land--but Mirren fears the price may be too high to pay. In the thrilling conclusion to the epic fantasy trilogy, loyalties will be tested... Souls will be shattered... And sacrifices will be made, as the Darkness rises for its final calling. Wave of Light is a new adult fantasy intended to be enjoyed by mature audiences. It contains mature themes, sexual content, violence, gore and references to abuse. For a full list of trigger warnings, please visit the author''s website.',
        583, '2023-11-14', now(), 1, 0, '2024-03-15', 2);

insert into book (id, cover, title, description, page_count, publication_date, date_added, reviewed, rejected,
                  date_updated,
                  series_id)
values (7, 'https://i.imgur.com/olTZZRa.jpg', 'A Twist of Demon (Cocktails in Hell Book 1)',
        'Want longer hair, whiter teeth, a smaller nose? Violet has a potion for that. Want to hex an enemy, make someone fall in love with you, or curse someone? Well…that will cost you. By day, Violet is a supposed charlatan running a potion shop in New Orleans and catering to drunk tourists who want to take a walk on the wild side. By night, she’s a Potion Master, a rare, magical being whose shop straddles the portal to Earth and Hell, slinging potions to magical beasts who only come out at night. She’s also the protector of both, a neutral being who carefully navigates the Accords between oblivious humans and the creatures who wouldn’t mind snacking on them. Unfortunately for both sides, Violet is terrible at her job. After the last Potion Master dies a horrible death and she’s pulled out of anonymity by a handsome and super annoying demon, Violet’s shop transforms and she’s thrust into unwanted instafame. And not the good kind, either. Suddenly, everyone either wants to date her, or they want to kill her. And, honestly? Violet isn’t sure which one is easier anymore.',
        186, '2023-04-06', now(), 1, 0, '2024-03-15', 3);

insert into book (id, cover, title, description, page_count, publication_date, date_added, reviewed, rejected,
                  date_updated,
                  series_id)
values (8, 'https://i.imgur.com/YlbhAYq.jpg', 'A Shake of Succubus (Cocktails in Hell Book 2)',
        'Violet is the newest Potionsmaster, Guardian of the Hell Gates, and Lucifer has his eye on her… With her life a weird mess right now, Violet has no one to turn to. Az is still in hiding, and she’s never been able to trust Max. Lucifer has offered a shoulder, but Violet knows better than to trust the original Serpent and her brand spanking new employer. Doesn’t she? As the hunt for the creature who escaped the boundaries continues, more Potionsmasters meet their ends. But when someone she definitely shouldn''t trust offers her a cryptic clue, Violet has to decide if her life is worth the truth. Can she endanger everyone she loves and the entire world to save her own hide? Or will she make the ultimate sacrifice and take her secret to the grave?',
        210, '2023-07-26', now(), 1, 0, '2024-03-15', 3);

insert into book (id, cover, title, description, page_count, publication_date, date_added, reviewed, rejected,
                  date_updated,
                  series_id)
values (9, 'https://i.imgur.com/2sN0YIR.jpg', 'A Stir of Fairies (Cocktails in Hell Book 3)',
        'Violet''s secret is out. Now comes the fun part… It''s time to train. With Violet''s identity revealed to her closest allies, the time has come for her to embrace who she is. But who is she anyway? Witch? Angel? Demon? None of the above? Meanwhile, Daddy Dearest is busy gathering a powerful force to stage a coup in Heaven, while Violet and the crew have to harness her powers and teach her to use them before he succeeds. Between slinging drinks for Hell''s finest, training for a potential world-ending war, and trying to figure out why the new brooding bar guest keeps giving her funny looks, Violet has her hands full. And then came the dragons... Unfortunately, Violet ain''t seen nothing yet.',
        203, '2023-10-10', now(), 1, 0, '2024-03-15', 3);

insert into book (id, cover, title, description, page_count, publication_date, date_added, reviewed, rejected,
                  date_updated,
                  series_id)
values (10, 'https://i.imgur.com/SuPhH2m.jpg', 'A Dash of Vampire (Cocktails in Hell Book 4)',
        'What happens when you accidentally kidnap a Fae King, invite a demented vampire queen to bunk with you, and enlist both to plot revenge against the dragons? Violet doesn''t know yet, but she''s about to find out. Her little jaunt to the fae lands ended with Violet carrying more luggage out than she brought in. Now, with a ticked off Unseelie King brooding and tied up in the corner, she has to figure out how to smooth relations while also deciphering Michael''s newest plans. Toss in a sullen traitor, an emotional fairy, and a human(ish?) law enforcement officer sniffing around, and Violet''s juggling more balls than she knows what to do with. As if that''s not bad enough, Violet receives one final visitor to her bar the night before she visits the dragons, and this one is a real doozy… Welcome to Swan''s, where the creatures are weird, the drinks are potent, and the antics are completely unhinged.',
        219, '2023-12-19', now(), 1, 0, '2024-03-15', 3);

insert into book (id, cover, title, description, page_count, publication_date, date_added, reviewed, rejected,
                  date_updated,
                  series_id)
values (11, 'https://i.imgur.com/Qdz9MBc.jpg', 'A Touch of Angel (Cocktails in Hell Book 5)',
        'When an accidental meeting results in an unlikely alliance, Violet discovers earth-shattering secrets… Sounds like a Tuesday to her. Lucifer''s efforts to secure the angel''s cooperation are proving unsuccessful until a chance meeting ends with an invitation to attend a forum. There''s only one caveat. Violet''s presence is required, and she must offer a demonstration of her powers. Lucifer is against it. Clara wants to destroy them all. Dave is…Dave. And the enigmatic ruler of the dragons doesn''t care about any of it. He''s chosen to pursue Violet with a single-minded focus. But whether he wants her for her or her powers remains unknown. Violet has to decide soon whether she''s ready to face the world and claim her heritage. But what she doesn''t realize is her heritage isn''t straightforward at all, and the choice she has to make could bring the entire world to its knees.',
        228, '2024-03-05', now(), 1, 0, '2024-03-15', 3);

insert into genre (id, name, date_added, reviewed, date_updated)
VALUES (1, 'Fantasy', now(), 1, '2024-03-15');

insert into genre (id, name, date_added, reviewed, date_updated)
VALUES (2, 'Fiction', now(), 1, '2024-03-15');

insert into genre (id, name, date_added, reviewed, date_updated)
VALUES (3, 'Non-fiction', now(), 1, '2024-03-15');

insert into genre (id, name, date_added, reviewed, date_updated)
VALUES (5, 'Science fiction', now(), 1, '2024-03-15');

insert into genre (id, name, date_added, reviewed, date_updated)
VALUES (6, 'Mystery', now(), 1, '2024-03-15');

insert into genre (id, name, date_added, reviewed, date_updated)
VALUES (7, 'Historical fiction', now(), 1, '2024-03-15');

insert into genre (id, name, date_added, reviewed, date_updated)
VALUES (8, 'Horror', now(), 1, '2024-03-15');

insert into genre (id, name, date_added, reviewed, date_updated)
VALUES (9, 'Romance', now(), 1, '2024-03-15');

insert into genre (id, name, date_added, reviewed, date_updated)
VALUES (10, 'Thriller', now(), 1, '2024-03-15');

insert into genre (id, name, date_added, reviewed, date_updated)
VALUES (11, 'Autobiography', now(), 1, '2024-03-15');

insert into genre (id, name, date_added, reviewed, date_updated)
VALUES (12, 'Young Adult', now(), 1, '2024-03-15');

insert into genre (id, name, date_added, reviewed, date_updated)
VALUES (13, 'Adventure', now(), 1, '2024-03-15');

insert into genre (id, name, date_added, reviewed, date_updated)
VALUES (14, 'Dystopian', now(), 1, '2024-03-15');

insert into genre (id, name, date_added, reviewed, date_updated)
VALUES (15, 'Contemporary fiction', now(), 1, '2024-03-15');

insert into genre (id, name, date_added, reviewed, date_updated)
VALUES (16, 'Literary fiction', now(), 1, '2024-03-15');

insert into genre (id, name, date_added, reviewed, date_updated)
VALUES (17, 'Historical', now(), 1, '2024-03-15');

insert into genre (id, name, date_added, reviewed, date_updated)
VALUES (18, 'Graphic novel', now(), 1, '2024-03-15');

insert into genre (id, name, date_added, reviewed, date_updated)
VALUES (20, 'Short story', now(), 1, '2024-03-15');

insert into genre (id, name, date_added, reviewed, date_updated)
VALUES (21, 'Biography', now(), 1, '2024-03-15');

insert into genre (id, name, date_added, reviewed, date_updated)
VALUES (22, 'Classics', now(), 1, '2024-03-15');

insert into genre (id, name, date_added, reviewed, date_updated)
VALUES (25, 'Western fiction', now(), 1, '2024-03-15');

insert into genre (id, name, date_added, reviewed, date_updated)
VALUES (26, 'Comedy', now(), 1, '2024-03-15');

insert into sub_genre (id, name, date_added, reviewed, date_updated)
VALUES (1, 'Dark fantasy', now(), 1, '2024-03-15');

insert into sub_genre (id, name, date_added, reviewed, date_updated)
VALUES (2, 'High fantasy', now(), 1, '2024-03-15');

insert into sub_genre (id, name, date_added, reviewed, date_updated)
VALUES (3, 'Low fantasy', now(), 1, '2024-03-15');

insert into sub_genre (id, name, date_added, reviewed, date_updated)
VALUES (4, 'Erotica', now(), 1, '2024-03-15');

insert into sub_genre (id, name, date_added, reviewed, date_updated)
VALUES (5, 'Gothic fiction', now(), 1, '2024-03-15');

insert into sub_genre (id, name, date_added, reviewed, date_updated)
VALUES (6, 'Fairy tale', now(), 1, '2024-03-15');

insert into sub_genre (id, name, date_added, reviewed, date_updated)
VALUES (7, 'Crime', now(), 1, '2024-03-15');

insert into sub_genre (id, name, date_added, reviewed, date_updated)
VALUES (9, 'Action', now(), 1, '2024-03-15');

insert into sub_genre (id, name, date_added, reviewed, date_updated)
VALUES (10, 'Supernatural', now(), 1, '2024-03-15');

insert into sub_genre (id, name, date_added, reviewed, date_updated)
VALUES (11, 'Urban-fantasy', now(), 1, '2024-03-15');

insert into sub_genre (id, name, date_added, reviewed, date_updated)
VALUES (12, 'Paranormal romance', now(), 1, '2024-03-15');

insert into sub_genre (id, name, date_added, reviewed, date_updated)
VALUES (13, 'Paranormal', now(), 1, '2024-03-15');

insert into sub_genre (id, name, date_added, reviewed, date_updated)
VALUES (14, 'Post apocalyptic', now(), 1, '2024-03-15');

insert into sub_genre (id, name, date_added, reviewed, date_updated)
VALUES (15, 'Magical realism', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (1, 'Fairy', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (2, 'Faerie', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (3, 'Fey', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (4, 'Fae', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (5, 'Shifters', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (6, 'Vampires', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (7, 'Dragons', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (8, 'Hell', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (9, 'Underworld', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (10, 'Magic', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (11, 'Mages', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (12, 'Magical artifacts', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (13, 'Griffins', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (14, 'Magical creatures', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (15, 'Werewolves', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (16, 'Alpha', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (17, 'Omega', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (18, 'Mermaids', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (19, 'Sirens', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (20, 'Witches', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (21, 'Ghosts', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (22, 'Elves', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (23, 'Orcs', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (24, 'Myths', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (25, 'Legends', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (26, 'Folklore', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (27, 'Swords', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (28, 'Dwarves', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (29, 'Gargoyles', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (30, 'Gods', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (31, 'Trolls', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (32, 'Goblins', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (33, 'Parallel worlds', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (34, 'Realms', now(), 1, '2024-03-15');

insert into keyword (id, name, date_added, reviewed, date_updated)
VALUES (35, 'Reverse Harem', now(), 1, '2024-03-15');

insert into tag (id, name, date_added, reviewed, date_updated)
VALUES (1, 'time travel', now(), 1, '2024-03-15');

insert into tag (id, name, date_added, reviewed, date_updated)
VALUES (2, 'badass heroine', now(), 1, '2024-03-15');

insert into tag (id, name, date_added, reviewed, date_updated)
VALUES (3, 'snarky', now(), 1, '2024-03-15');

insert into tag (id, name, date_added, reviewed, date_updated)
VALUES (4, 'omega verse', now(), 1, '2024-03-15');

insert into tag (id, name, date_added, reviewed, date_updated)
VALUES (5, 'why choose', now(), 1, '2024-03-15');

insert into tag (id, name, date_added, reviewed, date_updated)
VALUES (6, 'emotional journey', now(), 1, '2024-03-15');

insert into tag (id, name, date_added, reviewed, date_updated)
VALUES (7, 'survival', now(), 1, '2024-03-15');

insert into comment (id, comment, date_added, reviewed, date_updated, user_id, book_id)
VALUES (1, 'Love, love, love this series. Kept me hooked from the first book. Can''t wait for the next!', now(), 1,
        '2024-03-15', 1, 11);

insert into comment (id, comment, date_added, reviewed, date_updated, user_id, book_id)
VALUES (2, 'Love this series. Can''t wait for the next!', now(), 1, '2024-03-15', 1, 3);

insert into link (id, name, link, date_added, reviewed, date_updated, book_id)
VALUES (1, 'Amazon', 'https://www.amazon.com/Time-Tears-Jonathan-Dominguez-ebook/dp/B07NPB1MZF?ref_=ast_author_dp',
        now(), 1, '2024-03-15', 1);

insert into link (id, name, link, date_added, reviewed, date_updated, book_id)
VALUES (2, 'Amazon',
        'https://www.amazon.com/Fall-Nine-Time-Tears-Book-ebook/dp/B07TXTCCTS/ref=pd_sim_d_sccl_1_1/145-2918424-1001007?pd_rd_w=ZzwD9&content-id=amzn1.sym.552090e4-055d-4721-9dec-3ab260a2aa3f&pf_rd_p=552090e4-055d-4721-9dec-3ab260a2aa3f&pf_rd_r=0AN321WWVDQ565S9GQVV&pd_rd_wg=gW5fz&pd_rd_r=f51dff04-019e-44d3-9118-d65f313c9392&pd_rd_i=B07TXTCCTS&psc=1',
        now(), 1, '2024-03-15', 2);

insert into link (id, name, link, date_added, reviewed, date_updated, book_id)
VALUES (3, 'Amazon',
        'https://www.amazon.com/Time-Tears-Tales-Nine-ebook/dp/B07WHBMV68/ref=sr_1_4?crid=8LNLOLIIK18E&dib=eyJ2IjoiMSJ9.qPyow9TvGkEuefRPALtZbsNSA6iBwDRp-ODR8LwsaleQsG787JAvkRN4rATK8VyiX-bexo1c-k_jf06dz4W9ELBTr31E-uJ5jZ9RLweZ1TgY5VPXsxobpe2SutmezGUJvxBzSn9_f0FCvE25_gTbNSV6mxql_isPIqMryTLbsY5cZcImpAEuvKpGTZUTzJRePuPnnsoDF9Ef9xUeOX2nC-4CWMCTrIE4zpWEexPUTA8.a83eAtLULGRZlFbcsiziAjBMHGgR3tLG9Zsrt4KWINc&dib_tag=se&keywords=the+time+of+tears&qid=1710534296&sprefix=the+time+of+tears%2Caps%2C217&sr=8-4',
        now(), 1, '2024-03-15', 3);

insert into link (id, name, link, date_added, reviewed, date_updated, book_id)
VALUES (4, 'Amazon',
        'https://www.amazon.com/Tide-Darkness-Dark-World-Trilogy-ebook/dp/B0B8QT9FCB/ref=sr_1_1?crid=3MNWNKJBGHYLR&dib=eyJ2IjoiMSJ9.8Sx8hokIBRRs2tq0gtarYpe4tGzcUC1748I3wzGFkhHGjHj071QN20LucGBJIEps.8mE-d2cVr8KYhEVtOkLqTh6llCgoWGjgyvbpGHLbFIk&dib_tag=se&keywords=amarah+calderini&qid=1710534945&s=digital-text&sprefix=amarah+calderini%2Cdigital-text%2C296&sr=1-1',
        now(), 1, '2024-03-15', 4);

insert into link (id, name, link, date_added, reviewed, date_updated, book_id)
VALUES (5, 'Amazon',
        'https://www.amazon.com/dp/B0BH9J3ZZ7/ref=mes-dp?_encoding=UTF8&pd_rd_w=nLjEM&content-id=amzn1.sym.07f68587-1ea8-46cf-8c0c-8374d8d96b4a&pf_rd_p=07f68587-1ea8-46cf-8c0c-8374d8d96b4a&pf_rd_r=GN9SAC31VSWRT17M50TQ&pd_rd_wg=SQuwg&pd_rd_r=a2dbbede-d713-4a3d-ace2-4310177b46d4',
        now(), 1, '2024-03-15', 5);

insert into link (id, name, link, date_added, reviewed, date_updated, book_id)
VALUES (6, 'Amazon',
        'https://www.amazon.com/dp/B0CHLKTM4S/ref=mes-dp?_encoding=UTF8&pd_rd_w=3E2oz&content-id=amzn1.sym.07f68587-1ea8-46cf-8c0c-8374d8d96b4a&pf_rd_p=07f68587-1ea8-46cf-8c0c-8374d8d96b4a&pf_rd_r=ZYMJHZ31MNE01T1WBEYQ&pd_rd_wg=MSa5V&pd_rd_r=dd11ed30-4e0e-4ca9-a40b-7843c5cf1570',
        now(), 1, '2024-03-15', 6);

insert into link (id, name, link, date_added, reviewed, date_updated, book_id)
VALUES (7, 'Amazon',
        'https://www.amazon.com/gp/product/B0BLJ8CYR4?ref_=dbs_m_mng_rwt_calw_tkin_0&storeType=ebooks&qid=1710535110&sr=1-4',
        now(), 1, '2024-03-15', 7);

insert into link (id, name, link, date_added, reviewed, date_updated, book_id)
VALUES (8, 'Amazon',
        'https://www.amazon.com/dp/B0C1R9G49T/ref=mes-dp?_encoding=UTF8&pd_rd_w=SG11z&content-id=amzn1.sym.07f68587-1ea8-46cf-8c0c-8374d8d96b4a&pf_rd_p=07f68587-1ea8-46cf-8c0c-8374d8d96b4a&pf_rd_r=3YXSDX5C8ZC0W9V27N8Z&pd_rd_wg=qNkxm&pd_rd_r=39fcf9b2-d7df-48b0-b6ad-7d78687b99a7',
        now(), 1, '2024-03-15', 8);

insert into link (id, name, link, date_added, reviewed, date_updated, book_id)
VALUES (9, 'Amazon', 'https://www.amazon.com/gp/product/B0CGP3VQXQ?ref_=dbs_p_pwh_rwt_anx_cl_1&storeType=ebooks',
        now(), 1, '2024-03-15', 9);

insert into link (id, name, link, date_added, reviewed, date_updated, book_id)
VALUES (10, 'Amazon',
        'https://www.amazon.com/dp/B0CNL3NRQS/ref=mes-dp?_encoding=UTF8&pd_rd_w=ZxNR9&content-id=amzn1.sym.07f68587-1ea8-46cf-8c0c-8374d8d96b4a&pf_rd_p=07f68587-1ea8-46cf-8c0c-8374d8d96b4a&pf_rd_r=Z9BXR3D8HYHQKMXRWCHH&pd_rd_wg=lPGcA&pd_rd_r=ff16c674-1f67-4295-a2e0-e572f94c4686',
        now(), 1, '2024-03-15', 10);

insert into link (id, name, link, date_added, reviewed, date_updated, book_id)
VALUES (11, 'Amazon',
        'https://www.amazon.com/dp/B0CQZ718TG/ref=mes-dp?_encoding=UTF8&pd_rd_w=tfPGg&content-id=amzn1.sym.07f68587-1ea8-46cf-8c0c-8374d8d96b4a&pf_rd_p=07f68587-1ea8-46cf-8c0c-8374d8d96b4a&pf_rd_r=YXK3WGDK1XC7EP8TBWRZ&pd_rd_wg=UJl4c&pd_rd_r=7c8019a4-d043-455a-8f1d-9ce223b75ee6',
        now(), 1, '2024-03-15', 11);

insert into series (id, name, date_added, reviewed, date_updated)
VALUES (1, 'The Time of Tears', now(), 1, '2024-03-15');

insert into series (id, name, date_added, reviewed, date_updated)
VALUES (2, 'Dark World Trilogy', now(), 1, '2024-03-15');

insert into series (id, name, date_added, reviewed, date_updated)
VALUES (3, 'Cocktails in Hell', now(), 1, '2024-03-15');

insert into social_media (id, name, link, date_added, date_updated, author_id)
VALUES (1, 'Website', 'www.amarahcalderini.com', now(), '2024-03-15', 4);

insert into social_media (id, name, link, date_added, date_updated, author_id)
VALUES (2, 'Facebook', 'https://www.facebook.com/authoramarahcalderini', now(), '2024-03-15', 4);

insert into social_media (id, name, link, date_added, date_updated, author_id)
VALUES (3, 'Goodreads', 'https://www.goodreads.com/author/show/22748634.Amarah_Calderini', now(), '2024-03-15', 4);

insert into social_media (id, name, link, date_added, date_updated, author_id)
VALUES (4, 'Instagram', 'https://www.instagram.com/amarahcalderiniauthor', now(), '2024-03-15', 4);

insert into social_media (id, name, link, date_added, date_updated, author_id)
VALUES (5, 'TikTok', 'http://tiktok.com/amarahcalderiniauthor', now(), '2024-03-15', 4);

insert into social_media (id, name, link, date_added, date_updated, author_id)
VALUES (6, 'Amazon',
        'https://www.amazon.com/stores/Amarah-Calderini/author/B0B8T8XMRQ?ref=lp_11764651011_1_11&isDramIntegrated=true&shoppingPortalEnabled=true',
        now(), '2024-03-15', 4);

insert into author_has_book (author_id, book_id)
VALUES (3, 1);

insert into author_has_book (author_id, book_id)
VALUES (3, 2);

insert into author_has_book (author_id, book_id)
VALUES (3, 3);

insert into author_has_book (author_id, book_id)
VALUES (4, 4);

insert into author_has_book (author_id, book_id)
VALUES (4, 5);

insert into author_has_book (author_id, book_id)
VALUES (4, 6);

insert into author_has_book (author_id, book_id)
VALUES (5, 7);

insert into author_has_book (author_id, book_id)
VALUES (5, 8);

insert into author_has_book (author_id, book_id)
VALUES (5, 9);

insert into author_has_book (author_id, book_id)
VALUES (4, 10);

insert into author_has_book (author_id, book_id)
VALUES (5, 11);

insert into author_has_series (author_id, series_id)
VALUES (3, 1);

insert into author_has_series (author_id, series_id)
VALUES (4, 2);

insert into author_has_series (author_id, series_id)
VALUES (5, 3);

insert into user_follows_author (author_id, user_id)
VALUES (1, 2);

insert into user_follows_author (author_id, user_id)
VALUES (1, 3);

insert into user_follows_author (author_id, user_id)
VALUES (1, 4);

insert into user_follows_author (author_id, user_id)
VALUES (1, 5);

insert into series_interactions (series_id, user_id, interested, favorite, in_progress)
VALUES (3, 1, 0, 1, 1);

insert into book_interactions (book_id, user_id, has_read, interested, favorite, like_dislike)
VALUES (1, 1, 1, 0, 0, 1);

insert into book_interactions (book_id, user_id, has_read, interested, favorite, like_dislike)
VALUES (2, 1, 1, 0, 0, 1);

insert into book_interactions (book_id, user_id, has_read, interested, favorite, like_dislike)
VALUES (3, 1, 1, 0, 0, 1);

insert into book_interactions (book_id, user_id, has_read, interested, favorite, like_dislike)
VALUES (4, 1, 1, 0, 0, 1);

insert into book_interactions (book_id, user_id, has_read, interested, favorite, like_dislike)
VALUES (5, 1, 1, 0, 0, 1);

insert into book_interactions (book_id, user_id, has_read, interested, favorite, like_dislike)
VALUES (6, 1, 1, 0, 0, 1);

insert into book_interactions (book_id, user_id, has_read, interested, favorite, like_dislike)
VALUES (7, 1, 1, 0, 0, 1);

insert into book_interactions (book_id, user_id, has_read, interested, favorite, like_dislike)
VALUES (8, 1, 1, 0, 0, 1);

insert into book_interactions (book_id, user_id, has_read, interested, favorite, like_dislike)
VALUES (9, 1, 1, 0, 0, 1);

insert into book_interactions (book_id, user_id, has_read, interested, favorite, like_dislike)
VALUES (10, 1, 1, 0, 0, 1);

insert into book_interactions (book_id, user_id, has_read, interested, favorite, like_dislike)
VALUES (11, 1, 1, 0, 0, 1);

insert into book_has_genre (book_id, genre_id)
VALUES (1, 1);

insert into book_has_genre (book_id, genre_id)
VALUES (1, 2);

insert into book_has_genre (book_id, genre_id)
VALUES (2, 1);

insert into book_has_genre (book_id, genre_id)
VALUES (2, 2);

insert into book_has_genre (book_id, genre_id)
VALUES (3, 1);

insert into book_has_genre (book_id, genre_id)
VALUES (3, 2);

insert into book_has_genre (book_id, genre_id)
VALUES (3, 20);

insert into book_has_genre (book_id, genre_id)
VALUES (4, 1);

insert into book_has_genre (book_id, genre_id)
VALUES (4, 2);

insert into book_has_genre (book_id, genre_id)
VALUES (4, 9);

insert into book_has_genre (book_id, genre_id)
VALUES (5, 1);

insert into book_has_genre (book_id, genre_id)
VALUES (5, 2);

insert into book_has_genre (book_id, genre_id)
VALUES (5, 9);

insert into book_has_genre (book_id, genre_id)
VALUES (6, 1);

insert into book_has_genre (book_id, genre_id)
VALUES (6, 2);

insert into book_has_genre (book_id, genre_id)
VALUES (6, 9);

insert into book_has_genre (book_id, genre_id)
VALUES (7, 1);

insert into book_has_genre (book_id, genre_id)
VALUES (7, 2);

insert into book_has_genre (book_id, genre_id)
VALUES (8, 1);

insert into book_has_genre (book_id, genre_id)
VALUES (8, 2);

insert into book_has_genre (book_id, genre_id)
VALUES (9, 1);

insert into book_has_genre (book_id, genre_id)
VALUES (9, 2);

insert into book_has_genre (book_id, genre_id)
values (10, 1);

insert into book_has_genre (book_id, genre_id)
values (10, 2);

insert into book_has_genre (book_id, genre_id)
VALUES (11, 1);

insert into book_has_genre (book_id, genre_id)
VALUES (11, 2);

insert into book_has_sub_genre (book_id, sub_genre_id)
VALUES (1, 11);

insert into book_has_sub_genre (book_id, sub_genre_id)
VALUES (1, 14);

insert into book_has_sub_genre (book_id, sub_genre_id)
VALUES (2, 2);

insert into book_has_sub_genre (book_id, sub_genre_id)
VALUES (2, 14);

insert into book_has_sub_genre (book_id, sub_genre_id)
VALUES (3, 2);

insert into book_has_sub_genre (book_id, sub_genre_id)
VALUES (3, 14);

insert into book_has_sub_genre (book_id, sub_genre_id)
VALUES (3, 11);

insert into book_has_sub_genre (book_id, sub_genre_id)
VALUES (4, 1);

insert into book_has_sub_genre (book_id, sub_genre_id)
VALUES (4, 3);

insert into book_has_sub_genre (book_id, sub_genre_id)
VALUES (5, 1);

insert into book_has_sub_genre (book_id, sub_genre_id)
VALUES (5, 3);

insert into book_has_sub_genre (book_id, sub_genre_id)
VALUES (6, 1);

insert into book_has_sub_genre (book_id, sub_genre_id)
VALUES (6, 3);

insert into book_has_sub_genre (book_id, sub_genre_id)
VALUES (7, 10);

insert into book_has_sub_genre (book_id, sub_genre_id)
VALUES (7, 11);

insert into book_has_sub_genre (book_id, sub_genre_id)
VALUES (8, 10);

insert into book_has_sub_genre (book_id, sub_genre_id)
VALUES (8, 11);

insert into book_has_sub_genre (book_id, sub_genre_id)
VALUES (9, 10);

insert into book_has_sub_genre (book_id, sub_genre_id)
VALUES (9, 11);

insert into book_has_sub_genre (book_id, sub_genre_id)
VALUES (10, 10);

insert into book_has_sub_genre (book_id, sub_genre_id)
VALUES (10, 11);

insert into book_has_sub_genre (book_id, sub_genre_id)
VALUES (11, 10);

insert into book_has_sub_genre (book_id, sub_genre_id)
VALUES (11, 11);

insert into book_has_keyword (book_id, keyword_id)
VALUES (1, 10);

insert into book_has_keyword (book_id, keyword_id)
VALUES (1, 14);

insert into book_has_keyword (book_id, keyword_id)
VALUES (1, 22);

insert into book_has_keyword (book_id, keyword_id)
VALUES (2, 10);

insert into book_has_keyword (book_id, keyword_id)
VALUES (2, 14);

insert into book_has_keyword (book_id, keyword_id)
VALUES (2, 22);

insert into book_has_keyword (book_id, keyword_id)
VALUES (3, 10);

insert into book_has_keyword (book_id, keyword_id)
VALUES (3, 14);

insert into book_has_keyword (book_id, keyword_id)
VALUES (3, 22);

insert into book_has_keyword (book_id, keyword_id)
VALUES (4, 10);

insert into book_has_keyword (book_id, keyword_id)
VALUES (4, 30);

insert into book_has_keyword (book_id, keyword_id)
VALUES (5, 10);

insert into book_has_keyword (book_id, keyword_id)
VALUES (5, 30);

insert into book_has_keyword (book_id, keyword_id)
VALUES (6, 10);

insert into book_has_keyword (book_id, keyword_id)
VALUES (6, 30);

insert into book_has_keyword (book_id, keyword_id)
VALUES (7, 4);

insert into book_has_keyword (book_id, keyword_id)
VALUES (7, 5);

insert into book_has_keyword (book_id, keyword_id)
VALUES (7, 6);

insert into book_has_keyword (book_id, keyword_id)
VALUES (7, 7);

insert into book_has_keyword (book_id, keyword_id)
VALUES (7, 8);

insert into book_has_keyword (book_id, keyword_id)
VALUES (7, 10);

insert into book_has_keyword (book_id, keyword_id)
VALUES (7, 12);

insert into book_has_keyword (book_id, keyword_id)
VALUES (7, 14);

insert into book_has_keyword (book_id, keyword_id)
VALUES (7, 15);

insert into book_has_keyword (book_id, keyword_id)
VALUES (7, 20);

insert into book_has_keyword (book_id, keyword_id)
VALUES (7, 34);

insert into book_has_keyword (book_id, keyword_id)
VALUES (8, 4);

insert into book_has_keyword (book_id, keyword_id)
VALUES (8, 5);

insert into book_has_keyword (book_id, keyword_id)
VALUES (8, 6);

insert into book_has_keyword (book_id, keyword_id)
VALUES (8, 7);

insert into book_has_keyword (book_id, keyword_id)
VALUES (8, 8);

insert into book_has_keyword (book_id, keyword_id)
VALUES (8, 10);

insert into book_has_keyword (book_id, keyword_id)
VALUES (8, 12);

insert into book_has_keyword (book_id, keyword_id)
VALUES (8, 14);

insert into book_has_keyword (book_id, keyword_id)
VALUES (8, 15);

insert into book_has_keyword (book_id, keyword_id)
VALUES (8, 20);

insert into book_has_keyword (book_id, keyword_id)
VALUES (8, 34);

insert into book_has_keyword (book_id, keyword_id)
VALUES (9, 4);

insert into book_has_keyword (book_id, keyword_id)
VALUES (9, 5);

insert into book_has_keyword (book_id, keyword_id)
VALUES (9, 6);

insert into book_has_keyword (book_id, keyword_id)
VALUES (9, 7);

insert into book_has_keyword (book_id, keyword_id)
VALUES (9, 8);

insert into book_has_keyword (book_id, keyword_id)
VALUES (9, 10);

insert into book_has_keyword (book_id, keyword_id)
VALUES (9, 12);

insert into book_has_keyword (book_id, keyword_id)
VALUES (9, 14);

insert into book_has_keyword (book_id, keyword_id)
VALUES (9, 15);

insert into book_has_keyword (book_id, keyword_id)
VALUES (9, 20);

insert into book_has_keyword (book_id, keyword_id)
VALUES (9, 34);

insert into book_has_keyword (book_id, keyword_id)
VALUES (10, 4);

insert into book_has_keyword (book_id, keyword_id)
VALUES (10, 5);

insert into book_has_keyword (book_id, keyword_id)
VALUES (10, 6);

insert into book_has_keyword (book_id, keyword_id)
VALUES (10, 7);

insert into book_has_keyword (book_id, keyword_id)
VALUES (10, 8);

insert into book_has_keyword (book_id, keyword_id)
VALUES (10, 10);

insert into book_has_keyword (book_id, keyword_id)
VALUES (10, 12);

insert into book_has_keyword (book_id, keyword_id)
VALUES (10, 14);

insert into book_has_keyword (book_id, keyword_id)
VALUES (10, 15);

insert into book_has_keyword (book_id, keyword_id)
VALUES (10, 20);

insert into book_has_keyword (book_id, keyword_id)
VALUES (10, 34);

insert into book_has_keyword (book_id, keyword_id)
VALUES (11, 4);

insert into book_has_keyword (book_id, keyword_id)
VALUES (11, 5);

insert into book_has_keyword (book_id, keyword_id)
VALUES (11, 6);

insert into book_has_keyword (book_id, keyword_id)
VALUES (11, 7);

insert into book_has_keyword (book_id, keyword_id)
VALUES (11, 8);

insert into book_has_keyword (book_id, keyword_id)
VALUES (11, 10);

insert into book_has_keyword (book_id, keyword_id)
VALUES (11, 12);

insert into book_has_keyword (book_id, keyword_id)
VALUES (11, 14);

insert into book_has_keyword (book_id, keyword_id)
VALUES (11, 15);

insert into book_has_keyword (book_id, keyword_id)
VALUES (11, 20);

insert into book_has_keyword (book_id, keyword_id)
VALUES (11, 34);

insert into book_has_tag (book_id, tag_id)
VALUES (7, 2);

insert into book_has_tag (book_id, tag_id)
VALUES (7, 3);

insert into book_has_tag (book_id, tag_id)
VALUES (8, 2);

insert into book_has_tag (book_id, tag_id)
VALUES (8, 3);

insert into book_has_tag (book_id, tag_id)
VALUES (9, 2);

insert into book_has_tag (book_id, tag_id)
VALUES (9, 3);

insert into book_has_tag (book_id, tag_id)
VALUES (10, 2);

insert into book_has_tag (book_id, tag_id)
VALUES (10, 3);

insert into book_has_tag (book_id, tag_id)
VALUES (11, 2);

insert into book_has_tag (book_id, tag_id)
VALUES (11, 3);

insert into book_has_tag (book_id, tag_id)
VALUES (1, 6);

insert into book_has_tag (book_id, tag_id)
VALUES (2, 6);

insert into book_has_tag (book_id, tag_id)
VALUES (3, 6);

insert into book_has_tag (book_id, tag_id)
VALUES (4, 7);

insert into book_has_tag (book_id, tag_id)
VALUES (5, 7);

insert into book_has_tag (book_id, tag_id)
VALUES (6, 7);

insert into genre_has_sub_genre (genre_id, sub_genre_id)
values (1, 1);

insert into genre_has_sub_genre (genre_id, sub_genre_id)
values (1, 2);

insert into genre_has_sub_genre (genre_id, sub_genre_id)
values (2, 1);

insert into genre_has_sub_genre (genre_id, sub_genre_id)
values (2, 2);

insert into genre_has_sub_genre (genre_id, sub_genre_id)
values (3, 1);

insert into genre_has_sub_genre (genre_id, sub_genre_id)
values (3, 2);

insert into genre_has_sub_genre (genre_id, sub_genre_id)
values (4, 2);

insert into genre_has_sub_genre (genre_id, sub_genre_id)
values (4, 9);

insert into genre_has_sub_genre (genre_id, sub_genre_id)
values (5, 2);

insert into genre_has_sub_genre (genre_id, sub_genre_id)
values (6, 2);

insert into genre_has_sub_genre (genre_id, sub_genre_id)
values (7, 6);

insert into genre_has_sub_genre (genre_id, sub_genre_id)
values (9, 5);

insert into genre_has_sub_genre (genre_id, sub_genre_id)
values (10, 2);

insert into genre_has_sub_genre (genre_id, sub_genre_id)
values (11, 1);

insert into genre_has_sub_genre (genre_id, sub_genre_id)
values (12, 9);

insert into genre_has_sub_genre (genre_id, sub_genre_id)
values (13, 2);

insert into genre_has_sub_genre (genre_id, sub_genre_id)
values (14, 1);

insert into genre_has_sub_genre (genre_id, sub_genre_id)
values (15, 1);

insert into user_has_genre (user_id, genre_id)
VALUES (1, 1);

insert into user_has_genre (user_id, genre_id)
VALUES (1, 2);

insert into user_has_genre (user_id, genre_id)
VALUES (1, 9);

insert into user_has_genre (user_id, genre_id)
VALUES (1, 13);

insert into user_has_genre (user_id, genre_id)
VALUES (1, 14);

insert into user_has_genre (user_id, genre_id)
VALUES (1, 18);

insert into user_has_sub_genre (user_id, sub_genre_id)
VALUES (1, 1);

insert into user_has_sub_genre (user_id, sub_genre_id)
VALUES (1, 2);

insert into user_has_sub_genre (user_id, sub_genre_id)
VALUES (1, 3);

insert into user_has_sub_genre (user_id, sub_genre_id)
VALUES (1, 5);

insert into user_has_sub_genre (user_id, sub_genre_id)
VALUES (1, 9);

insert into user_has_sub_genre (user_id, sub_genre_id)
VALUES (1, 10);

insert into user_has_sub_genre (user_id, sub_genre_id)
VALUES (1, 11);

insert into user_has_sub_genre (user_id, sub_genre_id)
VALUES (1, 12);

insert into user_has_sub_genre (user_id, sub_genre_id)
VALUES (1, 14);

insert into user_has_sub_genre (user_id, sub_genre_id)
VALUES (1, 15);

insert into user_has_sub_genre (user_id, sub_genre_id)
VALUES (1, 13);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 1);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 2);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 3);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 4);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 5);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 6);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 7);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 8);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 9);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 10);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 11);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 12);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 13);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 14);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 15);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 18);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 19);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 20);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 21);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 22);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 24);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 25);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 26);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 27);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 29);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 30);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 33);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 34);

insert into user_has_keyword (user_id, keyword_id)
VALUES (1, 35);


-- INSERTS FROM WILL FOR RECOMMENDATION FEATURE
insert into book_interactions (book_id, user_id, has_read, interested, favorite, like_dislike)
VALUES (10, 4, 0, 0, 0, 0);
insert into book_interactions (book_id, user_id, has_read, interested, favorite, like_dislike)
VALUES (5, 4, 1, 0, 1, 0);
insert into book_interactions (book_id, user_id, has_read, interested, favorite, like_dislike)
VALUES (4, 4, 0, 1, 0, 0);
insert into book_interactions (book_id, user_id, has_read, interested, favorite, like_dislike)
VALUES (11, 4, 1, 0, 1, 1);
insert into book_interactions (book_id, user_id, has_read, interested, favorite, like_dislike)
VALUES (9, 4, 1, 0, 0, 1);
insert into book_interactions (book_id, user_id, has_read, interested, favorite, like_dislike)
VALUES (6, 4, 0, 0, 0, 0);
insert into book_interactions (book_id, user_id, has_read, interested, favorite, like_dislike)
VALUES (7, 4, 1, 0, 1, 0);

