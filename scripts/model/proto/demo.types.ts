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

export { Void, Interim, LanguageCode}
export {DemoContent, DemoRecord, DemoRecordMetadata, 
	DemoRecordMetadataSequence,	DemoRecordSequence,MetadataContent}
