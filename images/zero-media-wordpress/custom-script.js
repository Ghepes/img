/**
 * Public Active Codes
**/
// Instantiate the License Verification Class
$zmw_license = new ZmwLicenseVerify();

if (!$zmw_license->is_license_active()) {
    add_action('admin_notices', 'zmw_show_license_error');

return;
}
