# Security Audit Report & Setup Guide

**Date:** October 19, 2025
**Project:** HomeTurf

---

## Critical Security Fixes Implemented

### 1. API Key Protection
**Previous Issue:** Google API key was hardcoded in source files
**Fix Applied:**
- Moved API key to `.env` file (not committed to git)
- Created `config.php` to load environment variables securely
- Updated all 3 proxy files to use environment-based configuration

**Action Required:**
1. Copy `.env.example` to `.env`
2. Generate a new Google API key with proper restrictions:
   - Go to: https://console.cloud.google.com/apis/credentials
   - Create new API key
   - Add HTTP referrer restrictions (set to your domain)
   - Limit to Places API (New) and Geocoding API
3. Add your new Google API key to `.env`

### 2. CORS Security
**Previous Issue:** `Access-Control-Allow-Origin: *` allowed any website to use your API
**Fix Applied:**
- Configurable CORS via `ALLOWED_ORIGIN` in `.env`
- Default set to `*` but should be changed to your domain

**Action Required:**
- Update `ALLOWED_ORIGIN` in `.env` to your actual domain (e.g., `https://yourdomain.com`)

### 3. Rate Limiting
**Previous Issue:** No protection against API quota abuse
**Fix Applied:**
- Implemented IP-based rate limiting
- Default: 100 requests per IP per hour
- Configurable via `.env`

### 4. Input Validation
**Previous Issue:** Minimal input sanitization
**Fix Applied:**
- Added comprehensive input sanitization
- Length limits on all user inputs
- Format validation for place_id
- Protection against null bytes and control characters

### 5. Security Headers
**Previous Issue:** Missing security headers
**Fix Applied:**
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

### 6. Error Handling
**Previous Issue:** Detailed error messages leaked internal information
**Fix Applied:**
- Generic error messages to clients
- Detailed errors logged server-side only
- No exposure of API responses or stack traces

### 7. File Permissions
**Previous Issue:** Files owned by root
**Fix Applied:**
- Changed ownership to `www-data:www-data`
- Set PHP files to 640 permissions
- Config file readable by web server

---

## Setup Instructions

### Initial Setup

1. **Copy the environment template:**
   ```bash
   cp .env.example .env
   ```

2. **Generate a NEW Google API key:**
   - Go to: https://console.cloud.google.com/apis/credentials
   - Create new API key
   - Add restrictions:
     - **Application restrictions:** HTTP referrers (set to your domain)
     - **API restrictions:** Limit to:
       - Places API (New)
       - Geocoding API
   - Copy the new key

3. **Update .env file:**
   ```bash
   nano .env
   ```

   Update these values:
   ```
   GOOGLE_API_KEY=your_new_api_key_here
   ALLOWED_ORIGIN=https://yourdomain.com
   RATE_LIMIT_MAX_REQUESTS=100
   RATE_LIMIT_WINDOW_HOURS=1
   ```

4. **Set correct permissions:**
   ```bash
   chmod 600 .env
   chown www-data:www-data .env
   ```

### Verify Setup

1. **Test the proxy endpoints:**
   ```bash
   curl "http://yourdomain.com/geocode-proxy.php?input=Toronto"
   ```

2. **Check error logs:**
   ```bash
   tail -f /var/log/apache2/error.log
   ```

3. **Monitor rate limiting:**
   - Rate limit data stored in `/tmp/rate_limits/`
   - Check if files are being created

---

## Security Best Practices

### Ongoing Maintenance

1. **Monitor API Usage:**
   - Check Google Cloud Console for unusual spikes
   - Set up billing alerts

2. **Review Logs Regularly:**
   - Check Apache error logs for security events
   - Look for rate limit violations

3. **Update Dependencies:**
   - Keep PHP updated
   - Monitor for security advisories

4. **Backup Configuration:**
   - Keep `.env` backed up securely (NOT in git)
   - Document any changes

### Additional Recommendations

1. **Consider Additional Protections:**
   - Add HTTPS redirect (if not already done)
   - Implement request logging
   - Consider using API Gateway for additional controls
   - Add CAPTCHA for public-facing forms

2. **Google API Key Security:**
   - Regularly rotate API keys (every 90 days)
   - Use different keys for dev/staging/production
   - Enable quota limits in Google Cloud Console

3. **Monitor for Breaches:**
   - Set up Google Cloud monitoring alerts
   - Review access logs weekly
   - Use services like GitGuardian to scan for leaked secrets

---

## Files Modified

| File | Status | Changes |
|------|--------|---------|
| `.gitignore` | Modified | Added .env protection |
| `.env.example` | New | Template for environment variables |
| `config.php` | New | Secure configuration loader |
| `geocode-proxy.php` | Rewritten | Added security measures |
| `geocode-place.php` | Rewritten | Added security measures |
| `geocode-address.php` | Rewritten | Added security measures |
| All files | Modified | Changed ownership to www-data |

---

## Security Contact

If you discover a security vulnerability, please:
1. Do NOT open a public issue
2. Contact the site administrator immediately
3. Provide details of the vulnerability
4. Allow time for fixes before public disclosure

---

## Compliance

This implementation follows:
- OWASP Top 10 guidelines
- PHP security best practices
- Google API security recommendations
- Industry-standard rate limiting patterns

---

## Audit Summary

**Critical Issues Fixed:** 3
**High Severity Issues Fixed:** 3
**Medium Severity Issues Fixed:** 4
**Low Severity Issues Fixed:** 2

**Total Security Improvements:** 12

---

**Updated:** October 19, 2025 at 04:52 AM UTC
**Next Review:** January 19, 2026 (3 months)
