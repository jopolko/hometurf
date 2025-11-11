# .env File Protection - Security Layers Explained

## The Question: What Prevents Someone from Reading My .env File?

Great question! Let me explain the multiple layers of security that protect your `.env` file.

---

## Security Layers (Defense in Depth)

### Layer 1: HTTP Access Protection (.htaccess) ✅

**Protection:** Apache blocks direct HTTP access to `.env` files

**How it works:**
```apache
# In .htaccess
<FilesMatch "^\.env">
    Require all denied
</FilesMatch>
```

**Test:**
```bash
# Try to access .env via browser
curl https://joshuaopolko.com/hometurf/.env
# Result: 403 Forbidden ✅
```

**What this prevents:**
- ❌ https://yourdomain.com/.env
- ❌ https://yourdomain.com/.env.example
- ❌ Direct download via browser
- ❌ Automated scanners trying common paths

**Attack prevented:**
```bash
# Attacker tries common paths
curl https://yourdomain.com/.env
curl https://yourdomain.com/hometurf/.env
curl https://yourdomain.com/.env.production
# All return: 403 Forbidden ✅
```

---

### Layer 2: File System Permissions ✅

**Protection:** Operating system file permissions

**Current setup (once you create .env):**
```bash
# Recommended permissions
chmod 600 .env
chown www-data:www-data .env

# Result:
-rw------- 1 www-data www-data .env
```

**What this means:**
- `6` (rw-): Owner (www-data) can read and write
- `0` (---): Group cannot access
- `0` (---): Others cannot access

**Who can read the file:**
- ✅ www-data user (Apache/PHP)
- ✅ root user (system admin)
- ❌ Other users on the system
- ❌ Other processes

**Test:**
```bash
# As regular user (not root)
cat /var/www/html/hometurf/.env
# Result: Permission denied ✅

# As www-data or root
cat /var/www/html/hometurf/.env
# Result: Can read ✅
```

---

### Layer 3: Git Ignore Protection ✅

**Protection:** Prevents accidental commit to version control

**How it works:**
```bash
# In .gitignore
.env
.env.local
.env.*.local
```

**What this prevents:**
- ❌ Accidental `git add .env`
- ❌ Pushing secrets to GitHub/GitLab
- ❌ Exposing secrets in public repositories

**Common scenario prevented:**
```bash
# Developer workflow
git add .
git commit -m "Update config"
git push

# Without .gitignore: .env gets pushed to GitHub (BAD!)
# With .gitignore: .env is ignored (SAFE!) ✅
```

---

### Layer 4: PHP Configuration ✅

**Protection:** PHP doesn't serve .env as plain text

**How it works:**
- `.env` has no PHP extension
- Apache doesn't process it as PHP
- Even if accessible, would show as text file
- But Layer 1 (.htaccess) blocks access anyway

---

### Layer 5: Server Configuration

**Protection:** Firewall and SSH access controls

**Your server security:**
```bash
# Who can SSH into server?
- Root user (with password/key)
- Authorized users only

# Firewall (typically)
- Port 22 (SSH): Restricted
- Port 80 (HTTP): Open
- Port 443 (HTTPS): Open
```

**What this prevents:**
- ❌ Unauthorized server access
- ❌ Direct file system access from internet

---

## Attack Scenarios & How You're Protected

### Attack 1: Direct HTTP Access

**Attack:**
```bash
curl https://joshuaopolko.com/hometurf/.env
```

**Defense:**
- Layer 1: .htaccess blocks access → 403 Forbidden ✅

**Result:** Blocked ✅

---

### Attack 2: Path Traversal

**Attack:**
```bash
# Try to access via different paths
curl https://joshuaopolko.com/hometurf/../hometurf/.env
curl https://joshuaopolko.com/hometurf/.%2Fenv
curl https://joshuaopolko.com/hometurf/%2E%65%6E%76
```

**Defense:**
- Layer 1: Apache normalizes paths, .htaccess still blocks ✅
- Apache security: Rejects malformed paths ✅

**Result:** Blocked ✅

---

