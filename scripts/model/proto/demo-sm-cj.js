/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.demo = (function() {

    /**
     * Namespace demo.
     * @exports demo
     * @namespace
     */
    var demo = {};

    demo.services = (function() {

        /**
         * Namespace services.
         * @exports demo.services
         * @namespace
         */
        var services = {};

        services.grpc = (function() {

            /**
             * Namespace grpc.
             * @exports demo.services.grpc
             * @namespace
             */
            var grpc = {};

            grpc.Void = (function() {

                /**
                 * Properties of a Void.
                 * @typedef demo.services.grpc.Void$Properties
                 * @type {Object}
                 */

                /**
                 * Constructs a new Void.
                 * @exports demo.services.grpc.Void
                 * @constructor
                 * @param {demo.services.grpc.Void$Properties=} [properties] Properties to set
                 */
                function Void(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new Void instance using the specified properties.
                 * @param {demo.services.grpc.Void$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.Void} Void instance
                 */
                Void.create = function create(properties) {
                    return new Void(properties);
                };

                /**
                 * Encodes the specified Void message. Does not implicitly {@link demo.services.grpc.Void.verify|verify} messages.
                 * @param {demo.services.grpc.Void$Properties} message Void message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Void.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified Void message, length delimited. Does not implicitly {@link demo.services.grpc.Void.verify|verify} messages.
                 * @param {demo.services.grpc.Void$Properties} message Void message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Void.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Void message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.Void} Void
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Void.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.demo.services.grpc.Void();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Void message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.Void} Void
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Void.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Void message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                Void.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a Void message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.Void} Void
                 */
                Void.fromObject = function fromObject(object) {
                    if (object instanceof $root.demo.services.grpc.Void)
                        return object;
                    return new $root.demo.services.grpc.Void();
                };

                /**
                 * Creates a Void message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.Void.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.Void} Void
                 */
                Void.from = Void.fromObject;

                /**
                 * Creates a plain object from a Void message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.Void} message Void
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Void.toObject = function toObject() {
                    return {};
                };

                /**
                 * Creates a plain object from this Void message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Void.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this Void to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                Void.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Void;
            })();

            grpc.DemoRecordMetadataSequence = (function() {

                /**
                 * Properties of a DemoRecordMetadataSequence.
                 * @typedef demo.services.grpc.DemoRecordMetadataSequence$Properties
                 * @type {Object}
                 * @property {Array.<demo.services.grpc.DemoRecordMetadata$Properties>} [demoRecordMetadataList] DemoRecordMetadataSequence demoRecordMetadataList.
                 */

                /**
                 * Constructs a new DemoRecordMetadataSequence.
                 * @exports demo.services.grpc.DemoRecordMetadataSequence
                 * @constructor
                 * @param {demo.services.grpc.DemoRecordMetadataSequence$Properties=} [properties] Properties to set
                 */
                function DemoRecordMetadataSequence(properties) {
                    this.demoRecordMetadataList = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DemoRecordMetadataSequence demoRecordMetadataList.
                 * @type {Array.<demo.services.grpc.DemoRecordMetadata$Properties>}
                 */
                DemoRecordMetadataSequence.prototype.demoRecordMetadataList = $util.emptyArray;

                /**
                 * Creates a new DemoRecordMetadataSequence instance using the specified properties.
                 * @param {demo.services.grpc.DemoRecordMetadataSequence$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.DemoRecordMetadataSequence} DemoRecordMetadataSequence instance
                 */
                DemoRecordMetadataSequence.create = function create(properties) {
                    return new DemoRecordMetadataSequence(properties);
                };

                /**
                 * Encodes the specified DemoRecordMetadataSequence message. Does not implicitly {@link demo.services.grpc.DemoRecordMetadataSequence.verify|verify} messages.
                 * @param {demo.services.grpc.DemoRecordMetadataSequence$Properties} message DemoRecordMetadataSequence message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DemoRecordMetadataSequence.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.demoRecordMetadataList != null && message.demoRecordMetadataList.length)
                        for (var i = 0; i < message.demoRecordMetadataList.length; ++i)
                            $root.demo.services.grpc.DemoRecordMetadata.encode(message.demoRecordMetadataList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified DemoRecordMetadataSequence message, length delimited. Does not implicitly {@link demo.services.grpc.DemoRecordMetadataSequence.verify|verify} messages.
                 * @param {demo.services.grpc.DemoRecordMetadataSequence$Properties} message DemoRecordMetadataSequence message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DemoRecordMetadataSequence.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DemoRecordMetadataSequence message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.DemoRecordMetadataSequence} DemoRecordMetadataSequence
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DemoRecordMetadataSequence.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.demo.services.grpc.DemoRecordMetadataSequence();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.demoRecordMetadataList && message.demoRecordMetadataList.length))
                                message.demoRecordMetadataList = [];
                            message.demoRecordMetadataList.push($root.demo.services.grpc.DemoRecordMetadata.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a DemoRecordMetadataSequence message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.DemoRecordMetadataSequence} DemoRecordMetadataSequence
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DemoRecordMetadataSequence.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DemoRecordMetadataSequence message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                DemoRecordMetadataSequence.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.demoRecordMetadataList != null && message.hasOwnProperty("demoRecordMetadataList")) {
                        if (!Array.isArray(message.demoRecordMetadataList))
                            return "demoRecordMetadataList: array expected";
                        for (var i = 0; i < message.demoRecordMetadataList.length; ++i) {
                            var error = $root.demo.services.grpc.DemoRecordMetadata.verify(message.demoRecordMetadataList[i]);
                            if (error)
                                return "demoRecordMetadataList." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a DemoRecordMetadataSequence message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.DemoRecordMetadataSequence} DemoRecordMetadataSequence
                 */
                DemoRecordMetadataSequence.fromObject = function fromObject(object) {
                    if (object instanceof $root.demo.services.grpc.DemoRecordMetadataSequence)
                        return object;
                    var message = new $root.demo.services.grpc.DemoRecordMetadataSequence();
                    if (object.demoRecordMetadataList) {
                        if (!Array.isArray(object.demoRecordMetadataList))
                            throw TypeError(".demo.services.grpc.DemoRecordMetadataSequence.demoRecordMetadataList: array expected");
                        message.demoRecordMetadataList = [];
                        for (var i = 0; i < object.demoRecordMetadataList.length; ++i) {
                            if (typeof object.demoRecordMetadataList[i] !== "object")
                                throw TypeError(".demo.services.grpc.DemoRecordMetadataSequence.demoRecordMetadataList: object expected");
                            message.demoRecordMetadataList[i] = $root.demo.services.grpc.DemoRecordMetadata.fromObject(object.demoRecordMetadataList[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a DemoRecordMetadataSequence message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.DemoRecordMetadataSequence.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.DemoRecordMetadataSequence} DemoRecordMetadataSequence
                 */
                DemoRecordMetadataSequence.from = DemoRecordMetadataSequence.fromObject;

                /**
                 * Creates a plain object from a DemoRecordMetadataSequence message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.DemoRecordMetadataSequence} message DemoRecordMetadataSequence
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DemoRecordMetadataSequence.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.demoRecordMetadataList = [];
                    if (message.demoRecordMetadataList && message.demoRecordMetadataList.length) {
                        object.demoRecordMetadataList = [];
                        for (var j = 0; j < message.demoRecordMetadataList.length; ++j)
                            object.demoRecordMetadataList[j] = $root.demo.services.grpc.DemoRecordMetadata.toObject(message.demoRecordMetadataList[j], options);
                    }
                    return object;
                };

                /**
                 * Creates a plain object from this DemoRecordMetadataSequence message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DemoRecordMetadataSequence.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this DemoRecordMetadataSequence to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                DemoRecordMetadataSequence.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DemoRecordMetadataSequence;
            })();

            grpc.DemoRecordMetadata = (function() {

                /**
                 * Properties of a DemoRecordMetadata.
                 * @typedef demo.services.grpc.DemoRecordMetadata$Properties
                 * @type {Object}
                 * @property {number|Long} [id] Header
                 * @property {boolean} [stage] DemoRecordMetadata stage.
                 * @property {number|Long} [langSpecs] DemoRecordMetadata langSpecs.
                 * @property {string} [title] DemoRecordMetadata title.
                 */

                /**
                 * Constructs a new DemoRecordMetadata.
                 * @exports demo.services.grpc.DemoRecordMetadata
                 * @constructor
                 * @param {demo.services.grpc.DemoRecordMetadata$Properties=} [properties] Properties to set
                 */
                function DemoRecordMetadata(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Header
                 * @type {number|Long}
                 */
                DemoRecordMetadata.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * DemoRecordMetadata stage.
                 * @type {boolean}
                 */
                DemoRecordMetadata.prototype.stage = false;

                /**
                 * DemoRecordMetadata langSpecs.
                 * @type {number|Long}
                 */
                DemoRecordMetadata.prototype.langSpecs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * DemoRecordMetadata title.
                 * @type {string}
                 */
                DemoRecordMetadata.prototype.title = "";

                /**
                 * Creates a new DemoRecordMetadata instance using the specified properties.
                 * @param {demo.services.grpc.DemoRecordMetadata$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.DemoRecordMetadata} DemoRecordMetadata instance
                 */
                DemoRecordMetadata.create = function create(properties) {
                    return new DemoRecordMetadata(properties);
                };

                /**
                 * Encodes the specified DemoRecordMetadata message. Does not implicitly {@link demo.services.grpc.DemoRecordMetadata.verify|verify} messages.
                 * @param {demo.services.grpc.DemoRecordMetadata$Properties} message DemoRecordMetadata message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DemoRecordMetadata.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                    if (message.stage != null && message.hasOwnProperty("stage"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.stage);
                    if (message.langSpecs != null && message.hasOwnProperty("langSpecs"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.langSpecs);
                    if (message.title != null && message.hasOwnProperty("title"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.title);
                    return writer;
                };

                /**
                 * Encodes the specified DemoRecordMetadata message, length delimited. Does not implicitly {@link demo.services.grpc.DemoRecordMetadata.verify|verify} messages.
                 * @param {demo.services.grpc.DemoRecordMetadata$Properties} message DemoRecordMetadata message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DemoRecordMetadata.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DemoRecordMetadata message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.DemoRecordMetadata} DemoRecordMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DemoRecordMetadata.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.demo.services.grpc.DemoRecordMetadata();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.int64();
                            break;
                        case 2:
                            message.stage = reader.bool();
                            break;
                        case 3:
                            message.langSpecs = reader.uint64();
                            break;
                        case 4:
                            message.title = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a DemoRecordMetadata message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.DemoRecordMetadata} DemoRecordMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DemoRecordMetadata.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DemoRecordMetadata message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                DemoRecordMetadata.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                            return "id: integer|Long expected";
                    if (message.stage != null && message.hasOwnProperty("stage"))
                        if (typeof message.stage !== "boolean")
                            return "stage: boolean expected";
                    if (message.langSpecs != null && message.hasOwnProperty("langSpecs"))
                        if (!$util.isInteger(message.langSpecs) && !(message.langSpecs && $util.isInteger(message.langSpecs.low) && $util.isInteger(message.langSpecs.high)))
                            return "langSpecs: integer|Long expected";
                    if (message.title != null && message.hasOwnProperty("title"))
                        if (!$util.isString(message.title))
                            return "title: string expected";
                    return null;
                };

                /**
                 * Creates a DemoRecordMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.DemoRecordMetadata} DemoRecordMetadata
                 */
                DemoRecordMetadata.fromObject = function fromObject(object) {
                    if (object instanceof $root.demo.services.grpc.DemoRecordMetadata)
                        return object;
                    var message = new $root.demo.services.grpc.DemoRecordMetadata();
                    if (object.id != null)
                        if ($util.Long)
                            (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                        else if (typeof object.id === "string")
                            message.id = parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                    if (object.stage != null)
                        message.stage = Boolean(object.stage);
                    if (object.langSpecs != null)
                        if ($util.Long)
                            (message.langSpecs = $util.Long.fromValue(object.langSpecs)).unsigned = true;
                        else if (typeof object.langSpecs === "string")
                            message.langSpecs = parseInt(object.langSpecs, 10);
                        else if (typeof object.langSpecs === "number")
                            message.langSpecs = object.langSpecs;
                        else if (typeof object.langSpecs === "object")
                            message.langSpecs = new $util.LongBits(object.langSpecs.low >>> 0, object.langSpecs.high >>> 0).toNumber(true);
                    if (object.title != null)
                        message.title = String(object.title);
                    return message;
                };

                /**
                 * Creates a DemoRecordMetadata message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.DemoRecordMetadata.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.DemoRecordMetadata} DemoRecordMetadata
                 */
                DemoRecordMetadata.from = DemoRecordMetadata.fromObject;

                /**
                 * Creates a plain object from a DemoRecordMetadata message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.DemoRecordMetadata} message DemoRecordMetadata
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DemoRecordMetadata.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.id = options.longs === String ? "0" : 0;
                        object.stage = false;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.langSpecs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.langSpecs = options.longs === String ? "0" : 0;
                        object.title = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (typeof message.id === "number")
                            object.id = options.longs === String ? String(message.id) : message.id;
                        else
                            object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                    if (message.stage != null && message.hasOwnProperty("stage"))
                        object.stage = message.stage;
                    if (message.langSpecs != null && message.hasOwnProperty("langSpecs"))
                        if (typeof message.langSpecs === "number")
                            object.langSpecs = options.longs === String ? String(message.langSpecs) : message.langSpecs;
                        else
                            object.langSpecs = options.longs === String ? $util.Long.prototype.toString.call(message.langSpecs) : options.longs === Number ? new $util.LongBits(message.langSpecs.low >>> 0, message.langSpecs.high >>> 0).toNumber(true) : message.langSpecs;
                    if (message.title != null && message.hasOwnProperty("title"))
                        object.title = message.title;
                    return object;
                };

                /**
                 * Creates a plain object from this DemoRecordMetadata message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DemoRecordMetadata.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this DemoRecordMetadata to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                DemoRecordMetadata.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DemoRecordMetadata;
            })();

            grpc.MetadataContent = (function() {

                /**
                 * Properties of a MetadataContent.
                 * @typedef demo.services.grpc.MetadataContent$Properties
                 * @type {Object}
                 * @property {demo.services.grpc.DemoContent$Properties} [data] MetadataContent data.
                 * @property {Array.<demo.services.grpc.DemoContent$Properties>} [interims] MetadataContent interims.
                 */

                /**
                 * Constructs a new MetadataContent.
                 * @exports demo.services.grpc.MetadataContent
                 * @constructor
                 * @param {demo.services.grpc.MetadataContent$Properties=} [properties] Properties to set
                 */
                function MetadataContent(properties) {
                    this.interims = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MetadataContent data.
                 * @type {(demo.services.grpc.DemoContent$Properties|null)}
                 */
                MetadataContent.prototype.data = null;

                /**
                 * MetadataContent interims.
                 * @type {Array.<demo.services.grpc.DemoContent$Properties>}
                 */
                MetadataContent.prototype.interims = $util.emptyArray;

                /**
                 * Creates a new MetadataContent instance using the specified properties.
                 * @param {demo.services.grpc.MetadataContent$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.MetadataContent} MetadataContent instance
                 */
                MetadataContent.create = function create(properties) {
                    return new MetadataContent(properties);
                };

                /**
                 * Encodes the specified MetadataContent message. Does not implicitly {@link demo.services.grpc.MetadataContent.verify|verify} messages.
                 * @param {demo.services.grpc.MetadataContent$Properties} message MetadataContent message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MetadataContent.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.data != null && message.hasOwnProperty("data"))
                        $root.demo.services.grpc.DemoContent.encode(message.data, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.interims != null && message.interims.length)
                        for (var i = 0; i < message.interims.length; ++i)
                            $root.demo.services.grpc.DemoContent.encode(message.interims[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified MetadataContent message, length delimited. Does not implicitly {@link demo.services.grpc.MetadataContent.verify|verify} messages.
                 * @param {demo.services.grpc.MetadataContent$Properties} message MetadataContent message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MetadataContent.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MetadataContent message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.MetadataContent} MetadataContent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MetadataContent.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.demo.services.grpc.MetadataContent();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.data = $root.demo.services.grpc.DemoContent.decode(reader, reader.uint32());
                            break;
                        case 2:
                            if (!(message.interims && message.interims.length))
                                message.interims = [];
                            message.interims.push($root.demo.services.grpc.DemoContent.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a MetadataContent message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.MetadataContent} MetadataContent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MetadataContent.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MetadataContent message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                MetadataContent.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.data != null && message.hasOwnProperty("data")) {
                        var error = $root.demo.services.grpc.DemoContent.verify(message.data);
                        if (error)
                            return "data." + error;
                    }
                    if (message.interims != null && message.hasOwnProperty("interims")) {
                        if (!Array.isArray(message.interims))
                            return "interims: array expected";
                        for (var i = 0; i < message.interims.length; ++i) {
                            var error = $root.demo.services.grpc.DemoContent.verify(message.interims[i]);
                            if (error)
                                return "interims." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a MetadataContent message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.MetadataContent} MetadataContent
                 */
                MetadataContent.fromObject = function fromObject(object) {
                    if (object instanceof $root.demo.services.grpc.MetadataContent)
                        return object;
                    var message = new $root.demo.services.grpc.MetadataContent();
                    if (object.data != null) {
                        if (typeof object.data !== "object")
                            throw TypeError(".demo.services.grpc.MetadataContent.data: object expected");
                        message.data = $root.demo.services.grpc.DemoContent.fromObject(object.data);
                    }
                    if (object.interims) {
                        if (!Array.isArray(object.interims))
                            throw TypeError(".demo.services.grpc.MetadataContent.interims: array expected");
                        message.interims = [];
                        for (var i = 0; i < object.interims.length; ++i) {
                            if (typeof object.interims[i] !== "object")
                                throw TypeError(".demo.services.grpc.MetadataContent.interims: object expected");
                            message.interims[i] = $root.demo.services.grpc.DemoContent.fromObject(object.interims[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a MetadataContent message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.MetadataContent.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.MetadataContent} MetadataContent
                 */
                MetadataContent.from = MetadataContent.fromObject;

                /**
                 * Creates a plain object from a MetadataContent message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.MetadataContent} message MetadataContent
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MetadataContent.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.interims = [];
                    if (options.defaults)
                        object.data = null;
                    if (message.data != null && message.hasOwnProperty("data"))
                        object.data = $root.demo.services.grpc.DemoContent.toObject(message.data, options);
                    if (message.interims && message.interims.length) {
                        object.interims = [];
                        for (var j = 0; j < message.interims.length; ++j)
                            object.interims[j] = $root.demo.services.grpc.DemoContent.toObject(message.interims[j], options);
                    }
                    return object;
                };

                /**
                 * Creates a plain object from this MetadataContent message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MetadataContent.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this MetadataContent to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                MetadataContent.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return MetadataContent;
            })();

            grpc.Interim = (function() {

                /**
                 * Properties of an Interim.
                 * @typedef demo.services.grpc.Interim$Properties
                 * @type {Object}
                 * @property {number|Long} [interimId] Interim interimId.
                 * @property {number|Long} [recordId] Interim recordId.
                 * @property {number|Long} [createdBy] Interim createdBy.
                 * @property {number|Long} [creationTimestamp] Interim creationTimestamp.
                 * @property {demo.services.grpc.DemoContent$Properties} [changedData] Interim changedData.
                 * @property {string} [changedDataHash] Interim changedDataHash.
                 */

                /**
                 * Constructs a new Interim.
                 * @exports demo.services.grpc.Interim
                 * @constructor
                 * @param {demo.services.grpc.Interim$Properties=} [properties] Properties to set
                 */
                function Interim(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Interim interimId.
                 * @type {number|Long}
                 */
                Interim.prototype.interimId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Interim recordId.
                 * @type {number|Long}
                 */
                Interim.prototype.recordId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Interim createdBy.
                 * @type {number|Long}
                 */
                Interim.prototype.createdBy = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Interim creationTimestamp.
                 * @type {number|Long}
                 */
                Interim.prototype.creationTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Interim changedData.
                 * @type {(demo.services.grpc.DemoContent$Properties|null)}
                 */
                Interim.prototype.changedData = null;

                /**
                 * Interim changedDataHash.
                 * @type {string}
                 */
                Interim.prototype.changedDataHash = "";

                /**
                 * Creates a new Interim instance using the specified properties.
                 * @param {demo.services.grpc.Interim$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.Interim} Interim instance
                 */
                Interim.create = function create(properties) {
                    return new Interim(properties);
                };

                /**
                 * Encodes the specified Interim message. Does not implicitly {@link demo.services.grpc.Interim.verify|verify} messages.
                 * @param {demo.services.grpc.Interim$Properties} message Interim message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Interim.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.interimId != null && message.hasOwnProperty("interimId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.interimId);
                    if (message.recordId != null && message.hasOwnProperty("recordId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.recordId);
                    if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.createdBy);
                    if (message.creationTimestamp != null && message.hasOwnProperty("creationTimestamp"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.creationTimestamp);
                    if (message.changedData != null && message.hasOwnProperty("changedData"))
                        $root.demo.services.grpc.DemoContent.encode(message.changedData, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.changedDataHash != null && message.hasOwnProperty("changedDataHash"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.changedDataHash);
                    return writer;
                };

                /**
                 * Encodes the specified Interim message, length delimited. Does not implicitly {@link demo.services.grpc.Interim.verify|verify} messages.
                 * @param {demo.services.grpc.Interim$Properties} message Interim message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Interim.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Interim message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.Interim} Interim
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Interim.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.demo.services.grpc.Interim();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.interimId = reader.int64();
                            break;
                        case 2:
                            message.recordId = reader.int64();
                            break;
                        case 3:
                            message.createdBy = reader.int64();
                            break;
                        case 4:
                            message.creationTimestamp = reader.int64();
                            break;
                        case 5:
                            message.changedData = $root.demo.services.grpc.DemoContent.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.changedDataHash = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Interim message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.Interim} Interim
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Interim.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Interim message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                Interim.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.interimId != null && message.hasOwnProperty("interimId"))
                        if (!$util.isInteger(message.interimId) && !(message.interimId && $util.isInteger(message.interimId.low) && $util.isInteger(message.interimId.high)))
                            return "interimId: integer|Long expected";
                    if (message.recordId != null && message.hasOwnProperty("recordId"))
                        if (!$util.isInteger(message.recordId) && !(message.recordId && $util.isInteger(message.recordId.low) && $util.isInteger(message.recordId.high)))
                            return "recordId: integer|Long expected";
                    if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                        if (!$util.isInteger(message.createdBy) && !(message.createdBy && $util.isInteger(message.createdBy.low) && $util.isInteger(message.createdBy.high)))
                            return "createdBy: integer|Long expected";
                    if (message.creationTimestamp != null && message.hasOwnProperty("creationTimestamp"))
                        if (!$util.isInteger(message.creationTimestamp) && !(message.creationTimestamp && $util.isInteger(message.creationTimestamp.low) && $util.isInteger(message.creationTimestamp.high)))
                            return "creationTimestamp: integer|Long expected";
                    if (message.changedData != null && message.hasOwnProperty("changedData")) {
                        var error = $root.demo.services.grpc.DemoContent.verify(message.changedData);
                        if (error)
                            return "changedData." + error;
                    }
                    if (message.changedDataHash != null && message.hasOwnProperty("changedDataHash"))
                        if (!$util.isString(message.changedDataHash))
                            return "changedDataHash: string expected";
                    return null;
                };

                /**
                 * Creates an Interim message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.Interim} Interim
                 */
                Interim.fromObject = function fromObject(object) {
                    if (object instanceof $root.demo.services.grpc.Interim)
                        return object;
                    var message = new $root.demo.services.grpc.Interim();
                    if (object.interimId != null)
                        if ($util.Long)
                            (message.interimId = $util.Long.fromValue(object.interimId)).unsigned = false;
                        else if (typeof object.interimId === "string")
                            message.interimId = parseInt(object.interimId, 10);
                        else if (typeof object.interimId === "number")
                            message.interimId = object.interimId;
                        else if (typeof object.interimId === "object")
                            message.interimId = new $util.LongBits(object.interimId.low >>> 0, object.interimId.high >>> 0).toNumber();
                    if (object.recordId != null)
                        if ($util.Long)
                            (message.recordId = $util.Long.fromValue(object.recordId)).unsigned = false;
                        else if (typeof object.recordId === "string")
                            message.recordId = parseInt(object.recordId, 10);
                        else if (typeof object.recordId === "number")
                            message.recordId = object.recordId;
                        else if (typeof object.recordId === "object")
                            message.recordId = new $util.LongBits(object.recordId.low >>> 0, object.recordId.high >>> 0).toNumber();
                    if (object.createdBy != null)
                        if ($util.Long)
                            (message.createdBy = $util.Long.fromValue(object.createdBy)).unsigned = false;
                        else if (typeof object.createdBy === "string")
                            message.createdBy = parseInt(object.createdBy, 10);
                        else if (typeof object.createdBy === "number")
                            message.createdBy = object.createdBy;
                        else if (typeof object.createdBy === "object")
                            message.createdBy = new $util.LongBits(object.createdBy.low >>> 0, object.createdBy.high >>> 0).toNumber();
                    if (object.creationTimestamp != null)
                        if ($util.Long)
                            (message.creationTimestamp = $util.Long.fromValue(object.creationTimestamp)).unsigned = false;
                        else if (typeof object.creationTimestamp === "string")
                            message.creationTimestamp = parseInt(object.creationTimestamp, 10);
                        else if (typeof object.creationTimestamp === "number")
                            message.creationTimestamp = object.creationTimestamp;
                        else if (typeof object.creationTimestamp === "object")
                            message.creationTimestamp = new $util.LongBits(object.creationTimestamp.low >>> 0, object.creationTimestamp.high >>> 0).toNumber();
                    if (object.changedData != null) {
                        if (typeof object.changedData !== "object")
                            throw TypeError(".demo.services.grpc.Interim.changedData: object expected");
                        message.changedData = $root.demo.services.grpc.DemoContent.fromObject(object.changedData);
                    }
                    if (object.changedDataHash != null)
                        message.changedDataHash = String(object.changedDataHash);
                    return message;
                };

                /**
                 * Creates an Interim message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.Interim.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.Interim} Interim
                 */
                Interim.from = Interim.fromObject;

                /**
                 * Creates a plain object from an Interim message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.Interim} message Interim
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Interim.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.interimId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.interimId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.recordId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.recordId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.createdBy = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.createdBy = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.creationTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.creationTimestamp = options.longs === String ? "0" : 0;
                        object.changedData = null;
                        object.changedDataHash = "";
                    }
                    if (message.interimId != null && message.hasOwnProperty("interimId"))
                        if (typeof message.interimId === "number")
                            object.interimId = options.longs === String ? String(message.interimId) : message.interimId;
                        else
                            object.interimId = options.longs === String ? $util.Long.prototype.toString.call(message.interimId) : options.longs === Number ? new $util.LongBits(message.interimId.low >>> 0, message.interimId.high >>> 0).toNumber() : message.interimId;
                    if (message.recordId != null && message.hasOwnProperty("recordId"))
                        if (typeof message.recordId === "number")
                            object.recordId = options.longs === String ? String(message.recordId) : message.recordId;
                        else
                            object.recordId = options.longs === String ? $util.Long.prototype.toString.call(message.recordId) : options.longs === Number ? new $util.LongBits(message.recordId.low >>> 0, message.recordId.high >>> 0).toNumber() : message.recordId;
                    if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                        if (typeof message.createdBy === "number")
                            object.createdBy = options.longs === String ? String(message.createdBy) : message.createdBy;
                        else
                            object.createdBy = options.longs === String ? $util.Long.prototype.toString.call(message.createdBy) : options.longs === Number ? new $util.LongBits(message.createdBy.low >>> 0, message.createdBy.high >>> 0).toNumber() : message.createdBy;
                    if (message.creationTimestamp != null && message.hasOwnProperty("creationTimestamp"))
                        if (typeof message.creationTimestamp === "number")
                            object.creationTimestamp = options.longs === String ? String(message.creationTimestamp) : message.creationTimestamp;
                        else
                            object.creationTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.creationTimestamp) : options.longs === Number ? new $util.LongBits(message.creationTimestamp.low >>> 0, message.creationTimestamp.high >>> 0).toNumber() : message.creationTimestamp;
                    if (message.changedData != null && message.hasOwnProperty("changedData"))
                        object.changedData = $root.demo.services.grpc.DemoContent.toObject(message.changedData, options);
                    if (message.changedDataHash != null && message.hasOwnProperty("changedDataHash"))
                        object.changedDataHash = message.changedDataHash;
                    return object;
                };

                /**
                 * Creates a plain object from this Interim message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Interim.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this Interim to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                Interim.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Interim;
            })();

            grpc.DemoRecordSequence = (function() {

                /**
                 * Properties of a DemoRecordSequence.
                 * @typedef demo.services.grpc.DemoRecordSequence$Properties
                 * @type {Object}
                 * @property {Array.<demo.services.grpc.DemoRecord$Properties>} [demoRecords] DemoRecordSequence demoRecords.
                 */

                /**
                 * Constructs a new DemoRecordSequence.
                 * @exports demo.services.grpc.DemoRecordSequence
                 * @constructor
                 * @param {demo.services.grpc.DemoRecordSequence$Properties=} [properties] Properties to set
                 */
                function DemoRecordSequence(properties) {
                    this.demoRecords = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DemoRecordSequence demoRecords.
                 * @type {Array.<demo.services.grpc.DemoRecord$Properties>}
                 */
                DemoRecordSequence.prototype.demoRecords = $util.emptyArray;

                /**
                 * Creates a new DemoRecordSequence instance using the specified properties.
                 * @param {demo.services.grpc.DemoRecordSequence$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.DemoRecordSequence} DemoRecordSequence instance
                 */
                DemoRecordSequence.create = function create(properties) {
                    return new DemoRecordSequence(properties);
                };

                /**
                 * Encodes the specified DemoRecordSequence message. Does not implicitly {@link demo.services.grpc.DemoRecordSequence.verify|verify} messages.
                 * @param {demo.services.grpc.DemoRecordSequence$Properties} message DemoRecordSequence message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DemoRecordSequence.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.demoRecords != null && message.demoRecords.length)
                        for (var i = 0; i < message.demoRecords.length; ++i)
                            $root.demo.services.grpc.DemoRecord.encode(message.demoRecords[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified DemoRecordSequence message, length delimited. Does not implicitly {@link demo.services.grpc.DemoRecordSequence.verify|verify} messages.
                 * @param {demo.services.grpc.DemoRecordSequence$Properties} message DemoRecordSequence message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DemoRecordSequence.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DemoRecordSequence message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.DemoRecordSequence} DemoRecordSequence
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DemoRecordSequence.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.demo.services.grpc.DemoRecordSequence();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.demoRecords && message.demoRecords.length))
                                message.demoRecords = [];
                            message.demoRecords.push($root.demo.services.grpc.DemoRecord.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a DemoRecordSequence message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.DemoRecordSequence} DemoRecordSequence
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DemoRecordSequence.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DemoRecordSequence message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                DemoRecordSequence.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.demoRecords != null && message.hasOwnProperty("demoRecords")) {
                        if (!Array.isArray(message.demoRecords))
                            return "demoRecords: array expected";
                        for (var i = 0; i < message.demoRecords.length; ++i) {
                            var error = $root.demo.services.grpc.DemoRecord.verify(message.demoRecords[i]);
                            if (error)
                                return "demoRecords." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a DemoRecordSequence message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.DemoRecordSequence} DemoRecordSequence
                 */
                DemoRecordSequence.fromObject = function fromObject(object) {
                    if (object instanceof $root.demo.services.grpc.DemoRecordSequence)
                        return object;
                    var message = new $root.demo.services.grpc.DemoRecordSequence();
                    if (object.demoRecords) {
                        if (!Array.isArray(object.demoRecords))
                            throw TypeError(".demo.services.grpc.DemoRecordSequence.demoRecords: array expected");
                        message.demoRecords = [];
                        for (var i = 0; i < object.demoRecords.length; ++i) {
                            if (typeof object.demoRecords[i] !== "object")
                                throw TypeError(".demo.services.grpc.DemoRecordSequence.demoRecords: object expected");
                            message.demoRecords[i] = $root.demo.services.grpc.DemoRecord.fromObject(object.demoRecords[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a DemoRecordSequence message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.DemoRecordSequence.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.DemoRecordSequence} DemoRecordSequence
                 */
                DemoRecordSequence.from = DemoRecordSequence.fromObject;

                /**
                 * Creates a plain object from a DemoRecordSequence message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.DemoRecordSequence} message DemoRecordSequence
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DemoRecordSequence.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.demoRecords = [];
                    if (message.demoRecords && message.demoRecords.length) {
                        object.demoRecords = [];
                        for (var j = 0; j < message.demoRecords.length; ++j)
                            object.demoRecords[j] = $root.demo.services.grpc.DemoRecord.toObject(message.demoRecords[j], options);
                    }
                    return object;
                };

                /**
                 * Creates a plain object from this DemoRecordSequence message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DemoRecordSequence.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this DemoRecordSequence to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                DemoRecordSequence.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DemoRecordSequence;
            })();

            grpc.DemoRecord = (function() {

                /**
                 * Properties of a DemoRecord.
                 * @typedef demo.services.grpc.DemoRecord$Properties
                 * @type {Object}
                 * @property {number|Long} [id] Header
                 * @property {number|Long} [creationTimestamp] DemoRecord creationTimestamp.
                 * @property {boolean} [stage] DemoRecord stage.
                 * @property {number|Long} [langSpecs] DemoRecord langSpecs.
                 * @property {string} [title] DemoRecord title.
                 * @property {demo.services.grpc.DemoContent$Properties} [data] DemoRecord data.
                 * @property {demo.services.grpc.DemoContent$Properties} [approvedData] DemoRecord approvedData.
                 */

                /**
                 * Constructs a new DemoRecord.
                 * @exports demo.services.grpc.DemoRecord
                 * @constructor
                 * @param {demo.services.grpc.DemoRecord$Properties=} [properties] Properties to set
                 */
                function DemoRecord(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Header
                 * @type {number|Long}
                 */
                DemoRecord.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * DemoRecord creationTimestamp.
                 * @type {number|Long}
                 */
                DemoRecord.prototype.creationTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * DemoRecord stage.
                 * @type {boolean}
                 */
                DemoRecord.prototype.stage = false;

                /**
                 * DemoRecord langSpecs.
                 * @type {number|Long}
                 */
                DemoRecord.prototype.langSpecs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * DemoRecord title.
                 * @type {string}
                 */
                DemoRecord.prototype.title = "";

                /**
                 * DemoRecord data.
                 * @type {(demo.services.grpc.DemoContent$Properties|null)}
                 */
                DemoRecord.prototype.data = null;

                /**
                 * DemoRecord approvedData.
                 * @type {(demo.services.grpc.DemoContent$Properties|null)}
                 */
                DemoRecord.prototype.approvedData = null;

                /**
                 * Creates a new DemoRecord instance using the specified properties.
                 * @param {demo.services.grpc.DemoRecord$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.DemoRecord} DemoRecord instance
                 */
                DemoRecord.create = function create(properties) {
                    return new DemoRecord(properties);
                };

                /**
                 * Encodes the specified DemoRecord message. Does not implicitly {@link demo.services.grpc.DemoRecord.verify|verify} messages.
                 * @param {demo.services.grpc.DemoRecord$Properties} message DemoRecord message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DemoRecord.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                    if (message.creationTimestamp != null && message.hasOwnProperty("creationTimestamp"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.creationTimestamp);
                    if (message.stage != null && message.hasOwnProperty("stage"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.stage);
                    if (message.langSpecs != null && message.hasOwnProperty("langSpecs"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.langSpecs);
                    if (message.title != null && message.hasOwnProperty("title"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.title);
                    if (message.data != null && message.hasOwnProperty("data"))
                        $root.demo.services.grpc.DemoContent.encode(message.data, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.approvedData != null && message.hasOwnProperty("approvedData"))
                        $root.demo.services.grpc.DemoContent.encode(message.approvedData, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified DemoRecord message, length delimited. Does not implicitly {@link demo.services.grpc.DemoRecord.verify|verify} messages.
                 * @param {demo.services.grpc.DemoRecord$Properties} message DemoRecord message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DemoRecord.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DemoRecord message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.DemoRecord} DemoRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DemoRecord.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.demo.services.grpc.DemoRecord();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.int64();
                            break;
                        case 2:
                            message.creationTimestamp = reader.int64();
                            break;
                        case 3:
                            message.stage = reader.bool();
                            break;
                        case 4:
                            message.langSpecs = reader.uint64();
                            break;
                        case 5:
                            message.title = reader.string();
                            break;
                        case 6:
                            message.data = $root.demo.services.grpc.DemoContent.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.approvedData = $root.demo.services.grpc.DemoContent.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a DemoRecord message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.DemoRecord} DemoRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DemoRecord.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DemoRecord message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                DemoRecord.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                            return "id: integer|Long expected";
                    if (message.creationTimestamp != null && message.hasOwnProperty("creationTimestamp"))
                        if (!$util.isInteger(message.creationTimestamp) && !(message.creationTimestamp && $util.isInteger(message.creationTimestamp.low) && $util.isInteger(message.creationTimestamp.high)))
                            return "creationTimestamp: integer|Long expected";
                    if (message.stage != null && message.hasOwnProperty("stage"))
                        if (typeof message.stage !== "boolean")
                            return "stage: boolean expected";
                    if (message.langSpecs != null && message.hasOwnProperty("langSpecs"))
                        if (!$util.isInteger(message.langSpecs) && !(message.langSpecs && $util.isInteger(message.langSpecs.low) && $util.isInteger(message.langSpecs.high)))
                            return "langSpecs: integer|Long expected";
                    if (message.title != null && message.hasOwnProperty("title"))
                        if (!$util.isString(message.title))
                            return "title: string expected";
                    if (message.data != null && message.hasOwnProperty("data")) {
                        var error = $root.demo.services.grpc.DemoContent.verify(message.data);
                        if (error)
                            return "data." + error;
                    }
                    if (message.approvedData != null && message.hasOwnProperty("approvedData")) {
                        var error = $root.demo.services.grpc.DemoContent.verify(message.approvedData);
                        if (error)
                            return "approvedData." + error;
                    }
                    return null;
                };

                /**
                 * Creates a DemoRecord message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.DemoRecord} DemoRecord
                 */
                DemoRecord.fromObject = function fromObject(object) {
                    if (object instanceof $root.demo.services.grpc.DemoRecord)
                        return object;
                    var message = new $root.demo.services.grpc.DemoRecord();
                    if (object.id != null)
                        if ($util.Long)
                            (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                        else if (typeof object.id === "string")
                            message.id = parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                    if (object.creationTimestamp != null)
                        if ($util.Long)
                            (message.creationTimestamp = $util.Long.fromValue(object.creationTimestamp)).unsigned = false;
                        else if (typeof object.creationTimestamp === "string")
                            message.creationTimestamp = parseInt(object.creationTimestamp, 10);
                        else if (typeof object.creationTimestamp === "number")
                            message.creationTimestamp = object.creationTimestamp;
                        else if (typeof object.creationTimestamp === "object")
                            message.creationTimestamp = new $util.LongBits(object.creationTimestamp.low >>> 0, object.creationTimestamp.high >>> 0).toNumber();
                    if (object.stage != null)
                        message.stage = Boolean(object.stage);
                    if (object.langSpecs != null)
                        if ($util.Long)
                            (message.langSpecs = $util.Long.fromValue(object.langSpecs)).unsigned = true;
                        else if (typeof object.langSpecs === "string")
                            message.langSpecs = parseInt(object.langSpecs, 10);
                        else if (typeof object.langSpecs === "number")
                            message.langSpecs = object.langSpecs;
                        else if (typeof object.langSpecs === "object")
                            message.langSpecs = new $util.LongBits(object.langSpecs.low >>> 0, object.langSpecs.high >>> 0).toNumber(true);
                    if (object.title != null)
                        message.title = String(object.title);
                    if (object.data != null) {
                        if (typeof object.data !== "object")
                            throw TypeError(".demo.services.grpc.DemoRecord.data: object expected");
                        message.data = $root.demo.services.grpc.DemoContent.fromObject(object.data);
                    }
                    if (object.approvedData != null) {
                        if (typeof object.approvedData !== "object")
                            throw TypeError(".demo.services.grpc.DemoRecord.approvedData: object expected");
                        message.approvedData = $root.demo.services.grpc.DemoContent.fromObject(object.approvedData);
                    }
                    return message;
                };

                /**
                 * Creates a DemoRecord message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.DemoRecord.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.DemoRecord} DemoRecord
                 */
                DemoRecord.from = DemoRecord.fromObject;

                /**
                 * Creates a plain object from a DemoRecord message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.DemoRecord} message DemoRecord
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DemoRecord.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.id = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.creationTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.creationTimestamp = options.longs === String ? "0" : 0;
                        object.stage = false;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.langSpecs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.langSpecs = options.longs === String ? "0" : 0;
                        object.title = "";
                        object.data = null;
                        object.approvedData = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (typeof message.id === "number")
                            object.id = options.longs === String ? String(message.id) : message.id;
                        else
                            object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                    if (message.creationTimestamp != null && message.hasOwnProperty("creationTimestamp"))
                        if (typeof message.creationTimestamp === "number")
                            object.creationTimestamp = options.longs === String ? String(message.creationTimestamp) : message.creationTimestamp;
                        else
                            object.creationTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.creationTimestamp) : options.longs === Number ? new $util.LongBits(message.creationTimestamp.low >>> 0, message.creationTimestamp.high >>> 0).toNumber() : message.creationTimestamp;
                    if (message.stage != null && message.hasOwnProperty("stage"))
                        object.stage = message.stage;
                    if (message.langSpecs != null && message.hasOwnProperty("langSpecs"))
                        if (typeof message.langSpecs === "number")
                            object.langSpecs = options.longs === String ? String(message.langSpecs) : message.langSpecs;
                        else
                            object.langSpecs = options.longs === String ? $util.Long.prototype.toString.call(message.langSpecs) : options.longs === Number ? new $util.LongBits(message.langSpecs.low >>> 0, message.langSpecs.high >>> 0).toNumber(true) : message.langSpecs;
                    if (message.title != null && message.hasOwnProperty("title"))
                        object.title = message.title;
                    if (message.data != null && message.hasOwnProperty("data"))
                        object.data = $root.demo.services.grpc.DemoContent.toObject(message.data, options);
                    if (message.approvedData != null && message.hasOwnProperty("approvedData"))
                        object.approvedData = $root.demo.services.grpc.DemoContent.toObject(message.approvedData, options);
                    return object;
                };

                /**
                 * Creates a plain object from this DemoRecord message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DemoRecord.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this DemoRecord to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                DemoRecord.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DemoRecord;
            })();

            grpc.DemoContent = (function() {

                /**
                 * Properties of a DemoContent.
                 * @typedef demo.services.grpc.DemoContent$Properties
                 * @type {Object}
                 * @property {string} [text] DemoContent text.
                 */

                /**
                 * Constructs a new DemoContent.
                 * @exports demo.services.grpc.DemoContent
                 * @constructor
                 * @param {demo.services.grpc.DemoContent$Properties=} [properties] Properties to set
                 */
                function DemoContent(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DemoContent text.
                 * @type {string}
                 */
                DemoContent.prototype.text = "";

                /**
                 * Creates a new DemoContent instance using the specified properties.
                 * @param {demo.services.grpc.DemoContent$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.DemoContent} DemoContent instance
                 */
                DemoContent.create = function create(properties) {
                    return new DemoContent(properties);
                };

                /**
                 * Encodes the specified DemoContent message. Does not implicitly {@link demo.services.grpc.DemoContent.verify|verify} messages.
                 * @param {demo.services.grpc.DemoContent$Properties} message DemoContent message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DemoContent.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
                    return writer;
                };

                /**
                 * Encodes the specified DemoContent message, length delimited. Does not implicitly {@link demo.services.grpc.DemoContent.verify|verify} messages.
                 * @param {demo.services.grpc.DemoContent$Properties} message DemoContent message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DemoContent.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DemoContent message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.DemoContent} DemoContent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DemoContent.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.demo.services.grpc.DemoContent();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.text = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a DemoContent message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.DemoContent} DemoContent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DemoContent.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DemoContent message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                DemoContent.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    return null;
                };

                /**
                 * Creates a DemoContent message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.DemoContent} DemoContent
                 */
                DemoContent.fromObject = function fromObject(object) {
                    if (object instanceof $root.demo.services.grpc.DemoContent)
                        return object;
                    var message = new $root.demo.services.grpc.DemoContent();
                    if (object.text != null)
                        message.text = String(object.text);
                    return message;
                };

                /**
                 * Creates a DemoContent message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.DemoContent.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.DemoContent} DemoContent
                 */
                DemoContent.from = DemoContent.fromObject;

                /**
                 * Creates a plain object from a DemoContent message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.DemoContent} message DemoContent
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DemoContent.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.text = "";
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    return object;
                };

                /**
                 * Creates a plain object from this DemoContent message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DemoContent.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this DemoContent to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                DemoContent.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DemoContent;
            })();

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
            grpc.LanguageCode = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN_LANG_CODE"] = 0;
                values[valuesById[2] = "English"] = 2;
                values[valuesById[7] = "Ukrainian"] = 7;
                values[valuesById[11] = "Russian"] = 11;
                return values;
            })();

            grpc.LookupNextDemoRecordRequest = (function() {

                /**
                 * Properties of a LookupNextDemoRecordRequest.
                 * @typedef demo.services.grpc.LookupNextDemoRecordRequest$Properties
                 * @type {Object}
                 * @property {number|Long} [userId] LookupNextDemoRecordRequest userId.
                 * @property {number|Long} [lookupLang] LookupNextDemoRecordRequest lookupLang.
                 */

                /**
                 * Constructs a new LookupNextDemoRecordRequest.
                 * @exports demo.services.grpc.LookupNextDemoRecordRequest
                 * @constructor
                 * @param {demo.services.grpc.LookupNextDemoRecordRequest$Properties=} [properties] Properties to set
                 */
                function LookupNextDemoRecordRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * LookupNextDemoRecordRequest userId.
                 * @type {number|Long}
                 */
                LookupNextDemoRecordRequest.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * LookupNextDemoRecordRequest lookupLang.
                 * @type {number|Long}
                 */
                LookupNextDemoRecordRequest.prototype.lookupLang = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * Creates a new LookupNextDemoRecordRequest instance using the specified properties.
                 * @param {demo.services.grpc.LookupNextDemoRecordRequest$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.LookupNextDemoRecordRequest} LookupNextDemoRecordRequest instance
                 */
                LookupNextDemoRecordRequest.create = function create(properties) {
                    return new LookupNextDemoRecordRequest(properties);
                };

                /**
                 * Encodes the specified LookupNextDemoRecordRequest message. Does not implicitly {@link demo.services.grpc.LookupNextDemoRecordRequest.verify|verify} messages.
                 * @param {demo.services.grpc.LookupNextDemoRecordRequest$Properties} message LookupNextDemoRecordRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LookupNextDemoRecordRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                    if (message.lookupLang != null && message.hasOwnProperty("lookupLang"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.lookupLang);
                    return writer;
                };

                /**
                 * Encodes the specified LookupNextDemoRecordRequest message, length delimited. Does not implicitly {@link demo.services.grpc.LookupNextDemoRecordRequest.verify|verify} messages.
                 * @param {demo.services.grpc.LookupNextDemoRecordRequest$Properties} message LookupNextDemoRecordRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                LookupNextDemoRecordRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a LookupNextDemoRecordRequest message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.LookupNextDemoRecordRequest} LookupNextDemoRecordRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LookupNextDemoRecordRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.demo.services.grpc.LookupNextDemoRecordRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.userId = reader.int64();
                            break;
                        case 2:
                            message.lookupLang = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a LookupNextDemoRecordRequest message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.LookupNextDemoRecordRequest} LookupNextDemoRecordRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LookupNextDemoRecordRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a LookupNextDemoRecordRequest message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                LookupNextDemoRecordRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                            return "userId: integer|Long expected";
                    if (message.lookupLang != null && message.hasOwnProperty("lookupLang"))
                        if (!$util.isInteger(message.lookupLang) && !(message.lookupLang && $util.isInteger(message.lookupLang.low) && $util.isInteger(message.lookupLang.high)))
                            return "lookupLang: integer|Long expected";
                    return null;
                };

                /**
                 * Creates a LookupNextDemoRecordRequest message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.LookupNextDemoRecordRequest} LookupNextDemoRecordRequest
                 */
                LookupNextDemoRecordRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.demo.services.grpc.LookupNextDemoRecordRequest)
                        return object;
                    var message = new $root.demo.services.grpc.LookupNextDemoRecordRequest();
                    if (object.userId != null)
                        if ($util.Long)
                            (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                        else if (typeof object.userId === "string")
                            message.userId = parseInt(object.userId, 10);
                        else if (typeof object.userId === "number")
                            message.userId = object.userId;
                        else if (typeof object.userId === "object")
                            message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
                    if (object.lookupLang != null)
                        if ($util.Long)
                            (message.lookupLang = $util.Long.fromValue(object.lookupLang)).unsigned = true;
                        else if (typeof object.lookupLang === "string")
                            message.lookupLang = parseInt(object.lookupLang, 10);
                        else if (typeof object.lookupLang === "number")
                            message.lookupLang = object.lookupLang;
                        else if (typeof object.lookupLang === "object")
                            message.lookupLang = new $util.LongBits(object.lookupLang.low >>> 0, object.lookupLang.high >>> 0).toNumber(true);
                    return message;
                };

                /**
                 * Creates a LookupNextDemoRecordRequest message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.LookupNextDemoRecordRequest.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.LookupNextDemoRecordRequest} LookupNextDemoRecordRequest
                 */
                LookupNextDemoRecordRequest.from = LookupNextDemoRecordRequest.fromObject;

                /**
                 * Creates a plain object from a LookupNextDemoRecordRequest message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.LookupNextDemoRecordRequest} message LookupNextDemoRecordRequest
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LookupNextDemoRecordRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.userId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.lookupLang = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.lookupLang = options.longs === String ? "0" : 0;
                    }
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        if (typeof message.userId === "number")
                            object.userId = options.longs === String ? String(message.userId) : message.userId;
                        else
                            object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                    if (message.lookupLang != null && message.hasOwnProperty("lookupLang"))
                        if (typeof message.lookupLang === "number")
                            object.lookupLang = options.longs === String ? String(message.lookupLang) : message.lookupLang;
                        else
                            object.lookupLang = options.longs === String ? $util.Long.prototype.toString.call(message.lookupLang) : options.longs === Number ? new $util.LongBits(message.lookupLang.low >>> 0, message.lookupLang.high >>> 0).toNumber(true) : message.lookupLang;
                    return object;
                };

                /**
                 * Creates a plain object from this LookupNextDemoRecordRequest message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LookupNextDemoRecordRequest.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this LookupNextDemoRecordRequest to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                LookupNextDemoRecordRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return LookupNextDemoRecordRequest;
            })();

            grpc.GetDemoRecordsMetadataListRequest = (function() {

                /**
                 * Properties of a GetDemoRecordsMetadataListRequest.
                 * @typedef demo.services.grpc.GetDemoRecordsMetadataListRequest$Properties
                 * @type {Object}
                 * @property {number|Long} [skip] GetDemoRecordsMetadataListRequest skip.
                 * @property {number} [limit] GetDemoRecordsMetadataListRequest limit.
                 */

                /**
                 * Constructs a new GetDemoRecordsMetadataListRequest.
                 * @exports demo.services.grpc.GetDemoRecordsMetadataListRequest
                 * @constructor
                 * @param {demo.services.grpc.GetDemoRecordsMetadataListRequest$Properties=} [properties] Properties to set
                 */
                function GetDemoRecordsMetadataListRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetDemoRecordsMetadataListRequest skip.
                 * @type {number|Long}
                 */
                GetDemoRecordsMetadataListRequest.prototype.skip = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * GetDemoRecordsMetadataListRequest limit.
                 * @type {number}
                 */
                GetDemoRecordsMetadataListRequest.prototype.limit = 0;

                /**
                 * Creates a new GetDemoRecordsMetadataListRequest instance using the specified properties.
                 * @param {demo.services.grpc.GetDemoRecordsMetadataListRequest$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.GetDemoRecordsMetadataListRequest} GetDemoRecordsMetadataListRequest instance
                 */
                GetDemoRecordsMetadataListRequest.create = function create(properties) {
                    return new GetDemoRecordsMetadataListRequest(properties);
                };

                /**
                 * Encodes the specified GetDemoRecordsMetadataListRequest message. Does not implicitly {@link demo.services.grpc.GetDemoRecordsMetadataListRequest.verify|verify} messages.
                 * @param {demo.services.grpc.GetDemoRecordsMetadataListRequest$Properties} message GetDemoRecordsMetadataListRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetDemoRecordsMetadataListRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.skip != null && message.hasOwnProperty("skip"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.skip);
                    if (message.limit != null && message.hasOwnProperty("limit"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.limit);
                    return writer;
                };

                /**
                 * Encodes the specified GetDemoRecordsMetadataListRequest message, length delimited. Does not implicitly {@link demo.services.grpc.GetDemoRecordsMetadataListRequest.verify|verify} messages.
                 * @param {demo.services.grpc.GetDemoRecordsMetadataListRequest$Properties} message GetDemoRecordsMetadataListRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetDemoRecordsMetadataListRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetDemoRecordsMetadataListRequest message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.GetDemoRecordsMetadataListRequest} GetDemoRecordsMetadataListRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetDemoRecordsMetadataListRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.demo.services.grpc.GetDemoRecordsMetadataListRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.skip = reader.uint64();
                            break;
                        case 2:
                            message.limit = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetDemoRecordsMetadataListRequest message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.GetDemoRecordsMetadataListRequest} GetDemoRecordsMetadataListRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetDemoRecordsMetadataListRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetDemoRecordsMetadataListRequest message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                GetDemoRecordsMetadataListRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.skip != null && message.hasOwnProperty("skip"))
                        if (!$util.isInteger(message.skip) && !(message.skip && $util.isInteger(message.skip.low) && $util.isInteger(message.skip.high)))
                            return "skip: integer|Long expected";
                    if (message.limit != null && message.hasOwnProperty("limit"))
                        if (!$util.isInteger(message.limit))
                            return "limit: integer expected";
                    return null;
                };

                /**
                 * Creates a GetDemoRecordsMetadataListRequest message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.GetDemoRecordsMetadataListRequest} GetDemoRecordsMetadataListRequest
                 */
                GetDemoRecordsMetadataListRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.demo.services.grpc.GetDemoRecordsMetadataListRequest)
                        return object;
                    var message = new $root.demo.services.grpc.GetDemoRecordsMetadataListRequest();
                    if (object.skip != null)
                        if ($util.Long)
                            (message.skip = $util.Long.fromValue(object.skip)).unsigned = true;
                        else if (typeof object.skip === "string")
                            message.skip = parseInt(object.skip, 10);
                        else if (typeof object.skip === "number")
                            message.skip = object.skip;
                        else if (typeof object.skip === "object")
                            message.skip = new $util.LongBits(object.skip.low >>> 0, object.skip.high >>> 0).toNumber(true);
                    if (object.limit != null)
                        message.limit = object.limit >>> 0;
                    return message;
                };

                /**
                 * Creates a GetDemoRecordsMetadataListRequest message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.GetDemoRecordsMetadataListRequest.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.GetDemoRecordsMetadataListRequest} GetDemoRecordsMetadataListRequest
                 */
                GetDemoRecordsMetadataListRequest.from = GetDemoRecordsMetadataListRequest.fromObject;

                /**
                 * Creates a plain object from a GetDemoRecordsMetadataListRequest message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.GetDemoRecordsMetadataListRequest} message GetDemoRecordsMetadataListRequest
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetDemoRecordsMetadataListRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.skip = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.skip = options.longs === String ? "0" : 0;
                        object.limit = 0;
                    }
                    if (message.skip != null && message.hasOwnProperty("skip"))
                        if (typeof message.skip === "number")
                            object.skip = options.longs === String ? String(message.skip) : message.skip;
                        else
                            object.skip = options.longs === String ? $util.Long.prototype.toString.call(message.skip) : options.longs === Number ? new $util.LongBits(message.skip.low >>> 0, message.skip.high >>> 0).toNumber(true) : message.skip;
                    if (message.limit != null && message.hasOwnProperty("limit"))
                        object.limit = message.limit;
                    return object;
                };

                /**
                 * Creates a plain object from this GetDemoRecordsMetadataListRequest message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetDemoRecordsMetadataListRequest.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this GetDemoRecordsMetadataListRequest to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                GetDemoRecordsMetadataListRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetDemoRecordsMetadataListRequest;
            })();

            grpc.GetMetadataContentRequest = (function() {

                /**
                 * Properties of a GetMetadataContentRequest.
                 * @typedef demo.services.grpc.GetMetadataContentRequest$Properties
                 * @type {Object}
                 * @property {number|Long} [recordId] GetMetadataContentRequest recordId.
                 */

                /**
                 * Constructs a new GetMetadataContentRequest.
                 * @exports demo.services.grpc.GetMetadataContentRequest
                 * @constructor
                 * @param {demo.services.grpc.GetMetadataContentRequest$Properties=} [properties] Properties to set
                 */
                function GetMetadataContentRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetMetadataContentRequest recordId.
                 * @type {number|Long}
                 */
                GetMetadataContentRequest.prototype.recordId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Creates a new GetMetadataContentRequest instance using the specified properties.
                 * @param {demo.services.grpc.GetMetadataContentRequest$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.GetMetadataContentRequest} GetMetadataContentRequest instance
                 */
                GetMetadataContentRequest.create = function create(properties) {
                    return new GetMetadataContentRequest(properties);
                };

                /**
                 * Encodes the specified GetMetadataContentRequest message. Does not implicitly {@link demo.services.grpc.GetMetadataContentRequest.verify|verify} messages.
                 * @param {demo.services.grpc.GetMetadataContentRequest$Properties} message GetMetadataContentRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetMetadataContentRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.recordId != null && message.hasOwnProperty("recordId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.recordId);
                    return writer;
                };

                /**
                 * Encodes the specified GetMetadataContentRequest message, length delimited. Does not implicitly {@link demo.services.grpc.GetMetadataContentRequest.verify|verify} messages.
                 * @param {demo.services.grpc.GetMetadataContentRequest$Properties} message GetMetadataContentRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetMetadataContentRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetMetadataContentRequest message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.GetMetadataContentRequest} GetMetadataContentRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetMetadataContentRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.demo.services.grpc.GetMetadataContentRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.recordId = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetMetadataContentRequest message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.GetMetadataContentRequest} GetMetadataContentRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetMetadataContentRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetMetadataContentRequest message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                GetMetadataContentRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.recordId != null && message.hasOwnProperty("recordId"))
                        if (!$util.isInteger(message.recordId) && !(message.recordId && $util.isInteger(message.recordId.low) && $util.isInteger(message.recordId.high)))
                            return "recordId: integer|Long expected";
                    return null;
                };

                /**
                 * Creates a GetMetadataContentRequest message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.GetMetadataContentRequest} GetMetadataContentRequest
                 */
                GetMetadataContentRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.demo.services.grpc.GetMetadataContentRequest)
                        return object;
                    var message = new $root.demo.services.grpc.GetMetadataContentRequest();
                    if (object.recordId != null)
                        if ($util.Long)
                            (message.recordId = $util.Long.fromValue(object.recordId)).unsigned = false;
                        else if (typeof object.recordId === "string")
                            message.recordId = parseInt(object.recordId, 10);
                        else if (typeof object.recordId === "number")
                            message.recordId = object.recordId;
                        else if (typeof object.recordId === "object")
                            message.recordId = new $util.LongBits(object.recordId.low >>> 0, object.recordId.high >>> 0).toNumber();
                    return message;
                };

                /**
                 * Creates a GetMetadataContentRequest message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.GetMetadataContentRequest.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.GetMetadataContentRequest} GetMetadataContentRequest
                 */
                GetMetadataContentRequest.from = GetMetadataContentRequest.fromObject;

                /**
                 * Creates a plain object from a GetMetadataContentRequest message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.GetMetadataContentRequest} message GetMetadataContentRequest
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetMetadataContentRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.recordId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.recordId = options.longs === String ? "0" : 0;
                    if (message.recordId != null && message.hasOwnProperty("recordId"))
                        if (typeof message.recordId === "number")
                            object.recordId = options.longs === String ? String(message.recordId) : message.recordId;
                        else
                            object.recordId = options.longs === String ? $util.Long.prototype.toString.call(message.recordId) : options.longs === Number ? new $util.LongBits(message.recordId.low >>> 0, message.recordId.high >>> 0).toNumber() : message.recordId;
                    return object;
                };

                /**
                 * Creates a plain object from this GetMetadataContentRequest message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetMetadataContentRequest.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this GetMetadataContentRequest to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                GetMetadataContentRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetMetadataContentRequest;
            })();

            grpc.InsertInterimRequest = (function() {

                /**
                 * Properties of an InsertInterimRequest.
                 * @typedef demo.services.grpc.InsertInterimRequest$Properties
                 * @type {Object}
                 * @property {number|Long} [userId] InsertInterimRequest userId.
                 * @property {number|Long} [recordId] InsertInterimRequest recordId.
                 * @property {demo.services.grpc.DemoContent$Properties} [data] InsertInterimRequest data.
                 */

                /**
                 * Constructs a new InsertInterimRequest.
                 * @exports demo.services.grpc.InsertInterimRequest
                 * @constructor
                 * @param {demo.services.grpc.InsertInterimRequest$Properties=} [properties] Properties to set
                 */
                function InsertInterimRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * InsertInterimRequest userId.
                 * @type {number|Long}
                 */
                InsertInterimRequest.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * InsertInterimRequest recordId.
                 * @type {number|Long}
                 */
                InsertInterimRequest.prototype.recordId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * InsertInterimRequest data.
                 * @type {(demo.services.grpc.DemoContent$Properties|null)}
                 */
                InsertInterimRequest.prototype.data = null;

                /**
                 * Creates a new InsertInterimRequest instance using the specified properties.
                 * @param {demo.services.grpc.InsertInterimRequest$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.InsertInterimRequest} InsertInterimRequest instance
                 */
                InsertInterimRequest.create = function create(properties) {
                    return new InsertInterimRequest(properties);
                };

                /**
                 * Encodes the specified InsertInterimRequest message. Does not implicitly {@link demo.services.grpc.InsertInterimRequest.verify|verify} messages.
                 * @param {demo.services.grpc.InsertInterimRequest$Properties} message InsertInterimRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                InsertInterimRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                    if (message.recordId != null && message.hasOwnProperty("recordId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.recordId);
                    if (message.data != null && message.hasOwnProperty("data"))
                        $root.demo.services.grpc.DemoContent.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified InsertInterimRequest message, length delimited. Does not implicitly {@link demo.services.grpc.InsertInterimRequest.verify|verify} messages.
                 * @param {demo.services.grpc.InsertInterimRequest$Properties} message InsertInterimRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                InsertInterimRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an InsertInterimRequest message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.InsertInterimRequest} InsertInterimRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                InsertInterimRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.demo.services.grpc.InsertInterimRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.userId = reader.int64();
                            break;
                        case 2:
                            message.recordId = reader.int64();
                            break;
                        case 3:
                            message.data = $root.demo.services.grpc.DemoContent.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an InsertInterimRequest message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.InsertInterimRequest} InsertInterimRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                InsertInterimRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an InsertInterimRequest message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                InsertInterimRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                            return "userId: integer|Long expected";
                    if (message.recordId != null && message.hasOwnProperty("recordId"))
                        if (!$util.isInteger(message.recordId) && !(message.recordId && $util.isInteger(message.recordId.low) && $util.isInteger(message.recordId.high)))
                            return "recordId: integer|Long expected";
                    if (message.data != null && message.hasOwnProperty("data")) {
                        var error = $root.demo.services.grpc.DemoContent.verify(message.data);
                        if (error)
                            return "data." + error;
                    }
                    return null;
                };

                /**
                 * Creates an InsertInterimRequest message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.InsertInterimRequest} InsertInterimRequest
                 */
                InsertInterimRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.demo.services.grpc.InsertInterimRequest)
                        return object;
                    var message = new $root.demo.services.grpc.InsertInterimRequest();
                    if (object.userId != null)
                        if ($util.Long)
                            (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                        else if (typeof object.userId === "string")
                            message.userId = parseInt(object.userId, 10);
                        else if (typeof object.userId === "number")
                            message.userId = object.userId;
                        else if (typeof object.userId === "object")
                            message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
                    if (object.recordId != null)
                        if ($util.Long)
                            (message.recordId = $util.Long.fromValue(object.recordId)).unsigned = false;
                        else if (typeof object.recordId === "string")
                            message.recordId = parseInt(object.recordId, 10);
                        else if (typeof object.recordId === "number")
                            message.recordId = object.recordId;
                        else if (typeof object.recordId === "object")
                            message.recordId = new $util.LongBits(object.recordId.low >>> 0, object.recordId.high >>> 0).toNumber();
                    if (object.data != null) {
                        if (typeof object.data !== "object")
                            throw TypeError(".demo.services.grpc.InsertInterimRequest.data: object expected");
                        message.data = $root.demo.services.grpc.DemoContent.fromObject(object.data);
                    }
                    return message;
                };

                /**
                 * Creates an InsertInterimRequest message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.InsertInterimRequest.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.InsertInterimRequest} InsertInterimRequest
                 */
                InsertInterimRequest.from = InsertInterimRequest.fromObject;

                /**
                 * Creates a plain object from an InsertInterimRequest message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.InsertInterimRequest} message InsertInterimRequest
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                InsertInterimRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.userId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.recordId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.recordId = options.longs === String ? "0" : 0;
                        object.data = null;
                    }
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        if (typeof message.userId === "number")
                            object.userId = options.longs === String ? String(message.userId) : message.userId;
                        else
                            object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                    if (message.recordId != null && message.hasOwnProperty("recordId"))
                        if (typeof message.recordId === "number")
                            object.recordId = options.longs === String ? String(message.recordId) : message.recordId;
                        else
                            object.recordId = options.longs === String ? $util.Long.prototype.toString.call(message.recordId) : options.longs === Number ? new $util.LongBits(message.recordId.low >>> 0, message.recordId.high >>> 0).toNumber() : message.recordId;
                    if (message.data != null && message.hasOwnProperty("data"))
                        object.data = $root.demo.services.grpc.DemoContent.toObject(message.data, options);
                    return object;
                };

                /**
                 * Creates a plain object from this InsertInterimRequest message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                InsertInterimRequest.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this InsertInterimRequest to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                InsertInterimRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return InsertInterimRequest;
            })();

            grpc.RemoveLockRequest = (function() {

                /**
                 * Properties of a RemoveLockRequest.
                 * @typedef demo.services.grpc.RemoveLockRequest$Properties
                 * @type {Object}
                 * @property {number|Long} [userId] RemoveLockRequest userId.
                 * @property {number|Long} [recordId] RemoveLockRequest recordId.
                 */

                /**
                 * Constructs a new RemoveLockRequest.
                 * @exports demo.services.grpc.RemoveLockRequest
                 * @constructor
                 * @param {demo.services.grpc.RemoveLockRequest$Properties=} [properties] Properties to set
                 */
                function RemoveLockRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RemoveLockRequest userId.
                 * @type {number|Long}
                 */
                RemoveLockRequest.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * RemoveLockRequest recordId.
                 * @type {number|Long}
                 */
                RemoveLockRequest.prototype.recordId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Creates a new RemoveLockRequest instance using the specified properties.
                 * @param {demo.services.grpc.RemoveLockRequest$Properties=} [properties] Properties to set
                 * @returns {demo.services.grpc.RemoveLockRequest} RemoveLockRequest instance
                 */
                RemoveLockRequest.create = function create(properties) {
                    return new RemoveLockRequest(properties);
                };

                /**
                 * Encodes the specified RemoveLockRequest message. Does not implicitly {@link demo.services.grpc.RemoveLockRequest.verify|verify} messages.
                 * @param {demo.services.grpc.RemoveLockRequest$Properties} message RemoveLockRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RemoveLockRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
                    if (message.recordId != null && message.hasOwnProperty("recordId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.recordId);
                    return writer;
                };

                /**
                 * Encodes the specified RemoveLockRequest message, length delimited. Does not implicitly {@link demo.services.grpc.RemoveLockRequest.verify|verify} messages.
                 * @param {demo.services.grpc.RemoveLockRequest$Properties} message RemoveLockRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RemoveLockRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RemoveLockRequest message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {demo.services.grpc.RemoveLockRequest} RemoveLockRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RemoveLockRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.demo.services.grpc.RemoveLockRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.userId = reader.int64();
                            break;
                        case 2:
                            message.recordId = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RemoveLockRequest message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {demo.services.grpc.RemoveLockRequest} RemoveLockRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RemoveLockRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RemoveLockRequest message.
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                RemoveLockRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                            return "userId: integer|Long expected";
                    if (message.recordId != null && message.hasOwnProperty("recordId"))
                        if (!$util.isInteger(message.recordId) && !(message.recordId && $util.isInteger(message.recordId.low) && $util.isInteger(message.recordId.high)))
                            return "recordId: integer|Long expected";
                    return null;
                };

                /**
                 * Creates a RemoveLockRequest message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.RemoveLockRequest} RemoveLockRequest
                 */
                RemoveLockRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.demo.services.grpc.RemoveLockRequest)
                        return object;
                    var message = new $root.demo.services.grpc.RemoveLockRequest();
                    if (object.userId != null)
                        if ($util.Long)
                            (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                        else if (typeof object.userId === "string")
                            message.userId = parseInt(object.userId, 10);
                        else if (typeof object.userId === "number")
                            message.userId = object.userId;
                        else if (typeof object.userId === "object")
                            message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
                    if (object.recordId != null)
                        if ($util.Long)
                            (message.recordId = $util.Long.fromValue(object.recordId)).unsigned = false;
                        else if (typeof object.recordId === "string")
                            message.recordId = parseInt(object.recordId, 10);
                        else if (typeof object.recordId === "number")
                            message.recordId = object.recordId;
                        else if (typeof object.recordId === "object")
                            message.recordId = new $util.LongBits(object.recordId.low >>> 0, object.recordId.high >>> 0).toNumber();
                    return message;
                };

                /**
                 * Creates a RemoveLockRequest message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link demo.services.grpc.RemoveLockRequest.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {demo.services.grpc.RemoveLockRequest} RemoveLockRequest
                 */
                RemoveLockRequest.from = RemoveLockRequest.fromObject;

                /**
                 * Creates a plain object from a RemoveLockRequest message. Also converts values to other types if specified.
                 * @param {demo.services.grpc.RemoveLockRequest} message RemoveLockRequest
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RemoveLockRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.userId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.recordId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.recordId = options.longs === String ? "0" : 0;
                    }
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        if (typeof message.userId === "number")
                            object.userId = options.longs === String ? String(message.userId) : message.userId;
                        else
                            object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
                    if (message.recordId != null && message.hasOwnProperty("recordId"))
                        if (typeof message.recordId === "number")
                            object.recordId = options.longs === String ? String(message.recordId) : message.recordId;
                        else
                            object.recordId = options.longs === String ? $util.Long.prototype.toString.call(message.recordId) : options.longs === Number ? new $util.LongBits(message.recordId.low >>> 0, message.recordId.high >>> 0).toNumber() : message.recordId;
                    return object;
                };

                /**
                 * Creates a plain object from this RemoveLockRequest message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RemoveLockRequest.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };

                /**
                 * Converts this RemoveLockRequest to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                RemoveLockRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return RemoveLockRequest;
            })();

            grpc.DemoManagement = (function() {

                /**
                 * Constructs a new DemoManagement service.
                 * @exports demo.services.grpc.DemoManagement
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function DemoManagement(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (DemoManagement.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = DemoManagement;

                /**
                 * Creates new DemoManagement service using the specified rpc implementation.
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {DemoManagement} RPC service. Useful where requests and/or responses are streamed.
                 */
                DemoManagement.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link DemoManagement#insertDemoRecord}.
                 * @typedef DemoManagement_insertDemoRecord_Callback
                 * @type {function}
                 * @param {?Error} error Error, if any
                 * @param {demo.services.grpc.Void} [response] Void
                 */

                /**
                 * DemoRecord's related methods
                 * @param {demo.services.grpc.DemoRecord|Object.<string,*>} request DemoRecord message or plain object
                 * @param {DemoManagement_insertDemoRecord_Callback} callback Node-style callback called with the error, if any, and Void
                 * @returns {undefined}
                 */
                DemoManagement.prototype.insertDemoRecord = function insertDemoRecord(request, callback) {
                    return this.rpcCall(insertDemoRecord, $root.demo.services.grpc.DemoRecord, $root.demo.services.grpc.Void, request, callback);
                };

                /**
                 * DemoRecord's related methods
                 * @name DemoManagement#insertDemoRecord
                 * @function
                 * @param {demo.services.grpc.DemoRecord|Object.<string,*>} request DemoRecord message or plain object
                 * @returns {Promise<demo.services.grpc.Void>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link DemoManagement#getRecordMetadataList}.
                 * @typedef DemoManagement_getRecordMetadataList_Callback
                 * @type {function}
                 * @param {?Error} error Error, if any
                 * @param {demo.services.grpc.DemoRecordMetadataSequence} [response] DemoRecordMetadataSequence
                 */

                /**
                 * Calls GetRecordMetadataList.
                 * @param {demo.services.grpc.GetDemoRecordsMetadataListRequest|Object.<string,*>} request GetDemoRecordsMetadataListRequest message or plain object
                 * @param {DemoManagement_getRecordMetadataList_Callback} callback Node-style callback called with the error, if any, and DemoRecordMetadataSequence
                 * @returns {undefined}
                 */
                DemoManagement.prototype.getRecordMetadataList = function getRecordMetadataList(request, callback) {
                    return this.rpcCall(getRecordMetadataList, $root.demo.services.grpc.GetDemoRecordsMetadataListRequest, $root.demo.services.grpc.DemoRecordMetadataSequence, request, callback);
                };

                /**
                 * Calls GetRecordMetadataList.
                 * @name DemoManagement#getRecordMetadataList
                 * @function
                 * @param {demo.services.grpc.GetDemoRecordsMetadataListRequest|Object.<string,*>} request GetDemoRecordsMetadataListRequest message or plain object
                 * @returns {Promise<demo.services.grpc.DemoRecordMetadataSequence>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link DemoManagement#lookupNextDemoRecord}.
                 * @typedef DemoManagement_lookupNextDemoRecord_Callback
                 * @type {function}
                 * @param {?Error} error Error, if any
                 * @param {demo.services.grpc.DemoRecord} [response] DemoRecord
                 */

                /**
                 * Calls LookupNextDemoRecord.
                 * @param {demo.services.grpc.LookupNextDemoRecordRequest|Object.<string,*>} request LookupNextDemoRecordRequest message or plain object
                 * @param {DemoManagement_lookupNextDemoRecord_Callback} callback Node-style callback called with the error, if any, and DemoRecord
                 * @returns {undefined}
                 */
                DemoManagement.prototype.lookupNextDemoRecord = function lookupNextDemoRecord(request, callback) {
                    return this.rpcCall(lookupNextDemoRecord, $root.demo.services.grpc.LookupNextDemoRecordRequest, $root.demo.services.grpc.DemoRecord, request, callback);
                };

                /**
                 * Calls LookupNextDemoRecord.
                 * @name DemoManagement#lookupNextDemoRecord
                 * @function
                 * @param {demo.services.grpc.LookupNextDemoRecordRequest|Object.<string,*>} request LookupNextDemoRecordRequest message or plain object
                 * @returns {Promise<demo.services.grpc.DemoRecord>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link DemoManagement#insertInterim}.
                 * @typedef DemoManagement_insertInterim_Callback
                 * @type {function}
                 * @param {?Error} error Error, if any
                 * @param {demo.services.grpc.Void} [response] Void
                 */

                /**
                 * Interim's related methods
                 * @param {demo.services.grpc.InsertInterimRequest|Object.<string,*>} request InsertInterimRequest message or plain object
                 * @param {DemoManagement_insertInterim_Callback} callback Node-style callback called with the error, if any, and Void
                 * @returns {undefined}
                 */
                DemoManagement.prototype.insertInterim = function insertInterim(request, callback) {
                    return this.rpcCall(insertInterim, $root.demo.services.grpc.InsertInterimRequest, $root.demo.services.grpc.Void, request, callback);
                };

                /**
                 * Interim's related methods
                 * @name DemoManagement#insertInterim
                 * @function
                 * @param {demo.services.grpc.InsertInterimRequest|Object.<string,*>} request InsertInterimRequest message or plain object
                 * @returns {Promise<demo.services.grpc.Void>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link DemoManagement#removeLock}.
                 * @typedef DemoManagement_removeLock_Callback
                 * @type {function}
                 * @param {?Error} error Error, if any
                 * @param {demo.services.grpc.Void} [response] Void
                 */

                /**
                 * Calls RemoveLock.
                 * @param {demo.services.grpc.RemoveLockRequest|Object.<string,*>} request RemoveLockRequest message or plain object
                 * @param {DemoManagement_removeLock_Callback} callback Node-style callback called with the error, if any, and Void
                 * @returns {undefined}
                 */
                DemoManagement.prototype.removeLock = function removeLock(request, callback) {
                    return this.rpcCall(removeLock, $root.demo.services.grpc.RemoveLockRequest, $root.demo.services.grpc.Void, request, callback);
                };

                /**
                 * Calls RemoveLock.
                 * @name DemoManagement#removeLock
                 * @function
                 * @param {demo.services.grpc.RemoveLockRequest|Object.<string,*>} request RemoveLockRequest message or plain object
                 * @returns {Promise<demo.services.grpc.Void>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link DemoManagement#getMetadataContent}.
                 * @typedef DemoManagement_getMetadataContent_Callback
                 * @type {function}
                 * @param {?Error} error Error, if any
                 * @param {demo.services.grpc.MetadataContent} [response] MetadataContent
                 */

                /**
                 * Calls GetMetadataContent.
                 * @param {demo.services.grpc.GetMetadataContentRequest|Object.<string,*>} request GetMetadataContentRequest message or plain object
                 * @param {DemoManagement_getMetadataContent_Callback} callback Node-style callback called with the error, if any, and MetadataContent
                 * @returns {undefined}
                 */
                DemoManagement.prototype.getMetadataContent = function getMetadataContent(request, callback) {
                    return this.rpcCall(getMetadataContent, $root.demo.services.grpc.GetMetadataContentRequest, $root.demo.services.grpc.MetadataContent, request, callback);
                };

                /**
                 * Calls GetMetadataContent.
                 * @name DemoManagement#getMetadataContent
                 * @function
                 * @param {demo.services.grpc.GetMetadataContentRequest|Object.<string,*>} request GetMetadataContentRequest message or plain object
                 * @returns {Promise<demo.services.grpc.MetadataContent>} Promise
                 * @variation 2
                 */

                return DemoManagement;
            })();

            return grpc;
        })();

        return services;
    })();

    return demo;
})();

module.exports = $root;
