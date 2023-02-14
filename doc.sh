f='README.md'
echo '' > $f

for problemNumber in $(ls -v)
do
  if [ -d "$problemNumber" ]
  then
    echo "# $problemNumber" >> $f
    echo '```js ##' >> $f
    printf '%s\n' "$(cat $problemNumber/main.js)" >> $f
    echo '```' >> $f
  fi
done