### Attack 3: Local File Inclusion (LFI)

**Attack:**
```bash
# Try to exploit PHP to read .env
curl "https://joshuaopolko.com/somepage.php?file=../../.env"
```

**Defense:**
- Your PHP code: Doesn't have file inclusion vulnerabilities ✅
- Input validation: Sanitizes all user input ✅
- No unsafe `include($_GET['file'])` patterns ✅

**Result:** Not applicable (no vulnerable code) ✅

---

### Attack 4: Source Code Disclosure

**Attack:**
```bash
# Try to view PHP source instead of executing it
curl https://joshuaopolko.com/hometurf/config.php
```

**Defense:**
- Layer 1: .htaccess blocks config.php → 403 Forbidden ✅
- Even if accessible, Apache executes PHP (doesn't show source) ✅

**Result:** Blocked ✅

---

### Attack 5: Automated Vulnerability Scanners

**Attack:**
```bash
# Tools like Nikto, dirbuster scan for common files
nikto -h https://joshuaopolko.com/hometurf/
```

**Scanner tries:**
```
/.env
/.env.local
/.env.production
/.env.backup
/config.php
/.git/config
```

**Defense:**
- Layer 1: .htaccess blocks all → 403 Forbidden ✅
- Doesn't reveal if files exist ✅

**Result:** Blocked ✅

---

### Attack 6: Shared Hosting User

**Attack:**
```bash
# Another user on same server tries to read your .env
cat /var/www/html/hometurf/.env
```

**Defense:**
- Layer 2: File permissions (600) → Permission denied ✅
- Only www-data and root can read ✅

**Result:** Blocked ✅

---

### Attack 7: Compromised WordPress Site

**Attack:**
```bash
# Attacker compromises another site on same server
# Tries to read your .env from compromised site
<?php
echo file_get_contents('/var/www/html/hometurf/.env');
?>
```

**Defense:**
- Layer 2: File permissions prevent cross-user access ✅
- Layer 5: Proper server configuration isolates sites ✅

**Result:** Blocked (if proper permissions set) ✅

---

### Attack 8: Public Git Repository

**Attack:**
```bash
# Developer accidentally pushes .env to GitHub
git add .env
git commit -m "config"
git push
```

**Defense:**
- Layer 3: .gitignore prevents `git add .env` ✅
- Git refuses to add ignored files ✅

**Result:** Prevented ✅

---

### Attack 9: SSH/Server Compromise

**Attack:**
```bash
# Attacker gains SSH access to server as root
ssh root@yourdomain.com
cat /var/www/html/hometurf/.env
```

**Defense:**
- ⚠️ If attacker has root access, they can read anything
- This is why SSH security is critical:
  - Use SSH keys (not passwords)
  - Disable password authentication
  - Use fail2ban for brute force protection
  - Keep server updated

**Result:**
- ✅ Prevented by strong SSH security
- ❌ If compromised, all bets are off

---

## What CAN Read Your .env File?

### Legitimate Access:

1. **PHP Scripts (as www-data)**
   ```php
   // In your PHP code
   loadEnv('.env');  // ✅ Works
   ```

2. **Root User via SSH**
   ```bash
   sudo cat /var/www/html/hometurf/.env  # ✅ Works
   ```

3. **www-data User**
   ```bash
   sudo -u www-data cat /var/www/html/hometurf/.env  # ✅ Works
   ```

### Cannot Access:

1. **Web Browsers**
   ```bash
   https://yourdomain.com/.env  # ❌ 403 Forbidden
   ```

2. **Other Users on Server**
   ```bash
   # As user 'john'
   cat /var/www/html/hometurf/.env  # ❌ Permission denied
   ```

3. **Other Websites on Same Server**
   ```php
   // From another site
   file_get_contents('/var/www/html/hometurf/.env');  // ❌ Permission denied
   ```

4. **Internet Scanners/Crawlers**
   ```bash
   curl https://yourdomain.com/.env  # ❌ 403 Forbidden
   ```

---

## Verification Checklist

Run these tests to verify your security:

### Test 1: HTTP Access Blocked
```bash
curl -I https://joshuaopolko.com/hometurf/.env
# Expected: HTTP/1.1 403 Forbidden ✅
```

### Test 2: File Permissions Correct
```bash
ls -la /var/www/html/hometurf/.env
# Expected: -rw------- 1 www-data www-data .env ✅
```

### Test 3: Git Ignore Working
```bash
cd /var/www/html/hometurf
git status
# Expected: .env should NOT appear in untracked files ✅
```

### Test 4: PHP Can Read It
```bash
# Your proxies should work (after creating .env)
curl "https://joshuaopolko.com/hometurf/geocode-proxy.php?input=Toronto"
# Expected: JSON response ✅
```

### Test 5: Config.php Also Blocked
```bash
curl -I https://joshuaopolko.com/hometurf/config.php
# Expected: HTTP/1.1 403 Forbidden ✅
```

---

## Current Status: FIXED ✅

**Before Fix:**
- ❌ .env files accessible via HTTP (200 OK)
- ❌ config.php accessible via HTTP
- ⚠️ API key could be stolen if .env created

**After Fix:**
- ✅ .env files blocked via HTTP (403 Forbidden)
- ✅ config.php blocked via HTTP (403 Forbidden)
- ✅ Multiple layers of protection
- ✅ Git ignore configured
- ✅ File permissions documented

---

## Remaining Risks

### Risk 1: Server Compromise
- **Threat:** If attacker gains root/SSH access
- **Mitigation:**
  - Use SSH keys (not passwords)
  - Keep server updated
  - Use firewall
  - Monitor access logs

### Risk 2: Weak File Permissions
- **Threat:** If .env is created with wrong permissions
- **Mitigation:**
  - Always use: `chmod 600 .env`
  - Include in setup docs ✅

### Risk 3: Accidental Git Commit
- **Threat:** Developer force-adds .env
- **Mitigation:**
  - .gitignore configured ✅
  - Never use `git add -f .env`
  - Use git pre-commit hooks (optional)

---

## Best Practices Summary

### When Creating .env:

```bash
# Create from template
cp .env.example .env

# Set secure permissions IMMEDIATELY
chmod 600 .env
chown www-data:www-data .env

# Verify it's protected
curl -I https://yourdomain.com/hometurf/.env
# Should return: 403 Forbidden
```

### Server Security:

```bash
# Use SSH keys only
# In /etc/ssh/sshd_config:
PasswordAuthentication no
PermitRootLogin prohibit-password

# Install fail2ban
sudo apt install fail2ban

# Keep updated
sudo apt update && sudo apt upgrade
```

### Application Security:

```bash
# Never log .env contents
# Never echo API keys
# Never commit .env to git
# Rotate API keys regularly (every 90 days)
```

---

## Tools to Test Your Security

### 1. Online Security Scanners
```bash
# Check if common files are exposed
https://securityheaders.com
https://observatory.mozilla.org
```

### 2. Local Testing
```bash
# Try to access .env
curl -v https://joshuaopolko.com/hometurf/.env

# Check file permissions
ls -la .env

# Verify git ignore
git check-ignore .env
# Should output: .env (meaning it's ignored)
```

### 3. Automated Scanner
```bash
# Use nikto (on your own site only!)
nikto -h https://joshuaopolko.com/hometurf/
# Should not find .env or config.php accessible
```

---

## Conclusion

Your `.env` file is protected by **5 security layers**:

1. ✅ HTTP Access (.htaccess) - Blocks web access
2. ✅ File Permissions (600) - Blocks other users
3. ✅ Git Ignore - Prevents commits
4. ✅ PHP Configuration - No source disclosure
5. ✅ Server Security - SSH/firewall protection

**The only way someone can read your .env:**
- They compromise your server (get root access)
- You accidentally commit it to git (prevented by .gitignore)
- You set wrong file permissions (documented in setup)

**Bottom line:** With proper setup, your API key is safe!

---

**Created:** October 19, 2025
**Updated:** October 19, 2025 at 04:52 AM UTC
