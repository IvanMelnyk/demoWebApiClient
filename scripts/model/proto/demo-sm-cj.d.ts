import * as $protobuf from "protobufjs";

/**
 * Namespace demo.
 * @exports demo
 * @namespace
 */
export namespace demo {

    /**
     * Namespace services.
     * @exports demo.services
     * @namespace
     */
    namespace services {

        /**
         * Namespace grpc.
         * @exports demo.services.grpc
         * @namespace
         */
        namespace grpc {

            type Void$Properties = {};

            /**
             * Constructs a new Void.
             * @exports demo.services.grpc.Void
             * @constructor
             * @param {demo.services.grpc.Void$Properties=} [properties] Properties to set
             */
            class Void {

                /**
                 * Constructs a new Void.
                 * @exports demo.services.grpc.Void
                 * @constructor
                 * @param {demo.services.grpc.Void$Properties=} [properties] Properties to set
                 */
                constructor(properties?: demo.services.grpc.Void$Properties);

                /**
                 * Creates a new Void instance using the specified properties.
                 * @param {demo.services.grpc.Void$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.Void} Void instance
                 */
                public static create(properties?: demo.services.grpc.Void$Properties): demo.services.grpc.Void;

                /**
                 * Encodes the specified Void message. Does not implicitly {@link demo.services.grpc.Void.verify|verify} messages.
                 * @param {demo.services.grpc.Void$Properties} message Void message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encode(message: demo.services.grpc.Void$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Void message, length delimited. Does not implicitly {@link demo.services.grpc.Void.verify|verify} messages.
                 * @param {demo.services.grpc.Void$Properties} message Void message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encodeDelimited(message: demo.services.grpc.Void$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Void message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.Void} Void
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): demo.services.grpc.Void;

                /**
                 * Decodes a Void message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.Void} Void
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): demo.services.grpc.Void;

                /**
                 * Verifies a Void message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): string;

                /**
                 * Creates a Void message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.Void} Void
                 */
                public static fromObject(object: { [k: string]: any }): demo.services.grpc.Void;

                /**
                 * Creates a Void message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.Void.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.Void} Void
                 */
                public static from(object: { [k: string]: any }): demo.services.grpc.Void;

                /**
                 * Creates a plain object from a Void message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.Void} message Void
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public static toObject(message: demo.services.grpc.Void, options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Creates a plain object from this Void message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Converts this Void to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            type DemoRecordMetadataSequence$Properties = {
                demoRecordMetadataList?: demo.services.grpc.DemoRecordMetadata$Properties[];
            };

            /**
             * Constructs a new DemoRecordMetadataSequence.
             * @exports demo.services.grpc.DemoRecordMetadataSequence
             * @constructor
             * @param {demo.services.grpc.DemoRecordMetadataSequence$Properties=} [properties] Properties to set
             */
            class DemoRecordMetadataSequence {

                /**
                 * Constructs a new DemoRecordMetadataSequence.
                 * @exports demo.services.grpc.DemoRecordMetadataSequence
                 * @constructor
                 * @param {demo.services.grpc.DemoRecordMetadataSequence$Properties=} [properties] Properties to set
                 */
                constructor(properties?: demo.services.grpc.DemoRecordMetadataSequence$Properties);

                /**
                 * DemoRecordMetadataSequence demoRecordMetadataList.
                 * @type {Array.<demo.services.grpc.DemoRecordMetadata$Properties>}
                 */
                public demoRecordMetadataList: demo.services.grpc.DemoRecordMetadata$Properties[];

                /**
                 * Creates a new DemoRecordMetadataSequence instance using the specified properties.
                 * @param {demo.services.grpc.DemoRecordMetadataSequence$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.DemoRecordMetadataSequence} DemoRecordMetadataSequence instance
                 */
                public static create(properties?: demo.services.grpc.DemoRecordMetadataSequence$Properties): demo.services.grpc.DemoRecordMetadataSequence;

                /**
                 * Encodes the specified DemoRecordMetadataSequence message. Does not implicitly {@link demo.services.grpc.DemoRecordMetadataSequence.verify|verify} messages.
                 * @param {demo.services.grpc.DemoRecordMetadataSequence$Properties} message DemoRecordMetadataSequence message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encode(message: demo.services.grpc.DemoRecordMetadataSequence$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DemoRecordMetadataSequence message, length delimited. Does not implicitly {@link demo.services.grpc.DemoRecordMetadataSequence.verify|verify} messages.
                 * @param {demo.services.grpc.DemoRecordMetadataSequence$Properties} message DemoRecordMetadataSequence message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encodeDelimited(message: demo.services.grpc.DemoRecordMetadataSequence$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DemoRecordMetadataSequence message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.DemoRecordMetadataSequence} DemoRecordMetadataSequence
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): demo.services.grpc.DemoRecordMetadataSequence;

                /**
                 * Decodes a DemoRecordMetadataSequence message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.DemoRecordMetadataSequence} DemoRecordMetadataSequence
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): demo.services.grpc.DemoRecordMetadataSequence;

                /**
                 * Verifies a DemoRecordMetadataSequence message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): string;

                /**
                 * Creates a DemoRecordMetadataSequence message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.DemoRecordMetadataSequence} DemoRecordMetadataSequence
                 */
                public static fromObject(object: { [k: string]: any }): demo.services.grpc.DemoRecordMetadataSequence;

                /**
                 * Creates a DemoRecordMetadataSequence message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.DemoRecordMetadataSequence.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.DemoRecordMetadataSequence} DemoRecordMetadataSequence
                 */
                public static from(object: { [k: string]: any }): demo.services.grpc.DemoRecordMetadataSequence;

