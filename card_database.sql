-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 22, 2024 at 09:18 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `card_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `cards`
--

CREATE TABLE `cards` (
  `id` int(11) NOT NULL,
  `suit` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `rank` int(11) NOT NULL,
  `history` text DEFAULT NULL,
  `value` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cards`
--

INSERT INTO `cards` (`id`, `suit`, `name`, `rank`, `history`, `value`) VALUES
(1, 'Hearts', 'Two of Hearts', 1, 'The Two of Hearts is a low-value card often associated with partnership and harmony.', 'Low'),
(2, 'Hearts', 'Three of Hearts', 2, 'The Three of Hearts symbolizes creativity and emotional expression.', 'Low'),
(3, 'Hearts', 'Four of Hearts', 3, 'The Four of Hearts suggests stability and contentment in personal relationships.', 'Moderate'),
(4, 'Hearts', 'Five of Hearts', 4, 'The Five of Hearts often implies changes in relationships.', 'Moderate'),
(5, 'Hearts', 'Six of Hearts', 5, 'The Six of Hearts is known for peace and harmony within partnerships.', 'Moderate'),
(6, 'Clubs', 'Two of Clubs', 1, 'The Two of Clubs suggests teamwork and collaboration.', 'Low'),
(7, 'Clubs', 'Three of Clubs', 2, 'The Three of Clubs is a card of growth and creativity.', 'Low'),
(8, 'Clubs', 'Four of Clubs', 3, 'The Four of Clubs represents stability and security in work and ideas.', 'Moderate'),
(9, 'Clubs', 'Five of Clubs', 4, 'The Five of Clubs often implies challenges or competition.', 'Moderate'),
(10, 'Clubs', 'Six of Clubs', 5, 'The Six of Clubs symbolizes victory after struggles.', 'Moderate'),
(11, 'Diamonds', 'Two of Diamonds', 1, 'The Two of Diamonds indicates balance in financial matters.', 'Low'),
(12, 'Diamonds', 'Three of Diamonds', 2, 'The Three of Diamonds represents creativity and progress in work.', 'Low'),
(13, 'Diamonds', 'Four of Diamonds', 3, 'The Four of Diamonds suggests stability in finances.', 'Moderate'),
(14, 'Diamonds', 'Five of Diamonds', 4, 'The Five of Diamonds can indicate financial challenges.', 'Moderate'),
(15, 'Diamonds', 'Six of Diamonds', 5, 'The Six of Diamonds represents growth and prosperity.', 'Moderate'),
(16, 'Spades', 'Two of Spades', 1, 'The Two of Spades suggests conflict or decisions to be made.', 'Low'),
(17, 'Spades', 'Three of Spades', 2, 'The Three of Spades indicates challenges in communication.', 'Low'),
(18, 'Spades', 'Four of Spades', 3, 'The Four of Spades represents rest and recovery.', 'Moderate'),
(19, 'Spades', 'Five of Spades', 4, 'The Five of Spades implies struggles or conflicts.', 'Moderate'),
(20, 'Spades', 'Six of Spades', 5, 'The Six of Spades symbolizes a journey or transition.', 'Moderate');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cards`
--
ALTER TABLE `cards`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cards`
--
ALTER TABLE `cards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
