/**
 * Public Active Codes
**/
public function is_license_active() {
        $isActivated = get_option('wromo_is_activated');
        return $isActivated;
    }

/**
 * RAW PHP Codes
**/
require ZMW_PATH . "/incl/php-codes/attachment-fields.php";
require ZMW_PATH . "/incl/php-codes/generate-bridge-file.php";
require ZMW_PATH . "/incl/php-codes/license-verify.php";
require ZMW_PATH . "/incl/php-codes/save-external-media-url.php";
require ZMW_PATH . "/incl/php-codes/url-replacement.php";
require ZMW_PATH . "/incl/php-codes/utils.php";
