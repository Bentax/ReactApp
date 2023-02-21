# ReactApp Install Next.js on Ubuntu 20.04.
1. Keep the server Up to date
# apt update -y

# apt upgrade -y

2. Install build-essential
# apt-get install build-essential

3. Install required package
# apt install curl -y

4 . Install NodeJS and NPM
Add the latest stable release of NodeJS.

# curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

Install NodeJS.

# sudo apt-get install nodejs

Verify the installations.

# node -v
# npm -v

5. Initialize the Next.js project development environment
Now, we’ll itialize the Next.js project development environment with the npx CLI build tool.
