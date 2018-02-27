#!/bin/bash
PROJECT_DIR=$PWD
REPO_DIR=$(readlink -m "../")
sharedProtos="$REPO_DIR/protobufs"
echo $sharedProtos
DIST_DIR="$PROJECT_DIR/Models/Proto"
clientOutputFolder=$PROJECT_DIR/scripts/model/proto
cd ~/.nuget/packages/grpc.tools/1.9.0/tools/linux_x64/
protoc \
    --proto_path=$sharedProtos \
    --csharp_out=$DIST_DIR \
    --plugin=protoc-gen-grpc=grpc_csharp_plugin \
    --grpc_out=$DIST_DIR \
    $sharedProtos/DemoTypes.proto \
    $sharedProtos/DemoManagment.proto
    
    
    # Prepare JS&TS code
cd $PROJECT_DIR/node_modules/.bin

# Generate static JS module
./pbjs -t static-module \
 -w commonjs \
 -o $clientOutputFolder/demo-sm-cj.js \
    $sharedProtos/DemoTypes.proto \
    $sharedProtos/DemoManagment.proto

# Generate index TS file
./pbts -o $clientOutputFolder/demo-sm-cj.d.ts $clientOutputFolder/demo-sm-cj.js

