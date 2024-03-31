-- MySQL dump 10.13  Distrib 8.3.0, for macos13.6 (x86_64)
--
-- Host: localhost    Database: menrvadb
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author` (
  `id` int NOT NULL AUTO_INCREMENT,
  `photo` varchar(100) DEFAULT NULL,
  `pen_name` varchar(20) NOT NULL,
  `bio` longtext,
  `text` longtext,
  `date_created` date NOT NULL,
  `reviewed` tinyint NOT NULL,
  `date_updated` date DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `author_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (1,NULL,'J.T. Elliott','Hello, I write books.','Announcements','2024-03-30',1,'2024-03-15',1),(2,NULL,'Matthew Blackmore','Hello, I write books.','Announcements','2024-03-30',1,'2024-03-15',2),(3,NULL,'Jonathan Dominguez','Hello, I write books.','Announcements','2024-03-30',1,'2024-03-15',3),(4,NULL,'Amarah Calderini','','','2024-03-30',1,'2024-03-15',NULL),(5,NULL,'S.E. Babin','','','2024-03-30',1,'2024-03-15',NULL);
/*!40000 ALTER TABLE `author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `author_has_book`
--

DROP TABLE IF EXISTS `author_has_book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author_has_book` (
  `author_id` int NOT NULL,
  `book_id` int NOT NULL,
  PRIMARY KEY (`author_id`,`book_id`),
  KEY `book_id` (`book_id`),
  CONSTRAINT `author_has_book_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`),
  CONSTRAINT `author_has_book_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author_has_series` (
  `author_id` int NOT NULL,
  `series_id` int NOT NULL,
  PRIMARY KEY (`author_id`,`series_id`),
  KEY `series_id` (`series_id`),
  CONSTRAINT `author_has_series_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`),
  CONSTRAINT `author_has_series_ibfk_2` FOREIGN KEY (`series_id`) REFERENCES `series` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cover` varchar(500) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` longtext NOT NULL,
  `page_count` int NOT NULL,
  `publication_date` date NOT NULL,
  `date_added` date NOT NULL,
  `reviewed` tinyint NOT NULL,
  `date_updated` date DEFAULT NULL,
  `series_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`),
  UNIQUE KEY `title_2` (`title`,`publication_date`),
  KEY `series_id` (`series_id`),
  CONSTRAINT `book_ibfk_1` FOREIGN KEY (`series_id`) REFERENCES `series` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=178 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (1,'https://i.imgur.com/12J19sh.jpg','The Time of Tears','Carnegie Sanders is a typical 19-year-old. He goes to college, he lives at home and in a dorm, has a crush on a girl he went to high school with, and has no idea what to do with his life. Life is normal. Then hydrogen bombs decimate the globe, and robed beings start wiping out everyone else lucky enough to live in rural America. In his small town in southern Arizona, Carnegie realizes survival is more than chance. Running on instinct, Erin, Santana, and Carnegie find the decimation of their people to be the beginning of change and tragedy never witnessed in history. As the world resets, Carnegie, Erin, and Santana face odds that would consume them, if not for new relationships forged. Creatures from fantastic stories lost in time and translation seek to keep humanity in check as Carnegie seeks a place to call home, a place to be safe. No one is safe as sinister forces work behind the veil of secrecy, and everyone in Carnegie’s new circle will experience turmoil. Lost in the new races of lore calling themselves the Nine, Carnegie is thrust into becoming someone he isn’t ready to be for those who rely on him. Set in the dynamic landscape of the American Southwest, and from deserts to mountains and even under the earth itself, no where is safe. Fighting for survival is just the beginning. Nothing has prepared them for this time. A time of confusion. A time of loss. And a time of tears.',324,'2019-02-26','2024-03-30',1,'2024-03-15',1),(2,'https://i.imgur.com/RMSohKY.jpg','The Fall of the Nine','Set along the Colorado Rockies, The Fall of the Nine continues the struggle of Carnegie, Erin, and Santana as they continue their fight in a post-apocalyptic world. On the mend after their encounter, Carnegie and his friends start their journey from the outskirts of Denver and discover that the true evil is just awakening. As tensions escalate, Carnegie makes a choice that he will pay for in blood. Entering the post-bomb city, the Gnomes and other species of the Nine that have taken the Human world for their own continue to show the surviving humans that the Old World is gone, and it will never be the same again. With the arrival of the rulers of each race, Cheradyn’s identity is threatened and she must face demons of her own past to become the Faerie the New World needs her to be. As the world continues to reset, the Princess learns that she must protect the ones who have been there for her. Moving in the shadows, Nicholas contends with the darkness inside him and the greater evil comes to the foreground, inciting other dark beings to the anarchic tendencies they have always hoped would be unleashed. Somewhere in Texas, a young businessman fights the post-apocalyptic southwest, his companions, and a mysterious power inside him that threatens to tear him apart. Darkness is on the move as ancient secrets are revealed, but hope still finds a small place in the creeping void. Hope, however, is in short supply for the Nine. The true evil is revealed. He has planned this for centuries. The Nine are not prepared.',428,'2019-07-03','2024-03-30',1,'2024-03-15',1),(3,'https://i.imgur.com/8AuJTCq.jpg','Tales of the Nine','From Arizona to Massachusetts, to the Caribbean and deep under the earth in prisons so dark, only evil can grow, the world of the Nine is revealed. In seventeen short stories we explore some of the origin stories through first-hand accounts as mysteries are both solved and revealed. With many characters, new and known, the Nine and their true threat, their cataclysm from a lost history, is offered in a different medium. The Time of Tears: Tales of the Nine deepens the lore through time: past, present, and future, preparing our heroes for the last battle for survival all of them must face. Questions are answered. The cataclysm is unleashed in The Tales of the Nine.',148,'2019-08-17','2024-03-30',1,'2024-03-15',1),(4,'https://i.imgur.com/jBrsMog.jpg','Tide of Darkness (Dark World Trilogy Book 1)','They say the land flourished once, ripe with wealth and blessed by nature, but those are only stories. There is no light now—there is only the Darkness. Mirren has grown up hearing tales of the Dark World from the safety of Similis, a utopian society with no poverty, no violence and no choices. Rumors of the horrors that writhe in the darkness keep anyone from venturing further than the Boundary, but when a mysterious illness befalls her brother, Mirren is desperate to save him—desperate enough to cross into the wild land to find the cure he needs to survive. Raised beyond the Boundary, Shaw has only ever known violence. With no laws to inhibit the cruel reign of warlords and a curse that keeps the land on the edge of starvation, he understands the only way to survive is by being more ruthless than everyone else. When he finds a panicked woman escaping Similis, he realizes he’s been granted a rare gift of fate: a way to get back what was stolen from him. Infuriatingly enchanting and not at all what he expected, Mirren challenges Shaw at every turn. But the pair soon discover their greatest fight may not lie with each other. A prophecy has been unearthed, and if it speaks the truth, one of them may be the key to breaking the curse. But light is a dangerous thing to wield in a land ruled by the dark. Together, they must decide if love and freedom are worth the cost. Tide of Darkness is a New Adult fantasy romance and is intended to be enjoyed by mature audiences. It contains mature themes, sexual content, violence, gore and references to abuse. For a full list of trigger warnings, please visit the author\'s social media or website.',495,'2022-08-30','2024-03-30',1,'2024-03-15',2),(5,'https://i.imgur.com/DXoYn3a.jpg','Flame of Shadow (Dark World Trilogy Book 2)','All Mirren ever wanted was to save her brother, though now that she’s seen the horror and beauty of the Dark World, Similis feels more suffocating than ever. Her heart broken and her power now stifled, she vows to live an ordinary life, but when the Boundary is breached and the lights that have shone for a thousand years begin to flicker, she knows must protect her home from the growing threat of the Praeceptor. Even if it means leaving behind the brother she sacrificed everything for. Because the warlord has brought destruction to their gates, and if Mirren doesn’t decipher the remainder of the Dead Prophecy, both Ferusa and Similis will fall to the Darkness. And it isn’t just the Praeceptor who seeks to stop her. Leading his father’s reign of terror is the newly returned heir. Soulless, cruel, and set on vengeance, Shaw will stop at nothing to get what he wants—including destroying the woman he once loved. To thwart Shaw and save Ferusa, Mirren will have to find the depths of her power and push herself to the edge of her humanity. She must decide once and for all, where the line between dark and light lies. Because the Darkness demands souls, and it is coming for hers. Flame of Shadow is the second book in the Dark World Trilogy and is a dark fantasy romance intended for audiences 18+ as it contains graphic violence and sexual content. For a full list of trigger warnings, please see the author\'s social media.',498,'2022-12-06','2024-03-30',1,'2024-03-15',2),(6,'https://i.imgur.com/byF0ZAf.jpg','Wave of Light (Dark World Trilogy Book 3)','The Darkness changes all those it touches... Mirren has learned from her time in Ferusa that light cannot exist without the dark, nor beauty without pain. She has bled and fought, given everything she has to protect those she loves, and still, the Darkness demands more. With the return of nature magic and the rise of an ancient evil, the Dead Prophecy is the only way to restore balance to the land--but Mirren fears the price may be too high to pay. In the thrilling conclusion to the epic fantasy trilogy, loyalties will be tested... Souls will be shattered... And sacrifices will be made, as the Darkness rises for its final calling. Wave of Light is a new adult fantasy intended to be enjoyed by mature audiences. It contains mature themes, sexual content, violence, gore and references to abuse. For a full list of trigger warnings, please visit the author\'s website.',583,'2023-11-14','2024-03-30',1,'2024-03-15',2),(7,'https://i.imgur.com/olTZZRa.jpg','A Twist of Demon (Cocktails in Hell Book 1)','Want longer hair, whiter teeth, a smaller nose? Violet has a potion for that. Want to hex an enemy, make someone fall in love with you, or curse someone? Well…that will cost you. By day, Violet is a supposed charlatan running a potion shop in New Orleans and catering to drunk tourists who want to take a walk on the wild side. By night, she’s a Potion Master, a rare, magical being whose shop straddles the portal to Earth and Hell, slinging potions to magical beasts who only come out at night. She’s also the protector of both, a neutral being who carefully navigates the Accords between oblivious humans and the creatures who wouldn’t mind snacking on them. Unfortunately for both sides, Violet is terrible at her job. After the last Potion Master dies a horrible death and she’s pulled out of anonymity by a handsome and super annoying demon, Violet’s shop transforms and she’s thrust into unwanted instafame. And not the good kind, either. Suddenly, everyone either wants to date her, or they want to kill her. And, honestly? Violet isn’t sure which one is easier anymore.',186,'2023-04-06','2024-03-30',1,'2024-03-15',3),(8,'https://i.imgur.com/YlbhAYq.jpg','A Shake of Succubus (Cocktails in Hell Book 2)','Violet is the newest Potionsmaster, Guardian of the Hell Gates, and Lucifer has his eye on her… With her life a weird mess right now, Violet has no one to turn to. Az is still in hiding, and she’s never been able to trust Max. Lucifer has offered a shoulder, but Violet knows better than to trust the original Serpent and her brand spanking new employer. Doesn’t she? As the hunt for the creature who escaped the boundaries continues, more Potionsmasters meet their ends. But when someone she definitely shouldn\'t trust offers her a cryptic clue, Violet has to decide if her life is worth the truth. Can she endanger everyone she loves and the entire world to save her own hide? Or will she make the ultimate sacrifice and take her secret to the grave?',210,'2023-07-26','2024-03-30',1,'2024-03-15',3),(9,'https://i.imgur.com/2sN0YIR.jpg','A Stir of Fairies (Cocktails in Hell Book 3)','Violet\'s secret is out. Now comes the fun part… It\'s time to train. With Violet\'s identity revealed to her closest allies, the time has come for her to embrace who she is. But who is she anyway? Witch? Angel? Demon? None of the above? Meanwhile, Daddy Dearest is busy gathering a powerful force to stage a coup in Heaven, while Violet and the crew have to harness her powers and teach her to use them before he succeeds. Between slinging drinks for Hell\'s finest, training for a potential world-ending war, and trying to figure out why the new brooding bar guest keeps giving her funny looks, Violet has her hands full. And then came the dragons... Unfortunately, Violet ain\'t seen nothing yet.',203,'2023-10-10','2024-03-30',1,'2024-03-15',3),(10,'https://i.imgur.com/SuPhH2m.jpg','A Dash of Vampire (Cocktails in Hell Book 4)','What happens when you accidentally kidnap a Fae King, invite a demented vampire queen to bunk with you, and enlist both to plot revenge against the dragons? Violet doesn\'t know yet, but she\'s about to find out. Her little jaunt to the fae lands ended with Violet carrying more luggage out than she brought in. Now, with a ticked off Unseelie King brooding and tied up in the corner, she has to figure out how to smooth relations while also deciphering Michael\'s newest plans. Toss in a sullen traitor, an emotional fairy, and a human(ish?) law enforcement officer sniffing around, and Violet\'s juggling more balls than she knows what to do with. As if that\'s not bad enough, Violet receives one final visitor to her bar the night before she visits the dragons, and this one is a real doozy… Welcome to Swan\'s, where the creatures are weird, the drinks are potent, and the antics are completely unhinged.',219,'2023-12-19','2024-03-30',1,'2024-03-15',3),(11,'https://i.imgur.com/Qdz9MBc.jpg','A Touch of Angel (Cocktails in Hell Book 5)','When an accidental meeting results in an unlikely alliance, Violet discovers earth-shattering secrets… Sounds like a Tuesday to her. Lucifer\'s efforts to secure the angel\'s cooperation are proving unsuccessful until a chance meeting ends with an invitation to attend a forum. There\'s only one caveat. Violet\'s presence is required, and she must offer a demonstration of her powers. Lucifer is against it. Clara wants to destroy them all. Dave is…Dave. And the enigmatic ruler of the dragons doesn\'t care about any of it. He\'s chosen to pursue Violet with a single-minded focus. But whether he wants her for her or her powers remains unknown. Violet has to decide soon whether she\'s ready to face the world and claim her heritage. But what she doesn\'t realize is her heritage isn\'t straightforward at all, and the choice she has to make could bring the entire world to its knees.',228,'2024-03-05','2024-03-30',1,'2024-03-15',3),(12,'http://covers.openlibrary.org/b/id/14302637-L.jpg','The Silmarillion','For the first time ever, a very special edition of the forerunner to The Lord of the Rings, illustrated throughout in colour by J.R.R. Tolkien himself and with the complete text printed in two colours.\r\n\r\nThis definitive new edition includes, by way of an introduction, a letter written by Tolkien in 1951 which provides a brilliant exposition of the earlier Ages, and for the first time in its history is presented with J.R.R. Tolkien’s own paintings and drawings, which reveal the breathtaking grandeur and beauty of his vision of the First Age of Middle-earth.',448,'2022-01-01','2024-03-30',0,'2024-03-30',NULL),(13,'http://covers.openlibrary.org/b/id/9184808-L.jpg','The Last Battle','When evil comes to Narnia, Jill and Eustace help fight the great last battle and Aslan leads his people to a glorious new paradise.',211,'1994-01-01','2024-03-30',0,'2024-03-30',NULL),(14,'http://covers.openlibrary.org/b/id/6950992-L.jpg','The Silver Chair','Two English children undergo hair-raising adventures as they go on a search and rescue mission for the missing Prince Rillian, who is held captive in the underground kingdom of the Emerald Witch.',217,'1970-01-01','2024-03-30',0,'2024-03-30',NULL),(15,'http://covers.openlibrary.org/b/id/13303087-L.jpg','The Lion, the Witch and the Wardrobe','Four English school children find their way through the back of a wardrobe into the magic land of Narnia and assist its ruler, the golden lion Aslan, in defeating the White Witch who has cursed the land with eternal winter.',189,'2003-01-01','2024-03-30',0,'2024-03-30',NULL),(16,'http://covers.openlibrary.org/b/id/9184585-L.jpg','Prince Caspian','Four children help Prince Caspian and his army of Talking Beasts to free Narnia from evil.',223,'2008-01-01','2024-03-30',0,'2024-03-30',NULL),(17,'http://covers.openlibrary.org/b/id/11204800-L.jpg','The Fellowship of the Ring','This edition is based on the reset edition first published 2002 which is a revised version of the reset edition first published 1994.',407,'2011-01-01','2024-03-30',0,'2024-03-30',NULL),(18,'http://covers.openlibrary.org/b/id/12513026-L.jpg','The Two Towers','The second part of J.R.R. Tolkien\'s epic adventure THE LORD OF THE RINGS\r\n\r\nThe Company of the Ring is sundered. Frodo and Sam continue their journey alone down the great River Anduin - alone, that is, save for the mysterious creeping figure that follows wherever they go.\r\n\r\nThus continues the classic tale begun in The Fellowship of the Ring, which reaches its awesome climax in The Return of the King.\r\n--back cover',449,'1999-01-01','2024-03-30',0,'2024-03-30',NULL),(19,'http://covers.openlibrary.org/b/id/12512875-L.jpg','The Return of the King','The third part of J.R.R. Tolkien\'s epic adventure The Lord of The Rings.\r\n\r\nThe armies of the Dark Lord are massing as his evil shadow spreads even wider. Men, Dwarves, Elves and Ents unite forces to do battle against the Dark. Meanwhile, Frodo and Sam struggle further into Mordor in their heroic quest to destroy the One Ring.\r\n\r\nThe devastating conclusion of J.R.R. Tolkien\'s classic tale, begun in the The Fellowship of the Rings and The Two Towers.',563,'1999-01-01','2024-03-30',0,'2024-03-30',NULL),(20,'http://covers.openlibrary.org/b/id/14339093-L.jpg','The Handmaid\'s Tale','The Handmaid\'s Tale is not only a radical and brilliant departure for Margaret Atwood, it is a novel of such power that the reader will be unable to forget its images and its forecast. Set in the near future, it describes life in what was once the United States, now called the Republic of Gilead, a monotheocracy that has reacted to social unrest and a sharply declining birthrate by reverting to, and going beyond, the repressive intolerance of the original Puritans. The regime takes the Book of Genesis absolutely at its word, with bizarre consequences for the women and men of its population.\r\n\r\nThe story is told through the eyes of Offred, one of the unfortunate Handmaids under the new social order. In condensed but eloquent prose, by turns cool-eyed, tender, despairing, passionate, and wry, she reveals to us the dark corners behind the establishment\'s calm facade, as certain tendencies now in existence are carried to their logical conclusions. The Handmaid\'s Tale is funny, unexpected, horrifying, and altogether convincing. It is at once scathing satire, dire warning, and tour de force. It is Margaret Atwood at her best.\r\n--front flap',311,'1986-01-01','2024-03-30',0,'2024-03-30',NULL),(21,'http://covers.openlibrary.org/b/id/14468279-L.jpg','The Lord of the Rings','For the first time ever, a very special edition of the classic masterpiece, illustrated throughout in colour by the author himself and with the complete text printed in two colours. This one-volume hardback edition contains the complete text, fully corrected and reset, which is printed in red and black and features, for the very first time, thirty colour illustrations, maps and sketches drawn by Tolkien himself as he composed this epic work. These include the pages from the Book of Mazarbul, marvellous facsimiles created by Tolkien to accompany the famous \'Bridge of Khazad-dum\' chapter. Also appearing are two removable fold-out maps drawn by Christopher Tolkien revealing all the detail of Middle-earth. Sympathetically packaged to reflect the classic look of the first edition, this new edition of the bestselling hardback will prove irresistible to collectors and new fans alike.',1248,'2021-01-01','2024-03-30',0,'2024-03-30',NULL),(22,'http://covers.openlibrary.org/b/id/11687685-L.jpg','Northern Lights','Philip Pullman has created a fantasy world, where demons swoop and scuttle along the streets of London and Oxford, where the mysterious Dust swirls invisibly through the air, and where only one child knows secrets the adults would kill for.',397,'2007-01-01','2024-03-30',0,'2024-03-30',NULL),(23,'http://covers.openlibrary.org/b/id/14546252-L.jpg','Harry Potter and the Prisoner of Azkaban','For Twelve long years, the dread fortress of Azkaban held an infamous prisoner named Sirius Black. Convicted of killing thirteen people with a single curse, he was said to be the heir apparent to the Dark Lord, Voldemort.\r\n\r\nNow he has escaped, leaving only two clues as to where he might be headed: Harry Potter\'s defeat of You-Know-Who was Black\'s downfall as well. And the Azkaban guards heard Black muttering in his sleep, \"He\'s at Hogwarts...he\'s at Hogwarts.\"\r\n\r\nHarry Potter isn\'t safe, not even within the walls of his magical school, surrounded by his friends. because on top of it all, there may well be a traitor in their midst.\r\n\r\n(front flap)',435,'2007-01-01','2024-03-30',0,'2024-03-30',NULL),(24,'http://covers.openlibrary.org/b/id/14553564-L.jpg','Alice\'s Adventures in Wonderland','xiii, 151 p. [8] leaves of plates : 20 cm',198,'1928-01-01','2024-03-30',0,'2024-03-30',NULL),(25,'http://covers.openlibrary.org/b/id/6856376-L.jpg','Perfume','Follows an odorless baby found orphaned in Paris in 1738 as he grows into a monster obsessed with his perfect sense of smell and a desire to capture, by any means, the ultimate scent that will make him human.',255,'2001-01-01','2024-03-30',0,'2024-03-30',NULL),(26,'http://covers.openlibrary.org/b/id/12894969-L.jpg','Charlie and the Chocolate Factory','What do Augustus Gloop, Veruca Salt, Violet Beauregarde, Mike Teavee, and Charlie Bucket (Our Hero) have in common? They all love chocolate. And they each have won a chance to tour the famous chocolate factory of the fabulous, but mysterious, Mr. Willy Wonka.\r\n\r\nWhat happens when these five children meet Mr. Willy Wonka? What strange, exciting, and exotic things will they discover inside the chocolate factory? And what should happen if—one by one—the children disobey Mr. Wonka\'s orders?\r\n\r\nThis is the uproarious premise of Roald Dahl\'s most endearing and popular work for children.',162,'1973-01-01','2024-03-30',0,'2024-03-30',NULL),(27,'http://covers.openlibrary.org/b/id/12025692-L.jpg','Harry Potter and the Half-Blood Prince','The war against Voldemort is not going well: even Muggle governments are noticing. Ron scans the obituary pages of The Daily Prophet looking for familiar names. Dumbledore is absent from Hogwarts for long stretches of time, and the Order of the Phoenix has already suffered losses.\r\n\r\nAnd yet …\r\n\r\nAs in all wars, life goes on. Sixth-year students learn to Apparate, and lose a few eyebrows in the process. The Weasley twins expand their business. Teenagers flirt and fight and fall in love. Classes are never straightforward, though Harry receives some extraordinary help from the mysterious Half-Blood Prince.\r\n\r\nSo it\'s the home front that takes center stage in the multilayered sixth installment of the story of Harry Potter. Here at Hogwart\'s , Harry will search for the full and complex story of the boy who became Lord Voldemort - and thereby find what may be his only vulnerability.\r\n\r\n--front flap',652,'2005-07-01','2024-03-30',0,'2024-03-30',NULL),(28,'http://covers.openlibrary.org/b/id/12548071-L.jpg','The BFG','The Big Friendly Giant is no ordinary bone-crunching giant. He is far too nice and it\'s lucky for Sophie that he is. If she had been carried off by any of the other giants she would have been breakfast. When Sophie hears that the giants are headed to England to steal some little children, she and the BFG decide they must stop them once and for all.',207,'2016-01-01','2024-03-30',0,'2024-03-30',NULL),(29,'http://covers.openlibrary.org/b/id/14601551-L.jpg','Flatland','The book that influenced writers from Carl Sagan to Stephen Hawking, Flatland is set in a two-dimensional world where life exists only in lines and shapes - until one of its inhabitants, \'A. Square\', has his perspective transformed forever. This brilliantly eccentric classic is an invitation to see beyond our own reality.',160,'2020-01-01','2024-03-30',0,'2024-03-30',NULL),(30,'http://covers.openlibrary.org/b/id/13274521-L.jpg','Harry Potter and the Chamber of Secrets','When the Chamber of Secrets is opened again at the Hogwarts School for Witchcraft and Wizardry, second-year student Harry Potter finds himself in danger from a dark power that has once more been released on the school.',5,'2002-01-01','2024-03-30',0,'2024-03-30',NULL),(31,'http://covers.openlibrary.org/b/id/14465455-L.jpg','Fantastic Mr Fox','vii, 59 pages : 20 cm',80,'2017-01-01','2024-03-30',0,'2024-03-30',NULL),(32,'http://covers.openlibrary.org/b/id/12376643-L.jpg','Harry Potter and the Deathly Hallows','Harry Potter is preparing to leave the Dursleys and Privet Drive for the last time. The future that awaits him is full of danger, not only for him, but for anyone close to him - and Harry has already lost so much. Only by destroying Voldemort\'s remaining Horcruxes can Harry free himself and overcome the Dark Lord\'s forces of evil. In a final and perilous journey, Harry must find the strength and the will to face a deadly confrontation that is his alone to fight.\r\n--back cover',607,'2010-11-01','2024-03-30',0,'2024-03-30',NULL),(33,'http://covers.openlibrary.org/b/id/12639921-L.jpg','Charlotte’s Web','Wilbur didn\'t want food, he wanted love. He wanted a friend — someone who would play with him.\r\n\r\nOne spring morning a little girl called Fern rescues a runt and names him Wilbur. But then Wilbur is sent to live on a farm where he meets Charlotte, a beautiful large grey spider. They become best friends and, when Wilbur is faced with a dreadful fate, Charlotte must find a very clever way to save him.',184,'2013-01-01','2024-03-30',0,'2024-03-30',NULL),(78,'http://covers.openlibrary.org/b/id/7380122-L.jpg','A Wrinkle in Time','Meg Murry and her friends become involved with unearthly strangers and a search for Meg\'s father, who has disappeared while engaged in secret work for the government.',212,'2007-01-01','2024-03-30',0,'2024-03-30',NULL),(79,'http://covers.openlibrary.org/b/id/11403617-L.jpg','The Wind in the Willows','The escapades of four animal friends who live along a river in the English countryside--Toad, Mole, Rat, and Badger.',180,'2000-01-01','2024-03-30',0,'2024-03-30',NULL),(80,'http://covers.openlibrary.org/b/id/10606253-L.jpg','The Giver','Given his lifetime assignment at the Ceremony of Twelve, Jonas becomes the receiver of memories shared by only one other in his community and discovers the terrible truth about the society in which he lives.',225,'2012-01-01','2024-03-30',0,'2024-03-30',NULL),(81,'http://covers.openlibrary.org/b/id/12180947-L.jpg','Dracula','\"Dracula\" opens the door to the unknown. Do all superstitions have a basis in reality, or are they just folklore? Bram Stoker\'s \"Dracula\" is one of the most feared and most loved tales in literature. From Transylvania to London, the reader explores the dark side of mystery and intrigue riding on the coattails of Dracula\'s cape, changing from wolf to bat, and living only in the nighttime. Do vampires really exist? Read \"Dracula\" and decide for yourself.',63,'2012-01-01','2024-03-30',0,'2024-03-30',NULL),(82,'http://covers.openlibrary.org/b/id/12895066-L.jpg','The Witches','A young boy and his Norwegian grandmother, who is an expert on witches, together foil a witches\' plot to destroy the world\'s children by turning them into mice.',206,'1985-01-01','2024-03-30',0,'2024-03-30',NULL),(83,'http://covers.openlibrary.org/b/id/9550137-L.jpg','Le Tour du Monde en Quatre-Vingts Jours','In 1872, English gentleman Phileas Fogg has many adventures as he tries to win a bet that he can travel around the world in eighty days.',252,'2015-01-01','2024-03-30',0,'2024-03-30',NULL),(84,'http://covers.openlibrary.org/b/id/120821-L.jpg','Le Morte d\'Arthur','Contains classic stories of the life and death of the legendary King of England and the adventures of his noble courtiers.',231,'1975-01-01','2024-03-30',0,'2024-03-30',NULL),(85,'http://covers.openlibrary.org/b/id/14315129-L.jpg','Of Mice and Men','Travelling across America in search of who you are - now they do it on cycles, in cars, by bus or in the time-honored tradition of foot and thumb. The wanderers of today may wear their hair long and speak a different jargon, but their trip is one that men (and women) have taken for as long as this country has been pushing at its frontiers.\r\n--back cover',118,'1974-10-01','2024-03-30',0,'2024-03-30',NULL),(86,'http://covers.openlibrary.org/b/id/12940454-L.jpg','Les Misérables','Story of Jean Valjean, the ex-convict who rises against all odds from galley slave to mayor, and the fanatical police inspector Javert who dedicates his life to recapturing him.',1468,'2013-01-01','2024-03-30',0,'2024-03-30',NULL),(87,'http://covers.openlibrary.org/b/id/-1-L.jpg','Nineteen Eighty-Four','Portrays a terrifying vision of life in the future when a totalitarian government, considered a \"Negative Utopia,\" watches over all citizens and directs all activities, becoming more powerful as time goes by.',283,'2016-01-01','2024-03-30',0,'2024-03-30',NULL),(88,'http://covers.openlibrary.org/b/id/12917702-L.jpg','The Prince','\"Machiavellianism\" is a widely used negative term to characterize unscrupulous politicians of the sort Machiavelli described most famously in The Prince. Machiavelli described immoral behavior, such as dishonesty and killing innocents, as being normal and effective in politics. He even seemed to endorse it in some situations. The book itself gained notoriety when some readers claimed that the author was teaching evil, and providing \"evil recommendations to tyrants to help them maintain their power.\" The term \"Machiavellian\" is often associated with political deceit, deviousness, and realpolitik. On the other hand, many commentators, such as Baruch Spinoza, Jean-Jacques Rousseau and Denis Diderot, have argued that Machiavelli was actually a Republican, even when writing The Prince, and his writings were an inspiration to Enlightenment proponents of modern democratic political philosophy -- publisher\'s website.',116,'2016-01-01','2024-03-30',0,'2024-03-30',NULL),(89,'http://covers.openlibrary.org/b/id/12646545-L.jpg','The Hunger Games','In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.\r\n\r\nSixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister\'s place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love.',374,'2008-10-01','2024-03-30',0,'2024-03-30',NULL),(90,'http://covers.openlibrary.org/b/id/10108044-L.jpg','A Midsummer Night\'s Dream','adaptation',61,'2006-01-01','2024-03-30',0,'2024-03-30',NULL),(91,'http://covers.openlibrary.org/b/id/540796-L.jpg','The Voyage of the Dawn Treader','Lucy and Edmund, accompanied by their peevish cousin Eustace, sail to the land of Narnia where Eustace is temporarily transformed into a green dragon because of his selfish behavior and skepticism.',278,'2001-01-01','2024-03-30',0,'2024-03-30',NULL),(92,'http://covers.openlibrary.org/b/id/12627333-L.jpg','Bridge to Terabithia','The life of a ten-year-old boy in rural Virginia expands when he becomes friends with a newcomer who subsequently meets an untimely death trying to reach their hideaway, Terabithia, during a storm.',128,'1995-01-01','2024-03-30',0,'2024-03-30',NULL),(93,'http://covers.openlibrary.org/b/id/14433561-L.jpg','The water-babies','The adventures of Tom, a sooty little chimney sweep with a great longing to be clean, who is stolen by fairies and turned into a water baby.',319,'1923-01-01','2024-03-30',0,'2024-03-30',NULL),(94,'http://covers.openlibrary.org/b/id/14445885-L.jpg','Do Androids Dream of Electric Sheep?','1 volume ; 20 cm',224,'2017-01-01','2024-03-30',0,'2024-03-30',NULL),(95,'http://covers.openlibrary.org/b/id/13392645-L.jpg','The Cat in the Hat','A zany but well-meaning cat brings a cheerful, exotic, and exuberant form of chaos to a household of two young children one rainy day while their mother is out.\r\n\r\nDos niños que se quedan en casa en un día lluvioso, reciben la inesperada visita del Gato Ensombrerado.',61,'2015-01-01','2024-03-30',0,'2024-03-30',NULL),(96,'http://covers.openlibrary.org/b/id/9269965-L.jpg','A Game of Thrones','From a master of contemporary fantasy comes the first novel of a landmark series unlike any you’ve ever read before. With A Game of Thrones, George R. R. Martin has launched a genuine masterpiece, bringing together the best the genre has to offer. Mystery, intrigue, romance, and adventure fill the pages of this magnificent saga, the first volume in an epic series sure to delight fantasy fans everywhere.\r\n\r\nLong ago, in a time forgotten, a preternatural event threw the seasons out of balance. In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister forces are massing beyond the kingdom’s protective Wall. To the south, the king’s powers are failing—his most trusted adviser dead under mysterious circumstances and his enemies emerging from the shadows of the throne. At the center of the conflict lie the Starks of Winterfell, a family as harsh and unyielding as the frozen land they were born to. Now Lord Eddard Stark is reluctantly summoned to serve as the king’s new Hand, an appointment that threatens to sunder not only his family but the kingdom itself.\r\n\r\nSweeping from a harsh land of cold to a summertime kingdom of epicurean plenty, A Game of Thrones tells a tale of lords and ladies, soldiers and sorcerers, assassins and bastards, who come together in a time of grim omens. Here an enigmatic band of warriors bear swords of no human metal; a tribe of fierce wildlings carry men off into madness; a cruel young dragon prince barters his sister to win back his throne; a child is lost in the twilight between life and death; and a determined woman undertakes a treacherous journey to protect all she holds dear. Amid plots and counter-plots, tragedy and betrayal, victory and terror, allies and enemies, the fate of the Starks hangs perilously in the balance, as each side endeavors to win that deadliest of conflicts: the game of thrones.\r\n\r\nUnparalleled in scope and execution, A Game of Thrones is one of those rare reading experiences that catch you up from the opening pages, won’t let you go until the end, and leave you yearning for more.\r\n\r\n--jacket',694,'1996-01-01','2024-03-30',0,'2024-03-30',NULL),(97,'http://covers.openlibrary.org/b/id/14435693-L.jpg','Artemis Fowl','When a twelve-year-old evil genius tries to restore his family fortune by capturing a fairy and demanding a ransom in gold, the fairies fight back with magic, technology, and a particularly nasty troll.',312,'2001-01-01','2024-03-30',0,'2024-03-30',NULL),(98,'http://covers.openlibrary.org/b/id/9941477-L.jpg','Ranma 1/2','A new teacher, Hinako Ninomiya, has come to Furinkan High and she possesses a martial arts ability that drains an opponent\'s energy as she transforms from childlike stature into a tall, sultry siren.Can Ranma defeat her?',182,'2003-01-01','2024-03-30',0,'2024-03-30',NULL),(99,'http://covers.openlibrary.org/b/id/13256345-L.jpg','Hänsel und Gretel','A poor woodcutter\'s children, lost in the forest, come upon a house made of bread, cakes, and candy, occupied by a wicked witch who likes to have children for dinner.',40,'1984-01-01','2024-03-30',0,'2024-03-30',NULL),(100,'http://covers.openlibrary.org/b/id/14499654-L.jpg','L\'Île mystérieuse','493 pages ; 21 cm',496,'2017-01-01','2024-03-30',0,'2024-03-30',NULL),(101,'http://covers.openlibrary.org/b/id/12907451-L.jpg','Catching Fire','Продолжение романа «Голодные игры», ставшего международным бестселлером. Китнисс и Пит выжили в страшных Голодных играх, заставили признать победителями их обоих. Но многие из тех, кому не нравится победа, считают парня и девушку опасными. У этих людей хватает силы и власти, чтобы с легкостью убить и Пита, и Китнисс. Но никому не под силу их разъединить. Теперь все подстроено так, что Пит и Китнисс вынуждены вернуться на очередной тур Голодных игр. Они снова окажутся лицом к лицу со смертью — ради своей любви, своего будущего, своей надежды на счастье.',414,'2010-01-01','2024-03-30',0,'2024-03-30',NULL),(102,'http://covers.openlibrary.org/b/id/13012095-L.jpg','Percy Jackson & the Olympians','Percy Jackson is about to be kicked out of boarding school...again. And that\'s the least of his troubles. Lately, mythological monsters and the gods of Mount Olympus seem to be walking straight out of the pages of Percy\'s Greek mythology textbook and into his life. And worse, he\'s angered a few of them. Zeus\'s master lightning bolt has been stolen, and Percy is the prime suspect. Now Percy and his friends have just ten days to find and return Zeus\'s stolen property and bring peace to a warring Mount Olympus. But to succeed on his quest, Percy will have to do more than catch the true thief: he must comes to terms with the father who abandoned him; solve the riddle of the Oracle, which warns him of betrayal by a friend; and unravel a treachery more powerful than the gods themselves.',226,'2018-01-01','2024-03-30',0,'2024-03-30',NULL),(103,'http://covers.openlibrary.org/b/id/10317595-L.jpg','Breaking Dawn','Twilight tempted the imagination ... New Moon made readers thirsty for more ... Eclipse turned the saga into a worldwide phenomenon ... And now - the book that everyone has been waiting for ... Breaking Dawn. In the much anticipated fourth book in Stephenie Meyer\'s love story, questions will be answered and the fate of Bella and Edward will be revealed.',702,'2010-01-01','2024-03-30',0,'2024-03-30',NULL),(104,'http://covers.openlibrary.org/b/id/7904535-L.jpg','A Wizard of Earthsea','A boy grows to manhood while attempting to subdue the evil he unleashed on the world as an apprentice to the Master Wizard.',183,'1975-01-01','2024-03-30',0,'2024-03-30',NULL),(105,'http://covers.openlibrary.org/b/id/12817552-L.jpg','So long, and thanks for all the fish','There is a knack to flying. The knack lies in learning how to throw yourself at the ground and miss. It\'s not an easy thing to do and Arthur Dent thinks he\'s the only human who\'s been able to master this nifty little trick - until he meets Fenchurch, the girl of his dreams. Fenchruch knows how the world could be made a good and happy place. Unfortunately she\'s forgotten. Convinced that the secret lies within God\'s Final Message to His Creation, they go in search of it. And, in a dramatic break with tradition, actually find it.',187,'2016-01-01','2024-03-30',0,'2024-03-30',NULL),(106,'http://covers.openlibrary.org/b/id/9330625-L.jpg','Skeleton Crew','Welcome to the world of terror! Let the one and only Stephen King take you into a wold where a macabre mist traps humanity in its swirling horror…where a beautiful young girl offers satanic seduction…where a child’s toy becomes the ultimate instrument of evil…where a man is given a devilish machine that grans him godlike powers…where nothing is what it seems and nowhere is safe…\r\n\r\nStephen King takes you into this world—and the skill that makes him the most spellbinding storyteller of our time will not let you escape before the final fearful turn of the page.\r\n—back cover',573,'1986-06-01','2024-03-30',0,'2024-03-30',NULL),(107,'http://covers.openlibrary.org/b/id/14420908-L.jpg','American Gods','First published in 2001, American Gods became an instant classic, lauded for its brilliant synthesis of “mystery, satire, sex, horror, and poetic prose” (Washington Post) and as a modern phantasmagoria that “distills the essence of America” (Seattle Post-Intelligencer). It is the story of Shadow—released from prison just days after his wife and best friend are killed in an accident—who gets recruited to be bodyguard, driver, and errand boy for the enigmatic trickster, Mr. Wednesday. So begins Shadow’s dark and strange road trip, one that introduces him to a host of eccentric characters whose fates are mysteriously intertwined with his own. For, beneath the placid surface of everyday life, a storm is brewing—an epic war for the very soul of America—and Shadow is standing squarely in its path.\r\n--back cover',784,'2016-09-01','2024-03-30',0,'2024-03-30',NULL),(108,'http://covers.openlibrary.org/b/id/12754679-L.jpg','The Price of Salt','This novel was first published in 1952 under the pseudonym Clare Morgan. The Price of Salt tells the riveting story of Therese Belivet, a stage designer trapped in a department-store day job, whose salvation arrives one day in the form of Carol Aird, an alluring suburban housewife in the throes of a divorce. They fall in love and set out across the United States, pursued by a private investigator who eventually blackmails Carol into a choice between her daughter and her lover.',256,'2015-01-01','2024-03-30',0,'2024-03-30',NULL),(109,'http://covers.openlibrary.org/b/id/11555526-L.jpg','The Gunslinger','In this first novel in his epic fantasy masterpiece, Stephen King introduces readers to one of his most enigmatic heroes, Roland of Gilead, the Last Gunslinger. He is a haunting figure, a loner, on a spellbinding journey into good and evil, in a desolate world which frighteningly echoes our own.\r\n\r\nIn his first step towards the powerful and mysterious Dark Tower, Roland encounters an alluring woman named Alice, begins a friendship with Jake, a kid from New York, and faces an agonising choice between damnation and salvation as he pursues the Man in Black.\r\n\r\nBoth grippingly realistic and eerily dreamlike, The Gunslinger leaves readers eagerly awaiting the next chapter.\r\n--back cover',280,'2013-01-01','2024-03-30',0,'2024-03-30',NULL),(110,'http://covers.openlibrary.org/b/id/13074516-L.jpg','Dragonflight','At a time when the number of Dragonriders has fallen too low for safety and only one Weyr trains the dragons and their riders, the Red Star approaches Pern, threatening it with disaster.',303,'1979-01-01','2024-03-30',0,'2024-03-30',NULL),(111,'http://covers.openlibrary.org/b/id/10139238-L.jpg','Watership Down','\"Fiver could sense danger. Something terrible was going to happen to the warren, he felt sure of it. So did his brother Hazel, for Fiver\'s sixth sense was never wrong. They had to leave immediately, and they had to persuade the other rabbits to join them. And so begins a long and perilous journey of a small band of rabbits in search of a safe home. Fiver\'s vision finally leads them to Watership Down, but here they face their most difficult challenge of all\"--Back cover. Suggested level: intermediate, junior secondary.',474,'2012-01-01','2024-03-30',0,'2024-03-30',NULL),(112,'http://covers.openlibrary.org/b/id/10768657-L.jpg','The Tombs of Atuan','Tenar was the priestess of the Nameless Ones-the ancient powers. She was responsible for remembering and worshipping them. She forgot her family and home. Then came the young wizard, Ged, who trespassed where none had gone before and none had lived.',146,'1971-01-01','2024-03-30',0,'2024-03-30',NULL),(113,'http://covers.openlibrary.org/b/id/6995279-L.jpg','The sword in the stone','Wart, as young Arthur is called, becomes a wiser, more thoughtful person and a worthy king as a result of Merlin\'s lessons.',288,'1963-01-01','2024-03-30',0,'2024-03-30',NULL),(114,'http://covers.openlibrary.org/b/id/11447888-L.jpg','The Martian','Six days ago, astronaut Mark Watney became one of the first people to walk on Mars.\r\n\r\nNow he\'s sure he\'ll be the first person to die there.\r\n\r\nAfter a dust storm nearly kills him and forces his crew to evacuate the planet while thinking him dead, Mark finds himself stranded on Mars\' surface, completely alone. with no way to signal Earth that he\'s alive. And even if he could get word out, his supplies would be gone years before a rescue could arrive.\r\n\r\nChances are, though, Mark won\'t have time to starve to death. The damaged machinery, unforgiving environment, or plain-old \"human error\" are much more likely to kill him first. But Mark\'s not ready to quit. Armed with nothing but his ingenuity and his engineering skills—and a gallows sense of humor that proves to be his greatest source of strength—he embarks on a dogged quest to stay alive, using his botany expertise to grow food and even hatch- ing a mad plan to contact NASA back on Earth.\r\n\r\nAs he overcomes one seemingly insurmountable obstacle after the next, Mark begins to let himself believe he might make it off the planet alive.\r\n\r\nBut Mars has plenty of surprises in store for him yet.\r\n\r\nGrounded in real, present-day science from the first page to the last. yet propelled by a brilliantly ingenious plot that surprises the reader again and again, The Martian is a truly remarkable thriller: an impossible-to- put-down suspense novel that manages tc read like a real-life survival tale.\r\n--front flap',369,'2014-01-01','2024-03-30',0,'2024-03-30',NULL),(115,'http://covers.openlibrary.org/b/id/12680074-L.jpg','Life, the Universe and Everything','The unhappy inhabitants of planet Krikkit are sick of looking at the night sky above their heads—so they plan to destroy it. The universe, that is. Now only five individuals stand between the killer robots of Krikkit and their goal of total annihilation.\r\n\r\nThey are Arthur Dent, a mild-mannered space and time traveler who tries to learn how to fly by throwing himself at the ground and missing; Ford Prefect, his best friend, who decides to go insane to see if he likes it; Slartibartfast, the indomitable vice president of the Campaign for Real Time, who travels in a ship powered by irrational behavior; Zaphod Beeblebrox, the two-headed, three-armed ex-president of the galaxy; and Trillian, the sexy space cadet who is torn between a persistent Thunder God and a very depressed Beeblebrox.\r\n\r\nHow will it all end? Will it end? Only this stalwart crew knows as they try to avert “universal” Armageddon and save life as we know it—and don’t know it!\r\n([source](https://penguinrandomhousehighereducation.com/book/?isbn=9780307496508))',240,'2021-01-01','2024-03-30',0,'2024-03-30',NULL),(116,'http://covers.openlibrary.org/b/id/9185109-L.jpg','The Chronicles of Narnia','Journeys to the end of the world, fantastic creatures, and epic battles between good and evil—what more could any reader ask for in one book? The book that has it all is The Lion, the Witch and the Wardrobe, written in 1949 by Clive Staples Lewis. But Lewis did not stop there. Six more books followed, and together they became known as The Chronicles of Narnia.\r\n\r\nFor the past fifty years, The Chronicles of Narnia have transcended the fantasy genre to become part of the canon of classic literature. Each of the seven books is a masterpiece, drawing the reader into a land where magic meets reality, and the result is a fictional world whose scope has fascinated generations.\r\n\r\nThis edition presents all seven books—unabridged—in one impressive volume. The books are presented here in chronlogical order, each chapter graced with an illustration by the original artist, Pauline Baynes. Deceptively simple and direct, The Chronicles of Narnia continue to captivate fans with adventures, characters, and truths that speak to readers of all ages, even fifty years after they were first published.\r\n--back cover',768,'2005-01-01','2024-03-30',0,'2024-03-30',NULL),(117,'http://covers.openlibrary.org/b/id/12636231-L.jpg','Artemis Fowl. The Eternity Code','Artemis Fowl. O boy O boy. Every fairy knows d name. But there is no buts. I do not know Wut im sayin. Enjoy d book:)',352,'2003-10-01','2024-03-30',0,'2024-03-30',NULL),(118,'http://covers.openlibrary.org/b/id/6602109-L.jpg','Eragon','In Aagaesia, a fifteen-year-old boy of unknown lineage called Eragon finds a mysterious stone that weaves his life into an intricate tapestry of destiny, magic, and power, peopled with dragons, elves, and monsters',505,'2005-01-01','2024-03-30',0,'2024-03-30',NULL),(119,'http://covers.openlibrary.org/b/id/14369481-L.jpg','Tintenherz','Cornelia Funke, the enormously talented author, brings readers another spellbinding tale of adventure and magic. Meggie lives a quiet life alone with her father, a book-binder. But her father has a deep secret-- he posseses an extraordinary magical power. One day a mysterious stranger arrives who seems linked to her father\'s past. Who is this sinister character and what does he want? Suddenly Meggie is involved in a breathless game of escape and intrigue as her father\'s life is put in danger. Will she be able to save him in time?',544,'1900-01-01','2024-03-30',0,'2024-03-30',NULL),(120,'http://covers.openlibrary.org/b/id/10509682-L.jpg','The Farthest Shore','A young prince joins forces with a master wizard on a journey to discover a cause and remedy for the loss of magic in Earthsea. Darkness Threatens to overtake Earthsea. As the world and its wizards are losing their magic, Ged -- powerful Archmage, wizard, and dragonlord -- embarks on a sailing journey with highborn young prince, Arren. They travel far beyond the realm of death to discover the cause of these evil disturbances and to restore magic to a land desperately thirsty for it.',259,'2012-01-01','2024-03-30',0,'2024-03-30',NULL),(121,'http://covers.openlibrary.org/b/id/7282111-L.jpg','La Nuit','\"Night--A terrifying account of the Nazi death camp horror that turns a young Jewish boy into an agonized witness to the death of his family...the death of his innocence...and the death of his God. Penetrating and powerful, as personal as The diary of Anne Frank, Night awakens the shocking memory of evil at its absolute and carries with it the unforgettable message that this horror must never be allowed to happen again\"--Provided by publisher.',109,'1982-01-01','2024-03-30',0,'2024-03-30',NULL),(122,'http://covers.openlibrary.org/b/id/13011225-L.jpg','The Sea of Monsters','Cool Book',279,'1900-01-01','2024-03-30',0,'2024-03-30',NULL),(123,'http://covers.openlibrary.org/b/id/8390800-L.jpg','Die unendliche Geschichte','This epic work of the imagination has captured the hearts of millions of readers worldwide since it was first published more than a decade ago. Its special story within a story is an irresistible invitation for readers to become part of the book itself. And now this modern classic and bibliophile\'s dream is available in hardcover again.\r\n\r\nThe story begins with a lonely boy named Bastian and the strange book that draws him into the beautiful but doomed world of Fantastica. Only a human can save this enchanted place by giving its ruler, the Childlike Empress, a new name. But the journey to her tower leads through lands of dragons, giants, monsters, and magic and once Bastian begins his quest, he may never return. As he is drawn deeper into Fantastica, he must find the courage to face unspeakable foes and the mysteries of his own heart. \r\n\r\nReaders, too, can travel to the wondrous, unforgettable world of Fantastica if they will just turn the page...\r\n--front flap',396,'1997-01-01','2024-03-30',0,'2024-03-30',NULL),(124,'http://covers.openlibrary.org/b/id/9754433-L.jpg','Rip Van Winkle','A man sleeps for twenty years in the Catskill Mountains wakes to a much-changed world.',69,'1923-01-01','2024-03-30',0,'2024-03-30',NULL),(125,'http://covers.openlibrary.org/b/id/9346340-L.jpg','Something Wicked This Way Comes','The other side of Dandelion Wine, referring to some of the same characters in a gloomier, more frightening way. A growing up story.',215,'1982-02-01','2024-03-30',0,'2024-03-30',NULL),(126,'http://covers.openlibrary.org/b/id/8673392-L.jpg','Guards! Guards!','Here there be dragons ... and the denizens of Ankh-Morpork wish one huge firebreather would return from whence it came. Long believed extinct, a superb specimen of draco nobilis (\"noble dragon\" for those who don\'t understand italics) has appeared in Discworld\'s greatest city. Not only does this unwelcome visitor have a nasty habit of charbroiling everything in its path, in rather short order it is crowned King (it is a noble dragon, after all ...).',350,'1991-01-01','2024-03-30',0,'2024-03-30',NULL),(127,'http://covers.openlibrary.org/b/id/12518430-L.jpg','The Drawing of the Three','Stephen King returns to the Dark Tower in this second mesmerizing volume in his epic series. Roland of Gilead has mysteriously stepped through a doorway in time that takes him to 1980s America, where he joins forces with the defiant Eddie Dean and courageous Odetta Holmes. A savage struggle has begun in which underworld evil and otherworldly enemies conspire to bring an end to Roland\'s desperate search for the Dark Tower. Masterfully weaving dark fantasy and icy realism, The Drawing of the Three compulsively propels readers toward the next chapter.\r\n(back cover)',400,'1989-03-01','2024-03-30',0,'2024-03-30',NULL),(128,'http://covers.openlibrary.org/b/id/12680075-L.jpg','Mostly Harmless','It’s easy to get disheartened when your planet has been blown up and the woman you love has vanished due to a misunderstanding about space/time. However, instead of being disheartened, Arthur Dent makes the terrible mistake of starting to enjoy life a bit—and immediately all hell breaks loose.\r\n\r\nHell takes a number of forms: there’s the standard Ford Prefect version, in the shape of an all-new edition of The Hitchhiker’s Guide to the Galaxy, and a totally unexpected manifestation in the form of a teenage girl who startles Arthur Dent by being his daughter when he didn’t even know he had one.\r\n\r\nCan Arthur save the Earth from total multidimensional obliteration? Can he save the Guide from a hostile alien takeover? Can he save his daughter, Random, from herself? Of course not. He never works out exactly what is going on. Will you?\r\n--[penguinrandomhousehighereducation](https://penguinrandomhousehighereducation.com/book/?isbn=9780307422224)',240,'2021-01-01','2024-03-30',0,'2024-03-30',NULL),(129,'http://covers.openlibrary.org/b/id/12706376-L.jpg','Different Seasons','FROM ONE OF THE GREATEST SHORT STORY WRITERS OF ALL TIME, a spellbinding collection of four novellas bound together by the changing of seasons, each taking on the theme of a journey with strikingly different tones and characters.\r\n\r\nDifferent Seasons begins with \"Rita Hayworth and Shawshank Redemption,\" in which an unjustly imprisoned convict seeks a strange and startling revenge—the basis for the Best Picture Academy Award nominee The Shawshank Redemption. Next is \"Apt Pupil,\" the inspiration for the film of the same name about top high school student Todd Bowden and his obses- Sion with the dark and deadly past of an older man intown. In \"The Body, \" four rambunctious young boys plunge through the faqade of a small town and come face-to-face with life, death, and intimations of their own mortality. This novella became the acclaimed movie Stand by Me. Finally, a disgraced woman is determined to triumph over death in \"The Breathing Method.\" --back cover',591,'2016-03-01','2024-03-30',0,'2024-03-30',NULL),(130,'http://covers.openlibrary.org/b/id/10520896-L.jpg','The Eyes of the Dragon','The king is dead, murdered by a strange and horrible poison. The land of Delain is in mourning . apart from the unscrupulous, greedy, plotting magician Flagg. Soon the king\'s oldest son Peter is imprisoned at the top of a high tower, the Needle, for his father\'s murder, while his younger brother Thomas inherits the throne.\r\n\r\nOnly Peter knows the truth of his own innocence, and the truth of the evil that is Flagg. And only Peter can save Delain from the horror Flagg has in store. He has a plan, but it is dangerous and desperate and if he fails there will be no second chance. For all the while, Flagg\'s words echo in his mind: \'I\'ll carry your head on my saddle-bag horn for a thousand years. Here I come, Peter! Coming for your head!\r\n--back cover',427,'2003-01-01','2024-03-30',0,'2024-03-30',NULL),(131,'http://covers.openlibrary.org/b/id/10713373-L.jpg','The Waste Lands','In this fantastical third book is the series, Stephen King once again takes readers on a journey of incomparable imagination. Roland, The Last Gunslinger, is moving ever closer to the Dark Tower, which haunts his dreams and nightmares. As he and his friends cross a desert of damnation in their macabre new world, revelations begin to unfold about who--and what--is driving him forward. A blend of riveting action and powerful drama, The Waste Lands leaves readers breathlessly awaiting the next chapter. \r\n\r\nAnd the tower is closer...\r\n--back cover',422,'1997-01-01','2024-03-30',0,'2024-03-30',NULL),(132,'http://covers.openlibrary.org/b/id/6941404-L.jpg','Flat Stanley','After a bulletin board falls on Stanley while he\'s sleeping, he finds that being flat has its advantages.',65,'2003-01-01','2024-03-30',0,'2024-03-30',NULL),(133,'http://covers.openlibrary.org/b/id/603771-L.jpg','Wizard\'s First Rule','The protective barrier that separates Westland from its neighbors to the east is about to fall, letting loose a monstrous evil upon the world. Only the combined efforts of a young man dedicated to finding the truth, an enigmatic woman intent on concealing her past, and a crusty old hermit resigned to his inevitable destiny can prevent the opening of the three boxes of Orden-an event with the potential to destroy existence itself. The inclusion of graphic scenes of sado-eroticism, though integral to the story, may deter purchase by some libraries. Nevertheless, this first novel offers an intriguing variant on the standard fantasy quest. The richly detailed world and complex characters will appeal to mature fantasy aficionados.',848,'1900-01-01','2024-03-30',0,'2024-03-30',NULL),(134,'http://covers.openlibrary.org/b/id/6942785-L.jpg','Corduroy','A toy bear in a department store wants number of things, but when a little girl finally buys him, he finds what he has always wanted most of all.',32,'1976-01-01','2024-03-30',0,'2024-03-30',NULL),(135,'http://covers.openlibrary.org/b/id/6925774-L.jpg','Equal Rites','At birth, Eskarina becomes a female wizard by mistake. Granny Weatherwax, the town witch, takes on the responsibility of furthering Esk\'s wizard training and adventures begin.',254,'1988-01-01','2024-03-30',0,'2024-03-30',NULL),(136,'http://covers.openlibrary.org/b/id/6815393-L.jpg','Thumbelina','Enter the enchanting world of your favorite age-old fairy tale friends where fantasy and fun are brought to life on every page.',24,'1995-01-01','2024-03-30',0,'2024-03-30',NULL),(137,'http://covers.openlibrary.org/b/id/10811887-L.jpg','Tale of Despereaux','The adventures of Desperaux Tilling, a small mouse of unusual talents, the princess that he loves, the servant girl who longs to be a princess, and a devious rat determined to bring them all to ruin.',267,'2015-01-01','2024-03-30',0,'2024-03-30',NULL),(138,'http://covers.openlibrary.org/b/id/6978877-L.jpg','Dragonquest','F\'Lar, Lessa, and F\'rad and their dragons defend Pern from the Red Star and the threads.',351,'1987-01-01','2024-03-30',0,'2024-03-30',NULL),(139,'http://covers.openlibrary.org/b/id/8595494-L.jpg','Night Shift','In places where fear dwells and blood runs cold, sinister forces and unspeakable things are working the NIGHT SHIFT\r\nFrom the depths of darkness where hideous rats defend their empire, to dizzying heights where a beautiful girl hangs by a hair above a hellish fate, NIGHT SHIFT will plunge you into the subterranean labyrinth of the most spine-tingling, eerie imaginations of our time.\r\n--back cover',326,'1979-02-01','2024-03-30',0,'2024-03-30',NULL),(140,'http://covers.openlibrary.org/b/id/6878094-L.jpg','The Penelopiad','Homer\'s Odyssey is not the only version of the story. Mythic material was originally oral, and also local -- a myth would be told one way in one place and quite differently in another. I have drawn on material other than the Odyssey, especially for the details of Penelope\'s parentage, her early life and marriage, and the scandalous rumors circulating about her. I\'ve chosen to give the telling of the story to Penelope and to the twelve hanged maids. The maids form a chanting and singing Chorus, which focuses on two questions that must pose themselves after any close reading of the Odyssey: What led to the hanging of the maids, and what was Penelope really up to? The story as told in the Odyssey doesn\'t hold water: there are too many inconsistencies. I\'ve always been haunted by the hanged maids and, in The Penelopiad, so is Penelope herself. The author of The Handmaid\'s Tale and The Blind Assassin presents a cycle of stories about Penelope, wife of Odysseus, through the eyes of the twelve maids hanged for disloyalty to Odysseus in his absence.',199,'2005-01-01','2024-03-30',0,'2024-03-30',NULL),(141,'http://covers.openlibrary.org/b/id/6896223-L.jpg','Small Gods','A fantasy tale follows the experiences of Discworld, a flat, circular planet that travels through deep space on the backs of four giant turtles and gives way to many strange adventures. By the author of Witches Abroad.',344,'1994-01-01','2024-03-30',0,'2024-03-30',NULL),(142,'http://covers.openlibrary.org/b/id/6927508-L.jpg','Sourcery','Rincewind, the world\'s most inept wizard, magically returns after falling off the edge of the world, this time carrying the Luggage, in a hilarious fantasy of magic and mayhem. Reprint.',253,'1989-01-01','2024-03-30',0,'2024-03-30',NULL),(143,'http://covers.openlibrary.org/b/id/259416-L.jpg','Redwall (Redwall #1)','When the peaceful life of ancient Redwall Abbey is shattered by the arrival of the evil rat Cluny and his villainous hordes, Matthias, a young mouse, determines to find the legendary sword of Martin the Warrior which, he is convinced, will help Redwall\'s inhabitants destroy the enemy.',351,'1986-01-01','2024-03-30',0,'2024-03-30',NULL),(144,'http://covers.openlibrary.org/b/id/13147054-L.jpg','Eaters of the Dead','Mystery, history, horror--it\'s a sword-rattling adventure with as many lopped heads and limbs as a nightmare...as much wild and drunken sex as a dream. It\'s the incredible chronicle of Ibn Fadlan, emissary of the Caliph of Bagdad, relating his expedition to the wild Viking barrens and his terrifying encounter there with the ferocious hairy demons of the Northland. It\'s the marvellous new Crichton novel with all the amazement of THE ANDROMEDA STRAIN and the captivating suspense of THE TERMINAL MAN.\r\n--back cover',201,'1977-04-01','2024-03-30',0,'2024-03-30',NULL),(145,'http://covers.openlibrary.org/b/id/12869726-L.jpg','Oryx and Crake','Oryx and Crake is at once an unforgettable love story and a compelling vision of the future. Snowman, known as Jimmy before mankind was overwhelmed by a plague, is struggling to survive in a world where he may be the last human, and mourning the loss of his best friend, Crake, and the beautiful and elusive Oryx whom they both loved. In search of answers, Snowman embarks on a journey–with the help of the green-eyed Children of Crake–through the lush wilderness that was so recently a great city, until powerful corporations took mankind on an uncontrolled genetic engineering ride. Margaret Atwood projects us into a near future that is both all too familiar and beyond our imagining.',389,'2009-01-01','2024-03-30',0,'2024-03-30',NULL),(146,'http://covers.openlibrary.org/b/id/7160026-L.jpg','Wintersmith','When witch-in-training Tiffany Aching accidentally interrupts the Dance of the Seasons and awakens the interest of the elemental spirit of Winter, she requires the help of the six-inch-high, sword-wielding, sheep-stealing Wee Free Men to put the seasons aright.',323,'2006-01-01','2024-03-30',0,'2024-03-30',NULL),(147,'http://covers.openlibrary.org/b/id/10746305-L.jpg','The Dark Is Rising (Dark is Rising #2)','On his eleventh birthday Will Stanton discovers that he is the last of the Old Ones, destined to seek the six magical signs that will enable the Old Ones to triumph over the evil forces of the Dark.',244,'2007-01-01','2024-03-30',0,'2024-03-30',NULL),(148,'http://covers.openlibrary.org/b/id/8118033-L.jpg','The Name of the Wind','\'I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep. \r\n\r\nMy name is Kvothe.\r\nYou may have heard of me\'\r\n\r\n--back cover',661,'2007-01-01','2024-03-30',0,'2024-03-30',NULL),(149,'http://covers.openlibrary.org/b/id/10713246-L.jpg','Dreamcatcher','In Derry, Maine, four young boys once stood together and did a brave thing. Something that changed them in ways they hardly understood.\r\n\r\nA quarter of a century later, the boys are men who have gone their separate ways. Though they still get together once a year, to go hunting in the north woods of Maine. But this time is different. This time a man comes stumbling into their camp, lost, disoriented and muttering about lights in the sky.\r\n\r\nBefore long, these old friends will be plunged into the most remarkable events of their lives as they struggle with a terrible creature from another world. Their only chance of survival is locked in their shared past - and in the Dreamcatcher.\r\n--back cover',694,'2007-01-01','2024-03-30',0,'2024-03-30',NULL),(150,'http://covers.openlibrary.org/b/id/8343780-L.jpg','The Wee Free Men','A young witch-to-be named Tiffany teams up with the Wee Free Men, a clan of six-inch-high blue men, to rescue her baby brother and ward off a sinister invasion from Fairyland.',375,'2004-01-01','2024-03-30',0,'2024-03-30',NULL),(151,'http://covers.openlibrary.org/b/id/13913381-L.jpg','The Battle of the Labyrinth','When demonic cheerleaders invade his high school, Percy Jackson hurries to Camp Half Blood, from whence he and his demigod friends set out on a quest through the Labyrinth, while the war between the Olympians and the evil Titan lord Kronos draws near.',461,'2008-01-01','2024-03-30',0,'2024-03-30',NULL),(152,'http://covers.openlibrary.org/b/id/10525921-L.jpg','The Phantom Tollbooth','Step through the Phantom Tollbooth and travel to lands beyond... \r\n\r\nIf you\'re feeling fed up with life, follow . u young Milo on his outlandish travels through the Tollbooth into the Kingdom of Wisdom and, like him, you\'ll never be bored again!\r\n--back cover',255,'1992-07-01','2024-03-30',0,'2024-03-30',NULL),(153,'http://covers.openlibrary.org/b/id/580387-L.jpg','Black Cauldron (Chronicles of Prydain','Taran, Assistant Pig-Keeper of Prydain, faces even more dangers as he seeks the magical Black Cauldron, the chief implement of the evil powers of Arawn, lord of the Land of Death.',182,'1999-01-01','2024-03-30',0,'2024-03-30',NULL),(154,'http://covers.openlibrary.org/b/id/10713133-L.jpg','Rose Madder','Roused by a single drop of blood on the bedsheet, Rosie Daniels wakes up from fourteen years of a nightmare marriage to the chilling realisation that one of these days her husband, Norman. is going to kill her. Or worse still, he isn\'t. \r\n\r\nTaking her husband\'s credit card, Rosie suddenly takes flight, determined to lose herself in a place where Norman won\'t find her. She\'ll worry about the rest later. \r\n\r\nAlone in a strange city, Rosie slowly begins to build a new life, gaining confidence with each step. Good things start to happen: meeting Bill Steiner is one; and finding an odd junk shop painting is another. It may be bad art but i€s perfect for her new apartment. Moreover, the oddly old-fashioned oil strangely seems to want her as much as she wants it. The fact that the name \'Rose Madder\' is inscribed on the back of the canvas surely proves that it is meant to be hers. And is destined to change her life — perhaps in more ways than she can ever imagine. \r\n\r\nBut it\'s hard for Rosie not to keep looking over her shoulder. Rose- maddened and on the rampage, Norman is a corrupt cop, seductive and brutal, with a dog\'s instinct for tracking people. And he\'s getting close. Rosie can feel just how close he\'s getting.\r\n\r\nA brilliant dark-hued fable of the gender wars, a haunting love story, and a hold-your-breath-until-you- gasp triumph of suspense, Rose Madder is Stephen King at his electrifying best.\r\n--front flap',466,'1995-01-01','2024-03-30',0,'2024-03-30',NULL),(155,'http://covers.openlibrary.org/b/id/8053867-L.jpg','Schweizerische Robinson','Relates the fortunes of a shipwrecked family as they imaginatively adapt to life on an island abundantly inhabited by animal and plant life.',377,'1949-01-01','2024-03-30',0,'2024-03-30',NULL),(156,'http://covers.openlibrary.org/b/id/10713417-L.jpg','Everything\'s Eventual','From the Flap:\r\n\r\nThe first collection of stories Stephen King has published since Nightmares & Dreamscapes nine years ago, Everything\'s Eventual includes one O. Henry Prize winner, two other award winners, four stories published by The New Yorker, and \"Riding the Bullet,\" King\'s original e-book, which attracted over half a million online readers and became the most famous short story of the decade. \"Riding the Bullet,\" published here on paper for the first time, is the story of Alan Parker, who\'s hitchhiking to see his dying mother but takes the wrong ride, farther than he ever intended. In \"Lunch at the Gotham Cafe,\" a sparring couple\'s contentious lunch turns very, very bloody when the maitre d\' gets out of sorts. \"1408,\" the audio story in print for the first time, is about a successful writer whose specialty is \"Ten Nights in Ten Haunted Graveyards\" or \"Ten Nights in Ten Haunted Houses,\" and though Room 1408 at the Dolphin Hotel doesn\'t kill him, he won\'t be writing about ghosts anymore. And in \"That Feeling, You Can Only Say What It Is in French,\" terror is deja vu at 16,000 feet. Whether writing about encounters with the dead, the near dead, or about the mundane dreads of life, from quitting smoking to yard sales, Stephen King is at the top of his form in the fourteen dark tales assembled in Everything\'s Eventual. Intense, eerie, and instantly compelling, they announce the stunningly fertile imagination of perhaps the greatest storyteller of our time.',459,'2002-01-01','2024-03-30',0,'2024-03-30',NULL),(157,'http://covers.openlibrary.org/b/id/10334744-L.jpg','Over Sea, Under Stone (The Dark Is Rising #1)','Three children on a holiday in Cornwall find an ancient manuscript which sends them on a dangerous quest for a grail that would reveal the true story of King Arthur.',252,'1993-01-01','2024-03-30',0,'2024-03-30',NULL),(158,'http://covers.openlibrary.org/b/id/8595436-L.jpg','Wizard and Glass','At last, Stephen King returns to the Dark Tower with the eagerly anticipated fourth volume in his bestselling series. Roland, The Last Gunslinger, and his band of followers have narrowly escaped one world, and slipped into the next. It is here that Roland tells them a long-ago tale of love and adventure involving a beautiful and quixotic woman named Susan Delgado. With shocking plot twists and a driving narrative force, Wizard and Glass is the book readers have been waiting for.\r\n\r\nAnd the Tower is closer...\r\n\r\n--back cover',672,'1997-11-01','2024-03-30',0,'2024-03-30',NULL),(159,'http://covers.openlibrary.org/b/id/7105704-L.jpg','The Book Of Three','Taran, Assistant Pig-Keeper to a famous oracular sow, sets out on a hazardous mission to save Prydain from the forces of evil.',190,'1999-01-01','2024-03-30',0,'2024-03-30',NULL),(160,'http://covers.openlibrary.org/b/id/7070118-L.jpg','Black House','Sold in a gift set with The Talisman in a slipcover.',638,'2002-01-01','2024-03-30',0,'2024-03-30',NULL),(161,'http://covers.openlibrary.org/b/id/-1-L.jpg','The Trumpet of the Swan','Knowing how to read and write is not enough for Louis, a voiceless Trumpeter Swan; his determination to learn to play a stolen trumpet takes him far from his wilderness home.',210,'1970-01-01','2024-03-30',0,'2024-03-30',NULL),(162,'http://covers.openlibrary.org/b/id/12884456-L.jpg','The Passage','An epic and gripping tale of catastrophe and survival, The Passage is the story of Amy–abandoned by her mother at the age of six, pursued and then imprisoned by the shadowy figures behind a government experiment of apocalyptic proportions. But Special Agent Wolgast, the lawman sent to track her down, is disarmed by the curiously quiet girl—and risks everything to save her. As the experiment goes nightmarishly wrong, Wolgast secures her escape—but he can’t stop society’s collapse. And as Amy walks alone, across miles and decades, into a future dark with violence and despair, she is filled with the mysterious and terrifying knowledge that only she has the power to save the ruined world.\r\n(back cover)',784,'2012-01-01','2024-03-30',0,'2024-03-30',NULL),(163,'http://covers.openlibrary.org/b/id/11415857-L.jpg','The Regulators','A publishing event of the first magnitude, the release of The Regulators is destined to create a firestorm of interest not only within the late Richard Bachman\'s cult audience but among fans of horror and supernatural suspense everywhere.\r\n\r\nWentworth, Ohio: just a small friendly town where the Carver children bicker over sweets and writer Johnny Marinville is about the only resident who minds his own business. And on Poplar Street it\'s just a normal summer\'s day with lawnmowers humming, Little League bats \'tinking\', frisbees flying and barbecues being readied. But for young Cary Ripton on his paper round it won\'t be a normal day at all...\r\n\r\nHe notices something weird about the way Audrey Wyler is standing inside the glass door - and he\'s always thought there was something creepy about that nephew of hers, Poplar Street\'s best kept secret.\r\n\r\nBut Cary doesn\'t notice the chrome red van idling up the hill. Soon it will begin to roll, the killing will begin, and the regulators will arrive in force. And by the time night falls on the block, the surviving residents will find themselves in a wasteland of devastation and desperation...\r\n\r\nA relentlessly exciting Stephen King-esque tour-de-force of terror, The Regulators manuscript was found among Bachman\'s effects by his widow in 1994.\r\n--front flap',334,'1996-01-01','2024-03-30',0,'2024-03-30',NULL),(164,'http://covers.openlibrary.org/b/id/2411585-L.jpg','Brisingr','The further adventures of Eragon and his dragon Saphira as they continue to aid the Varden in the struggle against the evil king, Galbatorix.',748,'1900-01-01','2024-03-30',0,'2024-03-30',NULL),(165,'http://covers.openlibrary.org/b/id/14454928-L.jpg','The Tales of Beedle the Bard','Five enchanting fairy tales full of magic and trickery,\r\nTHE TALES OF BEEDLE THE BARD have been favourite bedtime reading in wizarding households for centuries.',144,'2017-01-01','2024-03-30',0,'2024-03-30',NULL),(166,'http://covers.openlibrary.org/b/id/6575487-L.jpg','White oleander','At the age of 12, Astrid has her world blown away when her mother is sentenced to life in prison for murdering her lover.  Sharpened by harsh foster home environments, Astrid remakes herself as a survivor, and ultimately, an artist.',446,'2000-01-01','2024-03-30',0,'2024-03-30',NULL),(167,'http://covers.openlibrary.org/b/id/12937776-L.jpg','Percy Jackson e os Olimpianos','The long-awaited prophecy surrounding Percy Jackson\'s sixteenth birthday unfolds as he leads an army of young demigods to stop Kronos in his advance on New York City, while the Olympians struggle to contain the rampaging monster, Typhon.',381,'2009-01-01','2024-03-30',0,'2024-03-30',NULL),(168,'http://covers.openlibrary.org/b/id/14352432-L.jpg','Anansi Boys','God is dead. Meet the kids.\r\n\r\nWhen Fat Charlie\'s dad named something, it stuck. Like calling Fat Charlie \"Fat Charlie.\" Even now, twenty years later, Charlie Nancy can\'t shake that name, one of the many embarrassing \"gifts\" his father bestowed — before he dropped dead on a karaoke stage and ruined Fat Charlie\'s life.\r\n\r\nMr. Nancy left Fat Charlie things. Things like the tall, good-looking stranger who appears on Charlie\'s doorstep, who appears to be the brother he never knew. A brother as different from Charlie as night is from day, a brother who\'s going to show Charlie how to lighten up and have a little fun ... just like Dear Old Dad. And all of a sudden, life starts getting very interesting for Fat Charlie.\r\n\r\nBecause, you see, Charlie\'s dad wasn\'t just any dad. He was Anansi, a trickster god, the spider-god. Anansi is the spirit of rebellion, able to overturn the social order, create wealth out of thin air, and baffle the devil. Some said he could cheat even Death himself.\r\n\r\nReturning to the territory he so brilliantly explored in his masterful New York Times bestseller, American Gods, the incomparable Neil Gaiman offers up a work of dazzling ingenuity, a kaleidoscopic journey deep into myth that is at once startling, terrifying, exhilarating, and fiercely funny — a true wonder of a novel that confirms Stephen King\'s glowing assessment of the author as \"a treasure-house of story, and we are lucky to have him.\"\r\n--front flap',336,'2005-01-01','2024-03-30',0,'2024-03-30',NULL),(169,'http://covers.openlibrary.org/b/id/254690-L.jpg','Swimmy','A little black fish in a school of red fish figures out a way of protecting them all from their natural enemies.',32,'1973-01-01','2024-03-30',0,'2024-03-30',NULL),(170,'http://covers.openlibrary.org/b/id/10006628-L.jpg','Sabriel','Sabriel, daughter of the necromancer Abhorsen, must journey into the mysterious and magical Old Kingdom to rescue her father from the Land of the Dead.',491,'1996-01-01','2024-03-30',0,'2024-03-30',NULL),(171,'http://covers.openlibrary.org/b/id/12376592-L.jpg','Insomnia','Ralph Roberts never expected to live out his remaining golden years mourning the death of his beloved wife. He also never expected to begin suffering from chronic insomnia for the first time in his life. Each night he wakes up a little bit earlier, until he\'s barely sleeping at all. During his overnight walks, he\'s now observing some strange things going n here in Derry, Maine—and they\'re more than sleep-deprived hallucinations. There\'s definitely a mean streak that\'s always been running through this small New England city; underneath its ordinary surface, awesome and terrifying forces are at work. The dying has been going on in Derry for a long, long time, and Ralph Roberts will soon find that lack of sleep is the least of his worries....\r\n--back cover',792,'2018-05-01','2024-03-30',0,'2024-03-30',NULL),(172,'http://covers.openlibrary.org/b/id/10677463-L.jpg','A Wind in the Door (Time Quintet #2','With Meg Murry\'s help, the dragons her six-year-old brother saw in the vegetable garden play an important part in his struggle between life and death.',203,'1976-01-01','2024-03-30',0,'2024-03-30',NULL),(173,'http://covers.openlibrary.org/b/id/6748903-L.jpg','Eldest','After successfully evading an Urgals ambush, Eragon is adopted into the Ingeitum clan and sent to finish his training in magic and swordsmanship so he can further help the Varden in their struggle against the Empire.',679,'2007-01-01','2024-03-30',0,'2024-03-30',NULL),(174,'http://covers.openlibrary.org/b/id/13809404-L.jpg','Feet of Clay','There\'s a werewolf with pre-lunar tension in Anti-morpork, a dwarf with attitude and a Golem who begins to think for itself. But for Commander Vines, that\'s only the start. There\'s treason in the air - he\'s not only got to find out whodunit, but howdunit too, and he\'s not even sure what they dun.',392,'2014-01-01','2024-03-30',0,'2024-03-30',NULL),(175,'http://covers.openlibrary.org/b/id/380473-L.jpg','Hogfather','252 pages : 29 cm',372,'1900-01-01','2024-03-30',0,'2024-03-30',NULL),(176,'http://covers.openlibrary.org/b/id/9391940-L.jpg','Into the Wild','For generations, four clans of wild cats have shared the forest. When their warrior code is threatened by mysterious deaths, a house cat named Rusty may turn out to be the bravest warrior of all.',288,'1900-01-01','2024-03-30',0,'2024-03-30',NULL),(177,'http://covers.openlibrary.org/b/id/12635484-L.jpg','Mary Poppins','This classic tale of the world\'s most beloved nanny, who brings enchantment and excitement with her everywhere she goes, has a brand-new look!\n\nThe wind brings four English children a new nanny who slides up the banister and introduces them to some delightful people and experiences.',191,'1997-01-01','2024-03-30',0,'2024-03-30',NULL);
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_has_genre`
--

DROP TABLE IF EXISTS `book_has_genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_has_genre` (
  `book_id` int NOT NULL,
  `genre_id` int NOT NULL,
  PRIMARY KEY (`book_id`,`genre_id`),
  KEY `genre_id` (`genre_id`),
  CONSTRAINT `book_has_genre_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`),
  CONSTRAINT `book_has_genre_ibfk_2` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_has_keyword` (
  `book_id` int NOT NULL,
  `keyword_id` int NOT NULL,
  PRIMARY KEY (`book_id`,`keyword_id`),
  KEY `keyword_id` (`keyword_id`),
  CONSTRAINT `book_has_keyword_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`),
  CONSTRAINT `book_has_keyword_ibfk_2` FOREIGN KEY (`keyword_id`) REFERENCES `keyword` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_has_sub_genre` (
  `book_id` int NOT NULL,
  `sub_genre_id` int NOT NULL,
  PRIMARY KEY (`book_id`,`sub_genre_id`),
  KEY `sub_genre_id` (`sub_genre_id`),
  CONSTRAINT `book_has_sub_genre_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`),
  CONSTRAINT `book_has_sub_genre_ibfk_2` FOREIGN KEY (`sub_genre_id`) REFERENCES `sub_genre` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_has_tag` (
  `book_id` int NOT NULL,
  `tag_id` int NOT NULL,
  PRIMARY KEY (`book_id`,`tag_id`),
  KEY `tag_id` (`tag_id`),
  CONSTRAINT `book_has_tag_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`),
  CONSTRAINT `book_has_tag_ibfk_2` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_interactions` (
  `book_id` int NOT NULL,
  `user_id` int NOT NULL,
  `has_read` int NOT NULL DEFAULT '0',
  `interested` int NOT NULL DEFAULT '0',
  `favorite` int NOT NULL DEFAULT '0',
  `like_dislike` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`book_id`,`user_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `book_interactions_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`),
  CONSTRAINT `book_interactions_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment` longtext NOT NULL,
  `date_added` date NOT NULL,
  `reviewed` tinyint NOT NULL,
  `date_updated` date DEFAULT NULL,
  `user_id` int NOT NULL,
  `book_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `book_id` (`book_id`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'Love, love, love this series. Kept me hooked from the first book. Can\'t wait for the next!','2024-03-30',1,'2024-03-15',1,11),(2,'Love this series. Can\'t wait for the next!','2024-03-30',1,'2024-03-15',1,3);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genre`
--

DROP TABLE IF EXISTS `genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genre` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `date_added` date NOT NULL,
  `reviewed` tinyint NOT NULL,
  `date_updated` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre`
--

LOCK TABLES `genre` WRITE;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;
INSERT INTO `genre` VALUES (1,'Fantasy','2024-03-30',1,'2024-03-15'),(2,'Fiction','2024-03-30',1,'2024-03-15'),(3,'Non-fiction','2024-03-30',1,'2024-03-15'),(5,'Science fiction','2024-03-30',1,'2024-03-15'),(6,'Mystery','2024-03-30',1,'2024-03-15'),(7,'Historical fiction','2024-03-30',1,'2024-03-15'),(8,'Horror','2024-03-30',1,'2024-03-15'),(9,'Romance','2024-03-30',1,'2024-03-15'),(10,'Thriller','2024-03-30',1,'2024-03-15'),(11,'Autobiography','2024-03-30',1,'2024-03-15'),(12,'Young Adult','2024-03-30',1,'2024-03-15'),(13,'Adventure','2024-03-30',1,'2024-03-15'),(14,'Dystopian','2024-03-30',1,'2024-03-15'),(15,'Contemporary fiction','2024-03-30',1,'2024-03-15'),(16,'Literary fiction','2024-03-30',1,'2024-03-15'),(17,'Historical','2024-03-30',1,'2024-03-15'),(18,'Graphic novel','2024-03-30',1,'2024-03-15'),(20,'Short story','2024-03-30',1,'2024-03-15'),(21,'Biography','2024-03-30',1,'2024-03-15'),(22,'Classics','2024-03-30',1,'2024-03-15'),(25,'Western fiction','2024-03-30',1,'2024-03-15'),(26,'Comedy','2024-03-30',1,'2024-03-15');
/*!40000 ALTER TABLE `genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genre_has_sub_genre`
--

DROP TABLE IF EXISTS `genre_has_sub_genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genre_has_sub_genre` (
  `genre_id` int NOT NULL,
  `sub_genre_id` int NOT NULL,
  PRIMARY KEY (`genre_id`,`sub_genre_id`),
  KEY `sub_genre_id` (`sub_genre_id`),
  CONSTRAINT `genre_has_sub_genre_ibfk_1` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`),
  CONSTRAINT `genre_has_sub_genre_ibfk_2` FOREIGN KEY (`sub_genre_id`) REFERENCES `sub_genre` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `keyword` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `date_added` date NOT NULL,
  `reviewed` tinyint NOT NULL,
  `date_updated` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keyword`
--

LOCK TABLES `keyword` WRITE;
/*!40000 ALTER TABLE `keyword` DISABLE KEYS */;
INSERT INTO `keyword` VALUES (1,'Fairy','2024-03-30',1,'2024-03-15'),(2,'Faerie','2024-03-30',1,'2024-03-15'),(3,'Fey','2024-03-30',1,'2024-03-15'),(4,'Fae','2024-03-30',1,'2024-03-15'),(5,'Shifters','2024-03-30',1,'2024-03-15'),(6,'Vampires','2024-03-30',1,'2024-03-15'),(7,'Dragons','2024-03-30',1,'2024-03-15'),(8,'Hell','2024-03-30',1,'2024-03-15'),(9,'Underworld','2024-03-30',1,'2024-03-15'),(10,'Magic','2024-03-30',1,'2024-03-15'),(11,'Mages','2024-03-30',1,'2024-03-15'),(12,'Magical artifacts','2024-03-30',1,'2024-03-15'),(13,'Griffins','2024-03-30',1,'2024-03-15'),(14,'Magical creatures','2024-03-30',1,'2024-03-15'),(15,'Werewolves','2024-03-30',1,'2024-03-15'),(16,'Alpha','2024-03-30',1,'2024-03-15'),(17,'Omega','2024-03-30',1,'2024-03-15'),(18,'Mermaids','2024-03-30',1,'2024-03-15'),(19,'Sirens','2024-03-30',1,'2024-03-15'),(20,'Witches','2024-03-30',1,'2024-03-15'),(21,'Ghosts','2024-03-30',1,'2024-03-15'),(22,'Elves','2024-03-30',1,'2024-03-15'),(23,'Orcs','2024-03-30',1,'2024-03-15'),(24,'Myths','2024-03-30',1,'2024-03-15'),(25,'Legends','2024-03-30',1,'2024-03-15'),(26,'Folklore','2024-03-30',1,'2024-03-15'),(27,'Swords','2024-03-30',1,'2024-03-15'),(28,'Dwarves','2024-03-30',1,'2024-03-15'),(29,'Gargoyles','2024-03-30',1,'2024-03-15'),(30,'Gods','2024-03-30',1,'2024-03-15'),(31,'Trolls','2024-03-30',1,'2024-03-15'),(32,'Goblins','2024-03-30',1,'2024-03-15'),(33,'Parallel worlds','2024-03-30',1,'2024-03-15'),(34,'Realms','2024-03-30',1,'2024-03-15'),(35,'Reverse Harem','2024-03-30',1,'2024-03-15');
/*!40000 ALTER TABLE `keyword` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `link`
--

DROP TABLE IF EXISTS `link`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `link` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `link` varchar(100) NOT NULL,
  `date_added` date NOT NULL,
  `reviewed` tinyint NOT NULL,
  `date_updated` date DEFAULT NULL,
  `book_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `book_id` (`book_id`),
  CONSTRAINT `link_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `link`
--

LOCK TABLES `link` WRITE;
/*!40000 ALTER TABLE `link` DISABLE KEYS */;
INSERT INTO `link` VALUES (1,'Amazon','https://www.amazon.com/Time-Tears-Jonathan-Dominguez-ebook/dp/B07NPB1MZF?ref_=ast_author_dp','2024-03-30',1,'2024-03-15',1),(2,'Amazon','https://www.amazon.com/Fall-Nine-Time-Tears-Book-ebook/dp/B07TXTCCTS/ref=pd_sim_d_sccl_1_1/145-29184','2024-03-30',1,'2024-03-15',2),(3,'Amazon','https://www.amazon.com/Time-Tears-Tales-Nine-ebook/dp/B07WHBMV68/ref=sr_1_4?crid=8LNLOLIIK18E&dib=ey','2024-03-30',1,'2024-03-15',3),(4,'Amazon','https://www.amazon.com/Tide-Darkness-Dark-World-Trilogy-ebook/dp/B0B8QT9FCB/ref=sr_1_1?crid=3MNWNKJB','2024-03-30',1,'2024-03-15',4),(5,'Amazon','https://www.amazon.com/dp/B0BH9J3ZZ7/ref=mes-dp?_encoding=UTF8&pd_rd_w=nLjEM&content-id=amzn1.sym.07','2024-03-30',1,'2024-03-15',5),(6,'Amazon','https://www.amazon.com/dp/B0CHLKTM4S/ref=mes-dp?_encoding=UTF8&pd_rd_w=3E2oz&content-id=amzn1.sym.07','2024-03-30',1,'2024-03-15',6),(7,'Amazon','https://www.amazon.com/gp/product/B0BLJ8CYR4?ref_=dbs_m_mng_rwt_calw_tkin_0&storeType=ebooks&qid=171','2024-03-30',1,'2024-03-15',7),(8,'Amazon','https://www.amazon.com/dp/B0C1R9G49T/ref=mes-dp?_encoding=UTF8&pd_rd_w=SG11z&content-id=amzn1.sym.07','2024-03-30',1,'2024-03-15',8),(9,'Amazon','https://www.amazon.com/gp/product/B0CGP3VQXQ?ref_=dbs_p_pwh_rwt_anx_cl_1&storeType=ebooks','2024-03-30',1,'2024-03-15',9),(10,'Amazon','https://www.amazon.com/dp/B0CNL3NRQS/ref=mes-dp?_encoding=UTF8&pd_rd_w=ZxNR9&content-id=amzn1.sym.07','2024-03-30',1,'2024-03-15',10),(11,'Amazon','https://www.amazon.com/dp/B0CQZ718TG/ref=mes-dp?_encoding=UTF8&pd_rd_w=tfPGg&content-id=amzn1.sym.07','2024-03-30',1,'2024-03-15',11);
/*!40000 ALTER TABLE `link` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `series`
--

DROP TABLE IF EXISTS `series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `series` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `date_added` date NOT NULL,
  `reviewed` tinyint NOT NULL,
  `date_updated` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `series`
--

LOCK TABLES `series` WRITE;
/*!40000 ALTER TABLE `series` DISABLE KEYS */;
INSERT INTO `series` VALUES (1,'The Time of Tears','2024-03-30',1,'2024-03-15'),(2,'Dark World Trilogy','2024-03-30',1,'2024-03-15'),(3,'Cocktails in Hell','2024-03-30',1,'2024-03-15');
/*!40000 ALTER TABLE `series` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `series_interactions`
--

DROP TABLE IF EXISTS `series_interactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `series_interactions` (
  `series_id` int NOT NULL,
  `user_id` int NOT NULL,
  `interested` int NOT NULL DEFAULT '0',
  `favorite` int NOT NULL DEFAULT '0',
  `in_progress` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`series_id`,`user_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `series_interactions_ibfk_1` FOREIGN KEY (`series_id`) REFERENCES `series` (`id`),
  CONSTRAINT `series_interactions_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `social_media` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `link` varchar(100) NOT NULL,
  `date_added` date NOT NULL,
  `date_updated` date DEFAULT NULL,
  `author_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `social_media_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social_media`
--

LOCK TABLES `social_media` WRITE;
/*!40000 ALTER TABLE `social_media` DISABLE KEYS */;
INSERT INTO `social_media` VALUES (1,'Website','www.amarahcalderini.com','2024-03-30','2024-03-15',4),(2,'Facebook','https://www.facebook.com/authoramarahcalderini','2024-03-30','2024-03-15',4),(3,'Goodreads','https://www.goodreads.com/author/show/22748634.Amarah_Calderini','2024-03-30','2024-03-15',4),(4,'Instagram','https://www.instagram.com/amarahcalderiniauthor','2024-03-30','2024-03-15',4),(5,'TikTok','http://tiktok.com/amarahcalderiniauthor','2024-03-30','2024-03-15',4),(6,'Amazon','https://www.amazon.com/stores/Amarah-Calderini/author/B0B8T8XMRQ?ref=lp_11764651011_1_11&isDramInteg','2024-03-30','2024-03-15',4);
/*!40000 ALTER TABLE `social_media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_genre`
--

DROP TABLE IF EXISTS `sub_genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_genre` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `date_added` date NOT NULL,
  `reviewed` tinyint NOT NULL,
  `date_updated` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_genre`
--

LOCK TABLES `sub_genre` WRITE;
/*!40000 ALTER TABLE `sub_genre` DISABLE KEYS */;
INSERT INTO `sub_genre` VALUES (1,'Dark fantasy','2024-03-30',1,'2024-03-15'),(2,'High fantasy','2024-03-30',1,'2024-03-15'),(3,'Low fantasy','2024-03-30',1,'2024-03-15'),(4,'Erotica','2024-03-30',1,'2024-03-15'),(5,'Gothic fiction','2024-03-30',1,'2024-03-15'),(6,'Fairy tale','2024-03-30',1,'2024-03-15'),(7,'Crime','2024-03-30',1,'2024-03-15'),(9,'Action','2024-03-30',1,'2024-03-15'),(10,'Supernatural','2024-03-30',1,'2024-03-15'),(11,'Urban-fantasy','2024-03-30',1,'2024-03-15'),(12,'Paranormal romance','2024-03-30',1,'2024-03-15'),(13,'Paranormal','2024-03-30',1,'2024-03-15'),(14,'Post apocalyptic','2024-03-30',1,'2024-03-15'),(15,'Magical realism','2024-03-30',1,'2024-03-15');
/*!40000 ALTER TABLE `sub_genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscription`
--

DROP TABLE IF EXISTS `subscription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subscription` (
  `id` int NOT NULL AUTO_INCREMENT,
  `level` varchar(20) NOT NULL,
  `paid` int NOT NULL,
  `date_added` date NOT NULL,
  `date_updated` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscription`
--

LOCK TABLES `subscription` WRITE;
/*!40000 ALTER TABLE `subscription` DISABLE KEYS */;
INSERT INTO `subscription` VALUES (1,'Admin',1,'2024-03-30','2024-03-15');
/*!40000 ALTER TABLE `subscription` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `date_added` date NOT NULL,
  `reviewed` tinyint NOT NULL,
  `date_updated` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (1,'time travel','2024-03-30',1,'2024-03-15'),(2,'badass heroine','2024-03-30',1,'2024-03-15'),(3,'snarky','2024-03-30',1,'2024-03-15'),(4,'omega verse','2024-03-30',1,'2024-03-15'),(5,'why choose','2024-03-30',1,'2024-03-15'),(6,'emotional journey','2024-03-30',1,'2024-03-15'),(7,'survival','2024-03-30',1,'2024-03-15');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(20) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `tag` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `active` int NOT NULL,
  `date_added` date NOT NULL,
  `date_updated` date DEFAULT NULL,
  `subscription_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `subscription_id` (`subscription_id`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`subscription_id`) REFERENCES `subscription` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Admin','Tiarra','Blandin','@tiarra','tiarra.blandin@gmail.com','tiarra','$2b$10$k0LWgoJxJlEFPizIi3OJIu/dgnQqNDD3rsKdhkx/cJ1FwSR5wVZXO',1,'2024-03-30','2024-03-15',1),(2,'Admin','Matthew','Tilley','@matt','matthew.tilley77@gmail.com','matt','$2b$10$6P3YaIeyd5FN0KAnk5Wd9u.IopnLe0P5vvXrVeW3OCwVL.7Tkei1m',1,'2024-03-30','2024-03-15',1),(3,'Admin','Jonathan','Dominguez','@jondom','jonathanadominguez@gmail.com','jon','$2b$10$RrN6OgEk09x6nvtLPOcT7e6QYRnwBYQl/kz8KhCRELlztMkbN2twq',1,'2024-03-30','2024-03-15',1),(4,'Admin','William','Slaunwhite','@will','williamslaunwhite@gmail.com','will','$2a$12$.aXI64OEVlXoGf8fNHOlhef6SFgQzI4bqn2unNELnfIWTPwJj.zR6',1,'2024-03-30','2024-03-15',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_follows_author`
--

DROP TABLE IF EXISTS `user_follows_author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_follows_author` (
  `author_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  KEY `author_id` (`author_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_follows_author_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`),
  CONSTRAINT `user_follows_author_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
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

-- Dump completed on 2024-03-30 22:33:16
