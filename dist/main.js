/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CONFIG_HOST = exports.CONFIG_SERVICE = exports.GLOBAL_PREFIX = void 0;
const core_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
const config_1 = __webpack_require__(9);
exports.GLOBAL_PREFIX = 'api';
exports.CONFIG_SERVICE = 'app.port';
exports.CONFIG_HOST = 'app.host';
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix(exports.GLOBAL_PREFIX);
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.enableCors({
        origin: ['http://localhost:5173', 'http://127.0.0.1:3014', 'http://leonica.ru', 'https://leonica.ru'],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
    const configService = app.get(config_1.ConfigService);
    const port = configService.get(exports.CONFIG_SERVICE);
    const host = configService.get(exports.CONFIG_HOST);
    await app.listen(port ?? 3000, host);
    common_1.Logger.log(`🚀 Application is running on: http://${host}:${port}/${exports.GLOBAL_PREFIX}`);
}
bootstrap();


/***/ }),
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(2);
const mongoose_1 = __webpack_require__(4);
const health_module_1 = __webpack_require__(5);
const authentication_module_1 = __webpack_require__(7);
const user_module_1 = __webpack_require__(10);
const cat_module_1 = __webpack_require__(72);
const detail_module_1 = __webpack_require__(81);
const config_module_1 = __webpack_require__(86);
const get_mongoose_options_1 = __webpack_require__(87);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            health_module_1.HealthModule,
            user_module_1.UserModule,
            authentication_module_1.AuthenticationModule,
            config_module_1.ConfigAppModule,
            cat_module_1.CatModule,
            detail_module_1.DetailModule,
            mongoose_1.MongooseModule.forRootAsync((0, get_mongoose_options_1.getMongooseOptions)())
        ],
        controllers: [],
        providers: [],
    })
], AppModule);


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HealthModule = void 0;
const common_1 = __webpack_require__(2);
const health_controller_1 = __webpack_require__(6);
let HealthModule = class HealthModule {
};
exports.HealthModule = HealthModule;
exports.HealthModule = HealthModule = __decorate([
    (0, common_1.Module)({
        controllers: [health_controller_1.HealthController],
        providers: [],
        exports: [],
    })
], HealthModule);


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HealthController = void 0;
const common_1 = __webpack_require__(2);
let HealthController = class HealthController {
    async healthCheck() {
        try {
            return { status: 'OK' };
        }
        catch (error) {
            throw new common_1.HttpException('Internal Server Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.HealthController = HealthController;
__decorate([
    (0, common_1.Get)('res'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthController.prototype, "healthCheck", null);
exports.HealthController = HealthController = __decorate([
    (0, common_1.Controller)('health')
], HealthController);


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticationModule = void 0;
const common_1 = __webpack_require__(2);
const jwt_1 = __webpack_require__(8);
const config_1 = __webpack_require__(9);
const user_module_1 = __webpack_require__(10);
const notifi_module_1 = __webpack_require__(32);
const refresh_token_module_1 = __webpack_require__(39);
const authentication_controller_1 = __webpack_require__(59);
const authentication_service_1 = __webpack_require__(60);
const get_jwt_options_1 = __webpack_require__(65);
const jwt_access_strategy_1 = __webpack_require__(66);
const local_strategy_1 = __webpack_require__(68);
const jwt_refresh_strategy_1 = __webpack_require__(70);
let AuthenticationModule = class AuthenticationModule {
};
exports.AuthenticationModule = AuthenticationModule;
exports.AuthenticationModule = AuthenticationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            notifi_module_1.NotifyModule,
            jwt_1.JwtModule.registerAsync({
                inject: [config_1.ConfigService],
                useFactory: get_jwt_options_1.getJwtOptions,
            }),
            refresh_token_module_1.RefreshTokenModule
        ],
        controllers: [authentication_controller_1.AuthenticationController],
        providers: [authentication_service_1.AuthenticationService, jwt_access_strategy_1.JwtAccessStrategy, local_strategy_1.LocalStrategy, jwt_refresh_strategy_1.JwtRefreshStrategy],
        exports: [authentication_service_1.AuthenticationService],
    })
], AuthenticationModule);


/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(2);
const mongoose_1 = __webpack_require__(4);
const user_controller_1 = __webpack_require__(11);
const user_repository_1 = __webpack_require__(12);
const user_factory_1 = __webpack_require__(31);
const user_model_1 = __webpack_require__(27);
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([
                { name: user_model_1.UserModel.name, schema: user_model_1.UserSchema }
            ])],
        controllers: [user_controller_1.UserController],
        providers: [user_repository_1.UserRepository, user_factory_1.UserFactory],
        exports: [user_repository_1.UserRepository],
    })
], UserModule);


/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const common_1 = __webpack_require__(2);
const user_repository_1 = __webpack_require__(12);
const user_rdo_1 = __webpack_require__(28);
const common_2 = __webpack_require__(30);
let UserController = class UserController {
    userServiceRepository;
    constructor(userServiceRepository) {
        this.userServiceRepository = userServiceRepository;
    }
    async show(email) {
        const user = await this.userServiceRepository.findByEmail(email);
        return user && (0, common_2.fillDto)(user_rdo_1.UserRdo, user.toPOJO());
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(':email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "show", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [typeof (_a = typeof user_repository_1.UserRepository !== "undefined" && user_repository_1.UserRepository) === "function" ? _a : Object])
], UserController);


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRepository = void 0;
const common_1 = __webpack_require__(2);
const mongoose_1 = __webpack_require__(4);
const mongoose_2 = __webpack_require__(13);
const base_mongo_user_repository_1 = __webpack_require__(14);
const user_model_1 = __webpack_require__(27);
let UserRepository = class UserRepository extends base_mongo_user_repository_1.BaseMongoUserRepository {
    constructor(userModel) {
        super(userModel);
    }
    async findByEmail(email) {
        const document = await this.model.findOne({ email }).exec();
        if (!document) {
            return null;
        }
        ;
        return this.createEntityFromDocument(document);
    }
    async findByToken(token) {
        const document = await this.model.findOne({ activationToken: token }).exec();
        if (!document) {
            return null;
        }
        ;
        return this.createEntityFromDocument(document);
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_model_1.UserModel.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], UserRepository);


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseMongoUserRepository = void 0;
const common_1 = __webpack_require__(2);
const user_entity_1 = __webpack_require__(15);
const mongoose_1 = __importDefault(__webpack_require__(13));
class BaseMongoUserRepository {
    model;
    constructor(model) {
        this.model = model;
    }
    createEntityFromDocument(document) {
        if (!document) {
            return null;
        }
        const plainObject = document.toObject({ getters: true, versionKey: false, flattenObjectIds: true });
        return new user_entity_1.UserEntity(plainObject);
    }
    async findById(_id) {
        const document = await this.model.findById(_id).exec();
        if (!document) {
            throw new common_1.NotFoundException(`Document with id ${_id} not found`);
        }
        return this.createEntityFromDocument(document);
    }
    async save(entity) {
        await new this.model(entity.toPOJO()).save();
    }
    async update(entity) {
        if (!mongoose_1.default.Types.ObjectId.isValid(entity._id)) {
            throw new Error('Invalid _id');
        }
        const updatedDocument = await this.model.findByIdAndUpdate(entity._id, entity.toPOJO(), { new: true });
        if (!updatedDocument) {
            throw new common_1.NotFoundException(`Document with id ${entity._id} not found`);
        }
    }
    async deleteById(_id) {
        const deletedDocument = await this.model.findByIdAndDelete(_id).exec();
        if (!deletedDocument) {
            throw new common_1.NotFoundException(`Entity with id ${_id} not found.`);
        }
    }
}
exports.BaseMongoUserRepository = BaseMongoUserRepository;


/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserEntity = exports.SALTS = void 0;
const common_1 = __webpack_require__(2);
const bcrypt_1 = __webpack_require__(16);
const uuid_1 = __webpack_require__(17);
const types_1 = __webpack_require__(18);
exports.SALTS = 14;
let UserEntity = class UserEntity {
    _id;
    email;
    name;
    avatar;
    postsCount;
    subscribers;
    subscriptions;
    passwordHash;
    userType;
    isActive;
    activationToken;
    constructor(user) {
        this.populate(user);
    }
    populate(user) {
        if (!user) {
            return;
        }
        this._id = user._id || '';
        this.email = user.email;
        this.name = user.name;
        this.avatar = user.avatar;
        this.passwordHash = user.passwordHash;
        this.postsCount = user.postsCount;
        this.subscribers = user.subscribers || null;
        this.subscriptions = user.subscriptions || null;
        this.isActive = user.isActive || false;
        this.userType = user.userType;
        this.activationToken = user.activationToken || null;
    }
    toPOJO() {
        return {
            _id: this._id,
            email: this.email,
            name: this.name,
            avatar: this.avatar,
            passwordHash: this.passwordHash,
            postsCount: this.postsCount,
            subscribers: this.subscribers,
            subscriptions: this.subscriptions,
            userType: this.userType,
            isActive: this.isActive,
            activationToken: this.activationToken
        };
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    async setPassword(password) {
        const salt = await (0, bcrypt_1.genSalt)(exports.SALTS);
        this.passwordHash = await (0, bcrypt_1.hash)(password, salt);
        await this.setActivationToken();
        return this;
    }
    async comparePassword(password) {
        return (0, bcrypt_1.compare)(password, this.passwordHash);
    }
    async setActivationToken() {
        this.activationToken = (0, uuid_1.v4)();
        if (typeof this.activationToken === 'string') {
            return this.activationToken;
        }
        return null;
    }
};
exports.UserEntity = UserEntity;
exports.UserEntity = UserEntity = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof types_1.User !== "undefined" && types_1.User) === "function" ? _a : Object])
], UserEntity);


