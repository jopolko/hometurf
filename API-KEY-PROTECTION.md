# API Key Protection - Network Sniffing & Debug Console

## Quick Answer: Your API Keys Are Safe ✅

**Network Sniffers:** ❌ Cannot see your API key
**Browser Console:** ❌ Cannot see your API key
**DevTools Network Tab:** ❌ Cannot see your API key
**Your API Quota:** ✅ Protected by rate limiting and referer validation

---

## How It Works

### Architecture: Secure Proxy Pattern

```
┌─────────────┐         ┌──────────────┐         ┌─────────────┐
│   Browser   │────────▶│  Your Proxy  │────────▶│  Google API │
│ (JavaScript)│  HTTPS  │  (PHP + ENV) │  HTTPS  │             │
└─────────────┘         └──────────────┘         └─────────────┘
                              ▲
                              │
                         API KEY USED HERE
                         (Server-Side Only)
                         Never sent to browser
```

### What Happens Step-by-Step

1. **User types "Toronto" in search box**

2. **JavaScript makes request to YOUR server:**
   ```javascript
   fetch('https://yourdomain.com/geocode-proxy.php?input=Toronto')
   ```
   - ✅ No API key in URL
   - ✅ No API key in headers
   - ✅ Visible in browser console (but harmless)

3. **Your PHP proxy processes request:**
   ```php
   $apiKey = env('GOOGLE_API_KEY');  // From .env file (server-side)
   // Makes request to Google with API key
   ```
   - ✅ API key loaded from server environment
   - ✅ Never exposed to client
   - ✅ Completely invisible to browser

4. **Google returns data to your server**

5. **Your server returns data to browser:**
   ```json
   {
     "suggestions": [...],
     "location": {...}
   }
   ```
   - ✅ Only the data, no API key
   - ✅ Safe to view in console

---

## What Attackers Can See

### Network Sniffer (Wireshark, tcpdump)

**With HTTPS (Your Setup):**
```
GET /geocode-proxy.php?input=Toronto HTTP/2
Host: yourdomain.com
[encrypted data]

→ Result: Cannot see API key ✅
```

**Without HTTPS (insecure):**
```
GET /geocode-proxy.php?input=Toronto
→ Can see request/response but still NO API KEY ✅
```

### Browser DevTools → Network Tab

```
Request URL: https://yourdomain.com/geocode-proxy.php?input=Toronto
Request Method: GET
Status Code: 200 OK

Response:
{
  "suggestions": [...]
}

→ Result: Cannot see API key ✅
```

### Browser DevTools → Console Tab

```javascript
console.log(response);
// Shows: { suggestions: [...] }

→ Result: Cannot see API key ✅
```

---

## Attack Scenarios & Protection

### Scenario 1: Someone Uses Browser Console to Spam Your Proxy

**Attack:**
```javascript
// In browser console
for(let i=0; i<1000; i++) {
  fetch('/geocode-proxy.php?input=test' + i);
}
```

**Protection:**
- ✅ Rate Limiting: 100 requests/hour per IP
- ✅ After 100 requests, they get `429 Rate Limit Exceeded`
- ✅ Your API quota is protected

### Scenario 2: Someone Builds a Scraper

**Attack:**
```python
# External script trying to use your proxy
import requests
for i in range(10000):
    requests.get('https://yourdomain.com/geocode-proxy.php?input=test')
```

**Protection:**
- ✅ Rate Limiting: Blocked after 100 requests/hour
- ✅ Referer Validation: Can block requests not from your site
- ✅ CORS: Browser blocks cross-origin requests
- ✅ Input Validation: Rejects malformed requests

### Scenario 3: Someone Embeds Your Proxy in Their Site

**Attack:**
```html
<!-- On attacker's site -->
<script>
  fetch('https://yourdomain.com/geocode-proxy.php?input=Toronto')
</script>
```

**Protection:**
- ✅ CORS: Browser blocks this automatically
- ✅ Referer Validation: Server rejects requests from wrong domain
- ✅ Rate Limiting: Limits damage even if they bypass CORS

### Scenario 4: Network Packet Sniffer

**Attack:**
```bash
# Attacker on same network
tcpdump -i eth0 port 443
```

**Protection:**
- ✅ HTTPS: All traffic encrypted
- ✅ API key never sent to client, so never visible
- ✅ Even if they decrypt HTTPS (MitM), no API key in traffic

---

## Layers of Security (Defense in Depth)

