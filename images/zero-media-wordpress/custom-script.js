/**
 * Public Active Codes
**/
public function is_license_active() {
        $isActivated = get_option('wromo_is_activated');
        return $isActivated;
    }
