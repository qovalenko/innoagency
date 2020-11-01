const ruRU = {
  common: {
    or: 'или',
    cancel: 'Отмена',
    reset: 'Сбросить',
    save: 'Сохранить',
    search: 'Поиск',
    edit: 'Изменить',
    remove: 'Удалить',
    new: 'Новый',
    export: 'Экспорт в Excel',
    noDataToExport: 'Нет данных для экспорта',
    import: 'Импорт',
    discard: 'Отменить',
    yes: 'Да',
    no: 'Нет',
    pause: 'Пауза',
    areYouSure: 'Вы уверены?',
    view: 'Посмотреть',
    destroy: 'Удалить',
    mustSelectARow: 'Необходимо выбрать строку',
  },

  app: {
    title: 'Помощь животным',
  },

  entities: {
    pet: {
      name: 'животное',
      label: 'Животные',
      menu: 'Животные',
      exporterFileName: 'pet_export',
      list: {
        menu: 'Животные',
        title: 'Животные',
      },
      create: {
        success: 'Животное сохранено успешно',
      },
      update: {
        success: 'Животное обновлено успешно',
      },
      destroy: {
        success: 'Животное удалено успешно',
      },
      destroyAll: {
        success: 'Все животные удалены успешно',
      },
      edit: {
        title: 'Редактирование животного',
      },
      fields: {
        id: 'Id',
        owner: 'Владелец',
        name: 'Название',
        type: 'Тип',
        breed: 'Комментарий',
        size: 'Размер',
        bookings: 'Учет животных',
        createdAt: 'Создано в',
        updatedAt: 'Обнавлено в',
        createdAtRange: 'Создано в',
      },
      enumerators: {
        type: {
          cat: 'Кошка',
          dog: 'Собака',
        },
        size: {
          small: 'Маленькая',
          medium: 'Средняя',
          large: 'Большая',
        },
      },
      new: {
        title: 'Новое животное',
      },
      view: {
        title: 'Профиль животного',
      },
      importer: {
        title: 'Импорт животных',
        fileName: 'pet_import_template',
        hint:
          'Столбцы файлов / изображений должны быть URL-адресами файлов, разделенными пробелом.',
      },
    },

    booking: {
      name: 'booking',
      label: 'Bookings',
      menu: 'Учет животных',
      exporterFileName: 'booking_export',
      list: {
        menu: 'Учет животных',
        title: 'Учет животных',
      },
      create: {
        success: 'Успешно добавлено в эксплуатирующую организацию',
      },
      update: {
        success: 'Успешно обновлено в эксплуатирующую организацию',
      },
      destroy: {
        success: 'Успешно удалено из эксплуатирующей организации',
      },
      destroyAll: {
        success: 'Все успешно удалено из эксплуатирующей организации',
      },
      edit: {
        title: 'Редактирование пристройства',
      },
      fields: {
        id: 'Id',
        owner: 'Владелец',
        pet: 'Животное',
        arrivalRange: 'Прибытие',
        arrival: 'Прибытие',
        departureRange: 'Убытие',
        departure: 'Убытие',
        clientNotes: 'Записи',
        employeeNotes: 'Записи менеджера',
        photos: 'Фотографии',
        status: 'Статус',
        cancellationNotes: 'Примечание',
        feeRange: 'Стоимость содержания',
        fee: 'Стоимость содержания',
        receipt: 'Вложения',
        createdAt: 'Создана',
        updatedAt: 'Обновлена',
        createdAtRange: 'Создана',
        period: 'Период',
      },
      enumerators: {
        status: {
          booked: 'Находится в эксплуатирующей организации',
          progress: 'Находится на вакцинации',
          cancelled: 'Находится на карантине',
          completed: 'Отдана к хозяину',
        },
      },
      new: {
        title: 'Новое Учет животных',
      },
      view: {
        title: 'Обзор пристройств',
      },
      importer: {
        title: 'Импорт пристройств',
        fileName: 'booking_import_template',
        hint:
          'Столбцы файлов / изображений должны быть URL-адресами файлов, разделенными пробелом.',
      },
      validation: {
        periodPast: 'Оформите учет животных заранее, начало периода должено быть немного поздним',
        periodFull:
          'Извините, эксплуатирующая организация сейчас заполнена',
      },
    },
  },

  auth: {
    profile: {
      title: 'Редактировать профиль',
      success: 'Профиль успешно обновлен',
    },
    createAnAccount: 'Создать аккаунт',
    rememberMe: 'Запомнить меня',
    forgotPassword: 'Напомнить пароль',
    signin: 'Войти',
    signup: 'Зарегистрироваться',
    signout: 'Выйти',
    alreadyHaveAnAccount:
      'Уже есть аккаунт? Войти в систему.',
    signinWithAnotherAccount:
      'Войти с другой учетной записью',
    emailUnverified: {
      message: `Пожалуйста, подтвердите Вашу почту <strong>{0}</strong>, чтобы продолжить.`,
      submit: `Отправить повторное подтверждение по электронной почте`,
    },
    emptyPermissions: {
      message: `У вас еще нет разрешений. Подождите, пока администратор предоставит вам привилегии.`,
    },
    passwordReset: {
      message: 'Отправить письмо для сброса пароля',
      error: `Электронная почта не распознана`,
    },
    emailAddressVerificationEmail: {
      error: `Электронная почта не распознана`,
    },
    verificationEmailSuccess: `Письмо с подтверждением отправлено успешно`,
    passwordResetSuccess: `Электронное письмо для сброса пароля успешно отправлено`,
  },

  roles: {
    manager: {
      label: 'Департамент',
      description: 'Полный доступ к ресурсам',
    },
    employee: {
      label: 'Префектура',
      description: 'Доступ только для эксплуатирующих организаций, относящимся к определенной префектуре',
    },
    petOwner: {
      label: 'Эксплуатирующая организация',
      description: 'Доступ к животным в эксплуатирующей организации',
    },
  },

  iam: {
    title: 'Организации',
    menu: 'Организации',
    disable: 'Выключить',
    disabled: 'Выключен',
    enabled: 'Включен',
    enable: 'Включить',
    doEnableSuccess: 'Профиль успешно включен',
    doDisableSuccess: 'Профиль успешно выключен',
    doDisableAllSuccess: 'Профили успешно выключены',
    doEnableAllSuccess: 'Профили успешно включены',
    doAddSuccess: 'Профили успешно сохранены',
    doUpdateSuccess: 'Профиль успешно сохранен',
    viewBy: 'Просмотрен',
    users: {
      name: 'Организации',
      label: 'Организации',
      exporterFileName: 'users_export',
      doRemoveAllSelectedSuccess:
        'Права профиля удалены',
    },
    roles: {
      label: 'Структура',
      doRemoveAllSelectedSuccess:
        'Права успешно удалены',
    },
    edit: {
      title: 'Обговить профиль',
    },
    new: {
      title: 'Новый пользователь',
      emailsHint:
        'Разделите несколько адресов электронной почты запятой.',
    },
    view: {
      title: 'Просмотр профиля',
      activity: 'Деятельность',
    },
    importer: {
      title: 'Импорт профилей',
      fileName: 'users_import_template',
      hint:
        'Столбцы файлов / изображений должны быть URL-адресами файлов, разделенными пробелом. Отношения должны быть идентификаторами ссылочных записей, разделенными пробелом. Роли должны быть идентификаторами ролей, разделенными пробелом.',
    },
    errors: {
      userAlreadyExists:
        'Профиль с этим адресом электронной почты уже существует',
      userNotFound: 'Профиль не найден',
      disablingHimself: `Вы не можете отключить себя`,
      revokingOwnPermission: `Вы не можете отозвать разрешение собственного менеджера`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Uid',
      avatars: 'Логотип',
      email: 'Почта',
      emails: 'Электронные ящики',
      fullName: 'Название и комментарий',
      firstName: 'Название',
      lastName: 'Комментарий',
      status: 'Статус',
      disabled: 'Выключен',
      phoneNumber: 'Телефон',
      role: 'Структура',
      createdAt: 'Создан',
      updatedAt: 'Сдален',
      roleUser: 'Права пользователя',
      roles: 'Структура',
      createdAtRange: 'Создан',
      password: 'Пароль',
      rememberMe: 'Запомнить',
    },
    enabled: 'Включен',
    disabled: 'Выключен',
    validations: {
      // eslint-disable-next-line
      email: 'Неправильно указана почта: ${value}',
    },
  },

  auditLog: {
    menu: 'Действия',
    title: 'Действия',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Разделите несколько объектов с помощью запятой.',
    fields: {
      id: 'Id',
      timestampRange: 'Период',
      entityName: 'Свойство',
      entityNames: 'Свойства',
      entityId: 'ID свойства',
      action: 'Действие',
      values: 'Значение',
      timestamp: 'Дата',
      createdByEmail: 'Email профиля',
    },
  },
  settings: {
    title: 'Настройки',
    menu: 'Настройки',
    save: {
      success:
        'Настройки успешно сохранены. Страница перезагрузится через {0} секунд, чтобы изменения вступили в силу.',
    },
    fields: {
      theme: 'Тема',
      dailyFee: 'Средняя стоимость содержания',
      capacity: 'Общее количество мест',
    },
    colors: {
      default: 'Стандартная',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  home: {
    menu: 'Главная',
  },
  errors: {
    backToHome: 'Вернуться на главную',
    403: `Извините, у вас нет доступа к этой странице`,
    404: 'Извините, посещенная вами страница не существует',
    500: 'Извините, сервер сообщает об ошибке',
    forbidden: {
      message: 'Запрещено',
    },
    validation: {
      message: 'Произошла ошибка',
    },
    defaultErrorMessage: 'Опс, произошла ошибка',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: 'Неправельный ${path}',
      required: '${path} обязательно',
      oneOf:
        '${path} должно быть одно из следующих значений: ${values}',
      notOneOf:
        '${path} не должно быть одним из следующих значений: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} должен быть ${type}`;
      },
    },
    string: {
      length:
        '${path} должен содержать ровно ${length} символов',
      min: '${path} должен быть не менее ${min} символов',
      max: '${path} должно быть самое большее ${max} символов',
      matches:
        '${path} должно соответствовать следующему: "${regex}"',
      email: '${path} должен быть действующий адрес электронной почты',
      url: '${path} must be a valid URL',
      trim: '${path} должна быть обрезанная строка',
      lowercase: '${path} должна быть строчной строкой',
      uppercase: '${path} должна быть строка в верхнем регистре',
      selected: '${path} должен быть выбран',
    },
    number: {
      min:
        '${path} должно быть больше или равно ${min}',
      max: '${path} должно быть меньше или равно ${max}',
      lessThan: '${path} должно быть меньше чем ${less}',
      moreThan: '${path} должно быть больше чем ${more}',
      notEqual: '${path} не должно быть равно ${notEqual}',
      positive: '${path} должно быть положительное число',
      negative: '${path} должно быть отрицательное число',
      integer: '${path} должно быть целым числом',
    },
    date: {
      min: '${path} поле должно быть позже, чем ${min}',
      max: '${path} поле должно быть раньше, чем ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} поле не может иметь ключи, не указанные в форме объекта',
    },
    array: {
      min: '${path} поле должно иметь не менее ${min} элементов',
      max:
        '${path} поле должно иметь значение меньше или равно ${max} элементов',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Загрузить',
    image: 'Вы должны загрузить изображение',
    size: 'Файл слишком большой. Максимально допустимый размер {0}',
    formats: `Неверный формат. Должно быть '{0}'.`,
  },
  importer: {
    line: 'Линия',
    status: 'Статус',
    pending: 'Ожидание',
    imported: 'Импортированый',
    error: 'Ошибка',
    total: `{0} импортированый, {1} в ожидании и {2} с ошибкой`,
    importedMessage: `Обработанный {0} из {1}.`,
    noNavigateAwayMessage:
      'Не уходите с этой страницы, иначе импорт будет остановлен.',
    completed: {
      success:
        'Импорт завершен. Все строки были успешно импортированы.',
      someErrors:
        'Обработка завершена, но некоторые строки не удалось импортировать.',
      allErrors: 'Ошибка импорта. Нет действительных строк.',
    },
    form: {
      downloadTemplate: 'Скачать шаблон',
      hint:
        'Щелкните или перетащите файл в эту область, чтобы продолжить',
    },
    list: {
      discardConfirm:
        'Ты уверен? Неимпортированные данные будут потеряны.',
    },
    errors: {
      invalidFileEmpty: 'Файл пуст',
      invalidFileExcel:
        'Разрешены только файлы Excel (.xlsx)',
      invalidFileUpload:
        'Файл поврежден. Убедитесь, что вы используете последнюю версию шаблона.',
      importHashRequired: 'Требуется импортный хеш',
      importHashExistent: 'Данные уже импортированы',
    },
  },

  autocomplete: {
    loading: 'Загрузка...',
  },

  imagesViewer: {
    noImage: 'Нет изображения',
  },

  firebaseErrors: {
    'auth/user-disabled': 'Ваша учетная запись отключена',
    'auth/user-not-found': `Извините, мы не распознаем ваши учетные данные`,
    'auth/wrong-password': `Извините, мы не распознаем ваши учетные данные`,
    'auth/weak-password': 'Этот пароль слишком слабый',
    'auth/email-already-in-use': 'Email уже используется',
    'auth/invalid-email': 'Пожалуйста, предоставьте действительный адрес электронной почты',
    'auth/account-exists-with-different-credential':
      'Электронная почта уже используется для другого метода аутентификации.',
    'auth/credential-already-in-use':
      'Учетные данные уже используются',
  },
};

export default ruRU;