                /**
                 * Creates a plain object from a DemoRecordMetadataSequence message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.DemoRecordMetadataSequence} message DemoRecordMetadataSequence
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public static toObject(message: demo.services.grpc.DemoRecordMetadataSequence, options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Creates a plain object from this DemoRecordMetadataSequence message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Converts this DemoRecordMetadataSequence to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            type DemoRecordMetadata$Properties = {
                id?: (number|Long);
                stage?: boolean;
                langSpecs?: (number|Long);
                title?: string;
            };

            /**
             * Constructs a new DemoRecordMetadata.
             * @exports demo.services.grpc.DemoRecordMetadata
             * @constructor
             * @param {demo.services.grpc.DemoRecordMetadata$Properties=} [properties] Properties to set
             */
            class DemoRecordMetadata {

                /**
                 * Constructs a new DemoRecordMetadata.
                 * @exports demo.services.grpc.DemoRecordMetadata
                 * @constructor
                 * @param {demo.services.grpc.DemoRecordMetadata$Properties=} [properties] Properties to set
                 */
                constructor(properties?: demo.services.grpc.DemoRecordMetadata$Properties);

                /**
                 * Header
                 * @type {number|Long}
                 */
                public id: (number|Long);

                /**
                 * DemoRecordMetadata stage.
                 * @type {boolean}
                 */
                public stage: boolean;

                /**
                 * DemoRecordMetadata langSpecs.
                 * @type {number|Long}
                 */
                public langSpecs: (number|Long);

                /**
                 * DemoRecordMetadata title.
                 * @type {string}
                 */
                public title: string;

                /**
                 * Creates a new DemoRecordMetadata instance using the specified properties.
                 * @param {demo.services.grpc.DemoRecordMetadata$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.DemoRecordMetadata} DemoRecordMetadata instance
                 */
                public static create(properties?: demo.services.grpc.DemoRecordMetadata$Properties): demo.services.grpc.DemoRecordMetadata;

                /**
                 * Encodes the specified DemoRecordMetadata message. Does not implicitly {@link demo.services.grpc.DemoRecordMetadata.verify|verify} messages.
                 * @param {demo.services.grpc.DemoRecordMetadata$Properties} message DemoRecordMetadata message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encode(message: demo.services.grpc.DemoRecordMetadata$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DemoRecordMetadata message, length delimited. Does not implicitly {@link demo.services.grpc.DemoRecordMetadata.verify|verify} messages.
                 * @param {demo.services.grpc.DemoRecordMetadata$Properties} message DemoRecordMetadata message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encodeDelimited(message: demo.services.grpc.DemoRecordMetadata$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DemoRecordMetadata message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.DemoRecordMetadata} DemoRecordMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): demo.services.grpc.DemoRecordMetadata;

                /**
                 * Decodes a DemoRecordMetadata message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.DemoRecordMetadata} DemoRecordMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): demo.services.grpc.DemoRecordMetadata;

                /**
                 * Verifies a DemoRecordMetadata message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): string;

                /**
                 * Creates a DemoRecordMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.DemoRecordMetadata} DemoRecordMetadata
                 */
                public static fromObject(object: { [k: string]: any }): demo.services.grpc.DemoRecordMetadata;

                /**
                 * Creates a DemoRecordMetadata message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.DemoRecordMetadata.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.DemoRecordMetadata} DemoRecordMetadata
                 */
                public static from(object: { [k: string]: any }): demo.services.grpc.DemoRecordMetadata;

                /**
                 * Creates a plain object from a DemoRecordMetadata message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.DemoRecordMetadata} message DemoRecordMetadata
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public static toObject(message: demo.services.grpc.DemoRecordMetadata, options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Creates a plain object from this DemoRecordMetadata message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Converts this DemoRecordMetadata to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            type MetadataContent$Properties = {
                data?: demo.services.grpc.DemoContent$Properties;
                interims?: demo.services.grpc.DemoContent$Properties[];
            };

            /**
             * Constructs a new MetadataContent.
             * @exports demo.services.grpc.MetadataContent
             * @constructor
             * @param {demo.services.grpc.MetadataContent$Properties=} [properties] Properties to set
             */
            class MetadataContent {

                /**
                 * Constructs a new MetadataContent.
                 * @exports demo.services.grpc.MetadataContent
                 * @constructor
                 * @param {demo.services.grpc.MetadataContent$Properties=} [properties] Properties to set
                 */
                constructor(properties?: demo.services.grpc.MetadataContent$Properties);

                /**
                 * MetadataContent data.
                 * @type {(demo.services.grpc.DemoContent$Properties|null)}
                 */
                public data: (demo.services.grpc.DemoContent$Properties|null);

                /**
                 * MetadataContent interims.
                 * @type {Array.<demo.services.grpc.DemoContent$Properties>}
                 */
                public interims: demo.services.grpc.DemoContent$Properties[];

                /**
                 * Creates a new MetadataContent instance using the specified properties.
                 * @param {demo.services.grpc.MetadataContent$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.MetadataContent} MetadataContent instance
                 */
                public static create(properties?: demo.services.grpc.MetadataContent$Properties): demo.services.grpc.MetadataContent;

                /**
                 * Encodes the specified MetadataContent message. Does not implicitly {@link demo.services.grpc.MetadataContent.verify|verify} messages.
                 * @param {demo.services.grpc.MetadataContent$Properties} message MetadataContent message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encode(message: demo.services.grpc.MetadataContent$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MetadataContent message, length delimited. Does not implicitly {@link demo.services.grpc.MetadataContent.verify|verify} messages.
                 * @param {demo.services.grpc.MetadataContent$Properties} message MetadataContent message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encodeDelimited(message: demo.services.grpc.MetadataContent$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MetadataContent message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.MetadataContent} MetadataContent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): demo.services.grpc.MetadataContent;

                /**
                 * Decodes a MetadataContent message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.MetadataContent} MetadataContent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): demo.services.grpc.MetadataContent;

                /**
                 * Verifies a MetadataContent message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): string;

                /**
                 * Creates a MetadataContent message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.MetadataContent} MetadataContent
                 */
                public static fromObject(object: { [k: string]: any }): demo.services.grpc.MetadataContent;