/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SortType = exports.UserType = exports.EntityFactory = exports.MongoRepository = exports.RefreshTokenPayload = exports.StorableEntity = exports.RequestWithUser = exports.JwtToken = exports.Token = exports.TokenPayload = void 0;
var token_payload_interface_1 = __webpack_require__(19);
Object.defineProperty(exports, "TokenPayload", ({ enumerable: true, get: function () { return token_payload_interface_1.TokenPayload; } }));
var token_interface_1 = __webpack_require__(20);
Object.defineProperty(exports, "Token", ({ enumerable: true, get: function () { return token_interface_1.Token; } }));
var jwt_token_interface_1 = __webpack_require__(21);
Object.defineProperty(exports, "JwtToken", ({ enumerable: true, get: function () { return jwt_token_interface_1.JwtToken; } }));
var request_with_user_interface_1 = __webpack_require__(22);
Object.defineProperty(exports, "RequestWithUser", ({ enumerable: true, get: function () { return request_with_user_interface_1.RequestWithUser; } }));
var storable_entity_interface_1 = __webpack_require__(23);
Object.defineProperty(exports, "StorableEntity", ({ enumerable: true, get: function () { return storable_entity_interface_1.StorableEntity; } }));
var refresh_token_payload_interface_1 = __webpack_require__(24);
Object.defineProperty(exports, "RefreshTokenPayload", ({ enumerable: true, get: function () { return refresh_token_payload_interface_1.RefreshTokenPayload; } }));
var mongo_repository_interface_1 = __webpack_require__(25);
Object.defineProperty(exports, "MongoRepository", ({ enumerable: true, get: function () { return mongo_repository_interface_1.MongoRepository; } }));
var entity_factory_interface_1 = __webpack_require__(26);
Object.defineProperty(exports, "EntityFactory", ({ enumerable: true, get: function () { return entity_factory_interface_1.EntityFactory; } }));
var UserType;
(function (UserType) {
    UserType["Admin"] = "admin";
    UserType["Regular"] = "regular";
})(UserType || (exports.UserType = UserType = {}));
var SortType;
(function (SortType) {
    SortType[SortType["Down"] = -1] = "Down";
    SortType[SortType["Up"] = 1] = "Up";
})(SortType || (exports.SortType = SortType = {}));


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = exports.UserModel = void 0;
const mongoose_1 = __webpack_require__(13);
const mongoose_2 = __webpack_require__(4);
const index_1 = __webpack_require__(18);
let UserModel = class UserModel extends mongoose_1.Document {
    email;
    name;
    avatar;
    postsCount;
    subscribers;
    subscriptions;
    passwordHash;
    isActive;
    userType;
    activationToken;
};
exports.UserModel = UserModel;
__decorate([
    (0, mongoose_2.Prop)({
        required: true,
        unique: true,
    }),
    __metadata("design:type", String)
], UserModel.prototype, "email", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], UserModel.prototype, "name", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "avatar", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    __metadata("design:type", Number)
], UserModel.prototype, "postsCount", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    __metadata("design:type", Array)
], UserModel.prototype, "subscribers", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    __metadata("design:type", Array)
], UserModel.prototype, "subscriptions", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "passwordHash", void 0);
__decorate([
    (0, mongoose_2.Prop)(),
    __metadata("design:type", Boolean)
], UserModel.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: String, enum: index_1.UserType }),
    __metadata("design:type", typeof (_a = typeof index_1.UserType !== "undefined" && index_1.UserType) === "function" ? _a : Object)
], UserModel.prototype, "userType", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: String, default: null, required: false }),
    __metadata("design:type", Object)
], UserModel.prototype, "activationToken", void 0);
exports.UserModel = UserModel = __decorate([
    (0, mongoose_2.Schema)({
        collection: 'users',
        timestamps: true,
    })
], UserModel);
exports.UserSchema = mongoose_2.SchemaFactory.createForClass(UserModel);


/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRdo = void 0;
const class_transformer_1 = __webpack_require__(29);
class UserRdo {
    _id;
    email;
    name;
    avatar;
    postsCount = 0;
    subscribers;
    subscriptions;
}
exports.UserRdo = UserRdo;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserRdo.prototype, "_id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserRdo.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserRdo.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserRdo.prototype, "avatar", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], UserRdo.prototype, "postsCount", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], UserRdo.prototype, "subscribers", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], UserRdo.prototype, "subscriptions", void 0);


/***/ }),
/* 29 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateRandomValue = generateRandomValue;
exports.getRandomItems = getRandomItems;
exports.getRandomItem = getRandomItem;
exports.fillDto = fillDto;
exports.createJWTPayload = createJWTPayload;
exports.parseTime = parseTime;
const class_transformer_1 = __webpack_require__(29);
function generateRandomValue(min, max, numAfterDigit = 0) {
    return +((Math.random() * (max - min)) + min).toFixed(numAfterDigit);
}
function getRandomItems(items) {
    const startPosition = generateRandomValue(0, items.length - 1);
    const endPosition = startPosition + generateRandomValue(startPosition, items.length);
    return items.slice(startPosition, endPosition);
}
function getRandomItem(items) {
    return items[generateRandomValue(0, items.length - 1)];
}
function fillDto(DtoClass, plainObject, options) {
    return (0, class_transformer_1.plainToInstance)(DtoClass, plainObject, {
        excludeExtraneousValues: true,
        ...options,
    });
}
function createJWTPayload(user) {
    return {
        sub: user._id,
        email: user.email,
        name: user.name,
        userType: user.userType,
    };
}
function parseTime(time) {
    const regex = /^(\d+)([shdmy])/;
    const match = regex.exec(time);
    if (!match) {
        throw new Error(`[parseTime] Bad time string: ${time}`);
    }
    const [, valueRaw, unitRaw] = match;
    const value = parseInt(valueRaw, 10);
    const unit = unitRaw;
    if (isNaN(value)) {
        throw new Error(`[parseTime] Can't parse value count. Result is NaN.`);
    }
    return { value, unit };
}


/***/ }),
/* 31 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserFactory = void 0;
const common_1 = __webpack_require__(2);
const user_entity_1 = __webpack_require__(15);
let UserFactory = class UserFactory {
    create(entityPlainData) {
        return new user_entity_1.UserEntity(entityPlainData);
    }
};
exports.UserFactory = UserFactory;
exports.UserFactory = UserFactory = __decorate([
    (0, common_1.Injectable)()
], UserFactory);


/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotifyModule = void 0;
const common_1 = __webpack_require__(2);
const mailer_1 = __webpack_require__(33);
const path = __importStar(__webpack_require__(34));
const handlebars_adapter_1 = __webpack_require__(35);
const notify_service_1 = __webpack_require__(36);
let NotifyModule = class NotifyModule {
};
exports.NotifyModule = NotifyModule;
exports.NotifyModule = NotifyModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'atlas.multihost.cloud',
                    port: 465,
                    secure: true,
                    auth: {
                        user: 'aqq17953@atlas.multihost.cloud',
                        pass: 'MrdaNEnXQ8J',
                    },
                },
                defaults: {
                    from: '"Cats Activation" <aqq17953@atlas.multihost.cloud>',
                },
                template: {
                    dir: path.join(__dirname, 'assets/templates'),
                    adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                    options: {
                        strict: true,
                    },
                },
            }),
        ],
        controllers: [],
        providers: [notify_service_1.NotifyService],
        exports: [notify_service_1.NotifyService],
    })
], NotifyModule);


/***/ }),
/* 33 */
/***/ ((module) => {

module.exports = require("@nestjs-modules/mailer");

/***/ }),
/* 34 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 35 */
/***/ ((module) => {

module.exports = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");

/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotifyService = void 0;
const common_1 = __webpack_require__(2);
const notify_config_1 = __importStar(__webpack_require__(37));
const mailer_1 = __webpack_require__(33);
let NotifyService = class NotifyService {
    notifyConfig;
    mailerService;
    constructor(notifyConfig, mailerService) {
        this.notifyConfig = notifyConfig;
        this.mailerService = mailerService;
    }
    async sendActivationUserByEmail(email, token) {
        const domen = this.notifyConfig.domen;
        if (!domen) {
            throw new Error('Domen key (notifyConfig env) is undefined');
        }
        if (token) {
            const activationLink = `${domen}/api/auth/activate?token=${token}`;
            await this.mailerService.sendMail({
                to: email,
                subject: 'Активация аккаунта',
                template: './activation',
                context: {
                    activationLink,
                },
            });
        }
    }
};
exports.NotifyService = NotifyService;
exports.NotifyService = NotifyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(notify_config_1.default.KEY)),
    __metadata("design:paramtypes", [typeof (_a = typeof notify_config_1.NotifyConfig !== "undefined" && notify_config_1.NotifyConfig) === "function" ? _a : Object, typeof (_b = typeof mailer_1.MailerService !== "undefined" && mailer_1.MailerService) === "function" ? _b : Object])
], NotifyService);


