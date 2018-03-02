// DemoRecord models
import { demo } from "./demo-sm-cj";

import Void = demo.services.grpc.Void;
import DemoContent = demo.services.grpc.DemoContent;
import DemoRecord = demo.services.grpc.DemoRecord;
import DemoRecordMetadata = demo.services.grpc.DemoRecordMetadata;
import DemoRecordMetadataSequence = demo.services.grpc.DemoRecordMetadataSequence;
import DemoRecordSequence = demo.services.grpc.DemoRecordSequence;
import LanguageCode = demo.services.grpc.LanguageCode;
import Interim = demo.services.grpc.Interim;
import MetadataContent = demo.services.grpc.MetadataContent;
import InsertInterimRequest = demo.services.grpc.InsertInterimRequest;

import DemoRecordMetadataSequenceP = demo.services.grpc.DemoRecordMetadataSequence$Properties;
import DemoRecordMetadataP = demo.services.grpc.DemoRecordMetadata$Properties;
import MetadataContentP = demo.services.grpc.MetadataContent$Properties;
import DemoRecordP = demo.services.grpc.DemoRecord$Properties;

export { Void, Interim, LanguageCode}

export {DemoContent, DemoRecord, DemoRecordMetadata, InsertInterimRequest, 
	DemoRecordMetadataSequence,	DemoRecordSequence, MetadataContent}

export {DemoRecordMetadataSequenceP, DemoRecordMetadataP, 
	MetadataContentP, DemoRecordP}