                /**
                 * Creates a MetadataContent message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.MetadataContent.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.MetadataContent} MetadataContent
                 */
                public static from(object: { [k: string]: any }): demo.services.grpc.MetadataContent;

                /**
                 * Creates a plain object from a MetadataContent message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.MetadataContent} message MetadataContent
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public static toObject(message: demo.services.grpc.MetadataContent, options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Creates a plain object from this MetadataContent message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Converts this MetadataContent to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            type Interim$Properties = {
                interimId?: (number|Long);
                recordId?: (number|Long);
                createdBy?: (number|Long);
                creationTimestamp?: (number|Long);
                changedData?: demo.services.grpc.DemoContent$Properties;
                changedDataHash?: string;
            };

            /**
             * Constructs a new Interim.
             * @exports demo.services.grpc.Interim
             * @constructor
             * @param {demo.services.grpc.Interim$Properties=} [properties] Properties to set
             */
            class Interim {

                /**
                 * Constructs a new Interim.
                 * @exports demo.services.grpc.Interim
                 * @constructor
                 * @param {demo.services.grpc.Interim$Properties=} [properties] Properties to set
                 */
                constructor(properties?: demo.services.grpc.Interim$Properties);

                /**
                 * Interim interimId.
                 * @type {number|Long}
                 */
                public interimId: (number|Long);

                /**
                 * Interim recordId.
                 * @type {number|Long}
                 */
                public recordId: (number|Long);

                /**
                 * Interim createdBy.
                 * @type {number|Long}
                 */
                public createdBy: (number|Long);

                /**
                 * Interim creationTimestamp.
                 * @type {number|Long}
                 */
                public creationTimestamp: (number|Long);

                /**
                 * Interim changedData.
                 * @type {(demo.services.grpc.DemoContent$Properties|null)}
                 */
                public changedData: (demo.services.grpc.DemoContent$Properties|null);

                /**
                 * Interim changedDataHash.
                 * @type {string}
                 */
                public changedDataHash: string;

                /**
                 * Creates a new Interim instance using the specified properties.
                 * @param {demo.services.grpc.Interim$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.Interim} Interim instance
                 */
                public static create(properties?: demo.services.grpc.Interim$Properties): demo.services.grpc.Interim;

                /**
                 * Encodes the specified Interim message. Does not implicitly {@link demo.services.grpc.Interim.verify|verify} messages.
                 * @param {demo.services.grpc.Interim$Properties} message Interim message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encode(message: demo.services.grpc.Interim$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Interim message, length delimited. Does not implicitly {@link demo.services.grpc.Interim.verify|verify} messages.
                 * @param {demo.services.grpc.Interim$Properties} message Interim message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encodeDelimited(message: demo.services.grpc.Interim$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Interim message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.Interim} Interim
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): demo.services.grpc.Interim;

                /**
                 * Decodes an Interim message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.Interim} Interim
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): demo.services.grpc.Interim;

                /**
                 * Verifies an Interim message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): string;

                /**
                 * Creates an Interim message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.Interim} Interim
                 */
                public static fromObject(object: { [k: string]: any }): demo.services.grpc.Interim;

                /**
                 * Creates an Interim message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.Interim.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.Interim} Interim
                 */
                public static from(object: { [k: string]: any }): demo.services.grpc.Interim;

                /**
                 * Creates a plain object from an Interim message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.Interim} message Interim
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public static toObject(message: demo.services.grpc.Interim, options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Creates a plain object from this Interim message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Converts this Interim to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            type DemoRecordSequence$Properties = {
                demoRecords?: demo.services.grpc.DemoRecord$Properties[];
            };

            /**
             * Constructs a new DemoRecordSequence.
             * @exports demo.services.grpc.DemoRecordSequence
             * @constructor
             * @param {demo.services.grpc.DemoRecordSequence$Properties=} [properties] Properties to set
             */
            class DemoRecordSequence {

                /**
                 * Constructs a new DemoRecordSequence.
                 * @exports demo.services.grpc.DemoRecordSequence
                 * @constructor
                 * @param {demo.services.grpc.DemoRecordSequence$Properties=} [properties] Properties to set
                 */
                constructor(properties?: demo.services.grpc.DemoRecordSequence$Properties);

                /**
                 * DemoRecordSequence demoRecords.
                 * @type {Array.<demo.services.grpc.DemoRecord$Properties>}
                 */
                public demoRecords: demo.services.grpc.DemoRecord$Properties[];

                /**
                 * Creates a new DemoRecordSequence instance using the specified properties.
                 * @param {demo.services.grpc.DemoRecordSequence$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.DemoRecordSequence} DemoRecordSequence instance
                 */
                public static create(properties?: demo.services.grpc.DemoRecordSequence$Properties): demo.services.grpc.DemoRecordSequence;

                /**
                 * Encodes the specified DemoRecordSequence message. Does not implicitly {@link demo.services.grpc.DemoRecordSequence.verify|verify} messages.
                 * @param {demo.services.grpc.DemoRecordSequence$Properties} message DemoRecordSequence message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encode(message: demo.services.grpc.DemoRecordSequence$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DemoRecordSequence message, length delimited. Does not implicitly {@link demo.services.grpc.DemoRecordSequence.verify|verify} messages.
                 * @param {demo.services.grpc.DemoRecordSequence$Properties} message DemoRecordSequence message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encodeDelimited(message: demo.services.grpc.DemoRecordSequence$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DemoRecordSequence message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.DemoRecordSequence} DemoRecordSequence
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): demo.services.grpc.DemoRecordSequence;

                /**
                 * Decodes a DemoRecordSequence message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.DemoRecordSequence} DemoRecordSequence
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): demo.services.grpc.DemoRecordSequence;

                /**
                 * Verifies a DemoRecordSequence message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): string;

                /**
                 * Creates a DemoRecordSequence message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.DemoRecordSequence} DemoRecordSequence
                 */
                public static fromObject(object: { [k: string]: any }): demo.services.grpc.DemoRecordSequence;