```
Layer 1: HTTPS Encryption
         └─▶ Prevents network sniffing

Layer 2: Server-Side API Key Storage (.env)
         └─▶ API key never leaves server

Layer 3: CORS Headers
         └─▶ Browser blocks unauthorized domains

Layer 4: Referer Validation
         └─▶ Server blocks unauthorized domains

Layer 5: Rate Limiting
         └─▶ Prevents quota abuse

Layer 6: Input Validation
         └─▶ Prevents malicious payloads

Layer 7: Error Sanitization
         └─▶ No information leakage
```

---

## Configuration for Maximum Security

### In your `.env` file:

```bash
# Your Google API key (generate a NEW one!)
GOOGLE_API_KEY=your_new_api_key_here

# CORS - Lock to your domain
ALLOWED_ORIGIN=https://yourdomain.com

# Referer validation - Lock to your domain
ALLOWED_REFERER=https://yourdomain.com

# Require referer header (strict mode)
REQUIRE_REFERER=true

# Rate limiting (adjust based on your needs)
RATE_LIMIT_MAX_REQUESTS=100
RATE_LIMIT_WINDOW_HOURS=1
```

### In Google Cloud Console:

1. **Application Restrictions:**
   - Set "HTTP referrers"
   - Add: `https://yourdomain.com/*`
   - This prevents API key from working on other domains

2. **API Restrictions:**
   - Limit to only APIs you use:
     - Places API (New)
     - Geocoding API

3. **Quotas & Limits:**
   - Set daily quota limits
   - Set up billing alerts

---

## Testing Your Security

### Test 1: Check if API key is exposed in HTML

```bash
curl https://yourdomain.com/index.html | grep -i "AIza"
# Expected: No matches found ✅
```

### Test 2: Check if API key is exposed in JavaScript

```bash
curl https://yourdomain.com/index.html | grep -i "api.*key"
# Expected: No API key values ✅
```

### Test 3: Test rate limiting

```bash
# Make 101 requests rapidly
for i in {1..101}; do
  curl "https://yourdomain.com/geocode-proxy.php?input=test$i"
done
# Expected: Last request returns 429 Rate Limit Exceeded ✅
```

### Test 4: Test referer validation

```bash
curl -H "Referer: https://malicious-site.com" \
  "https://yourdomain.com/geocode-proxy.php?input=Toronto"
# Expected: 403 Access Denied ✅
```

### Test 5: Test CORS

```javascript
// From different domain in browser console
fetch('https://yourdomain.com/geocode-proxy.php?input=Toronto')
// Expected: CORS error ✅
```

---

## What Can Still Be Abused?

### If Someone Has Direct Access to Your Server:

❌ They could read `.env` file
- **Solution:** Proper file permissions (600 on .env)
- **Solution:** Restrict SSH access

❌ They could read PHP files
- **Solution:** Files are owned by www-data, not accessible to other users
- **Solution:** Server hardening (firewall, SSH keys only)

### If Google API Key Restrictions Are Not Set:

⚠️ If someone does get the key somehow, they could use it
- **Solution:** Always set HTTP Referrer restrictions in Google Cloud Console
- **Solution:** Set API restrictions to specific APIs only
- **Solution:** Set quota limits

---

## Monitoring & Alerts

### Check for Abuse

```bash
# Check rate limit directory
ls -lh /tmp/rate_limits/
# Many files = many unique IPs hitting your proxy

# Check Apache logs for suspicious activity
tail -f /var/log/apache2/access.log | grep geocode

# Check error logs
tail -f /var/log/apache2/error.log | grep -i "rate limit\|referer"
```

### Google Cloud Console Monitoring

1. Go to APIs & Services → Dashboard
2. Check for unusual traffic spikes
3. Set up billing alerts
4. Monitor quota usage

---

## Best Practices Summary

✅ **DO:**
- Keep API key in `.env` file only
- Set CORS to your specific domain
- Enable referer validation
- Set Google Cloud API restrictions
- Monitor API usage regularly
- Use HTTPS everywhere
- Set rate limits appropriate to your traffic

❌ **DON'T:**
- Put API keys in HTML or JavaScript
- Use `ALLOWED_ORIGIN=*` in production
- Commit `.env` file to git
- Ignore rate limit violations
- Skip Google Cloud API restrictions

---

## Conclusion

**Your API key is safe from:**
- ✅ Network sniffers (HTTPS + server-side key)
- ✅ Browser debug console (key never sent to client)
- ✅ Source code inspection (key in .env, not in code)
- ✅ Cross-site usage (CORS + referer validation)
- ✅ Quota abuse (rate limiting)

**Your remaining action items:**
1. Create `.env` file from `.env.example`
2. Generate NEW Google API key
3. Add API restrictions in Google Cloud Console
4. Update `.env` with your domain

---

**Updated:** October 19, 2025 at 04:52 AM UTC
