# Deployment Instructions for v2.hanif.one

**Target Server:** `155.133.23.94`
**Domain:** `v2.hanif.one`

## 1. Connect to your VPS
SSH into your server:
```bash
ssh root@155.133.23.94
```

## 2. Install Prerequisites (if not already installed)
Update your package list and install Node.js, npm, git, and Nginx.

```bash
# Update packages
sudo apt update

# Install Nginx and Git
sudo apt install nginx git -y

# Install Node.js (Version 20.x recommended)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installations
node -v
npm -v
nginx -v
```

## 3. Clone the Repository
We will clone the project into `/var/www/v2.hanif.one`.

```bash
# Create the directory
mkdir -p /var/www/v2.hanif.one

# Clone into the directory (make sure directory is empty or just clone into it)
cd /var/www
git clone https://github.com/Hanif-adedotun/Portfolio.git v2.hanif.one
# Note: If v2.hanif.one already exists and is failing, you might need to remove it first or pull changes.
```

## 4. Install Dependencies and Build
Navigate into the project folder and build the Astro site.

```bash
cd /var/www/v2.hanif.one

# Install dependencies
npm install

# Build the project (creates the 'dist' folder)
npm run build
```

## 5. Configure Nginx
You can use the `nginx.conf` included in the repository.

```bash
# Remove default nginx config if it exists
sudo rm /etc/nginx/sites-enabled/default

# Copy or symlink the project's nginx config
sudo cp /var/www/v2.hanif.one/nginx.conf /etc/nginx/sites-available/v2.hanif.one

# Enable the site
sudo ln -s /etc/nginx/sites-available/v2.hanif.one /etc/nginx/sites-enabled/

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

## 6. (Optional) SSL Setup with Certbot
Secure your site with HTTPS.

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtain and install certificate
sudo certbot --nginx -d v2.hanif.one
```

Follow the prompts to configure HTTPS. Certbot will automatically update your Nginx configuration.
