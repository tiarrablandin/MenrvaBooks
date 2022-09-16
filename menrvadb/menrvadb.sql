-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema menrvabooksdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `menrvabooksdb` ;

-- -----------------------------------------------------
-- Schema menrvabooksdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `menrvabooksdb` DEFAULT CHARACTER SET utf8 ;
USE `menrvabooksdb` ;

-- -----------------------------------------------------
-- Table `book`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `book` ;

CREATE TABLE IF NOT EXISTS `book` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cover` VARCHAR(500) NOT NULL,
  `title` VARCHAR(100) NOT NULL,
  `series_name` VARCHAR(100) NULL,
  `series_number` INT NULL,
  `Description` TEXT NOT NULL,
  `age_category` VARCHAR(45) NOT NULL,
  `language` VARCHAR(45) NOT NULL,
  `page_count` INT NOT NULL,
  `publication_date` DATETIME NULL,
  `date_added` DATETIME NOT NULL,
  `date_updated` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `purchase_links`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `purchase_links` ;

CREATE TABLE IF NOT EXISTS `purchase_links` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `url` VARCHAR(500) NULL,
  `book_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_purchase_links_book_idx` (`book_id` ASC),
  CONSTRAINT `fk_purchase_links_book`
    FOREIGN KEY (`book_id`)
    REFERENCES `book` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `author`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `author` ;

CREATE TABLE IF NOT EXISTS `author` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `photo` VARCHAR(500) NULL,
  `name` VARCHAR(500) NOT NULL,
  `bio` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `login` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `active` TINYINT NOT NULL,
  `created` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `people_creatures`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `people_creatures` ;

CREATE TABLE IF NOT EXISTS `people_creatures` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `social_media`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `social_media` ;

CREATE TABLE IF NOT EXISTS `social_media` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `url` VARCHAR(45) NULL,
  `author_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_social_media_author1_idx` (`author_id` ASC),
  CONSTRAINT `fk_social_media_author1`
    FOREIGN KEY (`author_id`)
    REFERENCES `author` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `author_has_book`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `author_has_book` ;

CREATE TABLE IF NOT EXISTS `author_has_book` (
  `author_id` INT NOT NULL,
  `book_id` INT NOT NULL,
  PRIMARY KEY (`author_id`, `book_id`),
  INDEX `fk_author_has_book_book1_idx` (`book_id` ASC),
  INDEX `fk_author_has_book_author1_idx` (`author_id` ASC),
  CONSTRAINT `fk_author_has_book_author1`
    FOREIGN KEY (`author_id`)
    REFERENCES `author` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_author_has_book_book1`
    FOREIGN KEY (`book_id`)
    REFERENCES `book` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `genre`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `genre` ;

CREATE TABLE IF NOT EXISTS `genre` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `theme`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `theme` ;

CREATE TABLE IF NOT EXISTS `theme` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sub_genre`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sub_genre` ;

CREATE TABLE IF NOT EXISTS `sub_genre` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `genre_has_book`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `genre_has_book` ;

