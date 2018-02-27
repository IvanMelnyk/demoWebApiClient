# demoWebApiClient(under development)
.Net Core 2 is required for this project
This application would not work without initialize Postgresql database, so you need to restore DB from file "db.sql" from "demoGRPCServer" repository first</br>
<p>This application uses Asp .Net Core MVC Default Antiforgery authorization(you can't do it by default on WebApi project, project need some modifications) </p>
<p>Thanks to that https://github.com/aspnet/Entropy/tree/dev/samples/Antiforgery.Angular1 project, there the way to do it<p/>
<p>We dont have any "Model-View-Controller" staff here, so I use Angular/Typescript to create client GUI</p>
<p>I use custom GRPC service as dataprovider. Endpoint address is on "appConfig.json"<p/>
To run this project type the folowing: "dotnet run" 
To update protobufs-generated proxy classes you need to run "buildProtobufs.sh" script


