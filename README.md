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
Установить приложение create-react-app помогает настроить все инструменты, необходимые для создания приложений React.
Выполните следующую команду npm, чтобы установить утилиту create-response-app:

# sudo npm -g install create-react-app
 
Проверьте, обновлена ли версия с помощью команды:

# create-react-app --version
 
Процесс загрузки завершен. Теперь вы можете создать React-Application.

Мы даем название приложению «andreyex». Выполните указанную ниже команду, чтобы создать приложение:

# create-react-app andreyex