CREATE TABLE IF NOT EXISTS `genre_has_book` (
  `genre_id` INT NOT NULL,
  `book_id` INT NOT NULL,
  PRIMARY KEY (`genre_id`, `book_id`),
  INDEX `fk_genre_has_book_book1_idx` (`book_id` ASC),
  INDEX `fk_genre_has_book_genre1_idx` (`genre_id` ASC),
  CONSTRAINT `fk_genre_has_book_genre1`
    FOREIGN KEY (`genre_id`)
    REFERENCES `genre` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_genre_has_book_book1`
    FOREIGN KEY (`book_id`)
    REFERENCES `book` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sub_genre_has_book`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sub_genre_has_book` ;

CREATE TABLE IF NOT EXISTS `sub_genre_has_book` (
  `sub_genre_id` INT NOT NULL,
  `book_id` INT NOT NULL,
  PRIMARY KEY (`sub_genre_id`, `book_id`),
  INDEX `fk_sub_genre_has_book_book1_idx` (`book_id` ASC),
  INDEX `fk_sub_genre_has_book_sub_genre1_idx` (`sub_genre_id` ASC),
  CONSTRAINT `fk_sub_genre_has_book_sub_genre1`
    FOREIGN KEY (`sub_genre_id`)
    REFERENCES `sub_genre` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sub_genre_has_book_book1`
    FOREIGN KEY (`book_id`)
    REFERENCES `book` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `theme_has_book`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `theme_has_book` ;

CREATE TABLE IF NOT EXISTS `theme_has_book` (
  `theme_id` INT NOT NULL,
  `book_id` INT NOT NULL,
  PRIMARY KEY (`theme_id`, `book_id`),
  INDEX `fk_theme_has_book_book1_idx` (`book_id` ASC),
  INDEX `fk_theme_has_book_theme1_idx` (`theme_id` ASC),
  CONSTRAINT `fk_theme_has_book_theme1`
    FOREIGN KEY (`theme_id`)
    REFERENCES `theme` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_theme_has_book_book1`
    FOREIGN KEY (`book_id`)
    REFERENCES `book` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `people_creatures_has_book`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `people_creatures_has_book` ;

CREATE TABLE IF NOT EXISTS `people_creatures_has_book` (
  `people_creatures_id` INT NOT NULL,
  `book_id` INT NOT NULL,
  PRIMARY KEY (`people_creatures_id`, `book_id`),
  INDEX `fk_people_creatures_has_book_book1_idx` (`book_id` ASC),
  INDEX `fk_people_creatures_has_book_people_creatures1_idx` (`people_creatures_id` ASC),
  CONSTRAINT `fk_people_creatures_has_book_people_creatures1`
    FOREIGN KEY (`people_creatures_id`)
    REFERENCES `people_creatures` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_people_creatures_has_book_book1`
    FOREIGN KEY (`book_id`)
    REFERENCES `book` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interaction`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `interaction` ;

CREATE TABLE IF NOT EXISTS `interaction` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `comment` TEXT NULL,
  `read` TINYINT NULL,
  `favorite` TINYINT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `subscription`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `subscription` ;

CREATE TABLE IF NOT EXISTS `subscription` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `paid` DATETIME NOT NULL,
  `user_level` VARCHAR(45) NOT NULL,
  `amount_paid` DOUBLE NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_subscription_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_subscription_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user_has_interaction`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_has_interaction` ;

CREATE TABLE IF NOT EXISTS `user_has_interaction` (
  `user_id` INT NOT NULL,
  `interaction_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `interaction_id`),
  INDEX `fk_user_has_interaction_interaction1_idx` (`interaction_id` ASC),
  INDEX `fk_user_has_interaction_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_user_has_interaction_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_interaction_interaction1`
    FOREIGN KEY (`interaction_id`)
    REFERENCES `interaction` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interaction_has_book`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `interaction_has_book` ;

CREATE TABLE IF NOT EXISTS `interaction_has_book` (
  `interaction_id` INT NOT NULL,
  `book_id` INT NOT NULL,
  PRIMARY KEY (`interaction_id`, `book_id`),
  INDEX `fk_interaction_has_book_book1_idx` (`book_id` ASC),
  INDEX `fk_interaction_has_book_interaction1_idx` (`interaction_id` ASC),
  CONSTRAINT `fk_interaction_has_book_interaction1`
    FOREIGN KEY (`interaction_id`)
    REFERENCES `interaction` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_interaction_has_book_book1`
    FOREIGN KEY (`book_id`)
    REFERENCES `book` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS tiarra@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'tiarra'@'localhost' IDENTIFIED BY 'menrva';

GRANT SELECT, INSERT, TRIGGER ON TABLE * TO 'tiarra'@'localhost';
SET SQL_MODE = '';
DROP USER IF EXISTS chris@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'chris'@'localhost' IDENTIFIED BY 'menrva';

GRANT SELECT, INSERT, TRIGGER ON TABLE * TO 'chris'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `purchase_links`
-- -----------------------------------------------------
START TRANSACTION;
USE `menrvabooksdb`;
INSERT INTO `purchase_links` (`id`, `name`, `url`, `book_id`) VALUES (1, 'amazon', NULL, NULL);
INSERT INTO `purchase_links` (`id`, `name`, `url`, `book_id`) VALUES (2, 'kindle', NULL, NULL);
INSERT INTO `purchase_links` (`id`, `name`, `url`, `book_id`) VALUES (3, 'audible', NULL, NULL);
INSERT INTO `purchase_links` (`id`, `name`, `url`, `book_id`) VALUES (4, 'nook', NULL, NULL);
INSERT INTO `purchase_links` (`id`, `name`, `url`, `book_id`) VALUES (5, 'kobo', NULL, NULL);
INSERT INTO `purchase_links` (`id`, `name`, `url`, `book_id`) VALUES (6, 'barnes and noble', NULL, NULL);
INSERT INTO `purchase_links` (`id`, `name`, `url`, `book_id`) VALUES (7, 'books a million', NULL, NULL);
INSERT INTO `purchase_links` (`id`, `name`, `url`, `book_id`) VALUES (8, 'other', NULL, NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `social_media`
-- -----------------------------------------------------
START TRANSACTION;
USE `menrvabooksdb`;
INSERT INTO `social_media` (`id`, `name`, `url`, `author_id`) VALUES (1, 'facebook', NULL, DEFAULT);
INSERT INTO `social_media` (`id`, `name`, `url`, `author_id`) VALUES (2, 'instagram', NULL, DEFAULT);
INSERT INTO `social_media` (`id`, `name`, `url`, `author_id`) VALUES (3, 'twitter', NULL, DEFAULT);
INSERT INTO `social_media` (`id`, `name`, `url`, `author_id`) VALUES (4, 'tiktok', NULL, DEFAULT);
INSERT INTO `social_media` (`id`, `name`, `url`, `author_id`) VALUES (5, 'website', NULL, DEFAULT);
INSERT INTO `social_media` (`id`, `name`, `url`, `author_id`) VALUES (6, 'snapchat', NULL, DEFAULT);
INSERT INTO `social_media` (`id`, `name`, `url`, `author_id`) VALUES (7, 'discord', NULL, DEFAULT);

COMMIT;

