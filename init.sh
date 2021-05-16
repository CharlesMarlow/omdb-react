echo 'Starting server'

cd server || exit
echo 'Installing server dependencies'
npm install
npm start &
echo 'Server components are up and running'
sleep 5s

echo 'Starting web app'

cd ../client || exit
echo 'Installing client dependencies'
npm install
npm start
echo 'App is up and running';