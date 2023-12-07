<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'wordpress' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '@%#pf}t#aDt#ySmORQE,>;?}p9@@ipQouokz21FNr%OMws3qTsbsYf,5-I.Y,e=;' );
define( 'SECURE_AUTH_KEY',  ' P+Sn}HK^]mVaRljIL,v?0^^t+>ZE.%O3p_ObT8#9DBje2cP|0PabE%rcQ[5|HcF' );
define( 'LOGGED_IN_KEY',    '2;h<]7j&Atg;d:CWi?uZa^yU{<C}Y/qo[ABa%TBz8J  ^Vc]0nLq{:@Y &!`XV01' );
define( 'NONCE_KEY',        '(P6Zn]A`i;IOI^~JYc}]MBVYwSlQ`9VI4 f[9dV:A[2916*mvz>a1(wK1N.$o*CE' );
define( 'AUTH_SALT',        'GLb1b*zr9(qz3#&Sua.XkymA@!ycRTV^[d$|iqHVIpoN[q(Oge>kS< Lh0%X*7F7' );
define( 'SECURE_AUTH_SALT', '~Bf^^lbGKF2lZJv;m8bfhGcNv5LTMZ;&2t&u>d/:VC.Hp)Tmclk/-IHoDw|aS=Id' );
define( 'LOGGED_IN_SALT',   '*(~T[O0-SQTXkIo/<e%W<A|5AJ;@3ETeOPCaQ}CQXfbO{bL@vm:(BhcTZ6I]O(E.' );
define( 'NONCE_SALT',       '#~KKj9y)D$?=F$@g!>R2}MGzc$.u1Bbx?@QvCj.0ZP6|v`f0>9GfH(={2C5%%4eZ' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs et développeuses d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
