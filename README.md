```
└── 📁src                    // Raíz del frontend
    │
    ├── 📁assets            // Recursos estáticos, imágenes, iconos...
    │
    ├── 📁components        // Componentes reutilizables y presentacionales (sin lógica de negocio)
    │   └── 📁common
    │       ├── 📁Layout    // Layout general de la app
    │       │   ├── Layout.css
    │       │   ├── SideBar.jsx
    │       │   └── TopBar.jsx
    │       └── 📁UI        // UI genérica (botones, tarjetas, etc.)
    │           ├── Button.jsx
    │           ├── Card.jsx
    │           └── Spinner.jsx
    │
    ├── 📁features          // Dominios funcionales separados
    │   ├── 📁auth
    │   │   ├── 📁components
    │   │   │   ├── Form.css
    │   │   │   ├── LoginForm.jsx
    │   │   │   └── RegisterForm.jsx
    │   │   ├── 📁pages     // Vistas completas
    │   │   │   ├── LoginPage.jsx
    │   │   │   └── RegisterPage.jsx
    │   │   ├── authSlice.js //estado + reducer + acciones
    │   │   └── authService.js
    │   └──📁calendar
    ├── 📁store             // Configuración global de Redux Toolkit
    │   └── store.js
    ├── 📁styles             // Configuración global de estilos css
    │
    ├── 📁hooks             // Hooks personalizados
    │   └── useAuth.js
    │
    ├── 📁routes            // Rutas de navegación (React Router)
    │   └── AppRouter.jsx
    │
    ├── 📁utils             // Funciones generales de utilidad
    │   └── api.js          // Axios o configuración de endpoints
    │
    ├── App.jsx            // Componente raíz de la aplicación
    ├── main.jsx           // Punto de entrada principal (ReactDOM)
    ├── index.css          // Estilos base del proyecto
    └── App.css            // Estilos globales específicos del componente App
```