/***/ }),
/* 37 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const joi_1 = __importDefault(__webpack_require__(38));
const config_1 = __webpack_require__(9);
const validationSchema = joi_1.default.object({
    domen: joi_1.default.string().required()
});
function validateConfig(config) {
    const { error } = validationSchema.validate(config, { abortEarly: true });
    if (error) {
        throw new Error(`[NotifyConfig Validation Error]: ${error.message}`);
    }
}
function getConfig() {
    const config = {
        domen: process.env['DOMEN']
    };
    validateConfig(config);
    return config;
}
exports["default"] = (0, config_1.registerAs)('notify', getConfig);


/***/ }),
/* 38 */
/***/ ((module) => {

module.exports = require("joi");

/***/ }),
/* 39 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenModule = void 0;
const common_1 = __webpack_require__(2);
const mongoose_1 = __webpack_require__(4);
const refresh_token_model_1 = __webpack_require__(40);
const refresh_token_service_1 = __webpack_require__(41);
const refresh_token_repository_1 = __webpack_require__(55);
const refresh_token_factory_1 = __webpack_require__(57);
let RefreshTokenModule = class RefreshTokenModule {
};
exports.RefreshTokenModule = RefreshTokenModule;
exports.RefreshTokenModule = RefreshTokenModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([
                { name: refresh_token_model_1.RefreshTokenModel.name, schema: refresh_token_model_1.RefreshTokenSchema }
            ])],
        providers: [
            refresh_token_service_1.RefreshTokenService,
            refresh_token_repository_1.RefreshTokenRepository,
            refresh_token_factory_1.RefreshTokenFactory,
        ],
        exports: [
            refresh_token_service_1.RefreshTokenService
        ]
    })
], RefreshTokenModule);


/***/ }),
/* 40 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenSchema = exports.RefreshTokenModel = void 0;
const mongoose_1 = __webpack_require__(4);
const mongoose_2 = __webpack_require__(13);
let RefreshTokenModel = class RefreshTokenModel extends mongoose_2.Document {
    createdAt;
    tokenId;
    userId;
    expiresIn;
};
exports.RefreshTokenModel = RefreshTokenModel;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], RefreshTokenModel.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], RefreshTokenModel.prototype, "tokenId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], RefreshTokenModel.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], RefreshTokenModel.prototype, "expiresIn", void 0);
exports.RefreshTokenModel = RefreshTokenModel = __decorate([
    (0, mongoose_1.Schema)({
        collection: 'refresh-sessions',
        timestamps: true
    })
], RefreshTokenModel);
exports.RefreshTokenSchema = mongoose_1.SchemaFactory.createForClass(RefreshTokenModel);


/***/ }),
/* 41 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenService = void 0;
const common_1 = __webpack_require__(2);
const config_1 = __webpack_require__(9);
const dayjs_1 = __importDefault(__webpack_require__(42));
const libs_1 = __webpack_require__(43);
const common_2 = __webpack_require__(30);
const refresh_token_repository_1 = __webpack_require__(55);
const refresh_token_entity_1 = __webpack_require__(58);
let RefreshTokenService = class RefreshTokenService {
    refreshTokenRepository;
    jwtOptions;
    constructor(refreshTokenRepository, jwtOptions) {
        this.refreshTokenRepository = refreshTokenRepository;
        this.jwtOptions = jwtOptions;
    }
    async createRefreshSession(payload) {
        const timeValue = (0, common_2.parseTime)(this.jwtOptions.refreshTokenExpiresIn);
        const refreshToken = new refresh_token_entity_1.RefreshTokenEntity({
            tokenId: payload.tokenId,
            createdAt: new Date(),
            userId: payload.sub,
            expiresIn: (0, dayjs_1.default)().add(timeValue.value, timeValue.unit).toDate()
        });
        return this.refreshTokenRepository.save(refreshToken);
    }
    async deleteRefreshSession(userId) {
        const refreshToken = await this.refreshTokenRepository.findByUserId(userId);
        if (!refreshToken) {
            {
                throw new common_1.NotFoundException(`Token with that user id ${userId} not found`);
            }
        }
        const { tokenId } = refreshToken.toPOJO();
        await this.deleteExpiredRefreshTokens();
        await this.refreshTokenRepository.deleteByTokenId(tokenId);
    }
    async isExists(tokenId) {
        const refreshToken = await this.refreshTokenRepository.findByTokenId(tokenId);
        return (refreshToken !== null);
    }
    async deleteExpiredRefreshTokens() {
        await this.refreshTokenRepository.deleteExpiredTokens();
    }
};
exports.RefreshTokenService = RefreshTokenService;
exports.RefreshTokenService = RefreshTokenService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(libs_1.jwtConfig.KEY)),
    __metadata("design:paramtypes", [typeof (_a = typeof refresh_token_repository_1.RefreshTokenRepository !== "undefined" && refresh_token_repository_1.RefreshTokenRepository) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigType !== "undefined" && config_1.ConfigType) === "function" ? _b : Object])
], RefreshTokenService);


/***/ }),
/* 42 */
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),
/* 43 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MongoIdValidationPipe = exports.LocalAuthGuard = exports.JwtAuthGuard = exports.JwtRefreshGuard = exports.notifyConfig = exports.mongoConfig = exports.appConfig = exports.jwtConfig = void 0;
var jwt_config_1 = __webpack_require__(44);
Object.defineProperty(exports, "jwtConfig", ({ enumerable: true, get: function () { return __importDefault(jwt_config_1).default; } }));
var app_config_1 = __webpack_require__(45);
Object.defineProperty(exports, "appConfig", ({ enumerable: true, get: function () { return __importDefault(app_config_1).default; } }));
var mongo_config_1 = __webpack_require__(46);
Object.defineProperty(exports, "mongoConfig", ({ enumerable: true, get: function () { return __importDefault(mongo_config_1).default; } }));
var notify_config_1 = __webpack_require__(37);
Object.defineProperty(exports, "notifyConfig", ({ enumerable: true, get: function () { return __importDefault(notify_config_1).default; } }));
var jwt_refresh__guard_1 = __webpack_require__(50);
Object.defineProperty(exports, "JwtRefreshGuard", ({ enumerable: true, get: function () { return jwt_refresh__guard_1.JwtRefreshGuard; } }));
var jwt_auth_guard_1 = __webpack_require__(52);
Object.defineProperty(exports, "JwtAuthGuard", ({ enumerable: true, get: function () { return jwt_auth_guard_1.JwtAuthGuard; } }));
var local_auth_guard_1 = __webpack_require__(53);
Object.defineProperty(exports, "LocalAuthGuard", ({ enumerable: true, get: function () { return local_auth_guard_1.LocalAuthGuard; } }));
var mongo_id_validation_pipe_1 = __webpack_require__(54);
Object.defineProperty(exports, "MongoIdValidationPipe", ({ enumerable: true, get: function () { return mongo_id_validation_pipe_1.MongoIdValidationPipe; } }));


/***/ }),
/* 44 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Joi = __importStar(__webpack_require__(38));
const config_1 = __webpack_require__(9);
const validationSchema = Joi.object({
    accessTokenSecret: Joi.string().required(),
    accessTokenExpiresIn: Joi.string().required(),
    refreshTokenSecret: Joi.string().required(),
    refreshTokenExpiresIn: Joi.string().required(),
});
function validateConfig(config) {
    const { error } = validationSchema.validate(config, { abortEarly: true });
    if (error) {
        throw new Error(`[Account JWTConfig Validation Error]: ${error.message}`);
    }
}
function getConfig() {
    const config = {
        accessTokenSecret: process.env['JWT_ACCESS_TOKEN_SECRET'] || '',
        accessTokenExpiresIn: process.env['JWT_ACCESS_TOKEN_EXPIRES_IN'] || '',
        refreshTokenSecret: process.env['JWT_REFRESH_TOKEN_SECRET'] || '',
        refreshTokenExpiresIn: process.env['JWT_REFRESH_TOKEN_EXPIRES_IN'] || '',
    };
    validateConfig(config);
    return config;
}
exports["default"] = (0, config_1.registerAs)('jwt', getConfig);


/***/ }),
/* 45 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__(9);
const Joi = __importStar(__webpack_require__(38));
const DEFAULT_PORT = 3014;
const DEFAULT_HOST = '127.0.0.1';
var ENVIRONMENTS;
(function (ENVIRONMENTS) {
    ENVIRONMENTS["Development"] = "development";
    ENVIRONMENTS["Production"] = "production";
    ENVIRONMENTS["Stage"] = "stage";
})(ENVIRONMENTS || (ENVIRONMENTS = {}));
;
const validationSchema = Joi.object({
    environment: Joi.string().valid(...Object.values(ENVIRONMENTS)).required(),
    port: Joi.number().port().default(DEFAULT_PORT),
    host: Joi.string().default(DEFAULT_HOST),
});
function validateConfig(config) {
    const { error } = validationSchema.validate(config, { abortEarly: true });
    if (error) {
        throw new Error(`[Application Config Validation Error,]: ${error.message}`);
    }
}
function getConfig() {
    const config = {
        environment: process.env['NODE_ENV'],
        host: process.env['HOST'],
        port: parseInt(process.env['PORT'] || `${DEFAULT_PORT}`, 10),
    };
    validateConfig(config);
    return config;
}
exports["default"] = (0, config_1.registerAs)('app', getConfig);


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__(9);
const class_transformer_1 = __webpack_require__(29);
const mongo_configuration_1 = __webpack_require__(47);
const DEFAULT_MONGO_PORT = 27017;
async function getDbConfig() {
    const config = (0, class_transformer_1.plainToClass)(mongo_configuration_1.MongoConfiguration, {
        host: process.env['MONGO_HOST'],
        name: process.env['MONGO_DB'],
        port: parseInt(process.env['MONGO_PORT'] ?? `${DEFAULT_MONGO_PORT}`, 10),
        user: process.env['MONGO_USER'],
        password: process.env['MONGO_PASSWORD'],
        authBase: process.env['MONGO_AUTH_BASE'],
    });
    await config.validate();
    return config;
}
exports["default"] = (0, config_1.registerAs)('db', async () => getDbConfig());


/***/ }),
/* 47 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MongoConfiguration = void 0;
const class_validator_1 = __webpack_require__(48);
const const_1 = __webpack_require__(49);
class MongoConfiguration {
    name;
    host;
    port = const_1.MongoConfigurationPorts.DEFAULT_MONGO_PORT;
    user;
    password;
    authBase;
    async validate() {
        try {
            await (0, class_validator_1.validateOrReject)(this);
        }
        catch (errors) {
            console.warn('Async validateOrReject() - Validation failed. Errors: ', errors);
        }
    }
}
exports.MongoConfiguration = MongoConfiguration;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Env Validation Required' }),
    __metadata("design:type", String)
], MongoConfiguration.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Env Validation Required' }),
    __metadata("design:type", String)
], MongoConfiguration.prototype, "host", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Env Validation Required' }),
    (0, class_validator_1.Min)(const_1.MongoConfigurationPorts.MIN_PORT),
    (0, class_validator_1.Max)(const_1.MongoConfigurationPorts.MAX_PORT),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], MongoConfiguration.prototype, "port", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Env Validation Required' }),
    __metadata("design:type", String)
], MongoConfiguration.prototype, "user", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Env Validation Required' }),
    __metadata("design:type", String)
], MongoConfiguration.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Env Validation Required' }),
    __metadata("design:type", String)
], MongoConfiguration.prototype, "authBase", void 0);


/***/ }),
/* 48 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HTTP_CLIENT_TIMEOUT = exports.HTTP_CLIENT_MAX_REDIRECTS = exports.MongoConfigurationPorts = exports.AuthenticationResponseMessage = exports.MaxLengthCheck = exports.MinLengthCheck = void 0;
exports.MinLengthCheck = {
    Password: 6,
    Name: 3,
    Title: 20,
    Announcement: 50,
    Text: 100,
    Quote: 20,
    Author: 3,
    Tag: 3,
    CommentText: 10,
};
exports.MaxLengthCheck = {
    Password: 12,
    Name: 50,
    Title: 50,
    Announcement: 255,
    Text: 1024,
    Quote: 300,
    Author: 50,
    Tag: 10,
    CommentText: 300,
    Description: 300,
};
exports.AuthenticationResponseMessage = {
    LoggedSuccess: 'User has been successfully logged.',
    LoggedError: 'Password or Login is wrong.',
    UserFound: 'User found',
    UserNotFound: 'User not found',
    UserExist: 'User with the email already exists',
    UserCreated: 'The new user has been successfully created.',
};
var MongoConfigurationPorts;
(function (MongoConfigurationPorts) {
    MongoConfigurationPorts[MongoConfigurationPorts["MIN_PORT"] = 0] = "MIN_PORT";
    MongoConfigurationPorts[MongoConfigurationPorts["MAX_PORT"] = 65535] = "MAX_PORT";
    MongoConfigurationPorts[MongoConfigurationPorts["DEFAULT_MONGO_PORT"] = 27017] = "DEFAULT_MONGO_PORT";
})(MongoConfigurationPorts || (exports.MongoConfigurationPorts = MongoConfigurationPorts = {}));
exports.HTTP_CLIENT_MAX_REDIRECTS = 5;
exports.HTTP_CLIENT_TIMEOUT = 5000;


/***/ }),
/* 50 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtRefreshGuard = void 0;
const passport_1 = __webpack_require__(51);
const common_1 = __webpack_require__(2);
let JwtRefreshGuard = class JwtRefreshGuard extends (0, passport_1.AuthGuard)('jwt-refresh') {
};
exports.JwtRefreshGuard = JwtRefreshGuard;
exports.JwtRefreshGuard = JwtRefreshGuard = __decorate([
    (0, common_1.Injectable)()
], JwtRefreshGuard);


/***/ }),
/* 51 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 52 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalAuthGuard = exports.JwtAuthGuard = void 0;
const passport_1 = __webpack_require__(51);
const common_1 = __webpack_require__(2);
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    handleRequest(err, user, info, context) {
        if (err || !user) {
            throw err || new common_1.UnauthorizedException(info?.message || 'Unauthorized');
        }
        return user;
    }
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);
class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
    handleRequest(err, user, info, context) {
        if (err || !user) {
            throw err || new common_1.UnauthorizedException(info?.message || 'Unauthorized');
        }
        return user;
    }
}
exports.LocalAuthGuard = LocalAuthGuard;


/***/ }),
/* 53 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalAuthGuard = void 0;
const passport_1 = __webpack_require__(51);
const common_1 = __webpack_require__(2);
let LocalAuthGuard = class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
    handleRequest(err, user, info, context) {
        if (err || !user) {
            throw err || new common_1.UnauthorizedException(info?.message || 'Unauthorized');
        }
        return user;
    }
};
exports.LocalAuthGuard = LocalAuthGuard;
exports.LocalAuthGuard = LocalAuthGuard = __decorate([
    (0, common_1.Injectable)()
], LocalAuthGuard);


/***/ }),
/* 54 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MongoIdValidationPipe = void 0;
const mongoose_1 = __webpack_require__(13);
const common_1 = __webpack_require__(2);
let MongoIdValidationPipe = class MongoIdValidationPipe {
    transform(value, { type }) {
        if (type !== 'param') {
            throw new Error('This pipe must used only with params!');
        }
        if (!mongoose_1.Types.ObjectId.isValid(value)) {
            throw new common_1.BadRequestException('Bad entity ID');
        }
        return value;
    }
};
exports.MongoIdValidationPipe = MongoIdValidationPipe;
exports.MongoIdValidationPipe = MongoIdValidationPipe = __decorate([
    (0, common_1.Injectable)()
], MongoIdValidationPipe);


/***/ }),
/* 55 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenRepository = void 0;
const common_1 = __webpack_require__(2);
const mongoose_1 = __webpack_require__(4);
const mongoose_2 = __webpack_require__(13);
const base_mongo_refreshToken_repository_1 = __webpack_require__(56);
const refresh_token_model_1 = __webpack_require__(40);
const refresh_token_factory_1 = __webpack_require__(57);
let RefreshTokenRepository = class RefreshTokenRepository extends base_mongo_refreshToken_repository_1.BaseMongoRefreshTokenRepository {
    constructor(entityFactory, refreshModel) {
        super(entityFactory, refreshModel);
    }
    async deleteByTokenId(tokenId) {
        return this.model.deleteOne({ tokenId }).exec();
    }
    async findByTokenId(tokenId) {
        const refreshTokenDocument = await this.model.findOne({ tokenId }).exec();
        if (!refreshTokenDocument) {
            return null;
        }
        return this.createEntityFromDocument(refreshTokenDocument);
    }
    async findByUserId(userId) {
        const refreshTokenDocument = await this.model.findOne({ userId }).exec();
        if (!refreshTokenDocument) {
            return null;
        }
        return this.createEntityFromDocument(refreshTokenDocument);
    }
    async deleteExpiredTokens() {
        this.model.deleteMany({ expiresIn: { $lt: new Date() } });
    }
};
exports.RefreshTokenRepository = RefreshTokenRepository;
exports.RefreshTokenRepository = RefreshTokenRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(refresh_token_model_1.RefreshTokenModel.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof refresh_token_factory_1.RefreshTokenFactory !== "undefined" && refresh_token_factory_1.RefreshTokenFactory) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object])
], RefreshTokenRepository);


/***/ }),
/* 56 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseMongoRefreshTokenRepository = void 0;
const common_1 = __webpack_require__(2);
const mongoose_1 = __importDefault(__webpack_require__(13));
class BaseMongoRefreshTokenRepository {
    entityFactory;
    model;
    constructor(entityFactory, model) {
        this.entityFactory = entityFactory;
        this.model = model;
    }
    createEntityFromDocument(document) {
        if (!document) {
            return null;
        }
        const plainObject = document.toObject({ getters: false, versionKey: false, flattenObjectIds: true });
        return this.entityFactory.create(plainObject);
    }
    async findById(_id) {
        const document = await this.model.findById(_id).exec();
        if (!document) {
            throw new common_1.NotFoundException(`Document with id ${_id} not found`);
        }
        return this.createEntityFromDocument(document);
    }
    async save(entity) {
        await new this.model(entity.toPOJO()).save();
    }
    async update(entity) {
        if (entity.id && !mongoose_1.default.Types.ObjectId.isValid(entity.id)) {
            throw new Error('Invalid _id');
        }
        const updatedDocument = await this.model.findByIdAndUpdate(entity.id, entity.toPOJO(), { new: true });
        if (!updatedDocument) {
            throw new common_1.NotFoundException(`Document with id ${entity.id} not found`);
        }
    }
    async deleteById(_id) {
        const deletedDocument = await this.model.findByIdAndDelete(_id).exec();
        if (!deletedDocument) {
            throw new common_1.NotFoundException(`Entity with id ${_id} not found.`);
        }
    }
}
exports.BaseMongoRefreshTokenRepository = BaseMongoRefreshTokenRepository;


/***/ }),
/* 57 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenFactory = void 0;
const common_1 = __webpack_require__(2);
const refresh_token_entity_1 = __webpack_require__(58);
let RefreshTokenFactory = class RefreshTokenFactory {
    create(entityPlainData) {
        return new refresh_token_entity_1.RefreshTokenEntity(entityPlainData);
    }
};
exports.RefreshTokenFactory = RefreshTokenFactory;
exports.RefreshTokenFactory = RefreshTokenFactory = __decorate([
    (0, common_1.Injectable)()
], RefreshTokenFactory);


/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenEntity = void 0;
class RefreshTokenEntity {
    id;
    tokenId;
    createdAt;
    userId;
    expiresIn;
    constructor(token) {
        this.populate(token);
    }
    populate(token) {
        if (!token) {
            return;
        }
        this.id = token.id ?? '';
        this.createdAt = token.createdAt;
        this.expiresIn = token.expiresIn;
        this.userId = token.userId ?? '';
        this.tokenId = token.tokenId;
    }
    toPOJO() {
        return {
            id: this.id,
            createdAt: this.createdAt,
            expiresIn: this.expiresIn,
            userId: this.userId,
            tokenId: this.tokenId,
        };
    }
}
exports.RefreshTokenEntity = RefreshTokenEntity;


/***/ }),
/* 59 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticationController = void 0;
const common_1 = __webpack_require__(2);
const passport_1 = __webpack_require__(51);
const types_1 = __webpack_require__(18);
const libs_1 = __webpack_require__(43);
const authentication_service_1 = __webpack_require__(60);
const common_2 = __webpack_require__(30);
const user_rdo_1 = __webpack_require__(28);
const logged_user_rdo_1 = __webpack_require__(63);
const create_user_dto_1 = __webpack_require__(64);
let AuthenticationController = class AuthenticationController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async checkToken({ user: payload }) {
        return payload;
    }
    async create(dto) {
        const newUser = await this.authService.register(dto);
        return (0, common_2.fillDto)(user_rdo_1.UserRdo, newUser.toPOJO());
    }
    async activate(token) {
        await this.authService.activateUser(token);
        return { message: 'Account activated successfully' };
    }
    async logout({ user }) {
        const userId = user.sub;
        if (typeof userId !== 'string') {
            throw new common_1.HttpException('Invalid token payload: sub does not exist', common_1.HttpStatus.BAD_REQUEST);
        }
        await this.authService.logout(userId);
        return { message: 'Logout successful' };
    }
    async login({ user }) {
        const userToken = user && await this.authService.createUserToken(user);
        return (0, common_2.fillDto)(logged_user_rdo_1.LoggedUserRdo, user && { ...user.toPOJO(), ...userToken });
    }
    async show(id) {
        const user = await this.authService.getUser(id);
        return (0, common_2.fillDto)(user_rdo_1.UserRdo, user.toPOJO());
    }
    async updateAvatar(userId, dto) {
        return this.authService.updateAvatar(userId, dto);
    }
    async refreshToken({ user }) {
        return user && await this.authService.createUserToken(user);
    }
};
exports.AuthenticationController = AuthenticationController;
__decorate([
    (0, common_1.UseGuards)(libs_1.JwtAuthGuard),
    (0, common_1.Post)('check'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof types_1.RequestWithUser !== "undefined" && types_1.RequestWithUser) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "checkToken", null);
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof create_user_dto_1.CreateUserDto !== "undefined" && create_user_dto_1.CreateUserDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('activate'),
    __param(0, (0, common_1.Query)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "activate", null);
__decorate([
    (0, common_1.UseGuards)(libs_1.JwtAuthGuard),
    (0, common_1.Delete)('logout'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "logout", null);
__decorate([
    (0, common_1.UseGuards)(libs_1.LocalAuthGuard),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local')),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof types_1.RequestWithUser !== "undefined" && types_1.RequestWithUser) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(libs_1.JwtAuthGuard),
    (0, common_1.Get)('/user/:id'),
    __param(0, (0, common_1.Param)('id', libs_1.MongoIdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "show", null);
__decorate([
    (0, common_1.UseGuards)(libs_1.JwtAuthGuard),
    (0, common_1.Put)('avatar/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "updateAvatar", null);
__decorate([
    (0, common_1.UseGuards)(libs_1.JwtRefreshGuard),
    (0, common_1.Post)('refresh'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof types_1.RequestWithUser !== "undefined" && types_1.RequestWithUser) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "refreshToken", null);
exports.AuthenticationController = AuthenticationController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof authentication_service_1.AuthenticationService !== "undefined" && authentication_service_1.AuthenticationService) === "function" ? _a : Object])
], AuthenticationController);


/***/ }),
/* 60 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var AuthenticationService_1;
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticationService = void 0;
const common_1 = __webpack_require__(2);
const jwt_1 = __webpack_require__(8);
const config_1 = __webpack_require__(9);
const jwt_config_1 = __importDefault(__webpack_require__(44));
const user_repository_1 = __webpack_require__(12);
const user_entity_1 = __webpack_require__(15);
const authentication_const_1 = __webpack_require__(61);
const index_1 = __webpack_require__(18);
const common_2 = __webpack_require__(30);
const refresh_token_service_1 = __webpack_require__(41);
const node_crypto_1 = __importDefault(__webpack_require__(62));
const notify_service_1 = __webpack_require__(36);
let AuthenticationService = AuthenticationService_1 = class AuthenticationService {
    userRepository;
    jwtService;
    notifyService;
    refreshTokenService;
    jwtOptions;
    logger = new common_1.Logger(AuthenticationService_1.name);
    constructor(userRepository, jwtService, notifyService, refreshTokenService, jwtOptions) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.notifyService = notifyService;
        this.refreshTokenService = refreshTokenService;
        this.jwtOptions = jwtOptions;
    }
    async register(dto) {
        const { email, name, password } = dto;
        const defUser = {
            _id: '',
            email: email,
            name: name,
            avatar: '',
            passwordHash: '',
            postsCount: 0,
            userType: index_1.UserType.Regular,
            isActive: false,
            activationToken: null
        };
        const existUser = await this.userRepository.findByEmail(email);
        if (existUser) {
            throw new common_1.ConflictException(authentication_const_1.AUTH_USER_EXISTS);
        }
        const userEntity = await new user_entity_1.UserEntity(defUser).setPassword(password);
        await this.userRepository.save(userEntity);
        await this.notifyService.sendActivationUserByEmail(email, userEntity.activationToken);
        return userEntity;
    }
    async activateUser(token) {
        const user = await this.userRepository.findByToken(token);
        if (!user) {
            throw new common_1.HttpException('Invalid activation token', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        user.isActive = true;
        user.activationToken = null;
        const userEntity = new user_entity_1.UserEntity(user);
        await this.userRepository.update(userEntity);
        return userEntity;
    }
    async verifyUser(dto) {
        const { email, password } = dto;
        const existUser = await this.userRepository.findByEmail(email);
        if (!existUser) {
            throw new common_1.NotFoundException(authentication_const_1.AUTH_USER_NOT_FOUND);
        }
        if (!await existUser.comparePassword(password)) {
            throw new common_1.UnauthorizedException(authentication_const_1.AUTH_USER_PASSWORD_WRONG);
        }
        return existUser;
    }
    async getUser(_id) {
        const existUser = await this.userRepository.findById(_id.toString());
        if (!existUser) {
            throw new common_1.NotFoundException(`User with id ${_id} not found`);
        }
        return existUser;
    }
    async logout(userId) {
        await this.refreshTokenService.deleteRefreshSession(userId);
        return;
    }
    async createUserToken(user) {
        const accessTokenPayload = (0, common_2.createJWTPayload)(user);
        const refreshTokenPayload = { ...accessTokenPayload, tokenId: node_crypto_1.default.randomUUID() };
        await this.refreshTokenService.createRefreshSession(refreshTokenPayload);
        try {
            const accessToken = await this.jwtService.signAsync(accessTokenPayload, {
                secret: this.jwtOptions.accessTokenSecret,
                expiresIn: this.jwtOptions.accessTokenExpiresIn
            });
            const refreshToken = await this.jwtService.signAsync(refreshTokenPayload, {
                secret: this.jwtOptions.refreshTokenSecret,
                expiresIn: this.jwtOptions.refreshTokenExpiresIn
            });
            this.logger.log('[Token generated]: ' + accessToken);
            return { accessToken, refreshToken };
        }
        catch (error) {
            this.logger.error('[Token generation error]: ' + error.message);
            throw new common_1.HttpException('Ошибка при создании токена.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getUserByEmail(email) {
        const existUser = await this.userRepository.findByEmail(email);
        if (!existUser) {
            throw new common_1.NotFoundException(`User with email ${email} not found`);
        }
        return existUser;
    }
    async updateAvatar(_id, { avatarId }) {
        const user = await this.getUser(_id);
        const userEntity = new user_entity_1.UserEntity({ ...user, avatar: avatarId, _id });
        return this.userRepository.update(userEntity);
    }
};
exports.AuthenticationService = AuthenticationService;
exports.AuthenticationService = AuthenticationService = AuthenticationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(4, (0, common_1.Inject)(jwt_config_1.default.KEY)),
    __metadata("design:paramtypes", [typeof (_a = typeof user_repository_1.UserRepository !== "undefined" && user_repository_1.UserRepository) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof notify_service_1.NotifyService !== "undefined" && notify_service_1.NotifyService) === "function" ? _c : Object, typeof (_d = typeof refresh_token_service_1.RefreshTokenService !== "undefined" && refresh_token_service_1.RefreshTokenService) === "function" ? _d : Object, typeof (_e = typeof config_1.ConfigType !== "undefined" && config_1.ConfigType) === "function" ? _e : Object])
], AuthenticationService);


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticationResponseMessage = exports.INITIAL_ARRAY = exports.INITIAL_VALUE = exports.AUTH_USER_PASSWORD_WRONG = exports.AUTH_USER_NOT_FOUND = exports.AUTH_USER_EXISTS = exports.AUTH_USER_EMAIL_NOT_VALID = void 0;
exports.AUTH_USER_EMAIL_NOT_VALID = 'The email is not valid';
exports.AUTH_USER_EXISTS = 'User with this email exists';
exports.AUTH_USER_NOT_FOUND = 'User not found';
exports.AUTH_USER_PASSWORD_WRONG = 'User password is wrong';
exports.INITIAL_VALUE = 0;
exports.INITIAL_ARRAY = [];
exports.AuthenticationResponseMessage = {
    LoggedSuccess: 'User has been successfully logged.',
    LoggedError: 'Password or Login is wrong.',
    UserFound: 'User found',
    UserNotFound: 'User not found',
    UserExist: 'User with the email already exists',
    UserCreated: 'The new user has been successfully created.',
};


/***/ }),
/* 62 */
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),
/* 63 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggedUserRdo = void 0;
const class_transformer_1 = __webpack_require__(29);
class LoggedUserRdo {
    email;
    name;
    accessToken;
    refreshToken;
    userType;
}
exports.LoggedUserRdo = LoggedUserRdo;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LoggedUserRdo.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LoggedUserRdo.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LoggedUserRdo.prototype, "accessToken", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LoggedUserRdo.prototype, "refreshToken", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LoggedUserRdo.prototype, "userType", void 0);


/***/ }),
/* 64 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
const class_validator_1 = __webpack_require__(48);
const authentication_const_1 = __webpack_require__(61);
const const_1 = __webpack_require__(49);
class CreateUserDto {
    email;
    name;
    password;
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: authentication_const_1.AUTH_USER_EMAIL_NOT_VALID }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(const_1.MinLengthCheck.Name),
    (0, class_validator_1.MaxLength)(const_1.MaxLengthCheck.Name),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(const_1.MinLengthCheck.Password),
    (0, class_validator_1.MaxLength)(const_1.MaxLengthCheck.Password),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);


/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getJwtOptions = getJwtOptions;
async function getJwtOptions(configService) {
    return {
        secret: configService.get('jwt.accessTokenSecret'),
        signOptions: {
            expiresIn: configService.get('jwt.accessTokenExpiresIn'),
            algorithm: 'HS256',
        }
    };
}


/***/ }),
/* 66 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAccessStrategy = void 0;
const passport_1 = __webpack_require__(51);
const passport_jwt_1 = __webpack_require__(67);
const common_1 = __webpack_require__(2);
const config_1 = __webpack_require__(9);
let JwtAccessStrategy = class JwtAccessStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    configService;
    constructor(configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: configService.get('jwt.accessTokenSecret')
        });
        this.configService = configService;
    }
    async validate(payload) {
        return payload;
    }
};
exports.JwtAccessStrategy = JwtAccessStrategy;
exports.JwtAccessStrategy = JwtAccessStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], JwtAccessStrategy);


/***/ }),
/* 67 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 68 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const passport_1 = __webpack_require__(51);
const passport_local_1 = __webpack_require__(69);
const common_1 = __webpack_require__(2);
const authentication_service_1 = __webpack_require__(60);
const USERNAME_FIELD_NAME = 'email';
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    authService;
    constructor(authService) {
        super({ usernameField: USERNAME_FIELD_NAME });
        this.authService = authService;
    }
    async validate(email, password) {
        return this.authService.verifyUser({ email, password });
    }
};
exports.LocalStrategy = LocalStrategy;
exports.LocalStrategy = LocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof authentication_service_1.AuthenticationService !== "undefined" && authentication_service_1.AuthenticationService) === "function" ? _a : Object])
], LocalStrategy);


/***/ }),
/* 69 */
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),
/* 70 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtRefreshStrategy = void 0;
const common_1 = __webpack_require__(2);
const passport_1 = __webpack_require__(51);
const passport_jwt_1 = __webpack_require__(67);
const config_1 = __webpack_require__(9);
const libs_1 = __webpack_require__(43);
const authentication_service_1 = __webpack_require__(60);
const refresh_token_service_1 = __webpack_require__(41);
const exception_1 = __webpack_require__(71);
let JwtRefreshStrategy = class JwtRefreshStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt-refresh') {
    jwtOptions;
    authService;
    refreshService;
    constructor(jwtOptions, authService, refreshService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtOptions.refreshTokenSecret,
        });
        this.jwtOptions = jwtOptions;
        this.authService = authService;
        this.refreshService = refreshService;
    }
    async validate(payload) {
        const refreshToken = await this.refreshService.isExists(payload.tokenId);
        if (!refreshToken) {
            throw new exception_1.TokenNotFoundException(payload.tokenId);
        }
        await this.refreshService.deleteRefreshSession(payload.tokenId);
        return this.authService.getUserByEmail(payload.email);
    }
};
exports.JwtRefreshStrategy = JwtRefreshStrategy;
exports.JwtRefreshStrategy = JwtRefreshStrategy = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(libs_1.jwtConfig.KEY)),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigType !== "undefined" && config_1.ConfigType) === "function" ? _a : Object, typeof (_b = typeof authentication_service_1.AuthenticationService !== "undefined" && authentication_service_1.AuthenticationService) === "function" ? _b : Object, typeof (_c = typeof refresh_token_service_1.RefreshTokenService !== "undefined" && refresh_token_service_1.RefreshTokenService) === "function" ? _c : Object])
], JwtRefreshStrategy);


/***/ }),
/* 71 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenNotFoundException = void 0;
const common_1 = __webpack_require__(2);
class TokenNotFoundException extends common_1.UnauthorizedException {
    constructor(tokenId) {
        super(`Token with ID ${tokenId} not found`);
    }
}
exports.TokenNotFoundException = TokenNotFoundException;


/***/ }),
/* 72 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CatModule = void 0;
const common_1 = __webpack_require__(2);
const cat_repository_1 = __webpack_require__(73);
const cat_controller_1 = __webpack_require__(77);
const prisma_client_module_1 = __webpack_require__(80);
let CatModule = class CatModule {
};
exports.CatModule = CatModule;
exports.CatModule = CatModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_client_module_1.PrismaClientModule],
        controllers: [cat_controller_1.CatController],
        providers: [cat_repository_1.CatRepository],
        exports: [cat_repository_1.CatRepository],
    })
], CatModule);


/***/ }),
/* 73 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CatRepository = void 0;
const common_1 = __webpack_require__(2);
const prisma_client_service_1 = __webpack_require__(74);
const cat_entity_1 = __webpack_require__(76);
const DEFAULT_SORTING_TYPE = 'createAt';
let CatRepository = class CatRepository {
    client;
    constructor(client) {
        this.client = client;
    }
    async create(entityPlainData) {
        return new cat_entity_1.CatEntity(entityPlainData);
    }
    async getCatsCount(where) {
        return this.client.cat.count({ where });
    }
    calculateCatsOnPage(totalCount, limit) {
        return Math.ceil(totalCount / limit);
    }
    async createCat(dto) {
        const record = await this.client.cat.create({
            data: {
                ...dto,
                likesCount: 0,
                likes: {
                    connect: [],
                },
            },
        });
        return await this.create(record);
    }
    async getAllCats() {
        const cats = await this.client.cat.findMany({
            include: {
                likes: true,
            },
        });
        const entityCats = cats.map((cat) => this.create(cat));
        return Promise.all(entityCats);
    }
};
exports.CatRepository = CatRepository;
exports.CatRepository = CatRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_client_service_1.PrismaClientService !== "undefined" && prisma_client_service_1.PrismaClientService) === "function" ? _a : Object])
], CatRepository);


/***/ }),
/* 74 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaClientService = void 0;
const client_1 = __webpack_require__(75);
const common_1 = __webpack_require__(2);
let PrismaClientService = class PrismaClientService extends client_1.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
};
exports.PrismaClientService = PrismaClientService;
exports.PrismaClientService = PrismaClientService = __decorate([
    (0, common_1.Injectable)()
], PrismaClientService);


/***/ }),
/* 75 */
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),
/* 76 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CatEntity = void 0;
class CatEntity {
    id;
    userId;
    titleText;
    text;
    createdAt;
    updatedAt;
    likesCount;
    constructor(data) {
        this.populate(data);
    }
    populate(data) {
        if (!data) {
            return;
        }
        this.id = data.id || '';
        this.userId = data.userId;
        this.titleText = data.titleText;
        this.text = data.text;
        this.createdAt = data.createdAt ?? new Date();
        this.updatedAt = data.updatedAt ?? new Date();
        this.likesCount = data.likesCount || 0;
    }
    toPOJO() {
        return {
            id: this.id,
            userId: this.userId,
            titleText: this.titleText,
            text: this.text,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            likesCount: this.likesCount,
        };
    }
}
exports.CatEntity = CatEntity;


/***/ }),
/* 77 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CatController = void 0;
const common_1 = __webpack_require__(2);
const cat_repository_1 = __webpack_require__(73);
const create_cat_dto_1 = __webpack_require__(78);
const common_2 = __webpack_require__(30);
const cat_rdo_1 = __webpack_require__(79);
const libs_1 = __webpack_require__(43);
let CatController = class CatController {
    catRepos;
    constructor(catRepos) {
        this.catRepos = catRepos;
    }
    async save(dto) {
        const cat = await this.catRepos.createCat(dto);
        return (0, common_2.fillDto)(cat_rdo_1.CatRdo, cat.toPOJO());
    }
    async getAllCats() {
        const cats = await this.catRepos.getAllCats();
        return (0, common_2.fillDto)(cat_rdo_1.CatRdo, cats);
    }
};
exports.CatController = CatController;
__decorate([
    (0, common_1.UseGuards)(libs_1.JwtAuthGuard),
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_cat_dto_1.CreateCatDto !== "undefined" && create_cat_dto_1.CreateCatDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], CatController.prototype, "save", null);
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatController.prototype, "getAllCats", null);
exports.CatController = CatController = __decorate([
    (0, common_1.Controller)('cats'),
    __metadata("design:paramtypes", [typeof (_a = typeof cat_repository_1.CatRepository !== "undefined" && cat_repository_1.CatRepository) === "function" ? _a : Object])
], CatController);


/***/ }),
/* 78 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCatDto = void 0;
const class_validator_1 = __webpack_require__(48);
class CreateCatDto {
    userId;
    titleText;
    text;
    likesCount;
}
exports.CreateCatDto = CreateCatDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], CreateCatDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(o => o.text !== ""),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_1.MaxLength)(40),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCatDto.prototype, "titleText", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(o => o.titleText !== ""),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(20),
    (0, class_validator_1.MaxLength)(100),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCatDto.prototype, "text", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCatDto.prototype, "likesCount", void 0);


/***/ }),
/* 79 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CatRdo = void 0;
const class_transformer_1 = __webpack_require__(29);
class CatRdo {
    userId;
    titleText;
    text;
    createdAt;
    likesCount;
}
exports.CatRdo = CatRdo;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CatRdo.prototype, "userId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CatRdo.prototype, "titleText", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CatRdo.prototype, "text", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CatRdo.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], CatRdo.prototype, "likesCount", void 0);


/***/ }),
/* 80 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaClientModule = void 0;
const common_1 = __webpack_require__(2);
const prisma_client_service_1 = __webpack_require__(74);
let PrismaClientModule = class PrismaClientModule {
};
exports.PrismaClientModule = PrismaClientModule;
exports.PrismaClientModule = PrismaClientModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        exports: [prisma_client_service_1.PrismaClientService],
        providers: [prisma_client_service_1.PrismaClientService]
    })
], PrismaClientModule);


/***/ }),
/* 81 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DetailModule = void 0;
const common_1 = __webpack_require__(2);
const detail_repository_1 = __webpack_require__(82);
const detail_controller_1 = __webpack_require__(84);
const prisma_client_module_1 = __webpack_require__(80);
let DetailModule = class DetailModule {
};
exports.DetailModule = DetailModule;
exports.DetailModule = DetailModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_client_module_1.PrismaClientModule],
        controllers: [detail_controller_1.DetailController],
        providers: [detail_repository_1.DetailRepository],
        exports: [detail_repository_1.DetailRepository],
    })
], DetailModule);


/***/ }),
/* 82 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DetailRepository = void 0;
const common_1 = __webpack_require__(2);
const prisma_client_service_1 = __webpack_require__(74);
const detail_entity_1 = __webpack_require__(83);
const DEFAULT_SORTING_TYPE = 'createAt';
let DetailRepository = class DetailRepository {
    client;
    constructor(client) {
        this.client = client;
    }
    async create(entityPlainData) {
        return new detail_entity_1.DetailEntity(entityPlainData);
    }
    async getDetailsCount(where) {
        return this.client.details.count({ where });
    }
    calculateDetailsOnPage(totalCount, limit) {
        return Math.ceil(totalCount / limit);
    }
    async getAllCats() {
        const details = await this.client.details.findMany({});
        if (details.length < 1) {
            throw new common_1.NotFoundException('Details not found, ups');
        }
        const entityDetails = details.map((detail) => this.create(detail));
        return Promise.all(entityDetails);
    }
};
exports.DetailRepository = DetailRepository;
exports.DetailRepository = DetailRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_client_service_1.PrismaClientService !== "undefined" && prisma_client_service_1.PrismaClientService) === "function" ? _a : Object])
], DetailRepository);


/***/ }),
/* 83 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DetailEntity = void 0;
class DetailEntity {
    id;
    shortName;
    longName;
    normOfMinute;
    customer;
    createdAt;
    updatedAt;
    constructor(data) {
        this.populate(data);
    }
    populate(data) {
        if (!data) {
            return;
        }
        this.id = data.id || '';
        this.shortName = data.shortName;
        this.longName = data.longName;
        this.normOfMinute = data.normOfMinute ?? null;
        this.customer = data.customer;
        this.createdAt = data.createdAt ?? new Date();
        this.updatedAt = data.updatedAt ?? new Date();
    }
    toPOJO() {
        return {
            id: this.id,
            shortName: this.shortName,
            longName: this.longName,
            normOfMinute: this.normOfMinute,
            customer: this.customer,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }
}
exports.DetailEntity = DetailEntity;


/***/ }),
/* 84 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DetailController = void 0;
const common_1 = __webpack_require__(2);
const detail_repository_1 = __webpack_require__(82);
const common_2 = __webpack_require__(30);
const detail_rdo_1 = __webpack_require__(85);
let DetailController = class DetailController {
    detailRepository;
    constructor(detailRepository) {
        this.detailRepository = detailRepository;
    }
    async getAllCats() {
        const cats = await this.detailRepository.getAllCats();
        return (0, common_2.fillDto)(detail_rdo_1.DetailRdo, cats);
    }
};
exports.DetailController = DetailController;
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DetailController.prototype, "getAllCats", null);
exports.DetailController = DetailController = __decorate([
    (0, common_1.Controller)('details'),
    __metadata("design:paramtypes", [typeof (_a = typeof detail_repository_1.DetailRepository !== "undefined" && detail_repository_1.DetailRepository) === "function" ? _a : Object])
], DetailController);


/***/ }),
/* 85 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DetailRdo = void 0;
const class_transformer_1 = __webpack_require__(29);
class DetailRdo {
    shortName;
    longName;
    normOfMinute;
    customer;
    createdAt;
}
exports.DetailRdo = DetailRdo;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DetailRdo.prototype, "shortName", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DetailRdo.prototype, "longName", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], DetailRdo.prototype, "normOfMinute", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DetailRdo.prototype, "customer", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], DetailRdo.prototype, "createdAt", void 0);


/***/ }),
/* 86 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigAppModule = void 0;
const common_1 = __webpack_require__(2);
const config_1 = __webpack_require__(9);
const app_config_1 = __importDefault(__webpack_require__(45));
const mongo_config_1 = __importDefault(__webpack_require__(46));
const jwt_config_1 = __importDefault(__webpack_require__(44));
const notify_config_1 = __importDefault(__webpack_require__(37));
const ENV_USER_FILE_PATH = './src/.env';
let ConfigAppModule = class ConfigAppModule {
};
exports.ConfigAppModule = ConfigAppModule;
exports.ConfigAppModule = ConfigAppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                cache: true,
                load: [app_config_1.default, mongo_config_1.default, jwt_config_1.default, notify_config_1.default],
                envFilePath: ENV_USER_FILE_PATH
            }),
        ]
    })
], ConfigAppModule);


/***/ }),
/* 87 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMongooseOptions = getMongooseOptions;
const config_1 = __webpack_require__(9);
const database_1 = __webpack_require__(88);
function getMongooseOptions() {
    return {
        useFactory: async (config) => {
            return {
                uri: (0, database_1.getMongoConnectionString)({
                    username: config.get('db.user'),
                    password: config.get('db.password'),
                    host: config.get('db.host'),
                    port: config.get('db.port'),
                    authDatabase: config.get('db.authBase'),
                    databaseName: config.get('db.name'),
                })
            };
        },
        inject: [config_1.ConfigService]
    };
}


/***/ }),
/* 88 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMongoConnectionString = getMongoConnectionString;
exports.getMongooseOptions = getMongooseOptions;
const config_1 = __webpack_require__(9);
function getMongoConnectionString({ username, password, host, port, databaseName, authDatabase }) {
    return `mongodb://${username}:${password}@${host}:${port}/${databaseName}?authSource=${authDatabase}`;
}
function getMongooseOptions(optionSpace) {
    return {
        useFactory: async (config) => {
            return {
                uri: getMongoConnectionString({
                    username: config.get(`${optionSpace}.db.user`),
                    password: config.get(`${optionSpace}.db.password`),
                    host: config.get(`${optionSpace}.db.host`),
                    port: config.get(`${optionSpace}.db.port`),
                    authDatabase: config.get(`${optionSpace}.db.authBase`),
                    databaseName: config.get(`${optionSpace}.db.name`),
                })
            };
        },
        inject: [config_1.ConfigService]
    };
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;