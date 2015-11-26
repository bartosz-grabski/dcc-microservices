docker stop user 
docker stop front
docker stop post
docker rm post
docker rm front
docker rm user 
docker run -d --name user user-service
docker run -d --name post post-service
docker run -p 80:3000  --link user:user --link post:post --name front front