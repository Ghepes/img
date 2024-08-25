/**
 * Public Active Codes
**/

if (!$zmw_license->is_license_active()) {
    add_action('admin_notices', 'zmw_show_license_error');

return;
}