                /**
                 * Creates a DemoRecordSequence message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.DemoRecordSequence.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.DemoRecordSequence} DemoRecordSequence
                 */
                public static from(object: { [k: string]: any }): demo.services.grpc.DemoRecordSequence;

                /**
                 * Creates a plain object from a DemoRecordSequence message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.DemoRecordSequence} message DemoRecordSequence
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public static toObject(message: demo.services.grpc.DemoRecordSequence, options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Creates a plain object from this DemoRecordSequence message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Converts this DemoRecordSequence to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            type DemoRecord$Properties = {
                id?: (number|Long);
                creationTimestamp?: (number|Long);
                stage?: boolean;
                langSpecs?: (number|Long);
                title?: string;
                data?: demo.services.grpc.DemoContent$Properties;
                approvedData?: demo.services.grpc.DemoContent$Properties;
            };

            /**
             * Constructs a new DemoRecord.
             * @exports demo.services.grpc.DemoRecord
             * @constructor
             * @param {demo.services.grpc.DemoRecord$Properties=} [properties] Properties to set
             */
            class DemoRecord {

                /**
                 * Constructs a new DemoRecord.
                 * @exports demo.services.grpc.DemoRecord
                 * @constructor
                 * @param {demo.services.grpc.DemoRecord$Properties=} [properties] Properties to set
                 */
                constructor(properties?: demo.services.grpc.DemoRecord$Properties);

                /**
                 * Header
                 * @type {number|Long}
                 */
                public id: (number|Long);

                /**
                 * DemoRecord creationTimestamp.
                 * @type {number|Long}
                 */
                public creationTimestamp: (number|Long);

                /**
                 * DemoRecord stage.
                 * @type {boolean}
                 */
                public stage: boolean;

                /**
                 * DemoRecord langSpecs.
                 * @type {number|Long}
                 */
                public langSpecs: (number|Long);

                /**
                 * DemoRecord title.
                 * @type {string}
                 */
                public title: string;

                /**
                 * DemoRecord data.
                 * @type {(demo.services.grpc.DemoContent$Properties|null)}
                 */
                public data: (demo.services.grpc.DemoContent$Properties|null);

                /**
                 * DemoRecord approvedData.
                 * @type {(demo.services.grpc.DemoContent$Properties|null)}
                 */
                public approvedData: (demo.services.grpc.DemoContent$Properties|null);

                /**
                 * Creates a new DemoRecord instance using the specified properties.
                 * @param {demo.services.grpc.DemoRecord$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.DemoRecord} DemoRecord instance
                 */
                public static create(properties?: demo.services.grpc.DemoRecord$Properties): demo.services.grpc.DemoRecord;

                /**
                 * Encodes the specified DemoRecord message. Does not implicitly {@link demo.services.grpc.DemoRecord.verify|verify} messages.
                 * @param {demo.services.grpc.DemoRecord$Properties} message DemoRecord message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encode(message: demo.services.grpc.DemoRecord$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DemoRecord message, length delimited. Does not implicitly {@link demo.services.grpc.DemoRecord.verify|verify} messages.
                 * @param {demo.services.grpc.DemoRecord$Properties} message DemoRecord message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encodeDelimited(message: demo.services.grpc.DemoRecord$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DemoRecord message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.DemoRecord} DemoRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): demo.services.grpc.DemoRecord;

                /**
                 * Decodes a DemoRecord message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.DemoRecord} DemoRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): demo.services.grpc.DemoRecord;

                /**
                 * Verifies a DemoRecord message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): string;

                /**
                 * Creates a DemoRecord message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.DemoRecord} DemoRecord
                 */
                public static fromObject(object: { [k: string]: any }): demo.services.grpc.DemoRecord;

                /**
                 * Creates a DemoRecord message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.DemoRecord.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.DemoRecord} DemoRecord
                 */
                public static from(object: { [k: string]: any }): demo.services.grpc.DemoRecord;

                /**
                 * Creates a plain object from a DemoRecord message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.DemoRecord} message DemoRecord
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public static toObject(message: demo.services.grpc.DemoRecord, options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Creates a plain object from this DemoRecord message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Converts this DemoRecord to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            type DemoContent$Properties = {
                text?: string;
            };

            /**
             * Constructs a new DemoContent.
             * @exports demo.services.grpc.DemoContent
             * @constructor
             * @param {demo.services.grpc.DemoContent$Properties=} [properties] Properties to set
             */
            class DemoContent {

                /**
                 * Constructs a new DemoContent.
                 * @exports demo.services.grpc.DemoContent
                 * @constructor
                 * @param {demo.services.grpc.DemoContent$Properties=} [properties] Properties to set
                 */
                constructor(properties?: demo.services.grpc.DemoContent$Properties);

                /**
                 * DemoContent text.
                 * @type {string}
                 */
                public text: string;

                /**
                 * Creates a new DemoContent instance using the specified properties.
                 * @param {demo.services.grpc.DemoContent$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.DemoContent} DemoContent instance
                 */
                public static create(properties?: demo.services.grpc.DemoContent$Properties): demo.services.grpc.DemoContent;

