-- MySQL dump 10.13  Distrib 5.7.39, for osx11.0 (x86_64)
--
-- Host: localhost    Database: menrvadb
-- ------------------------------------------------------
-- Server version	5.7.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `author` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `photo` varchar(100) DEFAULT NULL,
  `pen_name` varchar(20) NOT NULL,
  `bio` longtext,
  `text` longtext,
  `date_created` date NOT NULL,
  `reviewed` tinyint(4) NOT NULL,
  `date_updated` date DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `author_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (1,NULL,'J.T. Elliott','Hello, I write books.','Announcements','2024-03-25',1,'2024-03-15',1),(2,NULL,'Matthew Blackmore','Hello, I write books.','Announcements','2024-03-25',1,'2024-03-15',2),(3,NULL,'Jonathan Dominguez','Hello, I write books.','Announcements','2024-03-25',1,'2024-03-15',3),(4,NULL,'Amarah Calderini','','','2024-03-25',1,'2024-03-15',NULL),(5,NULL,'S.E. Babin','','','2024-03-25',1,'2024-03-15',NULL);
/*!40000 ALTER TABLE `author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `author_has_book`
--

DROP TABLE IF EXISTS `author_has_book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `author_has_book` (
  `author_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  PRIMARY KEY (`author_id`,`book_id`),
  KEY `book_id` (`book_id`),
  CONSTRAINT `author_has_book_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`),
  CONSTRAINT `author_has_book_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author_has_book`
--

