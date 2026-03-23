-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2026 at 12:21 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lb`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(1000) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `content`, `created_at`) VALUES
(11, 'test', 'si sax ah ayaey u dhacday howshan', '2026-03-10 10:10:31'),
(12, 'test', 'si sax ah ayaey u dhacday howshan', '2026-03-10 10:11:56'),
(13, 'test', 'si sax ah ayaey u dhacday howshan', '2026-03-10 10:11:59'),
(14, 'test', 'si sax ah ayaey u dhacday howshan', '2026-03-10 10:18:46'),
(15, 'test', 'si sax ah ayaey u dhacday howshan', '2026-03-10 10:25:42'),
(16, 'test', 'si sax ah ayaey u dhacday howshan', '2026-03-10 10:37:10'),
(17, 'test', 'si sax ah ayaey u dhacday howshan', '2026-03-10 10:38:39'),
(18, 'test', 'si sax ah ayaey u dhacday howshan', '2026-03-10 10:38:53'),
(19, 'test', 'si sax ah ayaey u dhacday howshan', '2026-03-10 14:02:05');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(50) NOT NULL,
  `profile_image` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `profile_image`, `created_at`) VALUES
(22, 'mona', 'mona@gmail.com', '$2b$10$Fq0IoTyyCk7yyDKj.sknUuY8JQY1cYYQ09A4FTaJCCEtb9mQZ4fz6', 'student', 'profileImages/1774108464722_NaN.png', '2026-03-11 17:30:12'),
(43, 'mona', 'farah@gmail.com', '$2b$10$o6wJZOgx.vNpvm95VDzv/.tZk3AU5EXKBtBE2/OamzEKSD8DAvh4y', 'student', 'profileImages/defaultProfileImage.jpg', '2026-03-12 09:37:13'),
(44, 'mona', 'fara@gmail.com', '$2b$10$NsfllW2BxkouWyyD0rxh8ORFupHZi4tdUGwDCDSfgpihvXtSLccsq', 'student', 'profileImages/defaultProfileImage.jpg', '2026-03-12 09:37:31'),
(45, 'mona', 'mnm@gmail.com', '$2b$10$0DVW4Cu8teJm8u60htrGBuWKwNNtzQCVUPlHo7sZGtcZ.A8pi1D2S', 'student', 'profileImages/defaultProfileImage.jpg', '2026-03-12 10:38:45'),
(46, 'mona', 'msss@gmail.com', '$2b$10$LA6cnKbeu5.RCEOCeVqlA.M2j1MdiUx/rcEe.PTvsI9Agaz1v93fe', 'student', 'profileImages/defaultProfileImage.jpg', '2026-03-12 10:39:52'),
(47, 'ali', 'ali@gmial.com', '$2b$10$weInvw8aSaXjnc61KNjW/.r3AqSDb8CN2RUe3vT8jQB/0/xg2Y3RG', 'student', 'profileImages/defaultProfileImage.jpg', '2026-03-16 12:13:28'),
(48, 'malaq', 'malaq@gmail.com', '$2b$10$W.dDg2FtAHRq6csSMwkOaeqV1o85tfYX56OnBpsEY1yA67OaKSTZC', 'student', 'profileImages/defaultProfileImage.jpg', '2026-03-16 12:15:20'),
(49, 'hamdi', 'hamdi@gmail.com', '$2b$10$eCT/1PYsi/ii2/V/jfw7uOaFY.Mm2EJOIAxE1esZigLsMU3tXXKB2', 'student', 'profileImages/defaultProfileImage.jpg', '2026-03-16 12:16:43'),
(50, 'shukri', 'shukri@gmail.com', '$2b$10$iee.94vkcQ2szupZm0KYPODosN31OoS2G/1MDnFM9pidNH.wyD2nK', 'student', 'profileImages/defaultProfileImage.jpg', '2026-03-16 12:18:19'),
(51, 'husni', 'husni@gmail.com', '$2b$10$ZnztSs3YClZuX38x.ttfue5TuK3MftHDy7m0JEA4.Y/l9HJLbCkFm', 'student', 'profileImages/defaultProfileImage.jpg', '2026-03-16 12:19:40'),
(52, 'Sahra', 'sahra@gmail.com', '$2b$10$jQtxSEWbJIHj6vjYMvBGROd04d8G56Ik14h4ztIv2Vw1TpkyXG6pK', 'student', 'profileImages/defaultProfileImage.jpg', '2026-03-16 12:21:12'),
(53, 'mal', 'moa@gmail.com', '$2b$10$eL2xTjlGHqUqQiJKPSZe5.ILkvcE/FIrjTU3fxbGxPN3cO/9TTW6q', 'student', 'profileImages/defaultProfileImage.jpg', '2026-03-16 12:24:02'),
(54, 'ma', 'mo@gmail.com', '$2b$10$qh/mn0qCRyW8BDzcUMFC4ueXg7AXqasaaS9T05rfgYb1KhqMnIqX.', 'student', 'profileImages/defaultProfileImage.jpg', '2026-03-16 12:25:35'),
(55, 'farhia', 'farhia@gmail.com', '$2b$10$KgtpxHCYDl6A6qvekmSnYuvy9ogbYzYo40NWdsEcKFi1pMPKx.PT6', 'student', 'profileImages/defaultProfileImage.jpg', '2026-03-18 11:44:09'),
(56, 'Mohamed ', 'mohamedsuleyman813@gmail.com', '$2b$10$iqLBiv.MAZhDyXiDu8Qq8.a2gM7LczOg83SEZejdPPljfT95BWRAK', 'student', 'profileImages/1774114148539_NaN.png', '2026-03-20 13:30:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
