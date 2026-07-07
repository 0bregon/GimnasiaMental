// ================================
// CONFIGURACIÓN DE SUPABASE
// ================================

// Reemplaza estos datos por los de tu proyecto
const SUPABASE_URL = "https://wrfflsfwazrkywknhnak.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyZmZsc2Z3YXpya3l3a25obmFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0MzgzNDMsImV4cCI6MjA5OTAxNDM0M30.4EjK77x_t8Hhd7Y8ENRtsjIB7p4JdKYIq1eHxtDkv-I";

// Crear conexión
const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

// Cantidad máxima de citas por día
const MAX_CITAS_DIA = 10;

// Horarios disponibles
const HORARIOS = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00"
];