LOCK TABLES `author_has_book` WRITE;
/*!40000 ALTER TABLE `author_has_book` DISABLE KEYS */;
INSERT INTO `author_has_book` VALUES (3,1),(3,2),(3,3),(4,4),(4,5),(4,6),(5,7),(5,8),(5,9),(4,10),(5,11);
/*!40000 ALTER TABLE `author_has_book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `author_has_series`
--

DROP TABLE IF EXISTS `author_has_series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `author_has_series` (
  `author_id` int(11) NOT NULL,
  `series_id` int(11) NOT NULL,
  PRIMARY KEY (`author_id`,`series_id`),
  KEY `series_id` (`series_id`),
  CONSTRAINT `author_has_series_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`),
  CONSTRAINT `author_has_series_ibfk_2` FOREIGN KEY (`series_id`) REFERENCES `series` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author_has_series`
--

LOCK TABLES `author_has_series` WRITE;
/*!40000 ALTER TABLE `author_has_series` DISABLE KEYS */;
INSERT INTO `author_has_series` VALUES (3,1),(4,2),(5,3);
/*!40000 ALTER TABLE `author_has_series` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cover` varchar(500) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` longtext NOT NULL,
  `page_count` int(11) NOT NULL,
  `publication_date` date NOT NULL,
  `date_added` date NOT NULL,
  `reviewed` tinyint(4) NOT NULL,
  `date_updated` date DEFAULT NULL,
  `series_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `series_id` (`series_id`),
  CONSTRAINT `book_ibfk_1` FOREIGN KEY (`series_id`) REFERENCES `series` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (1,'https://i.imgur.com/12J19sh.jpg','The Time of Tears','Carnegie Sanders is a typical 19-year-old. He goes to college, he lives at home and in a dorm, has a crush on a girl he went to high school with, and has no idea what to do with his life. Life is normal. Then hydrogen bombs decimate the globe, and robed beings start wiping out everyone else lucky enough to live in rural America. In his small town in southern Arizona, Carnegie realizes survival is more than chance. Running on instinct, Erin, Santana, and Carnegie find the decimation of their people to be the beginning of change and tragedy never witnessed in history. As the world resets, Carnegie, Erin, and Santana face odds that would consume them, if not for new relationships forged. Creatures from fantastic stories lost in time and translation seek to keep humanity in check as Carnegie seeks a place to call home, a place to be safe. No one is safe as sinister forces work behind the veil of secrecy, and everyone in Carnegie’s new circle will experience turmoil. Lost in the new races of lore calling themselves the Nine, Carnegie is thrust into becoming someone he isn’t ready to be for those who rely on him. Set in the dynamic landscape of the American Southwest, and from deserts to mountains and even under the earth itself, no where is safe. Fighting for survival is just the beginning. Nothing has prepared them for this time. A time of confusion. A time of loss. And a time of tears.',324,'2019-02-26','2024-03-25',1,'2024-03-15',1),(2,'https://i.imgur.com/RMSohKY.jpg','The Fall of the Nine','Set along the Colorado Rockies, The Fall of the Nine continues the struggle of Carnegie, Erin, and Santana as they continue their fight in a post-apocalyptic world. On the mend after their encounter, Carnegie and his friends start their journey from the outskirts of Denver and discover that the true evil is just awakening. As tensions escalate, Carnegie makes a choice that he will pay for in blood. Entering the post-bomb city, the Gnomes and other species of the Nine that have taken the Human world for their own continue to show the surviving humans that the Old World is gone, and it will never be the same again. With the arrival of the rulers of each race, Cheradyn’s identity is threatened and she must face demons of her own past to become the Faerie the New World needs her to be. As the world continues to reset, the Princess learns that she must protect the ones who have been there for her. Moving in the shadows, Nicholas contends with the darkness inside him and the greater evil comes to the foreground, inciting other dark beings to the anarchic tendencies they have always hoped would be unleashed. Somewhere in Texas, a young businessman fights the post-apocalyptic southwest, his companions, and a mysterious power inside him that threatens to tear him apart. Darkness is on the move as ancient secrets are revealed, but hope still finds a small place in the creeping void. Hope, however, is in short supply for the Nine. The true evil is revealed. He has planned this for centuries. The Nine are not prepared.',428,'2019-07-03','2024-03-25',1,'2024-03-15',1),(3,'https://i.imgur.com/8AuJTCq.jpg','Tales of the Nine','From Arizona to Massachusetts, to the Caribbean and deep under the earth in prisons so dark, only evil can grow, the world of the Nine is revealed. In seventeen short stories we explore some of the origin stories through first-hand accounts as mysteries are both solved and revealed. With many characters, new and known, the Nine and their true threat, their cataclysm from a lost history, is offered in a different medium. The Time of Tears: Tales of the Nine deepens the lore through time: past, present, and future, preparing our heroes for the last battle for survival all of them must face. Questions are answered. The cataclysm is unleashed in The Tales of the Nine.',148,'2019-08-17','2024-03-25',1,'2024-03-15',1),(4,'https://i.imgur.com/jBrsMog.jpg','Tide of Darkness (Dark World Trilogy Book 1)','They say the land flourished once, ripe with wealth and blessed by nature, but those are only stories. There is no light now—there is only the Darkness. Mirren has grown up hearing tales of the Dark World from the safety of Similis, a utopian society with no poverty, no violence and no choices. Rumors of the horrors that writhe in the darkness keep anyone from venturing further than the Boundary, but when a mysterious illness befalls her brother, Mirren is desperate to save him—desperate enough to cross into the wild land to find the cure he needs to survive. Raised beyond the Boundary, Shaw has only ever known violence. With no laws to inhibit the cruel reign of warlords and a curse that keeps the land on the edge of starvation, he understands the only way to survive is by being more ruthless than everyone else. When he finds a panicked woman escaping Similis, he realizes he’s been granted a rare gift of fate: a way to get back what was stolen from him. Infuriatingly enchanting and not at all what he expected, Mirren challenges Shaw at every turn. But the pair soon discover their greatest fight may not lie with each other. A prophecy has been unearthed, and if it speaks the truth, one of them may be the key to breaking the curse. But light is a dangerous thing to wield in a land ruled by the dark. Together, they must decide if love and freedom are worth the cost. Tide of Darkness is a New Adult fantasy romance and is intended to be enjoyed by mature audiences. It contains mature themes, sexual content, violence, gore and references to abuse. For a full list of trigger warnings, please visit the author\'s social media or website.',495,'2022-08-30','2024-03-25',1,'2024-03-15',2),(5,'https://i.imgur.com/DXoYn3a.jpg','Flame of Shadow (Dark World Trilogy Book 2)','All Mirren ever wanted was to save her brother, though now that she’s seen the horror and beauty of the Dark World, Similis feels more suffocating than ever. Her heart broken and her power now stifled, she vows to live an ordinary life, but when the Boundary is breached and the lights that have shone for a thousand years begin to flicker, she knows must protect her home from the growing threat of the Praeceptor. Even if it means leaving behind the brother she sacrificed everything for. Because the warlord has brought destruction to their gates, and if Mirren doesn’t decipher the remainder of the Dead Prophecy, both Ferusa and Similis will fall to the Darkness. And it isn’t just the Praeceptor who seeks to stop her. Leading his father’s reign of terror is the newly returned heir. Soulless, cruel, and set on vengeance, Shaw will stop at nothing to get what he wants—including destroying the woman he once loved. To thwart Shaw and save Ferusa, Mirren will have to find the depths of her power and push herself to the edge of her humanity. She must decide once and for all, where the line between dark and light lies. Because the Darkness demands souls, and it is coming for hers. Flame of Shadow is the second book in the Dark World Trilogy and is a dark fantasy romance intended for audiences 18+ as it contains graphic violence and sexual content. For a full list of trigger warnings, please see the author\'s social media.',498,'2022-12-06','2024-03-25',1,'2024-03-15',2),(6,'https://i.imgur.com/byF0ZAf.jpg','Wave of Light (Dark World Trilogy Book 3)','The Darkness changes all those it touches... Mirren has learned from her time in Ferusa that light cannot exist without the dark, nor beauty without pain. She has bled and fought, given everything she has to protect those she loves, and still, the Darkness demands more. With the return of nature magic and the rise of an ancient evil, the Dead Prophecy is the only way to restore balance to the land--but Mirren fears the price may be too high to pay. In the thrilling conclusion to the epic fantasy trilogy, loyalties will be tested... Souls will be shattered... And sacrifices will be made, as the Darkness rises for its final calling. Wave of Light is a new adult fantasy intended to be enjoyed by mature audiences. It contains mature themes, sexual content, violence, gore and references to abuse. For a full list of trigger warnings, please visit the author\'s website.',583,'2023-11-14','2024-03-25',1,'2024-03-15',2),(7,'https://i.imgur.com/olTZZRa.jpg','A Twist of Demon (Cocktails in Hell Book 1)','Want longer hair, whiter teeth, a smaller nose? Violet has a potion for that. Want to hex an enemy, make someone fall in love with you, or curse someone? Well…that will cost you. By day, Violet is a supposed charlatan running a potion shop in New Orleans and catering to drunk tourists who want to take a walk on the wild side. By night, she’s a Potion Master, a rare, magical being whose shop straddles the portal to Earth and Hell, slinging potions to magical beasts who only come out at night. She’s also the protector of both, a neutral being who carefully navigates the Accords between oblivious humans and the creatures who wouldn’t mind snacking on them. Unfortunately for both sides, Violet is terrible at her job. After the last Potion Master dies a horrible death and she’s pulled out of anonymity by a handsome and super annoying demon, Violet’s shop transforms and she’s thrust into unwanted instafame. And not the good kind, either. Suddenly, everyone either wants to date her, or they want to kill her. And, honestly? Violet isn’t sure which one is easier anymore.',186,'2023-04-06','2024-03-25',1,'2024-03-15',3),(8,'https://i.imgur.com/YlbhAYq.jpg','A Shake of Succubus (Cocktails in Hell Book 2)','Violet is the newest Potionsmaster, Guardian of the Hell Gates, and Lucifer has his eye on her… With her life a weird mess right now, Violet has no one to turn to. Az is still in hiding, and she’s never been able to trust Max. Lucifer has offered a shoulder, but Violet knows better than to trust the original Serpent and her brand spanking new employer. Doesn’t she? As the hunt for the creature who escaped the boundaries continues, more Potionsmasters meet their ends. But when someone she definitely shouldn\'t trust offers her a cryptic clue, Violet has to decide if her life is worth the truth. Can she endanger everyone she loves and the entire world to save her own hide? Or will she make the ultimate sacrifice and take her secret to the grave?',210,'2023-07-26','2024-03-25',1,'2024-03-15',3),(9,'https://i.imgur.com/2sN0YIR.jpg','A Stir of Fairies (Cocktails in Hell Book 3)','Violet\'s secret is out. Now comes the fun part… It\'s time to train. With Violet\'s identity revealed to her closest allies, the time has come for her to embrace who she is. But who is she anyway? Witch? Angel? Demon? None of the above? Meanwhile, Daddy Dearest is busy gathering a powerful force to stage a coup in Heaven, while Violet and the crew have to harness her powers and teach her to use them before he succeeds. Between slinging drinks for Hell\'s finest, training for a potential world-ending war, and trying to figure out why the new brooding bar guest keeps giving her funny looks, Violet has her hands full. And then came the dragons... Unfortunately, Violet ain\'t seen nothing yet.',203,'2023-10-10','2024-03-25',1,'2024-03-15',3),(10,'https://i.imgur.com/SuPhH2m.jpg','A Dash of Vampire (Cocktails in Hell Book 4)','What happens when you accidentally kidnap a Fae King, invite a demented vampire queen to bunk with you, and enlist both to plot revenge against the dragons? Violet doesn\'t know yet, but she\'s about to find out. Her little jaunt to the fae lands ended with Violet carrying more luggage out than she brought in. Now, with a ticked off Unseelie King brooding and tied up in the corner, she has to figure out how to smooth relations while also deciphering Michael\'s newest plans. Toss in a sullen traitor, an emotional fairy, and a human(ish?) law enforcement officer sniffing around, and Violet\'s juggling more balls than she knows what to do with. As if that\'s not bad enough, Violet receives one final visitor to her bar the night before she visits the dragons, and this one is a real doozy… Welcome to Swan\'s, where the creatures are weird, the drinks are potent, and the antics are completely unhinged.',219,'2023-12-19','2024-03-25',1,'2024-03-15',3),(11,'https://i.imgur.com/Qdz9MBc.jpg','A Touch of Angel (Cocktails in Hell Book 5)','When an accidental meeting results in an unlikely alliance, Violet discovers earth-shattering secrets… Sounds like a Tuesday to her. Lucifer\'s efforts to secure the angel\'s cooperation are proving unsuccessful until a chance meeting ends with an invitation to attend a forum. There\'s only one caveat. Violet\'s presence is required, and she must offer a demonstration of her powers. Lucifer is against it. Clara wants to destroy them all. Dave is…Dave. And the enigmatic ruler of the dragons doesn\'t care about any of it. He\'s chosen to pursue Violet with a single-minded focus. But whether he wants her for her or her powers remains unknown. Violet has to decide soon whether she\'s ready to face the world and claim her heritage. But what she doesn\'t realize is her heritage isn\'t straightforward at all, and the choice she has to make could bring the entire world to its knees.',228,'2024-03-05','2024-03-25',1,'2024-03-15',3);
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_has_genre`
--

DROP TABLE IF EXISTS `book_has_genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `book_has_genre` (
  `book_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL,
  PRIMARY KEY (`book_id`,`genre_id`),
  KEY `genre_id` (`genre_id`),
  CONSTRAINT `book_has_genre_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`),
  CONSTRAINT `book_has_genre_ibfk_2` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_has_genre`
--

LOCK TABLES `book_has_genre` WRITE;
/*!40000 ALTER TABLE `book_has_genre` DISABLE KEYS */;
INSERT INTO `book_has_genre` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(9,1),(10,1),(11,1),(1,2),(2,2),(3,2),(4,2),(5,2),(6,2),(7,2),(8,2),(9,2),(10,2),(11,2),(4,9),(5,9),(6,9),(3,20);
/*!40000 ALTER TABLE `book_has_genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_has_keyword`
--

DROP TABLE IF EXISTS `book_has_keyword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `book_has_keyword` (
  `book_id` int(11) NOT NULL,
  `keyword_id` int(11) NOT NULL,
  PRIMARY KEY (`book_id`,`keyword_id`),
  KEY `keyword_id` (`keyword_id`),
  CONSTRAINT `book_has_keyword_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`),
  CONSTRAINT `book_has_keyword_ibfk_2` FOREIGN KEY (`keyword_id`) REFERENCES `keyword` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_has_keyword`
--

LOCK TABLES `book_has_keyword` WRITE;
/*!40000 ALTER TABLE `book_has_keyword` DISABLE KEYS */;
INSERT INTO `book_has_keyword` VALUES (7,4),(8,4),(9,4),(10,4),(11,4),(7,5),(8,5),(9,5),(10,5),(11,5),(7,6),(8,6),(9,6),(10,6),(11,6),(7,7),(8,7),(9,7),(10,7),(11,7),(7,8),(8,8),(9,8),(10,8),(11,8),(1,10),(2,10),(3,10),(4,10),(5,10),(6,10),(7,10),(8,10),(9,10),(10,10),(11,10),(7,12),(8,12),(9,12),(10,12),(11,12),(1,14),(2,14),(3,14),(7,14),(8,14),(9,14),(10,14),(11,14),(7,15),(8,15),(9,15),(10,15),(11,15),(7,20),(8,20),(9,20),(10,20),(11,20),(1,22),(2,22),(3,22),(4,30),(5,30),(6,30),(7,34),(8,34),(9,34),(10,34),(11,34);
/*!40000 ALTER TABLE `book_has_keyword` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_has_sub_genre`
--

DROP TABLE IF EXISTS `book_has_sub_genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `book_has_sub_genre` (
  `book_id` int(11) NOT NULL,
  `sub_genre_id` int(11) NOT NULL,
  PRIMARY KEY (`book_id`,`sub_genre_id`),
  KEY `sub_genre_id` (`sub_genre_id`),
  CONSTRAINT `book_has_sub_genre_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`),
  CONSTRAINT `book_has_sub_genre_ibfk_2` FOREIGN KEY (`sub_genre_id`) REFERENCES `sub_genre` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_has_sub_genre`
--

LOCK TABLES `book_has_sub_genre` WRITE;
/*!40000 ALTER TABLE `book_has_sub_genre` DISABLE KEYS */;
INSERT INTO `book_has_sub_genre` VALUES (4,1),(5,1),(6,1),(2,2),(3,2),(4,3),(5,3),(6,3),(7,10),(8,10),(9,10),(10,10),(11,10),(1,11),(3,11),(7,11),(8,11),(9,11),(10,11),(11,11),(1,14),(2,14),(3,14);
/*!40000 ALTER TABLE `book_has_sub_genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_has_tag`
--

DROP TABLE IF EXISTS `book_has_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `book_has_tag` (
  `book_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL,
  PRIMARY KEY (`book_id`,`tag_id`),
  KEY `tag_id` (`tag_id`),
  CONSTRAINT `book_has_tag_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`),
  CONSTRAINT `book_has_tag_ibfk_2` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_has_tag`
--

LOCK TABLES `book_has_tag` WRITE;
/*!40000 ALTER TABLE `book_has_tag` DISABLE KEYS */;
INSERT INTO `book_has_tag` VALUES (7,2),(8,2),(9,2),(10,2),(11,2),(7,3),(8,3),(9,3),(10,3),(11,3),(1,6),(2,6),(3,6),(4,7),(5,7),(6,7);
/*!40000 ALTER TABLE `book_has_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_interactions`
--

DROP TABLE IF EXISTS `book_interactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `book_interactions` (
  `book_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `has_read` int(11) NOT NULL DEFAULT '0',
  `interested` int(11) NOT NULL DEFAULT '0',
  `favorite` int(11) NOT NULL DEFAULT '0',
  `like_dislike` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`book_id`,`user_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `book_interactions_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`),
  CONSTRAINT `book_interactions_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_interactions`
--

LOCK TABLES `book_interactions` WRITE;
/*!40000 ALTER TABLE `book_interactions` DISABLE KEYS */;
INSERT INTO `book_interactions` VALUES (1,1,1,0,0,1),(2,1,1,0,0,1),(3,1,1,0,0,1),(4,1,1,0,0,1),(4,4,0,1,0,0),(5,1,1,0,0,1),(5,4,1,0,1,0),(6,1,1,0,0,1),(6,4,0,0,0,0),(7,1,1,0,0,1),(7,4,1,0,1,0),(8,1,1,0,0,1),(9,1,1,0,0,1),(9,4,1,0,0,1),(10,1,1,0,0,1),(10,4,0,0,0,0),(11,1,1,0,0,1),(11,4,1,0,1,1);
/*!40000 ALTER TABLE `book_interactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment` longtext NOT NULL,
  `date_added` date NOT NULL,
  `reviewed` tinyint(4) NOT NULL,
  `date_updated` date DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `book_id` (`book_id`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'Love, love, love this series. Kept me hooked from the first book. Can\'t wait for the next!','2024-03-25',1,'2024-03-15',1,11),(2,'Love this series. Can\'t wait for the next!','2024-03-25',1,'2024-03-15',1,3);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genre`
--

DROP TABLE IF EXISTS `genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genre` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `date_added` date NOT NULL,
  `reviewed` tinyint(4) NOT NULL,
  `date_updated` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre`
--

LOCK TABLES `genre` WRITE;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;
INSERT INTO `genre` VALUES (1,'Fantasy','2024-03-25',1,'2024-03-15'),(2,'Fiction','2024-03-25',1,'2024-03-15'),(3,'Non-fiction','2024-03-25',1,'2024-03-15'),(5,'Science fiction','2024-03-25',1,'2024-03-15'),(6,'Mystery','2024-03-25',1,'2024-03-15'),(7,'Historical fiction','2024-03-25',1,'2024-03-15'),(8,'Horror','2024-03-25',1,'2024-03-15'),(9,'Romance','2024-03-25',1,'2024-03-15'),(10,'Thriller','2024-03-25',1,'2024-03-15'),(11,'Autobiography','2024-03-25',1,'2024-03-15'),(12,'Young Adult','2024-03-25',1,'2024-03-15'),(13,'Adventure','2024-03-25',1,'2024-03-15'),(14,'Dystopian','2024-03-25',1,'2024-03-15'),(15,'Contemporary fiction','2024-03-25',1,'2024-03-15'),(16,'Literary fiction','2024-03-25',1,'2024-03-15'),(17,'Historical','2024-03-25',1,'2024-03-15'),(18,'Graphic novel','2024-03-25',1,'2024-03-15'),(20,'Short story','2024-03-25',1,'2024-03-15'),(21,'Biography','2024-03-25',1,'2024-03-15'),(22,'Classics','2024-03-25',1,'2024-03-15'),(25,'Western fiction','2024-03-25',1,'2024-03-15'),(26,'Comedy','2024-03-25',1,'2024-03-15');
/*!40000 ALTER TABLE `genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genre_has_sub_genre`
--

DROP TABLE IF EXISTS `genre_has_sub_genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genre_has_sub_genre` (
  `genre_id` int(11) NOT NULL,
  `sub_genre_id` int(11) NOT NULL,
  PRIMARY KEY (`genre_id`,`sub_genre_id`),
  KEY `sub_genre_id` (`sub_genre_id`),
  CONSTRAINT `genre_has_sub_genre_ibfk_1` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`),
  CONSTRAINT `genre_has_sub_genre_ibfk_2` FOREIGN KEY (`sub_genre_id`) REFERENCES `sub_genre` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre_has_sub_genre`
--

LOCK TABLES `genre_has_sub_genre` WRITE;
/*!40000 ALTER TABLE `genre_has_sub_genre` DISABLE KEYS */;
INSERT INTO `genre_has_sub_genre` VALUES (1,1),(2,1),(3,1),(11,1),(14,1),(15,1),(1,2),(2,2),(3,2),(4,2),(5,2),(6,2),(10,2),(13,2),(9,5),(7,6),(4,9),(12,9);
/*!40000 ALTER TABLE `genre_has_sub_genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `keyword`
--

DROP TABLE IF EXISTS `keyword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `keyword` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `date_added` date NOT NULL,
  `reviewed` tinyint(4) NOT NULL,
  `date_updated` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keyword`
--

LOCK TABLES `keyword` WRITE;
/*!40000 ALTER TABLE `keyword` DISABLE KEYS */;
INSERT INTO `keyword` VALUES (1,'Fairy','2024-03-25',1,'2024-03-15'),(2,'Faerie','2024-03-25',1,'2024-03-15'),(3,'Fey','2024-03-25',1,'2024-03-15'),(4,'Fae','2024-03-25',1,'2024-03-15'),(5,'Shifters','2024-03-25',1,'2024-03-15'),(6,'Vampires','2024-03-25',1,'2024-03-15'),(7,'Dragons','2024-03-25',1,'2024-03-15'),(8,'Hell','2024-03-25',1,'2024-03-15'),(9,'Underworld','2024-03-25',1,'2024-03-15'),(10,'Magic','2024-03-25',1,'2024-03-15'),(11,'Mages','2024-03-25',1,'2024-03-15'),(12,'Magical artifacts','2024-03-25',1,'2024-03-15'),(13,'Griffins','2024-03-25',1,'2024-03-15'),(14,'Magical creatures','2024-03-25',1,'2024-03-15'),(15,'Werewolves','2024-03-25',1,'2024-03-15'),(16,'Alpha','2024-03-25',1,'2024-03-15'),(17,'Omega','2024-03-25',1,'2024-03-15'),(18,'Mermaids','2024-03-25',1,'2024-03-15'),(19,'Sirens','2024-03-25',1,'2024-03-15'),(20,'Witches','2024-03-25',1,'2024-03-15'),(21,'Ghosts','2024-03-25',1,'2024-03-15'),(22,'Elves','2024-03-25',1,'2024-03-15'),(23,'Orcs','2024-03-25',1,'2024-03-15'),(24,'Myths','2024-03-25',1,'2024-03-15'),(25,'Legends','2024-03-25',1,'2024-03-15'),(26,'Folklore','2024-03-25',1,'2024-03-15'),(27,'Swords','2024-03-25',1,'2024-03-15'),(28,'Dwarves','2024-03-25',1,'2024-03-15'),(29,'Gargoyles','2024-03-25',1,'2024-03-15'),(30,'Gods','2024-03-25',1,'2024-03-15'),(31,'Trolls','2024-03-25',1,'2024-03-15'),(32,'Goblins','2024-03-25',1,'2024-03-15'),(33,'Parallel worlds','2024-03-25',1,'2024-03-15'),(34,'Realms','2024-03-25',1,'2024-03-15'),(35,'Reverse Harem','2024-03-25',1,'2024-03-15');
/*!40000 ALTER TABLE `keyword` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `link`
--

DROP TABLE IF EXISTS `link`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `link` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `link` varchar(100) NOT NULL,
  `date_added` date NOT NULL,
  `reviewed` tinyint(4) NOT NULL,
  `date_updated` date DEFAULT NULL,
  `book_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `book_id` (`book_id`),
  CONSTRAINT `link_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `link`
--

LOCK TABLES `link` WRITE;
/*!40000 ALTER TABLE `link` DISABLE KEYS */;
INSERT INTO `link` VALUES (1,'Amazon','https://www.amazon.com/Time-Tears-Jonathan-Dominguez-ebook/dp/B07NPB1MZF?ref_=ast_author_dp','2024-03-25',1,'2024-03-15',1),(2,'Amazon','https://www.amazon.com/Fall-Nine-Time-Tears-Book-ebook/dp/B07TXTCCTS/ref=pd_sim_d_sccl_1_1/145-29184','2024-03-25',1,'2024-03-15',2),(3,'Amazon','https://www.amazon.com/Time-Tears-Tales-Nine-ebook/dp/B07WHBMV68/ref=sr_1_4?crid=8LNLOLIIK18E&dib=ey','2024-03-25',1,'2024-03-15',3),(4,'Amazon','https://www.amazon.com/Tide-Darkness-Dark-World-Trilogy-ebook/dp/B0B8QT9FCB/ref=sr_1_1?crid=3MNWNKJB','2024-03-25',1,'2024-03-15',4),(5,'Amazon','https://www.amazon.com/dp/B0BH9J3ZZ7/ref=mes-dp?_encoding=UTF8&pd_rd_w=nLjEM&content-id=amzn1.sym.07','2024-03-25',1,'2024-03-15',5),(6,'Amazon','https://www.amazon.com/dp/B0CHLKTM4S/ref=mes-dp?_encoding=UTF8&pd_rd_w=3E2oz&content-id=amzn1.sym.07','2024-03-25',1,'2024-03-15',6),(7,'Amazon','https://www.amazon.com/gp/product/B0BLJ8CYR4?ref_=dbs_m_mng_rwt_calw_tkin_0&storeType=ebooks&qid=171','2024-03-25',1,'2024-03-15',7),(8,'Amazon','https://www.amazon.com/dp/B0C1R9G49T/ref=mes-dp?_encoding=UTF8&pd_rd_w=SG11z&content-id=amzn1.sym.07','2024-03-25',1,'2024-03-15',8),(9,'Amazon','https://www.amazon.com/gp/product/B0CGP3VQXQ?ref_=dbs_p_pwh_rwt_anx_cl_1&storeType=ebooks','2024-03-25',1,'2024-03-15',9),(10,'Amazon','https://www.amazon.com/dp/B0CNL3NRQS/ref=mes-dp?_encoding=UTF8&pd_rd_w=ZxNR9&content-id=amzn1.sym.07','2024-03-25',1,'2024-03-15',10),(11,'Amazon','https://www.amazon.com/dp/B0CQZ718TG/ref=mes-dp?_encoding=UTF8&pd_rd_w=tfPGg&content-id=amzn1.sym.07','2024-03-25',1,'2024-03-15',11);
/*!40000 ALTER TABLE `link` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `series`
--

DROP TABLE IF EXISTS `series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `series` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `date_added` date NOT NULL,
  `reviewed` tinyint(4) NOT NULL,
  `date_updated` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `series`
--

LOCK TABLES `series` WRITE;
/*!40000 ALTER TABLE `series` DISABLE KEYS */;
INSERT INTO `series` VALUES (1,'The Time of Tears','2024-03-25',1,'2024-03-15'),(2,'Dark World Trilogy','2024-03-25',1,'2024-03-15'),(3,'Cocktails in Hell','2024-03-25',1,'2024-03-15');
/*!40000 ALTER TABLE `series` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `series_interactions`
--

DROP TABLE IF EXISTS `series_interactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `series_interactions` (
  `series_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `interested` int(11) NOT NULL DEFAULT '0',
  `favorite` int(11) NOT NULL DEFAULT '0',
  `in_progress` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`series_id`,`user_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `series_interactions_ibfk_1` FOREIGN KEY (`series_id`) REFERENCES `series` (`id`),
  CONSTRAINT `series_interactions_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `series_interactions`
--

LOCK TABLES `series_interactions` WRITE;
/*!40000 ALTER TABLE `series_interactions` DISABLE KEYS */;
INSERT INTO `series_interactions` VALUES (3,1,0,1,1);
/*!40000 ALTER TABLE `series_interactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social_media`
--

DROP TABLE IF EXISTS `social_media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `social_media` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `link` varchar(100) NOT NULL,
  `date_added` date NOT NULL,
  `date_updated` date DEFAULT NULL,
  `author_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `social_media_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social_media`
--

LOCK TABLES `social_media` WRITE;
/*!40000 ALTER TABLE `social_media` DISABLE KEYS */;
INSERT INTO `social_media` VALUES (1,'Website','www.amarahcalderini.com','2024-03-25','2024-03-15',4),(2,'Facebook','https://www.facebook.com/authoramarahcalderini','2024-03-25','2024-03-15',4),(3,'Goodreads','https://www.goodreads.com/author/show/22748634.Amarah_Calderini','2024-03-25','2024-03-15',4),(4,'Instagram','https://www.instagram.com/amarahcalderiniauthor','2024-03-25','2024-03-15',4),(5,'TikTok','http://tiktok.com/amarahcalderiniauthor','2024-03-25','2024-03-15',4),(6,'Amazon','https://www.amazon.com/stores/Amarah-Calderini/author/B0B8T8XMRQ?ref=lp_11764651011_1_11&isDramInteg','2024-03-25','2024-03-15',4);
/*!40000 ALTER TABLE `social_media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_genre`
--

DROP TABLE IF EXISTS `sub_genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sub_genre` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `date_added` date NOT NULL,
  `reviewed` tinyint(4) NOT NULL,
  `date_updated` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_genre`
--

LOCK TABLES `sub_genre` WRITE;
/*!40000 ALTER TABLE `sub_genre` DISABLE KEYS */;
INSERT INTO `sub_genre` VALUES (1,'Dark fantasy','2024-03-25',1,'2024-03-15'),(2,'High fantasy','2024-03-25',1,'2024-03-15'),(3,'Low fantasy','2024-03-25',1,'2024-03-15'),(4,'Erotica','2024-03-25',1,'2024-03-15'),(5,'Gothic fiction','2024-03-25',1,'2024-03-15'),(6,'Fairy tale','2024-03-25',1,'2024-03-15'),(7,'Crime','2024-03-25',1,'2024-03-15'),(9,'Action','2024-03-25',1,'2024-03-15'),(10,'Supernatural','2024-03-25',1,'2024-03-15'),(11,'Urban-fantasy','2024-03-25',1,'2024-03-15'),(12,'Paranormal romance','2024-03-25',1,'2024-03-15'),(13,'Paranormal','2024-03-25',1,'2024-03-15'),(14,'Post apocalyptic','2024-03-25',1,'2024-03-15'),(15,'Magical realism','2024-03-25',1,'2024-03-15');
/*!40000 ALTER TABLE `sub_genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscription`
--

DROP TABLE IF EXISTS `subscription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subscription` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `level` varchar(20) NOT NULL,
  `paid` int(11) NOT NULL,
  `date_added` date NOT NULL,
  `date_updated` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscription`
--

LOCK TABLES `subscription` WRITE;
/*!40000 ALTER TABLE `subscription` DISABLE KEYS */;
INSERT INTO `subscription` VALUES (1,'Admin',1,'2024-03-25','2024-03-15');
/*!40000 ALTER TABLE `subscription` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `date_added` date NOT NULL,
  `reviewed` tinyint(4) NOT NULL,
  `date_updated` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (1,'time travel','2024-03-25',1,'2024-03-15'),(2,'badass heroine','2024-03-25',1,'2024-03-15'),(3,'snarky','2024-03-25',1,'2024-03-15'),(4,'omega verse','2024-03-25',1,'2024-03-15'),(5,'why choose','2024-03-25',1,'2024-03-15'),(6,'emotional journey','2024-03-25',1,'2024-03-15'),(7,'survival','2024-03-25',1,'2024-03-15');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(20) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `tag` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `active` int(11) NOT NULL,
  `date_added` date NOT NULL,
  `date_updated` date DEFAULT NULL,
  `subscription_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `subscription_id` (`subscription_id`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`subscription_id`) REFERENCES `subscription` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Admin','Tiarra','Blandin','@tiarra','tiarra.blandin@gmail.com','tiarra','$2b$10$k0LWgoJxJlEFPizIi3OJIu/dgnQqNDD3rsKdhkx/cJ1FwSR5wVZXO',1,'2024-03-25','2024-03-15',1),(2,'Admin','Matthew','Tilley','@matt','matthew.tilley77@gmail.com','matt','$2b$10$6P3YaIeyd5FN0KAnk5Wd9u.IopnLe0P5vvXrVeW3OCwVL.7Tkei1m',1,'2024-03-25','2024-03-15',1),(3,'Admin','Jonathan','Dominguez','@jondom','jonathanadominguez@gmail.com','jon','$2b$10$RrN6OgEk09x6nvtLPOcT7e6QYRnwBYQl/kz8KhCRELlztMkbN2twq',1,'2024-03-25','2024-03-15',1),(4,'Admin','William','Slaunwhite','@will','williamslaunwhite@gmail.com','will','$2a$12$.aXI64OEVlXoGf8fNHOlhef6SFgQzI4bqn2unNELnfIWTPwJj.zR6',1,'2024-03-25','2024-03-15',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_follows_author`
--

DROP TABLE IF EXISTS `user_follows_author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_follows_author` (
  `author_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  KEY `author_id` (`author_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_follows_author_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`),
  CONSTRAINT `user_follows_author_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_follows_author`
--

LOCK TABLES `user_follows_author` WRITE;
/*!40000 ALTER TABLE `user_follows_author` DISABLE KEYS */;
INSERT INTO `user_follows_author` VALUES (1,2),(1,3),(1,4),(1,5);
/*!40000 ALTER TABLE `user_follows_author` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-25 19:06:25
