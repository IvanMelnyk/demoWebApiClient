echo "Build mode: $1"
publishFolder="$PWD/publish"
rm -rf $publishFolder
dotnet publish "$PWD/WebApiClient.csproj" -v m -c $1 -o "$publishFolder"
