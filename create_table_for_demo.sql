CREATE TABLE `Innovation_Day` (
  `doc` json DEFAULT NULL,
  `_id` varchar(32) GENERATED ALWAYS AS (json_unquote(json_extract(`doc`,'$._id'))) STORED NOT NULL,
  UNIQUE KEY `_id` (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4