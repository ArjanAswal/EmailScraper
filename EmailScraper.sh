mkdir TEMP__DUMP && mkdir Result

clear
figlet EmailScraper

echo press 1 to scrape default list and 2 to scrape fresh list

read choice

if [ $choice = '1' ]
then
arr[0]='Blogger'
arr[1]='Writer'
arr[2]='Actor'
elif [ $choice = '2' ]
then

echo Enter the profiles and write stop and press enter when finished [eg: CEO, Blogger etc]

IFS=''

while read line
do
if [ "$line" = 'stop' ]
then
break
else
    arr=("${arr[@]}" "$line")
fi
done
else
echo Error! press only the given characters
fi


write_file () {
for profile in ${arr[@]}
do

# VPN Code from Command Line and comment the 2 lines below
echo please change your IP address and then press 'enter' to resume
read resume

echo Scraping for query : "$profile"

sudo node app.js "$profile"
sudo node extract.js "$profile"
cat ./TEMP__DUMP/List_"$profile"*.txt > ./Result/"$profile".txt
rm -rf ./TEMP__DUMP/List_"$profile"*.txt
rm -rf ./TEMP__DUMP/List_"$profile"*.json
echo Compiled Text file at /Result/"$profile".txt
done
}

write_file
