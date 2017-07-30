-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-07-30 13:52:18
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(1, '精选', '新闻标题', 'img/1.jpeg', '2017-07-26 00:00:00', '极客学院'),
(2, '本地', '123', 'img/2.jpeg', '2017-07-27 00:00:00', '新浪'),
(5, '百家', '测试', 'img/3.jpeg', '2017-07-15 00:00:00', '即可'),
(6, '推荐', '测试1', 'img/4.png', '2017-07-15 00:00:00', '即可'),
(7, '百家', '测试1', 'img/1.jpeg', '2017-07-15 00:00:00', '即可'),
(8, '本地', '测试2', 'img/3.jpeg', '2017-07-15 00:00:00', '即可'),
(9, '娱乐', '测试3', 'img/4.png', '2017-07-15 00:00:00', '极客'),
(10, '社会', '测试4', 'img/1.jpeg', '2017-07-15 00:00:00', '极客'),
(11, '军事', '测试5', 'img/2.jpeg', '2017-07-15 00:00:00', '极客'),
(12, '女人', '测试6', 'img/2.jpeg', '2017-07-15 00:00:00', '极客'),
(13, '搞笑', '测试6', 'img/3.jpeg', '2017-07-15 00:00:00', '极客'),
(14, '互联网', '测试6', 'img/4.png', '2017-07-15 00:00:00', '极客'),
(15, '科技', '测试7', 'img/1.jpeg', '2017-07-15 00:00:00', '极客'),
(16, '推荐', '新闻', 'img/2.jpeg', '2017-07-24 00:00:00', '极客');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
