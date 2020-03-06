declare module "@lamanicurista/lm-common" {
    namespace helpers {

        interface Api {
            makeRequest(endpoint: any, reqPayload: any): Promise<unknown>;
            template(uri: any, params: any): any;
        }

        interface AWS {
            MESSAGE_TYPES: {
                SUBSCRIPTION_CONFIRMATION: string;
                NOTIFICATION: string;
            };
            ATTRIBUTES: {
                QUEUE: {
                    URL: string;
                };
                MESSAGE: {
                    GROUP_ID: string;
                    DEDUPLICATION_ID: string;
                };
            };
            /**
             * Convierte un objeto normal de JavaScript a un objeto
             * @param {Object} attrs objeto llave-valor
             */
            convertObjectToAWSAttributes(attrs: any): {};
            /**
             * Esta función permite publicar mensajes a un topic de AWS SNS
             * @param {Object} params
             *  @param {String} params.topic Tema en el cual se quiere publicar el mensaje
             *  @param {String|Object} params.message Mensaje a publicar, puede ser un string
             *         o un objeto el cual es convertido a string mediante JSON.stringify
             *  @param {String} params.queueUrl (optional) URL de la cola en caso de ser
             *         un mensaje dirigio a suscriptores de AWS SQS
             */
            publishToSns({ topic, message, attrs, queueUrl }: {
                topic: any;
                message: any;
                attrs?: {} | undefined;
                queueUrl: any;
            }): Promise<{
                error: null;
                data: any;
            } | {
                error: any;
                data: null;
            }>;
            /**
             * Esta función permite publicar mensajes a un topic de AWS SNS
             * @param {Object} params
             *  @param {String|Object} params.message Mensaje a publicar, puede ser un string
             *         o un objeto el cual es convertido a string mediante JSON.stringify
             *  @param {String} params.queueUrl URL de la cola en caso de ser un mensaje
             *         dirigio a suscriptores de AWS SQS
             */
            sendMessageToSqs({ message, queueUrl, attrs, groupId, deduplicationId }: {
                message: any;
                queueUrl: any;
                attrs?: {} | undefined;
                groupId?: any;
                deduplicationId?: any;
            }): Promise<{
                error: null;
                data: any;
            } | {
                error: any;
                data: null;
            }>;

        }

        type ResponseMessages = {
            STATUS_CODE_DIVIDER: number;
            SUCCESS: {
                code: number;
                success: boolean;
                message: string;
            };
            REQUEST_VALIDATE_SUCCESSFULLY: {
                code: number;
                success: boolean;
                message: string;
            };
            EMPTY_RESPONSE: {
                code: number;
                success: boolean;
                message: string;
            };
            USER_CREATED_WITHOU_TOKEN: {
                code: number;
                success: boolean;
                message: string;
            };
            CREDIT_CARD_TOKENIZATION_REQUEST_APPROVED: {
                code: number;
                success: boolean;
                message: string;
            };
            CREDIT_CARD_TOKENIZATION_REQUEST_REJECTED: {
                code: number;
                success: boolean;
                message: string;
            };
            DUPLICATE_ENTRY: {
                code: number;
                success: boolean;
                message: string;
            };
            SOME_SERVICES_COULD_NOT_BE_CONFIRMED: {
                code: number;
                success: boolean;
                message: string;
            };
            ROUTE_NOT_FINISHED: {
                code: number;
                success: boolean;
                message: string;
            };
            TOKEN_EXPIRED: {
                code: number;
                success: boolean;
                message: string;
            };
            TOKEN_NOT_EXPIRED: {
                code: number;
                success: boolean;
                message: string;
            };
            BAD_REQUEST: {
                code: number;
                success: boolean;
                message: string;
            };
            INVALID_TOKEN: {
                code: number;
                success: boolean;
                message: string;
            };
            USER_INACTIVE: {
                code: number;
                success: boolean;
                message: string;
            };
            INVALID_CREDENTIALS: {
                code: number;
                success: boolean;
                message: string;
            };
            USER_IN_PROCESS: {
                code: number;
                success: boolean;
                message: string;
            };
            USER_NOT_HAS_PASSWORD: {
                code: number;
                success: boolean;
                message: string;
            };
            USER_FIRED: {
                code: number;
                success: boolean;
                message: string;
            };
            USER_RETIRED: {
                code: number;
                success: boolean;
                message: string;
            };
            UPLOAD_FILE_IS_EMPTY: {
                code: number;
                success: boolean;
                message: string;
            };
            GET_USER_ERROR: {
                code: number;
                success: boolean;
                message: string;
            };
            UPDATE_STATUS_ERROR: {
                code: number;
                success: boolean;
                message: string;
            };
            MANICURIST_IS_REQUIRED: {
                code: number;
                success: boolean;
                message: string;
            };
            CROSSOVER_PRICE_LIST: {
                code: number;
                success: boolean;
                message: string;
            };
            CURRENT_AND_NEW_STATUS_EQUALS: {
                code: number;
                success: boolean;
                message: string;
            };
            REASON_CANCELLATION_IS_REQUIRED: {
                code: number;
                success: boolean;
                message: string;
            };
            SERVICE_IS_METHOD_CASH: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_CONSULTING_SERVICE: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_CONSULTING_CREDIT_CARD: {
                code: number;
                success: boolean;
                message: string;
            };
            SERVICE_ALREADY_IS_PAID: {
                code: number;
                success: boolean;
                message: string;
            };
            SEND_EMAIL_INVALID_OPTIONS: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_CONSULTING_PARAMETERS: {
                code: number;
                success: boolean;
                message: string;
            };
            EMAIL_NOT_FOUND: {
                code: number;
                success: boolean;
                message: string;
            };
            PAYMENT_PROVIDER_SIGNATURE_INVALID: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_CONSULTING_PAYMENT_TRANSACTION_LOG: {
                code: number;
                success: boolean;
                message: string;
            };
            SERVICE_PENDING_FOR_PAYMENT_NOTIFICATION: {
                code: number;
                success: boolean;
                message: string;
            };
            SERVICE_CROSSED_WITH_OTHER_OF_MANICURIST: {
                code: number;
                success: boolean;
                message: string;
            };
            SERVICE_ALREADY_IS_CANCELLED: {
                code: number;
                success: boolean;
                message: string;
            };
            CANT_LONGER_REGISTER_REFERRAL_CODE: {
                code: number;
                success: boolean;
                message: string;
            };
            SERVICE_ALREADY_IS_CONFIRMED_OR_COMPLETED: {
                code: number;
                success: boolean;
                message: string;
            };
            SERVICE_ALREADY_IS_COMPLETED: {
                code: number;
                success: boolean;
                message: string;
            };
            HAS_NOT_INVOICE_RULES: {
                code: number;
                success: boolean;
                message: string;
            };
            CREDIT_CARD_ALREADY_VERFIED: {
                code: number;
                success: boolean;
                message: string;
            };
            CROSSOVER_WORKINGDAY: {
                code: number;
                success: boolean;
                message: string;
            };
            RECORD_EXISTS: {
                code: number;
                success: boolean;
                message: string;
            };
            EMPTY_RESPONSE_SCHEDULE: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_CONSULTING_PERFORMANCE_RULE_PARAMETERS_BY_ZONE: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_NOT_DATA_PERFORMANCE_RULE_ZONE_FOUND: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_PARAM_RULE_INVALID: {
                code: number;
                success: boolean;
                message: string;
            };
            IS_NOT_TIME_TO_APPLY_RULE: {
                code: number;
                success: boolean;
                message: string;
            };
            THERE_ARE_NOT_MANICURIST_FOR_APPLY_RULE: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_CREATING_PERFORMANCE_RULE_USER: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_UPDATING_PARAM_LAST_EXECUTE_OF_RULE: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_CONSULTING_WORK_ZONES_MANICURISTS: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_GETTING_TAGS_PENALTY_LATE_ARRIVAL: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_CREATING_MANICURIST_EXTRA_POINTS: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_UPDATING_SERVICES_TO_APPLY_RULE: {
                code: number;
                success: boolean;
                message: string;
            };
            BUSSINES_RULE_NOT_FOUND: {
                code: number;
                success: boolean;
                message: string;
            };
            USER_LOCATION_NOT_FOUND: {
                code: number;
                success: boolean;
                message: string;
            };
            CANT_ASSIGN_SERVICE_TO_MANICUTIST_BY_DEBT: {
                code: number;
                success: boolean;
                message: string;
            };
            SEND_SMS_INVALID_OPTIONS: {
                code: number;
                success: boolean;
                message: string;
            };
            CODE_NOT_EXIST: {
                code: number;
                success: boolean;
                message: string;
            };
            NUMBER_RECORDS_EXCEEDED: {
                code: number;
                success: boolean;
                message: string;
            };
            CODE_EXPIRED: {
                code: number;
                success: boolean;
                message: string;
            };
            CODE_NOT_AVAILABLE: {
                code: number;
                success: boolean;
                message: string;
            };
            CODE_NOT_APPLY_TO_USER: {
                code: number;
                success: boolean;
                message: string;
            };
            CODE_WAS_USED_BY_USER: {
                code: number;
                success: boolean;
                message: string;
            };
            CODE_ALREADY_REGISTRED_BY_USER: {
                code: number;
                success: boolean;
                message: string;
            };
            CODE_ALREADY_EXISTS: {
                code: number;
                success: boolean;
                message: string;
            };
            USER_LOCATION_IS_NOT_IN_COVERAGE_AREA_ZONE: {
                code: number;
                success: boolean;
                message: string;
            };
            ITS_NO_TIME_TO_UPDATE_PARAMETER_LAST_EXECUTION_DATE: {
                code: number;
                success: boolean;
                message: string;
            };
            INVALID_ZONE_FOR_USER_LOCATION: {
                code: number;
                success: boolean;
                message: string;
            };
            UPDATE_USER_ERROR: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_CREATING_PROMOTIONAL_CODE: {
                code: number;
                success: boolean;
                message: string;
            };
            MANICURIST_STATUS_CHANGE_NOT_ALLOWED: {
                code: number;
                success: boolean;
                message: string;
            };
            USER_HAS_A_REFERRED_CODE: {
                code: number;
                success: boolean;
                message: string;
            };
            USER_IS_NOT_REFERRED: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_GRANTING_AMOUNT_TO_USER: {
                code: number;
                success: boolean;
                message: string;
            };
            SERVICE_NO_HAVE_ACCOUNTING_ENTRIES_TO_APPLY: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_CONSULTING_ACCOUNTING_ENTRIES: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_CREATING_SERVICE_PAYMENT_ACCOUNTING_ENTRIES: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_SAVING_ACCOUNTING_ENTRIES: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_RESTORING_ACCOUNTING_ENTRIES: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_DELETING_SERVICE_PAYMENT_ACCOUNTING_ENTRIES: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_CONSULTING_SERVICE_PAYMENT_ACCOUNTING_ENTRIES: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_CONSULTING_SERVICE_PAYMENT_PURCHASE_ACCOUNTING_ENTRY: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_CONSULTING_ALEGRA_INVOCIES_BY_STATUS_AND_DOCUMENT: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_SAVING_PURCHASE_ACCOUNTING_ENTRY: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_ROUTING: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_ROUTING_IN_PROCESS: {
                code: number;
                success: boolean;
                message: string;
            };
            GUARANTEED_CROSS_WITH_OTHER: {
                code: number;
                success: boolean;
                message: string;
            };
            GUARANTEED_CROSS_WITH_SERVICES: {
                code: number;
                success: boolean;
                message: string;
            };
            GUARANTEED_FULL_OF_MANICURISTS: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_SAVING_MANICURIST_IN_GUARANTEED: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_SAVING_ZONE_INNER_FORECAST: {
                code: number;
                success: boolean;
                message: string;
            };
            ERROR_DELETING_ZONE_INNER_FORECAST_BY_ZONE_INNER: {
                code: number;
                success: boolean;
                message: string;
            };
            SERVICE_CROSS_WITH_GUARANTEED_OF_MANICURIST: {
                code: number;
                success: boolean;
                message: string;
            };
            PAYMENT_PROVIDER_ERROR: {
                code: number;
                success: boolean;
                message: string;
            };
            GET_TOKENIZED_INFO_ERROR: {
                code: number;
                success: boolean;
                message: string;
            };
            CREDIT_CARD_TOKENIZATION_ERROR: {
                code: number;
                success: boolean;
                message: string;
            };
            SEND_EMAIL_ERROR: {
                code: number;
                success: boolean;
                message: string;
            };
            CLICK_2_CALL_PROVIDER_CONECTION_ERROR: {
                code: number;
                success: boolean;
                message: string;
            },
            addDataToMessage(jsonMessage: any, customData: any): void
        }

        interface Utilities {
            getConfig(name: string): object | null;
            /**
             * Get the median from a set of values
             * @author fnavia
             * @param {Array<int>} values - Set of values to calculate the median
             * @param {boolean} round - Determines if the median value should be rounded
             */
            getMedian(values: Array<any>, round: boolean): number;
        }

        type Constants = {
            ENVIRONMENT: string;
            APPLICATION_IDS: {
                ANY_APP: string;
                ANDROID_CLIENT: string;
                IOS_CLIENT: string;
                ANDROID_MANICURIST: string;
                ADMIN_CONSOLE: string;
                WEB_CLIENT: string;
            };
            API_USER_ID: number;
            LANGUAGE: string;
            CURRENCY: string;
            CONFIGS: {
                FILE: string;
                TEST_FILE: string;
                FILE_WITHOUT_DIRNAME: string;
                FILE_COMMON_DIRECTORY: string;
                DATABASE: string;
                ENDPOINTS: string;
            };
            DIR_TMP: string;
            MD5PUNTO: string;
            MD5ARROBA: string;
            AES_PHRASE: string;
            DIR_PUBLIC_UPLOADS_IMAGES: string;
            DIR_PUBLIC_PROFILE_IMAGES: string;
            DIR_PUBLIC_UPLOADS_IMAGES_WEB: string;
            DIR_PUBLIC_PROFILE_IMAGES_WEB: string;
            MULTIPARTY_OPTIONS: {
                uploadDir: string;
            };
            CSV_COLUMN_SEPARATOR: string;
            CSV_VALUES_SEPARATOR: string;
            CSV_LINE_SEPARATOR: string;
            DATE_FORMAT_TO_EXPORT: string;
            TOKEN_SECRET: any;
            FCM_API_KEY: any;
            TIME_TO_EXPIRES_TOKEN: number;
            /**
             * Tiempo de expiracion extendido para cuando el usuario quiere su sesion permanezca abierta
             */
            TIME_TO_EXPIRES_TOKEN_ET: number;
            PAGINATION_DEFAULT_PAGE_SIZE: number;
            PAGINATION_FIRST_PAGE: number;
            REMINDER_SERVICE_INTERVAL_HOUR: number;
            REMINDER_SERVICE_DAYS_DIFF: number;
            PERCENT_OF_TIME_TO_ACCEPT_EXCLUSIVE_SERVICES: number;
            /**
             * Hasta cuando tiempo despues de pasada la hora del servicio se continua mostrando como no asignado
             */
            MAX_EXPIRES_TIME_TO_ACCEPT_NOT_ASSIGNED_SERVICES: number;
            LAST_MANICURIST_LIQUIDATION_LIMIT: number;
            ALWAYS_SEND_EMAIL_CONFIRMATION_SERVICE: boolean;
            ADDONS_PRODUCTS_TO_OMMIT: number[];
            USER_STATUS: {
                ACTIVE: string;
                INACTIVE: string;
                IN_PROCESS: string;
                AVAILABLE: string;
                OFFLINE: string;
                BUSY: string;
                IN_ROUTE: string;
                LOGGED: string;
                LOCKED: string;
                RETIRED: string;
                FIRED: string;
            };
            USER_TYPES: {
                MANICURIST: string;
                CLIENT: string;
                ADMIN: string;
            };
            MICROSERVICES_ROLE: {
                BILLING: string;
                BUSSINES: string;
                SETTINGS: string;
                USERS: string;
                ANALYTICS: string;
                INTEGRATIONS: string;
                USER_PERFORMANCE: string;
                ACCOUNTING: string;
            };
            PARAMETER_NAMES: {
                PAYMENT_PROVIDER_LOGIN: string;
                PAYMENT_PROVIDER_TRANKY: string;
                PAYMENT_PROVIDER_USER_AGENT: string;
                PAYMENT_PROVIDER_SUBSCRIPTION_EXPIRES: string;
                PAYMENT_PROVIDER_RETURNURL_WEBPAGE: string;
                PAYMENT_PROVIDER_RETURNURL_BACKEND: string;
                PAYMENT_PROVIDER_CURRENCY: string;
                PAYMENT_PROVIDER_APIPATH: string;
                CREDITCARD_VERIFICATION_CHARGE_AMOUNT: string;
                AUTO_VERIFY_CREDITCARD: string;
                GOAL_SERVICE_PRODUCT_QUANTITY: string;
                GOAL_TYPE: string;
                PROMOTIONAL_CODE_GOAL_CONF: string;
                USER_AGREEMENT_MAX_PROMOTIONAL_CODES: string;
                USER_AGREEMENT_EXPIRATION_DATE_PROMOTIONAL_CODE: string;
                CUSTOMER_PURCHASE_FRECUENCY: string;
                MINIMUM_SERVICE_AMOUNT_FOR_DRAW: string;
                MINUTES_FOR_SENDING_USER_GOAL_NOTIFICATION: string;
                CUSTOMER_GOAL_MOTIVATIONAL_NOTIFICATION: string;
                NUMBER_SERVICES_FOR_AVERAGE_RATING_PDB: string;
                REASON_CANCELLATION_CONDITIONS: string;
                MANICURIST_RANK_CONDITIONS: string;
                NOTIFY_RANK_MESSAGES: string;
                PROMOTIONAL_CODE_REFERAL_CONF: string;
                PROMOTIONAL_CODE_REFERAL_TIME_TO_REDEEM: string;
                CONCEPT_MODEL_FOR_PURCHASE_ACCOUNTING_ENTRY: string;
                CONCEPT_MODEL_ID_REFERRED_USER: string;
                CONCEPT_MODEL_FOR_CREDIT_CARD_VERIFICATION: string;
                SERVICE_REASON_CANCELLATION_TO_FORECAST: string;
                RECONCILIATION_GURANTEED_TIME_FOR_INCLUDE_SERVICES: string;
                MIN_MINUTES_TO_CONSIDER_MANICURIST_AVAILABLE: string;
            };
            BOOKSHELF_EMPTY_RESPONSE: string;
            EMPTY_RESPONSE: string;
            MYSQL_ER_LOCK_DEADLOCK: string;
            MYSQL_ER_DUPLICATE_ENTRY: string;
            UNKNOW: string;
            ROW_DELETED: number;
            ROW_NOT_DELETED: number;
            ROW_ACTIVE: number;
            STATE_ACTIVE: string;
            WEEK_DAYS: {
                MONDAY: number;
                TUESDAY: number;
                WEDNESDAY: number;
                THURSDAY: number;
                FRIDAY: number;
                SATURDAY: number;
                SUNDAY: number;
            };
            WEEK_DAYS_NAMES: {
                '1': string;
                '2': string;
                '3': string;
                '4': string;
                '5': string;
                '6': string;
                '7': string;
            };
            EARTH_RADUIS: number;
            SELECTION_LIST: {
                SERVICES_STATUS: number;
                USER_STATUS: number;
                MANICURIST_STATUS: number;
                USER_TYPE: number;
                ACOUNT_BANK_TYPE: number;
                BANK: number;
                DOCUMENT_TYPE: number;
                PROCESS_REGISTER_MANICURIST: number;
                STATUS_PROCESS_REGISTER_MANICURIST: number;
                SERVICE_RATING: number;
                REASON_CANCEL: number;
                SERVICE_CANCELLATION: number;
                MOVEMENT_TYPE: number;
                MOVEMENT_CONCEPT: number;
                PAYMENT_TYPE: number;
                STATUS_PROMOTIONAL_CODE: number;
                TYPE_PROMOTIONAL_CODE: number;
                TYPE_TRANSPORT: number;
                RATING_MANICURIST_TO_CUSTOMER: number;
                YES_NO: number;
                INVOICE_STATUS: number;
                CONCEPT_PROFESSIONAL_POINTS: number;
                GROUP_CONCEPT_PROFESSIONAL_POINTS: number;
                DATA_TYPE: number;
                RATING_GROUPS: number;
                STATE_REASON: number;
                SKILL_STATUS: number;
                BANKS_ALEGRA: number;
                DEFAULT_VALUE: number;
                PAYMENT_TYPES: number;
                PAYMENT_METHOD: number;
                DEPOSIT_STATUS: number;
                MANICURIST_RANK: number;
                ACCOUNTING_ENTRY_STATUS: number;
                STATUS_ZONE_INNER_MODELS: number;
                PROMOTIONAL_CODE_REASON: number;
            };
            SERVICE_STATUS: {
                PENDING: string;
                NOTIFIED: string;
                NOT_ASSIGNED: string;
                CONFIRMED_MANICURIST: string;
                CONFIRMED_CUSTOMER: string;
                CANCELED_MANICURIST: string;
                CANCELED_CUSTOMER: string;
                ARRIVE_TO_LOCATION: string;
                STARTED: string;
                COMPLETED: string;
                EXCLUSIVE_CREATED: string;
                EXCLUSIVE_NOT_ACCEPTED: string;
            };
            SERVICE_STATUS_PRIORITY: {
                ONE: any[];
                TWO: any[];
                THREE: any[];
            };
            SERVICE_TYPE: {
                INMEDIATE: string;
                RESERVED: string;
            };
            CASE_SERVICE: {
                PROGRAMMED: number;
                FINALIZED: number;
                CANCELED: number;
            };
            CASE_SERVICE_NOT_ASSIGNED: {
                EXCLUSIVE: number;
                GENERIC: number;
            };
            PAID_SERVICE: number;
            MOVEMENT_TYPE: {
                IN: string;
                OUT: string;
            };
            MOVEMENT_CONCEPT: {
                ACCOUNT_MANICURIST: string;
                DISCOUNTS: string;
            };
            MOVEMENT_PAY_TYPE: {
                CASH: string;
            };
            WAY_TO_PAY_SERVICE_USINGCASH: number;
            WAY_TO_PAY_SERVICE_WITHOUTCASH: number;
            SERVICE_PAID_STATUS: {
                YES: number;
                NOT: number;
            };
            PAYMENT_PROVIDER_STATUS: {
                OK: string;
                APPROVED: string;
                PENDING: string;
                REJECTED: string;
                FAILED: string;
            };
            PAYMENT_STATUS: {
                PAID: string;
                PENDING: string;
                REJECTED: string;
            };
            STATUS_PROMOTIONAL_CODE: {
                ACTIVE: string;
                INACTIVE: string;
            };
            CODE_NOT_REDEEMED: number;
            BUSSINESS_RULES_CODES: {
                TOLERANCE_PERCENTAGE_FOR_DISTANCE: string;
                AVERAGE_MINUTES_AT_ONE_KM: string;
                INVOICE_CONSECUTIVE_ALEGRA: string;
                BANK_ACCOUNT_INVOICE_ALEGRA: string;
                ITEM_INVOICE_ALEGRA: string;
                CELLAR_INVOICE_ALEGRA: string;
                EXPIRATION_DAYS_INVOICE_ALEGRA: string;
                HOURS_FOR_SHOW_SERVICES_MANICURIST_STATE_ACTIVE: string;
                MAX_DEBT_MANICURIST: string;
                SERVICE_PROMOTIONAL_CODE_AGREEMENT_VALUE: string;
                PERCENTAGE_TIME_LIMIT_FOR_ACCEPT_SERVICE_EXCLUSIVE: string;
                CATEGORY_PAYMENT_CASH_RECEIPT: string;
                ENABLED_TO_PROVIDE_IMMEDIATE_SERVICES: string;
                MINUTES_TO_COSIDER_INMEDIATE_SERVICES: string;
                ACTIVE_PAYMENT_PDB_KIT: string;
                ATTEMPTS_TO_SEARCH_MANICURIST_IMMEDIATE: string;
                TIME_MILLISECONDS_TO_ACCEPT_SERVICE_IMMEDIATE: string;
                FAKE_MANICURIST_TO_CONFIRM_SERVICES: string;
            };
            NO_LIMIT_PROMOTIONAL_CODES: number;
            STATUS_PROMOTION_CODE: {
                ACTIVE: string;
                INACTIVE: string;
            };
            PROMOTIONAL_CODE_VISIBILITY: {
                PUBLIC: number;
                PRIVATE: number;
            };
            DATE_DEFAULT_NO_PROMOTION_CODE: string;
            INT_NULL_OR_SELECT: number;
            INT_NULL: number;
            ZERO: number;
            DATA_TYPE: {
                INT: string;
            };
            INCENTIVES_AND_PENALIZATIONS: string;
            BENEFIT_POINTS: string;
            BENEFIT_POINTS_QUANTITY_POINTS: number;
            BENEFIT_POINTS_QUANTITY_SERVICES: number;
            FIREBASE_BUCKET: {
                SUBDIR_CONTENT_IMAGES: string;
                SUBDIR_CONTENT_AUDIOS: string;
                SUBDIR_CONTENT_VIDEOS: string;
                SUBDIR_CONTENT_DOCUMENTS: string;
                SUBDIR_CUSTOMERS: string;
                SUBDIR_MANICURIST: string;
                SUBDIR_PRODUCTS: string;
                SUBDIR_MANICURIST_BENEFITS: string;
                SUBDIR_CUSTOMER_BENEFITS: string;
            };
            RATING_TYPE: {
                CUSTOMER: string;
                MANICURIST: string;
            };
            NUMBER_RULES_INVOICE_ALEGRA: number;
            PAYMENT_METHOD_INVOICE_ALEGRA: string;
            STATUS_INVOICE_ALEGRA: {
                OPEN: string;
                CLOSED: string;
            };
            QUANTITY_ITEMS_INVOICE_ALEGRA: number;
            USER_TYPE_ALEGRA: {
                CLIENT: string;
                PROVIDER: string;
            };
            ORDER_ALEGRA: {
                DESC: string;
                ASC: string;
            };
            ORDER_FIELD_ALEGRA: {
                ID: string;
                NAME: string;
                DATE: string;
                DUE_DATE: string;
                STATUS: string;
            };
            SERVICE_LIQUIDATE: {
                YES: number;
                NO: number;
            };
            IS_DOCUMENT: {
                YES: number;
                NO: number;
            };
            CREDIT_CARD_VERIFIED_STATUS: {
                PENDING: string;
                VERIFIED: string;
                REJECTED: string;
            };
            PAYMENT_TRANSACTION_LOG_TYPE: {
                PAYMENT_SERVICE: string;
                CREDIT_CARD_VERIFICATION: string;
            };
            PARAMETER_VISIBILITY: {
                VISIBLE: number;
                INVISIBLE: number;
            };
            LIMIT_LIQUIDATION_TO_GENERATE_INVOICE: number;
            NUMBER_ERROR_GENERATE_INVOICE: number;
            DISCOUNT_VALUE_MAXIMUN_PAYMENT: number;
            NUMBER_DAYS_TO_LOCK_MANICURIST: number;
            COUNT_TYPE_SERVICE: string;
            COUNT_TYPE_PRODUCT: string;
            EMAIL_DELETED: string;
            WITHOUT_SERVICE: number;
            WITH_SERVICE: number;
            APPLICATION_VERSION_LOG: {
                IS_MANDATORY: boolean;
                NO_MANDATORY: boolean;
            };
            APPLY_SCHEDULE_RESTRICTION: {
                YES: number;
                NO: number;
            };
            APPLY_QUESTION_STAR_FILTER: {
                YES: number;
                NO: number;
            };
            USER_PERFORMANCE_PARAMS: {
                LAST_EXECUTE: string;
                RANGE_EXECUTE: string;
                AVERAGE_RATING: string;
                RANGE_TIME_SERVICE_RATING: string;
                QUANTITY_MINIMUM_SERVICES_QUALIFIED: string;
                ADDITIONAL_COMMISSION_PERCENTAGE: string;
                QUANTITY_SERVICES_FOR_INCENTIVE: string;
                TIME_LIMIT_FOR_CANCEL_SERVICE: string;
                RANGE_TIME_SERVICES_CANCELED: string;
                QUANTITY_SERVICES_CANCELED_FOR_PENALTY: string;
                CODES_REASON_CANCELLATIONS: string;
                TIME_INACTIVATE_USER_MANICURIST: string;
                POINTS_BY_PURCHASED_CUSTOMER: string;
                RELATION_STARTS_PERCENT: string;
                CALIFICATION_GROUP_CODES: string;
                QUESTION_STAR_IDENTIFY: string;
                POINTS_TO_GET_PURCHASED_BONUS: string;
                REPURCHASE_BONUS_AMOUNT: string;
                PERCENT_COMMISSION_LATE_ARRIVAL: string;
                QUANTITY_INMEDIATE_SERVICES_NOT_ACCEPTED: string;
                PERCENT_COMISSION_NOT_ACCEPT_INMEDIATE_SERVICES: string;
            };
            USER_PERFORMANCE_EXECUTE_TYPE: {
                PERIOD: string;
            };
            CONCEPT_PROFESSIONAL_POINTS: {
                PN_SV: string;
                PRC_PR: string;
            };
            GROUP_CONCEPT_PROFESSIONAL_POINTS: {
                PN: string;
                PRC: string;
            };
            USER_PERFORMANCE_IDS: {
                MANICURIST_REPURCHASE_COUNT: number;
                MANICURIST_REPURCHASE_GRANT: number;
                MANICURIST_CANCEL_SERVICES: number;
                AVERAGE_RATING_MANICURIST: number;
                MANICURIST_NOT_ACCEPT_INMEDIATE_SERVICES: number;
            };
            USER_REASON_STATE: {
                LOCKED_LIQ: string;
                LOCKED_CYC: string;
                ACTIVE_UNLOCK: string;
                LOCKED_BY_NOT_ACCEPT_INMEDIATE_SERVICES: string;
            };
            USER_PERFORMANCE_STATUS: {
                ACTIVE: string;
                INACTIVE: string;
                FINALIZED: string;
            };
            MIN: string;
            MAX: string;
            MID_MONTH_DAY: number;
            MANICURIST_SKILL_STATUS: {
                APPROVED: string;
                PENDING: string;
                DECLINED: string;
            };
            MANICURIST_SKILL_WORKING: {
                IS_WORKING: string;
                NOT_IS_WORKING: string;
            };
            BALANCE_FILTER: {
                PAY: string;
                DEBT: string;
                ALL: string;
            };
            KIT_MANICURIST_INVOICE: number;
            MANICURIST_PERCENT_COMMISSION: number;
            STATUS_KIT: {
                PENDING: number;
                DELIVERED: number;
                PAID_OUT: number;
            };
            USER_AGREEMENT_EXPIRATION_DATE_TYPE: {
                FIXED: string;
                DYNAMIC: string;
            };
            CODE_BIRTHDAY: string;
            TYPE_PROMOTIONAL_CODE: {
                NORMAL: number;
                ANOTHER_DATE_RESERVE: number;
                TIME_LIMIT_BY_USER: number;
                BIRTHDAY: number;
                REFERRED: number;
            };
            IMAGE_MODEL: {
                CATEGORY: string;
                PRODUCT: string;
            };
            RATE_TYPE: {
                STANDAR: number;
                DYNAMIC: number;
            };
            SELECTION_LIST_DEFAULT_VALUE: string;
            TYPE_PAYMENT_CASH_RECEIPT: {
                IN: string;
            };
            CASH_RECEIPT_TYPE: {
                RC: string;
                PF: string;
            };
            STATUS_MANICURIST_DEPOSIT: {
                PENDING: string;
                CLOSED: string;
            };
            TAGS: {
                MODES: {
                    "id": number;
                    "name": string;
                }[];
                TYPES: {
                    "id": number;
                    "name": string;
                }[];
                MANICURIST: number;
                SERVICE: number;
                PURCHASE_FRECUENCY: number;
            };
            NOREPLY_EMAIL: string;
            CREATE_INVOICE_FAILED_ATTEMPTS: number;
            SERVICE_LIQUIDATE_IS_PAID: {
                YES: number;
                NO: number;
            };
            CLICK_2_CALL_STATUS: {
                OK: string;
                FAILED: string;
            };
            VPR_SOLVE4_ALL: {
                MINUTES_TOLERANCE_FOR_END_TIME_RESOURCES: number;
                HOUR_FINISH_DAY_DEFAULT: string;
                STATUS_API: {
                    FINISHED_SOLVED: string;
                    RUNNING: string;
                    ERROR: string;
                    NOT_SOLVED: string;
                };
                STATUS: {
                    IN_PROCESS: string;
                    ERROR: string;
                    READY_FOR_NOTIFICATION: string;
                    FINISHED: string;
                    FINISHED_WITH_ERROR: string;
                };
            };
            AWS_CONFIG: {
                SNS: string;
                SQS: string;
            };
            AWS_SNS: {
                TOPIC_UPDATE_MANICURIST_BALANCE: string;
                TOPIC_UPDATE_CUSTOMER_BALANCE: string;
                TOPIC_APPLY_ACCOUNTING_ENTRIES_TO_SERVICE: string;
                TOPIC_GRANT_REFERING_AMOUNT_TO_USER: string;
            };
            AWS_SQS: {};
            FILE_STORAGE: {
                PUBLIC_URL_EXPIRES: number;
            };
            MANICURIST_BLACK: {
                IS_IN_BLACK_LIST: number;
                NOT_IS_IN_BLACK_LIST: number;
            };
            SERVICE_LIQUIDATE_DAYS: {
                FIRST_DAY: number;
                HALF_MONTH: number;
            };
            PERFORMANCE_RULE_TYPES: {
                PENALIZATION: number;
                INCENTIVE: number;
                DEPENALIZATION: number;
            };
            INTERVAL_MINUTES_TO_HOUR_SERVICE: number;
            ANDROID_NOTIFICATION_CHANNEL: {
                GENERIC_SERVICE: {
                    id: string;
                    sound: string;
                };
                EXCLUSIVE_SERVICE: {
                    id: string;
                    sound: string;
                };
                IMMEDIATE_SERVICE: {
                    id: string;
                    sound: string;
                };
                CANCEL_SERVICE: {
                    id: string;
                    sound: string;
                };
            };
            ENDPOINTS_SNS: {
                CREATE_MANICURIST_DEPOSIT: string;
                UPDATE_MANICURIST_DEPOSIT: string;
                DELETE_MANICURIST_DEPOSIT: string;
                UPDATE_SERVICE_LIQUIDATE_WITH_SERVICES: string;
                UPDATE_SERVICE_STATUS: string;
                ONCOMPLETED: string;
                CREATE_KIT_MANICURIST: string;
                UPDATE_KIT_MANICURIST: string;
                DELETE_KIT_MANICURIST: string;
                EXEC_DESINC_AVERAGE_RATING_MANICURIST: string;
                EXEC_DESPEN_NOT_ACCEPT_INMEDIATE_SERVICE: string;
                EXEC_PEN_BAD_SERVICE: string;
                EXEC_PEN_MANICURIST_LATE_ARRIVAL: string;
                GET_LIQUIDATE_TO_UPDATE_INVOICE_STATUS: string;
                CREATE_ACCOUNTING_ENTRY: string;
                UPDATE_ACCOUNTING_ENTRY: string;
                DELETE_ACCOUNTING_ENTRY: string;
                APPLY_ACCOUNTING_ENTRIES_TO_SERVICE: string;
                SAVE_SERVICE_WITH_PRODUCTS: string;
                AUTO_SET_EXPIRED_ACCOUNTING_ENTRIES: string;
                SYNC_MANICURIST_BALANCE: string;
            };
            POLYMORPHIC_MODEL: {
                CUSTOMER: string;
                MANICURIST: string;
                SERVICE: string;
            };
            STATUS_ACCOUNTING_ENTRY: {
                OPEN: string;
                CLOSED: string;
                EXPIRED: string;
                PURCHASED: string;
            };
            SMS_PROVIDER: {
                HABLAME: string;
                INFOBIP: string;
            };
            USER_VERIFICATION_CODE_SMS_LENGTH: number;
            ACCOUNTING_ENTRY_HASH_ID_LENGTH: number;
            USER_REFERRED_STATUS: {
                PENDING: string;
                REFERRED: string;
            };
            USER_REFERAL_CODE_NUMBER_PADDING_QUANTITY: number;
            CONCEPT_MODELS: {
                CUSTOMER: string;
                SERVICE: string;
                MANICURIST: string;
            };
            ORIGIN_PROMOTIONAL_CODE: {
                REGISTER_USER: string;
                REGISTER_CODE_PROMOTION: string;
            };
            MANICURIST_DEPOSIT_IS_EDITABLE: {
                YES: number;
                NO: number;
            };
            CONTENT_TYPE_FILE: {
                TEXT_CSV: string;
            };
            MANICURIST_HAS_LABORAL_CONTRACT: {
                YES: string;
                NO: string;
            };
            HOURS_FOR_SHOW_SERVICES_MANICURIST_STATE_ACTIVE: {
                ONLY_TODAY: string;
            };
            SERVICE_ASSIGMENT_STATUS: {
                PENDING: string;
                FINISHED: string;
                READY_FOR_NOTIFICATION: string;
                ERROR: string;
                FINISHED_WITH_ERROR: string;
            };
            ZONE_INNER_MODELS_STATUS: {
                ACTIVE: string;
                INACTIVE: string;
            };
            MANICURIST_ZONE_INNER_RESULT: {
                WON: number;
                LOSE: number;
            };
            MANICURIST_ZONE_INNER_LOG: {
                ACTION: {
                    IN: number;
                    OUT: number;
                };
                VALIDATE: {
                    YES: number;
                    NO: number;
                };
            };
            ONE_HOUR_MINUTES: number;
            IS_AVAILABLE_FOR_NEXT_SERVICE: number;
            PAGINATION_UNLIMITED_PAGE_SIZE: number;
            IS_GUARANTEED: number;
            GUARANTEED_STARTED: {
                YES: number;
                NO: number;
            };
            GUARANTEED_RESULT_MANICURIST: {
                FULFILLED: string;
                UNFULFILLED: string;
            };
            MANICURIST_AVAILABLE_FOR_NEXT_SERVICE: {
                YES: number;
                NO: number;
            };
        }
    }
}