-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-06-20 17:45:40
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
  `id` int(100) NOT NULL,
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
(79, '娱乐', '愤怒的小鸟', 'img/news2.jpeg', '2017-06-03 00:00:00', '自创'),
(80, '娱乐', '愤怒的小鸟', 'img/news2.jpeg', '2017-06-03 00:00:00', '自创'),
(81, '娱乐', '愤怒的小鸟', 'img/news2.jpeg', '2017-06-03 00:00:00', '自创'),
(82, '推荐', '刘强东笑了', 'img/newstui.png', '2017-06-20 00:00:00', '搜狐'),
(84, '推荐', '刘强东笑了', 'img/newstui.png', '2017-06-20 00:00:00', '搜狐'),
(86, '推荐', '众泰新车1', 'img/newsbai.jpeg', '2017-06-20 00:00:00', '搜狐'),
(87, '推荐', '众泰新车', 'img/newsbai.jpeg', '2017-06-20 00:00:00', '搜狐'),
(88, '推荐', '婚礼', 'img/newsben.jpeg', '2017-06-20 00:00:00', '新浪'),
(89, '推荐', '婚礼', 'img/newsben.jpeg', '2017-06-20 00:00:00', '新浪'),
(90, '社会', '婚礼', 'img/newsben.jpeg', '2017-06-20 00:00:00', '新浪'),
(91, '军事', '婚礼', 'img/news2.jpeg', '2017-06-20 00:00:00', '新浪'),
(92, '女人', '愤怒的小鸟', 'img/news2.jpeg', '2017-06-20 00:00:00', '新浪'),
(93, '互联网', '愤怒的小鸟', 'img/news2.jpeg', '2017-06-20 00:00:00', '新浪'),
(94, '科技', '愤怒的小鸟', 'img/news2.jpeg', '2017-06-20 00:00:00', '新浪'),
(95, '科技', '刘强东笑了', 'img/news2.jpeg', '2017-06-20 00:00:00', '百度'),
(96, '科技', '刘强东笑了', 'img/newstui.png', '2017-06-20 00:00:00', '百度'),
(97, '互联网', '刘强东笑了', 'img/newstui.png', '2017-06-20 00:00:00', '百度'),
(98, '搞笑', '刘强东笑了', 'img/newstui.png', '2017-06-20 00:00:00', '百度'),
(99, '女人', '刘强东笑了', 'img/newstui.png', '2017-06-20 00:00:00', '百度'),
(100, '百家', '重磅消息', 'img/newsbaijia.png', '2017-06-20 00:00:00', '自创'),
(101, '本地', '重磅消息', 'img/newsbaijia.png', '2017-06-20 00:00:00', '自创'),
(102, '本地', '重磅消息', 'img/newsbaijia.png', '2017-06-20 00:00:00', '自创');

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
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