                /**
                 * Encodes the specified DemoContent message. Does not implicitly {@link demo.services.grpc.DemoContent.verify|verify} messages.
                 * @param {demo.services.grpc.DemoContent$Properties} message DemoContent message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encode(message: demo.services.grpc.DemoContent$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DemoContent message, length delimited. Does not implicitly {@link demo.services.grpc.DemoContent.verify|verify} messages.
                 * @param {demo.services.grpc.DemoContent$Properties} message DemoContent message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encodeDelimited(message: demo.services.grpc.DemoContent$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DemoContent message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.DemoContent} DemoContent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): demo.services.grpc.DemoContent;

                /**
                 * Decodes a DemoContent message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.DemoContent} DemoContent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): demo.services.grpc.DemoContent;

                /**
                 * Verifies a DemoContent message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): string;

                /**
                 * Creates a DemoContent message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.DemoContent} DemoContent
                 */
                public static fromObject(object: { [k: string]: any }): demo.services.grpc.DemoContent;

                /**
                 * Creates a DemoContent message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.DemoContent.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.DemoContent} DemoContent
                 */
                public static from(object: { [k: string]: any }): demo.services.grpc.DemoContent;

                /**
                 * Creates a plain object from a DemoContent message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.DemoContent} message DemoContent
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public static toObject(message: demo.services.grpc.DemoContent, options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Creates a plain object from this DemoContent message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Converts this DemoContent to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /**
             * LanguageCode enum.
             * @name LanguageCode
             * @memberof demo.services.grpc
             * @enum {number}
             * @property {number} UNKNOWN_LANG_CODE=0 UNKNOWN_LANG_CODE value
             * @property {number} English=2 English value
             * @property {number} Ukrainian=7 Ukrainian value
             * @property {number} Russian=11 Russian value
             */
            enum LanguageCode {
                UNKNOWN_LANG_CODE = 0,
                English = 2,
                Ukrainian = 7,
                Russian = 11
            }

            type LookupNextDemoRecordRequest$Properties = {
                userId?: (number|Long);
                lookupLang?: (number|Long);
            };

            /**
             * Constructs a new LookupNextDemoRecordRequest.
             * @exports demo.services.grpc.LookupNextDemoRecordRequest
             * @constructor
             * @param {demo.services.grpc.LookupNextDemoRecordRequest$Properties=} [properties] Properties to set
             */
            class LookupNextDemoRecordRequest {

                /**
                 * Constructs a new LookupNextDemoRecordRequest.
                 * @exports demo.services.grpc.LookupNextDemoRecordRequest
                 * @constructor
                 * @param {demo.services.grpc.LookupNextDemoRecordRequest$Properties=} [properties] Properties to set
                 */
                constructor(properties?: demo.services.grpc.LookupNextDemoRecordRequest$Properties);

                /**
                 * LookupNextDemoRecordRequest userId.
                 * @type {number|Long}
                 */
                public userId: (number|Long);

                /**
                 * LookupNextDemoRecordRequest lookupLang.
                 * @type {number|Long}
                 */
                public lookupLang: (number|Long);

                /**
                 * Creates a new LookupNextDemoRecordRequest instance using the specified properties.
                 * @param {demo.services.grpc.LookupNextDemoRecordRequest$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.LookupNextDemoRecordRequest} LookupNextDemoRecordRequest instance
                 */
                public static create(properties?: demo.services.grpc.LookupNextDemoRecordRequest$Properties): demo.services.grpc.LookupNextDemoRecordRequest;

                /**
                 * Encodes the specified LookupNextDemoRecordRequest message. Does not implicitly {@link demo.services.grpc.LookupNextDemoRecordRequest.verify|verify} messages.
                 * @param {demo.services.grpc.LookupNextDemoRecordRequest$Properties} message LookupNextDemoRecordRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encode(message: demo.services.grpc.LookupNextDemoRecordRequest$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LookupNextDemoRecordRequest message, length delimited. Does not implicitly {@link demo.services.grpc.LookupNextDemoRecordRequest.verify|verify} messages.
                 * @param {demo.services.grpc.LookupNextDemoRecordRequest$Properties} message LookupNextDemoRecordRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encodeDelimited(message: demo.services.grpc.LookupNextDemoRecordRequest$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LookupNextDemoRecordRequest message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.LookupNextDemoRecordRequest} LookupNextDemoRecordRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): demo.services.grpc.LookupNextDemoRecordRequest;

                /**
                 * Decodes a LookupNextDemoRecordRequest message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.LookupNextDemoRecordRequest} LookupNextDemoRecordRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): demo.services.grpc.LookupNextDemoRecordRequest;

                /**
                 * Verifies a LookupNextDemoRecordRequest message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): string;

                /**
                 * Creates a LookupNextDemoRecordRequest message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.LookupNextDemoRecordRequest} LookupNextDemoRecordRequest
                 */
                public static fromObject(object: { [k: string]: any }): demo.services.grpc.LookupNextDemoRecordRequest;

                /**
                 * Creates a LookupNextDemoRecordRequest message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.LookupNextDemoRecordRequest.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.LookupNextDemoRecordRequest} LookupNextDemoRecordRequest
                 */
                public static from(object: { [k: string]: any }): demo.services.grpc.LookupNextDemoRecordRequest;

                /**
                 * Creates a plain object from a LookupNextDemoRecordRequest message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.LookupNextDemoRecordRequest} message LookupNextDemoRecordRequest
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public static toObject(message: demo.services.grpc.LookupNextDemoRecordRequest, options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Creates a plain object from this LookupNextDemoRecordRequest message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Converts this LookupNextDemoRecordRequest to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            type GetDemoRecordsMetadataListRequest$Properties = {
                skip?: (number|Long);
                limit?: number;
            };

            /**
             * Constructs a new GetDemoRecordsMetadataListRequest.
             * @exports demo.services.grpc.GetDemoRecordsMetadataListRequest
             * @constructor
             * @param {demo.services.grpc.GetDemoRecordsMetadataListRequest$Properties=} [properties] Properties to set
             */
            class GetDemoRecordsMetadataListRequest {

