SET foreign_key_checks = 0;
TRUNCATE TABLE category;
TRUNCATE TABLE frame;
TRUNCATE TABLE situation;
TRUNCATE TABLE size;
TRUNCATE TABLE technique;
TRUNCATE TABLE picture;

SET NAMES utf8mb4;

INSERT INTO `size` (`id`, `format`, `created_at`, `updated_at`) VALUES
(1, '1F', now(), NULL),
(2, '2F', now(), NULL),
(3, '3F', now(), NULL),
(4, '4F', now(), NULL),
(5, '5F', now(), NULL),
(6, '6F', now(), NULL),
(7, '8F', now(), NULL),
(8, '10F', now(), NULL),
(9, '12F', now(), NULL),
(10, '15F', now(), NULL),
(11, '20F', now(), NULL),
(12, '25F', now(), NULL),
(13, '30F', now(), NULL),
(14, '40F', now(), NULL),
(15, '50F', now(), NULL),
(16, '60F', now(), NULL),
(17, '80F', now(), NULL),
(18, '100F', now(), NULL),
(19, '120F', now(), NULL),
(20, '1P', now(), NULL),
(21, '2P', now(), NULL),
(22, '3P', now(), NULL),
(23, '4P', now(), NULL),
(24, '5P', now(), NULL),
(25, '6P', now(), NULL),
(26, '8P', now(), NULL),
(27, '10P', now(), NULL),
(28, '12P', now(), NULL),
(29, '15P', now(), NULL),
(30, '20P', now(), NULL),
(31, '25P', now(), NULL),
(32, '30P', now(), NULL),
(33, '40P', now(), NULL),
(34, '50P', now(), NULL),
(35, '60P', now(), NULL),
(36, '80P', now(), NULL),
(37, '100P', now(), NULL),
(38, '120P', now(), NULL),
(39, '1M', now(), NULL),
(40, '2M', now(), NULL),
(41, '3M', now(), NULL),
(42, '4M', now(), NULL),
(43, '5M', now(), NULL),
(44, '6M', now(), NULL),
(45, '8M', now(), NULL),
(46, '10M', now(), NULL),
(47, '12M', now(), NULL),
(48, '15M', now(), NULL),
(49, '20M', now(), NULL),
(50, '25M', now(), NULL),
(51, '30M', now(), NULL),
(52, '40M', now(), NULL),
(53, '50M', now(), NULL),
(54, '60M', now(), NULL),
(55, '80M', now(), NULL),
(56, '100M', now(), NULL),
(57, '120M', now(), NULL);

INSERT INTO `technique` (`id`, `type`, `created_at`, `updated_at`) VALUES
(1, 'Gouache', now(), NULL),
(2, 'Peinture à l\'huile', now(), NULL),
(3, 'Peinture à l\'eau', now(), NULL),
(4, 'Collage', now(), NULL),
(5, 'Isorel', now(), NULL),
(6, 'Crayon/Fusain', now(), NULL);

INSERT INTO `situation` (`id`, `collection`, `created_at`, `updated_at`) VALUES
(1, 'Non présicé', now(), NULL),
(2, 'Chez l\'artiste', now(), NULL),
(3, 'Vendu à un particulier', now(), NULL),
(4, 'Vendu à des professionnels', now(), NULL),
(5, 'Actuellement exposé', now(), NULL);

INSERT INTO `frame` (`id`, `framing`, `created_at`, `updated_at`) VALUES
(1, 'Non renseigné', now(), NULL),
(2, 'Non encadré', now(), NULL),
(3, 'Cadre seul', now(), NULL),
(4, 'Cadre + verre', now(), NULL),
(5, 'Spécial', now(), NULL);

INSERT INTO `category` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Arbre', now(), NULL),
(2, 'Dessin de tissu', now(), NULL),
(3, 'Machines agricoles', now(), NULL),
(4, 'Champs', now(), NULL),
(5, 'Portrait', now(), NULL),
(6, 'Abbaye', now(), NULL),
(7, 'Animaux', now(), NULL),
(8, 'Dessins sur papier', now(), NULL),
(9, 'Estran', now(), NULL),
(10, 'Italie', now(), NULL),
(11, 'Nature Morte', now(), NULL),

