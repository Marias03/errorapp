export const erroresNavegador = [
  {
    codigo: 404,
    tipo: { es: "Cliente", en: "Client", ru: "Клиент" },
    titulo: {
      es: "Not Found - Recurso no encontrado",
      en: "Not Found - Resource not found",
      ru: "Not Found - Ресурс не найден",
    },
    descripcion: {
      es: "El servidor no pudo encontrar el contenido solicitado. Este error ocurre cuando el servidor no encuentra la página o recurso solicitado.",
      en: "The server could not find the requested content. This error occurs when the server cannot find the requested page or resource.",
      ru: "Сервер не смог найти запрошенный контент. Эта ошибка возникает, когда сервер не может найти запрошенную страницу или ресурс.",
    },
    solucion: {
      es: "Verificar que la URL sea correcta. Implementar una página 404 personalizada. Redirigir a una página alternativa válida.",
      en: "Verify the URL is correct. Implement a custom 404 page. Redirect to a valid alternative page.",
      ru: "Проверьте правильность URL. Реализуйте пользовательскую страницу 404. Перенаправьте на действующую альтернативную страницу.",
    },
    impacto: {
      es: "Alto en SEO y experiencia de usuario",
      en: "High impact on SEO and user experience",
      ru: "Высокое влияние на SEO и пользовательский опыт",
    },
    preventivo: {
      es: [
        "Implementar redirecciones 301/302 para URLs obsoletas",
        "Mantener un sitemap.xml actualizado",
        "Verificar regularmente enlaces rotos",
        "Implementar sistema de logs para rastrear 404s frecuentes",
      ],
      en: [
        "Implement 301/302 redirects for outdated URLs",
        "Keep sitemap.xml updated",
        "Regularly check for broken links",
        "Implement logging system to track frequent 404s",
      ],
      ru: [
        "Внедрить редиректы 301/302 для устаревших URL",
        "Поддерживать актуальный sitemap.xml",
        "Регулярно проверять битые ссылки",
        "Внедрить систему логов для отслеживания частых 404",
      ],
    },
    ejemplos: {
      JavaScript: `
  // Manejo de error 404 en fetch
  fetch('https://api.ejemplo.com/recurso')
    .then(response => {
      if (response.status === 404) {
        throw new Error('Recurso no encontrado');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error:', error);
      mostrarPagina404();
    });`,
      Python: `
  # Flask - Manejador de error 404
  from flask import Flask, render_template
  app = Flask(__name__)
  
  @app.errorhandler(404)
  def pagina_no_encontrada(error):
      return render_template('404.html'), 404`,
      PHP: `
  <?php
  header("HTTP/1.0 404 Not Found");
  echo "<h1>Error 404</h1>";
  error_log("Página no encontrada: " . $_SERVER['REQUEST_URI']);
  ?>`,
    },
    lenguajes: ["JavaScript", "Python", "PHP", "Java", "Ruby", "C#", "Go"],
    recursos: [
      {
        titulo: "MDN Web Docs - 404",
        url: "https://developer.mozilla.org/es/docs/Web/HTTP/Status/404",
      },
      {
        titulo: "Google Search Console - Errores 404",
        url: "https://support.google.com/webmasters/answer/2409439",
      },
    ],
  },
  {
    codigo: 500,
    tipo: { es: "Servidor", en: "Server", ru: "Сервер" },
    titulo: {
      es: "Internal Server Error - Error interno del servidor",
      en: "Internal Server Error",
      ru: "Internal Server Error - Внутренняя ошибка сервера",
    },
    descripcion: {
      es: "Error genérico que ocurre cuando el servidor encuentra una condición inesperada que le impide completar la solicitud.",
      en: "A generic error that occurs when the server encounters an unexpected condition that prevents it from completing the request.",
      ru: "Общая ошибка, возникающая когда сервер сталкивается с неожиданным состоянием, которое мешает выполнить запрос.",
    },
    solucion: {
      es: "Revisar logs del servidor. Implementar manejo de errores adecuado. Verificar la configuración del servidor.",
      en: "Review server logs. Implement proper error handling. Verify server configuration.",
      ru: "Проверьте логи сервера. Реализуйте надлежащую обработку ошибок. Проверьте конфигурацию сервера.",
    },
    impacto: {
      es: "Crítico en disponibilidad del servicio",
      en: "Critical impact on service availability",
      ru: "Критическое влияние на доступность сервиса",
    },
    preventivo: {
      es: [
        "Implementar logging exhaustivo",
        "Configurar monitoreo de recursos del servidor",
        "Implementar circuit breakers",
        "Realizar pruebas de carga",
        "Mantener backups actualizados",
      ],
      en: [
        "Implement exhaustive logging",
        "Configure server resource monitoring",
        "Implement circuit breakers",
        "Perform load testing",
        "Keep backups updated",
      ],
      ru: [
        "Внедрить подробное логирование",
        "Настроить мониторинг ресурсов сервера",
        "Внедрить circuit breakers",
        "Проводить нагрузочное тестирование",
        "Поддерживать актуальные резервные копии",
      ],
    },
    ejemplos: {
      Python: `
  @app.errorhandler(500)
  def error_servidor(error):
      app.logger.error(f'Error del servidor: {error}')
      return render_template('500.html'), 500`,
      Java: `
  @ExceptionHandler(Exception.class)
  public ResponseEntity<Object> manejarErrorServidor(Exception ex) {
      logger.error("Error 500: ", ex);
      return new ResponseEntity<>("Error interno", HttpStatus.INTERNAL_SERVER_ERROR);
  }`,
      Go: `
  func recoveryMiddleware(next http.Handler) http.Handler {
      return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
          defer func() {
              if err := recover(); err != nil {
                  http.Error(w, "Error interno", http.StatusInternalServerError)
              }
          }()
          next.ServeHTTP(w, r)
      })
  }`,
    },
    lenguajes: ["Python", "PHP", "Java", "Ruby", "C#", "Go"],
    recursos: [
      {
        titulo: "MDN Web Docs - 500",
        url: "https://developer.mozilla.org/es/docs/Web/HTTP/Status/500",
      },
    ],
  },
  {
    codigo: 400,
    tipo: { es: "Cliente", en: "Client", ru: "Клиент" },
    titulo: {
      es: "Bad Request - Solicitud incorrecta",
      en: "Bad Request",
      ru: "Bad Request - Неверный запрос",
    },
    descripcion: {
      es: "El servidor no puede procesar la solicitud debido a un error del cliente, como sintaxis incorrecta, tamaño demasiado grande o solicitud malformada.",
      en: "The server cannot process the request due to a client error, such as incorrect syntax, too large size, or malformed request.",
      ru: "Сервер не может обработать запрос из-за ошибки клиента: неверный синтаксис, слишком большой размер или некорректный запрос.",
    },
    solucion: {
      es: "Validar los datos enviados antes de la solicitud. Verificar el formato y estructura de la solicitud.",
      en: "Validate the data sent before the request. Verify the format and structure of the request.",
      ru: "Проверяйте данные перед отправкой запроса. Убедитесь в корректности формата и структуры запроса.",
    },
    impacto: {
      es: "Medio - Afecta la experiencia del usuario y puede causar frustración",
      en: "Medium - Affects user experience and can cause frustration",
      ru: "Средний - Влияет на пользовательский опыт и может вызвать разочарование",
    },
    preventivo: {
      es: [
        "Implementar validación exhaustiva en el frontend",
        "Utilizar bibliotecas de validación de esquemas",
        "Documentar claramente el formato esperado",
        "Implementar rate limiting",
        "Validar tipos de datos y rangos permitidos",
      ],
      en: [
        "Implement exhaustive frontend validation",
        "Use schema validation libraries",
        "Clearly document the expected format",
        "Implement rate limiting",
        "Validate data types and allowed ranges",
      ],
      ru: [
        "Внедрить исчерпывающую валидацию на фронтенде",
        "Использовать библиотеки валидации схем",
        "Чётко документировать ожидаемый формат",
        "Внедрить rate limiting",
        "Проверять типы данных и допустимые диапазоны",
      ],
    },
    ejemplos: {
      JavaScript: `
  const enviarDatos = async (datos) => {
    if (!datos.email || !datos.password) {
      throw new Error('Datos inválidos');
    }
    const response = await fetch('/api/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos),
    });
    if (response.status === 400) {
      const error = await response.json();
      throw new Error(error.mensaje);
    }
    return response.json();
  };`,
      Python: `
  @app.route('/validar', methods=['POST'])
  def validar_usuario():
      try:
          datos = json.loads(request.body)
          if 'email' not in datos:
              raise ValidationError('Email es requerido')
          return JsonResponse({'mensaje': 'Datos válidos'})
      except ValidationError as e:
          return JsonResponse({'error': str(e)}, status=400)`,
      PHP: `
  <?php
  $datos = json_decode(file_get_contents('php://input'), true);
  if (!filter_var($datos['email'], FILTER_VALIDATE_EMAIL)) {
      http_response_code(400);
      echo json_encode(['error' => 'Email inválido']);
      exit;
  }
  ?>`,
    },
    lenguajes: ["JavaScript", "Python", "PHP", "Java"],
    recursos: [
      {
        titulo: "MDN Web Docs - 400",
        url: "https://developer.mozilla.org/es/docs/Web/HTTP/Status/400",
      },
    ],
  },
  {
    codigo: 401,
    tipo: { es: "Cliente", en: "Client", ru: "Клиент" },
    titulo: {
      es: "Unauthorized - No autorizado",
      en: "Unauthorized",
      ru: "Unauthorized - Не авторизован",
    },
    descripcion: {
      es: "El cliente debe autenticarse para obtener la respuesta solicitada. Similar a 403, pero específicamente para casos donde se requiere autenticación.",
      en: "The client must authenticate to get the requested response. Similar to 403, but specifically for cases where authentication is required.",
      ru: "Клиент должен пройти аутентификацию для получения ответа. Похоже на 403, но конкретно для случаев, когда требуется аутентификация.",
    },
    solucion: {
      es: "Implementar sistema de autenticación robusto. Manejar tokens de acceso correctamente. Implementar mecanismos de renovación de tokens.",
      en: "Implement a robust authentication system. Handle access tokens correctly. Implement token renewal mechanisms.",
      ru: "Реализуйте надёжную систему аутентификации. Корректно обрабатывайте токены доступа. Реализуйте механизмы обновления токенов.",
    },
    impacto: {
      es: "Alto - Puede comprometer la seguridad de los datos",
      en: "High - Can compromise data security",
      ru: "Высокий - Может поставить под угрозу безопасность данных",
    },
    preventivo: {
      es: [
        "Implementar HTTPS para todas las comunicaciones",
        "Usar tokens JWT con tiempo de expiración",
        "Implementar renovación automática de tokens",
        "Mantener una lista de tokens revocados",
        "Implementar autenticación de dos factores",
      ],
      en: [
        "Implement HTTPS for all communications",
        "Use JWT tokens with expiration time",
        "Implement automatic token renewal",
        "Maintain a list of revoked tokens",
        "Implement two-factor authentication",
      ],
      ru: [
        "Внедрить HTTPS для всех коммуникаций",
        "Использовать JWT токены со сроком действия",
        "Реализовать автоматическое обновление токенов",
        "Вести список отозванных токенов",
        "Внедрить двухфакторную аутентификацию",
      ],
    },
    ejemplos: {
      JavaScript: `
  class AuthService {
    static async login(credentials) {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      if (response.status === 401) throw new Error('Credenciales inválidas');
      const { token } = await response.json();
      localStorage.setItem('token', token);
      return token;
    }
  }`,
      Python: `
  def token_required(f):
      @wraps(f)
      def decorated(*args, **kwargs):
          token = request.headers.get('Authorization')
          if not token:
              return jsonify({'mensaje': 'Token faltante'}), 401
          try:
              data = jwt.decode(token.split(' ')[1], SECRET_KEY, algorithms=["HS256"])
          except:
              return jsonify({'mensaje': 'Token inválido'}), 401
          return f(*args, **kwargs)
      return decorated`,
    },
    lenguajes: ["JavaScript", "Python", "PHP", "Java", "Ruby"],
    recursos: [
      {
        titulo: "MDN Web Docs - 401",
        url: "https://developer.mozilla.org/es/docs/Web/HTTP/Status/401",
      },
      {
        titulo: "Guía de autenticación JWT",
        url: "https://jwt.io/introduction",
      },
    ],
  },
  {
    codigo: 403,
    tipo: { es: "Cliente", en: "Client", ru: "Клиент" },
    titulo: {
      es: "Forbidden - Acceso Prohibido",
      en: "Forbidden",
      ru: "Forbidden - Доступ запрещён",
    },
    descripcion: {
      es: "El servidor comprende la solicitud pero se niega a autorizarla. A diferencia del 401, la autenticación no haría diferencia.",
      en: "The server understands the request but refuses to authorize it. Unlike 401, authentication would make no difference.",
      ru: "Сервер понимает запрос, но отказывается его авторизовать. В отличие от 401, аутентификация не изменит ситуацию.",
    },
    solucion: {
      es: "Verificar permisos de usuario. Implementar control de acceso basado en roles (RBAC). Revisar las políticas de seguridad.",
      en: "Verify user permissions. Implement role-based access control (RBAC). Review security policies.",
      ru: "Проверьте права пользователя. Реализуйте управление доступом на основе ролей (RBAC). Пересмотрите политики безопасности.",
    },
    impacto: {
      es: "Alto - Afecta la seguridad y el acceso a recursos críticos",
      en: "High - Affects security and access to critical resources",
      ru: "Высокий - Влияет на безопасность и доступ к критическим ресурсам",
    },
    preventivo: {
      es: [
        "Implementar RBAC",
        "Mantener política de mínimo privilegio",
        "Documentar requisitos de acceso",
        "Auditar intentos de acceso no autorizado",
        "Implementar tiempo de espera en intentos fallidos",
      ],
      en: [
        "Implement RBAC",
        "Maintain least privilege policy",
        "Document access requirements",
        "Audit unauthorized access attempts",
        "Implement timeout on failed attempts",
      ],
      ru: [
        "Внедрить RBAC",
        "Соблюдать принцип минимальных привилегий",
        "Документировать требования доступа",
        "Проверять попытки несанкционированного доступа",
        "Реализовать задержку при неудачных попытках",
      ],
    },
    ejemplos: {
      Python: `
  @permission_required('app.puede_acceder_admin', raise_exception=True)
  def vista_admin(request):
      return render(request, 'admin_panel.html')`,
      PHP: `
  <?php
  if (!$user->hasPermission($resource)) {
      header('HTTP/1.1 403 Forbidden');
      echo json_encode(['error' => 'Acceso denegado']);
      exit();
  }
  ?>`,
      Java: `
  @PreAuthorize("hasRole('ADMIN')")
  @GetMapping("/admin/panel")
  public ResponseEntity<?> adminPanel() {
      return ResponseEntity.ok(adminService.getDashboardData());
  }`,
    },
    lenguajes: ["Python", "PHP", "Java", "C#"],
    recursos: [
      {
        titulo: "MDN Web Docs - 403",
        url: "https://developer.mozilla.org/es/docs/Web/HTTP/Status/403",
      },
    ],
  },
  {
    codigo: 404,
    tipo: { es: "Cliente", en: "Client", ru: "Клиент" },
    titulo: {
      es: "Not Found - Recurso no encontrado",
      en: "Not Found",
      ru: "Not Found - Ресурс не найден",
    },
    descripcion: {
      es: "El servidor no pudo encontrar el contenido solicitado.",
      en: "The server could not find the requested content.",
      ru: "Сервер не смог найти запрошенный контент.",
    },
    solucion: {
      es: "Verificar que la URL sea correcta.",
      en: "Verify the URL is correct.",
      ru: "Проверьте правильность URL.",
    },
    impacto: {
      es: "Alto en SEO",
      en: "High SEO impact",
      ru: "Высокое влияние на SEO",
    },
    preventivo: { es: [], en: [], ru: [] },
    ejemplos: {},
    lenguajes: [],
    recursos: [],
  },
  {
    codigo: 502,
    tipo: { es: "Servidor", en: "Server", ru: "Сервер" },
    titulo: {
      es: "Bad Gateway - Puerta de enlace incorrecta",
      en: "Bad Gateway",
      ru: "Bad Gateway - Неверный шлюз",
    },
    descripcion: {
      es: "El servidor, mientras actuaba como puerta de enlace o proxy, recibió una respuesta no válida del servidor ascendente.",
      en: "The server, while acting as a gateway or proxy, received an invalid response from the upstream server.",
      ru: "Сервер, выступая в роли шлюза или прокси, получил недействительный ответ от вышестоящего сервера.",
    },
    solucion: {
      es: "Verificar la configuración del proxy/gateway. Revisar la conectividad con servicios upstream. Implementar reintentos automáticos.",
      en: "Verify proxy/gateway configuration. Check connectivity with upstream services. Implement automatic retries.",
      ru: "Проверьте конфигурацию прокси/шлюза. Проверьте связь с вышестоящими сервисами. Реализуйте автоматические повторные попытки.",
    },
    impacto: {
      es: "Alto - Afecta la disponibilidad de servicios dependientes",
      en: "High - Affects availability of dependent services",
      ru: "Высокий - Влияет на доступность зависимых сервисов",
    },
    preventivo: {
      es: [
        "Implementar monitoreo de servicios upstream",
        "Configurar timeouts apropiados",
        "Implementar circuit breakers",
        "Mantener servicios de backup",
        "Configurar alertas de latencia",
      ],
      en: [
        "Implement upstream service monitoring",
        "Configure appropriate timeouts",
        "Implement circuit breakers",
        "Maintain backup services",
        "Configure latency alerts",
      ],
      ru: [
        "Внедрить мониторинг вышестоящих сервисов",
        "Настроить подходящие таймауты",
        "Внедрить circuit breakers",
        "Поддерживать резервные сервисы",
        "Настроить оповещения о задержках",
      ],
    },
    ejemplos: {
      JavaScript: `
  const fetchWithRetry = async (url, options = {}, maxRetries = 3) => {
    for (let i = 0; i < maxRetries; i++) {
      const response = await fetch(url, options);
      if (response.status !== 502) return response;
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
    }
  };`,
      Nginx: `
  upstream backend_servers {
      server backend1.example.com:8080;
      server backend2.example.com:8080 backup;
  }
  server {
      location / {
          proxy_pass http://backend_servers;
          proxy_next_upstream error timeout http_502;
      }
  }`,
    },
    lenguajes: ["JavaScript", "Go", "Nginx", "Java"],
    recursos: [
      {
        titulo: "MDN Web Docs - 502",
        url: "https://developer.mozilla.org/es/docs/Web/HTTP/Status/502",
      },
    ],
  },
  {
    codigo: 503,
    tipo: { es: "Servidor", en: "Server", ru: "Сервер" },
    titulo: {
      es: "Service Unavailable - Servicio no disponible",
      en: "Service Unavailable",
      ru: "Service Unavailable - Сервис недоступен",
    },
    descripcion: {
      es: "El servidor no está listo para manejar la solicitud. Causas comunes incluyen servidor en mantenimiento o sobrecargado.",
      en: "The server is not ready to handle the request. Common causes include server maintenance or overload.",
      ru: "Сервер не готов обрабатывать запрос. Частые причины: техническое обслуживание или перегрузка сервера.",
    },
    solucion: {
      es: "Implementar balanceo de carga. Configurar auto-scaling. Mostrar página de mantenimiento personalizada.",
      en: "Implement load balancing. Configure auto-scaling. Show a custom maintenance page.",
      ru: "Реализуйте балансировку нагрузки. Настройте автомасштабирование. Покажите страницу технического обслуживания.",
    },
    impacto: {
      es: "Alto - Servicio completamente inaccesible",
      en: "High - Service completely inaccessible",
      ru: "Высокий - Сервис полностью недоступен",
    },
    preventivo: {
      es: [
        "Implementar monitoreo de recursos",
        "Configurar auto-scaling",
        "Mantener página de mantenimiento actualizada",
        "Establecer políticas de control de carga",
        "Planificar ventanas de mantenimiento",
      ],
      en: [
        "Implement resource monitoring",
        "Configure auto-scaling",
        "Keep maintenance page updated",
        "Establish load control policies",
        "Plan maintenance windows",
      ],
      ru: [
        "Внедрить мониторинг ресурсов",
        "Настроить автомасштабирование",
        "Поддерживать актуальную страницу обслуживания",
        "Установить политики контроля нагрузки",
        "Планировать окна обслуживания",
      ],
    },
    ejemplos: {
      Nginx: `
  if (-f $document_root/maintenance.enable) {
      return 503;
  }
  error_page 503 @maintenance;
  location @maintenance {
      rewrite ^(.*)$ /index.html break;
      add_header Retry-After 3600;
  }`,
      Python: `
  if self.maintenance_mode:
      return Response(
          content="Servidor en mantenimiento",
          status_code=503,
          headers={"Retry-After": "3600"}
      )`,
    },
    lenguajes: ["Python", "JavaScript", "Nginx", "Go"],
    recursos: [
      {
        titulo: "MDN Web Docs - 503",
        url: "https://developer.mozilla.org/es/docs/Web/HTTP/Status/503",
      },
    ],
  },
  {
    codigo: 504,
    tipo: { es: "Servidor", en: "Server", ru: "Сервер" },
    titulo: {
      es: "Gateway Timeout - Tiempo de espera agotado",
      en: "Gateway Timeout",
      ru: "Gateway Timeout - Таймаут шлюза",
    },
    descripcion: {
      es: "El servidor, mientras actuaba como proxy o gateway, no recibió una respuesta oportuna del servidor ascendente.",
      en: "The server, while acting as a proxy or gateway, did not receive a timely response from the upstream server.",
      ru: "Сервер, выступая в роли прокси или шлюза, не получил своевременного ответа от вышестоящего сервера.",
    },
    solucion: {
      es: "Ajustar configuraciones de timeout. Optimizar servicios lentos. Implementar timeouts progresivos.",
      en: "Adjust timeout settings. Optimize slow services. Implement progressive timeouts.",
      ru: "Настройте параметры таймаута. Оптимизируйте медленные сервисы. Реализуйте прогрессивные таймауты.",
    },
    impacto: {
      es: "Alto - Puede causar pérdida de datos o inconsistencias",
      en: "High - Can cause data loss or inconsistencies",
      ru: "Высокий - Может привести к потере данных или несогласованности",
    },
    preventivo: {
      es: [
        "Configurar timeouts apropiados en cada capa",
        "Implementar circuit breakers",
        "Monitorear latencia de servicios",
        "Mantener servicios de respaldo",
        "Implementar timeouts progresivos",
      ],
      en: [
        "Configure appropriate timeouts at each layer",
        "Implement circuit breakers",
        "Monitor service latency",
        "Maintain backup services",
        "Implement progressive timeouts",
      ],
      ru: [
        "Настроить таймауты на каждом уровне",
        "Внедрить circuit breakers",
        "Мониторить задержку сервисов",
        "Поддерживать резервные сервисы",
        "Реализовать прогрессивные таймауты",
      ],
    },
    ejemplos: {
      Nginx: `
  proxy_connect_timeout 60s;
  proxy_send_timeout 60s;
  proxy_read_timeout 60s;`,
      JavaScript: `
  const api = axios.create({ timeout: 5000 });
  const fetchWithProgressiveTimeout = async (url, maxRetries = 3) => {
    for (let i = 0; i < maxRetries; i++) {
      try {
        const timeout = Math.min(5000 * Math.pow(2, i), 30000);
        return await api.get(url, { timeout });
      } catch (error) {
        if (error.response?.status !== 504) throw error;
      }
    }
  };`,
    },
    lenguajes: ["JavaScript", "Go", "Nginx", "Python"],
    recursos: [
      {
        titulo: "MDN Web Docs - 504",
        url: "https://developer.mozilla.org/es/docs/Web/HTTP/Status/504",
      },
    ],
  },
  {
    codigo: 405,
    tipo: { es: "Cliente", en: "Client", ru: "Клиент" },
    titulo: {
      es: "Method Not Allowed - Método no permitido",
      en: "Method Not Allowed",
      ru: "Method Not Allowed - Метод не разрешён",
    },
    descripcion: {
      es: "El método solicitado es conocido por el servidor pero no está soportado por el recurso de destino.",
      en: "The requested method is known by the server but not supported by the target resource.",
      ru: "Запрошенный метод известен серверу, но не поддерживается целевым ресурсом.",
    },
    solucion: {
      es: "Verificar el método HTTP usado. Implementar los métodos necesarios. Documentar los métodos permitidos.",
      en: "Verify the HTTP method used. Implement the necessary methods. Document the allowed methods.",
      ru: "Проверьте используемый HTTP-метод. Реализуйте необходимые методы. Задокументируйте разрешённые методы.",
    },
    impacto: {
      es: "Medio - Afecta la usabilidad de la API",
      en: "Medium - Affects API usability",
      ru: "Средний - Влияет на удобство использования API",
    },
    preventivo: {
      es: [
        "Documentar claramente los métodos permitidos",
        "Implementar middleware de validación",
        "Usar los verbos HTTP correctamente",
        "Incluir header Allow en respuestas",
        "Mantener consistencia en la API",
      ],
      en: [
        "Clearly document allowed methods",
        "Implement validation middleware",
        "Use HTTP verbs correctly",
        "Include Allow header in responses",
        "Maintain API consistency",
      ],
      ru: [
        "Чётко документировать разрешённые методы",
        "Внедрить промежуточное ПО для валидации",
        "Правильно использовать HTTP-глаголы",
        "Включать заголовок Allow в ответы",
        "Поддерживать согласованность API",
      ],
    },
    ejemplos: {
      Python: `
  @app.route('/api/recursos', methods=['GET', 'POST'])
  def manejar_recursos():
      if request.method == 'GET':
          return jsonify(obtener_recursos())
      return jsonify(crear_recurso(request.json))
  
  @app.errorhandler(405)
  def metodo_no_permitido(error):
      return jsonify({'error': 'Método no permitido'}), 405`,
      Java: `
  @GetMapping
  public ResponseEntity<?> obtenerRecursos() {
      return ResponseEntity.ok(servicio.obtenerTodos());
  }
  
  @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
  public ResponseEntity<?> handleMethodNotAllowed(HttpRequestMethodNotSupportedException ex) {
      return ResponseEntity.status(HttpStatus.METHOD_NOT_ALLOWED).build();
  }`,
    },
    lenguajes: ["Python", "JavaScript", "Java", "PHP"],
    recursos: [
      {
        titulo: "MDN Web Docs - 405",
        url: "https://developer.mozilla.org/es/docs/Web/HTTP/Status/405",
      },
    ],
  },
  {
    codigo: 429,
    tipo: { es: "Cliente", en: "Client", ru: "Клиент" },
    titulo: {
      es: "Too Many Requests - Demasiadas peticiones",
      en: "Too Many Requests",
      ru: "Too Many Requests - Слишком много запросов",
    },
    descripcion: {
      es: "El usuario ha enviado demasiadas solicitudes en un período de tiempo determinado.",
      en: "The user has sent too many requests in a given period of time (rate limiting).",
      ru: "Пользователь отправил слишком много запросов за определённый период времени (ограничение частоты).",
    },
    solucion: {
      es: "Implementar rate limiting. Usar cola de solicitudes. Informar límites mediante headers.",
      en: "Implement rate limiting. Use request queuing. Inform limits via headers.",
      ru: "Внедрите ограничение частоты запросов. Используйте очередь запросов. Сообщайте об ограничениях через заголовки.",
    },
    impacto: {
      es: "Medio - Protege recursos pero puede afectar usuarios legítimos",
      en: "Medium - Protects resources but may affect legitimate users",
      ru: "Средний - Защищает ресурсы, но может затронуть легитимных пользователей",
    },
    preventivo: {
      es: [
        "Implementar rate limiting por IP/usuario",
        "Usar almacenamiento distribuido para límites",
        "Proporcionar headers informativos",
        "Implementar backoff exponencial",
        "Documentar límites de uso",
      ],
      en: [
        "Implement rate limiting per IP/user",
        "Use distributed storage for limits",
        "Provide informative headers",
        "Implement exponential backoff",
        "Document usage limits",
      ],
      ru: [
        "Внедрить ограничение по IP/пользователю",
        "Использовать распределённое хранилище для лимитов",
        "Предоставлять информативные заголовки",
        "Реализовать экспоненциальную задержку",
        "Документировать лимиты использования",
      ],
    },
    ejemplos: {
      Python: `
  @app.middleware("http")
  async def rate_limit_middleware(request: Request, call_next):
      if not rate_limiter.is_allowed(request.client.host):
          return JSONResponse(status_code=429,
              content={"error": "Demasiadas solicitudes"},
              headers={"Retry-After": "60"})
      return await call_next(request)`,
      Nginx: `
  limit_req_zone $binary_remote_addr zone=api_limit:10m rate=10r/s;
  server {
      location /api/ {
          limit_req zone=api_limit burst=20 nodelay;
      }
  }`,
    },
    lenguajes: ["Python", "JavaScript", "Nginx", "Go"],
    recursos: [
      {
        titulo: "MDN Web Docs - 429",
        url: "https://developer.mozilla.org/es/docs/Web/HTTP/Status/429",
      },
    ],
  },
  {
    codigo: 413,
    tipo: { es: "Cliente", en: "Client", ru: "Клиент" },
    titulo: {
      es: "Payload Too Large - Carga útil demasiado grande",
      en: "Payload Too Large",
      ru: "Payload Too Large - Слишком большой запрос",
    },
    descripcion: {
      es: "La solicitud es más grande de lo que el servidor está dispuesto o puede procesar.",
      en: "The request is larger than the server is willing or able to process.",
      ru: "Запрос превышает максимально допустимый размер, который сервер готов обработать.",
    },
    solucion: {
      es: "Limitar tamaño de archivos. Implementar carga fragmentada. Comprimir datos cuando sea posible.",
      en: "Limit file size. Implement chunked upload. Compress data when possible.",
      ru: "Ограничьте размер файлов. Реализуйте фрагментированную загрузку. Сжимайте данные при возможности.",
    },
    impacto: {
      es: "Medio - Afecta la capacidad de subir contenido",
      en: "Medium - Affects the ability to upload content",
      ru: "Средний - Влияет на возможность загрузки контента",
    },
    preventivo: {
      es: [
        "Configurar límites en todas las capas",
        "Implementar validación en el cliente",
        "Usar carga fragmentada para archivos grandes",
        "Comprimir datos cuando sea posible",
        "Documentar límites claramente",
      ],
      en: [
        "Configure limits at all layers",
        "Implement client-side validation",
        "Use chunked upload for large files",
        "Compress data when possible",
        "Clearly document limits",
      ],
      ru: [
        "Настроить лимиты на всех уровнях",
        "Реализовать валидацию на стороне клиента",
        "Использовать фрагментированную загрузку для больших файлов",
        "Сжимать данные при возможности",
        "Чётко документировать ограничения",
      ],
    },
    ejemplos: {
      JavaScript: `
  const MAX_SIZE = 5 * 1024 * 1024; // 5MB
  if (file.size > MAX_SIZE) {
    throw new Error('Archivo demasiado grande. Máximo: 5MB');
  }`,
      Nginx: `
  client_max_body_size 5M;
  client_body_buffer_size 128k;`,
    },
    lenguajes: ["JavaScript", "Python", "PHP", "Nginx"],
    recursos: [
      {
        titulo: "MDN Web Docs - 413",
        url: "https://developer.mozilla.org/es/docs/Web/HTTP/Status/413",
      },
    ],
  },
  {
    codigo: 408,
    tipo: { es: "Cliente", en: "Client", ru: "Клиент" },
    titulo: {
      es: "Request Timeout - Tiempo de espera de solicitud agotado",
      en: "Request Timeout",
      ru: "Request Timeout - Время ожидания запроса истекло",
    },
    descripcion: {
      es: "El servidor cerró la conexión porque el navegador no completó la solicitud dentro del tiempo límite.",
      en: "The server closed the connection because the browser did not complete the request within the time limit.",
      ru: "Сервер закрыл соединение, так как браузер не завершил запрос в течение установленного времени.",
    },
    solucion: {
      es: "Optimizar el tiempo de solicitud. Implementar reintentos automáticos. Manejar timeouts en el cliente.",
      en: "Optimize request time. Implement automatic retries. Handle timeouts on the client side.",
      ru: "Оптимизируйте время запроса. Реализуйте автоматические повторные попытки. Обрабатывайте таймауты на стороне клиента.",
    },
    impacto: {
      es: "Medio - Puede afectar operaciones largas",
      en: "Medium - Can affect long operations",
      ru: "Средний - Может влиять на длительные операции",
    },
    preventivo: {
      es: [
        "Implementar timeouts apropiados",
        "Usar procesamiento asíncrono",
        "Implementar reintentos automáticos",
        "Monitorear tiempos de respuesta",
        "Optimizar operaciones lentas",
      ],
      en: [
        "Implement appropriate timeouts",
        "Use asynchronous processing",
        "Implement automatic retries",
        "Monitor response times",
        "Optimize slow operations",
      ],
      ru: [
        "Внедрить подходящие таймауты",
        "Использовать асинхронную обработку",
        "Реализовать автоматические повторные попытки",
        "Мониторить время ответа",
        "Оптимизировать медленные операции",
      ],
    },
    ejemplos: {
      JavaScript: `
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);
  const response = await fetch(url, { signal: controller.signal });
  clearTimeout(timeoutId);`,
      Python: `
  async with asyncio.timeout(30):
      result = await proceso_largo()
  `,
    },
    lenguajes: ["JavaScript", "Python", "PHP", "Node.js"],
    recursos: [
      {
        titulo: "MDN Web Docs - 408",
        url: "https://developer.mozilla.org/es/docs/Web/HTTP/Status/408",
      },
    ],
  },
  {
    codigo: 422,
    tipo: { es: "Cliente", en: "Client", ru: "Клиент" },
    titulo: {
      es: "Unprocessable Entity - Entidad no procesable",
      en: "Unprocessable Entity",
      ru: "Unprocessable Entity - Необрабатываемая сущность",
    },
    descripcion: {
      es: "La solicitud está bien formada pero tiene errores semánticos que impiden su procesamiento.",
      en: "The request is well-formed but has semantic errors that prevent it from being processed.",
      ru: "Запрос сформирован правильно, но содержит семантические ошибки, препятствующие его обработке.",
    },
    solucion: {
      es: "Validar datos de entrada. Implementar validación semántica. Proporcionar mensajes de error claros.",
      en: "Validate input data. Implement semantic validation. Provide clear error messages.",
      ru: "Проверяйте входные данные. Реализуйте семантическую валидацию. Предоставляйте чёткие сообщения об ошибках.",
    },
    impacto: {
      es: "Alto - Afecta la integridad de datos",
      en: "High - Affects data integrity",
      ru: "Высокий - Влияет на целостность данных",
    },
    preventivo: {
      es: [
        "Implementar validaciones exhaustivas",
        "Separar validación sintáctica y semántica",
        "Proporcionar mensajes de error claros",
        "Validar reglas de negocio",
        "Documentar requerimientos de datos",
      ],
      en: [
        "Implement exhaustive validations",
        "Separate syntactic and semantic validation",
        "Provide clear error messages",
        "Validate business rules",
        "Document data requirements",
      ],
      ru: [
        "Внедрить исчерпывающие проверки",
        "Разделить синтаксическую и семантическую валидацию",
        "Предоставлять чёткие сообщения об ошибках",
        "Проверять бизнес-правила",
        "Документировать требования к данным",
      ],
    },
    ejemplos: {
      Python: `
  class User(BaseModel):
      email: str
      birth_date: date
  
      @validator('birth_date')
      def validate_age(cls, v):
          age = (datetime.now().date() - v).days / 365
          if age < 18:
              raise ValueError('Debe ser mayor de 18 años')
          return v`,
      Java: `
  if (errors.length > 0) {
      return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY)
          .body(Map.of("errors", errors));
  }`,
    },
    lenguajes: ["JavaScript", "Python", "Java", "PHP"],
    recursos: [
      {
        titulo: "MDN Web Docs - 422",
        url: "https://developer.mozilla.org/es/docs/Web/HTTP/Status/422",
      },
    ],
  },
  {
    codigo: 409,
    tipo: { es: "Cliente", en: "Client", ru: "Клиент" },
    titulo: {
      es: "Conflict - Conflicto",
      en: "Conflict",
      ru: "Conflict - Конфликт",
    },
    descripcion: {
      es: "La solicitud del cliente entra en conflicto con el estado actual del servidor, como un conflicto de versiones o recursos duplicados.",
      en: "The client request conflicts with the current state of the server, such as a version conflict or duplicate resources.",
      ru: "Запрос клиента конфликтует с текущим состоянием сервера, например конфликт версий или дублирование ресурсов.",
    },
    solucion: {
      es: "Implementar control de concurrencia. Manejar versiones de recursos. Detectar y resolver conflictos.",
      en: "Implement concurrency control. Handle resource versions. Detect and resolve conflicts.",
      ru: "Реализуйте управление параллелизмом. Обрабатывайте версии ресурсов. Выявляйте и разрешайте конфликты.",
    },
    impacto: {
      es: "Alto - Puede resultar en pérdida de datos",
      en: "High - Can result in data loss",
      ru: "Высокий - Может привести к потере данных",
    },
    preventivo: {
      es: [
        "Implementar control de concurrencia optimista",
        "Usar ETags y headers If-Match",
        "Mantener historial de versiones",
        "Implementar mecanismo de merge",
        "Proporcionar feedback claro al usuario",
      ],
      en: [
        "Implement optimistic concurrency control",
        "Use ETags and If-Match headers",
        "Maintain version history",
        "Implement merge mechanism",
        "Provide clear user feedback",
      ],
      ru: [
        "Внедрить оптимистичный контроль параллелизма",
        "Использовать ETags и заголовки If-Match",
        "Вести историю версий",
        "Реализовать механизм слияния",
        "Предоставлять чёткую обратную связь пользователю",
      ],
    },
    ejemplos: {
      JavaScript: `
  if (response.status === 409) {
    const currentDoc = await this.loadDocument();
    throw new Error('Conflicto de versiones. El documento ha sido modificado.');
  }`,
      Python: `
  if if_match and if_match != doc.version:
      raise HTTPException(status_code=409,
          detail={"error": "Conflicto de versiones",
                  "current_version": doc.version})`,
    },
    lenguajes: ["JavaScript", "Python", "Java", "Go"],
    recursos: [
      {
        titulo: "MDN Web Docs - 409",
        url: "https://developer.mozilla.org/es/docs/Web/HTTP/Status/409",
      },
    ],
  },
  {
    codigo: 410,
    tipo: { es: "Cliente", en: "Client", ru: "Клиент" },
    titulo: {
      es: "Gone - Ya no disponible",
      en: "Gone",
      ru: "Gone - Ресурс удалён",
    },
    descripcion: {
      es: "El recurso solicitado ya no está disponible en el servidor y no se conoce dirección de reenvío. Esta condición es permanente.",
      en: "The requested resource is no longer available on the server and no forwarding address is known. This condition is permanent.",
      ru: "Запрошенный ресурс больше недоступен на сервере и адрес переадресации неизвестен. Это состояние является постоянным.",
    },
    solucion: {
      es: "Mantener registro de recursos eliminados. Implementar redirecciones permanentes cuando sea posible.",
      en: "Maintain a record of deleted resources. Implement permanent redirects when possible.",
      ru: "Ведите учёт удалённых ресурсов. Реализуйте постоянные перенаправления при возможности.",
    },
    impacto: {
      es: "Medio - Afecta acceso a recursos históricos",
      en: "Medium - Affects access to historical resources",
      ru: "Средний - Влияет на доступ к историческим ресурсам",
    },
    preventivo: {
      es: [
        "Mantener registro histórico de recursos eliminados",
        "Implementar redirecciones cuando sea posible",
        "Documentar razones de eliminación",
        "Proporcionar alternativas cuando existan",
      ],
      en: [
        "Maintain historical record of deleted resources",
        "Implement redirects when possible",
        "Document reasons for deletion",
        "Provide alternatives when available",
      ],
      ru: [
        "Вести исторический учёт удалённых ресурсов",
        "Реализовать перенаправления при возможности",
        "Документировать причины удаления",
        "Предоставлять альтернативы при наличии",
      ],
    },
    ejemplos: {
      Express: `
  if (removedResources.has(resourceId)) {
    return res.status(410).json({
      error: 'Recurso no disponible permanentemente',
      removed_at: info.timestamp
    });
  }`,
      Python: `
  if resource_id in removed_resources:
      raise HTTPException(status_code=410,
          detail={"error": "Recurso eliminado permanentemente"})`,
    },
    lenguajes: ["JavaScript", "Python", "Java", "PHP"],
    recursos: [
      {
        titulo: "MDN Web Docs - 410",
        url: "https://developer.mozilla.org/es/docs/Web/HTTP/Status/410",
      },
    ],
  },
  {
    codigo: 418,
    tipo: { es: "Cliente", en: "Client", ru: "Клиент" },
    titulo: {
      es: "I'm a teapot - Soy una tetera",
      en: "I'm a teapot",
      ru: "I'm a teapot - Я чайник",
    },
    descripcion: {
      es: "Este código es un error de broma del 1 de abril. Indica que el servidor se niega a preparar café porque es una tetera.",
      en: "This code is an April Fool's joke error. It indicates that the server refuses to brew coffee because it is a teapot.",
      ru: "Этот код — первоапрельская шутка. Указывает на то, что сервер отказывается варить кофе, потому что он чайник.",
    },
    solucion: {
      es: "Usado principalmente como huevo de pascua o para errores personalizados creativos.",
      en: "Mainly used as an Easter egg or for creative custom errors.",
      ru: "Используется преимущественно как пасхалка или для творческих нестандартных ошибок.",
    },
    impacto: {
      es: "Bajo - Error no estándar/creativo",
      en: "Low - Non-standard/creative error",
      ru: "Низкий - Нестандартная/творческая ошибка",
    },
    preventivo: {
      es: [
        "Usar creativamente para errores personalizados",
        "Mantener profesionalismo",
        "Considerar el contexto de uso",
      ],
      en: [
        "Use creatively for custom errors",
        "Maintain professionalism",
        "Consider the context of use",
      ],
      ru: [
        "Использовать творчески для нестандартных ошибок",
        "Соблюдать профессионализм",
        "Учитывать контекст использования",
      ],
    },
    ejemplos: {
      Express: `
  app.get('/coffee', (req, res) => {
    res.status(418).json({
      error: "I'm a teapot",
      message: "Este servidor solo sirve té"
    });
  });`,
      Python: `
  @app.get("/brew/coffee")
  async def brew_coffee():
      raise HTTPException(status_code=418,
          detail="I'm a teapot - No puedo preparar café")`,
    },
    lenguajes: ["JavaScript", "Python", "PHP", "Ruby"],
    recursos: [
      {
        titulo: "MDN Web Docs - 418",
        url: "https://developer.mozilla.org/es/docs/Web/HTTP/Status/418",
      },
    ],
  },
  {
    codigo: 451,
    tipo: { es: "Cliente", en: "Client", ru: "Клиент" },
    titulo: {
      es: "Unavailable For Legal Reasons - No disponible por razones legales",
      en: "Unavailable For Legal Reasons",
      ru: "Unavailable For Legal Reasons - Недоступно по юридическим причинам",
    },
    descripcion: {
      es: "El recurso solicitado no está disponible debido a razones legales, como contenido bloqueado por DMCA o restricciones geográficas.",
      en: "The requested resource is not available due to legal reasons, such as DMCA-blocked content or geographic restrictions.",
      ru: "Запрошенный ресурс недоступен по юридическим причинам, например заблокирован по DMCA или из-за географических ограничений.",
    },
    solucion: {
      es: "Implementar sistema de bloqueo geográfico. Mantener registro de contenido restringido. Proporcionar información legal.",
      en: "Implement geographic blocking system. Maintain restricted content registry. Provide legal information.",
      ru: "Реализуйте систему географической блокировки. Ведите реестр ограниченного контента. Предоставляйте юридическую информацию.",
    },
    impacto: {
      es: "Alto - Implicaciones legales y de cumplimiento",
      en: "High - Legal and compliance implications",
      ru: "Высокий - Юридические последствия и вопросы соответствия",
    },
    preventivo: {
      es: [
        "Mantener base de datos de restricciones actualizada",
        "Implementar geolocalización robusta",
        "Documentar razones legales",
        "Mantener registros de bloqueos",
      ],
      en: [
        "Keep restrictions database updated",
        "Implement robust geolocation",
        "Document legal reasons",
        "Maintain blocking records",
      ],
      ru: [
        "Поддерживать актуальную базу данных ограничений",
        "Реализовать надёжную геолокацию",
        "Документировать юридические причины",
        "Вести записи о блокировках",
      ],
    },
    ejemplos: {
      Python: `
  if country_code in restriction['restricted_regions']:
      raise HTTPException(status_code=451,
          detail={"error": "Contenido no disponible",
                  "reason": restriction['legal_reason']})`,
    },
    lenguajes: ["Python", "JavaScript", "PHP", "Java"],
    recursos: [
      {
        titulo: "MDN Web Docs - 451",
        url: "https://developer.mozilla.org/es/docs/Web/HTTP/Status/451",
      },
    ],
  },
];