                /**
                 * Constructs a new GetDemoRecordsMetadataListRequest.
                 * @exports demo.services.grpc.GetDemoRecordsMetadataListRequest
                 * @constructor
                 * @param {demo.services.grpc.GetDemoRecordsMetadataListRequest$Properties=} [properties] Properties to set
                 */
                constructor(properties?: demo.services.grpc.GetDemoRecordsMetadataListRequest$Properties);

                /**
                 * GetDemoRecordsMetadataListRequest skip.
                 * @type {number|Long}
                 */
                public skip: (number|Long);

                /**
                 * GetDemoRecordsMetadataListRequest limit.
                 * @type {number}
                 */
                public limit: number;

                /**
                 * Creates a new GetDemoRecordsMetadataListRequest instance using the specified properties.
                 * @param {demo.services.grpc.GetDemoRecordsMetadataListRequest$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.GetDemoRecordsMetadataListRequest} GetDemoRecordsMetadataListRequest instance
                 */
                public static create(properties?: demo.services.grpc.GetDemoRecordsMetadataListRequest$Properties): demo.services.grpc.GetDemoRecordsMetadataListRequest;

                /**
                 * Encodes the specified GetDemoRecordsMetadataListRequest message. Does not implicitly {@link demo.services.grpc.GetDemoRecordsMetadataListRequest.verify|verify} messages.
                 * @param {demo.services.grpc.GetDemoRecordsMetadataListRequest$Properties} message GetDemoRecordsMetadataListRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encode(message: demo.services.grpc.GetDemoRecordsMetadataListRequest$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetDemoRecordsMetadataListRequest message, length delimited. Does not implicitly {@link demo.services.grpc.GetDemoRecordsMetadataListRequest.verify|verify} messages.
                 * @param {demo.services.grpc.GetDemoRecordsMetadataListRequest$Properties} message GetDemoRecordsMetadataListRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encodeDelimited(message: demo.services.grpc.GetDemoRecordsMetadataListRequest$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetDemoRecordsMetadataListRequest message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.GetDemoRecordsMetadataListRequest} GetDemoRecordsMetadataListRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): demo.services.grpc.GetDemoRecordsMetadataListRequest;

                /**
                 * Decodes a GetDemoRecordsMetadataListRequest message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.GetDemoRecordsMetadataListRequest} GetDemoRecordsMetadataListRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): demo.services.grpc.GetDemoRecordsMetadataListRequest;

                /**
                 * Verifies a GetDemoRecordsMetadataListRequest message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): string;

                /**
                 * Creates a GetDemoRecordsMetadataListRequest message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.GetDemoRecordsMetadataListRequest} GetDemoRecordsMetadataListRequest
                 */
                public static fromObject(object: { [k: string]: any }): demo.services.grpc.GetDemoRecordsMetadataListRequest;

                /**
                 * Creates a GetDemoRecordsMetadataListRequest message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.GetDemoRecordsMetadataListRequest.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.GetDemoRecordsMetadataListRequest} GetDemoRecordsMetadataListRequest
                 */
                public static from(object: { [k: string]: any }): demo.services.grpc.GetDemoRecordsMetadataListRequest;

                /**
                 * Creates a plain object from a GetDemoRecordsMetadataListRequest message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.GetDemoRecordsMetadataListRequest} message GetDemoRecordsMetadataListRequest
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public static toObject(message: demo.services.grpc.GetDemoRecordsMetadataListRequest, options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Creates a plain object from this GetDemoRecordsMetadataListRequest message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetDemoRecordsMetadataListRequest to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            type GetMetadataContentRequest$Properties = {
                recordId?: (number|Long);
            };

            /**
             * Constructs a new GetMetadataContentRequest.
             * @exports demo.services.grpc.GetMetadataContentRequest
             * @constructor
             * @param {demo.services.grpc.GetMetadataContentRequest$Properties=} [properties] Properties to set
             */
            class GetMetadataContentRequest {

                /**
                 * Constructs a new GetMetadataContentRequest.
                 * @exports demo.services.grpc.GetMetadataContentRequest
                 * @constructor
                 * @param {demo.services.grpc.GetMetadataContentRequest$Properties=} [properties] Properties to set
                 */
                constructor(properties?: demo.services.grpc.GetMetadataContentRequest$Properties);

                /**
                 * GetMetadataContentRequest recordId.
                 * @type {number|Long}
                 */
                public recordId: (number|Long);

                /**
                 * Creates a new GetMetadataContentRequest instance using the specified properties.
                 * @param {demo.services.grpc.GetMetadataContentRequest$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.GetMetadataContentRequest} GetMetadataContentRequest instance
                 */
                public static create(properties?: demo.services.grpc.GetMetadataContentRequest$Properties): demo.services.grpc.GetMetadataContentRequest;

                /**
                 * Encodes the specified GetMetadataContentRequest message. Does not implicitly {@link demo.services.grpc.GetMetadataContentRequest.verify|verify} messages.
                 * @param {demo.services.grpc.GetMetadataContentRequest$Properties} message GetMetadataContentRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encode(message: demo.services.grpc.GetMetadataContentRequest$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetMetadataContentRequest message, length delimited. Does not implicitly {@link demo.services.grpc.GetMetadataContentRequest.verify|verify} messages.
                 * @param {demo.services.grpc.GetMetadataContentRequest$Properties} message GetMetadataContentRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encodeDelimited(message: demo.services.grpc.GetMetadataContentRequest$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetMetadataContentRequest message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.GetMetadataContentRequest} GetMetadataContentRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): demo.services.grpc.GetMetadataContentRequest;

                /**
                 * Decodes a GetMetadataContentRequest message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.GetMetadataContentRequest} GetMetadataContentRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): demo.services.grpc.GetMetadataContentRequest;

                /**
                 * Verifies a GetMetadataContentRequest message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): string;

                /**
                 * Creates a GetMetadataContentRequest message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.GetMetadataContentRequest} GetMetadataContentRequest
                 */
                public static fromObject(object: { [k: string]: any }): demo.services.grpc.GetMetadataContentRequest;

                /**
                 * Creates a GetMetadataContentRequest message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.GetMetadataContentRequest.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.GetMetadataContentRequest} GetMetadataContentRequest
                 */
                public static from(object: { [k: string]: any }): demo.services.grpc.GetMetadataContentRequest;

                /**
                 * Creates a plain object from a GetMetadataContentRequest message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.GetMetadataContentRequest} message GetMetadataContentRequest
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public static toObject(message: demo.services.grpc.GetMetadataContentRequest, options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Creates a plain object from this GetMetadataContentRequest message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetMetadataContentRequest to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            type InsertInterimRequest$Properties = {
                userId?: (number|Long);
                recordId?: (number|Long);
                data?: demo.services.grpc.DemoContent$Properties;
            };

            /**
             * Constructs a new InsertInterimRequest.
             * @exports demo.services.grpc.InsertInterimRequest
             * @constructor
             * @param {demo.services.grpc.InsertInterimRequest$Properties=} [properties] Properties to set
             */
            class InsertInterimRequest {

                /**
                 * Constructs a new InsertInterimRequest.
                 * @exports demo.services.grpc.InsertInterimRequest
                 * @constructor
                 * @param {demo.services.grpc.InsertInterimRequest$Properties=} [properties] Properties to set
                 */
                constructor(properties?: demo.services.grpc.InsertInterimRequest$Properties);

                /**
                 * InsertInterimRequest userId.
                 * @type {number|Long}
                 */
                public userId: (number|Long);

                /**
                 * InsertInterimRequest recordId.
                 * @type {number|Long}
                 */
                public recordId: (number|Long);

                /**
                 * InsertInterimRequest data.
                 * @type {(demo.services.grpc.DemoContent$Properties|null)}
                 */
                public data: (demo.services.grpc.DemoContent$Properties|null);

                /**
                 * Creates a new InsertInterimRequest instance using the specified properties.
                 * @param {demo.services.grpc.InsertInterimRequest$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.InsertInterimRequest} InsertInterimRequest instance
                 */
                public static create(properties?: demo.services.grpc.InsertInterimRequest$Properties): demo.services.grpc.InsertInterimRequest;

                /**
                 * Encodes the specified InsertInterimRequest message. Does not implicitly {@link demo.services.grpc.InsertInterimRequest.verify|verify} messages.
                 * @param {demo.services.grpc.InsertInterimRequest$Properties} message InsertInterimRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encode(message: demo.services.grpc.InsertInterimRequest$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified InsertInterimRequest message, length delimited. Does not implicitly {@link demo.services.grpc.InsertInterimRequest.verify|verify} messages.
                 * @param {demo.services.grpc.InsertInterimRequest$Properties} message InsertInterimRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encodeDelimited(message: demo.services.grpc.InsertInterimRequest$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an InsertInterimRequest message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.InsertInterimRequest} InsertInterimRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): demo.services.grpc.InsertInterimRequest;

                /**
                 * Decodes an InsertInterimRequest message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.InsertInterimRequest} InsertInterimRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): demo.services.grpc.InsertInterimRequest;

                /**
                 * Verifies an InsertInterimRequest message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): string;

                /**
                 * Creates an InsertInterimRequest message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.InsertInterimRequest} InsertInterimRequest
                 */
                public static fromObject(object: { [k: string]: any }): demo.services.grpc.InsertInterimRequest;

                /**
                 * Creates an InsertInterimRequest message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.InsertInterimRequest.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.InsertInterimRequest} InsertInterimRequest
                 */
                public static from(object: { [k: string]: any }): demo.services.grpc.InsertInterimRequest;

                /**
                 * Creates a plain object from an InsertInterimRequest message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.InsertInterimRequest} message InsertInterimRequest
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public static toObject(message: demo.services.grpc.InsertInterimRequest, options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Creates a plain object from this InsertInterimRequest message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Converts this InsertInterimRequest to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            type RemoveLockRequest$Properties = {
                userId?: (number|Long);
                recordId?: (number|Long);
            };

            /**
             * Constructs a new RemoveLockRequest.
             * @exports demo.services.grpc.RemoveLockRequest
             * @constructor
             * @param {demo.services.grpc.RemoveLockRequest$Properties=} [properties] Properties to set
             */
            class RemoveLockRequest {

                /**
                 * Constructs a new RemoveLockRequest.
                 * @exports demo.services.grpc.RemoveLockRequest
                 * @constructor
                 * @param {demo.services.grpc.RemoveLockRequest$Properties=} [properties] Properties to set
                 */
                constructor(properties?: demo.services.grpc.RemoveLockRequest$Properties);

                /**
                 * RemoveLockRequest userId.
                 * @type {number|Long}
                 */
                public userId: (number|Long);

                /**
                 * RemoveLockRequest recordId.
                 * @type {number|Long}
                 */
                public recordId: (number|Long);

                /**
                 * Creates a new RemoveLockRequest instance using the specified properties.
                 * @param {demo.services.grpc.RemoveLockRequest$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.RemoveLockRequest} RemoveLockRequest instance
                 */
                public static create(properties?: demo.services.grpc.RemoveLockRequest$Properties): demo.services.grpc.RemoveLockRequest;

                /**
                 * Encodes the specified RemoveLockRequest message. Does not implicitly {@link demo.services.grpc.RemoveLockRequest.verify|verify} messages.
                 * @param {demo.services.grpc.RemoveLockRequest$Properties} message RemoveLockRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encode(message: demo.services.grpc.RemoveLockRequest$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RemoveLockRequest message, length delimited. Does not implicitly {@link demo.services.grpc.RemoveLockRequest.verify|verify} messages.
                 * @param {demo.services.grpc.RemoveLockRequest$Properties} message RemoveLockRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                public static encodeDelimited(message: demo.services.grpc.RemoveLockRequest$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RemoveLockRequest message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.RemoveLockRequest} RemoveLockRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): demo.services.grpc.RemoveLockRequest;

                /**
                 * Decodes a RemoveLockRequest message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.RemoveLockRequest} RemoveLockRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): demo.services.grpc.RemoveLockRequest;

                /**
                 * Verifies a RemoveLockRequest message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): string;

                /**
                 * Creates a RemoveLockRequest message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.RemoveLockRequest} RemoveLockRequest
                 */
                public static fromObject(object: { [k: string]: any }): demo.services.grpc.RemoveLockRequest;

                /**
                 * Creates a RemoveLockRequest message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.RemoveLockRequest.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.RemoveLockRequest} RemoveLockRequest
                 */
                public static from(object: { [k: string]: any }): demo.services.grpc.RemoveLockRequest;

                /**
                 * Creates a plain object from a RemoveLockRequest message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.RemoveLockRequest} message RemoveLockRequest
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public static toObject(message: demo.services.grpc.RemoveLockRequest, options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Creates a plain object from this RemoveLockRequest message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

                /**
                 * Converts this RemoveLockRequest to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /**
             * Constructs a new DemoManagement service.
             * @exports demo.services.grpc.DemoManagement
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            class DemoManagement extends $protobuf.rpc.Service {

                /**
                 * Constructs a new DemoManagement service.
                 * @exports demo.services.grpc.DemoManagement
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new DemoManagement service using the specified rpc implementation.
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {DemoManagement} RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DemoManagement;

                /**
                 * DemoRecord's related methods
                 * @param {demo.services.grpc.DemoRecord|Object.<string,*>} request DemoRecord message or plain object
                 * @param {DemoManagement_insertDemoRecord_Callback} callback Node-style callback called with the error, if any, and Void
                 * @returns {undefined}
                 */
                public insertDemoRecord(request: (demo.services.grpc.DemoRecord|{ [k: string]: any }), callback: DemoManagement_insertDemoRecord_Callback): void;

                /**
                 * Calls GetRecordMetadataList.
                 * @param {demo.services.grpc.GetDemoRecordsMetadataListRequest|Object.<string,*>} request GetDemoRecordsMetadataListRequest message or plain object
                 * @param {DemoManagement_getRecordMetadataList_Callback} callback Node-style callback called with the error, if any, and DemoRecordMetadataSequence
                 * @returns {undefined}
                 */
                public getRecordMetadataList(request: (demo.services.grpc.GetDemoRecordsMetadataListRequest|{ [k: string]: any }), callback: DemoManagement_getRecordMetadataList_Callback): void;

                /**
                 * Calls LookupNextDemoRecord.
                 * @param {demo.services.grpc.LookupNextDemoRecordRequest|Object.<string,*>} request LookupNextDemoRecordRequest message or plain object
                 * @param {DemoManagement_lookupNextDemoRecord_Callback} callback Node-style callback called with the error, if any, and DemoRecord
                 * @returns {undefined}
                 */
                public lookupNextDemoRecord(request: (demo.services.grpc.LookupNextDemoRecordRequest|{ [k: string]: any }), callback: DemoManagement_lookupNextDemoRecord_Callback): void;

                /**
                 * Interim's related methods
                 * @param {demo.services.grpc.InsertInterimRequest|Object.<string,*>} request InsertInterimRequest message or plain object
                 * @param {DemoManagement_insertInterim_Callback} callback Node-style callback called with the error, if any, and Void
                 * @returns {undefined}
                 */
                public insertInterim(request: (demo.services.grpc.InsertInterimRequest|{ [k: string]: any }), callback: DemoManagement_insertInterim_Callback): void;

                /**
                 * Calls RemoveLock.
                 * @param {demo.services.grpc.RemoveLockRequest|Object.<string,*>} request RemoveLockRequest message or plain object
                 * @param {DemoManagement_removeLock_Callback} callback Node-style callback called with the error, if any, and Void
                 * @returns {undefined}
                 */
                public removeLock(request: (demo.services.grpc.RemoveLockRequest|{ [k: string]: any }), callback: DemoManagement_removeLock_Callback): void;

                /**
                 * Calls GetMetadataContent.
                 * @param {demo.services.grpc.GetMetadataContentRequest|Object.<string,*>} request GetMetadataContentRequest message or plain object
                 * @param {DemoManagement_getMetadataContent_Callback} callback Node-style callback called with the error, if any, and MetadataContent
                 * @returns {undefined}
                 */
                public getMetadataContent(request: (demo.services.grpc.GetMetadataContentRequest|{ [k: string]: any }), callback: DemoManagement_getMetadataContent_Callback): void;
            }
        }
    }
}

type DemoManagement_insertDemoRecord_Callback = (error: Error, response?: demo.services.grpc.Void) => void;

type DemoManagement_getRecordMetadataList_Callback = (error: Error, response?: demo.services.grpc.DemoRecordMetadataSequence) => void;

type DemoManagement_lookupNextDemoRecord_Callback = (error: Error, response?: demo.services.grpc.DemoRecord) => void;

type DemoManagement_insertInterim_Callback = (error: Error, response?: demo.services.grpc.Void) => void;

type DemoManagement_removeLock_Callback = (error: Error, response?: demo.services.grpc.Void) => void;

type DemoManagement_getMetadataContent_Callback = (error: Error, response?: demo.services.grpc.MetadataContent) => void;
